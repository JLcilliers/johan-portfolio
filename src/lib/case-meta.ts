import { clients, type ClientCase } from '@/data/clients'

// Short sector tags for cards and table rows.
export const CASE_TAGS: Record<string, string> = {
  'healthy-start-florida': 'Healthcare',
  'hillsborough-county-tax-collector': 'Government',
  'tampa-mattress': 'Retail',
  'continuum-wellness': 'E-commerce',
  'desert-dental-smiles': 'Dental',
  'dr-pav-khaira': 'Dental',
  'peddicord-family-dentistry': 'Dental',
  'acton-implants': 'Dental',
  'murphy-dental-implant-center': 'Dental',
  'kayton-dentistry': 'Dental',
  'neal-solevilla-law': 'Legal',
  'xo-dental': 'Dental',
  'coastal-ct-dentistry': 'Dental',
  'creative-smiles': 'Dental',
  'dental-aesthetica': 'Dental',
  'trapline-pest-solutions': 'Home services',
  'orange-county-elections': 'Government',
  'williams-daily-frazier-dental': 'Dental',
  'stages-of-life-medical-institute': 'Healthcare',
}

// The four campaigns featured on the home page.
export const FEATURED_IDS = [
  'healthy-start-florida',
  'hillsborough-county-tax-collector',
  'tampa-mattress',
  'orange-county-elections',
]

export function fmt(n: number): string {
  return n.toLocaleString('en-US')
}

export function growthLabel(c: ClientCase): string {
  return c.growthPct === null ? 'New to search' : `+${fmt(c.growthPct)}%`
}

export function beforeLabel(c: ClientCase): string {
  return c.clicksBefore === null ? 'New' : fmt(c.clicksBefore)
}

export function positionLabel(c: ClientCase): string {
  return c.posBefore === null ? `→ ${c.posNow}` : `${c.posBefore} → ${c.posNow}`
}

// Total clicks across all campaigns in the most recent quarter, e.g. "435K".
export function totalQuarterlyClicks(): string {
  const total = clients.reduce((sum, c) => sum + c.clicksNow, 0)
  return `${Math.round(total / 1000)}K`
}

export function getClient(id: string): ClientCase | undefined {
  return clients.find((c) => c.id === id)
}
