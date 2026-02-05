export interface KPI {
  label: string
  value: string
  description?: string
}

export interface Tag {
  label: string
  category: 'SEO' | 'AI' | 'CRO' | 'Technical' | 'Analytics' | 'Leadership' | 'Industry'
}

export interface STEARContent {
  situation: string
  techStack: string[]
  execution: string[]
  analytics: string
  result: string
}

export interface CaseStudy {
  slug: string
  title: string
  company: string
  domain: string
  industry: string
  summary: string
  tags: Tag[]
  kpis: KPI[]
  marketingView: STEARContent
  engineeringView: STEARContent
  whatNext: string[]
  artifacts: string[]
}

export interface Product {
  slug: string
  name: string
  url: string
  domain: string
  tagline: string
  description: string
  whoItsFor: string
  howItWorks: string
  features: string[]
  engineeringView: {
    stack: string[]
    architecture: string
    dataFlow: string
  }
  exampleMetrics: KPI[]
}

export interface AILabItem {
  id: string
  title: string
  description: string
  triggers?: string[]
  logic?: string[]
  outputs?: string[]
  safeguards?: string[]
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  sources?: { id: string; excerpt: string }[]
}
