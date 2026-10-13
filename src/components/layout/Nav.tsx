import { LanguageSwitch } from "../ui/LanguageSwitch";
import { MenuIcon } from "../ui";
import { NAV_LINKS } from "../../data";
import type { Translations } from "../../Language";

interface NavProps {
  t: Translations;
  lang: "en" | "pl";
  onToggleLang: () => void;
  onOpenNav: () => void;
  isOpen: boolean;
}

export function Nav({ t, lang, onToggleLang, onOpenNav, isOpen }: NavProps) {
  return (
    <nav className="nav-wrap" aria-label={t.nav.primary}>
      <a className="brand" href="#top" aria-label={`Adrian.dev — ${t.nav.home}`}>
        Adrian<span>.dev</span>
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l}`}>
            {t.nav[l]}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <LanguageSwitch lang={lang} label={t.nav.switchLanguage} onToggle={onToggleLang} />
        <a className="nav-cta" href="#contact">
          {t.nav.hireMe} <span>→</span>
        </a>
        <button
          className="nav-hamburger"
          onClick={onOpenNav}
          type="button"
          aria-label={t.nav.menu}
          aria-expanded={isOpen}
          aria-controls="nav-sheet"
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}