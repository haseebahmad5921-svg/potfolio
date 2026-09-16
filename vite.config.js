import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel serves from domain root; GitHub Pages uses /potfolio/
const base = process.env.VERCEL ? '/' : '/potfolio/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
