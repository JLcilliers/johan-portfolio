type Props = {
  id: string
  number: string
  eyebrow?: string
  title: string
  subline: string
}

export function SectionDivider({ id, number, eyebrow = 'Section', title, subline }: Props) {
  return (
    <section id={id} aria-label={title} className="bg-dark text-bone">
      <div className="mx-auto flex min-h-[72svh] max-w-[1060px] flex-col justify-center px-5 py-24">
        <div className="h-1 w-24 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-bone">
          {eyebrow}
        </p>
        <p
          aria-hidden="true"
          className="mt-10 font-display text-[clamp(6rem,18vw,13rem)] font-bold leading-none text-accent"
        >
          {number}
        </p>
        <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.6rem,8.5vw,6.5rem)] font-bold uppercase leading-[0.95]">
          {title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-bone-muted">{subline}</p>
      </div>
      <div className="border-t border-rule-dark">
        <p className="mx-auto max-w-[1060px] px-5 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-bone-muted">
          SEO performance portfolio
        </p>
      </div>
    </section>
  )
}
