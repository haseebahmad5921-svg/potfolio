import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { skillCategories } from '../data/skills'

const flatSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    skill,
    category: category.title,
  })),
)

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-raised">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Technologies I use to ship production web apps and internal automation — grouped the way I actually work with them."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {flatSkills.map((item, index) => (
            <motion.article
              key={`${item.category}-${item.skill}`}
              className="card-surface group flex flex-col items-center gap-3 p-4 text-center sm:p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-theme bg-[color-mix(in_srgb,var(--color-accent)_8%,transparent)] transition group-hover:border-[var(--color-accent)] group-hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]">
                <TechIcon name={item.skill} size={28} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-fg-strong sm:text-base">{item.skill}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{item.category}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
