import { headers } from 'next/headers'
import { Cover } from '@/components/cover'
import { Overview } from '@/components/overview'
import { SectionDivider } from '@/components/section-divider'
import { ClientCaseSection } from '@/components/client-case'
import { ToolsDivider, ToolsIntro, ToolkitIndex } from '@/components/tools-sections'
import { ProjectFeature } from '@/components/project-feature'
import { Closing } from '@/components/closing'
import { clients } from '@/data/clients'
import { projects } from '@/data/projects'
import { projectsJsonLd } from '@/lib/site'

export default async function Home() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const headline = clients.filter((c) => c.section === 1)
  const local = clients.filter((c) => c.section === 2)
  const newSites = clients.filter((c) => c.section === 3)

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd()) }}
      />
      <Cover />
      <Overview />

      <SectionDivider
        id="headline-results"
        number="01"
        title="Headline results"
        subline="The campaigns with the largest year-over-year jump in organic search traffic."
      />
      <div className="bg-cream text-body">
        {headline.map((client) => (
          <ClientCaseSection key={client.id} data={client} />
        ))}
      </div>

      <SectionDivider
        id="local-growth"
        number="02"
        title="Local & practice growth"
        subline="Service businesses and clinics that climbed from page three to page one in their markets."
      />
      <div className="bg-cream text-body">
        {local.map((client) => (
          <ClientCaseSection key={client.id} data={client} />
        ))}
      </div>

      <SectionDivider
        id="new-sites"
        number="03"
        title="New sites taken to market"
        subline="Brand-new properties that went from no search presence to thousands of monthly clicks."
      />
      <div className="bg-cream text-body">
        {newSites.map((client) => (
          <ClientCaseSection key={client.id} data={client} />
        ))}
      </div>

      <ToolsDivider />
      <div className="bg-cream text-body">
        <ToolsIntro />
        {projects.map((project) => (
          <ProjectFeature key={project.id} project={project} />
        ))}
        <ToolkitIndex />
      </div>

      <Closing />
    </>
  )
}
