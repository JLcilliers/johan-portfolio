'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Linkedin,
  Lightbulb,
  FileText,
  ChevronRight,
  TrendingUp,
  Wrench,
  BarChart3,
  Target,
  Layers,
} from 'lucide-react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CompanyLogo } from '@/components/ui/company-logo'
import { TechnicalToggle } from '@/components/sections/technical-toggle'
import { cn } from '@/lib/utils'
import { profile } from '@/content/profile'
import type { CaseStudy, Tag } from '@/types'

/* -------------------------------------------------------------------------- */
/*  Example chart data                                                        */
/* -------------------------------------------------------------------------- */

const exampleChartData = [
  { month: 'Jan', sessions: 2400 },
  { month: 'Feb', sessions: 2800 },
  { month: 'Mar', sessions: 3100 },
  { month: 'Apr', sessions: 3000 },
  { month: 'May', sessions: 3600 },
  { month: 'Jun', sessions: 4100 },
  { month: 'Jul', sessions: 4500 },
  { month: 'Aug', sessions: 4800 },
  { month: 'Sep', sessions: 5200 },
  { month: 'Oct', sessions: 5600 },
  { month: 'Nov', sessions: 6100 },
  { month: 'Dec', sessions: 6800 },
]

/* -------------------------------------------------------------------------- */
/*  Tag variant helper                                                        */
/* -------------------------------------------------------------------------- */

function getTagVariant(
  category: Tag['category']
): 'seo' | 'ai' | 'technical' | 'analytics' | 'cro' | 'leadership' | 'secondary' {
  const map: Record<
    Tag['category'],
    'seo' | 'ai' | 'technical' | 'analytics' | 'cro' | 'leadership' | 'secondary'
  > = {
    SEO: 'seo',
    AI: 'ai',
    Technical: 'technical',
    Analytics: 'analytics',
    CRO: 'cro',
    Leadership: 'leadership',
    Industry: 'secondary',
  }
  return map[category] || 'secondary'
}

/* -------------------------------------------------------------------------- */
/*  STEAR section icons                                                       */
/* -------------------------------------------------------------------------- */

