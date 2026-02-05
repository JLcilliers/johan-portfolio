import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ChatWidget } from '@/components/chat/chat-widget'
import { personJsonLd, websiteJsonLd } from '@/lib/json-ld'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Johan Cilliers — SEO Leader | AI Automation Builder | Developer',
    template: '%s | Johan Cilliers',
  },
  description:
    '12 years in SEO and digital marketing, global experience (Australia, Europe, North America). Deep SEO expertise, developer background, AI specialization.',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Johan Cilliers Portfolio',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased bg-zinc-950 text-zinc-100 min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
