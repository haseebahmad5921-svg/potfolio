import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'
import profilePhoto from '../assets/haseeb-ahmad.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden gradient-mesh">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl" />
        <div className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-sky-500 opacity-10 blur-3xl" />
      </div>

      <div className="container-narrow relative grid min-h-screen items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
        <div>
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Available for hire
          </motion.p>

          <motion.h1
            className="font-display max-w-4xl text-4xl font-extrabold tracking-tight text-fg-strong sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-4 font-display text-xl font-semibold text-[var(--color-accent-soft)] sm:text-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <a href="#projects" className="btn-primary accent-glow">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} />
              </a>
            )}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Send email">
              <Mail size={18} />
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="mt-16 inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-[var(--color-accent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} />
            </motion.span>
          </motion.a>
        </div>

        <motion.div
          className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-theme accent-glow">
            <img
              src={profilePhoto}
              alt={`Professional headshot of ${profile.name}, Full-Stack Developer`}
              className="h-full w-full object-cover object-top"
              width={480}
              height={600}
              fetchPriority="high"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--bg)_55%,transparent)] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
