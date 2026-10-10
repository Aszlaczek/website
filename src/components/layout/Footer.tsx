import type { Translations } from "../../Language";

interface FooterProps {
  t: Translations;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="footer content-width">
      <p>{t.footer.copyright}</p>
      <p>
        {t.footer.tagline}
        <span>{t.footer.alwaysShipping}</span>
      </p>
    </footer>
  );
}