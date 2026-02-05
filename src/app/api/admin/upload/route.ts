import { NextRequest, NextResponse } from 'next/server'
import { embedAndStore } from '@/lib/embeddings'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const token = formData.get('token') as string
    const file = formData.get('file') as File | null

    // Auth check
    if (!token || token !== process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Check file type
    if (!file.name.endsWith('.pdf')) {
      return NextResponse.json({ error: 'Only PDF files are supported' }, { status: 400 })
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large (max 10MB)' }, { status: 400 })
    }

    // Check if OpenAI key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-placeholder') {
      return NextResponse.json(
        { error: 'OpenAI API key not configured. Add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      )
    }

    // Read file buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Extract text from PDF
    let text: string
    try {
      const { PDFParse } = await import('pdf-parse')
      const parser = new PDFParse({ data: new Uint8Array(buffer), verbosity: 0 })
      const data = await parser.getText()
      text = data.pages.map((p: { text: string }) => p.text).join('\n')
    } catch (e) {
      console.error('PDF parse error:', e)
      return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 })
    }

    if (!text || text.trim().length < 100) {
      return NextResponse.json(
        { error: 'Could not extract sufficient text from the PDF. The file may be scanned/image-based.' },
        { status: 400 }
      )
    }

    // Chunk and embed
    const result = await embedAndStore(text)

    return NextResponse.json({
      success: true,
      chunks: result.chunks,
      tokens: result.tokens,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
