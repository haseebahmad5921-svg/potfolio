import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Building reliable software that teams actually use"
          description="A concise look at how I work and what I bring to product and engineering teams."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-fg">{profile.summary}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">{profile.aboutExtended}</p>

          <dl className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="card-surface p-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">Location</dt>
              <dd className="mt-1 font-medium text-fg-strong">{profile.location}</dd>
            </div>
            <div className="card-surface p-4">
              <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">Focus</dt>
              <dd className="mt-1 font-medium text-fg-strong">Full-stack apps & Workspace automation</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
