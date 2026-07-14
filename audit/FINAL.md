# Final audit: johan-portfolio rebuild

Production URL: https://johan-portfolio-sage.vercel.app/ (confirmed live, deployment green, commit `31ab20b` on `main`)
Date: 2026-07-14

The site was rebuilt from scratch to mirror the print "SEO Performance Portfolio" document (June 2026): dark cover, overview with the 19-client results table, three client sections with Search Console case studies and server-rendered SVG charts, a Tools & AI section with 15 hand-built interface mocks, the condensed toolkit index, and the dark closing section. Legal pages at `/privacy` and `/terms`.

## AI tells found and fixed

The full itemized sweep is in [findings.md](findings.md). Summary of everything found across the old site and the rebuild cycles:

| # | Tell | Where | Fix |
| --- | --- | --- | --- |
| 1 | React hydration error #418 in production console | old ThemeProvider toggling `<html>` class | Theme system removed; site ships no client components at all |
| 2 | favicon.ico 404 on every page | no icon files existed | `src/app/favicon.ico` (PNG-in-ICO, generated in Node) + `src/app/icon.svg` |
| 3 | Placeholder copy in production: "Example outcomes (replace with verified numbers)" | every case study card | Fabricated case-study system replaced by the 19 real Search Console results |
| 4 | Purple/blue/pink gradient headline, glass navbar, uniform scroll fade-ups, theme toggle, chat bubble | old hero/nav/framer-motion | All removed; palette, type and layout now match the document; the only motion left is link color transitions and reduced-motion-gated smooth scrolling |
| 5 | Poppins font + lucide-react stock icon set | old layout and components | Oswald + Source Sans 3, self-hosted with in-document preloads; zero icon packs, all graphics are hand-built SVG/markup |
| 6 | Em dashes in 15 source strings incl. the site title; pipe-stuffed title/H1 | old metadata and copy | All copy rewritten; zero U+2014/U+2013 on any page (ranges use the → arrow like the document) |
| 7 | Banned vocabulary: "comprehensive" (4x), "streamline", "significant growth", tricolon marketing patterns | old content files | Rewritten from the reference document under the strict rule set; Rule-of-Three phrasings from the PDF were broken up where rhetorical |
| 8 | "leverage, delve" appearing as example banned words inside the RankWriter mock | `src/components/mocks.tsx` | Replaced with words outside the ban list (cycle 2) |
| 9 | Default Next.js 404 page (framework default branding + a non-nonced inline style that violated the CSP) | `/_not-found` | Custom `not-found.tsx` in the site design (cycle 2) |
| 10 | Live OpenAI API key in `.env.local`, OpenAI-proxying API routes, admin upload route | old chat feature | All deleted; the site uses zero runtime secrets. The old key should still be revoked at OpenAI since it may also exist in Vercel env vars. |
| 11 | Mangled scaffold directories (`srcapp*`, 20 empty folders) at repo root | generator artifact | Deleted |
| 12 | Generic robots.txt/sitemap listing template pages; no llms.txt, no legal pages, no security headers, no CSP | infrastructure | Hand-shaped robots.txt (AI crawlers welcomed by name), 3-URL sitemap, llms.txt with the full results, real Privacy/Terms pages, nonce CSP + HSTS/nosniff/XFO/Referrer-Policy/Permissions-Policy |

## Verification cycles

| Cycle | Deploy | Gates failed | Fix shipped |
| --- | --- | --- | --- |
| 1 | `d14d1bb` | banned words in mock copy; default 404 (CSP violation + default branding); axe: 17 contrast nodes (white text on mid-orange/olive chips in mocks); a11y 96 on home | custom 404, chip recolors, mock copy (`f240c1b`) |
| 2 | `f240c1b` | axe: 8 contrast nodes remained (severity chip color lived in a data array the first pass missed; green status text 3.98:1 on light) | darker olive + green (`e9b53ae`) |
| 3 | `e9b53ae` | axe: 1 node ("Locked" chip red 4.07:1 on dark panel); desktop LCP dragged by a font-loading chain | lighter red (`c319495`); font preload work below |
| 4a | `cd214c3` | experimental `inlineCss` emitted style tags without the CSP nonce: styles blocked, console error | immediate revert (`bab75eb`) |
| 4b | `0026c21` | root cause of the LCP chain: under dynamic rendering next/font emits preloads as HTTP Link headers, which Lighthouse ignores | fonts self-hosted in `/public/fonts` with hand-written `@font-face` (keeping the size-adjusted Arial fallbacks so CLS stays 0), real `<link rel="preload">` tags, immutable cache headers |
| 5 | `31ab20b` | cosmetic: visible nav scrollbar on Windows | hidden scrollbar, row still scrolls; full sweep re-run: all gates green |

Every cycle re-ran the full sweep (fingerprint greps, dash greps, banned vocabulary, console, axe, links) against the live production DOM, not the local build.

## Final gate status (live production)

