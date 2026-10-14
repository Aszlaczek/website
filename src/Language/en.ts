import type { ProjectCopy } from "../data/types";
import type { ProjectId } from "../data/constants";
import { KARATE_IMAGE, CAMP_IMAGE, WORKSPACE_IMAGE } from "@/data";

const projectItems: Record<ProjectId, ProjectCopy> = {
  workout: {
    tag: "Full-stack",
    desc: "Workout planning and progress tracking in one application.",
    problem:
      "Scattered notes make it difficult to track workouts and compare results.",
    decisions: [
      "Relational PostgreSQL model; Supabase Auth and RLS control data access.",
      "Shared workout plans are separated from private history; Recharts displays progress.",
    ],
    outcome: "Plans, set logging and progress history in one place.",
  },
  counter: {
    tag: "Office utility",
    desc: "Employee time conversion, entry management and XLSX export.",
    problem:
      "Manually converting minutes into hours and preparing time reports.",
    decisions: [
      "Minutes are stored as numbers; hours are calculated for display.",
      "Zustand manages entries; ExcelJS exports separate hours, minutes and total columns.",
    ],
    outcome:
      "Create, edit and delete entries, then export an Excel-ready report.",
    note: "Deployed in a county office and used by two staff members.",
  },
  calculator: {
    tag: "Parser & visualization",
    desc: "A scientific calculator with a custom expression parser and function plots.",
    problem: "Calculating and visualizing the same mathematical expression.",
    decisions: [
      "A tokenizer and recursive-descent parser build an AST, evaluated without eval.",
      "Canvas renders function graphs with zoom and pan controls.",
    ],
    outcome:
      "One expression engine for calculations and plots, with keyboard support.",
  },
  teacher: {
    tag: "Language tool",
    desc: "Translation, sentence correction and usage examples across four languages.",
    problem:
      "Language learning needs explanations of mistakes as well as translations.",
    decisions: [
      "A Next.js endpoint calls Gemini on the server.",
      "Input validation and fallback requests to alternative models handle API failures.",
    ],
    outcome: "Translation and correction with examples in one form.",
  },
  colors: {
    tag: "Frontend utility",
    desc: "Save, compare and filter a personal color palette.",
    problem:
      "Collecting colors quickly without an account or a separate desktop tool.",
    decisions: [
      "localStorage keeps the palette between visits.",
      "HEX/RGB values are converted to HSL; filters operate on color channels.",
    ],
    outcome: "List and grid views with one-click color code copying.",
  },
  memory: {
    tag: "Browser game",
    desc: "A matching-pairs game on a 4 × 4 board.",
    problem: "A memory exercise with clear move counts and score feedback.",
    decisions: [
      "A custom hook separates game logic from React components.",
      "Fisher–Yates shuffling and a limit of two revealed cards control each turn.",
    ],
    outcome: "Eight pairs, a move counter and a new-game flow.",
  },
  "custom-components": {
    tag: "UI library",
    desc: "Reusable components for building web applications.",
    problem: "Inconsistent design and behavior across different projects.",
    decisions: [
      "A component library standardizes UI elements and interactions.",
      "Storybook showcases components in isolation for easier development.",
    ],
    outcome: "Consistent, reusable components that speed up development.",
  },
};

