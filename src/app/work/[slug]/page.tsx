import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/content/caseStudies'
import { CaseStudyDetail } from '@/components/sections/case-study-detail'
import { articleJsonLd } from '@/lib/json-ld'

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const studyIndex = caseStudies.findIndex((s) => s.slug === slug)
  if (studyIndex === -1) notFound()

  const study = caseStudies[studyIndex]
  const prev = studyIndex > 0 ? caseStudies[studyIndex - 1] : null
  const next =
    studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd(study.title, study.summary, study.slug)
          ),
        }}
      />
      <CaseStudyDetail study={study} prev={prev} next={next} />
    </>
  )
}
