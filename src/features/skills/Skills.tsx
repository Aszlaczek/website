import { SectionTitle } from "../../components/ui";
import { SkillGroup } from "./SkillGroup";
import type { Translations } from "../../Language";

interface SkillsProps {
  t: Translations;
}

export function Skills({ t }: SkillsProps) {
  const softSkills = [
    { label: t.skills.communication, text: t.skills.communicationDesc },
    { label: t.skills.leadership, text: t.skills.leadershipDesc },
    { label: t.skills.discipline, text: t.skills.disciplineDesc },
  ];

  return (
    <section className="section content-width" id="skills">
      <SectionTitle number="04" eyebrow={t.skills.section}>
        {t.skills.title1}
        <br />
        <em>{t.skills.title2}</em>
      </SectionTitle>

      <div className="skills-layout">
        <div className="skills-intro reveal">
          <span>{t.skills.introEyebrow}</span>
          <p>{t.skills.introText}</p>
          <strong>{t.skills.introStrong}</strong>
        </div>

        <div>
          <div className="skills-grid">
            {t.skills.groups.map((group, groupIndex) => (
              <SkillGroup
                key={group}
                label={group}
                items={t.skills.groupItems[groupIndex]}
                index={groupIndex}
              />
            ))}
          </div>

          <div className="other-tools">
            <span className="other-tools-label">{t.skills.other}:</span>
            {t.skills.otherItems.map((item) => (
              <span className="tool-chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="soft-skills">
            {softSkills.map((block) => (
              <div className="soft-block reveal" key={block.label}>
                <span>{block.label}</span>
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}