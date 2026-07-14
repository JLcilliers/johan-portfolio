import type { MetadataRoute } from 'next'
import { clients } from '@/data/clients'
import { SITE_URL } from '@/lib/site'

const lastModified = new Date('2026-07-14')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/seo`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tools`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    ...clients.map((c) => ({
      url: `${SITE_URL}/seo/${c.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
