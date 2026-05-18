// ═══════════════════════════════════════════════════
// Site content — single source of truth
// All visible text renders uppercase via CSS
// ═══════════════════════════════════════════════════

export const personal = {
  logo: 'VG',
  role: 'Math-CS at UC San Diego',
  introLines: [
    'I like building things.',
    'Sometimes they work.',
  ],
  bioHeadline: 'I build things that <em>work</em> — and then I build the next one.',
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
    label: 'AI Agent · Hackathon · 2025',
    name: 'CULTUREDESK',
    href: 'https://github.com/Vihan-G',
    bg: 'b1',
  },
  {
    id: 'pj2',
    num: '02',
    label: 'B2B SaaS · 2024–Present',
    name: 'WELEARN',
    href: 'https://github.com/Vihan-G',
    bg: 'b2',
  },
  {
    id: 'pj3',
    num: '03',
    label: 'Computer Vision · 2024',
    name: 'FACEMARK',
    href: 'https://github.com/Vihan-G',
    bg: 'b3',
  },
  {
    id: 'pj4',
    num: '04',
    label: 'Full-Stack CRM · 2022',
    name: 'OPS CRM',
    href: 'https://github.com/Vihan-G',
    bg: 'b4',
  },
]

export const skills = [
  'Python',
  'JavaScript',
  'Java',
  'C++',
  'Node.js',
  'Flask',
  'Express.js',
  'SQL',
  'OpenCV',
  'Git',
]

export const honors = [
  { label: 'AMC 12 — 1st Place',                sub: '2023' },
  { label: 'National Cyber Olympiad — 1st Rank', sub: '2022' },
  { label: 'BITS Pilani YEB — 1st Place',        sub: '2023' },
]

export const leadership = [
  { role: 'President',            org: 'Interact Club — Rotary International', period: '3 Years',     note: '' },
  { role: 'Founder',              org: 'Tech Club — R.N. Podar School',        period: '2023–2025',   note: '' },
  { role: 'Student Council Rep',  org: 'School Innovation Council',            period: '2023–2025',   note: '' },
]
