import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { profile } from '../data/profile'

const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    id: 'phone',
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/-/g, '')}`,
    icon: Phone,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/haseeb-ahmad-a58759334',
    href: profile.linkedin,
    icon: FaLinkedin,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, freelance project, or automation idea? Reach out directly — I typically respond within a day."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="card-surface flex items-center gap-3 p-4 sm:gap-4 sm:p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-[var(--color-accent)]">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
                  <p className="break-all font-medium text-fg-strong sm:truncate">{item.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
