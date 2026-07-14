import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL, siteJsonLd } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SEO performance portfolio | Johan Cilliers',
    template: '%s | Johan Cilliers',
  },
  description:
    'Client SEO results measured in Google Search Console: 19 accounts with year-over-year growth, plus the software built alongside them, from MCP servers to trading bots.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Johan Cilliers SEO performance portfolio',
    url: SITE_URL,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SEO performance portfolio by Johan Cilliers, built on Search Console verified data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#221e1a',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/oswald-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/source-sans-3-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }}
        />
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
