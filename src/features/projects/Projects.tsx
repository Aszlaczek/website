import { useState } from "react";
import { PROJECTS } from "../../data";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "../../components/ui";
import type { Translations } from "../../Language";

interface ProjectsProps {
  t: Translations;
}

export function Projects({ t }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

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
            <span>{showAll ? "−" : "+"}</span>
          </button>
        </div>

        <div id="projects-grid" className={`projects-grid${showAll ? " show-all" : ""}`}>
          {PROJECTS.map((project, index) => (
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