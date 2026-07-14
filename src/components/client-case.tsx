import type { ClientCase as ClientCaseData } from '@/data/clients'
import { ClicksChart } from '@/components/clicks-chart'

const fmt = (n: number) => n.toLocaleString('en-US')

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col-reverse border-rule py-1 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
      <dt className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-mute">
        {label}
      </dt>
      <dd className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-bold leading-none text-ink">
        {children}
      </dd>
    </div>
  )
}

export function ClientCaseSection({ data }: { data: ClientCaseData }) {
  return (
    <article id={data.id} aria-labelledby={`${data.id}-title`} className="mx-auto max-w-[1060px] px-5 py-16">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
        {data.eyebrow}
      </p>
      <h3
        id={`${data.id}-title`}
        className="mt-2 font-display text-[clamp(1.9rem,4.6vw,3rem)] font-bold uppercase leading-none text-ink"
      >
        {data.name}
      </h3>
      <hr className="mt-5 border-t-2 border-ink" />

      <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4">
        <Stat label="Clicks before">
          {data.clicksBefore === null ? 'New' : fmt(data.clicksBefore)}
        </Stat>
        <Stat label="Clicks now">{fmt(data.clicksNow)}</Stat>
        <Stat label="Year over year">
          <span className="text-accent-mid">
            {data.growthPct === null ? 'New to search' : `+${fmt(data.growthPct)}%`}
          </span>
        </Stat>
        <Stat label="Avg. position">
          {data.posBefore === null ? `→ ${data.posNow}` : `${data.posBefore} → ${data.posNow}`}
        </Stat>
      </dl>

      <figure className="mt-10">
        <figcaption className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink">
          Monthly organic clicks
        </figcaption>
        <div className="mt-3">
          <ClicksChart clientName={data.name} startMonth={data.startMonth} monthly={data.monthly} />
        </div>
      </figure>

      <h4 className="mt-10 font-display text-lg font-bold uppercase text-ink">
        Top ranked search terms
      </h4>
      <div className="mt-2 h-0.5 w-full bg-accent-mid" aria-hidden="true" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <caption className="sr-only">Top ranked search terms for {data.name}</caption>
          <thead>
            <tr className="bg-dark-inset text-left text-bone">
              <th scope="col" className="px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                Search term
              </th>
              <th scope="col" className="w-32 px-4 py-2.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                Google pos.
              </th>
              <th scope="col" className="w-36 px-4 py-2.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                Monthly clicks
              </th>
            </tr>
          </thead>
          <tbody>
            {data.terms.map((t, i) => (
              <tr key={t.term} className={i % 2 === 1 ? 'bg-cream-row' : undefined}>
                <td className="border-b border-rule px-4 py-2">{t.term}</td>
                <td className="border-b border-rule px-4 py-2 text-center">{t.position.toFixed(1)}</td>
                <td className="border-b border-rule px-4 py-2 text-center">{fmt(t.clicks)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="mt-10 font-display text-lg font-bold uppercase text-ink">What we delivered</h4>
      <div className="mt-2 h-0.5 w-full bg-accent-mid" aria-hidden="true" />
      <div className="mt-4 max-w-3xl space-y-4 leading-relaxed">
        {data.delivered.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
