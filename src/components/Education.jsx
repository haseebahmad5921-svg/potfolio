import { motion } from 'framer-motion'
import { GraduationCap, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { education, certifications } from '../data/education'

const studyFocus = ['React.js', 'Laravel', 'MySQL', 'JavaScript']

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Education"
          title="Education & certifications"
          description="Academic foundation supporting my full-stack and automation work."
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className="card-surface p-5 sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-[var(--color-accent)]">
                <GraduationCap size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-fg-strong">{item.degree}</h3>
              <p className="mt-2 text-[var(--color-accent)]">{item.institution}</p>
              <p className="mt-3 text-sm text-muted">
                {item.duration}
                {item.status ? ` · ${item.status}` : ''}
              </p>
            </motion.article>
          ))}

          <motion.article
            className="card-surface p-5 sm:p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-[var(--color-accent)]">
              <Code2 size={22} />
            </div>
            <h3 className="font-display text-lg font-bold text-fg-strong">Applied focus areas</h3>
            <p className="mt-2 text-sm text-muted">
              Building production skills alongside coursework with the stack I ship in.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {studyFocus.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-theme px-2.5 py-1.5 text-xs font-medium text-fg"
                >
                  <TechIcon name={tech} size={14} />
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>

          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="card-surface p-5 sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (education.length + index) * 0.06 }}
            >
              <h3 className="font-display text-lg font-bold text-fg-strong">{cert.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {cert.issuer} · {cert.year}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
