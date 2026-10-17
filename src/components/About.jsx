import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import { profile } from '../data/profile'
import { heroStack } from '../data/tech'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Laravel + React developer ready to ship"
          description="Production experience, a full e-commerce stack built solo, and a clear focus on Laravel and React roles."
        />

        <div className="mb-6 grid gap-3 sm:mb-8 sm:grid-cols-3 sm:gap-4">
          {profile.highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="card-surface px-4 py-4 text-center sm:px-5 sm:py-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <p className="font-display text-lg font-bold text-fg-strong sm:text-xl">{item.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <motion.div
            className="card-surface p-5 sm:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base leading-relaxed text-fg sm:text-lg">{profile.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">{profile.aboutExtended}</p>

            <dl className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              <div className="rounded-xl border border-theme bg-[color-mix(in_srgb,var(--color-accent)_6%,transparent)] p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">Location</dt>
                <dd className="mt-1 font-medium text-fg-strong">{profile.location}</dd>
              </div>
              <div className="rounded-xl border border-theme bg-[color-mix(in_srgb,var(--color-accent)_6%,transparent)] p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">Focus</dt>
                <dd className="mt-1 font-medium text-fg-strong">Laravel + React full-stack roles</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="card-surface p-5 sm:p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="font-display text-lg font-semibold text-fg-strong">Hiring stack</h3>
            <p className="mt-2 text-sm text-muted">What I want to work with every day.</p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {heroStack.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="flex items-center gap-3 rounded-xl border border-theme px-3 py-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)]">
                    <TechIcon name={tech} size={20} />
                  </span>
                  <span className="text-sm font-medium text-fg-strong">{tech}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
