import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "../Language";
import { applySeo } from "../lib/seo";
import { publicAsset } from "../lib/assets";

interface LanguageCtx {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}
const LanguageContext = createContext<LanguageCtx | null>(null);

export function getInitialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get("lang");
  if (param === "en" || param === "pl") return param;
  const pathLang = window.location.pathname.match(/\/(en|pl)\/?$/)?.[1];
  if (pathLang === "en" || pathLang === "pl") return pathLang;
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pl") return saved;
  } catch {
    /* Storage may be disabled. */
  }
  return navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en";
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  // The initial value must match the language of the prerendered document.
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    const sync = () => setLang(getInitialLang());
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    applySeo(lang);
  }, [lang]);

  function toggle() {
    const next = lang === "en" ? "pl" : "en";
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* Optional persistence. */
    }
    const url = new URL(window.location.href);
    url.pathname = publicAsset(`${next}/`);
    url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
    setLang(next);
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
