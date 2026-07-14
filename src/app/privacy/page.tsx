import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'Privacy policy for the portfolio site of Johan Cilliers: what data the site handles, what it deliberately avoids collecting, and how to get in touch.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-cream text-body">
      <div className="mx-auto max-w-[760px] px-5 py-20">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent-deep">
          Legal
        </p>
        <h1 className="mt-2 font-display text-[clamp(2.4rem,6vw,4rem)] font-bold uppercase leading-none text-ink">
          Privacy policy
        </h1>
        <hr className="mt-6 border-t-2 border-ink" />
        <p className="mt-4 text-sm text-mute">Last updated: July 14, 2026</p>

        <div className="mt-8 space-y-8 leading-relaxed">
          <section aria-labelledby="privacy-scope">
            <h2 id="privacy-scope" className="font-display text-xl font-bold uppercase text-ink">
              What this site is
            </h2>
            <p className="mt-3">
              This is the personal portfolio of Johan Cilliers. It presents client SEO results and
              software projects. It has no user accounts, no comment sections, and no checkout. It
              exists so you can read about the work and email me if you want to talk.
            </p>
          </section>

          <section aria-labelledby="privacy-collected">
            <h2 id="privacy-collected" className="font-display text-xl font-bold uppercase text-ink">
              What the site collects
            </h2>
            <p className="mt-3">
              The site itself sets no cookies and runs no analytics or advertising scripts. There
              are no contact forms, so nothing you type is ever sent to this site.
            </p>
            <p className="mt-3">
              The site is hosted on Vercel. Like any web host, Vercel processes standard server
              logs when you request a page: your IP address, browser user agent, and the pages
              requested. Those logs are used to deliver the site and protect it from abuse. You can
              read how Vercel handles that data in the{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                className="font-semibold text-accent-deep underline underline-offset-2 hover:text-ink"
              >
                Vercel privacy policy
              </a>
              .
            </p>
          </section>

          <section aria-labelledby="privacy-email">
            <h2 id="privacy-email" className="font-display text-xl font-bold uppercase text-ink">
              If you email me
            </h2>
            <p className="mt-3">
              The contact links on this site open your own email client. If you write to me, I
              receive your email address and whatever you choose to include. I use that only to
              reply to you. I don&rsquo;t add you to any mailing list and I don&rsquo;t share your
              details with anyone.
            </p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2 id="privacy-rights" className="font-display text-xl font-bold uppercase text-ink">
              Your rights
            </h2>
            <p className="mt-3">
              Depending on where you live, you may have rights to access, correct, or delete
              personal data someone holds about you. Since the only personal data I would hold is
              an email conversation you started, exercising those rights is simple: email me and
              ask, and I&rsquo;ll delete the thread.
            </p>
          </section>

          <section aria-labelledby="privacy-changes">
            <h2 id="privacy-changes" className="font-display text-xl font-bold uppercase text-ink">
              Changes and contact
            </h2>
            <p className="mt-3">
              If the site ever starts collecting more than described here (for example, if I add
              analytics), this page will be updated first. Questions go to{' '}
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
