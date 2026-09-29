// ═══════════════════════════════════════════════════
// Site content — single source of truth
// All visible text renders uppercase via CSS
// ═══════════════════════════════════════════════════

export const personal = {
  logo: 'VG',
  role: 'Math-CS · UC San Diego · Product Builder',
  introLines: [
    'I build for real workflows.',
    'Then I make them hold up.',
  ],
  bioHeadline: 'I build systems for the <em>messy parts</em> of the real world.',
  subline: '',
  contact: {
    email: 'vgoenka@ucsd.edu',
    linkedin: 'linkedin.com/in/vihan-goenka',
    github: 'github.com/Vihan-G',
  },
}

export const manifesto = [
  { text: 'Build first.',                    size: 's1', speed: 1.5,  align: 'left',   gold: false },
  { text: 'Mumbai → San Diego.',             size: 's3', speed: 0.4,  align: 'right',  gold: false },
  { text: 'Ship or it never happened.',      size: 's2', speed: 1.1,  align: 'center', gold: true  },
  { text: 'Figure it out along the way.',    size: 's3', speed: 0.35, align: 'left',   gold: false },
  { text: 'Hard problems only.',             size: 's1', speed: 1.6,  align: 'right',  gold: true  },
  { text: 'Less talk.',                      size: 's2', speed: 0.7,  align: 'left',   gold: false },
  { text: 'Keep building.',                  size: 's1', speed: 1.3,  align: 'center', gold: false },
]

export const projects = [
  {
    id: 'pj1',
    num: '01',
    label: 'Healthcare SaaS · Live · 2026–Present',
    name: 'DIGICURE',
    href: 'https://digicure.vihangoenka.com',
    cta: 'View product',
    bg: 'b3',
  },
  {
    id: 'pj2',
    num: '02',
    label: 'Workforce SaaS · Pilot · 2026–Present',
    name: 'DIGIPAGAR',
    href: 'https://digipagar.vihangoenka.com',
    cta: 'View product',
    bg: 'b4',
  },
  {
    id: 'pj3',
    num: '03',
    label: 'Education SaaS · 2024–2026',
    name: 'WELEARN',
    href: null,
    cta: '75+ libraries · 500+ students',
    bg: 'b2',
  },
  {
    id: 'pj4',
    num: '04',
    label: 'AI + Market Signals · Hackathon · 2025',
    name: 'CULTUREDESK',
    href: 'https://github.com/Vihan-G/culture-desk',
    cta: 'View code',
    bg: 'b1',
  },
]

export const skills = [
  'TypeScript',
  'Python',
  'React',
  'Node.js',
  'NestJS',
  'Express.js',
  'PostgreSQL',
  'Docker',
  'OpenCV',
  'Git',
]

export const honors = [
  { label: 'DigiCure · 500+ Weekly Outpatient Visits', sub: 'Live Product' },
  { label: 'WeLearn · 75+ Libraries · 500+ Students',  sub: '2024–2026' },
  { label: 'BITS Pilani YEB · 1st Place',               sub: '2023' },
]

export const leadership = [
  { role: 'Organizer', org: 'SanD Hacks · UC San Diego',           period: 'Current',   note: '' },
  { role: 'Founder',   org: 'WeLearn',                              period: '2024–2026', note: '' },
  { role: 'President', org: 'Interact Club · Rotary International', period: '2020–2023', note: '' },
]
