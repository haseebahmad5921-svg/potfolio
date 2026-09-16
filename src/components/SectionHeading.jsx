import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mb-7 max-w-3xl sm:mb-9"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">{description}</p>
      )}
    </motion.div>
  )
}
