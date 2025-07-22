import {
  faBootstrap,
  faGitAlt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  GraphQLIcon,
  IllustratorIcon,
  MUIICON,
  NextJsIcon,
  PhotoshopIcon,
  SCSSIcon,
  TailwindCSSIcon,
  TypescriptIcon,
} from "../../public/icons";
import {
  CypressIcon,
  JestIcon,
  ReactTestingLibraryIcon,
} from "../../public/icons/customIcons";

export const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

export const heroTyperwriterText = [
  "Frontend Developer crafting beautiful, performant web experiences",
  "React & Next.js Expert building scalable applications",
  "TypeScript Enthusiast creating type-safe solutions",
  "UI/UX Focused delivering exceptional user experiences",
];

export const keyAchievements = [
  "Proposal Builder Tool – Advanced document builder developed using React and TipTap, supporting rich-text editing, dynamic previews, and PDF export. Allowed users to create, draft, send, sign, and customize proposals with branded content blocks. Reduced proposal creation time by 35% - 50% and improved client onboarding efficiency.",
  "Adaptive Table Component – High-performance React data table with expand/collapse, virtual scrolling (10k+ entries), and custom filtering. Reduced perceived load time by 20%.",
  "PDF Overlay Renderer – Built HTML-based overlay for PDF interaction including highlighting, selection, and contextual menus. Used in compliance platform for 500+ users.",
];

export const techStack = [
  {
    id: "react",
    title: "React",
    icon: faReact,
    color: "text-blue-400",
    custom: false,
    customIcon: undefined,
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: undefined,
    color: "text-green-400",
    custom: true,
    customIcon: NextJsIcon,
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: undefined,
    color: "text-yellow-400",
    custom: true,
    customIcon: TypescriptIcon,
  },
  {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: undefined,
    color: "text-green-500",
    custom: true,
    customIcon: TailwindCSSIcon,
  },
  {
    id: "scss",
    title: "SCSS",
    icon: undefined,
    color: "text-green-600",
    custom: true,
    customIcon: SCSSIcon,
  },
  {
    id: "js",
    title: "Javascript",
    icon: faJsSquare,
    color: "text-yellow-400",
    custom: false,
    customIcon: undefined,
  },
  {
    id: "git",
    title: "Git",
    icon: faGitAlt,
    color: "text-orange-500",
    custom: false,
    customIcon: undefined,
  },
  {
    id: "mui",
    title: "Material UI",
    icon: undefined,
    color: "text-blue-500",
    custom: true,
    customIcon: MUIICON,
  },
  {
    id: "graphql",
    title: "Graph QL",
    icon: undefined,
    color: "text-pink-500",
    custom: true,
    customIcon: GraphQLIcon,
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
    icon: faBootstrap,
    color: "text-purple-500",
    custom: false,
    customIcon: undefined,
  },
  {
    id: "reacttestinglibrary",
    title: "React Testing Library",
    icon: undefined,
    color: "text-red-400",
    custom: true,
    customIcon: ReactTestingLibraryIcon,
  },
  {
    id: "jest",
    title: "Jest",
    icon: undefined,
    color: "text-pink-300",
    custom: true,
    customIcon: JestIcon,
  },
  {
    id: "cypress",
    title: "Cypress",
    icon: undefined,
    color: "text-white",
    custom: true,
    customIcon: CypressIcon,
  },
  {
    id: "ps",
    title: "Photoshop",
    icon: undefined,
    color: "text-purple-500",
    custom: true,
    customIcon: PhotoshopIcon,
  },
  {
    id: "ai",
    title: "Illustrator",
    icon: undefined,
    color: "text-yellow-500",
    custom: true,
    customIcon: IllustratorIcon,
  },
];

