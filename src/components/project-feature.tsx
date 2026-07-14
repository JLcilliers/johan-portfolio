import type { Project } from '@/data/projects'
import { mocksById } from '@/components/mocks'

export function ProjectFeature({ project }: { project: Project }) {
  const Mock = mocksById[project.id]
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className="mx-auto max-w-[1060px] px-5 py-16"
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-accent-deep">
        {project.category}
      </p>
      <h3
        id={`${project.id}-title`}
        className="mt-2 font-display text-[clamp(1.9rem,4.6vw,3rem)] font-bold uppercase leading-none text-ink"
      >
        {project.name}
      </h3>
      <p className="mt-2 text-lg italic text-mute">{project.subtitle}</p>
      <hr className="mt-5 border-t-2 border-ink" />

      <div className="mt-8">{Mock ? <Mock /> : null}</div>

      <div className="mt-8 max-w-3xl space-y-4 leading-relaxed">
        {project.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <h4 className="mt-10 font-display text-lg font-bold uppercase text-ink">Highlights</h4>
      <div className="mt-2 h-0.5 w-full bg-accent-mid" aria-hidden="true" />
      <ul className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-[0.95rem] leading-snug">
            <span aria-hidden="true" className="font-bold text-accent-deep">
              &gt;
            </span>
            {highlight}
          </li>
        ))}
      </ul>

      <p className="mt-8 border-t border-rule pt-4 text-sm">
        <strong className="mr-3 font-bold text-ink">Built with</strong>
        <span className="text-mute">{project.builtWith.join(' · ')}</span>
      </p>
    </article>
  )
}
