import { useEffect, useState } from "react";
import { PROJECTS } from "../../data";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../../components/ui";
import type { Translations } from "../../Language";

interface ProjectsProps {
  t: Translations;
}

export function Projects({ t }: ProjectsProps) {
  // Prerender all projects for readers without JavaScript; enhance after hydration.
  const [showAll, setShowAll] = useState(true);
  useEffect(() => setShowAll(false), []);

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
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
            aria-controls="projects-grid"
            type="button"
          >
            {showAll ? t.projects.featured : t.projects.all}
            <span>{showAll ? "-" : "+"}</span>
          </button>
        </div>

        <div
          id="projects-grid"
          className={`projects-grid${showAll ? " show-all" : ""}`}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              t={t.projects.items[project.id]}
              labels={t.projects}
              hidden={!showAll && !project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
