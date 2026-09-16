import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skillCategories } from '../data/skills'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-raised">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies I use to ship production web apps and internal automation — grouped the way I actually work with them."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.id}
              className="card-surface p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h3 className="font-display text-lg font-semibold text-fg-strong">{category.title}</h3>
              <motion.ul
                className="mt-4 flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={item}
                    className="rounded-lg border border-theme bg-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] px-3 py-1.5 text-sm font-medium text-fg transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-soft)]"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
