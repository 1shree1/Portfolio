import type { ComponentType } from "react";
import {
  BadgeCheck,
  Code2,
  Gauge,
  Github,
  Laptop,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Route,
  SearchCheck,
  Smartphone,
  Workflow,
} from "lucide-react";

export type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  outcomes: string[];
  icon: IconComponent;
};

export type Project = {
  name: string;
  purpose: string;
  problem: string;
  role: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  githubUrl?: string;
  status: "Live" | "In Development" | "Concept Project";
  featured?: boolean;
};

export type Principle = {
  title: string;
  description: string;
  icon: IconComponent;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const site = {
  name: "Shree Subedi",
  role: "Web Developer in Nepal",
  email: "ksubedi306@gmail.com",
  url: "https://www.subedishree.com.np",
  github: "https://github.com/1shree1",
  portfolioRepository: "https://github.com/1shree1/Portfolio",
  linkedin: "https://www.linkedin.com/in/shree-subedi-b59836284/",
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "Git",
  "GitHub",
];

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Professional websites that make your offer clear, build trust, and give visitors a simple path to enquire.",
    outcomes: [
      "Professional company websites",
      "Clear service presentation",
      "Mobile-first layouts",
      "Lead-generation contact flows",
    ],
    icon: Laptop,
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for campaigns, product launches, and offers where every section supports one clear next action.",
    outcomes: [
      "Campaign pages",
      "Product pages",
      "Focused calls to action",
      "Fast-loading experiences",
    ],
    icon: Gauge,
  },
  {
    title: "Web Applications",
    description:
      "Interactive interfaces for useful workflows, built with reusable components and room to connect real data.",
    outcomes: [
      "Interactive interfaces",
      "Dashboards",
      "Booking experiences",
      "API integrations",
    ],
    icon: Workflow,
  },
  {
    title: "Website Redesign",
    description:
      "A practical rebuild of outdated pages so the site becomes easier to use, faster to scan, and stronger on mobile.",
    outcomes: [
      "Improve outdated layouts",
      "Fix mobile responsiveness",
      "Improve usability",
      "Improve clarity and performance",
    ],
    icon: MonitorSmartphone,
  },
];

export const projects: Project[] = [
  {
    name: "Personal Portfolio",
    purpose:
      "A personal-brand website for presenting Shree's development work, technical focus, and contact paths.",
    problem:
      "The site needs to explain who Shree is, what he builds, and how visitors can start a conversation quickly.",
    role: "Design, frontend development, content structure, and static deployment setup.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/shree.jpg",
    imageAlt: "Portrait of Shree Subedi used in the personal portfolio hero.",
    demoUrl: site.url,
    githubUrl: site.portfolioRepository,
    status: "Live",
    featured: true,
  },
  {
    name: "Bus Ticketing App",
    purpose:
      "A booking interface concept for searching bus routes and supporting a travel-first reservation flow.",
    problem:
      "Travelers need a clearer way to search routes, review booking details, and move through ticket selection.",
    role: "Frontend interface and booking flow implementation.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/bus.png",
    imageAlt: "Bus Ticketing App interface showing route search fields and a bus hero graphic.",
    githubUrl: "https://github.com/1shree1/Bus-Ticketing",
    status: "In Development",
  },
  {
    name: "ShopCircuit",
    purpose:
      "An e-commerce interface concept for browsing sellers and managing product-oriented screens.",
    problem:
      "Small commerce experiences need simple navigation, visible product information, and clear admin workflows.",
    role: "Frontend interface design and React implementation.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/shop.png",
    imageAlt: "ShopCircuit dashboard interface showing seller navigation and product cards.",
    githubUrl: "https://github.com/1shree1/shopcircuit",
    status: "Concept Project",
  },
];

export const principles: Principle[] = [
  {
    title: "Clear Communication",
    description:
      "Pages should explain the offer, audience, and next action without making visitors work for the answer.",
    icon: MessageSquare,
  },
  {
    title: "Mobile-First Execution",
    description:
      "Layouts are planned for small screens first, then expanded carefully for tablets and desktops.",
    icon: Smartphone,
  },
  {
    title: "Performance-Conscious Development",
    description:
      "Images, motion, and code are kept intentional so the experience feels fast and stable.",
    icon: Gauge,
  },
  {
    title: "Maintainable Code",
    description:
      "Reusable components and structured data keep the site easier to update as the portfolio grows.",
    icon: Code2,
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define the audience, business goal, required features, and success criteria.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Plan pages, content hierarchy, and user flow before adding visual decoration.",
  },
  {
    number: "03",
    title: "Design and Build",
    description:
      "Create a responsive interface and build it using clean, reusable components.",
  },
  {
    number: "04",
    title: "Test and Launch",
    description:
      "Test responsiveness, accessibility, performance, links, and deployment before launch.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Development",
    skills: ["Git", "GitHub", "Responsive Design", "Component Architecture", "API Integration"],
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
];

export const credibilitySignals = [
  { label: "Location", value: "Nepal" },
  { label: "Focus", value: "Modern responsive websites" },
  { label: "Stack", value: "React, Next.js, TypeScript, Tailwind CSS" },
  { label: "Availability", value: "Freelance, remote, internship, and collaboration opportunities" },
];

export const servicePathwayIcons = [SearchCheck, Layers, Route, BadgeCheck];
