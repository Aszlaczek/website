import { useState } from "react";

const EMAIL = "jan@kowalski.dev";

const TICKER_ITEMS = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "mgr. inż. IT",
  "Docker",
  "REST APIs",
  "Karate Black Belt",
  "Always learning",
];

const PROJECTS = [
  {
    num: "01",
    title: "TrackFlow",
    tag: "Full-stack App",
    year: "2025",
    desc: "Running log and performance tracker with Strava-like data visualization. Built as my engineering thesis project, then extended into a real product.",
    stack: ["React", "Node.js", "PostgreSQL", "Recharts"],
    tone: "lime",
  },
  {
    num: "02",
    title: "CampManager",
    tag: "Web Platform",
    year: "2025",
    desc: "An online toolkit for summer camps: registration, parent communication and scheduling. Built from first-hand instructor experience.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    tone: "violet",
  },
  {
    num: "03",
    title: "DojoHub",
    tag: "SaaS MVP",
    year: "2024",
    desc: "Class booking and student progress for martial arts schools. A focused product designed by an instructor, for instructors.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    tone: "cyan",
  },
  {
    num: "04",
    title: "Portfolio v1",
    tag: "UI / Web",
    year: "2024",
    desc: "My first personal portfolio, built from scratch. Fully responsive, deliberately simple and responsible for my first freelance client.",
    stack: ["HTML", "CSS", "JavaScript"],
    tone: "coral",
  },
];

const TECH = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "JWT Auth"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    group: "Workflow",
    items: ["Git", "Docker", "Figma", "Linux", "CI/CD"],
  },
];

const JOURNEY = [
  {
    number: "01",
    overline: "The spark",
    title: "It started with a problem.",
    lead: "Then another. And suddenly, I was building.",
    body: "Computer Science gave that curiosity a language. Code became my way of taking something tangled, finding the pattern inside it and turning it into a useful product. Every solved problem made me hungry for a harder one.",
    lesson: "Curiosity → craft",
    image:
      "https://images.unsplash.com/photo-1650661926447-9efb2610f64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
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
    image:
      "https://images.unsplash.com/photo-1656653121475-e33829581294?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    alt: "Martial artist tightening a black belt",
    tone: "dojo",
  },
  {
    number: "03",
    overline: "The people",
    title: "Plans change. People count.",
    lead: "Camps turned responsibility into an adventure.",
    body: "Trips, summer camps and groups of young people rarely follow the perfect plan. They taught me to organize the chaos, communicate with energy and stay calm when reality ships an unexpected feature. The best outcome is always something we create together.",
    lesson: "Responsibility → trust",
    image:
      "https://images.unsplash.com/photo-1634206813008-d1c2b828c7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    alt: "Campfire beside a forest lake",
    tone: "camp",
  },
];

