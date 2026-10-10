import { STATS } from "../../data";
import type { Translations } from "../../Language";

interface StatsProps {
  t: Translations;
}

export function Stats({ t }: StatsProps) {
  return (
    <section className="stats content-width" aria-label="Quick facts">
      {STATS.map((stat) => (
        <div className="stat reveal" key={stat.key}>
          <strong>{stat.value}</strong>
          <span>{t.stats[stat.key]}</span>
        </div>
      ))}
    </section>
  );
}