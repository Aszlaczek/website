import type { Lang, Translations } from "../../Language";
import { publicAsset } from "../../lib/assets";

export function LanguageSwitch({ lang, label, onToggle }: { lang: Lang; label: Translations["nav"]["switchLanguage"]; onToggle: () => void }) {
  const next = lang === "en" ? "pl" : "en";
  return <a className="nav-ghost" href={publicAsset(`${next}/`)} hrefLang={next} lang={next} aria-label={`${next.toUpperCase()} — ${label}`} onClick={(event) => {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      onToggle();
    }
  }}>{next.toUpperCase()}</a>;
}
