type Props = {
  title: string
  subline?: string
  compact?: boolean
}

export function CtaBand({ title, subline, compact = false }: Props) {
  return (
    <section className="bg-accent text-dark">
      <div
        className={`mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-7 px-5 lg:px-10 ${compact ? 'py-14' : 'py-16 md:py-20'}`}
      >
        <div className="max-w-[34ch]">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.1rem)] font-black uppercase leading-[0.98] tracking-[-0.02em]">
            {title}
          </h2>
          {subline ? (
            <p className="mt-3.5 max-w-[48ch] text-lg leading-normal text-on-accent-muted">
              {subline}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="mailto:johanlcilliers@gmail.com"
            className="rounded-[2px] bg-dark px-7 py-4 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-dark-panel"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/johan-cilliers/"
            rel="me"
            className="rounded-[2px] border-[1.5px] border-dark px-7 py-[15px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-dark/10"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
