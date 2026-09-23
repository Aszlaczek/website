import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "../Language";

interface LanguageCtx {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

function getInitialLang(): Lang {
  if (typeof window !== "undefined") {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param === "en" || param === "pl") return param;
  }
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pl") return saved;
  } catch {
    /* localStorage unavailable (private mode / SSR) */
  }
  if (typeof navigator !== "undefined" && navigator.language?.startsWith("pl")) return "pl";
  return "en";
}

function applyLang(lang: Lang, syncUrl: boolean) {
  document.documentElement.setAttribute("lang", lang);
  try {
    localStorage.setItem("lang", lang);
  } catch {
    /* ignore */
  }
  if (syncUrl && typeof window !== "undefined" && window.history?.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "en" so hydration always matches the prerendered HTML,
  // then switch to the visitor's language after mount.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    setLang(getInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function toggle() {
    setLang((prev) => {
      const next = prev === "en" ? "pl" : "en";
      applyLang(next, true);
      return next;
    });
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
