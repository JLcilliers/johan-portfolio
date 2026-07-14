import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Johan Cilliers about SEO software, consulting, fractional and AI-engineering roles. Remote-first, worldwide.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[960px] px-5 pb-24 pt-20 text-center md:pt-28 lg:px-10">
      <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
        Get in touch
      </p>
      <h1 className="mx-auto mb-8 max-w-[16ch] font-display text-[clamp(2.8rem,8vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.025em]">
        Let’s build your search advantage.
      </h1>
      <p className="mx-auto mb-12 max-w-[60ch] text-lg leading-relaxed text-bone-muted md:text-xl">
        Open to SEO software, consulting, fractional and AI-engineering roles. Remote-first and
        used to working across US, UK and South African time zones. The fastest way to reach me
        is email or LinkedIn.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:johanlcilliers@gmail.com"
          className="rounded-[2px] bg-accent px-9 py-[19px] font-display text-sm font-bold uppercase tracking-[0.1em] text-dark transition-colors hover:bg-accent-soft"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/johan-cilliers/"
          rel="me"
          className="rounded-[2px] border border-bone/30 px-9 py-[18px] font-display text-sm font-bold uppercase tracking-[0.1em] text-bone transition-colors hover:border-bone"
        >
          Connect on LinkedIn
        </a>
      </div>
      <dl className="mt-16 flex flex-wrap justify-center gap-x-14 gap-y-7 border-t border-bone/15 pt-9 font-mono text-[13px]">
        <div>
          <dt className="mb-2 text-[11px] uppercase tracking-[0.1em] text-faint">Email</dt>
          <dd>
            <a
              href="mailto:johanlcilliers@gmail.com"
              className="text-bone transition-colors hover:text-accent"
            >
              johanlcilliers@gmail.com
            </a>
          </dd>
        </div>
        <div>
          <dt className="mb-2 text-[11px] uppercase tracking-[0.1em] text-faint">LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/johan-cilliers/"
              rel="me"
              className="text-bone transition-colors hover:text-accent"
            >
              /in/johan-cilliers
            </a>
          </dd>
        </div>
        <div>
          <dt className="mb-2 text-[11px] uppercase tracking-[0.1em] text-faint">GitHub</dt>
          <dd>
            <a
              href="https://github.com/JLcilliers"
              rel="me"
              className="text-bone transition-colors hover:text-accent"
            >
              /JLcilliers
            </a>
          </dd>
        </div>
        <div>
          <dt className="mb-2 text-[11px] uppercase tracking-[0.1em] text-faint">Based</dt>
          <dd className="text-bone">Remote · Worldwide</dd>
        </div>
      </dl>
    </section>
  )
}
