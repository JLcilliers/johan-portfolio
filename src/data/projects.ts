export type Project = {
  id: string
  category: string
  name: string
  subtitle: string
  body: string[]
  highlights: string[]
  builtWith: string[]
}

export const projects: Project[] = [
  {
    id: 'google-hub-mcp',
    category: 'MCP & connectors',
    name: 'Google Hub MCP',
    subtitle: 'One MCP gateway to every GA4 and Search Console account',
    body: [
      'A remote MCP server that gives Claude a single endpoint into Google Analytics and Search Console across every connected account. It keeps AES-256 encrypted OAuth refresh tokens per account and refreshes them on demand, proxying Google’s APIs as native tool calls.',
      'This is the server that powered the entire SEO section of this portfolio: 130+ properties, queried from one place.',
    ],
    highlights: [
      'Encrypted per-account OAuth token vault in Supabase',
      'Tools for list_clients, ga4_report, gsc_query and joined GA4 + GSC pulls',
      'On-demand token refresh and quota tracking',
      'Streamable HTTP MCP with OAuth for Claude Desktop, Code and Cowork',
    ],
    builtWith: ['TypeScript', 'Node', 'Hono', 'MCP SDK', 'Supabase', 'Google APIs', 'OAuth 2.0', 'Vercel'],
  },
  {
    id: 'mcp-connector-suite',
    category: 'MCP & connectors',
    name: 'MCP Connector Suite',
    subtitle: 'Ahrefs, SEMrush, Screaming Frog and GBP as native Claude tools',
    body: [
      'A family of self-hosted Model Context Protocol servers that wrap the tools an SEO team lives in, so Claude can call them directly from chat. Each one installs in a single command and authenticates with a token instead of fragile email-matching OAuth.',
    ],
    highlights: [
      'Ahrefs connector: 28 tools across backlinks, keywords, SERP and batch analysis',
      'SEMrush MCP: 21 domain analytics, keyword and backlink tools',
      'Screaming Frog MCP: drive crawls, sitemaps and scheduled audits',
      'GBP and Google-account connectors for Business Profile and multi-account data',
    ],
    builtWith: ['TypeScript', 'Node', 'MCP SDK', 'Ahrefs v3', 'SEMrush API', 'Screaming Frog CLI'],
  },
  {
    id: 'ai-trading-bots',
    category: 'Trading bots',
    name: 'AI Trading Bots',
    subtitle: 'Gold, crypto, forex and equities engines with hard risk controls',
    body: [
      'A fleet of algorithmic trading bots. The flagship Gold Trader pairs a standalone Node engine with a live dashboard, streaming ticks and signals over WebSocket and using Claude for market commentary. Alongside it sit a 24/7 Binance crypto bot and a forex bot with a pure risk engine, plus an equities tracker that watches insider filings.',
    ],
    highlights: [
      'Gold Trader: triple-EMA FSM strategy, broker-adapter pattern, paper and live modes',
      'Crypto bot: Binance + VALR, multiple strategies, Telegram /panic kill-switch',
      'Forex bot: pure RiskEngine, SQLite trade journal, structured logging',
      'SmartMoney: SEC Form 4 monitoring with Alpaca paper trades',
    ],
    builtWith: ['Next.js', 'Node engine', 'Python', 'ccxt', 'Supabase', 'WebSocket', 'Anthropic API'],
  },
  {
    id: 'search-insights-hub',
    category: 'Audit & analytics',
    name: 'Search Insights Hub',
    subtitle: 'Automated client SEO reporting from GA4, GSC and PageSpeed',
    body: [
      'A reporting platform that pulls Analytics, Search Console and PageSpeed into one place and turns them into automated, shareable client reports. It handles multiple Google accounts, compares date ranges, scores recommendations by impact, and produces secure client-facing report links.',
    ],
    highlights: [
      'Multi-account Google OAuth with property selection',
      'Interactive dashboards with week, month and year comparisons',
      'AI-generated, priority-scored recommendations',
      'Secure shareable report links and a client portal',
    ],
    builtWith: ['Next.js', 'TypeScript', 'Prisma', 'Postgres', 'GA4 / GSC / PageSpeed APIs', 'Vercel'],
  },
  {
    id: 'luminari',
    category: 'Audit & analytics',
    name: 'Luminari',
    subtitle: 'Track brand visibility across AI search engines',
    body: [
      'A Generative Engine Optimization platform that measures how ChatGPT, Claude, Gemini and Perplexity cite and recommend a brand versus its competitors. Tracking is organized through monitors and prompts, with a visibility score and citation logging, plus content generation to close the gaps.',
    ],
    highlights: [
      'Brand Visibility Score from mention rate, citations and sentiment',
      'Multi-model querying across OpenAI, Anthropic and Google',
      'Citation tracking with dashboard charts',
      'Content generation and xlsx / PDF export',
    ],
    builtWith: ['Next.js', 'TypeScript', 'Supabase', 'TanStack Query', 'Recharts', 'multi-LLM SDKs'],
  },
  {
    id: 'answer-engine-optimizer',
    category: 'AI search',
    name: 'Answer Engine Optimizer',
    subtitle: 'Close the gap between brand truth and how LLMs describe you',
    body: [
      'A multi-tenant AI Engine Optimization platform that audits how language models describe a firm against its own Brand Truth, scoring each claim red, yellow or green. It tracks visibility and citations across models and watches competitor and Reddit sentiment. Fixes route through a remediation queue.',
    ],
    highlights: [
      'Trust Alignment Audit scoring narratives vs a Brand Truth source',
      'Visibility and citation tracking across OpenAI, Anthropic, Google and Perplexity',
      'Legacy content suppression and structured-signal alignment',
      'Client portal with rolled-up scores and a remediation queue',
    ],
    builtWith: ['Next.js', 'FastAPI', 'LangGraph', 'Playwright', 'Pinecone', 'Postgres', 'Turborepo'],
  },
  {
    id: 'website-audit-tool',
    category: 'Audit & analytics',
    name: 'Website Audit Tool',
    subtitle: 'Visual CRO and SEO audits as a polished PDF report',
    body: [
      'A tool that runs a full CRO, SEO and performance audit of any site and outputs a branded PDF report. It captures device-emulated screenshots, scores the page across three dimensions, runs Lighthouse, and writes prioritized recommendations with Claude generating the narrative.',
    ],
    highlights: [
      'Strategic desktop, mobile and tablet screenshots',
      'SEO checks across meta, headings, schema and Open Graph',
      'CRO review of hero, CTAs, trust signals and forms',
      'Lighthouse scoring and a prioritized, branded PDF report',
    ],
    builtWith: ['Next.js', 'Puppeteer', 'Firecrawl', 'Lighthouse', 'Sharp', 'Anthropic SDK', 'Vercel'],
  },
  {
    id: 'site-crawler',
    category: 'SEO & crawling',
    name: 'Site Crawler',
    subtitle: 'Crawl a site, extract its contact and tracking footprint',
    body: [
      'A crawler that renders a site with a real browser and pulls structured business intelligence from it: emails, phone numbers, address, social profiles and the analytics and tracking vendors running on each page, with on-page evidence for every detection.',
    ],
    highlights: [
      'JS-rendered crawling via Playwright with robots.txt parsing',
      'Extracts emails, region-aware phones, address and socials',
      'Detects tracking vendors and their IDs with evidence',
      'Per-page status and concurrency-limited crawling',
    ],
    builtWith: ['Next.js', 'TypeScript', 'Playwright', 'Cheerio', 'libphonenumber-js'],
  },
  {
    id: 'agency-operations-hub',
    category: 'Client dashboards',
    name: 'Agency Operations Hub',
    subtitle: 'One control panel for clients, MRR and agency operations',
    body: [
      'A central operations dashboard that consolidates clients, projects, MRR, team, SOPs and reporting into one app. It syncs a live Google ops sheet into Supabase through an immutable identity model and renders the KPIs the agency runs on.',
    ],
    highlights: [
      'Client, project, team and SOP management',
      'Google Sheets ops-sync into Supabase with write-back',
      'MRR and KPI dashboards',
      'Token-gated sync API and enforced SSR auth',
    ],
    builtWith: ['Next.js', 'React', 'Supabase SSR', 'Google Sheets API', 'Recharts', 'Resend'],
  },
  {
    id: 'client-onboarding',
    category: 'Onboarding & workflow',
    name: 'Client Onboarding',
    subtitle: 'Token-linked client intake from request to signed brief',
    body: [
      'A branded onboarding system that turns scattered kickoff emails into one repeatable flow. The agency spins up a session and sends the client a private tokenized link. Structured intake comes back through a guided wizard, and the completed brief exports to Word. Built in two variants for different agencies.',
    ],
    highlights: [
      'Admin dashboard to create and track onboarding sessions',
      'Tokenized per-client onboarding links',
      'Multi-step intake wizard with validation',
      'Word document export of the completed intake',
    ],
    builtWith: ['Next.js', 'React', 'Supabase', 'React Hook Form', 'Zod', 'docx'],
  },
  {
    id: 'statement2xlsx',
    category: 'Fintech',
    name: 'statement2xlsx',
    subtitle: 'Bank statement PDFs into validated Excel workbooks',
    body: [
      'A converter that turns bank statement PDFs into clean, structured Excel workbooks with real validation. It uses coordinate-based extraction with an OCR fallback for scanned statements and auto-detects the bank. Before a workbook ships, the tool checks its own output against the totals printed in the PDF.',
    ],
    highlights: [
      'Bank auto-detection with coordinate-based extraction',
      'Tesseract OCR fallback for scanned statements',
      'Validation against PDF metadata for totals and counts',
      'Multi-sheet Excel output plus a CLI and FastAPI web app',
    ],
    builtWith: ['Python', 'pdfplumber', 'Tesseract', 'openpyxl', 'FastAPI', 'Docker'],
  },
  {
    id: 'locumlink',
    category: 'Healthcare',
    name: 'LocumLink',
    subtitle: 'Marketplace matching locum doctors to facilities',
    body: [
      'A South African medical locum marketplace connecting doctors who want temporary shifts with facilities that need cover. Clinicians register and get their credentials verified, then browse shifts and manage bookings and timesheets. Facilities post work and admins moderate the platform.',
    ],
    highlights: [
      'Three roles: clinicians, facilities and admins',
      'Credential upload, verification and document review',
      'Job posting, matching and notifications',
      'Booking, timesheet and messaging workflow with ratings',
    ],
    builtWith: ['Next.js', 'TypeScript', 'Supabase / Postgres', 'email + cron'],
  },
  {
    id: 'license-control',
    category: 'Platform & infra',
    name: 'License Control',
    subtitle: 'Ed25519-signed activation-on-payment for shipped apps',
    body: [
      'A centralized licensing system that enforces activation-on-payment across client projects as a disclosed mechanism. Protected apps call a check endpoint and get back an Ed25519-signed envelope whose config only exists while active, so removing the client-side check still disables the app, with an offline grace window before lock.',
    ],
    highlights: [
      'Ed25519-signed, nonce-protected license envelopes',
      'Config payload present only while active',
      'Offline grace window anchored to signed server time',
      'Drop-in TypeScript SDK and an admin dashboard',
    ],
    builtWith: ['Next.js', 'TypeScript', 'Supabase', 'Ed25519', 'Vercel'],
  },
  {
    id: 'youtube-transcriber',
    category: 'Content & media',
    name: 'YouTube Transcriber',
    subtitle: 'Bulk video transcription with captions and ASR fallback',
    body: [
      'A production-grade transcription system that handles single videos, whole channels and playlists, and local files in bulk. It prefers existing captions and falls back across several ASR engines, chunks multi-hour videos with voice-activity detection, and exports to five formats.',
    ],
    highlights: [
      'YouTube videos, channels, playlists and local files',
      'Caption-first with faster-whisper, Deepgram and AssemblyAI fallback',
      'VAD chunking for multi-hour video',
      'Exports to SRT, VTT, TXT, JSON and Markdown',
    ],
    builtWith: ['Python', 'faster-whisper', 'FFmpeg', 'Deepgram / AssemblyAI', 'Docker'],
  },
  {
    id: 'rankwriter-ai',
    category: 'Content & media',
    name: 'RankWriter.AI',
    subtitle: 'Token-based AI content built for SEO and AI search',
    body: [
      'A content-generation SaaS for agencies that produces publication-ready writing tuned for both traditional search and AI engines like ChatGPT and Perplexity. It runs a deep brand analysis first so output stays on-voice, then exports straight to Word, billed on a token model.',
    ],
    highlights: [
      'Content tuned for SEO and AI-search visibility',
      'Brand analysis to hold a consistent voice',
      'Token-based usage for agencies',
      'Word document export',
    ],
    builtWith: ['FastAPI', 'Anthropic', 'Next.js', 'Pydantic', 'python-docx', 'Vercel + Railway'],
  },
]

