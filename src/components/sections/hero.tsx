'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/profile'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 text-sm text-blue-400 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            <span className="text-white">{profile.name}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl"
          >
            {profile.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-5 w-5" />
                Get in touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex items-center gap-2 text-sm text-zinc-500"
          >
            <ArrowRight className="h-4 w-4" />
            Scroll to explore case studies, products, and capabilities
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
