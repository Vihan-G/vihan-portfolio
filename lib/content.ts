export const personal = {
  firstName: 'VIHAN',
  lastName: 'GOENKA',
  logo: 'VG',
  role: 'Math–CS @ UCSD.',
  introLines: [
    "Some people write code.",
    "I'm trying to learn how to build things that matter."
  ],
  bioHeadline: `I build things that <em>work</em> — sometimes they even work well.`,
  bio: `Math-CS student at UC San Diego. I've shipped products used by real people,
        competed in math olympiads, and started a few things from scratch.
        I'm still figuring most of it out — but I show up and I ship.`,
  subline: 'Open to internships, collabs, and hard problems.',
  email: 'vgoenka@ucsd.edu',
  linkedinLabel: 'linkedin.com/in/vihan-goenka',
  linkedinHref: 'https://linkedin.com/in/vihan-goenka',
  githubLabel: 'github.com/Vihan-G',
  githubHref: 'https://github.com/Vihan-G',
}

export const manifesto = [
  { text: 'Build first.',               size: 's1', speed: 1.5,  align: 'left'   },
  { text: 'Mumbai → San Diego.',        size: 's3', speed: 0.4,  align: 'right'  },
  { text: 'Ship or it never happened.', size: 's2', speed: 1.1,  align: 'center', gold: true },
  { text: 'Stay curious.',              size: 's3', speed: 0.35, align: 'left'   },
  { text: 'Hard problems.',             size: 's1', speed: 1.6,  align: 'right',  gold: true },
  { text: 'Show your work.',            size: 's2', speed: 0.7,  align: 'left'   },
  { text: 'Keep going.',                size: 's1', speed: 1.3,  align: 'center' },
]

export const projects = [
  {
    id: 'pj1', num: '01',
    label: 'Hackathon · 2025',
    name: 'CULTUREDESK',
    tags: ['Node.js', 'Express', 'Claude API', 'Forum Market API'],
    desc: "A Bloomberg Terminal for cultural sponsorship risk. Built at SDxUCSD with YC companies. Forum's founder called it a viable GTM strategy for their platform.",
    href: 'https://github.com/Vihan-G',
    bg: 'b1',
  },
  {
    id: 'pj2', num: '02',
    label: 'Product · 2024–Present',
    name: 'WELEARN',
    tags: ['SaaS', 'Multi-tenant', 'Full-stack'],
    desc: 'A B2B SaaS platform I built and led from zero — student booking, library management, admin analytics. Live pilot with 29 students across 20+ locations. Won BITS Pilani YEB. Accepted into UC Davis Venture Labs.',
    href: 'https://github.com/Vihan-G',
    bg: 'b2',
  },
  {
    id: 'pj3', num: '03',
    label: 'Computer Vision · 2024',
    name: 'FACEMARK',
    tags: ['Python', 'OpenCV', 'Real-time'],
    desc: 'Automated school-wide attendance with facial recognition. Real-time detection pipeline, teacher-facing UI for live sessions.',
    href: 'https://github.com/Vihan-G',
    bg: 'b3',
  },
  {
    id: 'pj4', num: '04',
    label: 'Internal Tools · 2022',
    name: 'OPS CRM',
    tags: ['Flask', 'Python', 'SQL'],
    desc: 'Full-stack CRM for a family business. Manages tenant records, inquiries, bookings — still in active daily use.',
    href: 'https://github.com/Vihan-G',
    bg: 'b4',
  },
]

export const skills = [
  'Python', 'JavaScript', 'Java', 'C++', 'SQL',
  'Node.js', 'Express', 'Flask', 'OpenCV',
  'React', 'Next.js', 'Git', 'Figma', 'Miro',
  'REST APIs', 'Claude API', 'scikit-learn',
]

export const honors = [
  { label: '1st Place — AMC 12',                sub: 'Mathematical Association of America, 2023' },
  { label: '1st Rank — National Cyber Olympiad', sub: 'Science Olympiad Foundation, 2022'        },
  { label: '1st Place — Innovation Pitch',        sub: 'BITS Pilani Young Entrepreneurship Bootcamp, 2023' },
]

export const leadership = [
  { role: 'President',   org: 'Interact Club — Rotary International', period: '2020–2023', note: '3 consecutive terms' },
  { role: 'Founder',     org: 'Tech Club, R.N. Podar School',         period: '2023–2025', note: 'Built it from zero' },
  { role: 'Council Rep', org: 'School Innovation Council',            period: '2023–2025', note: '1 of 3 from 350 students' },
]
