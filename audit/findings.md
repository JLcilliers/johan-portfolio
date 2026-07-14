# AI tell detection sweep

Baseline: live production at https://johan-portfolio-sage.vercel.app/ (commit 6b1bf31) plus the repo source, captured 2026-07-14 before the rebuild. Fix column describes what the rebuild did; the rebuild replaced the entire `src/` tree, so "removed with old site" means the offending file no longer exists.

## A. Generative-builder code fingerprints

| Tell | Present? | Where | Fix |
| --- | --- | --- | --- |
| `data-lov-id` (Lovable) | No | checked repo + rendered DOM | n/a |
| `framer-` classes, Framer badge, events.framer.com | No | checked repo + rendered DOM (framer-motion the npm package was present but emits no such markers) | framer-motion dependency removed entirely |
| Meta generator tag | No | rendered DOM | kept absent; `poweredByHeader: false` added so the `X-Powered-By: Next.js` header is also gone |
| "Built with" / "Made with" / "Powered by" badge or footer | Yes | `src/app/page.tsx:181` "…background — powered by AI"; README "Built with Next.js…" | Removed with old site; README rewritten |
| favicon.ico in `/public` (v0 signature) | No, worse: no favicon at all | live site 404s on /favicon.ico | Added `src/app/favicon.ico` (generated, PNG-in-ICO) and `src/app/icon.svg` |
| `'use client'` + static metadata mix (v0) | No | — | n/a |
| Stock shadcn/Radix combos | Partial | `src/components/ui/*` (button/card/badge via class-variance-authority, stock form) | Removed with old site; zero UI-kit dependencies remain |
| Elementor / Bolt / Vite artifacts | No | — | n/a |
| Mangled scaffold dirs | Yes | 20 empty `srcapp*` folders at repo root (broken path separators from a generator run) | Deleted |
| Placeholder copy in production | Yes | every case study card: "Example outcomes (replace with verified numbers)" | Entire fabricated case-study system replaced with the 19 real Search Console results |

## B. Console and runtime errors (live baseline)

| Error | Cause | Fix |
| --- | --- | --- |
| React minified error #418 (hydration mismatch) | ThemeProvider toggling `class` on `<html>` between server and client | Theme system removed; no client components remain, so there is nothing to hydrate wrong |
| GET /favicon.ico 404 | no icon files, no icon metadata | favicon.ico + icon.svg added under `src/app/` |

Recorded verbatim in `audit/console-before.md`.

## C. Infrastructure and security tells

| Item | Before | After |
| --- | --- | --- |
| Secrets | `OPENAI_API_KEY` (live key) in `.env.local`; API routes proxied OpenAI | `.env.local` deleted, all API routes deleted, zero runtime env secrets. The old OpenAI key should still be revoked at platform.openai.com since it may also live in Vercel env vars. |
| Client bundle secrets | none found in `.next/static` | re-checked after rebuild, none (no env usage at all) |
| Response headers | only Vercel defaults; no CSP, no Referrer-Policy, no Permissions-Policy | nonce-based CSP via `src/proxy.ts`; HSTS, nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy via `next.config.ts` |
| robots.txt | generic allow-all with disallowed /admin + /api paths that advertised their existence | hand-shaped; AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended) explicitly allowed |
| sitemap.xml | listed 7 template pages incl. /cv-chat | 3 real pages |
| llms.txt | missing | added at `/llms.txt` with the full results table and project list |

## D. Vibe-coded visual tells

| Tell | Before | After |
| --- | --- | --- |
| Cyan/magenta/purple gradient | Yes: hero headline `from-blue-400 via-purple-400 to-pink-400` style gradient text | Gone; palette is the document's warm dark/cream/orange |
| Glass morphism | Yes: `bg-zinc-950/80` translucent navbar | Solid dark nav |
| Uniform scroll-triggered fade-ups | Yes: framer-motion fade-in on every section (sections render blank in full-page screenshots) | All scroll animation removed; the only motion is link color transitions, and `scroll-behavior: smooth` is gated behind `prefers-reduced-motion: no-preference` |
| Font: Poppins (adjacent to banned set) | Yes | Oswald (condensed display) + Source Sans 3 (body), both self-hosted via next/font |
| Generic hero + three-feature-cards + CTA | Yes | Replaced by the document structure: cover, overview, section dividers, case pages, tools, closing |
| Stock icon set | Yes: lucide-react everywhere | Dependency removed; no icon fonts or packs; the only graphics are hand-built SVG charts and markup mocks |
| Theme toggle | Yes | Removed; dark/light sections alternate exactly as the document does |
| Chat widget bubble | Yes | Removed |

## E. Trust and completeness signals

| Item | Before | After |
| --- | --- | --- |
| Dead or placeholder links | case studies pointed at fabricated write-ups | every internal link targets an existing section id or page; external links: GitHub (JLcilliers), LinkedIn, Vercel privacy policy, mailto |
| Footer | name + page links, no legal pages | name, johanlcilliers@gmail.com, copyright, GitHub, Privacy, Terms |
| Privacy Policy / Terms | missing | real pages at /privacy and /terms describing what the site actually does (no cookies, no analytics, no forms; Vercel server logs; email contact) |
| Contact identity | correct | unchanged: Johan Cilliers, johanlcilliers@gmail.com |
| JSON-LD | Person + WebSite with LinkedIn only | Person (`sameAs`: github.com/JLcilliers + LinkedIn) + WebSite + ItemList of CreativeWork per project, nonce-tagged |

## F. Copy tells

All user-facing strings were rewritten from the reference document under the strict rule set. Instances found in the old site (all removed with it):

- Em dashes in 15 source strings, including the site title "Johan Cilliers — SEO Leader | AI Automation Builder | Developer".
- Pipe-delimited keyword-stuffed title and H1 ("SEO Leader | Digital Marketing Manager | AI Automation Builder | Developer").
- Banned vocabulary: "comprehensive" (4x, incl. "Comprehensive SEO engagement"), "streamline" ("automation workflows that streamline report generation"), "significant organic growth", "cutting-edge"-adjacent phrasing throughout the AI Lab copy.
- Vague unverifiable claims: "+65% YoY", "significant growth" flagged in-page as "Example outcomes (replace with verified numbers)".
- Tricolon marketing patterns across product descriptions.

New copy checks applied (and re-verified by grep in the gate sweep):

- Zero U+2014 and U+2013 in user-facing strings; ranges use the → arrow (U+2192) as the document does, "Built with" lists use the middle dot.
- Rule-of-Three constructions from the source PDF were broken up where they read as rhetoric (e.g. Kayton, XO Dental, Coastal CT, Luminari, Answer Engine Optimizer, Client Onboarding, LocumLink, statement2xlsx, Orange County Elections descriptions). Factual enumerations of literally three things (e.g. "red, yellow or green" scoring states) were kept.
- No banned vocabulary, no filler transitions, no hedging, no antithesis constructs, no "It's not just X, it's Y".
- Vague claims replaced with the exact figures: "62,439 → 317,696 clicks, average position 24.7 → 7.8" style throughout, matching the reference document's numbers exactly.
- Sentence case for body and subheads; ALL CAPS only on display headings and eyebrows, matching the document.
