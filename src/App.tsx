import { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import type { Translations } from "./Language";

function PhotoFrame({ t }: { t: Translations }) {
  return (
    <div className="relative" style={{ width: 320, height: 520 }}>
      {/* photo frame */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "3px solid var(--primary)",
          borderRadius: 6,
          backgroundColor: "var(--card)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            opacity: 0.4,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: 10 }}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          Photo
        </div>
      </div>

      {/* top-left tag */}
      <div
        className="px-4 py-2"
        style={{
          position: "absolute",
          top: -14,
          left: -20,
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          transform: "rotate(-5deg)",
          whiteSpace: "nowrap",
        }}
      >
        🥋 {t.hero.karate.replace("\n", " ")}
      </div>

      {/* right circular text */}
      <div
        className="spin-slow"
        style={{
          position: "absolute",
          top: "50%",
          right: -44,
          transform: "translateY(-50%)",
          width: 88,
          height: 88,
        }}
      >
        <svg viewBox="0 0 100 100" width="88" height="88">
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fill: "var(--muted-foreground)",
            }}
          >
            <textPath href="#circlePath">
              WEB DEV · SENSEI ·{" "}
            </textPath>
          </text>
        </svg>
      </div>

      {/* bottom-right tag */}
      <div
        className="px-3 py-1.5"
        style={{
          position: "absolute",
          bottom: -10,
          right: -10,
          backgroundColor: "var(--background)",
          color: "var(--primary)",
          border: "1px solid var(--primary)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}
      >
        ⚡ MSc Eng.
      </div>
    </div>
  );
}

const TICKER_ITEMS = [
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
];

const PROJECTS = [
  {
    num: "01",
    title: "Time Tracker",
    year: "2025",
    accent: "#d4ff1e",
  },
  {
    num: "02",
    title: "AI Dictionary",
    year: "2025",
    accent: "#60a5fa",
  },
  {
    num: "03",
    title: "Color Picker",
    year: "2025",
    accent: "#f87171",
  },
  {
    num: "04",
    title: "Memory Game",
    year: "2025",
    accent: "#a78bfa",
  },
];

const HOBBIES = [
  {
    emoji: "🥋",
    label: { en: "Karate — Instructor", pl: "Karate — Instruktor" },
    note: {
      en: "5+ years, active instructor",
      pl: "5+ lat, aktywny instruktor",
    },
  },
  {
    emoji: "⛺",
    label: { en: "Summer camps", pl: "Obozy letnie" },
    note: {
      en: "Camp counselor",
      pl: "Wychowawca",
    },
  },
  {
    emoji: "🎸",
    label: { en: "Guitar & Ukulele", pl: "Gitara i ukulele" },
    note: { en: "Amateur bedroom shredder", pl: "Amatorsko, w pokoju" },
  },
  {
    emoji: "📚",
    label: { en: "Tech reading", pl: "Czytanie techniczne" },
    note: { en: "Always learning", pl: "Zawsze się uczę" },
  },
];

const STATS = [
  { value: "4+", key: "years" },
  { value: "MSc", key: "degree" },
  { value: "15+", key: "karate" },
  { value: "5+", key: "camps" },
];

const NAV_LINKS = ["about", "projects", "skills", "contact"] as const;

export default function App() {
  const { lang, t, toggle } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "all">("projects");

  function copyEmail() {
    navigator.clipboard.writeText("awzorek23@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const visibleProjects =
    activeTab === "projects" ? PROJECTS.slice(0, 3) : PROJECTS;

  const navLabels = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          backgroundColor: "rgba(9,9,9,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--foreground)",
            }}
          >
            Adrian<span style={{ color: "var(--primary)" }}>.</span>dev
          </span>
          <span
            className="hidden sm:inline text-xs px-2 py-0.5"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--border)",
              color: "var(--muted-foreground)",
              fontSize: 10,
            }}
          >
            MSc Eng.
          </span>
        </div>
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="nav-link text-sm uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}
              >
                {navLabels[l]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs px-3 py-2 uppercase tracking-widest font-medium transition-opacity duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--muted-foreground)",
              fontFamily: "var(--font-mono)",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {lang === "en" ? "PL" : "EN"}
          </button>
          <a
            href="#contact"
            className="text-xs px-4 py-2 uppercase tracking-widest font-medium transition-opacity duration-200"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-mono)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {t.nav.hireMe}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen pt-24 px-6 md:px-12 pb-0 grid md:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center relative overflow-hidden">
        <div className="z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--primary)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {t.hero.openToWork}
            </span>
            <span
              className="px-2 py-0.5 text-xs"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid rgba(212,255,30,0.3)",
                color: "var(--primary)",
                fontSize: 11,
              }}
            >
              {t.hero.degree}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem,8vw,7.5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
            }}
          >
            {t.hero.title1}
            <br />
            <em className="not-italic" style={{ color: "var(--primary)" }}>
              {t.hero.title2}
            </em>
            <br />
            <span
              style={{
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "0.82em",
              }}
            >
              {t.hero.title3}
            </span>
          </h1>

          <p
            className="mt-8 mb-10 max-w-xl"
            style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
              fontWeight: 300,
            }}
          >
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 text-sm uppercase tracking-widest font-medium transition-opacity duration-200"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {t.hero.seeWork}
            </a>
            <a
              href={`files/Adrian_Wzorek_CV_${lang}.pdf`}
              className="px-6 py-3 text-sm uppercase tracking-widest transition-all duration-200"
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted-foreground)";
              }}
            >
              {t.hero.downloadCv}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {HOBBIES.map((h) => (
              <span
                key={h.label.en}
                className="hobby-tag flex items-center gap-1.5 px-3 py-1.5 text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  backgroundColor: "var(--card)",
                }}
              >
                <span>{h.emoji}</span> {h.label[lang]}
              </span>
            ))}
          </div>

          {/* mobile photo — below text on small screens */}
          <div className="flex lg:hidden justify-center mt-12">
            <PhotoFrame t={t} />
          </div>
        </div>

        {/* desktop photo — right side on lg+ */}
        <div className="hidden lg:flex relative items-center justify-center -ml-8">
          <PhotoFrame t={t} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem,14vw,13rem)",
              fontWeight: 900,
              color: "rgba(255,255,255,0.022)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
            }}
          >
            {t.hero.ghostText}
          </p>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="overflow-hidden py-4 mt-12"
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          backgroundColor: "var(--primary)",
        }}
      >
        <div className="marquee-track">
          {ticker.map((item, i) => (
            <span
              key={i}
              className="mx-6 text-sm uppercase font-semibold tracking-widest whitespace-nowrap"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--primary-foreground)",
              }}
            >
              {item} <span className="mx-3 opacity-40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section
        className="px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.key}
            className="py-8 px-4 text-center"
            style={{
              borderRight:
                i < STATS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem,4.5vw,3.8rem)",
                fontWeight: 900,
                color: "var(--primary)",
                lineHeight: 1,
              }}
            >
              {s.value}
            </p>
            <p
              className="mt-2 text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--muted-foreground)",
              }}
            >
              {t.stats[s.key as keyof typeof t.stats]}
            </p>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="px-6 md:px-12 py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-baseline gap-4 mb-12">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            00 —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 700,
            }}
          >
            {t.about.section}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* bio */}
          <div className="bento-card md:col-span-2 p-8 rounded-sm">
            <p
              className="text-base leading-loose mb-4"
              style={{
                color: "var(--muted-foreground)",
                fontWeight: 300,
                fontSize: 17,
              }}
            >
              {t.about.bio1}
            </p>
            <p
              className="text-base leading-loose"
              style={{
                color: "var(--muted-foreground)",
                fontWeight: 300,
                fontSize: 17,
              }}
            >
              {t.about.bio2}
            </p>
          </div>

          {/* education card */}
          <div className="bento-card p-8 rounded-sm flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-2 -top-2 text-[5.5rem] leading-none select-none pointer-events-none opacity-10">
              🎓
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted-foreground)",
                }}
              >
                {t.about.education}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                MSc Eng.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--muted-foreground)",
                  marginTop: 4,
                }}
              >
                {t.about.cs}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: "var(--primary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  →
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                >
                  {t.about.faculty}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: "var(--primary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  →
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                >
                  {t.about.track}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    color: "var(--primary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                  }}
                >
                  →
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
                >
                  {t.about.thesis}
                </span>
              </div>
            </div>
          </div>

          {/* open to work */}
          <div
            className="bento-card p-8 rounded-sm flex flex-col gap-3"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--primary-foreground)" }}
            />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--primary-foreground)",
              }}
            >
              {t.about.openToWork}
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(9,9,9,0.6)", whiteSpace: "pre-line" }}
            >
              {t.about.roles}
            </p>
          </div>

          {/* hobbies card */}
          <div className="bento-card p-8 rounded-sm flex flex-col gap-4">
            <p
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--muted-foreground)",
              }}
            >
              {t.about.notCoding}
            </p>
            {HOBBIES.slice(0, 4).map((h) => (
              <div key={h.label.en} className="flex items-start gap-3">
                <span style={{ fontSize: 16 }}>{h.emoji}</span>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ lineHeight: 1.3 }}
                  >
                    {h.label[lang]}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                      fontWeight: 300,
                    }}
                  >
                    {h.note[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* location */}
          <div className="bento-card p-8 rounded-sm flex flex-col justify-between">
            <p
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--muted-foreground)",
              }}
            >
              {t.about.basedIn}
            </p>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: 700,
                }}
              >
                Poland 🇵🇱
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--muted-foreground)",
                  marginTop: 4,
                }}
              >
                {t.about.relocation}
              </p>
            </div>
            <p
              className="text-sm"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.about.languages}
            </p>
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <section
        className="px-6 md:px-12 py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-baseline gap-4 mb-12">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            00.5 —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 700,
            }}
          >
            {t.about.experience}
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="bento-card p-8 rounded-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                }}
              >
                {t.about.exp1Title}
              </p>
              <span
                className="text-xs px-3 py-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                {t.about.exp1Date}
              </span>
            </div>
            <p
              className="text-sm mb-4"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {t.about.exp1Company}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.about.exp1Desc}
            </p>
          </div>

          <div className="bento-card p-8 rounded-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                }}
              >
                {t.about.exp2Title}
              </p>
              <span
                className="text-xs px-3 py-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                {t.about.exp2Date}
              </span>
            </div>
            <p
              className="text-sm mb-4"
              style={{
                color: "var(--primary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {t.about.exp2Company}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.about.exp2Desc}
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="px-6 md:px-12 py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-12">
          <div className="flex items-baseline gap-4">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              01 —
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,4vw,3.5rem)",
                fontWeight: 700,
              }}
            >
              {t.projects.section}
            </h2>
          </div>
          <div className="flex gap-2">
            {(["projects", "all"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="text-xs px-4 py-2 uppercase tracking-widest transition-all duration-150"
                style={{
                  fontFamily: "var(--font-mono)",
                  backgroundColor:
                    activeTab === tab ? "var(--primary)" : "var(--card)",
                  color:
                    activeTab === tab
                      ? "var(--primary-foreground)"
                      : "var(--muted-foreground)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                {tab === "projects" ? t.projects.featured : t.projects.all}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProjects.map((p, i) => (
            <div
              key={p.num}
              className="project-card bento-card p-8 rounded-sm flex flex-col gap-4 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--muted-foreground)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.projects.items[i].tag}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: p.accent,
                    marginBottom: 4,
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <p
                className="flex-1 text-sm leading-relaxed"
                style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
              >
                {t.projects.items[i].desc}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={t.projects.items[i].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Demo →
                </a>
                <a
                  href={t.projects.items[i].code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    border: "1px solid var(--border)",
                    color: "var(--muted-foreground)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--muted-foreground)";
                  }}
                >
                  Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="px-6 md:px-12 py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-baseline gap-4 mb-12">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            02 —
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 700,
            }}
          >
            {t.skills.section}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {t.skills.groups.map((group, gi) => (
            <div key={group}>
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--primary)",
                }}
              >
                {group}
              </p>
              <div className="flex flex-col gap-2">
                {t.skills.groupItems[gi].map((item) => (
                  <span
                    key={item}
                    className="skill-pill px-4 py-2.5 text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--border)",
                      color: "var(--muted-foreground)",
                      backgroundColor: "var(--card)",
                      display: "block",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* other tools */}
        <div className="mt-8 flex flex-wrap gap-3">
          <p
            className="text-xs uppercase tracking-widest self-center mr-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--primary)" }}
          >
            {t.skills.other}:
          </p>
          {t.skills.otherItems.map((item) => (
            <span
              key={item}
              className="skill-pill px-4 py-2 text-sm"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                backgroundColor: "var(--card)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* soft skills note */}
        <div className="mt-12 p-6 bento-card rounded-sm grid md:grid-cols-3 gap-6">
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--primary)",
              }}
            >
              {t.skills.communication}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.skills.communicationDesc}
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--primary)",
              }}
            >
              {t.skills.leadership}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.skills.leadershipDesc}
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--primary)",
              }}
            >
              {t.skills.discipline}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontWeight: 300 }}
            >
              {t.skills.disciplineDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="px-6 md:px-12 py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(5rem,17vw,15rem)",
              fontWeight: 900,
              color: "rgba(212,255,30,0.04)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            {t.contact.ghostText}
          </p>
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-baseline gap-4 mb-8">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              03 —
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem,4vw,3.5rem)",
                fontWeight: 700,
              }}
            >
              {t.contact.section}
            </h2>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,6vw,5.5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {t.contact.title1}
            <br />
            <em className="not-italic" style={{ color: "var(--primary)" }}>
              {t.contact.title2}
            </em>
          </h3>
          <p
            className="mt-8 mb-10 max-w-md"
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
              fontWeight: 300,
            }}
          >
            {t.contact.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={copyEmail}
              className="px-8 py-4 text-sm uppercase tracking-widest font-medium transition-opacity duration-200"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {copiedEmail ? t.contact.copied : "awzorek23@gmail.com"}
            </button>
            <a
              href="https://github.com/Aszlaczek"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm uppercase tracking-widest transition-all duration-200 text-center"
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted-foreground)";
              }}
            >
              {t.contact.github}
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-wzorek-902572309/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm uppercase tracking-widest transition-all duration-200 text-center"
              style={{
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted-foreground)";
              }}
            >
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted-foreground)",
          }}
        >
          {t.footer.copyright}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--muted-foreground)",
          }}
        >
          {t.footer.tagline}
          <span style={{ color: "var(--primary)" }}>
            {t.footer.alwaysShipping}
          </span>
        </p>
      </footer>
    </div>
  );
}
