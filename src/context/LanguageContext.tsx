import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "../Language";

interface LanguageCtx {
  lang: Lang;
  t: Translations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pl") return saved;
    return navigator.language.startsWith("pl") ? "pl" : "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function toggle() {
    setLang((prev) => {
      const next = prev === "en" ? "pl" : "en";
      localStorage.setItem("lang", next);
      document.documentElement.setAttribute("lang", next);
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
