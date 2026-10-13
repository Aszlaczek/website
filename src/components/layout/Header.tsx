import { useEffect, useRef, useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useLanguage } from "../../context/LanguageContext";
import { Nav } from "./Nav";
import { NavSheet } from "./NavSheet";

export function Header() {
  const { lang, t, toggle } = useLanguage();
  const [navOpen, setNavOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(navOpen);

  useEffect(() => {
    if (!navOpen) return;
    const trigger = document.activeElement as HTMLElement | null;
    const sheet = sheetRef.current;
    const focusable = () => Array.from(sheet?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusable()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 721px)");
    const onResize = () => { if (desktop.matches) setNavOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
      trigger?.focus({ preventScroll: true });
    };
  }, [navOpen]);

  return (
    <>
      <Nav t={t} lang={lang} onToggleLang={toggle} isOpen={navOpen} onOpenNav={() => setNavOpen(true)} />
      <NavSheet ref={sheetRef} isOpen={navOpen} onClose={() => setNavOpen(false)} t={t} lang={lang} onToggleLang={toggle} />
    </>
  );
}
