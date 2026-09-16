import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'
import { heroStack } from '../data/tech'
import profilePhoto from '../assets/haseeb-ahmad.jpg'
import TechIcon from './TechIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: 'easeOut' },
  }),
}

const floatingTech = [
  { name: 'React.js', className: 'left-2 top-8 sm:-left-4 sm:top-10' },
  { name: 'Laravel', className: 'right-2 top-16 sm:-right-5 sm:top-20' },
  { name: 'MySQL', className: 'bottom-16 left-4 sm:-left-6 sm:bottom-24' },
  { name: 'Google Apps Script', className: 'bottom-10 right-3 sm:-right-4 sm:bottom-16' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-mesh">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-[var(--color-accent)] opacity-20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-16 right-0 h-64 w-64 rounded-full bg-sky-500 opacity-10 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="container-narrow relative grid min-h-[100svh] items-center gap-8 px-4 pb-14 pt-24 sm:gap-10 sm:px-6 sm:pb-16 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <motion.p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:mb-4 sm:text-sm sm:tracking-[0.22em]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            Available for hire
          </motion.p>

          <motion.h1
            className="font-display text-[2.35rem] font-extrabold leading-[1.1] tracking-tight text-fg-strong sm:text-5xl md:text-6xl lg:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-lg font-semibold text-[var(--color-accent-soft)] sm:mt-4 sm:text-xl md:text-2xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {profile.role}
          </motion.p>

          <motion.div
            className="mx-auto mt-7 w-[min(68vw,220px)] lg:hidden"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-theme accent-glow">
              <img
                src={profilePhoto}
                alt={`Professional headshot of ${profile.name}, Full-Stack Developer`}
                className="h-full w-full object-cover object-top"
                width={220}
                height={275}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.p
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-2 sm:mt-7"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            {heroStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-xl border border-theme bg-[color-mix(in_srgb,var(--bg-card)_70%,transparent)] px-3 py-1.5 text-xs font-medium text-fg sm:text-sm"
              >
                <TechIcon name={tech} size={16} />
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
          >
            <a href="#projects" className="btn-primary accent-glow w-full sm:w-auto">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-7 flex items-center gap-3 sm:mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={6}
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
            className="mt-10 hidden w-fit items-center gap-2 text-sm text-muted transition hover:text-[var(--color-accent)] sm:inline-flex"
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
          className="relative mx-auto hidden w-full max-w-md lg:mx-0 lg:block lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          {floatingTech.map((item, i) => (
            <motion.div
              key={item.name}
              className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-theme bg-card shadow-lg ${item.className}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.2 + i * 0.4, ease: 'easeInOut' }}
              title={item.name}
            >
              <TechIcon name={item.name} size={22} />
            </motion.div>
          ))}

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
