import type { Translations } from "../../Language";

export function AiWorkflow({ t }: { t: Translations["workflow"] }) {
  return (
    <section className="ai-workflow" aria-labelledby="ai-workflow-title">
      <h3 id="ai-workflow-title" lang="en">{t.title}</h3>
      <p>{t.desc}</p>
      <ol>{t.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      <p className="workflow-docs">{t.docs}</p>
    </section>
  );
}
