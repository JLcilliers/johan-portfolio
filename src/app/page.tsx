import Link from 'next/link'
import { clients } from '@/data/clients'
import { FEATURED_IDS, getClient, totalQuarterlyClicks } from '@/lib/case-meta'
import { FeaturedCaseCard } from '@/components/case-card'
import { CtaBand } from '@/components/cta-band'

const SERVICES = [
  {
    n: '01',
    t: 'Technical SEO',
    d: 'Indexation, canonicals, crawl budget, Core Web Vitals and site architecture rebuilt so ranking strength actually holds.',
  },
  {
    n: '02',
    t: 'Content & Search Demand',
    d: 'Hubs and tools built around real search demand: calculators, guides and comparison pages that own their clusters.',
  },
  {
    n: '03',
    t: 'Local SEO',
    d: 'Google Business Profile, geo pages, NAP consistency and review flow for multi-location and single-site practices.',
  },
  {
    n: '04',
    t: 'MCP Servers & AI Tooling',
    d: 'Custom Model Context Protocol servers and connectors that plug live data straight into Claude as native tools.',
  },
  {
    n: '05',
    t: 'GEO & AEO for AI Search',
    d: 'Measuring and improving how ChatGPT, Claude, Gemini and Perplexity mention, cite and recommend a brand.',
  },
  {
    n: '06',
    t: 'Analytics & Reporting',
    d: 'Automated GA4, Search Console and PageSpeed reporting with priority-scored, client-ready recommendations.',
  },
]

const FAQS = [
  {
    q: 'What kind of work are you looking for?',
    a: 'SEO software and consulting roles, fractional or head-of-SEO positions, and AI engineering. Anywhere the work sits between search strategy and building the tools that run it.',
  },
  {
    q: 'Are these results real?',
    a: 'Yes. Every click and average-position figure is pulled directly from Google Search Console, comparing the most recent quarter against the same quarter a year earlier. The charts plot monthly organic clicks across the full period.',
  },
  {
    q: 'Do you build the tools yourself?',
    a: 'Yes. The Tools & AI section covers around forty projects designed and shipped over the past year: MCP servers, trading bots, dashboards and audit tools. The Google Hub MCP is the server that pulled every figure in the SEO section.',
  },
  {
    q: 'How do you combine SEO and AI?',
    a: 'Traditional search and AI search are converging. I optimize for both: classic technical and content SEO alongside GEO and AEO work that tracks how language models cite and recommend a brand. And I build the software that measures it.',
  },
  {
    q: 'Are you open to relocation or remote?',
    a: 'Remote-first, and open to the right on-site or hybrid role. I have worked across US, UK and South African clients, so distributed teams and time zones are familiar territory.',
  },
]

