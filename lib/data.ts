export const profile = {
  name: "Abdul Aziz",
  firstName: "Abdul",
  role: "Junior Full Stack Web Developer",
  location: "Moulvibazar, Bangladesh",
  phone: "+880 1751939239",
  phoneHref: "tel:+8801751939239",
  email: "aziz017519@gmail.com",
  github: "github.com/aziz017519",
  githubUrl: "https://github.com/aziz017519",
  resume: "/resume.pdf",
  tagline: "I build for the web, one line at a time.",
  intro:
    "Aspiring junior web developer from Moulvibazar, Bangladesh. I turn what I learn into working products with React, Next.js, Node.js and MongoDB — and I'm always shipping something new.",
  objective: [
    "I'm currently completing Programming Hero's Full Stack Web Development course, where I've learned HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB and Tailwind CSS — and I work every day with Git, GitHub and VS Code.",
    "I'm looking for an entry-level web developer role or internship where I can apply these skills, contribute to real products, and keep learning from people who care about their craft.",
  ],
  course: {
    title: "Full Stack Web Development",
    provider: "Programming Hero",
    period: "July 2026 — January 2027",
    status: "In progress",
  },
  education: {
    degree: "Higher Secondary Certificate (HSC)",
    group: "Humanities",
    institution: "Syed Shah Mostafa College",
    location: "Moulvibazar",
    year: "2026",
  },
  languages: [
    { name: "Bangla", level: "Native", value: 100 },
    { name: "English", level: "Limited Working Proficiency", value: 62 },
  ],
  quote: "Turning curiosity into meaningful technology.",
  enjoy: [
    "Web Development",
    "Problem Solving",
    "Learning New Tech",
    "UI & Design",
    "Building Projects",
    "Exploring AI",
  ],
  stats: [
    { value: "10+", label: "Technologies" },
    { value: "6", label: "Skill Areas" },
    { value: "2", label: "Languages" },
    { value: "2027", label: "Course Completion" },
  ],
  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SkillCategory =
  | "Web"
  | "Frameworks"
  | "Database"
  | "Tools"
  | "Office";

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
  label: string;
  icon: string;
  note?: string;
};

export const skillCategories: Array<"All" | SkillCategory> = [
  "All",
  "Web",
  "Frameworks",
  "Database",
  "Tools",
  "Office",
];

export const skills: Skill[] = [
  { name: "HTML", level: 92, category: "Web", label: "Markup", icon: "html" },
  { name: "CSS", level: 88, category: "Web", label: "Styling", icon: "css" },
  { name: "JavaScript", level: 82, category: "Web", label: "Programming", icon: "js" },
  { name: "TypeScript", level: 74, category: "Web", label: "Programming", icon: "ts" },
  { name: "Tailwind CSS", level: 86, category: "Web", label: "Styling", icon: "tailwind" },
  { name: "React", level: 80, category: "Frameworks", label: "Frontend", icon: "react" },
  { name: "Next.js", level: 76, category: "Frameworks", label: "Full Stack", icon: "next" },
  { name: "Node.js", level: 72, category: "Frameworks", label: "Backend", icon: "node" },
  { name: "Express.js", level: 68, category: "Frameworks", label: "Backend", icon: "express" },
  { name: "MongoDB", level: 70, category: "Database", label: "Database", icon: "mongo" },
  { name: "Git", level: 80, category: "Tools", label: "Version Control", icon: "git" },
  { name: "GitHub", level: 84, category: "Tools", label: "Collaboration", icon: "github" },
  { name: "VS Code", level: 90, category: "Tools", label: "Editor", icon: "vscode" },
  { name: "MS Word", level: 85, category: "Office", label: "Documents", icon: "word" },
  { name: "MS Excel", level: 72, category: "Office", label: "Spreadsheets", icon: "excel" },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  category: "Frontend" | "Full Stack" | "Backend";
  status: "Live" | "In Progress" | "Practice";
  year: string;
  icon: string;
  accent: "violet" | "indigo" | "fuchsia" | "blue";
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    kicker: "This website",
    description:
      "My own corner of the internet — a dark, animated portfolio built from scratch with Next.js, TypeScript and Tailwind CSS. Scroll-driven reveals, a live skill explorer and a fully responsive layout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    status: "Live",
    year: "2026",
    icon: "portfolio",
    accent: "violet",
    href: "#top",
    linkLabel: "View Site",
  },
  {
    title: "Full-Stack MERN App",
    kicker: "Currently building",
    description:
      "A complete CRUD application with authentication, dashboards and MongoDB persistence — the capstone build of my Full Stack Web Development course.",
    tags: ["Next.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    status: "In Progress",
    year: "2027",
    icon: "layers",
    accent: "indigo",
  },
  {
    title: "REST API Service",
    kicker: "Learning by building",
    description:
      "A structured REST API with routing, validation and database persistence, built while getting comfortable with backend fundamentals in Node.js and Express.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    category: "Backend",
    status: "In Progress",
    year: "2027",
    icon: "api",
    accent: "fuchsia",
  },
  {
    title: "Responsive UI Collection",
    kicker: "Practice work",
    description:
      "A set of carefully crafted landing pages and UI components built with HTML, CSS and Tailwind CSS to sharpen layout, accessibility and responsive design skills.",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    category: "Frontend",
    status: "Practice",
    year: "2026",
    icon: "layout",
    accent: "blue",
  },
];

export const projectFilters = [
  "All",
  "Frontend",
  "Full Stack",
  "Backend",
  "In Progress",
] as const;

export const contactSubjects = [
  "Job Opportunity",
  "Internship",
  "Freelance Work",
  "Project Collaboration",
  "General Question",
];
