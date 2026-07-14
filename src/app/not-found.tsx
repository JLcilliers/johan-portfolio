import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page does not exist on this site.',
}

export default function NotFound() {
  return (
    <section className="bg-dark text-bone">
      <div className="mx-auto flex min-h-[70svh] max-w-[1060px] flex-col justify-center px-5 py-24">
        <div className="h-1 w-24 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-bone">
          Wrong turn
        </p>
        <h1 className="mt-8 font-display text-[clamp(5rem,16vw,11rem)] font-bold leading-none text-accent">
          404
        </h1>
        <p className="mt-6 max-w-xl text-lg text-bone-muted">
          That page doesn&rsquo;t exist. The whole portfolio lives on one page, so you&rsquo;re one
          click from all of it.
        </p>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-block border border-accent px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent transition-colors hover:bg-accent hover:text-dark"
          >
            Back to the portfolio
          </Link>
        </p>
      </div>
    </section>
  )
}
