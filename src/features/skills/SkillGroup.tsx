interface SkillGroupProps {
  label: string;
  items: string[];
  index: number;
}

export function SkillGroup({ label, items, index }: SkillGroupProps) {
  return (
    <article className="skill-group reveal">
      <div>
        <span>0{index + 1}</span>
        <h3>{label}</h3>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}