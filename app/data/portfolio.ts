export type SkillGroup = {
  title: string;
  accent: "blue" | "violet" | "teal";
  items: string[];
};

export type ExperienceItem = {
  role: string;
  period: string;
  company: string;
  bullets: string[];
  accent: "blue" | "violet" | "teal" | "pink";
};

export type ProjectItem = {
  name: string;
  description: string;
  stack: string[];
  impact?: Array<{ label: string; value: string }>;
  featured?: boolean;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export const profile = {
  name: "Biraj Karki",
  title: "Full Stack and Quantum Developer",
  location: "Kathmandu, Nepal",
  summary:
    "Software developer building scalable products and exploring quantum computing with Qiskit.",
  ctaPrimary: "#projects",
  ctaSecondary: "#contact",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Client Companies", value: "500+" },
    { label: "Certifications", value: "10+" },
  ],
  links: {
    email: "mailto:birajcodes@gmail.com",
    phone: "tel:+9779845971897",
    linkedin: "https://linkedin.com/in/biraj-karki",
    github: "https://github.com/birajkarki",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    accent: "blue",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "React Query"],
  },
  {
    title: "Backend and APIs",
    accent: "violet",
    items: ["Node.js", "Express", "Go", "Django", "Laravel", "REST APIs"],
  },
  {
    title: "Data and DevOps",
    accent: "teal",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Desktop Engineering",
    accent: "blue",
    items: ["Electron", "NPM packages", "Biometric integration", "Cross-platform apps"],
  },
  {
    title: "Quantum Computing",
    accent: "violet",
    items: ["Qiskit", "IBM Quantum", "Quantum circuits", "Linear algebra"],
  },
  {
    title: "AI and ML",
    accent: "teal",
    items: ["Python", "Machine learning", "Deep learning", "scikit-learn", "Data science"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Lead Software Engineer",
    period: "Jan 2024 - Sep 2025",
    company: "Technergy Global Pvt. Ltd.",
    bullets: [
      "Architected multiple client platforms and maintained on-time delivery.",
      "Optimized Docker CI/CD pipelines and reduced deployment time.",
      "Mentored engineers and improved team productivity.",
    ],
    accent: "blue",
  },
  {
    role: "Technical Lead",
    period: "Apr 2024 - Aug 2025",
    company: "R.D. International Educational Consultancy",
    bullets: [
      "Led technical direction for education product delivery.",
      "Implemented scalable systems for student management workflows.",
    ],
    accent: "violet",
  },
  {
    role: "Mid Full Stack Developer",
    period: "Nov 2022 - Jun 2025",
    company: "Velox Labs",
    bullets: [
      "Built Hajir HRMS dashboard adopted by hundreds of client companies.",
      "Developed an Electron-based biometric integration package.",
      "Designed internal tools that improved monitoring efficiency.",
    ],
    accent: "teal",
  },
  {
    role: "Software Engineer Freelance",
    period: "Apr 2024 - Jul 2024",
    company: "Arba Solutions",
    bullets: ["Delivered full-stack web products for international clients."],
    accent: "pink",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Hajir HRMS",
    description:
      "Human resource management platform adopted by more than 500 companies with advanced attendance and reporting modules.",
    stack: ["Next.js", "TypeScript", "Go", "Docker", "PostgreSQL"],
    impact: [
      { label: "Client companies", value: "500+" },
      { label: "Efficiency gain", value: "20%" },
    ],
    featured: true,
  },
  {
    name: "Biometric Integration System",
    description:
      "Electron-based desktop system and custom package that enabled high-reliability attendance capture.",
    stack: ["Electron", "Node.js", "JavaScript"],
  },
  {
    name: "Laliguras Ecommerce",
    description:
      "Multi-vendor ecommerce product with real-time updates and dockerized delivery pipelines.",
    stack: ["React", "WebSockets", "Docker", "FCM"],
    impact: [{ label: "Vendors", value: "100+" }],
  },
  {
    name: "Studio Management System",
    description:
      "Full-stack platform with map integration and automated communication workflows.",
    stack: ["Next.js", "Express", "Docker", "Maps API"],
  },
];

export const certifications: Certification[] = [
  { title: "Quantum Explorer Intermediate", issuer: "IBM", date: "Mar 2024" },
  { title: "Qiskit Global Summer School", issuer: "IBM", date: "Sep 2023" },
  { title: "AWS Machine Learning Fundamentals", issuer: "Udacity", date: "Sep 2024" },
  { title: "AI Programming with Python", issuer: "Udacity", date: "Jan 2024" },
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI", date: "Dec 2023" },
  { title: "Advanced Learning Algorithms", issuer: "DeepLearning.AI", date: "Dec 2023" },
];
