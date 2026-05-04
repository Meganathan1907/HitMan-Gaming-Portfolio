import type { NavLink, StatItem, SkillCard, Project, ExperienceItem, ContactDetail, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const STATS: StatItem[] = [
  { value: "5+", label: "Years XP" },
  { value: "80+", label: "Projects" },
  { value: "40+", label: "Clients" },
  { value: "12", label: "Awards" },
];

export const SKILL_CARDS: SkillCard[] = [
  {
    icon: "⬡",
    name: "Frontend Dev",
    desc: "Building pixel-perfect, performant interfaces with modern frameworks and clean architecture.",
    color: "cyan",
    bars: [
      { label: "React", pct: 92 },
      { label: "Vue", pct: 80, delay: 0.1 },
      { label: "Next.js", pct: 88, delay: 0.2 },
    ],
  },
  {
    icon: "◈",
    name: "UI / UX Design",
    desc: "Designing intuitive, visually striking user experiences from wireframe to polished UI.",
    color: "purple",
    bars: [
      { label: "Figma", pct: 95 },
      { label: "Framer", pct: 78, delay: 0.1 },
      { label: "After FX", pct: 70, delay: 0.2 },
    ],
  },
  {
    icon: "⬟",
    name: "Backend & APIs",
    desc: "Full-stack fluency — building robust APIs, databases, and server-side logic that scales.",
    color: "green",
    bars: [
      { label: "Node.js", pct: 85 },
      { label: "Python", pct: 72, delay: 0.1 },
      { label: "SQL/DB", pct: 80, delay: 0.2 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    num: "// 001",
    name: "NEXUS DASHBOARD",
    desc: "A real-time SaaS analytics platform with interactive data visualizations, role-based access, and a design system built from scratch.",
    tags: [
      { label: "React" },
      { label: "D3.js" },
      { label: "Figma", color: "purple" },
      { label: "Live", color: "green" },
    ],
    span: 7,
    mock: {
      barColor: "rgba(0,245,255,0.4)",
      barWidth: "60%",
      barShortColor: "rgba(0,245,255,0.15)",
      barShortVariant: "short",
      windowBorderColor: "rgba(0,245,255,0.1)",
      blocks: [
        { isCyan: true },
        {},
        {},
        { isCyan: true },
      ],
    },
  },
  {
    num: "// 002",
    name: "PHANTOM UI KIT",
    desc: "A 300+ component design system for dark-themed products with Figma + code sync.",
    tags: [
      { label: "Design System", color: "purple" },
      { label: "Tokens" },
      { label: "Open Source", color: "green" },
    ],
    span: 5,
    mock: {
      barColor: "rgba(191,0,255,0.3)",
      barWidth: "70%",
      barShortColor: "rgba(191,0,255,0.15)",
      barShortVariant: "xshort",
      windowBorderColor: "rgba(191,0,255,0.15)",
      blocks: [
        { colSpan2: true, style: { background: "rgba(191,0,255,0.08)", borderColor: "rgba(191,0,255,0.15)" } },
        { style: { background: "rgba(191,0,255,0.12)", borderColor: "rgba(191,0,255,0.2)" } },
        { isCyan: true },
      ],
    },
  },
  {
    num: "// 003",
    name: "STRATUM LANDING",
    desc: "High-conversion startup landing page with micro-animations, scroll-based reveals, and 98 Lighthouse score.",
    tags: [
      { label: "Next.js" },
      { label: "Framer", color: "green" },
      { label: "GSAP" },
    ],
    span: 5,
    mock: {
      barColor: "rgba(57,255,20,0.2)",
      barWidth: "55%",
      barShortColor: "rgba(57,255,20,0.1)",
      barShortVariant: "short",
      windowBorderColor: "rgba(57,255,20,0.1)",
      blocks: [
        { style: { background: "rgba(57,255,20,0.06)", borderColor: "rgba(57,255,20,0.1)" } },
        { style: { background: "rgba(57,255,20,0.04)", borderColor: "rgba(57,255,20,0.08)" } },
        { isCyan: true, colSpan2: true },
      ],
    },
  },
  {
    num: "// 004",
    name: "ORBIT E-COMMERCE PLATFORM",
    desc: "Full-stack e-commerce solution with custom CMS, payment integration, real-time inventory, and a bespoke storefront UI that drove 3× conversion vs the previous site. Built solo from design to deployment.",
    tags: [
      { label: "Next.js" },
      { label: "Stripe" },
      { label: "PostgreSQL", color: "purple" },
      { label: "Node.js" },
      { label: "Live", color: "green" },
    ],
    span: 7,
    mock: {
      barColor: "rgba(255,107,0,0.2)",
      barWidth: "80%",
      barShortColor: "rgba(255,107,0,0.1)",
      barShortVariant: "xshort",
      windowBorderColor: "rgba(255,107,0,0.1)",
      blocks: [
        { style: { background: "rgba(255,107,0,0.08)", borderColor: "rgba(255,107,0,0.15)" } },
        { isCyan: true },
        { style: { background: "rgba(255,107,0,0.05)", borderColor: "rgba(255,107,0,0.1)" } },
        { style: { background: "rgba(191,0,255,0.08)", borderColor: "rgba(191,0,255,0.15)" } },
      ],
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  { year: "2023—NOW", role: "Senior UI Developer", company: "Freelance / Remote — Global Clients" },
  { year: "2021—2023", role: "Frontend Engineer", company: "Tech Startup, Bangalore" },
  { year: "2019—2021", role: "UI/UX Designer", company: "Digital Agency, Chennai" },
  { year: "2019", role: "B.Tech Computer Science", company: "Anna University, Tamil Nadu" },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  { icon: "@", text: "hello@yourname.com", href: "mailto:hello@yourname.com" },
  { icon: "LI", text: "linkedin.com/in/yourname", href: "#" },
  { icon: "GH", text: "github.com/yourname", href: "#" },
  { icon: "📍", text: "Madurai, Tamil Nadu — IST" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "in", href: "#" },
  { label: "gh", href: "#" },
  { label: "tw", href: "#" },
  { label: "dr", href: "#" },
];

export const SECTIONS = ["hero", "skills", "projects", "about", "contact"] as const;
