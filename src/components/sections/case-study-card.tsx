'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CompanyLogo } from '@/components/ui/company-logo'
import type { CaseStudy, Tag } from '@/types'

function getTagVariant(category: Tag['category']): 'seo' | 'ai' | 'technical' | 'analytics' | 'cro' | 'leadership' | 'secondary' {
  const map: Record<Tag['category'], 'seo' | 'ai' | 'technical' | 'analytics' | 'cro' | 'leadership' | 'secondary'> = {
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

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/work/${study.slug}`}>
        <Card className="h-full hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/5 group cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <CompanyLogo domain={study.domain} company={study.company} size={28} />
              <span className="text-xs text-zinc-500">{study.company}</span>
            </div>
            <CardTitle className="group-hover:text-blue-400 transition-colors">{study.title}</CardTitle>
            <CardDescription className="line-clamp-2">{study.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* KPIs */}
              <div className="grid grid-cols-1 gap-2">
                {study.kpis.slice(0, 3).map((kpi) => (
                  <div key={kpi.label} className="flex items-baseline justify-between text-sm">
                    <span className="text-zinc-500">{kpi.label}</span>
                    <span className="font-semibold text-emerald-400">{kpi.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-600 italic">Example outcomes (replace with verified numbers)</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {study.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag.label} variant={getTagVariant(tag.category)}>
                    {tag.label}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                View case study
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
