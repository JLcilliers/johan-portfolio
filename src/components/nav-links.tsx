'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/seo', label: 'SEO Work' },
  { href: '/tools', label: 'Tools & AI' },
  { href: '/about', label: 'About' },
] as const

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

type Bar = { x: number; width: number }

// The nav lives in the root layout, which Next.js does not re-render on
// client-side navigation, so the active link must come from the router on the
// client. `clicked` moves the underline the moment a link is pressed instead
// of waiting for the navigation to commit.
export function NavLinks() {
  const pathname = usePathname()
  const [clicked, setClicked] = useState<string | null>(null)
  const [bar, setBar] = useState<Bar | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Render-phase reset: drop the optimistic value only once the route matches
  // it. Clearing on any pathname change would let a still-committing earlier
  // navigation briefly pull the underline back to its own link.
  if (clicked !== null && isActive(pathname, clicked)) {
    setClicked(null)
  }

  // History navigation expresses a different intent than the pending click.
  useEffect(() => {
    const clear = () => setClicked(null)
    window.addEventListener('popstate', clear)
    return () => window.removeEventListener('popstate', clear)
  }, [])

  const routeActive = NAV.find((item) => isActive(pathname, item.href))?.href ?? null
  const active = clicked ?? routeActive

  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const item = active
        ? track.querySelector<HTMLLIElement>(`li[data-href="${CSS.escape(active)}"]`)
        : null
      setBar((prev) => {
        // Pages outside the nav (contact, privacy, terms) collapse the bar in
        // place instead of sliding it back toward the first item.
        const next: Bar = item
          ? { x: item.offsetLeft, width: item.offsetWidth }
          : { x: prev?.x ?? 0, width: 0 }
        return prev && prev.x === next.x && prev.width === next.width ? prev : next
      })
    }

    measure()
    document.fonts?.ready.then(measure, () => {})
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [active])

  return (
    <div className="no-scrollbar max-w-full overflow-x-auto md:ml-auto md:w-fit">
      <div ref={trackRef} className="relative w-fit">
        <ul className="flex items-center gap-x-7 whitespace-nowrap pt-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[0.12em] md:pt-0">
          {NAV.map((item) => {
            const current = active === item.href
            return (
              <li key={item.href} data-href={item.href} className="relative py-1.5">
                <Link
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  onClick={(event) => {
                    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                    setClicked(item.href)
                  }}
                  className={
                    current ? 'text-bone' : 'text-bone-muted transition-colors hover:text-accent'
                  }
                >
                  {item.label}
                </Link>
                {current && bar === null ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" aria-hidden="true" />
                ) : null}
              </li>
            )
          })}
        </ul>
        {bar !== null ? (
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={{ width: `${bar.width}px`, transform: `translateX(${bar.x}px)` }}
          />
        ) : null}
      </div>
    </div>
  )
}
