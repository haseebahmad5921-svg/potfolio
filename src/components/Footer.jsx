import { Mail, MapPin, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'

const quickLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-theme bg-raised">
      <div className="container-narrow section-pad !py-10 sm:!py-14">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-fg-strong">{profile.name}</p>
            <p className="mt-2 text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
            <div className="mt-5 flex gap-3">
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10" aria-label="GitHub">
                  <FaGithub size={18} />
                </a>
              )}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn !h-10 !w-10" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn !h-10 !w-10" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:block sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition hover:text-[var(--color-accent)]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <a href={`mailto:${profile.email}`} className="break-all hover:text-[var(--color-accent)]">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[var(--color-accent)]" />
                <a href={`tel:${profile.phone.replace(/-/g, '')}`} className="hover:text-[var(--color-accent)]">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-[var(--color-accent)]" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-theme pt-6 text-center text-sm text-muted sm:mt-12">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
