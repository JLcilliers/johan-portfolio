import { kvGet, kvSet, type CVChunk, type CVEmbedding } from './kv'

export function chunkText(text: string, chunkSize = 800, overlap = 100): string[] {
  const chunks: string[] = []
  let start = 0
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length)
    chunks.push(text.slice(start, end).trim())
    start += chunkSize - overlap
  }
  return chunks.filter(c => c.length > 50)
}

export async function embedText(text: string): Promise<number[]> {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-embedding-3-small',
      input: text,
    }),
  })
  const data = await res.json()
  return data.data[0].embedding
}

export async function embedAndStore(text: string): Promise<{ chunks: number; tokens: number }> {
  const rawChunks = chunkText(text)
  const chunks: CVChunk[] = rawChunks.map((text, i) => ({
    id: `chunk-${i}`,
    text,
    meta: { index: String(i) },
  }))

  const embeddings: CVEmbedding[] = []
  for (const chunk of chunks) {
    const embedding = await embedText(chunk.text)
    embeddings.push({ id: chunk.id, embedding })
  }

  await kvSet('cv:chunks', chunks)
  await kvSet('cv:embeddings', embeddings)

  const estimatedTokens = Math.ceil(text.length / 4)
  return { chunks: chunks.length, tokens: estimatedTokens }
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

export async function searchChunks(query: string, topK = 5): Promise<CVChunk[]> {
  const chunks = await kvGet<CVChunk[]>('cv:chunks')
  const embeddings = await kvGet<CVEmbedding[]>('cv:embeddings')

  if (!chunks || !embeddings || chunks.length === 0) return []

  const queryEmbedding = await embedText(query)

  const scored = embeddings.map((emb, i) => ({
    score: cosineSimilarity(queryEmbedding, emb.embedding),
    chunk: chunks[i],
  }))

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK).map(s => s.chunk)
}
