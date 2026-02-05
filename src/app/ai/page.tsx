'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Zap, BarChart3, Bot, ChevronRight, Shield, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'
import { aiLabItems } from '@/content/aiLab'

const iconMap: Record<string, React.ElementType> = {
  'ai-citation-tracking': Brain,
  'ai-content-gap': Zap,
  'automated-reporting': BarChart3,
  'ai-agents': Bot,
}

export default function AILabPage() {
  const [selectedId, setSelectedId] = useState<string>(aiLabItems[0].id)
  const selected = aiLabItems.find((item) => item.id === selectedId) || aiLabItems[0]

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">AI Lab</h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              AI systems and automation workflows I&apos;ve designed and built — from citation tracking to intelligent agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Systems overview */}
      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {aiLabItems.map((item, i) => {
              const Icon = iconMap[item.id] || Brain
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:border-zinc-700 transition-all duration-300">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-purple-600/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Automation Gallery */}
          <h2 className="text-3xl font-bold text-white mb-8">Automation Gallery</h2>
          <p className="text-zinc-400 mb-8">Select an automation to explore its triggers, logic, outputs, and safeguards.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Selector */}
            <div className="space-y-2">
              {aiLabItems.map((item) => {
                const Icon = iconMap[item.id] || Brain
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                      selectedId === item.id
                        ? 'bg-purple-600/10 border border-purple-600/30 text-white'
                        : 'bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium flex-1">{item.title}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${selectedId === item.id ? 'rotate-90' : ''}`} />
                  </button>
                )
              })}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{selected.title}</CardTitle>
                      <CardDescription>{selected.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {selected.triggers && selected.triggers.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-yellow-400" /> Triggers
                          </h4>
                          <ul className="space-y-1">
                            {selected.triggers.map((t) => (
                              <li key={t} className="flex items-start gap-2 text-sm text-zinc-400">
                                <ArrowRight className="h-3 w-3 mt-1 text-yellow-400 flex-shrink-0" /> {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selected.logic && selected.logic.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
                            <Brain className="h-4 w-4 text-purple-400" /> Logic
                          </h4>
                          <ul className="space-y-1">
                            {selected.logic.map((l) => (
                              <li key={l} className="flex items-start gap-2 text-sm text-zinc-400">
                                <ArrowRight className="h-3 w-3 mt-1 text-purple-400 flex-shrink-0" /> {l}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selected.outputs && selected.outputs.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-emerald-400" /> Outputs
                          </h4>
                          <ul className="space-y-1">
                            {selected.outputs.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-sm text-zinc-400">
                                <ArrowRight className="h-3 w-3 mt-1 text-emerald-400 flex-shrink-0" /> {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selected.safeguards && selected.safeguards.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-blue-400" /> Safeguards
                          </h4>
                          <ul className="space-y-1">
                            {selected.safeguards.map((s) => (
                              <li key={s} className="flex items-start gap-2 text-sm text-zinc-400">
                                <ArrowRight className="h-3 w-3 mt-1 text-blue-400 flex-shrink-0" /> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                        <Badge variant="ai">AI</Badge>
                        <Badge variant="technical">Automation</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
