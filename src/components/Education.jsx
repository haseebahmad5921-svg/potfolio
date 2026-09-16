import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { education, certifications } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Education"
          title="Education & certifications"
          description="Academic foundation supporting my full-stack and automation work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              className="card-surface p-6"
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

          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="card-surface p-6"
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