export const en = {
  nav: {
    about: "about",
    projects: "projects",
    skills: "skills",
    contact: "contact",
    hireMe: "Hire me",
    menu: "Menu",
    primary: "Primary navigation",
    home: "Homepage",
    switchLanguage: "Przełącz na polski",
    skip: "Skip to content",
    closeMenu: "Close menu",
  },
  hero: {
    openToWork: "Open to work · Junior Full Stack Developer",
    degree: "MSc Eng. in Computer Science · Poland",
    title1: "I build things",
    title2: "for the web.",
    title3: "Also: karate instructor.",
    desc: "I hold an MSc Eng. in Computer Science and build applications with React, TypeScript and Next.js as I develop my full-stack skills. My experience includes IT support and delivering tools that improve everyday work.",
    seeWork: "See my work ↓",
    downloadCv: "Download CV",
    karate: "Karate\nInstructor",
    campLead: "Camp\nCounselor",
    travelGuide: "5+ years\nTeaching",
    ghostText: "DEV + SENSEI",
    chapterLabel: "A story about curiosity,\ndiscipline & people",
    scrollCue: "Scroll to discover",
    valuesLabel: "My approach",
    values: ["01 / Solve", "02 / Persist", "03 / Connect"],
  },
  stats: {
    label: "Quick facts",
    years: "Years learning to code",
    degree: "MSc Eng. IT",
    karate: "Karate years",
    camps: "Years instructing",
  },
  about: {
    section: "Beyond the code",
    title1: "Not a straight line.",
    title2: "A story in motion.",
    openToWork: "Open to work",
    relocation: "Open to relocation",
    chapter: "Chapter",
    storyOpening: {
      index: "00 / PROLOGUE",
      p1: "I'm not only a developer, an instructor or a camp leader.",
      p2: "I'm the sum of every problem I stayed with, every person I helped grow and every plan I had to reinvent along the way.",
    },
    journey: [
      {
        number: "01",
        overline: "The spark",
        title: "It started with a problem.",
        lead: "Then another. And suddenly, I was building.",
        body: "Computer Science gave that curiosity a language. Code became my way of taking something tangled, finding the pattern inside it and turning it into a useful product. Every solved problem made me hungry for a harder one.",
        lesson: "Curiosity → craft",
        image: WORKSPACE_IMAGE,
        alt: "Laptop on a developer's desk",
        tone: "code",
      },
      {
        number: "02",
        overline: "The discipline",
        title: "Progress is repetition.",
        lead: "Fifteen years on the mat made that real.",
        body: "Karate taught me that confidence is built quietly: one technique, one mistake and one better attempt at a time. As an active instructor, I also learned to explain difficult things simply and notice when someone needs a push — or a little patience.",
        lesson: "Discipline → leadership",
        image: KARATE_IMAGE,
        alt: "Karate practitioner preparing to break a stack of boards",
        tone: "dojo",
      },
      {
        number: "03",
        overline: "The people",
        title: "Plans change. People count.",
        lead: "Camps turned responsibility into an adventure.",
        body: "Trips, summer camps and groups of young people rarely follow the perfect plan. They taught me to organize the chaos, communicate with energy and stay calm when reality ships an unexpected feature. The best outcome is always something we create together.",
        lesson: "Responsibility → trust",
        image: CAMP_IMAGE,
        alt: "Man with a backpack beside a lake",
        tone: "camp",
      },
    ],
    finale: {
      number: "04",
      overline: "The next chapter",
      title1: "Still learning.",
      title2: "Still moving.",
      title3: "Ready for more.",
      paragraph:
        "These paths didn't distract me from becoming a developer. They shaped the kind of developer I want to be: resourceful, dependable, open to feedback and genuinely good to work with.",
      cta: "See what that looks like in code",
    },
    profileCard: {
      kicker: "Three paths. One mindset.",
      paragraph:
        "Building products, teaching discipline and creating adventures people remember.",
    },
    experience: "Work experience",
    experienceTitle1: "From thesis",
    experienceTitle2: "to production.",
    exp1Title: "IT Specialist",
    exp1Company: "District Office in Lidzbark Warmiński",
    exp1Date: "Sep 2025 – Sep 2026",
    exp1Desc:
      "Managed OS and network infrastructure across multiple locations. Diagnosed and resolved technical issues (helpdesk). Designed and implemented a TypeScript application that automated leave time conversion from minutes to hours, with data recording and .xlsx export.",
    exp2Title: "Website Administrator",
    exp2Company: "homideko.pl",
    exp2Date: "Jun 2024 – Nov 2024",
    exp2Desc:
      "Updated and restructured the content and layout of a PrestaShop website.",
  },
  projects: {
    section: "Selected work",
    title1: "Projects with",
    title2: "purpose.",
    featured: "Featured only",
    all: "Show all projects",
    problem: "Problem",
    outcome: "Outcome",
    details: "Technical decisions",
    code: "Code",
    items: projectItems,
  },
  skills: {
    section: "Tech stack",
    title1: "Skills &",
    title2: "foundations.",
    introEyebrow: "How I choose tools",
    introText:
      "I care more about solving the right problem than chasing every new framework.",
    introStrong:
      "Strong fundamentals first. The right technology second. Learning never stops.",
    groups: ["Languages", "Frontend", "Backend", "Database"],
    groupItems: [
      ["JavaScript", "TypeScript", "Python", "PHP"],
      ["React", "Next.js", "HTML/CSS", "MUI", "Bootstrap"],
      ["Node.js", "Django", "FastAPI"],
      ["PostgreSQL", "MySQL", "SQLite"],
    ],
    other: "Other tools",
    otherItems: ["Git/GitHub", "CMS (WordPress, PrestaShop)"],
    communication: "Communication",
    communicationDesc:
      "Years of coaching children and working in teams taught me to explain complex ideas simply — during classes and collaborative problem solving.",
    leadership: "Independence",
    leadershipDesc:
      "Self-identified an inefficient manual process and independently proposed and built its automation — from needs analysis through design to deployment in a production environment.",
    discipline: "Discipline",
    disciplineDesc:
      "5+ years of karate instruction and camp counseling taught me to perform under pressure and stay consistent. That's the same mindset I bring to shipping software.",
  },
  workflow: {
    title: "AI-assisted development",
    desc: "I use Codex and Claude Code to support application development. I begin by defining the problem and planning the project structure, then review generated changes, validate application behavior and maintain documentation to preserve context across agent sessions.",
    steps: [
      "Problem and expected outcome",
      "File structure and responsibilities",
      "Quality requirements, including DRY",
      "Implementation with an agent",
      "Code and change review",
      "Build, tests and behavior checks",
    ],
    docs: "Context in PERSONAL.md after significant changes; completed and upcoming tasks in DONE.md and TODO.md.",
  },
  contact: {
    section: "Get in touch",
    ghostText: "LET'S BUILD",
    title1: "Looking for a",
    title2: "developer for your team?",
    desc: "I'm actively looking for a junior-level web developer position. Open to full-time, hybrid, or remote roles. Let's talk — I respond faster than my kata routines.",
    copyEmail: "Copy email address",
    sendEmail: "Send an email",
    copyError: "Could not copy. Select the address or choose Send an email.",
    copied: "✓ Copied!",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    copyright:
      "© 2026 Adrian Wzorek — MSc Eng. · Junior Full Stack Developer · Sensei",
    tagline: "Built from scratch · ",
    alwaysShipping: "Always shipping.",
  },
};
