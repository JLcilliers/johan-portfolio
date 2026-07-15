import type { MetadataRoute } from 'next'

// The site is deliberately kept out of search and AI indexes. Everything is
// disallowed for every crawler, and the AI bots are named explicitly so the
// intent is unambiguous. No sitemap is advertised. The authoritative signal is
// the X-Robots-Tag header in next.config.ts; this file just asks nicely.
const aiBots = [
  'GPTBot',
  'ClaudeBot',
  'PerplexityBot',
  'OAI-SearchBot',
  'Google-Extended',
  'CCBot',
  'anthropic-ai',
  'Bytespider',
  'Amazonbot',
  'Meta-ExternalAgent',
  'Applebot-Extended',
  'Google-CloudVertexBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', disallow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
  }
}
