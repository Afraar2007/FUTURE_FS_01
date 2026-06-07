import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
//import article1 from "@/assets/article-1.jpg";
//import article2 from "@/assets/article-2.jpg";
//import article3 from "@/assets/article-3.jpg";

export const profile = {
  name: "Afraar M",
  title: "Creative Full-Stack Developer",
  tagline:
    "I craft immersive, high-performance web experiences where elegant engineering meets cinematic design.",
  email: "afraar1512007@gmail.com",
  location: "chennai, india",
};

export const stats = [
  { label: "Projects Completed", value: 2, suffix: "+" },
  { label: "Technologies Used", value: 10, suffix: "" },
  { label: "Years of Experience", value: 2, suffix: "" },
  { label: "Certifications", value: 3, suffix: "" },
];

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools";

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export const skills: { name: string; level: number; category: SkillCategory }[] = [
  { name: "React / Next.js", level: 96, category: "Frontend" },
  { name: "TypeScript", level: 93, category: "Frontend" },
  //{ name: "Three.js / WebGL", level: 84, category: "Frontend" },
  //{ name: "Framer Motion", level: 90, category: "Frontend" },
  { name: "Node.js / Express", level: 91, category: "Backend" },
  //{ name: "Python / FastAPI", level: 82, category: "Backend" },
  //{ name: "GraphQL", level: 80, category: "Backend" },
  //{ name: "PostgreSQL", level: 88, category: "Database" },
  { name: "MongoDB", level: 84, category: "Database" },
  //{ name: "Redis", level: 78, category: "Database" },
  //{ name: "Docker", level: 86, category: "DevOps" },
  //{ name: "Kubernetes", level: 74, category: "DevOps" },
  //{ name: "CI/CD Pipelines", level: 83, category: "DevOps" },
  //{ name: "AWS", level: 85, category: "Cloud" },
  //{ name: "Cloudflare", level: 80, category: "Cloud" },
  { name: "Vercel", level: 92, category: "Cloud" },
  { name: "Git / GitHub", level: 95, category: "Tools" },
  //{ name: "Figma", level: 81, category: "Tools" },
  //{ name: "Vite", level: 90, category: "Tools" },
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
    title: "smart-study-planner ",
    description:
      "Smart Study Planner is a web-based application that helps students organize study schedules, manage tasks, and track academic progress efficiently. It improves productivity through personalized planning, deadline management, and progress monitoring features.",
    image: project1,
    tech: ["Javascript", "TypeScript", "css", "HTML"],
    category: "Web Apps",
    demo: "https://smart-study-planner-sepia.vercel.app/",
    github: "https://github.com/Afraar2007/smart-study-planner",
  },
  {
    title: "BlockLand Registry",
    description:
      "BlockLand Registry – A secure and user-friendly platform for managing land and property records digitally. It streamlines property registration, ownership verification, and document tracking with improved transparency and efficiency.",
    image: project2,
    tech: ["React Native", "Expo", "Node.js"],
    category: "Mobile Apps",
    demo: "https://navaneedan07.github.io/BlockLand-Registry/",
    github: "https://github.com/Afraar2007/BlockLand-Registry",
  },
];

export const codingProfiles = [
  { name: "GitHub", handle: "@aaravk", stat: "1.2k contributions", url: "#" },
  { name: "LeetCode", handle: "@aarav_k", stat: "Top 4% · 720 solved", url: "#" },
 // { name: "HackerRank", handle: "@aaravk", stat: "5★ Problem Solving", url: "#" },
  //{ name: "CodeChef", handle: "@aaravk", stat: "4★ · 1923 rating", url: "#" },
  //{ name: "Codeforces", handle: "@aaravk", stat: "Expert · 1740", url: "#" },
  { name: "GeeksforGeeks", handle: "@aaravk", stat: "Institute Rank 12", url: "#" },
];

export const experience = [
  {
    role: "backend developer intern",
    org: "SCANGS",
    period: "2025 — 2025",
    detail: "Developed and maintained RESTful APIs using Node.js and Express, improving data retrieval efficiency by 30%. Collaborated with frontend developers to integrate APIs, resulting in a seamless user experience. Implemented authentication and authorization mechanisms, enhancing application security.",
  },
];

export const education = [
  {
    role: "B.Tech, Computer Science",
    org: "Madras institute of technology-Anna University",
    period: "2024-2028",
  },
];

export const certifications = [
  "Chakravyuha – Treasure Hunt",
  " National Service Scheme (NSS) Award",
  "Building Onchain Apps with Arbitrum (Ethereum)",
];

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/afraar-m-51239432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "GitHub", url: "https://github.com/Afraar2007" },
  { name: "Instagram", url: "https://www.instagram.com/afraar2007/" },
  { name: "Email", url: "mailto:afraar1512007@gmail.com" },
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];
