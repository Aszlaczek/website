import { useState, useEffect } from "react";
import { useLanguage } from "./context/LanguageContext";
import { useBodyScrollLock } from "./hooks";
import { Nav, NavSheet, Footer } from "./components/layout";
import { Hero } from "./features/hero/Hero";
import { Ticker } from "./features/ticker/Ticker";
import { Stats } from "./features/stats/Stats";
import { About } from "./features/about/About";
import { Experience } from "./features/experience/Experience";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";
import { Contact } from "./features/contact/Contact";

export default function App() {
  const { lang, t, toggle } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useBodyScrollLock(navOpen);

  useEffect(() => {
    if (!navOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Nav
        t={t}
        lang={lang}
        onToggleLang={toggle}
        onOpenNav={() => setNavOpen(true)}
      />

      <NavSheet
        isOpen={navOpen}
        onClose={() => setNavOpen(false)}
        t={t}
        lang={lang}
        onToggleLang={toggle}
      />

      <Hero t={t} lang={lang} />

      <Ticker />

      <Stats t={t} />

      <About t={t} />

      <Experience t={t} />

      <Projects
        t={t}
        showAll={showAll}
        onToggleShowAll={() => setShowAll((current) => !current)}
      />

      <Skills t={t} />

      <Contact t={t} />

      <Footer t={t} />
    </main>
  );
}