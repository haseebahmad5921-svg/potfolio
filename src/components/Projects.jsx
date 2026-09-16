import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'
import { techFilters } from '../data/skills'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.filters.includes(filter))
  }, [filter])

  return (
    <section id="projects" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Projects"
          title="Selected case studies"
          description="Client and production work presented as case studies. These deliverables are confidential and are not publicly hosted — no live demos."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by technology">
          {techFilters.map((tech) => {
            const active = filter === tech
            return (
              <button
                key={tech}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tech)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${
                  active
                    ? 'bg-[var(--color-accent)] text-[#04110b] shadow-[0_8px_24px_color-mix(in_srgb,var(--color-accent)_35%,transparent)]'
                    : 'border border-theme text-muted hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {tech}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                className="card-surface flex flex-col p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-fg-strong">{project.title}</h3>
                    <p className="mt-1 text-sm text-[var(--color-accent)]">{project.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] px-2.5 py-1 text-xs font-semibold text-[var(--color-accent-soft)]">
                    Case study
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-fg">{project.role}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md border border-theme px-2 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <button type="button" onClick={() => setSelected(project)} className="btn-ghost mt-6 w-full sm:w-auto">
                  View Case Study
                  <ArrowUpRight size={16} />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-muted">No projects match this filter.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
