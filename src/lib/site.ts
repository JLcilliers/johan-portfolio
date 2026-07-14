import { projects } from '@/data/projects'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.johancilliers.com'

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#johan-cilliers`,
  name: 'Johan Cilliers',
  jobTitle: 'SEO consultant and software developer',
  email: 'mailto:johanlcilliers@gmail.com',
  url: SITE_URL,
  sameAs: ['https://github.com/JLcilliers', 'https://www.linkedin.com/in/johan-cilliers/'],
  knowsAbout: [
    'Search engine optimization',
    'Google Search Console',
    'Google Analytics',
    'Model Context Protocol',
    'Web development',
  ],
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'Johan Cilliers SEO performance portfolio',
        url: SITE_URL,
        author: { '@id': person['@id'] },
        inLanguage: 'en',
      },
    ],
  }
}

export function projectsJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software projects by Johan Cilliers',
    itemListElement: projects.map((project, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.name,
        description: project.subtitle,
        url: `${SITE_URL}/tools#${project.id}`,
        creator: { '@id': person['@id'] },
      },
    })),
  }
}
