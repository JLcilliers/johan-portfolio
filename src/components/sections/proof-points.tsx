'use client'

import { motion } from 'framer-motion'
import { Search, Globe, Bot, Code } from 'lucide-react'
import { profile } from '@/content/profile'

const iconMap: Record<string, React.ElementType> = {
  Search,
  Globe,
  Bot,
  Code,
}

export function ProofPoints() {
  return (
    <section className="py-16 border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.differentiators.map((item, i) => {
            const Icon = iconMap[item.icon] || Search
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-4 rounded-xl hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
