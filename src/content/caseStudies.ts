import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  // ──────────────────────────────────────────────
  // 1. Abel Law Firm
  // ──────────────────────────────────────────────
  {
    slug: 'abellawfirm',
    title: 'Search-Led Growth for Abel Law Firm',
    company: 'Abel Law Firm',
    domain: 'www.abellawfirm.com',
    industry: 'Legal',
    summary:
      'Comprehensive SEO engagement that drove significant organic growth for a competitive legal practice through technical cleanup, content hub strategy, and local signal optimization.',
    tags: [
      { label: 'SEO', category: 'SEO' },
      { label: 'Technical', category: 'Technical' },
      { label: 'Analytics', category: 'Analytics' },
      { label: 'CRO', category: 'CRO' },
      { label: 'Legal', category: 'Industry' },
    ],
    kpis: [
      { label: 'Organic Sessions', value: '+65% YoY', description: 'Year-over-year growth in organic search traffic' },
      { label: 'Qualified Leads', value: '+38%', description: 'Increase in form submissions from organic channels' },
      { label: 'Top 3 Rankings', value: '+22 keywords', description: 'New keywords entering top-3 positions in 6 months' },
    ],
    marketingView: {
      situation:
        'Abel Law Firm needed to increase organic visibility in a highly competitive legal market. Their existing site had accumulated technical debt and lacked a cohesive content strategy, resulting in stagnant traffic and declining lead volume.',
      techStack: ['Ahrefs', 'Screaming Frog', 'GA4', 'Google Search Console', 'Surfer SEO'],
      execution: [
        'Conducted a full technical SEO audit and prioritized fixes by impact',
        'Redesigned internal linking architecture around practice-area content hubs',
        'Implemented comprehensive schema markup for legal services and attorney profiles',
        'Built content hubs targeting high-intent practice-area keywords',
        'Optimized Google Business Profile and local citation consistency',
        'Deployed GA4 event tracking for form submissions and call clicks',
      ],
      analytics:
        'Tracked organic sessions, keyword rankings, and lead volume through GA4 and Search Console. Built a custom Looker Studio dashboard to report on KPIs weekly.',
      result:
        'Organic sessions grew 65% year-over-year, qualified leads increased 38%, and 22 additional keywords reached top-3 positions. The content hub strategy became the primary traffic driver.',
    },
    engineeringView: {
      situation:
        'The site suffered from crawl-budget waste due to duplicate pages, thin content, and broken internal links. Schema was absent, and tracking was incomplete.',
      techStack: ['Screaming Frog', 'GA4', 'GTM', 'Schema.org', 'Python (data analysis)'],
      execution: [
        'Resolved 1,200+ crawl errors including redirect chains, orphan pages, and duplicate content',
        'Architected a hub-and-spoke internal linking model mapped to practice areas',
        'Implemented LocalBusiness, Attorney, and FAQPage structured data across the site',
        'Built a content hub template with programmatic internal links',
        'Configured GA4 with custom events for call tracking and form submissions',
        'Set up automated crawl-health monitoring via Screaming Frog scheduled crawls',
      ],
      analytics:
        'Monitored crawl stats in Search Console, index coverage, and Core Web Vitals. Used Python scripts to cross-reference ranking data with conversion data for prioritization.',
      result:
        'Crawl efficiency improved substantially, indexation issues were resolved, and the structured data deployment resulted in rich results for multiple practice areas.',
    },
    whatNext: [
      'Expand content hubs to cover additional practice areas',
      'Implement dynamic internal linking',
      'A/B test landing page layouts',
    ],
    artifacts: [
      'Technical SEO audit report',
      'Content hub architecture diagram',
      'Schema implementation plan',
      'GA4 custom dashboard',
    ],
  },

  // ──────────────────────────────────────────────
  // 2. Harker Injury Law
  // ──────────────────────────────────────────────
  {
    slug: 'harker-injury-law',
    title: 'Conversion-Focused SEO for Harker Injury Law',
    company: 'Harker Injury Law',
    domain: 'www.harkerinjurylaw.com',
    industry: 'Legal',
    summary:
      'Optimized organic conversions and local presence for a personal injury law firm through backlink cleanup, GBP optimization, and conversion tracking improvements.',
    tags: [
      { label: 'SEO', category: 'SEO' },
      { label: 'CRO', category: 'CRO' },
      { label: 'Analytics', category: 'Analytics' },
      { label: 'Legal', category: 'Industry' },
    ],
    kpis: [
      { label: 'Organic Conversions', value: '+44%', description: 'Growth in tracked leads from organic search' },
      { label: 'GMB/GBP Actions', value: '+31%', description: 'Increase in Google Business Profile calls, directions, and website clicks' },
      { label: 'Backlink Toxicity', value: 'Reduced', description: 'Toxic link ratio brought below industry benchmarks' },
    ],
    marketingView: {
      situation:
        'Harker Injury Law had decent organic traffic but poor conversion rates and an underperforming Google Business Profile. A toxic backlink profile was suppressing ranking potential and the firm lacked visibility in local map results.',
      techStack: ['Ahrefs', 'GA4', 'Google Business Profile', 'Brightlocal', 'CallRail'],
      execution: [
        'Performed a comprehensive backlink audit and submitted disavow files for toxic links',
        'Optimized Google Business Profile with complete attributes, Q&A, and regular posts',
        'Redesigned key landing pages with conversion-focused layouts and clear CTAs',
        'Established consistent NAP citations across major directories',
        'Implemented call tracking and form tracking with proper attribution',
        'Created a review acquisition workflow to boost GBP rating and volume',
      ],
      analytics:
        'Monitored conversion rates by landing page, GBP insights, and call tracking data. Reported monthly on lead quality and source attribution.',
      result:
        'Organic conversions increased 44%, GBP actions grew 31%, and the backlink profile was cleaned up significantly. The firm saw improved map pack visibility across target service areas.',
    },
    engineeringView: {
      situation:
        'The backlink profile contained a high proportion of spammy links from previous SEO vendors. Conversion tracking was incomplete, and the GBP listing had inconsistent data.',
      techStack: ['Ahrefs', 'Google Disavow Tool', 'GTM', 'GA4', 'Brightlocal', 'CallRail'],
      execution: [
        'Exported and analyzed 5,000+ backlinks, categorizing by toxicity score',
        'Built and submitted a disavow file, then monitored link profile recovery',
        'Configured GTM containers with call-click tracking, form-submission events, and scroll-depth triggers',
        'Standardized NAP data across 60+ citation sources using Brightlocal',
        'Set up CallRail tracking numbers with dynamic insertion for attribution',
        'Implemented conversion linker and Google Ads remarketing tags',
      ],
      analytics:
        'Tracked backlink profile health scores weekly, monitored GBP performance metrics, and correlated call tracking data with organic landing pages.',
      result:
        'Toxic link ratio dropped below industry benchmarks, conversion tracking accuracy improved, and GBP listing achieved consistent top-3 map placement for primary keywords.',
    },
    whatNext: [
      'Expand to additional geo-targeted pages',
      'Implement review generation workflow',
      'Test call tracking attribution models',
    ],
    artifacts: [
      'Backlink audit spreadsheet',
      'GBP optimization checklist',
      'Conversion tracking setup document',
    ],
  },

  // ──────────────────────────────────────────────
  // 3. GutterWorks Services
  // ──────────────────────────────────────────────
  {
    slug: 'gutterworks',
    title: 'Local SEO Transformation for GutterWorks Services',
    company: 'GutterWorks Services',
    domain: 'gutterworksservices.com',
    industry: 'Home Services',
    summary:
      'Transformed local visibility for a home services company through template standardization, technical fixes, structured data, and programmatic internal linking.',
    tags: [
      { label: 'SEO', category: 'SEO' },
      { label: 'Technical', category: 'Technical' },
      { label: 'CRO', category: 'CRO' },
      { label: 'Home Services', category: 'Industry' },
    ],
    kpis: [
      { label: 'Local Organic Traffic', value: '+52%', description: 'Growth in organic sessions from local search queries' },
      { label: 'Form Submissions', value: '+29%', description: 'Increase in service request form completions' },
      { label: 'Calls Tracked', value: '+18%', description: 'Uplift in phone calls tracked via dynamic number insertion' },
    ],
    marketingView: {
      situation:
        'GutterWorks Services had minimal online presence despite serving a wide geographic area. Their website lacked location-specific pages, had inconsistent branding across templates, and was not capturing local search demand effectively.',
      techStack: ['Ahrefs', 'Screaming Frog', 'GA4', 'Google Business Profile', 'Brightlocal'],
      execution: [
        'Developed standardized location and service page templates optimized for local search',
        'Fixed critical technical issues including mobile usability problems and slow page speed',
        'Implemented LocalBusiness and Service structured data across all pages',
        'Built a programmatic internal linking system connecting services to locations',
        'Optimized Google Business Profile with service-area targeting',
        'Set up call tracking and form tracking for lead attribution',
      ],
      analytics:
        'Tracked local organic traffic by service area, monitored form submissions and call volume, and reported on local ranking positions across target geographies.',
      result:
        'Local organic traffic increased 52%, form submissions grew 29%, and tracked calls rose 18%. The standardized template approach enabled rapid expansion to new service areas.',
    },
    engineeringView: {
      situation:
        'The site ran on inconsistent page templates with no structured data, broken internal links, and poor mobile rendering. There was no tracking beyond basic Google Analytics pageviews.',
      techStack: ['Screaming Frog', 'GTM', 'GA4', 'Schema.org', 'Python (templating scripts)'],
      execution: [
        'Standardized page templates with consistent H-tag hierarchy and semantic HTML',
        'Resolved 400+ technical errors including broken links, missing meta tags, and image optimization',
        'Deployed LocalBusiness, Service, and FAQPage structured data via GTM',
        'Built a programmatic internal linking script that auto-generates contextual links between related service and location pages',
        'Configured GA4 with enhanced measurement and custom events for form and call tracking',
        'Implemented Core Web Vitals optimizations achieving passing scores on all metrics',
      ],
      analytics:
        'Monitored crawl health, index coverage, and structured data validation in Search Console. Used Python scripts to generate internal linking maps and identify coverage gaps.',
      result:
        'Template standardization reduced crawl errors by 90%, structured data achieved rich results for local service queries, and the programmatic linking system improved page authority distribution.',
    },
    whatNext: [
      'Build service-area page templates',
      'Implement dynamic FAQ schema',
      'Automate review monitoring',
    ],
    artifacts: [
      'Location page template',
      'Structured data plan',
      'Internal linking map',
      'Call tracking dashboard',
    ],
  },

  // ──────────────────────────────────────────────
  // 4. NYBG Plastic Surgery
  // ──────────────────────────────────────────────
  {
    slug: 'nybg-plastic-surgery',
    title: 'YMYL SEO Strategy for NYBG Plastic Surgery',
    company: 'NYBG Plastic Surgery',
    domain: 'www.nybgplasticsurgery.com',
    industry: 'Medical',
    summary:
      'Built topical authority in a YMYL medical space through E-E-A-T strengthening, medical schema implementation, and rigorous content quality guidelines.',
    tags: [
      { label: 'SEO', category: 'SEO' },
      { label: 'Technical', category: 'Technical' },
      { label: 'Analytics', category: 'Analytics' },
      { label: 'Leadership', category: 'Leadership' },
      { label: 'Medical', category: 'Industry' },
    ],
    kpis: [
      { label: 'Non-Branded Organic', value: '+48%', description: 'Growth in non-branded organic traffic for procedure queries' },
      { label: 'Consultation Requests', value: '+26%', description: 'Increase in online consultation booking requests' },
      { label: 'Topical Authority', value: 'Improved', description: 'Measurable gains in topical authority across procedure categories' },
    ],
    marketingView: {
      situation:
        'NYBG Plastic Surgery operated in a highly competitive YMYL medical space where Google scrutinizes content quality and author expertise. The practice needed to build topical authority, improve E-E-A-T signals, and increase non-branded organic traffic for procedure-related queries.',
      techStack: ['Ahrefs', 'Surfer SEO', 'GA4', 'Google Search Console', 'Screaming Frog'],
      execution: [
        'Conducted an E-E-A-T audit and identified gaps in author expertise signals',
        'Developed content quality guidelines aligned with medical YMYL standards',
        'Created detailed procedure content clusters with supporting educational content',
        'Built physician profile pages with credentials, publications, and expertise signals',
        'Implemented review and testimonial strategies to strengthen social proof',
        'Optimized page experience metrics to meet Core Web Vitals thresholds',
      ],
      analytics:
        'Tracked non-branded organic traffic, consultation request conversions, and topical authority metrics using Ahrefs content explorer and Search Console performance data.',
      result:
        'Non-branded organic traffic grew 48%, consultation requests increased 26%, and the practice established measurable topical authority across target procedure categories.',
    },
    engineeringView: {
      situation:
        'The site lacked proper medical structured data, author attribution was inconsistent, and content did not meet Google\'s quality guidelines for YMYL medical topics. Page experience scores were below thresholds.',
      techStack: ['Schema.org', 'GTM', 'GA4', 'Screaming Frog', 'Python (content analysis)'],
      execution: [
        'Implemented MedicalProcedure, Physician, and MedicalOrganization schema across the site',
        'Built author attribution system linking content to physician profiles with structured data',
        'Developed content quality scoring criteria based on E-E-A-T guidelines',
        'Optimized page experience: LCP, FID, and CLS brought within passing thresholds',
        'Ensured compliance-appropriate tone and disclaimers across all medical content',
        'Created automated content auditing scripts to flag pages missing required E-E-A-T elements',
      ],
      analytics:
        'Monitored structured data validation, Core Web Vitals in CrUX data, and content quality scores via automated auditing. Cross-referenced ranking improvements with E-E-A-T implementation milestones.',
      result:
        'Medical schema achieved rich results for procedure queries, page experience scores passed all thresholds, and the automated auditing system maintained content quality standards at scale.',
    },
    whatNext: [
      'Expand procedure content clusters',
      'Implement patient story schema',
      'Build provider authority pages',
    ],
    artifacts: [
      'E-E-A-T audit report',
      'Medical schema plan',
      'Content quality guidelines',
      'Topical authority map',
    ],
  },

  // ──────────────────────────────────────────────
  // 5. Rubrik
  // ──────────────────────────────────────────────
  {
    slug: 'rubrik',
    title: 'Enterprise SEO at Scale for Rubrik',
    company: 'Rubrik',
    domain: 'www.rubrik.com',
    industry: 'Enterprise Technology',
    summary:
      'Scaled SEO processes for an enterprise technology company through governance frameworks, custom tooling, international SEO, and crawl budget optimization.',
    tags: [
      { label: 'SEO', category: 'SEO' },
      { label: 'Technical', category: 'Technical' },
      { label: 'Analytics', category: 'Analytics' },
      { label: 'Leadership', category: 'Leadership' },
      { label: 'Enterprise', category: 'Industry' },
    ],
    kpis: [
      { label: 'Technical Content Discoverability', value: '+30%', description: 'Improvement in indexed technical content visibility' },
      { label: 'Indexation Health', value: 'Improved', description: 'Indexation issues resolved to enterprise best-practice levels' },
      { label: 'International SEO Processes', value: 'Established', description: 'Hreflang validation achieved across all target markets' },
    ],
    marketingView: {
      situation:
        'Rubrik, a leading enterprise data security company, needed to scale its SEO operations across a large, multi-language website. Technical content discoverability was limited, indexation issues plagued the site, and there were no established processes for international SEO.',
      techStack: ['Ahrefs', 'Screaming Frog', 'GA4', 'Looker Studio', 'Google Search Console', 'ContentKing'],
      execution: [
        'Established an SEO governance framework with documented processes and approval workflows',
        'Developed custom dashboards for tracking SEO health metrics at enterprise scale',
        'Built an international SEO strategy with hreflang implementation across target markets',
        'Optimized crawl budget by identifying and resolving indexation waste',
        'Created cross-functional collaboration workflows between SEO, content, and engineering teams',
        'Implemented automated SEO monitoring with anomaly detection and alerting',
      ],
      analytics:
        'Built Looker Studio dashboards tracking technical SEO health, content performance, and international expansion metrics. Established weekly and monthly reporting cadences for stakeholders.',
      result:
        'Technical content discoverability improved 30%, indexation health was brought to enterprise best-practice levels, and international SEO processes were successfully established across target markets.',
    },
    engineeringView: {
      situation:
        'The enterprise site had millions of URLs with significant crawl-budget waste from parameter variations, duplicate content, and misconfigured hreflang tags. No automated SEO monitoring existed and governance was ad hoc.',
      techStack: ['Screaming Frog', 'Python', 'BigQuery', 'Looker Studio', 'ContentKing', 'GTM'],
      execution: [
        'Conducted large-scale crawl analysis using Screaming Frog and Python to identify indexation waste',
        'Built custom Python scripts for hreflang validation and cross-market URL mapping',
        'Created automated crawl-budget monitoring dashboards in Looker Studio connected to BigQuery',
        'Established governance frameworks with CI/CD integration for SEO checks on deployments',
        'Optimized robots.txt and XML sitemaps to improve crawl efficiency',
        'Developed automated alerting system for indexation drops, crawl errors, and ranking anomalies',
      ],
      analytics:
        'Processed log files and crawl data in BigQuery to identify bot behavior patterns and crawl-budget allocation. Automated weekly health-check reports comparing crawl stats against baselines.',
      result:
        'Crawl-budget waste was reduced significantly, hreflang implementation achieved validation across all target markets, and the governance framework prevented SEO regressions during product releases.',
    },
    whatNext: [
      'Automate SEO governance reporting',
      'Expand multilingual content strategy',
      'Build predictive ranking models',
    ],
    artifacts: [
      'SEO governance framework',
      'International SEO playbook',
      'Custom crawl analysis dashboard',
      'Technical SEO automation scripts',
    ],
  },
]
