import { publicImage } from "../lib/assets";
import images from "./images.json";

export const EMAIL = "awzorek23@gmail.com";

export const PROFILE_IMAGE = publicImage(images.me);
export const KARATE_IMAGE = publicImage(images.karate);
export const CAMP_IMAGE = publicImage(images.camp);
export const WORKSPACE_IMAGE = publicImage(images.workspace);

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
    id: "counter",
    num: "01",
    title: "Counter",
    tone: "violet",
    stack: ["React", "TypeScript", "Vite", "Zustand", "ExcelJS"],
    demo: "https://counter-psi-blush.vercel.app/",
    code: "https://github.com/Aszlaczek/Counter",
    featured: true,
  },
  {
    id: "workout",
    num: "02",
    title: "Work Out",
    tone: "lime",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    demo: "https://work-out-theta.vercel.app",
    code: "https://github.com/Aszlaczek/work-out",
    featured: true,
  },

  {
    id: "calculator",
    num: "03",
    title: "Calculator",
    tone: "cyan",
    stack: ["React", "TypeScript", "Vite", "Canvas"],
    demo: "https://calculator-five-vert-80.vercel.app/",
    code: "https://github.com/Aszlaczek/calculator",
    featured: true,
  },
  {
    id: "teacher",
    num: "04",
    title: "Teacher AI",
    tone: "coral",
    stack: ["Next.js", "TypeScript", "Gemini API"],
    demo: "https://teacherai-mu.vercel.app",
    code: "https://github.com/Aszlaczek/Teacher_AI",
    featured: false,
  },
  {
    id: "colors",
    num: "05",
    title: "ColorChecker",
    tone: "violet",
    stack: ["React", "TypeScript", "Sass", "localStorage"],
    demo: "https://colorchecker-omega.vercel.app/",
    code: "https://github.com/Aszlaczek/ColorChecker",
    featured: false,
  },
  {
    id: "memory",
    num: "06",
    title: "Memory Game",
    tone: "lime",
    stack: ["React", "TypeScript", "MUI"],
    demo: "https://memory-game-tan-five.vercel.app",
    code: "https://github.com/Aszlaczek/memory-game",
    featured: false,
  },
  {
    id: "custom-components",
    num: "07",
    title: "Custom Components",
    tone: "cyan",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://icodethis.com/Aszlaczek",
    code: "https://icodethis.com/Aszlaczek",
    featured: false,
  },
] as const;

export type ProjectId = (typeof PROJECTS)[number]["id"];

export const STATS = [
  { value: "4+", key: "years" },
  { value: "MSc", key: "degree" },
  { value: "15+", key: "karate" },
  { value: "5+", key: "camps" },
] as const;

export const NAV_LINKS = ["about", "projects", "skills", "contact"] as const;