const stearIcons = {
  situation: Target,
  techStack: Wrench,
  execution: Layers,
  analytics: BarChart3,
  result: TrendingUp,
}

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface CaseStudyDetailProps {
  study: CaseStudy
  prev: CaseStudy | null
  next: CaseStudy | null
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function CaseStudyDetail({ study, prev, next }: CaseStudyDetailProps) {
  return (
    <div className="min-h-screen">
      {/* ------------------------------------------------------------------ */}
      {/*  Hero / Header                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>
          </motion.div>

          {/* Company logo + title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <CompanyLogo
                domain={study.domain}
                company={study.company}
                size={48}
              />
              <div>
                <span className="text-sm text-zinc-500">{study.company}</span>
                <span className="mx-2 text-zinc-700">|</span>
                <span className="text-sm text-zinc-500">{study.industry}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {study.title}
            </h1>

            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              {study.summary}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {study.tags.map((tag) => (
              <Badge key={tag.label} variant={getTagVariant(tag.category)}>
                {tag.label}
              </Badge>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <a href={`mailto:${profile.email}`}>
              <Button>
                <Mail className="h-4 w-4" />
                Contact Johan
              </Button>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  KPI Strip                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-8 border-y border-zinc-800/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {study.kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                className="text-center sm:text-left"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {kpi.value}
                </p>
                <p className="text-sm font-medium text-zinc-300 mt-1">
                  {kpi.label}
                </p>
                {kpi.description && (
                  <p className="text-xs text-zinc-600 italic mt-0.5">
                    {kpi.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Main content: Technical Toggle (Marketing / Engineering Views)     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <TechnicalToggle
            marketingContent={
              <MarketingView study={study} />
            }
            engineeringContent={
              <EngineeringView study={study} />
            }
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  What I Would Do Next                                              */}
      {/* ------------------------------------------------------------------ */}
      {study.whatNext.length > 0 && (
        <section className="py-12 border-t border-zinc-800/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-amber-600/20">
                  <Lightbulb className="h-5 w-5 text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  What I Would Do Next
                </h2>
              </div>
              <ul className="space-y-3">
                {study.whatNext.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/*  Artifacts                                                         */}
      {/* ------------------------------------------------------------------ */}
      {study.artifacts.length > 0 && (
        <section className="py-12 border-t border-zinc-800/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-600/20">
                  <FileText className="h-5 w-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Artifacts</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.artifacts.map((artifact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <Card className="hover:border-zinc-700 transition-colors">
                      <CardContent className="p-4 flex items-center gap-3">
                        <FileText className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                        <span className="text-sm text-zinc-300">
                          {artifact}
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/*  Prev / Next Navigation                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-12 border-t border-zinc-800/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-zinc-600">Previous</p>
                  <p className="text-sm font-medium">{prev.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors text-right"
              >
                <div>
                  <p className="text-xs text-zinc-600">Next</p>
                  <p className="text-sm font-medium">{next.title}</p>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

/* ========================================================================== */
/*  Marketing View                                                            */
/* ========================================================================== */

function MarketingView({ study }: { study: CaseStudy }) {
  const view = study.marketingView
  return (
    <div className="space-y-10">
      {/* Situation */}
      <STEARSection
        icon={stearIcons.situation}
        title="Situation"
        accentColor="blue"
      >
        <p className="text-zinc-300 leading-relaxed">{view.situation}</p>
      </STEARSection>

      {/* Tech Stack */}
      <STEARSection
        icon={stearIcons.techStack}
        title="Tools & Tech Stack"
        accentColor="purple"
      >
        <div className="flex flex-wrap gap-2">
          {view.techStack.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </STEARSection>

      {/* Execution */}
      <STEARSection
        icon={stearIcons.execution}
        title="Execution"
        accentColor="green"
      >
        <ul className="space-y-3">
          {view.execution.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-600/20 text-green-400 text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-zinc-300">{step}</span>
            </li>
          ))}
        </ul>
      </STEARSection>

      {/* Analytics */}
      <STEARSection
        icon={stearIcons.analytics}
        title="Analytics & Measurement"
        accentColor="cyan"
      >
        <p className="text-zinc-300 leading-relaxed mb-6">{view.analytics}</p>

        {/* Example chart */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-zinc-400">
                Example Organic Sessions Trend
              </h4>
              <span className="text-[10px] text-zinc-600 italic">
                Illustrative data only
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={exampleChartData}
                  margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="sessionGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#3b82f6"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#71717a', fontSize: 12 }}
                    axisLine={{ stroke: '#3f3f46' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#71717a', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      borderRadius: '8px',
                      color: '#e4e4e7',
                      fontSize: '13px',
                    }}
                    labelStyle={{ color: '#a1a1aa' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="sessions"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#sessionGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </STEARSection>

      {/* Result */}
      <STEARSection
        icon={stearIcons.result}
        title="Result"
        accentColor="emerald"
      >
        <p className="text-zinc-300 leading-relaxed">{view.result}</p>
      </STEARSection>
    </div>
  )
}

/* ========================================================================== */
/*  Engineering View                                                          */
/* ========================================================================== */

function EngineeringView({ study }: { study: CaseStudy }) {
  const view = study.engineeringView
  return (
    <div className="space-y-10">
      {/* Situation */}
      <STEARSection
        icon={stearIcons.situation}
        title="Situation"
        accentColor="purple"
      >
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm">
          <span className="text-zinc-500">{'// '}</span>
          <span className="text-purple-400">Problem statement</span>
          <p className="text-zinc-300 mt-2 font-sans leading-relaxed">
            {view.situation}
          </p>
        </div>
      </STEARSection>

      {/* Tech Stack */}
      <STEARSection
        icon={stearIcons.techStack}
        title="Tech Stack"
        accentColor="orange"
      >
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm">
          <span className="text-zinc-500">{'const '}</span>
          <span className="text-blue-400">stack</span>
          <span className="text-zinc-500">{' = ['}</span>
          <div className="ml-4 mt-1 space-y-1">
            {view.techStack.map((tool, i) => (
              <div key={tool}>
                <span className="text-emerald-400">{`'${tool}'`}</span>
                {i < view.techStack.length - 1 && (
                  <span className="text-zinc-500">,</span>
                )}
              </div>
            ))}
          </div>
          <span className="text-zinc-500">{']'}</span>
        </div>
      </STEARSection>

      {/* Execution */}
      <STEARSection
        icon={stearIcons.execution}
        title="Execution"
        accentColor="green"
      >
        <div className="space-y-3">
          {view.execution.map((step, i) => (
            <div
              key={i}
              className="rounded-lg bg-zinc-950 border border-zinc-800 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-zinc-600 mt-0.5 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-zinc-300 text-sm">{step}</span>
              </div>
            </div>
          ))}
        </div>
      </STEARSection>

      {/* Analytics */}
      <STEARSection
        icon={stearIcons.analytics}
        title="Analytics & Monitoring"
        accentColor="cyan"
      >
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 font-mono text-sm">
          <span className="text-zinc-500">{'// '}</span>
          <span className="text-cyan-400">Monitoring approach</span>
          <p className="text-zinc-300 mt-2 font-sans leading-relaxed">
            {view.analytics}
          </p>
        </div>
      </STEARSection>

      {/* Result */}
      <STEARSection
        icon={stearIcons.result}
        title="Result"
        accentColor="emerald"
      >
        <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400">
              STATUS: SUCCESS
            </span>
          </div>
          <p className="text-zinc-300 leading-relaxed">{view.result}</p>
        </div>
      </STEARSection>
    </div>
  )
}

/* ========================================================================== */
/*  Reusable STEAR Section                                                    */
/* ========================================================================== */

function STEARSection({
  icon: Icon,
  title,
  accentColor,
  children,
}: {
  icon: React.ElementType
  title: string
  accentColor: string
  children: React.ReactNode
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600/20 text-blue-400',
    purple: 'bg-purple-600/20 text-purple-400',
    green: 'bg-green-600/20 text-green-400',
    cyan: 'bg-cyan-600/20 text-cyan-400',
    emerald: 'bg-emerald-600/20 text-emerald-400',
    orange: 'bg-orange-600/20 text-orange-400',
  }

  const accent = colorMap[accentColor] || colorMap.blue

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={cn(
            'flex items-center justify-center h-10 w-10 rounded-lg',
            accent
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}
