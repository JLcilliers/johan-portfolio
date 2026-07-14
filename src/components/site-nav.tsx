import Link from 'next/link'

const links = [
  { href: '/#overview', label: 'Overview' },
  { href: '/#headline-results', label: 'Headline results' },
  { href: '/#local-growth', label: 'Local growth' },
  { href: '/#new-sites', label: 'New sites' },
  { href: '/#tools', label: 'Tools & AI' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule-dark bg-dark">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-dark"
      >
        Skip to content
      </a>
      <nav aria-label="Sections" className="mx-auto flex max-w-[1060px] items-center gap-6 px-5 py-3">
        <Link
          href="/"
          className="shrink-0 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bone hover:text-accent"
        >
          Johan Cilliers
        </Link>
        <ul className="ml-auto flex min-w-0 items-center gap-x-5 gap-y-1 overflow-x-auto whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-bone-muted transition-colors hover:text-bone">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
