import { ArrowIcon } from "../../components/ui";
import type { Project } from "../../data";
import type { Translations } from "../../Language";

interface ProjectCardProps {
  project: Project;
  t: Translations["projects"]["items"][0];
}

export function ProjectCard({ project, t }: ProjectCardProps) {
  return (
    <article className={`project-card project-${project.tone} reveal`}>
      <div className="project-meta">
        <span>{t.tag}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-number">{project.num}</div>
      <h3>{project.title}</h3>
      <p>{t.desc}</p>
      <div className="project-footer">
        <div>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a
            className="project-link"
            href={t.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo →
          </a>
          <a
            className="project-link"
            href={t.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code →
          </a>
        </div>
        <a
          className="project-arrow"
          href={t.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Demo — ${project.title}`}
        >
          <ArrowIcon />
        </a>
      </div>
    </article>
  );
}