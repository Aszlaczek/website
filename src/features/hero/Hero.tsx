import { ArrowIcon } from "../../components/ui";
import { PROFILE_IMAGE } from "../../data";
import type { Translations } from "../../Language";

interface HeroProps {
  t: Translations;
  lang: "en" | "pl";
}

export function Hero({ t, lang }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-prologue" aria-hidden="true">
        {t.hero.ghostText}
      </div>

      <div className="hero-copy">
        <div className="availability reveal">
          <span className="status-dot" />
          {t.hero.openToWork}
          <span className="availability-place">{t.hero.degree}</span>
        </div>

        <div className="hero-chapter-label">
          <span>00</span>
          <p>{t.hero.chapterLabel}</p>
        </div>

        <h1 className="hero-title">
          <span className="title-line title-line-one">{t.hero.title1}</span>
          <span className="title-line title-line-two">
            <em>{t.hero.title2}</em>
          </span>
          <span className="title-line title-line-three">{t.hero.title3}</span>
        </h1>

        <div className="hero-bottom reveal">
          <div>
            <p>{t.hero.desc}</p>
            <div className="hero-values" aria-label="Personal values">
              {t.hero.values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.hero.seeWork} <ArrowIcon />
            </a>
            <a
              className="button button-ghost"
              href={`files/Adrian_Wzorek_CV_${lang}.pdf`}
            >
              {t.hero.downloadCv} <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-aside">
        <HeroProfileCard about={t.about} stats={t.stats} />
      </div>

      <div className="scroll-cue">
        <span>{t.hero.scrollCue}</span>
        <i />
      </div>
    </section>
  );
}

interface HeroProfileCardProps {
  about: Translations["about"];
  stats: Translations["stats"];
}

function HeroProfileCard({ about, stats }: HeroProfileCardProps) {
  return (
    <figure className="hero-profile-card">
      <div className="hero-profile-image">
        <img
          src={PROFILE_IMAGE}
          alt="Laptop in a focused developer workspace"
        />
        <span>{about.openToWork}</span>
        <i>{about.relocation}</i>
      </div>
      <figcaption>
        <span className="profile-kicker">{about.profileCard.kicker}</span>
        <p>{about.profileCard.paragraph}</p>
        <div className="profile-stats">
          <div>
            <strong>4+</strong>
            <span>{stats.years}</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>{stats.karate}</span>
          </div>
          <div>
            <strong>5+</strong>
            <span>{stats.camps}</span>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}