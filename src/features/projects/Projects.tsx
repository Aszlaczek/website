import { PROJECTS } from "../../data";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../../components/ui";
import type { Translations } from "../../Language";

interface ProjectsProps {
  t: Translations;
  showAll: boolean;
  onToggleShowAll: () => void;
}

export function Projects({ t, showAll, onToggleShowAll }: ProjectsProps) {
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section className="section projects-section" id="projects">
      <div className="content-width">
        <div className="projects-top">
          <SectionTitle number="03" eyebrow={t.projects.section}>
            {t.projects.title1}
            <br />
            <em>{t.projects.title2}</em>
          </SectionTitle>
          <button
            className="filter-button"
            onClick={onToggleShowAll}
            type="button"
          >
            {showAll ? t.projects.featured : t.projects.all}
            <span>{showAll ? "−" : "+"}</span>
          </button>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              t={t.projects.items[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}