'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Zap, BarChart3, Code2, Users, Brain } from 'lucide-react'
import { Hero } from '@/components/sections/hero'
import { ProofPoints } from '@/components/sections/proof-points'
import { CaseStudyCard } from '@/components/sections/case-study-card'
import { TechnicalToggle } from '@/components/sections/technical-toggle'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CompanyLogo } from '@/components/ui/company-logo'
import { profile } from '@/content/profile'
import { caseStudies } from '@/content/caseStudies'
import { products } from '@/content/products'

const capabilityIcons: Record<string, React.ElementType> = {
  'SEO Strategy & Execution': BarChart3,
  'AI & Automation': Brain,
  'Analytics & Measurement': Zap,
  'Development & Tooling': Code2,
  'Leadership & Strategy': Users,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofPoints />

      {/* Products I Built */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Products I Built</h2>
              <p className="mt-2 text-zinc-400">Full-stack applications designed, built, and shipped.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card className="h-full hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <CompanyLogo domain={product.domain} company={product.name} size={28} />
                        <CardTitle className="group-hover:text-blue-400 transition-colors">{product.name}</CardTitle>
                      </div>
                      <CardDescription>{product.tagline}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-400 mb-4">{product.description.slice(0, 200)}...</p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </span>
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Visit
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Case Studies */}
      <Section className="bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Case Studies</h2>
              <p className="mt-2 text-zinc-400">Results-driven SEO and digital marketing work.</p>
            </div>
            <Link href="/work" className="hidden sm:flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.slice(0, 4).map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[cap.title] || Zap
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Card className="h-full hover:border-zinc-700 transition-all duration-300">
                    <CardHeader>
                      <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">{cap.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-400">{cap.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Interactive Preview: Toggle + Chat Teaser */}
      <Section className="bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Explore Interactive Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Toggle Preview */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Case Study Technical Toggle</CardTitle>
                <CardDescription>Switch between marketing and engineering perspectives on every case study.</CardDescription>
              </CardHeader>
              <CardContent>
                <TechnicalToggle
                  compact
                  marketingContent={
                    <div className="space-y-3 p-4 rounded-lg bg-zinc-800/50">
                      <h4 className="font-semibold text-white text-sm">Marketing View</h4>
                      <p className="text-sm text-zinc-400">See executive narratives, business outcomes, KPIs, and strategic context for each project.</p>
                      <Link href="/work" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                        Explore case studies <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  }
                  engineeringContent={
                    <div className="space-y-3 p-4 rounded-lg bg-zinc-800/50">
                      <h4 className="font-semibold text-white text-sm">Engineering View</h4>
                      <p className="text-sm text-zinc-400">Dive into technical architecture, implementation details, code decisions, and measurement approaches.</p>
                      <Link href="/work" className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
                        See the technical details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  }
                />
              </CardContent>
            </Card>

            {/* CV Chat Teaser */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>CV Chatbot</CardTitle>
                <CardDescription>Ask questions about Johan&apos;s experience, skills, and background — powered by AI.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 p-4 rounded-lg bg-zinc-800/50">
                  <p className="text-sm text-zinc-400">Try asking:</p>
                  <div className="space-y-2">
                    {['What roles is Johan best suited for?', "Summarize Johan's AI work", 'What regions has he worked in?'].map((q) => (
                      <div key={q} className="text-xs px-3 py-2 rounded-lg border border-zinc-700 text-zinc-400">
                        &ldquo;{q}&rdquo;
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/cv-chat">Open full chat</Link>
                    </Button>
                    <p className="text-xs text-zinc-500 self-center">or click the chat icon in the bottom-right corner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
