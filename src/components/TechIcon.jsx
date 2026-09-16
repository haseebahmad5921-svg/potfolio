import { techMeta } from '../data/tech'

export default function TechIcon({ name, size = 22, className = '' }) {
  const meta = techMeta[name]
  if (!meta) return null

  const { Icon, color } = meta
  return <Icon size={size} color={color} className={className} aria-hidden />
}
