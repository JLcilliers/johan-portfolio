import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-5 px-5 py-12 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-bone">
          <span className="block h-1 w-[22px] bg-accent" aria-hidden="true" />
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.14em]">
            Johan Cilliers
          </span>
        </Link>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-display text-xs font-semibold uppercase tracking-[0.1em]">
            <li>
              <Link href="/seo" className="text-faint transition-colors hover:text-accent">
                SEO Work
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-faint transition-colors hover:text-accent">
                Tools & AI
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-faint transition-colors hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-faint transition-colors hover:text-accent">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-faint transition-colors hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-faint transition-colors hover:text-accent">
                Terms
              </Link>
            </li>
          </ul>
        </nav>
        <div className="font-mono text-xs text-faint">
          Search Console verified data · © 2026{' '}
          <a
            href="mailto:johanlcilliers@gmail.com"
            className="text-bone-muted underline underline-offset-2 transition-colors hover:text-accent"
          >
            johanlcilliers@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
