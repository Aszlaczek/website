import { MenuIcon } from "../ui";
import { NAV_LINKS } from "../../data";
import type { Translations } from "../../Language";

interface NavProps {
  t: Translations;
  lang: "en" | "pl";
  onToggleLang: () => void;
  onOpenNav: () => void;
}

export function Nav({ t, lang, onToggleLang, onOpenNav }: NavProps) {
  const navLabels = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
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
        <button className="nav-ghost" onClick={onToggleLang} type="button">
          {lang === "en" ? "PL" : "EN"}
        </button>
        <a className="nav-cta" href="#contact">
          {t.nav.hireMe} <span>→</span>
        </a>
        <button
          className="nav-hamburger"
          onClick={onOpenNav}
          type="button"
          aria-label={t.nav.menu}
          aria-expanded="false"
          aria-controls="nav-sheet"
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}