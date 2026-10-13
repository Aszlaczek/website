import type { Project, ProjectCopy } from "../../data/types";
import type { Translations } from "../../Language";

interface ProjectCardProps {
  project: Project;
  t: ProjectCopy;
  labels: Translations["projects"];
  hidden: boolean;
}

export function ProjectCard({ project, t, labels, hidden }: ProjectCardProps) {
  return (
    <article className={`project-card project-${project.tone} reveal`} hidden={hidden} aria-labelledby={`project-${project.id}`}>
      <div className="project-meta"><span>{t.tag}</span></div>
      <div className="project-number" aria-hidden="true">{project.num}</div>
      <h3 id={`project-${project.id}`}>{project.title}</h3>
      <p>{t.desc}</p>
      <dl className="project-facts">
        <div><dt>{labels.problem}</dt><dd>{t.problem}</dd></div>
        <div><dt>{labels.outcome}</dt><dd>{t.outcome}</dd></div>
      </dl>
      {t.note && <p className="project-note">{t.note}</p>}
      <details className="project-details">
        <summary>{labels.details}<span className="sr-only"> — {project.title}</span></summary>
        <ul>{t.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
      </details>
      <div className="project-footer">
        <ul className="project-stack" aria-label={`${project.title} — stack`}>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links">
          <a className="project-link" href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Demo — ${project.title}`}>Demo ↗</a>
          <a className="project-link" href={project.code} target="_blank" rel="noopener noreferrer" aria-label={`${labels.code} — ${project.title}`}>{labels.code} ↗</a>
        </div>
      </div>
    </article>
  );
}
