import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Johan Cilliers works in the seam between search strategy and software: SEO across 130+ properties, plus the MCP servers, dashboards and AI tools that run the work.',
  alternates: {
    canonical: '/about',
  },
}

const ROLES = [
  'SEO Software Specialist',
  'SEO Consultant',
  'Fractional Head of SEO',
  'AI Developer',
  'AI Optimization Specialist',
]

const HOW_I_WORK = [
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

const STACK = [
  'TypeScript',
  'Node',
  'Next.js',
  'React',
  'Python',
  'FastAPI',
  'Hono',
  'MCP SDK',
  'Anthropic API',
  'Supabase',
  'Postgres',
  'Prisma',
  'Playwright',
  'Puppeteer',
  'GA4 & Search Console APIs',
  'Ahrefs',
  'SEMrush',
  'Screaming Frog',
  'Lighthouse',
  'Vercel',
  'Docker',
  'OAuth 2.0',
  'Ed25519',
]

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1000px] px-5 pb-12 pt-16 md:pt-20 lg:px-10">
        <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">About</p>
        <h1 className="mb-9 font-display text-[clamp(2.6rem,7vw,4.5rem)] font-black uppercase leading-[0.94] tracking-[-0.02em]">
          Johan Cilliers
        </h1>
        <p className="mb-6 max-w-[66ch] text-[1.3rem] leading-normal text-bone">
          I work in the seam between search strategy and software: an SEO specialist who also
          builds the AI tools, MCP servers and dashboards that run the work.
        </p>
        <p className="mb-5 max-w-[70ch] text-lg leading-relaxed text-bone-muted">
          Over the past year I have managed organic search across 130+ web properties and shipped
          around forty software projects alongside it. The two feed each other: the reporting
          infrastructure I build pulls the real Search Console data that proves the SEO work, and
          the SEO work sets the problems the tools are built to solve.
        </p>
        <p className="max-w-[70ch] text-lg leading-relaxed text-bone-muted">
          Clients span the US, UK and South Africa: healthcare and dental practices, county
          governments, retailers, law firms and direct-to-consumer brands. Every figure on this
          site is verified in Google Search Console, not estimated.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 py-8 lg:px-10">
        <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-faint">
          Positioned for
        </h2>
        <ul className="flex flex-wrap gap-3">
          {ROLES.map((r) => (
            <li
              key={r}
              className="rounded-[2px] border border-bone/20 px-5 py-2.5 font-display text-[15px] font-semibold text-bone"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-8 pt-12 lg:px-10">
        <h2 className="mb-7 font-mono text-xs uppercase tracking-[0.16em] text-faint">
          How I work
        </h2>
        <div className="grid gap-px border border-bone/10 bg-bone/10 md:grid-cols-2">
          {HOW_I_WORK.map((s) => (
            <div key={s.n} className="bg-dark px-7 py-7">
              <p className="mb-3.5 font-mono text-[13px] text-accent">{s.n}</p>
              <h3 className="mb-2.5 font-display text-xl font-extrabold uppercase tracking-[-0.01em]">
                {s.t}
              </h3>
              <p className="text-[15px] leading-relaxed text-faint">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-5 pb-20 pt-10 lg:px-10">
        <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-faint">
          Working stack
        </h2>
        <p className="max-w-[80ch] font-mono text-[15px] leading-loose text-bone-muted">
          {STACK.join(' · ')}
        </p>
      </section>

      <CtaBand compact title="Let’s talk about your search." />
    </>
  )
}
