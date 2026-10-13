import { useLanguage } from "./context/LanguageContext";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Hero } from "./features/hero/Hero";
import { Ticker } from "./features/ticker/Ticker";
import { Stats } from "./features/stats/Stats";
import { About } from "./features/about/About";
import { Experience } from "./features/experience/Experience";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";
import { Contact } from "./features/contact/Contact";

export default function App() {
  const { lang, t } = useLanguage();

  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">{t.nav.skip}</a>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero t={t} lang={lang} />

        <Ticker />

        <Stats t={t} />

        <About t={t} />

        <Experience t={t} />

        <Projects t={t} />

        <Skills t={t} />

        <Contact t={t} />

      </main>
      <Footer t={t} />
    </div>
  );
}
