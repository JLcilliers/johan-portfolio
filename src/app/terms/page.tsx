import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of use',
  description:
    'Terms of use for the portfolio site of Johan Cilliers: content ownership, accuracy, external links, and liability.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="bg-cream text-body">
      <div className="mx-auto max-w-[760px] px-5 py-20">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Legal
        </p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold uppercase leading-none text-ink">
          Terms of use
        </h1>
        <hr className="mt-6 border-t-2 border-ink" />
        <p className="mt-4 text-sm text-mute">Last updated: July 14, 2026</p>

        <div className="mt-8 space-y-8 leading-relaxed">
          <section aria-labelledby="terms-use">
            <h2 id="terms-use" className="font-display text-xl font-bold uppercase text-ink">
              Using this site
            </h2>
            <p className="mt-3">
              This site is a professional portfolio published by Johan Cilliers. You&rsquo;re
              welcome to browse it, link to it, and reference it. By using the site you accept
              these terms.
            </p>
          </section>

          <section aria-labelledby="terms-content">
            <h2 id="terms-content" className="font-display text-xl font-bold uppercase text-ink">
              Content and ownership
            </h2>
            <p className="mt-3">
              The text, design, charts, and interface mocks on this site are my own work and belong
              to me unless stated otherwise. Client names appear in the context of describing work
              I performed. Performance figures are drawn from Google Search Console reporting for
              the periods described. Please don&rsquo;t republish the content wholesale without
              asking first.
            </p>
          </section>

          <section aria-labelledby="terms-accuracy">
            <h2 id="terms-accuracy" className="font-display text-xl font-bold uppercase text-ink">
              Accuracy and warranty
            </h2>
            <p className="mt-3">
              The site is provided as is. I keep the figures and descriptions accurate to the best
              of my knowledge, but past campaign results describe specific engagements and
              don&rsquo;t promise any particular outcome for future work. Nothing here is legal,
              financial, or medical advice.
            </p>
          </section>

          <section aria-labelledby="terms-links">
            <h2 id="terms-links" className="font-display text-xl font-bold uppercase text-ink">
              External links
            </h2>
            <p className="mt-3">
              Some links point to sites I don&rsquo;t control, like GitHub or LinkedIn. Their
              content and policies are their own.
            </p>
          </section>

          <section aria-labelledby="terms-liability">
            <h2 id="terms-liability" className="font-display text-xl font-bold uppercase text-ink">
              Liability and contact
            </h2>
            <p className="mt-3">
              To the extent the law allows, I&rsquo;m not liable for losses arising from your use
              of this site. If any part of these terms turns out to be unenforceable, the rest
              still applies. Questions go to{' '}
              <a
                href="mailto:johanlcilliers@gmail.com"
                className="font-semibold text-accent-deep underline underline-offset-2 hover:text-ink"
              >
                johanlcilliers@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
