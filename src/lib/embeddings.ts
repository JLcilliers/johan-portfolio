import { kvGet, kvSet, type CVChunk } from './kv'

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

// Simple tokenizer: lowercase, split on non-alphanumeric, remove stopwords
function tokenize(text: string): string[] {
  const stopwords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'is', 'was', 'are', 'were', 'be', 'been',
    'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
    'could', 'should', 'may', 'might', 'shall', 'can', 'this', 'that',
    'these', 'those', 'i', 'me', 'my', 'we', 'our', 'you', 'your', 'he',
    'she', 'it', 'they', 'them', 'their', 'what', 'which', 'who', 'whom',
    'so', 'than', 'too', 'very', 'just', 'about', 'above', 'after', 'before',
    'between', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
    'no', 'not', 'only', 'same', 'into', 'over', 'under', 'again', 'then',
    'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any',
    'as', 'if',
  ])
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(t => t.length > 1 && !stopwords.has(t))
}

// BM25 scoring for keyword-based retrieval (no API needed)
function bm25Score(
  queryTokens: string[],
  docTokens: string[],
  avgDocLen: number,
  docCount: number,
  docFreqs: Map<string, number>,
): number {
  const k1 = 1.5
  const b = 0.75
  const docLen = docTokens.length

  const tf = new Map<string, number>()
  for (const t of docTokens) {
    tf.set(t, (tf.get(t) || 0) + 1)
  }

  let score = 0
  for (const qt of queryTokens) {
    const termFreq = tf.get(qt) || 0
    if (termFreq === 0) continue

    const df = docFreqs.get(qt) || 0
    const idf = Math.log((docCount - df + 0.5) / (df + 0.5) + 1)
    const tfNorm = (termFreq * (k1 + 1)) / (termFreq + k1 * (1 - b + b * docLen / avgDocLen))
    score += idf * tfNorm
  }

  return score
}

export async function embedAndStore(text: string): Promise<{ chunks: number; tokens: number }> {
  const rawChunks = chunkText(text)
  const chunks: CVChunk[] = rawChunks.map((text, i) => ({
    id: `chunk-${i}`,
    text,
    meta: { index: String(i) },
  }))

  await kvSet('cv:chunks', chunks)

  const estimatedTokens = Math.ceil(text.length / 4)
  return { chunks: chunks.length, tokens: estimatedTokens }
}

export async function searchChunks(query: string, topK = 5): Promise<CVChunk[]> {
  const chunks = await kvGet<CVChunk[]>('cv:chunks')

  if (!chunks || chunks.length === 0) return []

  const queryTokens = tokenize(query)
  if (queryTokens.length === 0) return chunks.slice(0, topK)

  // Tokenize all documents
  const docTokensList = chunks.map(c => tokenize(c.text))
  const avgDocLen = docTokensList.reduce((sum, d) => sum + d.length, 0) / docTokensList.length

  // Compute document frequencies
  const docFreqs = new Map<string, number>()
  for (const docTokens of docTokensList) {
    const unique = new Set(docTokens)
    for (const t of unique) {
      docFreqs.set(t, (docFreqs.get(t) || 0) + 1)
    }
  }

  // Score each chunk using BM25
  const scored = chunks.map((chunk, i) => ({
    score: bm25Score(queryTokens, docTokensList[i], avgDocLen, chunks.length, docFreqs),
    chunk,
  }))

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK).map(s => s.chunk)
}
