'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaseStudyCard } from '@/components/sections/case-study-card'
import { caseStudies } from '@/content/caseStudies'
import { cn } from '@/lib/utils'
import type { Tag } from '@/types'

const filterCategories: (Tag['category'] | 'All')[] = [
  'All',
  'SEO',
  'AI',
  'CRO',
  'Technical',
  'Analytics',
  'Leadership',
]

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((s) =>
          s.tags.some((t) => t.category === activeFilter)
        )

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Work &amp; Case Studies
            </h1>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              Real-world SEO, AI automation, and digital marketing projects.
              Toggle between marketing and engineering perspectives on each case
              study.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-wrap gap-2 mt-8 mb-10"
          >
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Case study grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((study, i) => (
                <CaseStudyCard key={study.slug} study={study} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-zinc-500 py-12"
            >
              No case studies match this filter.
            </motion.p>
          )}
        </div>
      </section>
    </div>
  )
}