export type ToolkitEntry = {
  name: string
  description: string
}

export const toolkit: ToolkitEntry[] = [
  {
    name: 'Website Quality Audit Generator',
    description: 'Merges crawl, GA4, GSC and backlink CSVs into a per-URL Excel audit with an action on every page.',
  },
  {
    name: 'SEO + AI Content Optimizer',
    description: 'Document-in, document-out DOCX rewriting that highlights only genuinely new content in green.',
  },
  {
    name: 'SEO Build Audit',
    description: 'Runs an 80-check technical SEO SOP against any site and grades each issue by severity.',
  },
  {
    name: 'Conversion Tagging Scanner',
    description: 'Crawls a site for GTM and GA4 tagging opportunities with a CSS selector and snippet behind every finding.',
  },
  {
    name: 'Client Alignment Checker',
    description: 'Stores per-client rules and brand guidelines, then AI-checks deliverables against them before they ship.',
  },
  {
    name: 'Newsletter-to-Video Reels',
    description: 'Turns newsletter text into narrated social video using Claude scripting and ElevenLabs voiceover.',
  },
  {
    name: 'LinkedIn Blog Reposter',
    description: 'Watches blogs by RSS and sitemap and auto-drafts on-brand LinkedIn posts for review and scheduling.',
  },
  {
    name: 'Sales Rep Knowledge Leaderboard',
    description: 'Gamified weekly product-knowledge quizzes with a public, tiered leaderboard to drive training.',
  },
  {
    name: 'Web Page Content Extractor',
    description: 'Pulls meta tags and the full H1 to H4 heading structure from any URL for content audits and briefs.',
  },
  {
    name: 'Budget Planner',
    description: 'Multi-currency personal budgeting with live FX rates and trend charts, and recommendations graded by severity.',
  },
  {
    name: 'SnapDoc',
    description: 'WhatsApp-driven doctor referral and booking with automated 24-hour and 2-hour appointment reminders.',
  },
  {
    name: 'SA Tax & Estate Planning Bot',
    description: 'A Claude-driven assistant that ingests financial documents and maintains a structured tax and estate knowledge base.',
  },
  {
    name: 'Marketing Studio Website',
    description: 'A full marketing site with a built-in Gemini image-generation pipeline and IndexNow submission.',
  },
  {
    name: 'Claude Account Switcher',
    description: 'A utility for switching between multiple Claude accounts and configurations from one place.',
  },
  {
    name: 'Internet Throttle & RAM Monitor',
    description: 'Local system utilities for simulating constrained networks and watching memory in real time.',
  },
  {
    name: 'Tool File Allocator',
    description: 'A helper that organizes and routes generated files into the right project locations for Claude workflows.',
  },
]
