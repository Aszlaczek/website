import type { Translations } from "../../Language";

interface StoryChapterProps {
  chapter: Translations["about"]["journey"][0];
  index: number;
}

export function StoryChapter({ chapter, index }: StoryChapterProps) {
  const sideWords = ["BUILD", "PERSIST", "CONNECT"] as const;

  return (
    <article
      className={`story-chapter story-${chapter.tone} reveal`}
      key={chapter.number}
    >
      <div className="story-visual">
        <img
          {...chapter.image}
          sizes="(max-width: 720px) calc(100vw - 82px), (max-width: 1288px) calc((100vw - 48px) / 2), 620px"
          alt={chapter.alt}
          loading="lazy"
          decoding="async"
        />
        <div className="story-image-wash" />
        <span className="story-ghost-number">{chapter.number}</span>
      </div>
      <div className="story-copy">
        <div className="story-pin" aria-hidden="true">
          <span>{chapter.number}</span>
        </div>
        <span className="story-overline">{chapter.overline}</span>
        <h3>{chapter.title}</h3>
        <strong>{chapter.lead}</strong>
        <p>{chapter.body}</p>
        <span className="story-lesson">{chapter.lesson}</span>
      </div>
      <span className="story-side-word" aria-hidden="true">
        {sideWords[index] || ""}
      </span>
    </article>
  );
}
