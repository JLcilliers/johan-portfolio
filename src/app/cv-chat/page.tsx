'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, Bot, User, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import type { ChatMessage } from '@/types'

const suggestedPrompts = [
  'What roles is Johan best suited for?',
  "Summarize Johan's AI automation work",
  "What's his experience across regions?",
  'What tools and technologies does he use?',
  'Describe his leadership experience',
  'What industries has he worked in?',
]

export default function CVChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.content, sources: data.sources },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again or email Johan directly.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-600/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">CV Chat</h1>
              <p className="text-sm text-zinc-400">Ask questions about Johan&apos;s experience and background</p>
            </div>
          </div>
        </motion.div>

        <Card className="mt-8 flex flex-col h-[calc(100vh-16rem)] max-h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 && (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <Bot className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-lg font-semibold text-white mb-2">
                    Ask me anything about Johan&apos;s CV
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    I can answer questions about his experience, skills, projects, and background using his indexed CV data.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 mb-3">Suggested questions:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {suggestedPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="text-left text-sm px-4 py-3 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-blue-400" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-800 text-zinc-200'
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-zinc-700">
                      <p className="text-xs font-semibold text-zinc-500 mb-1">Sources:</p>
                      {msg.sources.map((s, j) => (
                        <p key={j} className="text-xs text-zinc-500 leading-relaxed">
                          [{s.id}] &ldquo;{s.excerpt}&rdquo;
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center">
                    <User className="h-4 w-4 text-zinc-300" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-blue-400" />
                </div>
                <div className="bg-zinc-800 rounded-xl px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-zinc-800">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex gap-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Johan's experience, skills, or background..."
                className="flex-1"
                disabled={loading}
              />
              <Button type="submit" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
                Send
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
