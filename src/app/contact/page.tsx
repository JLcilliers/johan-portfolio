'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { profile } from '@/content/profile'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // mailto fallback
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Get in Touch</h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              Let&apos;s discuss how I can help with your SEO, AI automation, or digital marketing needs.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Direct contact */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Direct Contact</h2>
              <p className="text-zinc-400">The fastest way to reach me is via email or LinkedIn.</p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group"
                >
                  <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-zinc-400">{profile.email}</p>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group"
                >
                  <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">LinkedIn</p>
                    <p className="text-sm text-zinc-400">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                    <p className="text-white font-medium">Your email client should have opened.</p>
                    <p className="text-sm text-zinc-400 mt-2">If it didn&apos;t, email me directly at {profile.email}</p>
                    <Button variant="outline" size="sm" className="mt-4" onClick={() => setSubmitted(false)}>
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Name
                      </label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1.5">
                        Message
                      </label>
                      <Textarea id="message" name="message" required placeholder="Tell me about your project..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4" /> Send message
                    </Button>
                    <p className="text-xs text-zinc-600 text-center">
                      This opens your email client. No data is stored on this site.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
