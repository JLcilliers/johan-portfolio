import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-rule-dark bg-dark">
      <div className="mx-auto flex max-w-[1060px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-bone">
            Johan Cilliers
          </p>
          <a
            href="mailto:johanlcilliers@gmail.com"
            className="text-sm text-bone-muted transition-colors hover:text-bone"
          >
            johanlcilliers@gmail.com
          </a>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
          <li>
            <a
              href="https://github.com/JLcilliers"
              rel="me"
              className="text-bone-muted transition-colors hover:text-bone"
            >
              GitHub
            </a>
          </li>
          <li>
            <Link href="/privacy" className="text-bone-muted transition-colors hover:text-bone">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-bone-muted transition-colors hover:text-bone">
              Terms
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-rule-dark">
        <p className="mx-auto max-w-[1060px] px-5 py-4 text-xs text-bone-muted">
          &copy; 2026 Johan Cilliers. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
