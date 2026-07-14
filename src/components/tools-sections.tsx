import { toolkit } from '@/data/projects'

export function ToolsDivider() {
  return (
    <section id="tools" aria-label="Tools & AI" className="bg-dark text-bone">
      <div className="mx-auto flex min-h-[72svh] max-w-[1060px] flex-col justify-center px-5 py-24">
        <div className="h-1 w-24 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-bone">
          Portfolio part two
        </p>
        <div className="mt-10 flex gap-4" aria-hidden="true">
          <span className="h-40 w-7 bg-accent" />
          <span className="h-40 w-7 bg-accent" />
        </div>
        <h2 className="mt-10 font-display text-[clamp(3rem,10vw,7.5rem)] font-bold uppercase leading-[0.95]">
          Tools &amp; AI
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-bone-muted">
          Internal software, MCP servers, trading bots and the tools that run the agency.
        </p>
      </div>
      <div className="border-t border-rule-dark">
        <p className="mx-auto max-w-[1060px] px-5 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone-muted">
          SEO performance portfolio
        </p>
      </div>
    </section>
  )
}

export function ToolsIntro() {
  return (
    <div className="mx-auto max-w-[1060px] px-5 pt-20">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent-deep">
        Part two
      </p>
      <h3 className="mt-2 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold uppercase leading-none text-ink">
        Tools &amp; AI
      </h3>
      <hr className="mt-6 border-t-2 border-ink" />
      <div className="mt-8 max-w-3xl space-y-4 text-[1.05rem] leading-relaxed">
        <p>
          The other half of the work is building the software. Over the past year I designed and
          shipped around forty projects: MCP servers that plug live data straight into Claude,
          trading bots with real risk controls, client dashboards, onboarding portals, and a stack
          of SEO and audit tools.
        </p>
        <p>
          What follows is a selection of the strongest, each with a look at its interface and what
          it does. The Google Hub MCP is a good place to start, because it&rsquo;s the server that
          pulled every figure in the SEO section above. A wider index of the rest sits at the end.
        </p>
      </div>
    </div>
  )
}

export function ToolkitIndex() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-title"
      className="mx-auto max-w-[1060px] px-5 py-16"
    >
      <h3
        id="toolkit-title"
        className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold uppercase leading-none text-ink"
      >
        Also in the toolkit
      </h3>
      <hr className="mt-6 border-t-2 border-ink" />
      <p className="mt-4 italic text-mute">A condensed index of the remaining builds.</p>
      <dl className="mt-8 grid gap-x-12 sm:grid-cols-2">
        {toolkit.map((entry) => (
          <div key={entry.name} className="border-b border-rule py-4">
            <dt className="font-bold text-ink">{entry.name}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-mute">{entry.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
