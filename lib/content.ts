export const personal = {
  name: "Vihan Goenka",
  tagline: "Builder. Founder. Math-CS @ UCSD.",
  subtagline: "Mumbai → San Diego. Shipping things that matter.",
  bio: "I'm a Math-CS student at UC San Diego who builds products people actually use. I've shipped a multi-tenant SaaS platform, won AMC 12, founded clubs from scratch, and hacked at YC-adjacent events. I care about hard problems, clean systems, and things that scale.",
  location: "San Diego, CA",
  email: "vgoenka@ucsd.edu",
  linkedin: "linkedin.com/in/vihan-goenka",
  linkedinUrl: "https://linkedin.com/in/vihan-goenka",
  github: "github.com/Vihan-G",
  githubUrl: "https://github.com/Vihan-G",
};

export const stats = [
  { value: 29, suffix: "+", label: "Students Served" },
  { value: 3, suffix: "x", label: "First Place Winner" },
  { value: 20, suffix: "+", label: "Partner Locations" },
  { value: 4, suffix: "", label: "Years Building" },
];

export const experience = [
  {
    title: "Product & Engineering Lead",
    company: "WeLearn — B2B SaaS Platform",
    period: "May 2024 – Present",
    location: "Mumbai, India",
    points: [
      "Architected multi-tenant SaaS across 3 verticals: student booking, library management, admin analytics",
      "Owned full product lifecycle from zero to live pilot serving 29 students across 20+ partner locations",
      "Won 1st place at BITS Pilani YEB; accepted into UC Davis Venture Labs accelerator",
    ],
  },
  {
    title: "Software Developer",
    company: "Family Business",
    period: "Jan 2022 – Jun 2025",
    location: "Akola, India",
    points: [
      "Built full-stack CRM and operations system for tenant records, inquiries, and booking workflows",
      "Built business website, ran SEO strategy and digital ad campaigns driving measurable inbound growth",
    ],
  },
];

export const projects = [
  {
    name: "CultureDesk",
    description:
      "Bloomberg Terminal-style platform for institutions to analyze and hedge cultural sponsorship risk.",
    tech: ["Node.js", "Express.js", "Vanilla JS", "Anthropic Claude API", "Forum Market API"],
    detail:
      "Full backend with HMAC-SHA256 auth, REST API integration, Claude-powered AI risk analysis.",
    highlight:
      "Built at SDxUCSD Agent Hackathon; recognized by Forum's founder (YC W26) as viable GTM strategy.",
    year: "2025",
  },
  {
    name: "Face Recognition Attendance System",
    description:
      "AI-powered facial recognition to automate school-wide attendance with real-time detection pipeline and teacher UI.",
    tech: ["Python", "OpenCV"],
    detail: "Real-time detection pipeline with teacher-facing dashboard for attendance management.",
    highlight: "Deployed school-wide to automate a manual process affecting hundreds of students daily.",
    year: "2024",
  },
  {
    name: "Alumni Database Management System",
    description:
      "Full-stack Flask app for alumni records with DB schema, RESTful routes, and responsive UI.",
    tech: ["Python", "Flask", "HTML/CSS", "SQL"],
    detail: "Sole developer; designed DB schema, built all RESTful routes, and responsive frontend.",
    highlight: "Sole developer — designed, built, and shipped the entire system independently.",
    year: "2024",
  },
];

export const honors = [
  {
    title: "1st Place",
    org: "AMC 12 — Mathematical Association of America",
    year: "2023",
    emoji: "🥇",
  },
  {
    title: "1st Rank",
    org: "National Cyber Olympiad — Science Olympiad Foundation",
    year: "2022",
    emoji: "🥇",
  },
  {
    title: "1st Place",
    org: "Innovation Pitching — BITS Pilani Young Entrepreneurship Bootcamp",
    year: "2023",
    emoji: "🥇",
  },
];

export const skills = {
  languages: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"],
  frameworks: ["Flask", "Node.js", "Express.js", "OpenCV"],
  tools: ["Git/GitHub", "VS Code", "Figma", "Adobe Photoshop", "Canva", "Miro"],
  learning: ["Machine Learning", "scikit-learn", "NumPy", "pandas", "DSA"],
};

export const leadership = [
  {
    role: "President",
    org: "Interact Club — Rotary International",
    period: "Mar 2020 – Mar 2023",
    location: "Mumbai",
    description:
      "Elected president 3 consecutive years; led food drives, tech literacy programs, inter-school events.",
    emoji: "🌐",
  },
  {
    role: "Founder",
    org: "Tech Club, R.N. Podar School",
    period: "May 2023 – May 2025",
    location: "",
    description:
      "Founded school's first tech club; ran coding workshops, hardware projects, peer learning sessions.",
    emoji: "⚡",
  },
  {
    role: "Student Council Representative",
    org: "School Innovation Council",
    period: "Jun 2023 – May 2025",
    location: "",
    description:
      "1 of 3 selected from 350-student cohort; bridged student body and administration on tech policy.",
    emoji: "🎯",
  },
];
