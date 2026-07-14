import Link from 'next/link'
import { NavLinks } from '@/components/nav-links'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-dark/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only z-50 bg-accent px-4 py-2 font-display text-sm font-bold uppercase tracking-widest text-dark focus:not-sr-only focus:absolute focus:left-2 focus:top-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-5 px-5 py-3 md:h-[72px] md:flex-nowrap md:py-0 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-bone">
          <span className="block h-[5px] w-[26px] bg-accent" aria-hidden="true" />
          <span className="font-display text-base font-extrabold uppercase tracking-[0.14em]">
            Johan Cilliers
          </span>
        </Link>
        <nav aria-label="Site" className="order-3 basis-full md:order-none md:min-w-0 md:flex-1 md:basis-auto">
          <NavLinks />
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://www.linkedin.com/in/johan-cilliers/"
            rel="me"
            className="hidden rounded-[2px] border border-bone/25 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.1em] text-bone transition-colors hover:border-bone md:block"
          >
            LinkedIn
          </a>
          <a
            href="mailto:johanlcilliers@gmail.com"
            className="rounded-[2px] bg-accent px-4 py-2.5 font-display text-xs font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-accent-soft"
          >
            Email Me
          </a>
        </div>
      </div>
    </header>
  )
}
