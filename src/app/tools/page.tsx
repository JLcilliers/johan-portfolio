import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { projects, toolkit } from '@/data/projects'
import { mocksById } from '@/components/mocks'
import { CtaBand } from '@/components/cta-band'
import { projectsJsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tools & AI',
  description:
    'Software designed and shipped alongside the SEO work: MCP servers, trading bots, client dashboards, audit tools and AI systems, with the stack behind each build.',
  alternates: {
    canonical: '/tools',
  },
}

export default async function ToolsPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd()) }}
      />
      <section className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 md:pt-20 lg:px-10">
        <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
          Section 02 · Software & AI
        </p>
        <h1 className="mb-7 font-display text-[clamp(2.6rem,7vw,4.75rem)] font-black uppercase leading-[0.94] tracking-[-0.02em]">
          Tools & AI
        </h1>
        <p className="max-w-[74ch] text-lg leading-relaxed text-bone-muted">
          The other half of the work is building the software. Over the past year I designed and
          shipped around forty projects: MCP servers that plug live data straight into Claude,
          trading bots with real risk controls, client dashboards, onboarding portals, and a
          stack of SEO and audit tools. A selection of the strongest is below. The Google Hub MCP
          is the server that pulled every figure in the SEO section.
        </p>
      </section>

      {/* Featured tools */}
      <section className="mx-auto max-w-[1200px] px-5 pb-12 pt-4 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => {
            const Mock = mocksById[p.id]
            return (
              <article
                key={p.id}
                id={p.id}
                className="flex min-w-0 scroll-mt-24 flex-col rounded-[4px] border border-bone/10 bg-dark-panel p-6 md:p-8"
                aria-label={p.name}
              >
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                  {p.category}
                </p>
                <h2 className="font-display text-[1.65rem] font-extrabold uppercase leading-tight tracking-[-0.01em]">
                  {p.name}
                </h2>
                <p className="mb-5 mt-1.5 text-[15px] leading-snug text-bone-muted">
                  {p.subtitle}
                </p>
                {Mock ? <div className="no-scrollbar mb-5 overflow-x-auto">{Mock()}</div> : null}
                {p.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="mb-4 text-[15px] leading-relaxed text-faint"
                  >
                    {paragraph}
                  </p>
                ))}
                <h3 className="mb-3 mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  Highlights
                </h3>
                <ul className="mb-6">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 py-1.5 text-[14.5px] leading-snug text-bone">
                      <span className="font-mono text-accent" aria-hidden="true">
                        &gt;
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-bone/10 pt-4 font-mono text-xs leading-relaxed text-faint">
                  <span className="text-bone-muted">Built with</span>{' '}
                  {p.builtWith.join(' · ')}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Also in the toolkit */}
      <section className="border-t border-bone/10">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-16 lg:px-10">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
            Also in the toolkit
          </p>
          <h2 className="mb-10 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-black uppercase tracking-[-0.01em]">
            A condensed index of the rest
          </h2>
          <dl className="grid gap-px border border-bone/10 bg-bone/10 md:grid-cols-2">
            {toolkit.map((t) => (
              <div key={t.name} className="bg-dark px-7 py-6">
                <dt className="mb-2 font-display text-[17px] font-bold">{t.name}</dt>
                <dd className="text-sm leading-relaxed text-faint">{t.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        compact
        title="Want someone who ships the tools, not just the strategy?"
      />
    </>
  )
}