export default function HomePage() {
  const featured = FEATURED_IDS.map((id) => getClient(id)).filter((c) => c !== undefined)

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-5 pb-14 pt-16 md:pt-20 lg:px-10">
        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
          SEO Software · AI Development · Fractional Head of SEO
        </p>
        <h1 className="mb-7 max-w-[14ch] font-display text-[clamp(3rem,8.5vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
          Search results, and the software behind them.
        </h1>
        <p className="mb-10 max-w-[60ch] text-[1.15rem] leading-relaxed text-bone-muted md:text-[1.3rem]">
          I grow organic search for real businesses and build the tools that run it, from
          ceramic-implant clinics to county governments, along with the MCP servers, dashboards
          and AI systems that measure every result. Every number on this site is verified in
          Google Search Console.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <Link
            href="/seo"
            className="rounded-[2px] bg-accent px-7 py-4 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-accent-soft"
          >
            See the results
          </Link>
          <Link
            href="/tools"
            className="rounded-[2px] border border-bone/25 px-7 py-4 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:border-bone"
          >
            Explore the tools
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-bone/10" aria-label="Headline numbers">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-4 lg:px-10">
          {[
            { v: totalQuarterlyClicks(), l: 'Quarterly organic clicks' },
            { v: '130+', l: 'Properties managed' },
            { v: '19', l: 'Headline campaigns' },
            { v: '40+', l: 'Tools & AI systems shipped' },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`px-1 py-8 md:py-11 ${i < 3 ? 'lg:border-r lg:border-bone/10' : ''} ${i > 0 ? 'lg:pl-7' : ''}`}
            >
              <dd className="font-display text-4xl font-black leading-none md:text-5xl">
                {s.v.endsWith('+') ? (
                  <>
                    {s.v.slice(0, -1)}
                    <span className="text-accent">+</span>
                  </>
                ) : (
                  s.v
                )}
              </dd>
              <dt className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                {s.l}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Two pillars */}
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-20 lg:px-10">
        <p className="mb-10 font-mono text-[13px] uppercase tracking-[0.18em] text-faint">
          Two pillars, one operator
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/seo"
            className="flex min-h-[280px] flex-col rounded-[4px] border border-bone/10 bg-dark-panel p-9 text-bone transition-colors hover:border-accent"
          >
            <span className="font-display text-[1.35rem] font-black text-accent">01</span>
            <h2 className="mb-3.5 mt-5 font-display text-3xl font-extrabold uppercase tracking-[-0.01em]">
              SEO Performance
            </h2>
            <p className="mb-auto leading-relaxed text-bone-muted">
              Nineteen client accounts where organic search grew the most this year. Technical
              fixes, content built around real demand and local optimization, all measured
              directly in Search Console.
            </p>
            <span className="mt-7 font-display text-xs font-bold uppercase tracking-[0.1em]">
              View the campaigns →
            </span>
          </Link>
          <Link
            href="/tools"
            className="flex min-h-[280px] flex-col rounded-[4px] border border-bone/10 bg-dark-panel p-9 text-bone transition-colors hover:border-accent"
          >
            <span className="font-display text-[1.35rem] font-black text-accent">02</span>
            <h2 className="mb-3.5 mt-5 font-display text-3xl font-extrabold uppercase tracking-[-0.01em]">
              Tools & AI
            </h2>
            <p className="mb-auto leading-relaxed text-bone-muted">
              Around forty shipped projects: MCP servers that plug live data into Claude, trading
              bots with real risk controls, client dashboards and a stack of SEO and audit tools.
            </p>
            <span className="mt-7 font-display text-xs font-bold uppercase tracking-[0.1em]">
              Explore the builds →
            </span>
          </Link>
        </div>
      </section>

      {/* Featured results */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
              Selected work
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,2.9rem)] font-black uppercase tracking-[-0.01em]">
              Headline results
            </h2>
          </div>
          <Link
            href="/seo"
            className="font-display text-xs font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:text-accent"
          >
            All 19 campaigns →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((c) => (
            <FeaturedCaseCard key={c.id} data={c} />
          ))}
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-bone/10">
        <div className="mx-auto max-w-[1200px] px-5 py-11 lg:px-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Trusted across healthcare, government, legal, retail & local services
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3.5">
            {clients.map((c) => (
              <li
                key={c.id}
                className="font-display text-[15px] font-bold uppercase tracking-[0.02em] text-faint"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-20 lg:px-10">
        <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
          What I do
        </p>
        <h2 className="mb-12 font-display text-[clamp(2rem,4.5vw,2.9rem)] font-black uppercase tracking-[-0.01em]">
          From strategy to shipped software
        </h2>
        <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.n} className="bg-dark px-8 py-9">
              <p className="mb-5 font-mono text-[13px] text-accent">{s.n}</p>
              <h3 className="mb-3 font-display text-[1.35rem] font-extrabold uppercase tracking-[-0.01em]">
                {s.t}
              </h3>
              <p className="text-[15px] leading-relaxed text-faint">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10">
        <div className="mx-auto max-w-[920px] px-5 py-20 lg:px-10">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
            For hiring managers
          </p>
          <h2 className="mb-11 font-display text-[clamp(2rem,4.5vw,2.9rem)] font-black uppercase tracking-[-0.01em]">
            Questions, answered
          </h2>
          <div>
            {FAQS.map((f) => (
              <details key={f.q} className="faq border-t border-bone/15">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-bone">
                  <span className="font-display text-lg font-bold tracking-[-0.01em] md:text-[1.3rem]">
                    {f.q}
                  </span>
                  <span
                    className="shrink-0 font-display text-2xl font-semibold text-accent"
                    aria-hidden="true"
                  >
                    <span className="faq-closed">+</span>
                    <span className="faq-open">−</span>
                  </span>
                </summary>
                <p className="max-w-[70ch] pb-7 leading-relaxed text-bone-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let’s put this to work for your team."
        subline="Open to SEO software, consulting, fractional and AI-engineering roles. Remote-first, worldwide."
      />
    </>
  )
}
