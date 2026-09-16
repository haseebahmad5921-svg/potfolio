import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import ProjectModal from './ProjectModal'
import TechIcon from './TechIcon'
import { projects } from '../data/projects'
import { techFilters } from '../data/skills'
import { projectVisuals } from '../data/tech'

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

        <div className="filter-scroll mb-6 sm:mb-8" role="tablist" aria-label="Filter projects by technology">
          {techFilters.map((tech) => {
            const active = filter === tech
            return (
              <button
                key={tech}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tech)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:px-4 ${
                  active
                    ? 'bg-[var(--color-accent)] text-[#04110b] shadow-[0_8px_24px_color-mix(in_srgb,var(--color-accent)_35%,transparent)]'
                    : 'border border-theme text-muted hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {tech !== 'All' && <TechIcon name={tech === 'React' ? 'React.js' : tech} size={16} />}
                {tech}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const visual = projectVisuals[project.id]
              const VisualIcon = visual?.Icon

              return (
                <motion.article
                  layout
                  key={project.id}
                  className="card-surface flex flex-col overflow-hidden p-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                >
                  <div
                    className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-40 ${visual?.gradient || 'from-emerald-500/20 to-sky-500/10'}`}
                  >
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_srgb,var(--fg)_18%,transparent)_1px,transparent_0)] [background-size:18px_18px]" />
                    {VisualIcon && (
                      <VisualIcon
                        className="relative z-[1] opacity-90"
                        size={52}
                        color={visual.accent}
                        aria-hidden
                      />
                    )}
                    <div className="absolute bottom-3 left-3 right-3 z-[1] flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-theme bg-[color-mix(in_srgb,var(--bg-card)_85%,transparent)] px-2.5 py-1 text-xs font-medium text-fg backdrop-blur-sm"
                        >
                          <TechIcon name={t} size={14} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-bold text-fg-strong sm:text-xl">{project.title}</h3>
                        <p className="mt-1 text-sm text-[var(--color-accent)]">{project.subtitle}</p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-[color-mix(in_srgb,var(--color-accent)_12%,transparent)] px-2 py-1 text-[11px] font-semibold text-[var(--color-accent-soft)] sm:px-2.5 sm:text-xs">
                        Case study
                      </span>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.shortDescription}</p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-fg">{project.role}</p>

                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                      <button type="button" onClick={() => setSelected(project)} className="btn-ghost w-full sm:flex-1">
                        View Case Study
                        <ArrowUpRight size={16} />
                      </button>
                      {project.reviewUrl && (
                        <a
                          href={project.reviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full sm:flex-1"
                        >
                          <FaLinkedin size={16} />
                          LinkedIn Review
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
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
