import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close case study"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-theme bg-card p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Case study
                </p>
                <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-bold text-fg-strong">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {project.subtitle} · {project.role}
                </p>
              </div>
              <button type="button" onClick={onClose} className="icon-btn !h-10 !w-10" aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-theme px-2.5 py-1 text-xs font-medium text-[var(--color-accent-soft)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-6 text-fg">
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Problem
                </h4>
                <p className="mt-2 leading-relaxed">{project.caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Approach
                </h4>
                <p className="mt-2 leading-relaxed">{project.caseStudy.approach}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Outcome
                </h4>
                <p className="mt-2 leading-relaxed">{project.caseStudy.outcome}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Key contributions
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                <FaGithub size={16} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            ) : (
              <p className="mt-8 rounded-xl border border-dashed border-theme px-4 py-3 text-sm text-muted">
                Confidential client deliverable — not publicly hosted. Case study only.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
