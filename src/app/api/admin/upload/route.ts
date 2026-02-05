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

    // Read file buffer
    const buffer = Buffer.from(await file.arrayBuffer())

    // Extract text from PDF
    let text: string
    try {
      const { extractText } = await import('unpdf')
      const { text: pages } = await extractText(new Uint8Array(buffer))
      text = pages.join('\n')
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
    let result: { chunks: number; tokens: number }
    try {
      result = await embedAndStore(text)
    } catch (e) {
      console.error('Embedding error:', e)
      return NextResponse.json({ error: `Embedding failed: ${e instanceof Error ? e.message : String(e)}` }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      chunks: result.chunks,
      tokens: result.tokens,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: `Internal server error: ${error instanceof Error ? error.message : String(error)}` }, { status: 500 })
  }
}
