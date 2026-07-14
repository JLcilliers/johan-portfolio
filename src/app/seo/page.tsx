import type { Metadata } from 'next'
import Link from 'next/link'
import { clients } from '@/data/clients'
import { beforeLabel, fmt, growthLabel, positionLabel } from '@/lib/case-meta'
import { CaseCard } from '@/components/case-card'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'SEO Performance',
  description:
    '19 client accounts where organic search grew the most over the past year, measured in Google Search Console: clicks, average position and the work behind each result.',
  alternates: {
    canonical: '/seo',
  },
}

export default function SeoPage() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 md:pt-20 lg:px-10">
        <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
          Section 01 · Organic search growth
        </p>
        <h1 className="mb-7 font-display text-[clamp(2.6rem,7vw,4.75rem)] font-black uppercase leading-[0.94] tracking-[-0.02em]">
          SEO Performance
        </h1>
        <p className="max-w-[74ch] text-lg leading-relaxed text-bone-muted">
          The client accounts where organic search improved the most over the past year, measured
          directly in Google Search Console. Clicks and average position compare the most recent
          quarter, March to May 2026, against the same quarter a year earlier. Sites marked{' '}
          <strong className="font-semibold text-bone">new to search</strong> had no measurable
          organic presence in the prior year.
        </p>
      </section>

      {/* Results at a glance */}
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-4 lg:px-10">
        <h2 className="mb-5 font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
          Results at a glance
        </h2>
        <div className="overflow-x-auto rounded-[4px] border border-bone/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Organic clicks and average position for all 19 client accounts, most recent quarter
              against the same quarter a year earlier
            </caption>
            <thead>
              <tr className="bg-dark-panel font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                <th scope="col" className="px-6 py-4 font-medium">
                  Client
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  Clicks (before → now)
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  Growth
                </th>
                <th scope="col" className="px-6 py-4 font-medium">
                  Avg. position
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-t border-bone/10 hover:bg-dark-panel">
                  <th scope="row" className="px-6 py-4 font-normal">
                    <Link
                      href={`/seo/${c.id}`}
                      className="font-display text-base font-bold text-bone hover:text-accent"
                    >
                      {c.name}
                    </Link>
                  </th>
                  <td className="whitespace-nowrap px-4 py-4 font-mono text-sm text-bone-muted">
                    {beforeLabel(c)} → {fmt(c.clicksNow)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 font-display text-[15px] font-bold text-accent">
                    {growthLabel(c)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-bone-muted">
                    {positionLabel(c)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-[80ch] text-sm leading-relaxed text-faint">
          Average position is the sitewide mean across all ranking queries; lower is better. A
          move from the mid-20s to single digits means the site shifted from page three to the
          top of page one on average. Open any row for the full case study.
        </p>
      </section>

      {/* Case study grid */}
      <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-12 lg:px-10">
        <h2 className="mb-6 font-mono text-[13px] uppercase tracking-[0.16em] text-faint">
          Case studies
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <CaseCard key={c.id} data={c} />
          ))}
        </div>
      </section>

      <CtaBand
        compact
        title="Want numbers like these on your own Search Console?"
      />
    </>
  )
}
