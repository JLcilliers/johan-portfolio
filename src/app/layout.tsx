import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SITE_URL, siteJsonLd } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Johan Cilliers | SEO results and the software behind them',
    template: '%s | Johan Cilliers',
  },
  description:
    'SEO consultant and software developer. 19 client accounts with year-over-year organic growth verified in Google Search Console, plus the MCP servers, dashboards and AI tools built alongside them.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Johan Cilliers',
    url: SITE_URL,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Johan Cilliers: search results, and the software behind them',
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
  themeColor: '#1f1c18',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers()
  const nonce = requestHeaders.get('x-nonce') ?? undefined
  const pathname = requestHeaders.get('x-pathname') ?? '/'

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/mulish-latin-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jetbrains-mono-latin-var.woff2"
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
        <SiteHeader pathname={pathname} />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