export const projectsData = [
  {
    id: "xora",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1750370305/Untitled_design_jfyr44.png",
    title: "Xora Business Management Platform",
    description:
      "Led frontend development for Xora, a business management solution serving teams of all sizes. Built and maintained the entire frontend architecture solo, collaborating closely with backend and mobile teams. Key features included a high-performance Kanban board with recurrence support for 1,000+ tasks and filterable views, and a dynamic proposal editor with live preview—reducing documentation time by 35–50%. Commended by founders and referred for future projects.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Javascript",
      "Tailwind CSS",
      "Bootstrap",
      "GitLab",
      "Tip Tap",
      "CSS3",
      "HTML2PDF",
      "FCM",
    ],
    url: "https://getxora.com/",
    code: null,
  },
  {
    id: "hairhouse",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1748615713/hh_vlncmd.png",
    title: "Hairhouse E-Commerce Platform",
    description:
      "Developed responsive, accessible UI components and sections for Hairhouse, one of Australia's leading haircare e-commerce platforms. Contributed to a scalable component library using Storybook, built with React and GraphQL. Collaborated with a globally distributed development team in a fast-paced agile environment.",
    skills: [
      "React",
      "GraphQL",
      "Javascript",
      "Shopify",
      "Storybook",
      "GitHub",
    ],
    url: "https://www.hairhouse.com.au/",
    code: null,
  },
  {
    id: "feportfolio",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1750364897/image_t9gr3v.png",
    title: "Frontend Portfolio Website",
    description:
      "A sleek, single-page portfolio designed to highlight my expertise as a frontend developer. Built with Next.js, TypeScript, and Tailwind CSS, the site features smooth animations, responsive design, and clean architecture following industry-standard folder structures and best practices. Crafted to deliver a polished, performant, and accessible user experience that reflects modern frontend development skills.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "CSS3",
      "Email.js",
      "GSAP",
      "GitHub",
      "Vercel",
      "Photoshop",
    ],
    url: "https://jaydeepmithani.vercel.app",
    code: "https://github.com/jaydeep-mithani/portfolio-fe",
  },
  {
    id: "careerprofile",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1748615719/portfolio_izvedv.png",
    title: "Comprehensive Career Portfolio",
    description:
      "A multi-disciplinary portfolio showcasing my journey as a Full Stack Web Developer, Graphic Designer, Comic Book Artist, and Writer. Designed to unify diverse skills and project types into a cohesive, navigable experience. Built with Next.js, TypeScript, and Tailwind CSS, the site presents a dynamic range of work—from web applications to visual storytelling—reflecting both technical proficiency and creative vision.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Email.js",
      "GitHub",
      "Vercel",
      "Illustrator",
    ],
    url: "https://jaydeepmithaniprofile.vercel.app",
    code: "https://github.com/jaydeep-mithani/my-profile",
  },
  {
    id: "comiccorner",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1748615710/cc_tomq36.png",
    title: "Comic Corner – Comic Book Discovery App",
    description:
      "A full-stack web app for comic book enthusiasts to search and explore detailed comic metadata via the Comic Vine API. Users can sign up, search titles, and view comprehensive information in a clean, responsive interface. Designed and built end-to-end—frontend, backend, and database—as a college project. Frontend features smooth interactions using Framer Motion and Tailwind CSS; backend built with Node.js, Express, and MongoDB.",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
      "Tailwind CSS",
      "React-Bootstrap",
      "ComicVine Api",
      "Netlify",
      "GitHub",
    ],
    url: "https://comic-corner.netlify.app",
    code: "https://github.com/jaydeep-mithani/comic-corner",
  },
  {
    id: "nftmarketplace",
    thumbnail:
      "https://res.cloudinary.com/dc6bzvxz8/image/upload/v1748615718/nft_qqci9i.png",
    title: "NFT Marketplace – HTML/CSS Web Template",
    description:
      "A fully responsive, multi-page NFT marketplace template built from scratch using HTML5 and CSS3 with a hint of Javascript—no frameworks or UI libraries involved. Designed as a visual prototype with seven unique pages, interactive navigation, and a clean, modern aesthetic. While non-functional in terms of backend logic, the project demonstrates strong layout skills, mobile responsiveness, and attention to visual consistency.",
    skills: ["HTML", "CSS", "Javascript", "GitHub", "GitHub Pages"],
    url: "https://jaydeep-mithani.github.io/NFT-Marketplace-Template/index.htm",
    code: "https://github.com/jaydeep-mithani/NFT-Marketplace-Template",
  },
];

