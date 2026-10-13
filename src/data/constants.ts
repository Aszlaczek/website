import images from "./images.json";

export const EMAIL = "awzorek23@gmail.com";

export const PROFILE_IMAGE = images.me;
export const KARATE_IMAGE = images.karate;
export const CAMP_IMAGE = images.camp;
export const WORKSPACE_IMAGE = images.workspace;

export const TICKER_ITEMS = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Django",
  "JavaScript",
  "Git/GitHub",
  "MSc Eng.",
  "Karate Instructor",
  "MySQL",
  "PHP",
  "SQLite",
  "Open to relocation",
] as const;

export const PROJECTS = [
  {
    num: "01",
    title: "Work Out",
    year: "2025",
    tone: "lime",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    num: "02",
    title: "Time Tracker",
    year: "2025",
    tone: "violet",
    stack: ["React", "TypeScript"],
  },
  {
    num: "03",
    title: "AI Dictionary",
    year: "2025",
    tone: "cyan",
    stack: ["React", "TypeScript", "Node.js"],
  },
  {
    num: "04",
    title: "Color Picker",
    year: "2025",
    tone: "coral",
    stack: ["React", "TypeScript"],
  },
  {
    num: "05",
    title: "Memory Game",
    year: "2025",
    tone: "lime",
    stack: ["JavaScript", "localStorage"],
  },
] as const;

export const STATS = [
  { value: "4+", key: "years" },
  { value: "MSc", key: "degree" },
  { value: "15+", key: "karate" },
  { value: "5+", key: "camps" },
] as const;

export const NAV_LINKS = ["about", "projects", "skills", "contact"] as const;
