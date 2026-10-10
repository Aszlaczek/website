import { SectionTitle } from "../../components/ui";
import type { Translations } from "../../Language";

interface ExperienceProps {
  t: Translations;
}

export function Experience({ t }: ExperienceProps) {
  const experiences = [
    {
      num: "01",
      title: t.about.exp1Title,
      company: t.about.exp1Company,
      date: t.about.exp1Date,
      desc: t.about.exp1Desc,
    },
    {
      num: "02",
      title: t.about.exp2Title,
      company: t.about.exp2Company,
      date: t.about.exp2Date,
      desc: t.about.exp2Desc,
    },
  ];

  return (
    <section className="section content-width" id="experience">
      <SectionTitle number="02" eyebrow={t.about.experience}>
        {t.about.experienceTitle1}
        <br />
        <em>{t.about.experienceTitle2}</em>
      </SectionTitle>

      <div className="bento experience-list">
        {experiences.map((exp) => (
          <div className="experience-row" key={exp.num}>
            <span>{exp.num}</span>
            <div>
              <h3>{exp.title}</h3>
              <span className="exp-company">{exp.company}</span>
              <p>{exp.desc}</p>
            </div>
            <strong>{exp.date}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}