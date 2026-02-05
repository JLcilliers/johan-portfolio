'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TechnicalToggleProps {
  marketingContent: React.ReactNode
  engineeringContent: React.ReactNode
  className?: string
  compact?: boolean
}

export function TechnicalToggle({ marketingContent, engineeringContent, className, compact }: TechnicalToggleProps) {
  const [view, setView] = useState<'marketing' | 'engineering'>('marketing')

  return (
    <div className={cn('space-y-6', className)}>
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center rounded-xl bg-zinc-900 border border-zinc-800 p-1">
          <button
            onClick={() => setView('marketing')}
            className={cn(
              'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
              view === 'marketing'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white'
            )}
          >
            <Monitor className={cn('h-4 w-4', compact && 'hidden sm:block')} />
            Marketing View
          </button>
          <button
            onClick={() => setView('engineering')}
            className={cn(
              'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
              view === 'engineering'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                : 'text-zinc-400 hover:text-white'
            )}
          >
            <Code2 className={cn('h-4 w-4', compact && 'hidden sm:block')} />
            Engineering View
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {view === 'marketing' ? marketingContent : engineeringContent}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
