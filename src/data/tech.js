import {
  SiReact,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiGit,
  SiPostman,
  SiGoogledrive,
  SiGoogle,
} from 'react-icons/si'
import {
  FaServer,
  FaShoppingCart,
  FaCogs,
  FaLock,
  FaUserShield,
  FaDatabase,
  FaMobileAlt,
  FaEnvelope,
  FaFilePdf,
} from 'react-icons/fa'

export const techMeta = {
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  HTML5: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  CSS3: { Icon: SiCss, color: '#1572B6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  PHP: { Icon: SiPhp, color: '#777BB4' },
  'React.js': { Icon: SiReact, color: '#61DAFB' },
  React: { Icon: SiReact, color: '#61DAFB' },
  Laravel: { Icon: SiLaravel, color: '#FF2D20' },
  'REST APIs': { Icon: FaServer, color: '#10B981' },
  'Token Auth': { Icon: FaLock, color: '#F59E0B' },
  RBAC: { Icon: FaUserShield, color: '#8B5CF6' },
  'Responsive Design': { Icon: FaMobileAlt, color: '#06B6D4' },
  'Database Design': { Icon: FaDatabase, color: '#4479A1' },
  'Google Apps Script': { Icon: SiGoogle, color: '#4285F4' },
  'Google Drive': { Icon: SiGoogledrive, color: '#4285F4' },
  'Google Workspace': { Icon: SiGoogle, color: '#34A853' },
  'Email Automation': { Icon: FaEnvelope, color: '#EA4335' },
  'PDF Generation': { Icon: FaFilePdf, color: '#EF4444' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  Git: { Icon: SiGit, color: '#F05032' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
}

// Lead with Laravel + React for job-seeking focus
export const heroStack = ['Laravel', 'React.js', 'MySQL', 'PHP', 'JavaScript', 'REST APIs']

export const projectVisuals = {
  'ecommerce-platform': {
    Icon: FaShoppingCart,
    gradient: 'from-emerald-500/25 via-teal-500/10 to-sky-500/20',
    accent: '#10B981',
  },
  'business-automation': {
    Icon: FaCogs,
    gradient: 'from-sky-500/25 via-blue-500/10 to-emerald-500/20',
    accent: '#4285F4',
  },
}
