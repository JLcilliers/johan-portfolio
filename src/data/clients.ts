export type SearchTerm = {
  term: string
  position: number
  clicks: number
}

export type ClientCase = {
  id: string
  eyebrow: string
  name: string
  clicksBefore: number | null
  clicksNow: number
  growthPct: number | null
  posBefore: number | null
  posNow: number
  startMonth: string
  monthly: number[]
  terms: SearchTerm[]
  delivered: [string, string]
  section: 1 | 2 | 3
}

// Month labels run in "YY-MM" format, e.g. "25-02".
export function monthLabels(start: string, count: number): string[] {
  const [yy, mm] = start.split('-').map(Number)
  const labels: string[] = []
  let y = yy
  let m = mm
  for (let i = 0; i < count; i++) {
    labels.push(`${String(y).padStart(2, '0')}-${String(m).padStart(2, '0')}`)
    m += 1
    if (m > 12) {
      m = 1
      y += 1
    }
  }
  return labels
}

export const clients: ClientCase[] = [
  {
    id: 'healthy-start-florida',
    eyebrow: 'Maternal health nonprofit, Florida',
    name: 'Healthy Start Florida',
    clicksBefore: 2794,
    clicksNow: 47442,
    growthPct: 1598,
    posBefore: 25.4,
    posNow: 6.1,
    startMonth: '25-03',
    monthly: [700, 850, 950, 1050, 1100, 1200, 1250, 1300, 1450, 1800, 3000, 3800, 3600, 17500, 26342],
    terms: [
      { term: 'pregnancy calculator', position: 6.0, clicks: 18661 },
      { term: 'pregnancy week calculator', position: 6.2, clicks: 6123 },
      { term: 'pregnancy calendar', position: 5.6, clicks: 799 },
      { term: 'pregnancy calculator week by week', position: 5.0, clicks: 798 },
    ],
    delivered: [
      'The biggest lever here was a pregnancy due-date calculator and a week-by-week pregnancy guide. We rebuilt both as fast, mobile-first tools, marked them up with structured data, and wired internal links from the tools into the program and service pages so the ranking strength carried through the site.',
      'The pregnancy calculator cluster sat on page three a year ago. It now holds the top of page one across dozens of variations, and the site went from roughly 2,800 organic clicks a quarter to over 47,000. Average position improved from 25 to 6.',
    ],
    section: 1,
  },
  {
    id: 'hillsborough-county-tax-collector',
    eyebrow: 'Government services, Hillsborough County, Florida',
    name: 'Hillsborough County Tax Collector',
    clicksBefore: 62439,
    clicksNow: 317696,
    growthPct: 409,
    posBefore: 24.7,
    posNow: 7.8,
    startMonth: '25-04',
    monthly: [11000, 50000, 62000, 90000, 107000, 101000, 115000, 130000, 107000, 109000, 106000, 119000, 102000, 96696],
    terms: [
      { term: 'hillsborough county tax collector', position: 1.0, clicks: 35093 },
      { term: 'hillsborough county property tax', position: 1.2, clicks: 5951 },
      { term: 'tax collector', position: 5.5, clicks: 5390 },
      { term: 'dmv', position: 2.8, clicks: 5089 },
    ],
    delivered: [
      'A large government site with thousands of pages and a tangle of indexation and duplicate-URL problems. We restructured the site around the tasks people actually search for: property tax, driver licenses, vehicle registration, and DMV appointments. Then we cleaned up canonicals and crawl waste and added FAQ markup to the task pages.',
      'Brand and high-intent service terms moved to position one. Quarterly clicks went from about 62,000 to over 317,000, with average position climbing from 25 to under 8.',
    ],
    section: 1,
  },
  {
    id: 'tampa-mattress',
    eyebrow: 'Mattress and bedding retail, Tampa, Florida',
    name: 'Tampa Mattress',
    clicksBefore: 6497,
    clicksNow: 28554,
    growthPct: 339,
    posBefore: 15.9,
    posNow: 5.1,
    startMonth: '25-02',
    monthly: [400, 900, 1600, 2600, 2700, 5000, 9300, 9000, 12000, 15000, 18100, 13500, 10500, 9200, 9100, 10254],
    terms: [
      { term: 'bed sizes', position: 4.6, clicks: 1462 },
      { term: 'mattress sizes', position: 3.8, clicks: 480 },
      { term: 'bed sizes chart', position: 2.5, clicks: 388 },
      { term: 'mattress size chart', position: 2.0, clicks: 210 },
    ],
    delivered: [
      'A small retailer competing against national chains. We built a bed and mattress size guide around the high-volume sizing searches, with clear comparison tables and a visual size chart, then linked it through to the relevant category and product pages.',
      'That one hub now ranks top five for the whole sizing cluster and feeds qualified traffic into the store. Clicks rose from roughly 6,500 to over 28,500 a quarter, and average position more than halved.',
    ],
    section: 1,
  },
  {
    id: 'continuum-wellness',
    eyebrow: 'Supplements and wellness, direct-to-consumer',
    name: 'Continuum Wellness',
    clicksBefore: 95,
    clicksNow: 1100,
    growthPct: 1058,
    posBefore: 18.1,
    posNow: 8.4,
    startMonth: '25-02',
    monthly: [10, 25, 50, 20, 28, 22, 25, 30, 75, 210, 125, 120, 165, 540, 320, 240],
    terms: [
      { term: 'continuum wellness', position: 2.7, clicks: 190 },
      { term: 'continuum vitamins', position: 2.6, clicks: 71 },
      { term: 'continuum supplements', position: 2.4, clicks: 59 },
      { term: 'continuum probiotic', position: 2.5, clicks: 27 },
    ],
    delivered: [
      'The brand was barely indexed when we picked it up. We established proper brand and product pages, added Organization and Product schema, built category pages for vitamins, supplements, and probiotics, and cleared the technical issues holding the site back.',
      'Brand and product terms now sit in the top three. A near-invisible site went from under 100 clicks a quarter to 1,100.',
    ],
    section: 1,
  },
  {
    id: 'desert-dental-smiles',
    eyebrow: 'Dental practice, Hermiston, Oregon',
    name: 'Desert Dental Smiles',
    clicksBefore: 250,
    clicksNow: 771,
    growthPct: 208,
    posBefore: 39.0,
    posNow: 9.5,
    startMonth: '25-02',
    monthly: [40, 90, 80, 75, 60, 35, 20, 190, 295, 253, 290, 310, 370, 338, 250, 183],
    terms: [
      { term: 'desert dental hermiston', position: 1.6, clicks: 52 },
      { term: 'dentist hermiston', position: 5.2, clicks: 21 },
      { term: 'dentist in hermiston oregon', position: 5.4, clicks: 8 },
      { term: 'hermiston dentist', position: 10.5, clicks: 8 },
    ],
    delivered: [
      'Classic local build-out for a single-location practice. We optimized the Google Business Profile, rewrote the location and service pages, cleaned up the name, address, and phone data across directories, and set up a steady review flow.',
      'Local searches for a dentist in Hermiston moved from page four to page one, and clicks tripled.',
    ],
    section: 2,
  },
  {
    id: 'dr-pav-khaira',
    eyebrow: 'Ceramic and zirconia dental implants, United Kingdom',
    name: 'Dr Pav Khaira',
    clicksBefore: 245,
    clicksNow: 839,
    growthPct: 242,
    posBefore: 41.4,
    posNow: 11.9,
    startMonth: '25-02',
    monthly: [50, 80, 80, 80, 90, 125, 130, 155, 200, 225, 253, 220, 245, 216, 305, 318],
    terms: [
      { term: 'pav khaira', position: 1.3, clicks: 40 },
      { term: 'zirconia implants', position: 5.8, clicks: 26 },
      { term: 'ceramic implants', position: 8.5, clicks: 7 },
      { term: 'reasons not to get dental implants uk', position: 3.8, clicks: 7 },
    ],
    delivered: [
      'A specialist with a genuine niche in metal-free implants. We positioned the site as a ceramic and zirconia implant authority, building educational content around those treatments and the questions patients actually ask before committing.',
      'Niche implant terms moved onto page one and clicks more than tripled, with average position improving from 41 to 12.',
    ],
    section: 2,
  },
  {
    id: 'peddicord-family-dentistry',
    eyebrow: 'Family dental practice, Ankeny, Iowa',
    name: 'Peddicord Family Dentistry',
    clicksBefore: 633,
    clicksNow: 1381,
    growthPct: 118,
    posBefore: 25.8,
    posNow: 10.1,
    startMonth: '25-04',
    monthly: [245, 390, 395, 350, 290, 270, 265, 430, 330, 430, 610, 431, 525, 425],
    terms: [
      { term: 'peddicord family dentistry', position: 1.6, clicks: 32 },
      { term: 'peddicord dentistry', position: 1.8, clicks: 19 },
      { term: 'diy denture cleaner', position: 7.3, clicks: 10 },
      { term: 'cleaning dentures with baking soda', position: 6.3, clicks: 9 },
    ],
    delivered: [
      'We rebuilt the site around the Peddicord brand after a practice name change, making sure the brand secured the top spot and the old equity carried over. Alongside that we published a denture-care content series that picked up a steady stream of informational searches.',
      'Clicks more than doubled and average position improved from 26 to 10, with a new content-led traffic stream on top of the local visibility.',
    ],
    section: 2,
  },
  {
    id: 'acton-implants',
    eyebrow: 'Dental implant practice, Acton, Massachusetts',
    name: 'Acton Implants',
    clicksBefore: 294,
    clicksNow: 690,
    growthPct: 135,
    posBefore: 34.1,
    posNow: 17.6,
    startMonth: '25-02',
    monthly: [40, 90, 85, 115, 145, 230, 135, 155, 205, 190, 140, 245, 170, 165, 255, 270],
    terms: [
      { term: 'acton implants', position: 3.0, clicks: 28 },
      { term: 'can you eat nuts with dental implants', position: 2.2, clicks: 20 },
      { term: 'acton dentistry', position: 6.7, clicks: 5 },
      { term: 'acton dental', position: 7.5, clicks: 4 },
    ],
    delivered: [
      'Implant-focused service pages paired with practical patient FAQ content covering aftercare and diet. We optimized the local presence for Acton and the surrounding towns.',
      'Practice terms and aftercare questions both climbed toward page one, and clicks more than doubled.',
    ],
    section: 2,
  },
  {
    id: 'murphy-dental-implant-center',
    eyebrow: 'Dental practice, Murphy, Texas',
    name: 'Murphy Dental & Implant Center',
    clicksBefore: 394,
    clicksNow: 738,
    growthPct: 87,
    posBefore: 34.3,
    posNow: 10.7,
    startMonth: '25-02',
    monthly: [55, 140, 130, 122, 140, 137, 120, 98, 175, 135, 112, 225, 200, 260, 258, 220],
    terms: [
      { term: 'murphy dental and implant center', position: 1.2, clicks: 285 },
      { term: 'murphy dental', position: 11.3, clicks: 49 },
      { term: 'murphy implant center', position: 1.0, clicks: 18 },
      { term: 'dentist murphy tx', position: 13.7, clicks: 6 },
    ],
    delivered: [
      'Brand consolidation plus geo-targeted service pages for the Murphy area, backed by Google Business Profile work and citation cleanup.',
      'The brand owns position one and the broader Murphy geo terms are climbing. Average position improved from 34 to 11.',
    ],
    section: 2,
  },
  {
    id: 'kayton-dentistry',
    eyebrow: 'Dental practice, Charlottesville, Virginia',
    name: 'Kayton Dentistry',
    clicksBefore: 562,
    clicksNow: 847,
    growthPct: 51,
    posBefore: 39.9,
    posNow: 10.6,
    startMonth: '25-02',
    monthly: [105, 215, 195, 155, 205, 195, 160, 215, 210, 185, 175, 275, 395, 380, 267, 200],
    terms: [
      { term: 'jack kayton dds', position: 4.2, clicks: 26 },
      { term: 'jack kayton', position: 1.2, clicks: 23 },
      { term: 'dr kayton', position: 2.2, clicks: 18 },
    ],
    delivered: [
      'We rebuilt the practitioner and brand pages with proper bios and trust signals, then added local service pages. A round of technical fixes cleared what was dragging the site down.',
      'Average position moved from page four to page one, and clicks grew by half.',
    ],
    section: 2,
  },
  {
    id: 'neal-solevilla-law',
    eyebrow: 'Personal injury law firm, Florida',
    name: 'Neal & Solevilla Law',
    clicksBefore: 629,
    clicksNow: 1173,
    growthPct: 86,
    posBefore: 46.1,
    posNow: 17.7,
    startMonth: '25-02',
    monthly: [60, 145, 235, 235, 240, 385, 430, 620, 795, 730, 570, 925, 755, 410, 400, 363],
    terms: [
      { term: 'neal and solevilla', position: 2.1, clicks: 86 },
      { term: 'neal & solevilla personal injury lawyers', position: 1.5, clicks: 17 },
      { term: 'melissa solevilla', position: 3.5, clicks: 16 },
    ],
    delivered: [
      'Practice-area pages for the firm’s personal injury work, attorney bios with real credibility signals, local optimization, and structured data across the site.',
      'Brand and practice terms moved up sharply and the sitewide average position nearly halved, from 46 to 18.',
    ],
    section: 2,
  },
  {
    id: 'xo-dental',
    eyebrow: 'Cosmetic dental practice, Preston, United Kingdom',
    name: 'XO Dental',
    clicksBefore: 1943,
    clicksNow: 3535,
    growthPct: 82,
    posBefore: 29.6,
    posNow: 19.7,
    startMonth: '25-02',
    monthly: [300, 645, 610, 690, 665, 800, 850, 855, 870, 875, 780, 1150, 1160, 1100, 1300, 1135],
    terms: [
      { term: 'xo dental', position: 1.6, clicks: 1226 },
      { term: 'teeth whitening preston', position: 17.4, clicks: 61 },
      { term: 'xo dental reviews', position: 1.5, clicks: 42 },
      { term: 'dentist preston', position: 6.8, clicks: 40 },
    ],
    delivered: [
      'Cosmetic service pages for whitening and aligners, with geo-targeting for Preston. A round of technical and content improvements ran alongside.',
      'The brand is dominant and the cosmetic geo terms are climbing the rankings. Clicks rose from roughly 1,900 to 3,500 a quarter.',
    ],
    section: 2,
  },
  {
    id: 'coastal-ct-dentistry',
    eyebrow: 'Dental practice, Waterford, Connecticut',
    name: 'Coastal CT Dentistry',
    clicksBefore: 908,
    clicksNow: 1590,
    growthPct: 75,
    posBefore: 20.7,
    posNow: 18.2,
    startMonth: '25-02',
    monthly: [120, 325, 295, 285, 320, 410, 375, 365, 400, 450, 395, 505, 480, 560, 490, 540],
    terms: [
      { term: 'coastal ct dentistry', position: 1.8, clicks: 239 },
      { term: 'coastal connecticut dentistry', position: 1.5, clicks: 113 },
      { term: 'coastal dental waterford ct', position: 1.0, clicks: 58 },
    ],
    delivered: [
      'Brand and local geo pages for the Waterford area, backed by citation building and a review push.',
      'Local Waterford terms sit at the top of page one and clicks grew by three quarters.',
    ],
    section: 2,
  },
  {
    id: 'creative-smiles',
    eyebrow: 'Cosmetic dental practice, Belfast, Northern Ireland',
    name: 'Creative Smiles',
    clicksBefore: 2778,
    clicksNow: 3600,
    growthPct: 30,
    posBefore: 41.3,
    posNow: 18.6,
    startMonth: '25-02',
    monthly: [470, 920, 910, 950, 1030, 940, 895, 1040, 1050, 890, 865, 1180, 1190, 1155, 1235, 1210],
    terms: [
      { term: 'creative smiles', position: 3.0, clicks: 486 },
      { term: 'creative smiles dunmurry', position: 1.4, clicks: 135 },
      { term: 'teeth whitening belfast', position: 10.6, clicks: 55 },
      { term: 'composite bonding belfast', position: 16.2, clicks: 29 },
    ],
    delivered: [
      'A cosmetic service hub covering whitening and composite bonding, with Belfast and Dunmurry geo-targeting and a technical cleanup.',
      'Average position more than halved, from 41 to 19, with the cosmetic geo terms now within striking distance of page one.',
    ],
    section: 2,
  },
  {
    id: 'dental-aesthetica',
    eyebrow: 'Cosmetic dental practice, Altrincham, United Kingdom',
    name: 'Dental Aesthetica',
    clicksBefore: 513,
    clicksNow: 715,
    growthPct: 39,
    posBefore: 37.6,
    posNow: 15.4,
    startMonth: '25-02',
    monthly: [75, 155, 185, 170, 155, 205, 260, 255, 265, 255, 200, 260, 275, 295, 215, 205],
    terms: [
      { term: 'dental aesthetica', position: 5.0, clicks: 76 },
      { term: 'teeth whitening altrincham', position: 5.1, clicks: 15 },
      { term: 'dentist altrincham', position: 4.9, clicks: 14 },
    ],
    delivered: [
      'Local cosmetic dentistry pages built around Altrincham search terms, plus a review programme.',
      'Average position improved from page four into page two, with the core local terms already on page one.',
    ],
    section: 2,
  },
  {
    id: 'trapline-pest-solutions',
    eyebrow: 'Pest control, Florida',
    name: 'Trapline Pest Solutions',
    clicksBefore: 606,
    clicksNow: 800,
    growthPct: 32,
    posBefore: 27.1,
    posNow: 7.7,
    startMonth: '25-02',
    monthly: [85, 160, 205, 230, 260, 200, 188, 210, 230, 232, 148, 185, 180, 235, 265, 300],
    terms: [
      { term: 'termites vs ants', position: 1.5, clicks: 84 },
      { term: 'trapline pest solutions', position: 2.0, clicks: 67 },
      { term: 'ant vs termite', position: 1.3, clicks: 40 },
      { term: 'plaster bagworm', position: 2.7, clicks: 29 },
    ],
    delivered: [
      'We built pest identification content around the things homeowners search before they call, like telling termites from ants and dealing with plaster bagworms, then connected it to the service and location pages.',
      'Those educational terms hit position one, and the sitewide average position jumped from 27 to under 8 as the topical authority took hold.',
    ],
    section: 2,
  },
  {
    id: 'orange-county-elections',
    eyebrow: 'Government elections office, Orange County, Florida',
    name: 'Orange County Elections',
    clicksBefore: null,
    clicksNow: 14593,
    growthPct: null,
    posBefore: null,
    posNow: 6.6,
    startMonth: '25-09',
    monthly: [6000, 15500, 46500, 8100, 7800, 8200, 7900, 4600, 2093],
    terms: [
      { term: 'apopka election results', position: 3.4, clicks: 723 },
      { term: 'orange county supervisor of elections', position: 1.5, clicks: 248 },
      { term: 'orange county voter registration lookup', position: 3.1, clicks: 224 },
      { term: 'apopka election results 2026', position: 2.0, clicks: 146 },
    ],
    delivered: [
      'A new search presence built around what voters actually need: live results pages and a voter registration lookup, plus event-driven content engineered to index fast ahead of each cycle.',
      'The site captured high-intent election and voter terms quickly, reaching nearly 14,600 clicks a quarter from a standing start with an average position under 7.',
    ],
    section: 3,
  },
  {
    id: 'williams-daily-frazier-dental',
    eyebrow: 'Dental practice, United States',
    name: 'Williams, Daily & Frazier Dental',
    clicksBefore: null,
    clicksNow: 7399,
    growthPct: null,
    posBefore: null,
    posNow: 9.3,
    startMonth: '25-12',
    monthly: [2350, 2620, 2540, 2680, 2350, 2369],
    terms: [
      { term: 'williams daily & frazier dental', position: 1.0, clicks: 184 },
      { term: 'extra wisdom teeth', position: 1.5, clicks: 95 },
      { term: 'supernumerary wisdom teeth', position: 1.7, clicks: 65 },
      { term: 'williams and daily dental', position: 1.4, clicks: 47 },
    ],
    delivered: [
      'A brand-new site taken to market. Alongside the brand and service pages we ran a clinical content series on supernumerary and extra wisdom teeth that earned strong informational rankings well beyond the local area.',
      'From zero search presence to over 7,300 clicks a quarter within a few months of launch.',
    ],
    section: 3,
  },
  {
    id: 'stages-of-life-medical-institute',
    eyebrow: 'Medical practice, Longwood, Florida',
    name: 'Stages of Life Medical Institute',
    clicksBefore: null,
    clicksNow: 1332,
    growthPct: null,
    posBefore: null,
    posNow: 14.3,
    startMonth: '25-09',
    monthly: [200, 445, 430, 685, 685, 410, 478, 420, 434],
    terms: [
      { term: 'stages of life medical institute', position: 1.2, clicks: 178 },
      { term: 'stages of life longwood', position: 1.5, clicks: 55 },
      { term: 'stages of life patient portal', position: 1.9, clicks: 16 },
    ],
    delivered: [
      'Established the practice in search from scratch. Brand and location pages went in first, then the patient portal page, all indexed and ranking top two for brand terms within weeks.',
      'A new property that went from no visibility to over 1,300 clicks a quarter.',
    ],
    section: 3,
  },
]
