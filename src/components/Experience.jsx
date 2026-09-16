import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-raised">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been shipping"
          description="Roles and contributions pulled directly from my professional work."
        />

        <div className="relative ml-2 border-l border-theme pl-5 sm:ml-4 sm:pl-8">
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              className="relative mb-10 last:mb-0 sm:mb-12"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="absolute -left-[1.7rem] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-page sm:-left-[2.55rem] sm:h-4 sm:w-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>

              <div className="card-surface p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold text-fg-strong sm:text-xl">{job.role}</h3>
                    <p className="mt-1 text-sm text-[var(--color-accent)] sm:text-base">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-medium text-muted">{job.duration}</p>
                    {job.current && (
                      <span className="mt-1 inline-block rounded-md bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] px-2 py-0.5 text-xs font-semibold text-[var(--color-accent-soft)]">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span className="min-w-0">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
