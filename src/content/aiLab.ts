import type { AILabItem } from '@/types'

export const aiLabItems: AILabItem[] = [
  // ──────────────────────────────────────────────
  // 1. AI Citation Tracking
  // ──────────────────────────────────────────────
  {
    id: 'ai-citation-tracking',
    title: 'AI Citation Tracking',
    description:
      'Tracks how AI systems — such as ChatGPT, Perplexity, Google AI Overviews, and other LLM-powered platforms — cite, reference, or mention a brand, domain, or content asset. As AI-generated answers become a primary information channel, understanding when and how your content is surfaced by these systems is critical for visibility strategy.',
    triggers: [
      'Scheduled daily or weekly scan of target AI platforms',
      'New content published on the monitored domain',
      'Competitor brand detected in AI-generated responses',
      'Manual query submitted for on-demand tracking',
    ],
    logic: [
      'Submit a configurable set of queries to target AI platforms via API or browser automation',
      'Parse AI-generated responses for brand mentions, domain citations, and content references',
      'Match citations against a known content inventory to identify which assets are being surfaced',
      'Score citation quality: direct link, paraphrase, brand mention, or indirect reference',
      'Compare results against previous scans to identify trends and changes',
      'Cross-reference with organic search data to correlate AI visibility with traditional rankings',
    ],
    outputs: [
      'Citation report showing which queries triggered brand/domain mentions',
      'Citation quality breakdown: direct citations vs. paraphrases vs. indirect mentions',
      'Trend dashboard tracking citation frequency over time',
      'Competitor comparison showing relative AI visibility',
      'Content gap alerts identifying queries where competitors are cited but you are not',
      'Exportable CSV/PDF reports for stakeholder sharing',
    ],
    safeguards: [
      'Rate limiting on all API calls to avoid platform ToS violations',
      'Human review flag for ambiguous citations that may be misattributed',
      'Source attribution on every detected citation — always links back to the originating AI response',
      'Confidence scoring on citation matches to prevent false positives',
      'Data retention policies with configurable expiration',
    ],
  },

  // ──────────────────────────────────────────────
  // 2. AI Content Gap Analysis
  // ──────────────────────────────────────────────
  {
    id: 'ai-content-gap-analysis',
    title: 'AI Content Gap Analysis',
    description:
      'Identifies content opportunities by analyzing the gap between what a domain currently covers and what target audiences are searching for — enhanced with AI-powered semantic analysis. Goes beyond traditional keyword gap tools by understanding topical clusters, search intent patterns, and content depth requirements.',
    triggers: [
      'Scheduled monthly content audit against target keyword universe',
      'New competitor content detected in tracked topic areas',
      'Significant ranking drop on a monitored keyword cluster',
      'Manual analysis request for a new topic area or market expansion',
    ],
    logic: [
      'Crawl the target domain to build a comprehensive content inventory with topic classification',
      'Pull keyword and ranking data from Search Console and third-party tools',
      'Use AI to cluster keywords into topical groups and map search intent',
      'Compare the content inventory against the topical keyword universe to identify gaps',
      'Analyze competitor content covering gap topics to assess depth and quality requirements',
      'Score each gap opportunity by search volume, competition, and relevance to business goals',
      'Generate content briefs with recommended structure, depth, and target keywords',
    ],
    outputs: [
      'Gap analysis report listing uncovered topics ranked by opportunity score',
      'Topical cluster map showing covered vs. uncovered areas',
      'Content brief templates for high-priority gap topics',
      'Competitor content comparison for each gap area',
      'Priority matrix plotting effort vs. potential impact',
      'Integration-ready data export for content calendar tools',
    ],
    safeguards: [
      'All AI-generated recommendations include the underlying data sources for verification',
      'Opportunity scores are transparent with visible weighting factors',
      'Human review checkpoint before content briefs are finalized',
      'Duplicate detection to avoid recommending content that already exists in a different form',
      'Confidence indicators on intent classification to flag ambiguous queries',
    ],
  },

  // ──────────────────────────────────────────────
  // 3. Automated Reporting Workflows
  // ──────────────────────────────────────────────
  {
    id: 'automated-reporting-workflows',
    title: 'Automated Reporting Workflows',
    description:
      'End-to-end automation for marketing report generation, anomaly alerting, and scheduled data exports. Replaces manual report compilation with configurable pipelines that pull data from multiple sources, apply analysis, and deliver formatted reports to stakeholders on schedule.',
    triggers: [
      'Scheduled report generation (daily, weekly, monthly, or custom cadence)',
      'Anomaly detected: metric exceeds configured threshold (e.g., traffic drop >15%)',
      'Client or stakeholder requests an on-demand report',
      'End-of-month or end-of-quarter reporting period',
    ],
    logic: [
      'Connect to configured data sources (GA4, Search Console, Ahrefs, CRM, etc.) via API',
      'Pull raw data for the reporting period and normalize into a unified schema',
      'Apply period-over-period comparison calculations (WoW, MoM, YoY)',
      'Run anomaly detection algorithms to identify statistically significant changes',
      'Generate natural-language summaries of key trends using AI',
      'Compile data, charts, and summaries into formatted report templates',
      'Distribute reports via email, Slack, or dashboard link based on stakeholder preferences',
    ],
    outputs: [
      'Formatted PDF or HTML report with charts, tables, and executive summary',
      'Anomaly alert notifications delivered via email or Slack with context and severity',
      'Scheduled CSV/Excel data exports for custom analysis',
      'Dashboard snapshots with period-over-period comparisons',
      'AI-generated narrative summaries highlighting key takeaways',
      'Audit log of all generated reports and their distribution',
    ],
    safeguards: [
      'Data validation checks before report generation to catch source errors',
      'Anomaly thresholds are user-configurable to prevent alert fatigue',
      'AI-generated summaries include source attribution and data timestamps',
      'Report versioning with change tracking for compliance',
      'Access controls ensuring reports are only distributed to authorized recipients',
      'Fallback notifications if a data source is unreachable during scheduled generation',
    ],
  },

  // ──────────────────────────────────────────────
  // 4. AI Agents & Automation
  // ──────────────────────────────────────────────
  {
    id: 'ai-agents-automation',
    title: 'AI Agents & Automation',
    description:
      'Custom AI agent workflows that automate repetitive marketing and SEO tasks. These agents combine LLM reasoning with structured tooling to execute multi-step processes — from research and analysis to content drafting and data processing — with human oversight at critical decision points.',
    triggers: [
      'User initiates a task via chat interface or API call',
      'Scheduled task execution (e.g., daily competitor monitoring, weekly content audits)',
      'Webhook trigger from external system (e.g., new page published, ranking change detected)',
      'Upstream agent completes a prerequisite task in a chained workflow',
    ],
    logic: [
      'Parse the task request and decompose into a sequence of sub-tasks',
      'Select and configure the appropriate tools for each sub-task (search APIs, web scraping, data analysis)',
      'Execute sub-tasks sequentially or in parallel based on dependency graph',
      'Apply LLM reasoning at decision points to interpret results and determine next steps',
      'Collect and structure outputs from all sub-tasks into a unified result',
      'Route to human review if confidence is below threshold or task is flagged as high-stakes',
      'Log all actions, decisions, and outputs for auditability',
    ],
    outputs: [
      'Completed task results delivered via the chat interface, email, or API response',
      'Structured data outputs (JSON, CSV) for downstream processing',
      'Agent activity log showing each step taken, tools used, and decisions made',
      'Summary report with key findings and recommended next actions',
      'Notifications on task completion or when human input is required',
    ],
    safeguards: [
      'Human-in-the-loop checkpoints for high-stakes decisions (content publishing, outreach, etc.)',
      'Action confirmation prompts before executing irreversible operations',
      'Rate limiting and cost caps on API calls to prevent runaway execution',
      'Sandboxed execution environment preventing unauthorized system access',
      'Full audit trail logging every agent action with timestamps and reasoning',
      'Configurable scope boundaries limiting what each agent can access and modify',
    ],
  },
]
