export function Closing() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-dark text-bone">
      <div className="mx-auto flex min-h-[80svh] max-w-[1060px] flex-col justify-center px-5 py-24">
        <div className="h-1 w-24 bg-accent" aria-hidden="true" />
        <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent">
          Let&rsquo;s work together
        </p>
        <h2
          id="contact-title"
          className="mt-10 font-display text-[clamp(4rem,14vw,10rem)] font-bold uppercase leading-[0.9]"
        >
          Thank
          <br />
          you
        </h2>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-bone-muted">
          Every figure on this page is pulled from live Google Search Console data. Happy to walk
          through any client in detail, or show how the same playbook applies to yours.
        </p>
        <div className="mt-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <p className="mt-3 text-xl font-bold">Johan Cilliers</p>
          <a
            href="mailto:johanlcilliers@gmail.com"
            className="mt-1 inline-block text-lg text-bone-muted underline decoration-rule-dark underline-offset-4 transition-colors hover:text-bone"
          >
            johanlcilliers@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
