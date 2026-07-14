# johan-portfolio

The portfolio site of Johan Cilliers. One long page mirroring the print "SEO performance portfolio" document: 19 client SEO results measured in Google Search Console, followed by the software projects built alongside the client work.

## Stack

Next.js (App Router) with TypeScript and Tailwind CSS 4, deployed on Vercel. No client-side JavaScript beyond the framework runtime: the charts are server-rendered SVG and the interface mocks are plain markup.

## Structure

- `src/data/clients.ts` holds the 19 client case records, including the monthly click series behind each chart.
- `src/data/projects.ts` holds the featured software projects and the condensed toolkit index.
- `src/components/` holds the section components, the SVG chart, and the hand-built interface mocks.
- `src/proxy.ts` sets a per-request nonce CSP; other security headers live in `next.config.ts`.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```
