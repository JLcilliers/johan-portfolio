export function Cover() {
  return (
    <section aria-label="Cover" className="bg-dark text-bone">
      <div className="mx-auto flex min-h-[88svh] max-w-[1060px] flex-col px-5">
        <div className="pt-10">
          <div className="h-1 w-24 bg-accent" aria-hidden="true" />
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone">
              SEO performance portfolio
            </p>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone-muted">
              Prepared June 2026
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Organic search growth
          </p>
          <h1 className="mt-4 font-display font-bold uppercase leading-[0.9] text-bone">
            <span className="block text-[clamp(4rem,14vw,11rem)]">Portfolio</span>
            <span className="block text-[clamp(2.2rem,7.6vw,6rem)]">SEO performance</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-bone-muted">
            A review of client campaigns where organic search grew the most
          </p>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-rule-dark py-6">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-bone">
            Johan Cilliers
          </p>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone-muted">
            Search Console verified data
          </p>
        </div>
      </div>
    </section>
  )
}
