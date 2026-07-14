import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { monthLabels } from '@/data/clients'
import { beforeLabel, fmt, getClient, growthLabel, positionLabel } from '@/lib/case-meta'
import { ClicksChart } from '@/components/clicks-chart'

type Props = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const c = getClient(id)
  if (!c) return { title: 'Case study' }
  const growth =
    c.growthPct === null
      ? `from zero to ${fmt(c.clicksNow)} quarterly organic clicks`
      : `${growthLabel(c)} year-over-year organic growth to ${fmt(c.clicksNow)} quarterly clicks`
  return {
    title: `${c.name} SEO case study`,
    description: `${c.eyebrow}: ${growth}, measured in Google Search Console.`,
    alternates: { canonical: `/seo/${c.id}` },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params
  const c = getClient(id)
  if (!c) notFound()

  const labels = monthLabels(c.startMonth, c.monthly.length)

  return (
    <>
      <article className="mx-auto max-w-[1000px] px-5 pb-20 pt-14 lg:px-10">
        <Link
          href="/seo"
          className="font-mono text-xs uppercase tracking-[0.12em] text-faint transition-colors hover:text-accent"
        >
          ← All campaigns
        </Link>
        <p className="mb-4 mt-9 font-mono text-[13px] uppercase tracking-[0.14em] text-accent">
          {c.eyebrow}
        </p>
        <h1 className="mb-10 font-display text-[clamp(2.3rem,6vw,4rem)] font-black uppercase leading-[0.96] tracking-[-0.02em]">
          {c.name}
        </h1>

        {/* Stat row */}
        <dl className="mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-bone/10 bg-bone/10 lg:grid-cols-4">
          <div className="bg-dark px-6 py-7">
            <dd className="font-display text-[2.1rem] font-black leading-none">{beforeLabel(c)}</dd>
            <dt className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Clicks before
            </dt>
          </div>
          <div className="bg-dark px-6 py-7">
            <dd className="font-display text-[2.1rem] font-black leading-none">
              {fmt(c.clicksNow)}
            </dd>
            <dt className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Clicks now
            </dt>
          </div>
          <div className="bg-dark px-6 py-7">
            <dd className="font-display text-[2.1rem] font-black leading-none text-accent">
              {growthLabel(c)}
            </dd>
            <dt className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Year over year
            </dt>
          </div>
          <div className="bg-dark px-6 py-7">
            <dd className="font-display text-[2.1rem] font-black leading-none">
              {positionLabel(c)}
            </dd>
            <dt className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Avg. position
            </dt>
          </div>
        </dl>

        {/* Monthly chart */}
        <figure className="mb-10 rounded-[4px] bg-cream px-5 pb-5 pt-6 md:px-8">
          <figcaption className="mb-4 font-display text-[15px] font-extrabold uppercase tracking-[0.04em] text-ink">
            Monthly organic clicks
          </figcaption>
          <ClicksChart clientName={c.name} startMonth={c.startMonth} monthly={c.monthly} />
          <p className="mt-2 flex justify-between font-mono text-[11px] text-mute">
            <span>20{labels[0]}</span>
            <span className="hidden sm:inline">Monthly organic clicks · full period</span>
            <span>20{labels[labels.length - 1]}</span>
          </p>
        </figure>

        <div className="grid items-start gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Terms table */}
          <section aria-labelledby="case-terms">
            <h2
              id="case-terms"
              className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-faint"
            >
              Top ranked search terms
            </h2>
            <table className="w-full border-collapse border-t border-bone/15 text-left">
              <thead>
                <tr className="border-b border-bone/10 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Search term
                  </th>
                  <th scope="col" className="py-3 pr-4 text-right font-medium">
                    Pos.
                  </th>
                  <th scope="col" className="py-3 text-right font-medium">
                    Clicks
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.terms.map((t) => (
                  <tr key={t.term} className="border-b border-bone/10">
                    <td className="py-3.5 pr-4 text-[15px] text-bone">{t.term}</td>
                    <td className="whitespace-nowrap py-3.5 pr-4 text-right font-mono text-sm text-accent">
                      {t.position.toFixed(1)}
                    </td>
                    <td className="whitespace-nowrap py-3.5 text-right font-mono text-sm text-bone-muted">
                      {fmt(t.clicks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Delivered */}
          <section aria-labelledby="case-delivered">
            <h2
              id="case-delivered"
              className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-faint"
            >
              What we delivered
            </h2>
            {c.delivered.map((p) => (
              <p key={p.slice(0, 32)} className="mb-4 leading-relaxed text-bone-muted">
                {p}
              </p>
            ))}
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-3.5 border-t border-bone/15 pt-9">
          <Link
            href="/seo"
            className="rounded-[2px] border border-bone/25 px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:border-bone"
          >
            ← Back to all campaigns
          </Link>
          <Link
            href="/contact"
            className="rounded-[2px] bg-accent px-6 py-3.5 font-display text-xs font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </Link>
        </div>
      </article>
    </>
  )
}
