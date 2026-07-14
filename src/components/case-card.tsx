import Link from 'next/link'
import type { ClientCase } from '@/data/clients'
import { CASE_TAGS, beforeLabel, fmt, growthLabel, positionLabel } from '@/lib/case-meta'
import { Sparkline } from '@/components/sparkline'

// Larger card used in the featured grid on the home page.
export function FeaturedCaseCard({ data }: { data: ClientCase }) {
  return (
    <Link
      href={`/seo/${data.id}`}
      className="block min-w-0 rounded-[4px] border border-bone/10 bg-dark-panel p-7 pb-6 text-bone transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            {CASE_TAGS[data.id]}
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-[-0.01em]">
            {data.name}
          </h3>
        </div>
        <p className="text-right font-display text-[1.6rem] font-black leading-tight text-accent">
          {growthLabel(data)}
        </p>
      </div>
      <dl className="my-5 flex flex-wrap gap-x-7 gap-y-4">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Before</dt>
          <dd className="mt-1 font-display text-xl font-bold">{beforeLabel(data)}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Now</dt>
          <dd className="mt-1 font-display text-xl font-bold">{fmt(data.clicksNow)}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">Avg. pos.</dt>
          <dd className="mt-1 font-display text-xl font-bold">{positionLabel(data)}</dd>
        </div>
      </dl>
      <Sparkline monthly={data.monthly} />
    </Link>
  )
}

// Compact card used in the full grid on the SEO Work page.
export function CaseCard({ data }: { data: ClientCase }) {
  return (
    <Link
      href={`/seo/${data.id}`}
      className="flex min-w-0 flex-col rounded-[4px] border border-bone/10 bg-dark-panel p-6 pb-5 text-bone transition-colors hover:border-accent"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {CASE_TAGS[data.id]}
        </p>
        <p className="text-right font-display text-xl font-black leading-tight text-accent">
          {growthLabel(data)}
        </p>
      </div>
      <h3 className="mb-auto mt-3 min-h-12 font-display text-xl font-extrabold uppercase tracking-[-0.01em]">
        {data.name}
      </h3>
      <div className="mt-4">
        <Sparkline monthly={data.monthly} height={46} />
      </div>
      <p className="mt-3.5 flex flex-wrap justify-between gap-x-3 gap-y-1 font-mono text-xs text-faint">
        <span>
          {beforeLabel(data)} → {fmt(data.clicksNow)}
        </span>
        <span>pos {positionLabel(data)}</span>
      </p>
    </Link>
  )
}
