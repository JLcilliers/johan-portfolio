# Johan Cilliers — Portfolio

A production-ready hybrid portfolio website built with Next.js (App Router), TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Case Studies** with Technical Toggle (Marketing View / Engineering View)
- **Products Showcase** (SearchSignal + ExtractaLedger)
- **AI Lab** with interactive Automation Gallery
- **CV Chatbot** — RAG-powered chat that answers questions about Johan's CV
- **Admin CV Upload** — password-protected page to upload and index a CV PDF
- **SEO Optimized** — metadata, JSON-LD, sitemap, robots.txt
- **Dark/Light Mode** with localStorage persistence
- **Responsive Design** with Framer Motion animations
- **Vercel-ready** deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4 + shadcn-style components
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI**: OpenAI API (embeddings + chat completions)
- **Font**: Poppins (via next/font/google)

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
# Clone the repo
git clone <your-repo-url>
cd johan-portfolio

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values:
# - OPENAI_API_KEY (required for CV chatbot)
# - ADMIN_TOKEN (required for CV upload)
# - SITE_URL (your production URL)

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | For chatbot | OpenAI API key for embeddings + chat |
| `ADMIN_TOKEN` | For CV upload | Password for the /admin/cv page |
| `SITE_URL` | For SEO | Production URL (defaults to localhost:3000) |
| `KV_REST_API_URL` | For prod KV | Vercel KV URL (auto-set when you add KV) |
| `KV_REST_API_TOKEN` | For prod KV | Vercel KV token (auto-set when you add KV) |

## Updating Content

All content is stored as TypeScript files in `src/content/`:

- **`profile.ts`** — Name, bio, skills, differentiators
- **`caseStudies.ts`** — Case study data (slugs generate pages)
- **`products.ts`** — Product data (SearchSignal, ExtractaLedger)
- **`aiLab.ts`** — AI Lab automation items

To add a new case study, add an entry to the `caseStudies` array in `src/content/caseStudies.ts`. The page at `/work/[slug]` is generated automatically.

## CV Chatbot

### How to upload a CV

1. Go to `/admin/cv`
2. Enter your admin token
3. Upload a PDF file
4. The system extracts text, chunks it, and creates embeddings
5. The chatbot at `/cv-chat` (and the floating widget) can now answer questions

### How it works

- PDF text is extracted server-side
- Text is split into ~800-character chunks with overlap
- Each chunk is embedded using OpenAI's `text-embedding-3-small`
- User questions are embedded and matched via cosine similarity
- Top-K chunks are sent as context to GPT-4o-mini
- Responses include source citations

### Local Development

In local dev, chunks and embeddings are stored in-memory. In production with Vercel KV, they persist across deployments.

## Company Logos

Logos are pulled from Google's favicon service (`google.com/s2/favicons?domain=...`). To replace with custom logos:

1. Add your logo images to `public/logos/`
2. Update the `CompanyLogo` component in `src/components/ui/company-logo.tsx`

## Deployment to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create johan-portfolio --public --source=. --remote=origin --push
   ```

2. Import into Vercel:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repo
   - Add environment variables (OPENAI_API_KEY, ADMIN_TOKEN, SITE_URL)
   - Optionally add Vercel KV for persistent CV storage
   - Deploy

3. Set your production URL in `SITE_URL`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home
│   ├── work/              # Case studies
│   ├── products/          # Products
│   ├── ai/                # AI Lab
│   ├── about/             # About
│   ├── contact/           # Contact
│   ├── cv-chat/           # CV Chat page
│   ├── admin/cv/          # Admin CV upload
│   ├── api/               # API routes
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page sections
│   └── chat/              # Chat widget
├── content/               # Content data files
├── lib/                   # Utilities, theme, embeddings
└── types/                 # TypeScript types
```

## Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```
