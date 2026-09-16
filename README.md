# potfolio

# Haseeb Ahmad — Portfolio

Personal developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

## Customize content

All resume-driven content lives in `src/data/`:

| File | Purpose |
|------|---------|
| `profile.js` | Name, role, contact, bio, social links |
| `skills.js` | Skill categories + project filter chips |
| `projects.js` | Case-study projects (no live demo links) |
| `experience.js` | Work timeline |
| `education.js` | Education & certifications |

Add your GitHub URL in `profile.js` when ready (`github: 'https://github.com/...'`).

Replace the About photo placeholder by importing an image in `src/components/About.jsx`.

## EmailJS (optional)

Copy `.env.example` to `.env` and fill in your EmailJS keys. Without them, the contact form falls back to `mailto:`.

## Build

```bash
npm run build
npm run preview
```

## Design notes

- Dark theme by default (emerald accent), with light/dark toggle
- Projects are case studies only — confidential client work, no live demos
- Typography: Outfit (headings) + Source Sans 3 (body)
