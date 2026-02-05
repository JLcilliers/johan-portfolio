'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Mail, Linkedin, ArrowRight, Layers, Database, Cpu, Shield } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CompanyLogo } from '@/components/ui/company-logo'
import { TechnicalToggle } from '@/components/sections/technical-toggle'
import { Section } from '@/components/ui/section'
import { profile } from '@/content/profile'
import type { Product } from '@/types'

const flowIcons = [Layers, Database, Cpu, Shield]

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-4 mb-6">
              <CompanyLogo domain={product.domain} company={product.name} size={48} />
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white">{product.name}</h1>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-1"
                >
                  {product.domain} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <p className="text-xl text-zinc-400 max-w-3xl">{product.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <Section className="pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">What it does</h2>
                <p className="text-zinc-300 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">How it works</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">{product.howItWorks}</p>
                {/* Data Flow visual */}
                <Card>
                  <CardContent className="py-6">
                    <h3 className="text-sm font-semibold text-zinc-300 mb-4">Data Flow</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      {['Input', 'Process', 'Output', 'Safeguards'].map((step, i) => {
                        const Icon = flowIcons[i]
                        return (
                          <div key={step} className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700">
                              <Icon className="h-4 w-4 text-blue-400" />
                              <span className="text-sm text-zinc-300">{step}</span>
                            </div>
                            {i < 3 && <ArrowRight className="h-4 w-4 text-zinc-600" />}
                          </div>
                        )
                      })}
                    </div>
                    <p className="mt-3 text-xs text-zinc-500">{product.engineeringView.dataFlow}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Who it&apos;s for</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">{product.whoItsFor}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Example Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {product.exampleMetrics.map((m) => (
                    <div key={m.label} className="flex justify-between text-sm">
                      <span className="text-zinc-500">{m.label}</span>
                      <span className="font-semibold text-emerald-400">{m.value}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-zinc-600 italic">Example metrics (replace with verified numbers)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800"
              >
                <span className="text-blue-400 mt-0.5">&bull;</span>
                <span className="text-sm text-zinc-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Toggle */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Under the Hood</h2>
          <TechnicalToggle
            marketingContent={
              <div className="space-y-6">
                <Card>
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-white mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {product.features.slice(0, 6).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-emerald-400 mt-0.5">&check;</span> {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-white mb-3">Performance Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {product.exampleMetrics.map((m) => (
                        <div key={m.label} className="text-center p-4 rounded-lg bg-zinc-800/50">
                          <p className="text-2xl font-bold text-emerald-400">{m.value}</p>
                          <p className="text-xs text-zinc-500 mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-zinc-600 italic text-center mt-3">Example metrics (replace with verified numbers)</p>
                  </CardContent>
                </Card>
              </div>
            }
            engineeringContent={
              <div className="space-y-6">
                <Card>
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.engineeringView.stack.map((tech) => (
                        <Badge key={tech} variant="technical">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-white mb-3">Architecture</h3>
                    <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 font-mono text-sm text-zinc-300 whitespace-pre-wrap">
                      {product.engineeringView.architecture}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="py-6">
                    <h3 className="font-semibold text-white mb-3">Data Flow</h3>
                    <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 font-mono text-sm text-zinc-300 whitespace-pre-wrap">
                      {product.engineeringView.dataFlow}
                    </div>
                  </CardContent>
                </Card>
              </div>
            }
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in this product?</h2>
          <p className="text-zinc-400 mb-6">Let&apos;s discuss how it can help your team.</p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" /> Email me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
