import { NextRequest, NextResponse } from 'next/server'
import { searchChunks } from '@/lib/embeddings'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    if (!lastMessage?.content) {
      return NextResponse.json({ error: 'Empty message' }, { status: 400 })
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-placeholder') {
      return NextResponse.json({
        content: "The CV chatbot is not yet configured. To enable it, add your OpenAI API key to the environment variables and upload a CV through the admin panel at /admin/cv. For now, you can learn about Johan's experience by browsing the case studies, products, and about pages on this site.",
        sources: [],
      })
    }

    // Search for relevant chunks
    const chunks = await searchChunks(lastMessage.content, 5)

    if (chunks.length === 0) {
      return NextResponse.json({
        content: "I don't have CV data indexed yet. Please ask the site owner to upload their CV through the admin panel. In the meantime, you can explore Johan's work through the case studies and about pages.",
        sources: [],
      })
    }

    // Build context from chunks
    const context = chunks
      .map((c) => `[${c.id}]: ${c.text}`)
      .join('\n\n')

    // Call OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant that answers questions about Johan Cilliers based ONLY on the provided CV context.

Rules:
1. Only answer using information from the provided sources.
2. If the answer is not in the sources, say "I don't have that information in the indexed CV data" and suggest what topics the user could ask about instead.
3. Be concise and professional.
4. Reference source IDs when making claims.
5. Do not make up or infer information not present in the sources.

Context from CV:
${context}`,
          },
          ...messages.slice(-5).map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errBody = await response.text()
      console.error('OpenAI chat error:', response.status, errBody)
      // Fallback: return the most relevant chunk content directly
      const summary = chunks
        .slice(0, 3)
        .map((c) => c.text.replace(/\n+/g, ' ').trim())
        .join('\n\n')
      return NextResponse.json({
        content: `Here's what I found in Johan's CV:\n\n${summary}`,
        sources: chunks.slice(0, 3).map((c) => ({
          id: c.id,
          excerpt: c.text.slice(0, 80) + '...',
        })),
      })
    }

    const data = await response.json()
    const assistantMessage = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'

    // Build sources
    const sources = chunks.slice(0, 3).map((c) => ({
      id: c.id,
      excerpt: c.text.slice(0, 80) + '...',
    }))

    return NextResponse.json({
      content: assistantMessage,
      sources,
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