export const experienceInfo = [
  {
    id: "xora",
    role: "Frontend Developer",
    company: "Xora",
    location: "USA (Remote)",
    points: [
      "Led the entire frontend architecture for a business management platform used by SMBs and enterprises.",
      "Built a proposal editor with live preview and dynamic rich-text editing, reducing documentation time by 35 to 50%.",
      "Developed a Kanban task board with recurrence options supporting 1,000+ records with filterable views.",
      "Integrated real-time notifications with Firebase Cloud Messaging, cutting user response time by 25%.",
    ],
    blockquote: `"Jaydeep had complete ownership of the frontend — highly recommend him for product-driven frontend roles." — Founder, Xora`,
    start: "Mar 2025",
    end: "June 2025",
  },
  {
    id: "hdm",
    role: "Senior Software Engineer - Full-Stack",
    company: "Health Data Max",
    location: "USA (Remote)",
    points: [
      "Developed both frontend interfaces and backend REST APIs for a compliance platform used by healthcare providers.",
      "Created an interactive PDF rendering module using React with HTML overlays, reducing load time by 30%.",
      "Engineered a reusable data table with filtering, windowing and lazy loading, improving data interpretation across 5 key features. ",
      "Led a team of 3 junior developers, conducted code reviews, and maintained delivery through Agile cycles in Jira.",
      "Contributed to system architecture discussions and coordinated directly with QA and backend teams.",
    ],
    blockquote: null,
    start: "Feb 2024",
    end: "Jan 2025",
  },
  {
    id: "bonzark",
    role: "Junior Full-Stack Developer",
    company: "Bonzark Technologies",
    location: " Rajkot, India",
    points: [
      "Built full-stack features for enterprise apps serving 1M+ monthly users. Delivered 20+ frontend modules and achieved 95% client satisfaction score.",
      "Developed and optimized MongoDB queries and Express.js middleware for high-performance APIs.",
      "Delivered 20+ frontend modules for Hairhouse Australia using React, GraphQL, and Hygraph CMS.",
      "Collaborated closely with international clients to gather requirements, resolve bugs, and ensure timely delivery.",
      "Achieved 95% client satisfaction score and contributed to successful project handovers.",
    ],
    blockquote: null,
    start: "Jul 2022",
    end: "Feb 2024",
  },
];

export const LanguagesData = [
  {
    id: "en",
    icon: "US",
    name: "English",
    skillLevel: "Native Level",
    proficiency: 9.5,
    description:
      "Professional proficiency with technical documentation and client communication",
  },
  {
    id: "fr",
    icon: "FR",
    name: "French",
    skillLevel: "Intermediate",
    proficiency: 6.2,
    description:
      "Conversational skills with continuous improvement in business contexts",
  },
  {
    id: "jp",
    icon: "JP",
    name: "Japanese",
    skillLevel: "Elementary",
    proficiency: 4,
    description: "Basic communication skills with cultural understanding",
  },
  {
    id: "hi",
    icon: "IN",
    name: "Hindi",
    skillLevel: "Native Level",
    proficiency: 9.5,
    description:
      "Fluent in business and technical discussions across diverse Indian markets",
  },
  {
    id: "gj",
    icon: "🏛️",
    name: "Gujarati",
    skillLevel: "Mother Tongue",
    proficiency: 9.7,
    description:
      "Native speaker with deep cultural understanding and regional business acumen",
  },
];

export const basicDetails = {
  about:
    "Frontend-focused Full-Stack Developer with nearly 3 years of experience delivering scalable, performant web applications",
  professionalJourney:
    "I specialize in creating exceptional user experiences using modern frontend technologies. From leading entire frontend architectures to building complex interactive components, I've successfully delivered solutions for SMBs, enterprises, and healthcare providers.",
  email: "jaydeepmithani13@gmail.com",
  phone: "+91 90547 22745",
  location: "Pune, India",
};
