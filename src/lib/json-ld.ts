import { profile } from '@/content/profile'

const siteUrl = process.env.SITE_URL || 'https://johancilliers.com'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'SEO Leader & Digital Marketing Manager',
    description: profile.subhead,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin],
    knowsAbout: ['SEO', 'Digital Marketing', 'AI Automation', 'Web Development'],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name} — Portfolio`,
    url: siteUrl,
    author: { '@type': 'Person', name: profile.name },
  }
}

export function articleJsonLd(title: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Person', name: profile.name },
    url: `${siteUrl}/work/${slug}`,
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
  }
}

export function softwareAppJsonLd(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    author: { '@type': 'Person', name: profile.name },
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
  }
}
