/*
 * Hand-built interface mocks for the Tools & AI section. Every mock is a
 * decorative illustration (aria-hidden); the surrounding copy carries the
 * meaning. No images, no icon packs, just markup. Colors and sizes are
 * literal utility classes so the strict CSP needs no inline styles.
 */

type FrameProps = {
  address: string
  caption: string
  children: React.ReactNode
  tone?: 'dark' | 'light'
}

function MockFrame({ address, caption, children, tone = 'dark' }: FrameProps) {
  return (
    <div
      aria-hidden="true"
      className="select-none overflow-hidden rounded-lg border border-rule-dark bg-dark-inset shadow-[0_18px_40px_-18px_rgba(20,15,10,0.45)]"
    >
      <div className="flex items-center gap-3 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="h-2 w-2 rounded-full bg-bone-muted/60" />
          <span className="h-2 w-2 rounded-full bg-bone-muted/40" />
        </span>
        <span className="mx-auto truncate rounded-sm bg-dark-panel px-4 py-0.5 text-[0.6rem] tracking-wide text-bone-muted">
          {address}
        </span>
        <span className="w-8" />
      </div>
      <div className={tone === 'dark' ? 'bg-dark-panel p-4 text-bone' : 'bg-cream p-4 text-body'}>
        {children}
      </div>
      <p className="px-4 py-2 text-[0.6rem] tracking-wide text-bone-muted">{caption}</p>
    </div>
  )
}

