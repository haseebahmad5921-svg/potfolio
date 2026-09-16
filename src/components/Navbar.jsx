import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/profile'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = links.map((l) => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`)
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-theme bg-page/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-narrow flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8" aria-label="Primary">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-fg-strong"
          onClick={() => handleNav('#home')}
        >
          {profile.name.split(' ')[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${
                  active === link.href ? 'text-[var(--color-accent)]' : 'text-muted hover:text-fg-strong'
                }`}
                aria-current={active === link.href ? 'true' : undefined}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn !h-10 !w-10"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="icon-btn !h-10 !w-10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-theme bg-page lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex max-h-[calc(100svh-3.5rem)] flex-col gap-1 overflow-y-auto px-4 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-xl px-4 py-3.5 text-base font-medium ${
                      active === link.href
                        ? 'bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-[var(--color-accent)]'
                        : 'text-fg'
                    }`}
                    onClick={() => handleNav(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
