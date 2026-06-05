import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export const profile = {
  name: "Aarav Kapoor",
  title: "Creative Full-Stack Developer",
  tagline:
    "I craft immersive, high-performance web experiences where elegant engineering meets cinematic design.",
  email: "hello@aaravkapoor.dev",
  location: "Bengaluru, India",
};

export const stats = [
  { label: "Projects Completed", value: 87, suffix: "+" },
  { label: "Technologies Used", value: 42, suffix: "" },
  { label: "Years of Experience", value: 6, suffix: "" },
  { label: "Certifications", value: 14, suffix: "" },
];

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Cloud"
  | "Tools";

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud",
  "Tools",
];

export const skills: { name: string; level: number; category: SkillCategory }[] = [
  { name: "React / Next.js", level: 96, category: "Frontend" },
  { name: "TypeScript", level: 93, category: "Frontend" },
  { name: "Three.js / WebGL", level: 84, category: "Frontend" },
  { name: "Framer Motion", level: 90, category: "Frontend" },
  { name: "Node.js / Express", level: 91, category: "Backend" },
  { name: "Python / FastAPI", level: 82, category: "Backend" },
  { name: "GraphQL", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 88, category: "Database" },
  { name: "MongoDB", level: 84, category: "Database" },
  { name: "Redis", level: 78, category: "Database" },
  { name: "Docker", level: 86, category: "DevOps" },
  { name: "Kubernetes", level: 74, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 83, category: "DevOps" },
  { name: "AWS", level: 85, category: "Cloud" },
  { name: "Cloudflare", level: 80, category: "Cloud" },
  { name: "Vercel", level: 92, category: "Cloud" },
  { name: "Git / GitHub", level: 95, category: "Tools" },
  { name: "Figma", level: 81, category: "Tools" },
  { name: "Vite", level: 90, category: "Tools" },
];

export type ProjectCategory =
  | "Web Apps"
  | "Mobile Apps"
  | "AI Projects"
  | "Open Source";

export const projectFilters: ("All" | ProjectCategory)[] = [
  "All",
  "Web Apps",
  "Mobile Apps",
  "AI Projects",
  "Open Source",
];

export const projects: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: ProjectCategory;
  demo: string;
  github: string;
}[] = [
  {
    title: "Nebula Analytics",
    description:
      "Real-time analytics platform with streaming dashboards, custom charting and sub-second query performance.",
    image: project1,
    tech: ["React", "TypeScript", "D3", "WebSocket"],
    category: "Web Apps",
    demo: "#",
    github: "#",
  },
  {
    title: "Pulse Fitness",
    description:
      "Cross-platform fitness companion with adaptive workout plans and live activity tracking.",
    image: project2,
    tech: ["React Native", "Expo", "Node.js"],
    category: "Mobile Apps",
    demo: "#",
    github: "#",
  },
  {
    title: "Synapse AI",
    description:
      "Neural-network visualizer and inference playground for exploring large language models interactively.",
    image: project3,
    tech: ["Python", "FastAPI", "PyTorch", "React"],
    category: "AI Projects",
    demo: "#",
    github: "#",
  },
  {
    title: "Aurora Commerce",
    description:
      "Headless storefront with edge rendering, instant search and a buttery checkout experience.",
    image: project4,
    tech: ["Next.js", "Stripe", "GraphQL"],
    category: "Web Apps",
    demo: "#",
    github: "#",
  },
  {
    title: "Forge CLI",
    description:
      "An open-source developer toolkit that scaffolds, lints and ships full-stack apps in seconds.",
    image: project5,
    tech: ["Rust", "TypeScript", "OSS"],
    category: "Open Source",
    demo: "#",
    github: "#",
  },
  {
    title: "Orbit Chat",
    description:
      "Real-time collaborative messaging with presence, threads and end-to-end encryption.",
    image: project6,
    tech: ["React", "Socket.io", "Redis"],
    category: "Web Apps",
    demo: "#",
    github: "#",
  },
];

export const articleCategories = ["All", "React", "WebGL", "Cloud"] as const;

export const articles: {
  title: string;
  category: string;
  readingTime: string;
  date: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}[] = [
  {
    title: "Squeezing 60 FPS Out of React in 2026",
    category: "React",
    readingTime: "8 min read",
    date: "May 12, 2026",
    excerpt:
      "A practical deep-dive into concurrent rendering, memoization traps and the rendering pipeline that actually matters.",
    image: article1,
    featured: true,
  },
  {
    title: "Building Cinematic 3D Scenes with Three.js",
    category: "WebGL",
    readingTime: "11 min read",
    date: "Apr 3, 2026",
    excerpt:
      "From instanced meshes to post-processing — how to ship immersive WebGL without tanking performance.",
    image: article2,
  },
  {
    title: "Designing Scalable Cloud Architecture",
    category: "Cloud",
    readingTime: "6 min read",
    date: "Feb 22, 2026",
    excerpt:
      "Patterns for resilient, cost-aware infrastructure that grows gracefully from your first user to your millionth.",
    image: article3,
  },
];

export const codingProfiles = [
  { name: "GitHub", handle: "@aaravk", stat: "1.2k contributions", url: "#" },
  { name: "LeetCode", handle: "@aarav_k", stat: "Top 4% · 720 solved", url: "#" },
  { name: "HackerRank", handle: "@aaravk", stat: "5★ Problem Solving", url: "#" },
  { name: "CodeChef", handle: "@aaravk", stat: "4★ · 1923 rating", url: "#" },
  { name: "Codeforces", handle: "@aaravk", stat: "Expert · 1740", url: "#" },
  { name: "GeeksforGeeks", handle: "@aaravk", stat: "Institute Rank 12", url: "#" },
];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    org: "Lumen Labs",
    period: "2023 — Present",
    detail:
      "Leading the design-engineering guild, shipping award-winning interactive product experiences.",
  },
  {
    role: "Full-Stack Developer",
    org: "Vertex Studio",
    period: "2020 — 2023",
    detail:
      "Built scalable SaaS platforms end-to-end and mentored a team of five engineers.",
  },
  {
    role: "Software Engineer",
    org: "Hexa Tech",
    period: "2019 — 2020",
    detail: "Delivered performant web apps and internal tooling for enterprise clients.",
  },
];

export const education = [
  {
    role: "B.Tech, Computer Science",
    org: "Indian Institute of Technology",
    period: "2015 — 2019",
    detail: "Graduated with honors, specialization in distributed systems.",
  },
  {
    role: "Full-Stack Nanodegree",
    org: "Udacity",
    period: "2019",
    detail: "Advanced curriculum in modern web engineering and cloud deployment.",
  },
];

export const certifications = [
  "AWS Certified Solutions Architect",
  "Google Professional Cloud Developer",
  "Meta Front-End Professional",
  "Certified Kubernetes Administrator",
];

export const socials = [
  { name: "LinkedIn", url: "#" },
  { name: "GitHub", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Twitter/X", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "Email", url: "mailto:hello@aaravkapoor.dev" },
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Articles", id: "articles" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];
