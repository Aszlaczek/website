import type { ReactNode } from "react";

interface SectionTitleProps {
  number: string;
  eyebrow: string;
  children: ReactNode;
}

export function SectionTitle({ number, eyebrow, children }: SectionTitleProps) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{children}</h2>
    </div>
  );
}