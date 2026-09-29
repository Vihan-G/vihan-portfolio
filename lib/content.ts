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
    label: 'Outpatient Operations · India · Live',
    name: 'DIGICURE',
    description: 'One operating system for patient intake, live doctor queues, billing, prescriptions, and daily reconciliation.',
    href: 'https://digicure.vihangoenka.com',
    cta: 'Open DigiCure',
    bg: 'b3',
  },
  {
    id: 'pj2',
    num: '02',
    label: 'Attendance + Payroll · India · Pilot',
    name: 'DIGIPAGAR',
    description: 'Face and QR attendance that turns shifts, overtime, advances, and absences into a clear month-end payroll.',
    href: 'https://digipagar.vihangoenka.com',
    cta: 'Open DigiPagar',
    bg: 'b4',
  },
  {
    id: 'pj3',
    num: '03',
    label: 'Study-Space Marketplace · Mumbai · 2024–2026',
    name: 'WELEARN',
    description: 'A discovery and booking platform that connected 500+ students with 75+ partner libraries across Mumbai.',
    href: '#about',
    cta: 'See WeLearn impact',
    bg: 'b2',
  },
  {
    id: 'pj4',
    num: '04',
    label: 'Sponsorship Risk · UC San Diego · 2025',
    name: 'CULTUREDESK',
    description: 'A Bloomberg-style platform that combines market signals with AI to evaluate cultural sponsorship risk.',
    href: 'https://github.com/Vihan-G/culture-desk',
    cta: 'View CultureDesk code',
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
