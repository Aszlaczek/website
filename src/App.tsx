import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "./context/LanguageContext";

const EMAIL = "awzorek23@gmail.com";

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

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
];

const STATS = [
  { value: "4+", key: "years" },
  { value: "MSc", key: "degree" },
  { value: "15+", key: "karate" },
  { value: "5+", key: "camps" },
];

const NAV_LINKS = ["about", "projects", "skills", "contact"] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 6h14M3 10h14M3 14h14" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function SectionTitle({
  number,
  eyebrow,
  children,
}: {
  number: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{children}</h2>
    </div>
  );
}

export default function App() {
  const { lang, t, toggle } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [navOpen]);

  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  }

  const navLabels = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  const softSkills = [
    { label: t.skills.communication, text: t.skills.communicationDesc },
    { label: t.skills.leadership, text: t.skills.leadershipDesc },
    { label: t.skills.discipline, text: t.skills.disciplineDesc },
  ];

  const experiences = [
    {
      num: "01",
      title: t.about.exp1Title,
      company: t.about.exp1Company,
      date: t.about.exp1Date,
      desc: t.about.exp1Desc,
    },
    {
      num: "02",
      title: t.about.exp2Title,
      company: t.about.exp2Company,
      date: t.about.exp2Date,
      desc: t.about.exp2Desc,
    },
  ];

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Homepage">
          Adrian<span>.dev</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l}`}>
              {navLabels[l]}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="nav-ghost" onClick={toggle} type="button">
            {lang === "en" ? "PL" : "EN"}
          </button>
          <a className="nav-cta" href="#contact">
            {t.nav.hireMe} <ArrowIcon />
          </a>
          <button
            className="nav-hamburger"
            onClick={() => setNavOpen((open) => !open)}
            type="button"
            aria-label={navOpen ? t.nav.closeMenu : t.nav.menu}
            aria-expanded={navOpen}
            aria-controls="nav-sheet"
          >
            {navOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        id="nav-sheet"
        className={`nav-sheet${navOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menu}
        aria-hidden={!navOpen}
      >
        <div
          className="nav-sheet-backdrop"
          onClick={() => setNavOpen(false)}
        />
        <nav className="nav-sheet-panel" aria-label={t.nav.menu}>
          <div className="nav-sheet-head">
            <span>{t.nav.menu}</span>
            <button
              className="nav-sheet-close"
              onClick={() => setNavOpen(false)}
              type="button"
              aria-label={t.nav.closeMenu}
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="nav-sheet-links">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l}`} onClick={() => setNavOpen(false)}>
                  {navLabels[l]}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-sheet-foot">
            <button className="nav-ghost" onClick={toggle} type="button">
              {lang === "en" ? "PL" : "EN"}
            </button>
            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setNavOpen(false)}
            >
              {t.nav.hireMe} <ArrowIcon />
            </a>
          </div>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-prologue" aria-hidden="true">
          {t.hero.ghostText}
        </div>

        <div className="hero-copy">
          <div className="availability reveal">
            <span className="status-dot" />
            {t.hero.openToWork}
            <span className="availability-place">{t.hero.degree}</span>
          </div>

          <div className="hero-chapter-label">
            <span>00</span>
            <p>{t.hero.chapterLabel}</p>
          </div>

          <h1 className="hero-title">
            <span className="title-line title-line-one">{t.hero.title1}</span>
            <span className="title-line title-line-two">
              <em>{t.hero.title2}</em>
            </span>
            <span className="title-line title-line-three">{t.hero.title3}</span>
          </h1>

          <div className="hero-bottom reveal">
            <div>
              <p>{t.hero.desc}</p>
              <div className="hero-values" aria-label="Personal values">
                {t.hero.values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.hero.seeWork} <ArrowIcon />
              </a>
              <a
                className="button button-ghost"
                href={`files/Adrian_Wzorek_CV_${lang}.pdf`}
              >
                {t.hero.downloadCv} <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-aside">
          <figure className="hero-profile-card">
            <div className="hero-profile-image">
              <img
                src={PROFILE_IMAGE}
                alt="Laptop in a focused developer workspace"
              />
              <span>{t.about.openToWork}</span>
              <i>{t.about.relocation}</i>
            </div>
            <figcaption>
              <span className="profile-kicker">{t.about.profileCard.kicker}</span>
              <p>{t.about.profileCard.paragraph}</p>
              <div className="profile-stats">
                <div>
                  <strong>4+</strong>
                  <span>{t.stats.years}</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>{t.stats.karate}</span>
                </div>
                <div>
                  <strong>5+</strong>
                  <span>{t.stats.camps}</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="scroll-cue">
          <span>{t.hero.scrollCue}</span>
          <i />
        </div>
      </section>

      <div className="ticker" aria-label="Skills and highlights">
        <div className="ticker-track">
          {ticker.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="stats content-width" aria-label="Quick facts">
        {STATS.map((stat) => (
          <div className="stat reveal" key={stat.key}>
            <strong>{stat.value}</strong>
            <span>{t.stats[stat.key as keyof typeof t.stats]}</span>
          </div>
        ))}
      </section>

      <section className="section content-width" id="about">
        <SectionTitle number="01" eyebrow={t.about.section}>
          {t.about.title1}
          <br />
          <em>{t.about.title2}</em>
        </SectionTitle>

        <div className="story-opening reveal">
          <p className="story-opening-index">{t.about.storyOpening.index}</p>
          <div>
            <p>{t.about.storyOpening.p1}</p>
            <p>{t.about.storyOpening.p2}</p>
          </div>
        </div>

        <div className="story-flow">
          <div className="story-line" aria-hidden="true">
            <span />
          </div>
          {t.about.journey.map((chapter, index) => (
            <article
              className={`story-chapter story-${chapter.tone} reveal`}
              key={chapter.number}
            >
              <div className="story-visual">
                <img src={chapter.image} alt={chapter.alt} loading="lazy" />
                <div className="story-image-wash" />
                <span className="story-ghost-number">{chapter.number}</span>
                <span className="story-photo-label">
                  {t.about.chapter} {chapter.number} / {chapter.overline}
                </span>
              </div>
              <div className="story-copy">
                <div className="story-pin" aria-hidden="true">
                  <span>{chapter.number}</span>
                </div>
                <span className="story-overline">{chapter.overline}</span>
                <h3>{chapter.title}</h3>
                <strong>{chapter.lead}</strong>
                <p>{chapter.body}</p>
                <span className="story-lesson">{chapter.lesson}</span>
              </div>
              <span className="story-side-word" aria-hidden="true">
                {index === 0 ? "BUILD" : index === 1 ? "PERSIST" : "CONNECT"}
              </span>
            </article>
          ))}

          <article className="story-finale reveal">
            <span className="finale-number">{t.about.finale.number}</span>
            <div>
              <span className="story-overline">{t.about.finale.overline}</span>
              <h3>
                {t.about.finale.title1}
                <br />
                {t.about.finale.title2}
                <br />
                <em>{t.about.finale.title3}</em>
              </h3>
            </div>
            <div className="finale-copy">
              <p>{t.about.finale.paragraph}</p>
              <a href="#projects">
                {t.about.finale.cta} <ArrowIcon />
              </a>
            </div>
            <div className="finale-orbit" aria-hidden="true">
              <span>?</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section content-width" id="experience">
        <SectionTitle number="02" eyebrow={t.about.experience}>
          {t.about.experienceTitle1}
          <br />
          <em>{t.about.experienceTitle2}</em>
        </SectionTitle>

        <div className="bento experience-list">
          {experiences.map((exp) => (
            <div className="experience-row" key={exp.num}>
              <span>{exp.num}</span>
              <div>
                <h3>{exp.title}</h3>
                <span className="exp-company">{exp.company}</span>
                <p>{exp.desc}</p>
              </div>
              <strong>{exp.date}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="content-width">
          <div className="projects-top">
            <SectionTitle number="03" eyebrow={t.projects.section}>
              {t.projects.title1}
              <br />
              <em>{t.projects.title2}</em>
            </SectionTitle>
            <button
              className="filter-button"
              onClick={() => setShowAll((current) => !current)}
              type="button"
            >
              {showAll ? t.projects.featured : t.projects.all}
              <span>{showAll ? "−" : "+"}</span>
            </button>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <article
                className={`project-card project-${project.tone} reveal`}
                key={project.num}
              >
                <div className="project-meta">
                  <span>{t.projects.items[index].tag}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-number">{project.num}</div>
                <h3>{project.title}</h3>
                <p>{t.projects.items[index].desc}</p>
                <div className="project-footer">
                  <div>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={t.projects.items[index].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo →
                    </a>
                    <a
                      className="project-link"
                      href={t.projects.items[index].code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code →
                    </a>
                  </div>
                  <a
                    className="project-arrow"
                    href={t.projects.items[index].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Demo — ${project.title}`}
                  >
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-width" id="skills">
        <SectionTitle number="04" eyebrow={t.skills.section}>
          {t.skills.title1}
          <br />
          <em>{t.skills.title2}</em>
        </SectionTitle>

        <div className="skills-layout">
          <div className="skills-intro reveal">
            <span>{t.skills.introEyebrow}</span>
            <p>{t.skills.introText}</p>
            <strong>{t.skills.introStrong}</strong>
          </div>

          <div>
            <div className="skills-grid">
              {t.skills.groups.map((group, groupIndex) => (
                <article className="skill-group reveal" key={group}>
                  <div>
                    <span>0{groupIndex + 1}</span>
                    <h3>{group}</h3>
                  </div>
                  <ul>
                    {t.skills.groupItems[groupIndex].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="other-tools">
              <span className="other-tools-label">{t.skills.other}:</span>
              {t.skills.otherItems.map((item) => (
                <span className="tool-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="soft-skills">
              {softSkills.map((block) => (
                <div className="soft-block reveal" key={block.label}>
                  <span>{block.label}</span>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="content-width contact-inner">
          <span className="contact-kicker reveal">{t.contact.section}</span>
          <h2 className="reveal">
            {t.contact.title1}
            <br />
            <em>{t.contact.title2}</em>
          </h2>
          <p className="reveal">{t.contact.desc}</p>
          <div className="contact-actions reveal">
            <button className="email-button" onClick={copyEmail} type="button">
              <span>{copiedEmail ? t.contact.copied : EMAIL}</span>
              <ArrowIcon />
            </button>
            <div className="social-links">
              <a
                href="https://github.com/Aszlaczek"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.github} <ArrowIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/adrian-wzorek-902572309/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.linkedin} <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer content-width">
        <p>{t.footer.copyright}</p>
        <p>
          {t.footer.tagline}
          <span>{t.footer.alwaysShipping}</span>
        </p>
      </footer>
    </main>
  );
}
