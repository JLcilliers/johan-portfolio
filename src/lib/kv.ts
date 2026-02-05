// Lightweight KV abstraction
// In production with Vercel KV, replace with @vercel/kv
// For local dev, uses in-memory store

interface CVChunk {
  id: string
  text: string
  meta: Record<string, string>
}

// In-memory store for local development
const memoryStore: Record<string, unknown> = {}

export async function kvGet<T>(key: string): Promise<T | null> {
  if (process.env.KV_REST_API_URL) {
    try {
      const res = await fetch(`${process.env.KV_REST_API_URL}/get/${key}`, {
        headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
      })
      const data = await res.json()
      return data.result ? JSON.parse(data.result) : null
    } catch {
      return null
    }
  }
  return (memoryStore[key] as T) ?? null
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  if (process.env.KV_REST_API_URL) {
    await fetch(`${process.env.KV_REST_API_URL}/set/${key}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSON.stringify(value)),
    })
    return
  }
  memoryStore[key] = value
}

export type { CVChunk }
