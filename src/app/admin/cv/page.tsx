'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, RefreshCw, CheckCircle, AlertCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function AdminCVPage() {
  const [token, setToken] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; chunks?: number; tokens?: number; error?: string } | null>(null)

  const authenticate = () => {
    if (token.trim()) {
      setAuthenticated(true)
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('token', token)

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()
      if (res.ok) {
        setResult({ success: true, chunks: data.chunks, tokens: data.tokens })
      } else {
        setResult({ success: false, error: data.error || 'Upload failed' })
      }
    } catch {
      setResult({ success: false, error: 'Network error' })
    } finally {
      setLoading(false)
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-blue-400" />
            </div>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter your admin token to manage CV data.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Admin token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && authenticate()}
            />
            <Button onClick={authenticate} className="w-full" disabled={!token.trim()}>
              Authenticate
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-2xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-white mb-2">CV Management</h1>
          <p className="text-zinc-400 mb-8">Upload your CV to power the AI chatbot. The text is extracted, chunked, and embedded for semantic search.</p>

          <Card>
            <CardHeader>
              <CardTitle>Upload CV</CardTitle>
              <CardDescription>Accepts PDF files. Text will be extracted server-side.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* File input */}
              <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center hover:border-zinc-600 transition-colors">
                <Upload className="h-8 w-8 text-zinc-500 mx-auto mb-3" />
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
                />
                {file && (
                  <p className="mt-2 text-sm text-zinc-400">{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button onClick={handleUpload} disabled={!file || loading} className="flex-1">
                  {loading ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" /> Upload & Index
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={handleUpload} disabled={!file || loading}>
                  <RefreshCw className="h-4 w-4" /> Re-index
                </Button>
              </div>

              {/* Result */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg border ${
                    result.success
                      ? 'bg-emerald-600/10 border-emerald-600/30'
                      : 'bg-red-600/10 border-red-600/30'
                  }`}
                >
                  {result.success ? (
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-emerald-400">Indexed successfully</p>
                        <p className="text-sm text-zinc-400 mt-1">
                          {result.chunks} chunks created, ~{result.tokens?.toLocaleString()} tokens estimated
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-400">Error</p>
                        <p className="text-sm text-zinc-400 mt-1">{result.error}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              <p className="text-xs text-zinc-600">
                The uploaded file is never exposed publicly. Only extracted text chunks and embeddings are stored.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