function Sparkline({ points, className }: { points: number[]; className?: string }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const span = max - min || 1
  const coords = points
    .map((p, i) => `${(i / (points.length - 1)) * 200},${44 - ((p - min) / span) * 40}`)
    .join(' ')
  return (
    <svg viewBox="0 0 200 48" className={className ?? 'h-auto w-full'} preserveAspectRatio="none">
      <polyline points={coords} fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

function Ring({ value, label, stroke }: { value: number; label: string; stroke: string }) {
  const r = 26
  const c = 2 * Math.PI * r
  return (
    <div className="flex flex-col items-center gap-1">
      <svg viewBox="0 0 64 64" className="h-16 w-16">
        <circle cx="32" cy="32" r={r} fill="none" stroke="var(--color-rule)" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth="5"
          strokeDasharray={`${((value / 100) * c).toFixed(1)} ${c.toFixed(1)}`}
          strokeLinecap="round"
          transform="rotate(-90 32 32)"
        />
        <text x="32" y="36" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--color-ink)">
          {value}
        </text>
      </svg>
      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-mute">{label}</span>
    </div>
  )
}

const dot = 'inline-block h-1.5 w-1.5 shrink-0 rounded-full'
const chip = 'rounded-sm px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wide'

/* MCP & connectors */

export function GoogleHubMock() {
  const accounts = [
    ['ads-team@gmail.com', '104 GA4 / 77 GSC'],
    ['Agency A', '135 GA4 / 146 GSC'],
    ['Agency B', '162 GA4 / 617 GSC'],
    ['Agency C', '19 GA4 / 31 GSC'],
    ['seo@my-agency.com', '30 GA4 / 17 GSC'],
  ]
  const calls: [string, string, string][] = [
    ['list_clients', '()', '-> 11 accounts / 742 GA4 / 955 GSC'],
    ['gsc_query', 'site: hillstax9.gov / last 90d', '-> clicks 317,696 / pos 7.8 / +409% YoY'],
    ['ga4_report', 'property: 413743686 / sessions', '-> 48,210 sessions / engagement 61%'],
  ]
  return (
    <MockFrame address="google-hub-mcp · MCP gateway" caption="Streamable HTTP MCP / OAuth for Claude Desktop, Code and Cowork. One vault, native tool calls.">
      <div className="grid gap-3 sm:grid-cols-[190px_1fr]">
        <div className="rounded-sm border border-rule-dark bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">
            Connected Google accounts
          </p>
          <ul className="mt-2 space-y-1.5">
            {accounts.map(([name, counts]) => (
              <li key={name} className="rounded-sm bg-dark-panel px-2 py-1.5">
                <p className="flex items-center gap-1.5 truncate text-[0.62rem] text-bone">
                  <span className={`${dot} bg-[#7fb069]`} />
                  {name}
                </p>
                <p className="pl-3 text-[0.55rem] text-bone-muted">{counts}</p>
              </li>
            ))}
          </ul>
          <p className="mt-2 rounded-sm bg-dark-panel px-2 py-1 text-[0.55rem] text-accent">
            130+ properties / AES-256 vault
          </p>
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold text-bone">Claude -&gt; one endpoint, every account</p>
          <div className="mt-2 space-y-2">
            {calls.map(([name, args, result]) => (
              <div key={name} className="rounded-sm border-l-2 border-accent bg-dark-inset p-2">
                <p className="text-[0.62rem] font-bold text-accent">{name}</p>
                <p className="text-[0.55rem] text-bone-muted">{args}</p>
                <p className="mt-1 text-[0.6rem] font-semibold text-bone">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockFrame>
  )
}

export function ConnectorSuiteMock() {
  const connectors: [string, string, string, string][] = [
    ['Ahrefs Connector', '28 tools', 'Backlinks / keywords / SERP / batch', 'bg-[#4d7c46]'],
    ['SEMrush MCP', '21 tools', 'Domain analytics / keyword research', 'bg-[#c06a1a]'],
    ['Screaming Frog MCP', '8 tools', 'Crawls / sitemaps / scheduled audits', 'bg-[#4a6b9a]'],
    ['GBP Connector', 'OAuth', 'Locations / profile metrics / sync', 'bg-[#9a7b2d]'],
    ['Google Accounts MCP', '6 tools', 'GA4 + GSC across client accounts', 'bg-[#a33f3f]'],
    ['Google Hub MCP', 'gateway', '130+ GA4/GSC properties, one vault', 'bg-[#6b5b8e]'],
  ]
  return (
    <MockFrame
      address="MCP connectors · Ahrefs / SEMrush / Screaming Frog / GBP"
      caption="Self-hosted Model Context Protocol servers. One-command install, token auth."
      tone="light"
    >
      <p className="text-sm font-bold text-ink">MCP Connector Suite</p>
      <p className="text-[0.62rem] text-mute">
        Self-hosted MCP servers: every data source as native Claude tools.
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {connectors.map(([name, badge, desc, dotColor]) => (
          <div key={name} className="rounded-sm border border-rule bg-bone p-2">
            <p className="flex items-center justify-between gap-2 text-[0.66rem] font-bold text-ink">
              <span className="flex min-w-0 items-center gap-1.5">
                <span className={`${dot} ${dotColor}`} />
                <span className="truncate">{name}</span>
              </span>
              <span className={`${chip} shrink-0 bg-cream-row text-accent-deep`}>{badge}</span>
            </p>
            <p className="mt-1 text-[0.58rem] text-mute">{desc}</p>
            <p className="mt-1.5 border-t border-rule pt-1 text-[0.55rem] text-mute">
              npx / one-command install / token auth
            </p>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

/* Trading bots */

export function TradingBotsMock() {
  return (
    <MockFrame
      address="trading-engine · XAU/USD / paper mode"
      caption="Triple-EMA pullback strategy, broker-adapter pattern, Telegram kill-switch across the fleet."
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[0.7rem] font-bold text-bone">Gold Trader · XAU/USD</p>
        <span className={`${chip} bg-[#2e4629] text-[#a3cf96]`}>Live</span>
        <span className={`${chip} bg-dark-inset text-bone-muted`}>Paper mode</span>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_180px]">
        <div className="rounded-sm bg-dark-inset p-3">
          <p className="text-lg font-bold text-bone">
            2,440.18 <span className="text-[0.62rem] font-bold text-[#a3cf96]">+1.32%</span>
          </p>
          <div className="mt-2 text-accent">
            <Sparkline points={[4, 6, 5, 8, 9, 8, 11, 12, 11, 14, 13, 16, 18, 17, 21]} className="h-20 w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-sm border-l-2 border-[#7fb069] bg-dark-inset p-2">
            <p className="text-[0.62rem] font-bold text-[#a3cf96]">BUY signal</p>
            <p className="text-[0.55rem] text-bone-muted">Triple-EMA pullback / conf 0.82</p>
          </div>
          <div className="rounded-sm border-l-2 border-accent bg-dark-inset p-2">
            <p className="text-[0.62rem] font-bold text-accent">FSM: IN-WINDOW</p>
            <p className="text-[0.55rem] text-bone-muted">10-indicator confluence</p>
          </div>
          <div className="rounded-sm bg-dark-inset p-2 text-[0.55rem] text-bone-muted">
            Claude commentary per signal
          </div>
        </div>
      </div>
      <p className="mt-3 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">
        Also in the fleet
      </p>
      <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
        {[
          ['Crypto Bot', 'Binance + VALR / 24/7 / Telegram'],
          ['Forex Bot', 'IG / risk engine / SQLite journal'],
          ['SmartMoney', 'SEC Form 4 / Alpaca paper'],
        ].map(([name, desc]) => (
          <div key={name} className="rounded-sm bg-dark-inset p-2">
            <p className="flex items-center gap-1.5 text-[0.62rem] font-bold text-bone">
              <span className={`${dot} bg-accent`} />
              {name}
            </p>
            <p className="text-[0.55rem] text-bone-muted">{desc}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

/* Audit & analytics */

export function SearchInsightsMock() {
  const pages: [string, string][] = [
    ['/pregnancy-calculator', '18,661'],
    ['/property-tax', '12,430'],
    ['/dmv-appointments', '9,512'],
    ['/bed-sizes', '7,204'],
    ['/services', '4,118'],
  ]
  return (
    <MockFrame
      address="searchsignal.online · GA4 + GSC + PageSpeed"
      caption="Multi-account OAuth, date-range comparisons, secure client-facing report links."
      tone="light"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-ink">Client SEO Report</p>
        <span className="flex gap-1.5">
          <span className={`${chip} bg-cream-row text-accent-deep`}>Mar - May 2026</span>
          <span className={`${chip} bg-accent-deep text-white`}>Share report</span>
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['317,696', 'Clicks +409%'],
          ['2.08M', 'Impressions'],
          ['7.8', 'Avg position'],
          ['61%', 'Engagement'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-sm border border-rule bg-bone p-2">
            <p className="text-sm font-bold text-ink">{value}</p>
            <p className="text-[0.55rem] uppercase tracking-wide text-mute">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_170px]">
        <div className="rounded-sm border border-rule bg-bone p-2.5">
          <p className="text-[0.58rem] font-semibold uppercase tracking-wide text-mute">Organic clicks</p>
          <div className="mt-1 text-accent-mid">
            <Sparkline points={[2, 3, 3, 4, 5, 6, 6, 8, 10, 13, 17, 22]} className="h-20 w-full" />
          </div>
        </div>
        <div className="rounded-sm border border-rule bg-bone p-2.5">
          <p className="text-[0.58rem] font-semibold uppercase tracking-wide text-mute">Top pages</p>
          <ul className="mt-1.5 space-y-1">
            {pages.map(([path, clicks]) => (
              <li key={path} className="flex items-baseline justify-between gap-2 text-[0.58rem]">
                <span className="truncate text-body">{path}</span>
                <span className="font-bold text-accent-deep">{clicks}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockFrame>
  )
}

export function LuminariMock() {
  const models: [string, string, string, string][] = [
    ['ChatGPT', '81%', 'w-[81%]', 'bg-[#7fb069]'],
    ['Claude', '74%', 'w-[74%]', 'bg-[#e08a38]'],
    ['Gemini', '62%', 'w-[62%]', 'bg-[#d0a94b]'],
    ['Perplexity', '55%', 'w-[55%]', 'bg-[#7a9cc6]'],
  ]
  return (
    <MockFrame
      address="luminari · generative engine optimization"
      caption="Monitors and prompts drive multi-model querying across OpenAI, Anthropic and Google."
    >
      <p className="text-[0.7rem] font-bold text-bone">AI Visibility · Luminari</p>
      <p className="text-[0.55rem] text-bone-muted">
        How ChatGPT, Claude and Gemini describe your brand vs competitors.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[150px_1fr]">
        <div className="flex flex-col items-center justify-center rounded-sm bg-dark-inset p-3">
          <svg viewBox="0 0 80 80" className="h-20 w-20">
            <circle cx="40" cy="40" r="32" fill="none" stroke="var(--color-rule-dark)" strokeWidth="7" />
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="7"
              strokeDasharray="148.8 201.1"
              strokeLinecap="round"
              transform="rotate(-90 40 40)"
            />
            <text x="40" y="46" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--color-bone)">
              74
            </text>
          </svg>
          <p className="mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-bone-muted">
            Brand visibility
          </p>
          <p className="text-[0.55rem] font-bold text-accent">+12 pts vs last month</p>
        </div>
        <div>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">
            Model mention rate
          </p>
          <ul className="mt-2 space-y-2">
            {models.map(([name, value, width, color]) => (
              <li key={name} className="flex items-center gap-2 text-[0.6rem] text-bone">
                <span className="w-14 shrink-0">{name}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-dark-inset">
                  <span className={`block h-full rounded-full ${width} ${color}`} />
                </span>
                <span className="w-8 text-right font-bold text-bone-muted">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">
            Recent citations
          </p>
          <ul className="mt-1.5 space-y-1">
            {[
              ['ChatGPT', '“best SEO agency for dentists”'],
              ['Perplexity', '“local SEO services comparison”'],
              ['Claude', '“GA4 reporting tools”'],
            ].map(([model, quote]) => (
              <li key={quote} className="flex items-center gap-2 rounded-sm bg-dark-inset px-2 py-1 text-[0.55rem]">
                <span className="font-bold text-accent">{model}</span>
                <span className="truncate text-bone-muted">{quote}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockFrame>
  )
}

export function AnswerEngineMock() {
  const claims: [string, string, string][] = [
    ['Founded & ownership', 'Aligned across all models', 'bg-[#4d7c46]'],
    ['Service scope', 'Partial: 2 models omit AEO', 'bg-[#9a7b2d]'],
    ['Pricing positioning', 'Conflicts with legacy content', 'bg-[#a33f3f]'],
    ['Geographic markets', 'Aligned', 'bg-[#4d7c46]'],
    ['Differentiators', 'Weak citation in Gemini', 'bg-[#9a7b2d]'],
  ]
  return (
    <MockFrame
      address="aeo-platform · AI engine optimization"
      caption="Brand Truth vs how LLMs actually answer. Red, yellow, green per claim."
      tone="light"
    >
      <p className="text-sm font-bold text-ink">Trust Alignment Audit</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_170px]">
        <ul className="space-y-1.5">
          {claims.map(([claim, status, color]) => (
            <li key={claim} className="flex items-center gap-2 rounded-sm border border-rule bg-bone px-2.5 py-1.5">
              <span className={`${dot} ${color}`} />
              <span className="flex-1">
                <span className="block text-[0.64rem] font-bold text-ink">{claim}</span>
                <span className="block text-[0.55rem] text-mute">{status}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="rounded-sm bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">
            Remediation queue
          </p>
          <ul className="mt-2 space-y-1.5">
            {[
              'Suppress legacy pricing page',
              'Add Organization schema',
              'Publish AEO service page',
              'Reddit sentiment reply',
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5 rounded-sm bg-dark-panel px-2 py-1 text-[0.55rem] text-bone-muted">
                <span className={`${dot} bg-accent`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockFrame>
  )
}

export function WebsiteAuditMock() {
  const findings: [string, string, string][] = [
    ['HIGH', 'Hero CTA below the fold on mobile', 'bg-[#a33f3f]'],
    ['HIGH', 'Missing Product schema on 14 pages', 'bg-[#a33f3f]'],
    ['MED', 'LCP 4.1s: compress hero image', 'bg-[#9a7b2d]'],
    ['LOW', 'Add trust badges near checkout', 'bg-[#4d7c46]'],
  ]
  return (
    <MockFrame
      address="website-audit · visual CRO + SEO report"
      caption="Device-emulated screenshots, Lighthouse scoring, Claude-written narrative, branded PDF out."
      tone="light"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-ink">Website Audit · CRO + SEO</p>
        <span className={`${chip} bg-accent-deep text-white`}>Export PDF</span>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_150px]">
        <div>
          <div className="flex gap-4">
            <Ring value={86} label="SEO" stroke="#4d7c46" />
            <Ring value={71} label="CRO" stroke="#c06a1a" />
            <Ring value={64} label="Performance" stroke="#9a7b2d" />
          </div>
          <p className="mt-3 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-mute">
            Prioritized findings
          </p>
          <ul className="mt-1.5 space-y-1">
            {findings.map(([severity, text, color]) => (
              <li key={text} className="flex items-center gap-2 rounded-sm border border-rule bg-bone px-2 py-1 text-[0.6rem] text-body">
                <span className={`${chip} ${color} text-white`}>{severity}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-start justify-center gap-2 pt-1">
          {['Desktop', 'Mobile'].map((device) => (
            <div key={device} className="w-16">
              <div className="rounded-sm border border-rule bg-bone p-1.5">
                <div className="h-2 w-8 rounded-sm bg-cream-row" />
                <div className="mt-1 h-1.5 w-full rounded-sm bg-cream-row" />
                <div className="mt-0.5 h-1.5 w-9 rounded-sm bg-cream-row" />
                <div className="mt-1.5 h-2 w-7 rounded-sm bg-accent-mid" />
              </div>
              <p className="mt-1 text-center text-[0.5rem] uppercase tracking-wide text-mute">{device}</p>
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  )
}

/* SEO & crawling */

export function SiteCrawlerMock() {
  const rows: [string, string, string, string, string][] = [
    ['/', '200', 'JS', 'info@…', 'GA4 / Meta Pixel'],
    ['/services', '200', 'JS', '-', 'GA4 / GTM'],
    ['/contact', '200', 'static', 'hello@…', 'GA4 / HubSpot'],
    ['/blog/seo-guide', '200', 'JS', '-', 'GA4 / LinkedIn'],
    ['/about', '200', 'static', 'team@…', 'GA4'],
  ]
  return (
    <MockFrame
      address="site-crawler · business intelligence extractor"
      caption="Playwright JS rendering / robots-aware / region-aware phone parsing."
      tone="light"
    >
      <p className="text-sm font-bold text-ink">Site Crawler</p>
      <div className="mt-2 flex gap-2">
        <span className="flex-1 truncate rounded-sm border border-rule bg-bone px-2 py-1 text-[0.6rem] text-mute">
          https://example-client.com
        </span>
        <span className={`${chip} bg-accent-deep text-white`}>Crawl site</span>
      </div>
      <div className="mt-2 overflow-hidden rounded-sm border border-rule">
        <div className="grid grid-cols-[1.4fr_0.6fr_0.8fr_0.8fr_1.2fr] bg-dark-inset px-2 py-1 text-[0.5rem] font-bold uppercase tracking-wide text-bone">
          <span>Page</span>
          <span>Status</span>
          <span>Rendered</span>
          <span>Emails</span>
          <span>Tracking</span>
        </div>
        {rows.map(([page, status, rendered, emails, tracking], i) => (
          <div
            key={page}
            className={`grid grid-cols-[1.4fr_0.6fr_0.8fr_0.8fr_1.2fr] px-2 py-1 text-[0.55rem] text-body ${i % 2 === 1 ? 'bg-cream-row' : 'bg-bone'}`}
          >
            <span className="truncate">{page}</span>
            <span className="font-bold text-[#4d7c46]">{status}</span>
            <span>{rendered}</span>
            <span className="truncate">{emails}</span>
            <span className="truncate font-semibold text-accent-deep">{tracking}</span>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

/* Client dashboards */

export function OperationsHubMock() {
  const bars = [
    'h-[34%]', 'h-[38%]', 'h-[36%]', 'h-[41%]', 'h-[44%]', 'h-[47%]',
    'h-[45%]', 'h-[51%]', 'h-[54%]', 'h-[58%]', 'h-[61%]', 'h-[65%]',
  ]
  const clientRows: [string, string][] = [
    ['Healthy Start FL', '$1,600'],
    ['Hillsborough Tax', '$2,400'],
    ['Tampa Mattress', '$1,200'],
    ['XO Dental', '$950'],
    ['Acton Implants', '$1,100'],
  ]
  return (
    <MockFrame
      address="operations-hub · agency dashboard"
      caption="Google Sheets ops-sync into Supabase, immutable identity model, KPI write-back."
    >
      <p className="text-[0.7rem] font-bold text-bone">Agency Operations Hub</p>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          ['$48,200', 'MRR', 'text-accent'],
          ['37', 'Active clients', 'text-bone'],
          ['128', 'Open tasks', 'text-bone'],
          ['94%', 'On-time', 'text-[#a3cf96]'],
        ].map(([value, label, cls]) => (
          <div key={label} className="rounded-sm bg-dark-inset p-2">
            <p className={`text-sm font-bold ${cls}`}>{value}</p>
            <p className="text-[0.52rem] uppercase tracking-wide text-bone-muted">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_170px]">
        <div className="rounded-sm bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-semibold uppercase tracking-wide text-bone-muted">
            MRR growth · last 12 months
          </p>
          <div className="mt-2 flex h-20 items-end gap-1.5">
            {bars.map((height, i) => (
              <span key={i} className={`flex-1 rounded-t-sm bg-accent ${height}`} />
            ))}
          </div>
        </div>
        <div className="rounded-sm bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-semibold uppercase tracking-wide text-bone-muted">Clients</p>
          <ul className="mt-1.5 space-y-1">
            {clientRows.map(([name, mrr]) => (
              <li key={name} className="flex items-center justify-between gap-2 text-[0.58rem]">
                <span className="flex items-center gap-1.5 truncate text-bone">
                  <span className={`${dot} bg-[#7fb069]`} />
                  {name}
                </span>
                <span className="font-bold text-bone-muted">{mrr}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockFrame>
  )
}

/* Onboarding & workflow */

export function OnboardingMock() {
  const steps = ['Account', 'Goals', 'Access', 'Brand', 'Review']
  const access: [string, string, string][] = [
    ['Google Analytics 4', 'Connected', 'bg-[#4d7c46]'],
    ['Search Console', 'Connected', 'bg-[#4d7c46]'],
    ['Google Ads', 'Pending invite', 'bg-[#7a6222]'],
    ['Meta Business', 'Connect', 'bg-[#8a4a0d]'],
  ]
  const sessions: [string, string, string][] = [
    ['Tampa Mattress', 'Completed', 'text-[#a3cf96]'],
    ['XO Dental', 'In progress', 'text-accent'],
    ['Acton Implants', 'Sent', 'text-[#d0a94b]'],
    ['Coastal CT', 'Draft', 'text-bone-muted'],
  ]
  return (
    <MockFrame
      address="client-onboarding · intake portal + wizard"
      caption="Tokenized client links / Supabase / docx export of completed intake."
      tone="light"
    >
      <p className="text-sm font-bold text-ink">Client Onboarding</p>
      <ol className="mt-2 flex flex-wrap items-center gap-1 text-[0.55rem]">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-1">
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[0.5rem] font-bold ${
                i < 3 ? 'bg-accent-deep text-white' : 'border border-rule text-mute'
              }`}
            >
              {i + 1}
            </span>
            <span className={i < 3 ? 'font-bold text-ink' : 'text-mute'}>{step}</span>
            {i < steps.length - 1 && <span className="mx-0.5 h-px w-4 bg-rule" />}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_150px]">
        <div className="rounded-sm border border-rule bg-bone p-2.5">
          <p className="text-[0.62rem] font-bold text-ink">Tracking &amp; analytics access</p>
          <ul className="mt-2 space-y-1.5">
            {access.map(([name, status, color]) => (
              <li key={name} className="flex items-center justify-between gap-2 rounded-sm border border-rule px-2 py-1.5 text-[0.6rem] text-body">
                {name}
                <span className={`${chip} ${color} text-white`}>{status}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">Sessions</p>
          <ul className="mt-2 space-y-1.5">
            {sessions.map(([name, status, color]) => (
              <li key={name} className="rounded-sm bg-dark-panel px-2 py-1">
                <p className="text-[0.58rem] font-bold text-bone">{name}</p>
                <p className={`text-[0.52rem] ${color}`}>{status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockFrame>
  )
}

/* Fintech */

export function StatementMock() {
  const pdfRows: [string, string][] = [
    ['2026-04-03 Payment ref…', '-R 420'],
    ['2026-04-04 Payment ref…', '-R 1,250'],
    ['2026-04-05 Payment ref…', '-R 89'],
    ['2026-04-06 Payment ref…', '-R 2,000'],
    ['2026-04-07 Payment ref…', '-R 640'],
    ['2026-04-08 Payment ref…', '-R 310'],
    ['2026-04-09 Payment ref…', '-R 75'],
  ]
  const xlsx: [string, string][] = [
    ['2026-04-03', '420.00'],
    ['2026-04-04', '1,250.00'],
    ['2026-04-05', '89.00'],
    ['2026-04-06', '2,000.00'],
    ['2026-04-07', '640.00'],
    ['2026-04-08', '310.00'],
    ['2026-04-09', '75.00'],
  ]
  return (
    <MockFrame
      address="statement2xlsx · PDF to validated Excel"
      caption="Coordinate-based extraction, Tesseract OCR fallback, totals checked against PDF metadata."
      tone="light"
    >
      <p className="text-sm font-bold text-ink">statement2xlsx</p>
      <p className="text-[0.58rem] text-mute">Bank statement PDF in, validated Excel workbook out.</p>
      <div className="mt-3 grid grid-cols-[1fr_28px_1fr] items-center gap-2">
        <div className="rounded-sm border border-rule bg-bone p-2">
          <p className="text-[0.55rem] font-bold text-mute">statement_april.pdf</p>
          <ul className="mt-1 space-y-0.5">
            {pdfRows.map(([row, amount]) => (
              <li key={row + amount} className="flex justify-between gap-1 text-[0.5rem] text-mute">
                <span className="truncate">{row}</span>
                <span className="shrink-0 text-[#a33f3f]">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-deep text-sm font-bold text-white">
          →
        </span>
        <div className="overflow-hidden rounded-sm border border-rule">
          <p className="bg-[#4d7c46] px-2 py-1 text-[0.55rem] font-bold text-white">
            output.xlsx / Transactions
          </p>
          <ul>
            {xlsx.map(([date, amount], i) => (
              <li
                key={date}
                className={`flex justify-between px-2 py-0.5 text-[0.52rem] text-body ${i % 2 === 1 ? 'bg-cream-row' : 'bg-bone'}`}
              >
                <span>{date}</span>
                <span className="font-bold">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[0.58rem] font-bold text-[#4d7c46]">
        <span className={`${dot} bg-[#4d7c46]`} />
        Validated vs PDF metadata / 0 issues
      </p>
    </MockFrame>
  )
}

/* Healthcare */

export function LocumLinkMock() {
  const shifts: [string, string, string, string][] = [
    ['GP Locum · Cape Town', 'Mediclinic / day shift', 'R 1,200 / hr', 'Apr 18'],
    ['Emergency Medicine', 'Netcare / night shift', 'R 1,650 / hr', 'Apr 20'],
    ['Anaesthetist', 'Life Healthcare / weekend', 'R 2,100 / hr', 'Apr 22'],
    ['Paediatric Locum', 'Provincial / 3-day block', 'R 1,400 / hr', 'Apr 25'],
  ]
  return (
    <MockFrame
      address="locumlink · locum staffing marketplace"
      caption="Clinicians / facilities / admin verification. Bookings, timesheets, ratings."
      tone="light"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-ink">LocumLink · Open Shifts</p>
        <span className={`${chip} bg-[#4d7c46] text-white`}>Credentials verified</span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {shifts.map(([role, place, rate, date]) => (
          <div key={role} className="rounded-sm border border-rule bg-bone p-2">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.64rem] font-bold text-ink">{role}</p>
              <p className="text-[0.52rem] text-mute">{date}</p>
            </div>
            <p className="text-[0.55rem] text-mute">{place}</p>
            <div className="mt-1.5 flex items-center justify-between">
              <p className="text-[0.6rem] font-bold text-accent-deep">{rate}</p>
              <span className={`${chip} bg-accent-deep text-white`}>Apply</span>
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  )
}

/* Platform & infra */

export function LicenseControlMock() {
  const projects: [string, string, string, string][] = [
    ['Bank Statement Converter', 'Active', 'bg-[#7fb069]', 'text-[#a3cf96]'],
    ['LocumLink', 'Active', 'bg-[#7fb069]', 'text-[#a3cf96]'],
    ['Marketing site', 'Grace 41h', 'bg-[#d0a94b]', 'text-[#d0a94b]'],
    ['Trial · Acme Co', 'Locked', 'bg-[#c96a5a]', 'text-[#c96a5a]'],
  ]
  return (
    <MockFrame
      address="license-control · activation & licensing"
      caption="Ed25519-signed activation-on-payment across client projects, disclosed and auditable."
    >
      <p className="text-[0.7rem] font-bold text-bone">License Control</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_190px]">
        <div>
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-bone-muted">Projects</p>
          <ul className="mt-2 space-y-1.5">
            {projects.map(([name, status, dotColor, textColor]) => (
              <li key={name} className="flex items-center justify-between gap-2 rounded-sm bg-dark-inset px-2.5 py-2">
                <span className="flex items-center gap-2 text-[0.62rem] text-bone">
                  <span className={`${dot} ${dotColor}`} />
                  {name}
                </span>
                <span className={`${chip} bg-dark-panel ${textColor}`}>{status}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm bg-dark-inset p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-accent">
            Signed license envelope
          </p>
          <pre className="mt-2 whitespace-pre-wrap text-[0.5rem] leading-relaxed text-bone-muted">{`{
 "project": "locumlink",
 "status": "active",
 "config": { "feature_keys": … },
 "exp": 1782838800,
 "nonce": "a91t…",
 "sig": "ed25519:7c4b…"
}`}</pre>
          <p className="mt-1 text-[0.5rem] text-accent">Config only present while active.</p>
        </div>
      </div>
    </MockFrame>
  )
}

/* Content & media */

export function TranscriberMock() {
  const videos: [string, string, string, string][] = [
    ['How to rank in AI search', '18:42', 'w-full bg-[#7fb069]', 'done'],
    ['Local SEO masterclass 2026', '41:03', 'w-full bg-[#7fb069]', 'done'],
    ['GA4 for agencies', '27:30', 'w-[46%] bg-accent', 'transcribing'],
    ['Technical SEO audit walk-through', '53:18', 'w-0 bg-accent', 'queued'],
  ]
  return (
    <MockFrame
      address="yt-transcriber · bulk video transcription"
      caption="Caption-first / faster-whisper / Deepgram fallback / VAD chunking for multi-hour video."
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[0.7rem] font-bold text-bone">YouTube Transcriber</p>
        <span className={`${chip} bg-dark-inset text-bone-muted`}>Channel / 142 videos</span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {videos.map(([title, duration, barClasses, status]) => (
          <li key={title} className="rounded-sm bg-dark-inset px-2.5 py-1.5">
            <div className="flex items-center justify-between gap-2">
              <p className="flex items-center gap-2 truncate text-[0.62rem] text-bone">
                <span className="flex h-3.5 w-5 shrink-0 items-center justify-center rounded-[2px] bg-[#a33f3f] text-[0.45rem] text-white">
                  ▶
                </span>
                {title}
              </p>
              <span className="shrink-0 text-[0.52rem] text-bone-muted">{duration}</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="h-1 flex-1 overflow-hidden rounded-full bg-dark-panel">
                <span className={`block h-full rounded-full ${barClasses}`} />
              </span>
              <span className="w-16 text-right text-[0.5rem] text-bone-muted">{status}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <span className="text-[0.52rem] font-bold uppercase tracking-wide text-bone-muted">Export</span>
        {['SRT', 'VTT', 'TXT', 'JSON', 'Markdown'].map((format) => (
          <span key={format} className={`${chip} bg-dark-inset text-accent`}>
            {format}
          </span>
        ))}
      </div>
    </MockFrame>
  )
}

export function RankWriterMock() {
  const voice: [string, string][] = [
    ['Tone', 'Confident, plain'],
    ['Audience', 'Agency owners'],
    ['Reading level', 'Grade 8'],
    ['Banned words', 'synergy, disrupt'],
    ['Targets', 'ChatGPT / Perplexity'],
  ]
  return (
    <MockFrame
      address="rankwriter.ai · AI content for SEO + AI search"
      caption="Brand-analyzed / docx export / token-based for agencies."
      tone="light"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-bold text-ink">RankWriter.AI</p>
        <span className={`${chip} bg-cream-row text-accent-deep`}>Tokens: 84,200</span>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[160px_1fr]">
        <div className="rounded-sm border border-rule bg-bone p-2.5">
          <p className="text-[0.55rem] font-bold uppercase tracking-[0.14em] text-mute">Brand voice</p>
          <ul className="mt-1.5 space-y-1.5">
            {voice.map(([label, value]) => (
              <li key={label} className="border-b border-rule pb-1 last:border-b-0">
                <p className="text-[0.5rem] uppercase tracking-wide text-mute">{label}</p>
                <p className="text-[0.58rem] font-bold text-ink">{value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-rule bg-bone p-3">
          <p className="text-[0.7rem] font-bold text-ink">Why local SEO still beats paid for clinics</p>
          <div className="mt-1 flex gap-1.5">
            <span className={`${chip} bg-[#4d7c46] text-white`}>Optimized</span>
            <span className={`${chip} bg-cream-row text-accent-deep`}>AI-search ready</span>
          </div>
          <div className="mt-2.5 space-y-1.5">
            <span className="block h-1.5 w-11/12 rounded-full bg-cream-row" />
            <span className="block h-1.5 w-full rounded-full bg-accent-mid/70" />
            <span className="block h-1.5 w-9/12 rounded-full bg-cream-row" />
            <span className="block h-1.5 w-10/12 rounded-full bg-cream-row" />
            <span className="block h-1.5 w-full rounded-full bg-accent-mid/70" />
            <span className="block h-1.5 w-8/12 rounded-full bg-cream-row" />
          </div>
        </div>
      </div>
    </MockFrame>
  )
}

export const mocksById: Record<string, () => React.ReactNode> = {
  'google-hub-mcp': GoogleHubMock,
  'mcp-connector-suite': ConnectorSuiteMock,
  'ai-trading-bots': TradingBotsMock,
  'search-insights-hub': SearchInsightsMock,
  luminari: LuminariMock,
  'answer-engine-optimizer': AnswerEngineMock,
  'website-audit-tool': WebsiteAuditMock,
  'site-crawler': SiteCrawlerMock,
  'agency-operations-hub': OperationsHubMock,
  'client-onboarding': OnboardingMock,
  statement2xlsx: StatementMock,
  locumlink: LocumLinkMock,
  'license-control': LicenseControlMock,
  'youtube-transcriber': TranscriberMock,
  'rankwriter-ai': RankWriterMock,
}
