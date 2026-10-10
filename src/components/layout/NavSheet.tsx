import { CloseIcon, ArrowIcon } from "../ui";
import { NAV_LINKS } from "../../data";
import type { Translations } from "../../Language";

interface NavSheetProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
  lang: "en" | "pl";
  onToggleLang: () => void;
}

export function NavSheet({ isOpen, onClose, t, lang, onToggleLang }: NavSheetProps) {
  const navLabels = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
    <div
      id="nav-sheet"
      className={`nav-sheet${isOpen ? " is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.menu}
      aria-hidden={!isOpen}
    >
      <div className="nav-sheet-backdrop" onClick={onClose} />
      <nav className="nav-sheet-panel" aria-label={t.nav.menu}>
        <div className="nav-sheet-head">
          <span>{t.nav.menu}</span>
          <button
            className="nav-sheet-close"
            onClick={onClose}
            type="button"
            aria-label={t.nav.closeMenu}
          >
            <CloseIcon />
          </button>
        </div>
        <ul className="nav-sheet-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={onClose}>
                {navLabels[l]}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-sheet-foot">
          <button className="nav-ghost" onClick={onToggleLang} type="button">
            {lang === "en" ? "PL" : "EN"}
          </button>
          <a className="nav-cta" href="#contact" onClick={onClose}>
            {t.nav.hireMe} <ArrowIcon />
          </a>
        </div>
      </nav>
    </div>
  );
}