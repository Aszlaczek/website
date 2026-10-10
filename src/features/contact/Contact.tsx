import { ArrowIcon } from "../../components/ui";
import { EMAIL } from "../../data";
import { useCopyToClipboard } from "../../hooks";
import type { Translations } from "../../Language";

interface ContactProps {
  t: Translations;
}

export function Contact({ t }: ContactProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="content-width contact-inner">
        <span className="contact-kicker reveal">{t.contact.section}</span>
        <h2 className="reveal">
          {t.contact.title1}
          <br />
          <em>{t.contact.title2}</em>
        </h2>
        <p className="reveal">{t.contact.desc}</p>
        <div className="contact-actions reveal">
          <button className="email-button" onClick={() => copy(EMAIL)} type="button">
            <span>{copied ? t.contact.copied : EMAIL}</span>
            <ArrowIcon />
          </button>
          <div className="social-links">
            <a
              href="https://github.com/Aszlaczek"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.github} <ArrowIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-wzorek-902572309/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.linkedin} <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}