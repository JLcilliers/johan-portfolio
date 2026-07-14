import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// AI crawlers are welcomed by name: this is a portfolio and citation is the point.
const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot', 'Google-Extended']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