const STATS = [
  { value: "4+", label: "years coding" },
  { value: "mgr.", label: "inż. IT" },
  { value: "15+", label: "years of karate" },
  { value: "∞", label: "curiosity" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
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
  children: React.ReactNode;
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const ticker = [...TICKER_ITEMS, ...TICKER_ITEMS];
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1800);
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Homepage">
          JAN<span>/DEV</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#skills">Stack</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let&apos;s talk <ArrowIcon />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-prologue" aria-hidden="true">
          PROLOGUE
        </div>
        <div className="hero-copy">
          <div className="availability reveal">
            <span className="status-dot" />
            Open to web developer roles
            <span className="availability-place">Poland / Remote</span>
          </div>

          <div className="hero-chapter-label">
            <span>00</span>
            <p>
              A story about curiosity,
              <br />
              discipline &amp; people
            </p>
          </div>

          <h1 className="hero-title">
            <span className="title-line title-line-one">I build things</span>
            <span className="title-line title-line-two">
              for the <em>web.</em>
            </span>
          </h1>

          <div className="hero-bottom reveal">
            <div>
              <p>
                Master of Engineering in Computer Science. I turn ideas into
                clean, thoughtful digital products — with discipline,
                curiosity and just enough controlled chaos.
              </p>
              <div className="hero-values" aria-label="My values">
                <span>01 / Solve</span>
                <span>02 / Persist</span>
                <span>03 / Connect</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-ghost" href="/cv.pdf">
                Download CV <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-aside">
          <figure className="hero-profile-card">
            <div className="hero-profile-image">
              <img
                src={JOURNEY[0].image}
                alt="Laptop in a focused developer workspace"
              />
              <span>Life beyond the screen</span>
              <i>Based in Poland</i>
            </div>
            <figcaption>
              <span className="profile-kicker">Three paths. One mindset.</span>
              <p>
                Building products, teaching discipline and creating adventures
                people remember.
              </p>
              <div className="profile-stats">
                <div>
                  <strong>4+</strong>
                  <span>years<br />programming</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>years<br />of karate</span>
                </div>
                <div>
                  <strong>5+</strong>
                  <span>years as instructor<br />&amp; camp educator</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="scroll-cue">
          <span>Scroll to discover</span>
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
          <div className="stat reveal" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section content-width" id="about">
        <SectionTitle number="01" eyebrow="Beyond the code">
          Not a straight line.
          <br />
          <em>A story in motion.</em>
        </SectionTitle>

        <div className="story-opening reveal">
          <p className="story-opening-index">00 / PROLOGUE</p>
          <div>
            <p>
              I&apos;m not only a developer, an instructor or a camp leader.
            </p>
            <p>
              I&apos;m the sum of every problem I stayed with, every person I
              helped grow and every plan I had to reinvent along the way.
            </p>
          </div>
        </div>

        <div className="story-flow">
          <div className="story-line" aria-hidden="true">
            <span />
          </div>
          {JOURNEY.map((chapter, index) => (
            <article
              className={`story-chapter story-${chapter.tone} reveal`}
              key={chapter.number}
            >
              <div className="story-visual">
                <img src={chapter.image} alt={chapter.alt} />
                <div className="story-image-wash" />
                <span className="story-ghost-number">{chapter.number}</span>
                <span className="story-photo-label">
                  Chapter {chapter.number} / {chapter.overline}
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
                {index === 0
                  ? "BUILD"
                  : index === 1
                    ? "PERSIST"
                    : "CONNECT"}
              </span>
            </article>
          ))}

          <article className="story-finale reveal">
            <span className="finale-number">04</span>
            <div>
              <span className="story-overline">The next chapter</span>
              <h3>
                Still learning.
                <br />
                Still moving.
                <br />
                <em>Ready for more.</em>
              </h3>
            </div>
            <div className="finale-copy">
              <p>
                These paths didn&apos;t distract me from becoming a developer.
                They shaped the kind of developer I want to be: resourceful,
                dependable, open to feedback and genuinely good to work with.
              </p>
              <a href="#projects">
                See what that looks like in code <ArrowIcon />
              </a>
            </div>
            <div className="finale-orbit" aria-hidden="true">
              <span>?</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="content-width">
          <div className="projects-top">
            <SectionTitle number="02" eyebrow="Selected work">
              Projects with
              <br />
              <em>purpose.</em>
            </SectionTitle>
            <button
              className="filter-button"
              onClick={() => setShowAll((current) => !current)}
              type="button"
            >
              {showAll ? "Show selected" : "View all projects"}
              <span>{showAll ? "−" : "+"}</span>
            </button>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article
                className={`project-card project-${project.tone} reveal`}
                key={project.num}
              >
                <div className="project-meta">
                  <span>{project.tag}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-number">{project.num}</div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <div>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <span className="project-arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-width" id="skills">
        <SectionTitle number="03" eyebrow="Tools of choice">
          Strong foundations.
          <br />
          <em>Room to grow.</em>
        </SectionTitle>

        <div className="skills-layout">
          <div className="skills-intro reveal">
            <span>How I choose tools</span>
            <p>
              I care more about solving the right problem than chasing every
              new framework.
            </p>
            <strong>
              Strong fundamentals first. The right technology second. Learning
              never stops.
            </strong>
          </div>
          <div className="skills-grid">
            {TECH.map((group, groupIndex) => (
              <article className="skill-group reveal" key={group.group}>
                <div>
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.group}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orb" aria-hidden="true" />
        <div className="content-width contact-inner">
          <span className="contact-kicker reveal">Have a role or an idea?</span>
          <h2 className="reveal">
            Let&apos;s build something
            <br />
            <em>worth remembering.</em>
          </h2>
          <p className="reveal">
            I&apos;m looking for a team where I can contribute, ask good
            questions and keep becoming a better developer.
          </p>
          <div className="contact-actions reveal">
            <button className="email-button" onClick={copyEmail} type="button">
              <span>{copiedEmail ? "Copied to clipboard" : EMAIL}</span>
              <ArrowIcon />
            </button>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub <ArrowIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer content-width">
        <p>© 2026 Jan Kowalski · mgr. inż.</p>
        <p>
          Designed with intention <span>and a little chaos.</span>
        </p>
      </footer>
    </main>
  );
}
