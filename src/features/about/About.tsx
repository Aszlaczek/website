import { SectionTitle } from "../../components/ui";
import { StoryChapter } from "./StoryChapter";
import type { Translations } from "../../Language";

interface AboutProps {
  t: Translations;
}

export function About({ t }: AboutProps) {
  return (
    <section className="section content-width" id="about">
      <SectionTitle number="01" eyebrow={t.about.section}>
        {t.about.title1}
        <br />
        <em>{t.about.title2}</em>
      </SectionTitle>

      <div className="story-opening reveal">
        <p className="story-opening-index">{t.about.storyOpening.index}</p>
        <div>
          <p>{t.about.storyOpening.p1}</p>
          <p>{t.about.storyOpening.p2}</p>
        </div>
      </div>

      <div className="story-flow">
        <div className="story-line" aria-hidden="true">
          <span />
        </div>
        {t.about.journey.map((chapter, index) => (
          <StoryChapter
            key={chapter.number}
            chapter={chapter}
            index={index}
          />
        ))}

        <article className="story-finale reveal">
          <span className="finale-number">{t.about.finale.number}</span>
          <div>
            <span className="story-overline">{t.about.finale.overline}</span>
            <h3>
              {t.about.finale.title1}
              <br />
              {t.about.finale.title2}
              <br />
              <em>{t.about.finale.title3}</em>
            </h3>
          </div>
          <div className="finale-copy">
            <p>{t.about.finale.paragraph}</p>
            <a href="#projects">
              {t.about.finale.cta} <span>→</span>
            </a>
          </div>
          <div className="finale-orbit" aria-hidden="true">
            <span>?</span>
          </div>
        </article>
      </div>
    </section>
  );
}