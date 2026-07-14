import { clients } from '@/data/clients'

const fmt = (n: number) => n.toLocaleString('en-US')

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="bg-cream text-body">
      <div className="mx-auto max-w-[1060px] px-5 py-20">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Section
        </p>
        <h2
          id="overview-title"
          className="mt-2 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold uppercase leading-none text-ink"
        >
          Overview
        </h2>
        <hr className="mt-6 border-t-2 border-ink" />

        <div className="mt-8 max-w-3xl space-y-4 text-[1.05rem] leading-relaxed">
          <p>
            This is the search engine optimization section of my portfolio. It covers the client
            accounts where organic search grew the most over the past year, measured directly in
            Google Search Console.
          </p>
          <p>
            Every number here is real. Clicks and average position compare the most recent quarter,
            March to May 2026, against the same quarter a year earlier. Sites grouped under
            &ldquo;new to search&rdquo; had no measurable organic presence in the prior year, so
            their figures show what they reached from a standing start rather than a percentage.
            The charts plot monthly organic clicks across the full period, so you can see the whole
            trajectory and not just the endpoints.
          </p>
          <p>
            The work described under each client summarizes the campaign that produced the result:
            technical fixes, content built around real search demand, local optimization, and the
            structural changes that let those gains hold.
          </p>
        </div>

        <h3 className="mt-14 font-display text-2xl font-bold uppercase text-ink">
          Results at a glance
        </h3>
        <div className="mt-3 h-0.5 w-full bg-accent-mid" aria-hidden="true" />
        <div className="overflow-x-auto">
          <table className="mt-0 w-full min-w-[640px] border-collapse text-sm">
            <caption className="sr-only">
              Year-over-year organic search results for 19 client accounts
            </caption>
            <thead>
              <tr className="bg-dark-inset text-left text-bone">
                <th scope="col" className="px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                  Client
                </th>
                <th scope="col" className="px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                  Clicks (before &rarr; now)
                </th>
                <th scope="col" className="px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                  Growth
                </th>
                <th scope="col" className="px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                  Avg. position
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={client.id} className={i % 2 === 1 ? 'bg-cream-row' : undefined}>
                  <th scope="row" className="border-b border-rule px-4 py-2 text-left font-semibold text-ink">
                    <a href={`/#${client.id}`} className="hover:text-accent-deep">
                      {client.name}
                    </a>
                  </th>
                  <td className="border-b border-rule px-4 py-2">
                    {client.clicksBefore === null
                      ? `new → ${fmt(client.clicksNow)}`
                      : `${fmt(client.clicksBefore)} → ${fmt(client.clicksNow)}`}
                  </td>
                  <td className="border-b border-rule px-4 py-2 font-bold text-accent-deep">
                    {client.growthPct === null ? 'New to search' : `+${fmt(client.growthPct)}%`}
                  </td>
                  <td className="border-b border-rule px-4 py-2">
                    {client.posBefore === null
                      ? `→ ${client.posNow}`
                      : `${client.posBefore} → ${client.posNow}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-3xl text-sm italic text-mute">
          Average position is the sitewide mean across all ranking queries; lower is better. A move
          from the mid-20s to single digits means the site shifted from page three to the top of
          page one on average.
        </p>
      </div>
    </section>
  )
}