- Zero generative-builder fingerprints in DOM and bundle (data-lov-id, framer-, elementor-, generator meta, badges: all absent; `X-Powered-By` disabled)
- Zero console errors/warnings/404s on `/`, `/privacy`, `/terms`, and the 404 page, tested at 1440/768/390 with the strict CSP enforcing
- Zero em dashes and zero en dashes on every page
- Zero banned vocabulary, hedges, filler transitions, or antithesis patterns (verified by grep against all four rendered pages)
- No glass morphism, no gradients, no Outfit/Inter/Roboto/Poppins (grep-verified; "inter" hits were substrings of "internal"/"interface")
- Every link works: all 19 results-table anchors resolve to section ids, nav anchors scroll correctly, footer links open, mailto is exactly johanlcilliers@gmail.com, GitHub points to JLcilliers
- Privacy and Terms pages exist, describe what the site actually does, and are linked in the footer
- robots.txt (AI crawlers allowed by name), sitemap.xml, llms.txt all present and hand-shaped; og.png, favicon.ico, icon.svg all 200
- No secrets in the client bundle (12 chunks grepped for key patterns; also zero `console.log`)
- axe-core (WCAG 2.x A/AA + best-practice): **0 violations on all four pages**
- Rich Results Test: crawled successfully, zero errors ("no items detected" is the expected result: Person, WebSite and ItemList/CreativeWork are valid schema.org markup but not rich-result-eligible types)
- All 19 client results and 15 project pages present with the exact figures from the reference document, plus the 16-entry toolkit index
- Design system matches the document: same palette (#221e1a dark, #e8e2d8 cream, #e08a38 orange), condensed Oswald display in caps, orange section numbers, four-stat rows with vertical rules and → arrows, black-stroke charts with filled area and orange terminal dot with YY-MM labels, dark-header tables with alternating row tint, orange `>` highlights, "Built with" lines with middle dots
- Responsive and correct at 390/768/1440 with no horizontal overflow
- Production deploy live and green

### Accessibility note on the orange

The document's orange (#e08a38) passes AA on the dark canvas (6.2:1) and is used there unchanged. On cream it measures 2.1:1, so light backgrounds use two derived tones: #c06a1a for large display text (3.1:1, passes AA-large) and #8a4a0d for small text (4.8:1). Mock-internal status colors were also darkened until axe reported zero violations.

## Lighthouse (final, live production)

Official Lighthouse CLI (v13, standard presets: desktop preset and default mobile simulation):

| Page | Device | Performance | Accessibility | Best practices | SEO | FCP | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | desktop | 100 | 100 | 100 | 100 | 0.3s | 0.5s | 0 | 0ms |
| / | mobile | 99 | 100 | 100 | 100 | 1.1s | 2.1s | 0 | 30ms |
| /privacy | desktop | 100 | 100 | 100 | 100 | 0.3s | 0.4s | 0 | 0ms |
| /privacy | mobile | 99 | 100 | 100 | 100 | 1.1s | 2.0s | 0 | 30ms |
| /terms | desktop | 100 | 100 | 100 | 100 | 0.3s | 0.4s | 0 | 0ms |
| /terms | mobile | 99 | 100 | 100 | 100 | 1.1s | 1.9s | 0 | 10ms |

All pages meet the 95+ gate on all four categories, both form factors. Core Web Vitals: LCP well under 2.5s, CLS 0, TBT far under the INP proxy threshold.

Measurement note: a separate MCP-based Lighthouse runner with its own heavier throttling model reported desktop performance of 86-91 during the loop; those runs fold this test machine's ~300-800ms South Africa to us-east TTFB into the simulation. The official CLI presets above are the comparable, industry-standard numbers. The one structural cost that remains by design: every page renders dynamically because the CSP nonce requires it (per the Next.js CSP guide), so HTML is never CDN-cached.

## Before and after

Baseline screenshots: `audit/before/` (1440/768/390, plus `audit/console-before.md`, `audit/live-html-before.html`, `audit/live-headers-before.txt`).
Final screenshots: `audit/after-final/` (cover at 1440/768/390, overview table, Healthy Start Florida case page, Google Hub MCP project page, terms page). Final HTML captures: `audit/live-*-after.html`.

Before: dark zinc template, purple gradient hero, feature cards, placeholder metrics, hydration error, favicon 404.
After: the document, as a website: dark cover with the orange rule and condensed lockup, cream content pages, real charts, real numbers, clean console.

## Follow-ups for Johan

1. Revoke the old OpenAI API key that lived in `.env.local` (starts `sk-proj-1iO3…`) at platform.openai.com, and delete `OPENAI_API_KEY` / `ADMIN_TOKEN` from the Vercel project env vars if present. Nothing uses them anymore.
2. The `portfolio-rebuild` branch is kept in sync with `main`; delete it whenever you like.
3. If you ever add analytics, update `/privacy` first (it currently promises none).
