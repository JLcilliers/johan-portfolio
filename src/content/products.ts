import type { Product } from '@/types'

export const products: Product[] = [
  // ──────────────────────────────────────────────
  // SearchSignal
  // ──────────────────────────────────────────────
  {
    slug: 'searchsignal',
    name: 'SearchSignal',
    url: 'https://searchsignal.online/',
    domain: 'searchsignal.online',
    tagline: 'Digital marketing reporting platform with AI-powered insights',
    description:
      'SearchSignal is a digital marketing reporting platform designed for agencies, consultants, and in-house teams who need unified visibility into their marketing performance. It combines traditional analytics dashboards with AI-powered features including an AI Tracker that monitors how AI systems reference and cite your brand, citation tracking across the web, content gap analysis that identifies keyword and topical opportunities, and automation workflows that streamline report generation and anomaly alerting. The platform consolidates data from multiple sources into a single interface, reducing the time spent switching between tools and manually compiling reports.',
    whoItsFor:
      'Marketing teams, agencies, and consultants who need unified reporting with AI-driven insights.',
    howItWorks:
      'Users connect their marketing data sources (Google Analytics, Search Console, Ahrefs, etc.) to SearchSignal. The platform ingests and normalizes data into a unified schema, then applies AI-powered analysis layers — including citation tracking, content gap detection, and anomaly identification. Reports are generated automatically on configurable schedules, with alert thresholds that notify users of significant changes. All outputs are exportable and shareable via dashboard links or PDF exports. Safeguards include data validation checks, source-attribution on all AI-generated insights, and user-configurable confidence thresholds for alerts.',
    features: [
      'Unified marketing dashboards consolidating data from multiple sources',
      'AI Tracker monitoring AI system citations and brand references',
      'Citation tracking across search engines, directories, and AI platforms',
      'Content gap analysis identifying keyword and topical opportunities',
      'Automated report generation on configurable schedules',
      'Anomaly detection with configurable alert thresholds',
      'PDF and CSV export for all reports and data views',
      'Integration with Google Analytics, Search Console, Ahrefs, and more',
      'Team collaboration with shared dashboards and role-based access',
      'Historical trend analysis with period-over-period comparisons',
    ],
    engineeringView: {
      stack: ['Next.js', 'Python', 'PostgreSQL', 'OpenAI API', 'Vercel', 'Redis', 'Celery'],
      architecture:
        'SearchSignal follows a decoupled architecture with a Next.js frontend deployed on Vercel and a Python backend handling data ingestion, processing, and AI analysis. PostgreSQL serves as the primary data store with Redis for caching and job queue management. Celery workers process background tasks including data syncs, report generation, and AI analysis jobs. The OpenAI API powers the citation tracking, content gap analysis, and natural-language insight generation features.',
      dataFlow:
        'Data sources push or are polled on configurable intervals into the ingestion layer. Raw data is normalized into a unified schema and stored in PostgreSQL. Celery workers run scheduled analysis jobs — citation tracking, gap analysis, anomaly detection — and write results back to the database. The Next.js frontend queries the API layer to render dashboards, reports, and alerts in real time. AI-generated insights include source attribution and confidence scores. Exports are generated server-side and served via signed URLs.',
    },
    exampleMetrics: [
      { label: 'Sites Monitored', value: '150+/month', description: 'Active sites tracked across all client accounts' },
      { label: 'Reports Generated', value: '500+/month', description: 'Automated reports delivered monthly' },
      { label: 'Time Saved', value: '~60%', description: 'Reduction in manual reporting time per client' },
      { label: 'Data Sources Supported', value: '10+', description: 'Integrated analytics, SEO, and advertising platforms' },
    ],
  },

  // ──────────────────────────────────────────────
  // ExtractaLedger
  // ──────────────────────────────────────────────
  {
    slug: 'extractaledger',
    name: 'ExtractaLedger',
    url: 'https://extractaledger.com/',
    domain: 'extractaledger.com',
    tagline: 'PDF bank statement to Excel converter',
    description:
      'ExtractaLedger converts PDF bank statements into clean, structured Excel spreadsheets. It handles the entire pipeline from PDF ingestion through text extraction, transaction parsing, data cleanup, and structured export. The tool recognizes common bank statement formats, identifies transaction rows, categorizes debits and credits, reconciles running balances, and outputs a standardized spreadsheet ready for accounting workflows. It eliminates the manual data-entry burden that accountants and bookkeepers face when processing client bank statements.',
    whoItsFor:
      'Accountants, bookkeepers, and financial professionals who need structured data from bank statements.',
    howItWorks:
      'Users upload one or more PDF bank statements through the web interface. The system extracts text using OCR-enhanced PDF parsing, then applies pattern-matching rules to identify transaction rows, dates, descriptions, amounts, and balances. A cleanup step normalizes date formats, standardizes amount parsing (handling various currency formats), and validates running balances against extracted totals. The structured data is then exported as an Excel file (.xlsx) with columns for date, description, debit, credit, and running balance. Safeguards include balance-reconciliation checks that flag discrepancies and a confidence indicator on extracted values.',
    features: [
      'PDF upload with drag-and-drop support for single or batch processing',
      'OCR-enhanced text extraction for scanned and native PDF statements',
      'Automatic transaction row detection across common bank formats',
      'Date, amount, and description normalization and standardization',
      'Balance reconciliation with discrepancy flagging',
      'Structured Excel export with standardized column layout',
      'Batch processing for multiple statements in a single session',
      'Confidence scoring on extracted values for quality assurance',
    ],
    engineeringView: {
      stack: ['Next.js', 'Python', 'pdf2image', 'Tesseract OCR', 'pandas', 'openpyxl', 'Vercel'],
      architecture:
        'ExtractaLedger uses a Next.js frontend for the upload interface and a Python backend for PDF processing. PDF files are processed through a multi-stage pipeline: text extraction (native or OCR), transaction parsing via regex and heuristic rules, data cleanup and normalization, balance validation, and finally structured export via openpyxl. The system supports both native-text PDFs and scanned documents through conditional OCR routing.',
      dataFlow:
        'Users upload PDFs through the frontend. Files are sent to the Python processing API where they enter a pipeline: (1) PDF text extraction using pdfplumber for native text or Tesseract OCR for scanned documents, (2) transaction row detection using configurable regex patterns matched against known bank formats, (3) field extraction and normalization using pandas, (4) balance reconciliation that compares computed running balances against extracted values, (5) structured export to .xlsx via openpyxl. The resulting file is returned to the user for download. No statement data is persisted after processing.',
    },
    exampleMetrics: [
      { label: 'Avg. Conversion Time', value: '<30 seconds', description: 'Average time from upload to structured Excel output' },
      { label: 'Pages Processed', value: '10,000+', description: 'Cumulative bank statement pages processed to date' },
      { label: 'Extraction Accuracy', value: '~95%', description: 'Field-level accuracy with balance reconciliation checks' },
    ],
  },
]
