import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL, siteJsonLd } from '@/lib/site'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SEO performance portfolio | Johan Cilliers',
    template: '%s | Johan Cilliers',
  },
  description:
    'Client SEO results measured in Google Search Console: 19 accounts with year-over-year growth, plus the software built alongside them, from MCP servers to trading bots.',
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
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#221e1a',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <html lang="en" className={`${oswald.variable} ${sourceSans.variable}`}>
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
