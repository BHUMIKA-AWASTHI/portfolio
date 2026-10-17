import { useState } from "react";
import "./ProjectCard.css";

/**
 * A reusable project preview. Add `githubUrl` and/or `liveUrl` to display
 * the relevant action buttons.
 */
export default function ProjectCard({ project }) {
  const { title, year, summary, highlights = [], githubUrl, liveUrl } = project;
  const [isExpanded, setIsExpanded] = useState(false);

  // Consider content "more" if highlights exceed 3 or summary is long
  const hasExtraHighlights = highlights.length > 3;
  const isLongSummary = summary && summary.length > 120;
  const isExpandable = hasExtraHighlights || isLongSummary;

  const visibleHighlights = isExpanded ? highlights : highlights.slice(0, 3);

  return (
    <article className={`project-card ${isExpanded ? "is-expanded" : ""}`}>
      <div className="project-card__tape" aria-hidden="true" />
      <div className="project-card__meta">
        <span>{year}</span>
      </div>

      <h2>{title}</h2>
      
      <p className={`project-card__summary ${isLongSummary && !isExpanded ? "is-clamped" : ""}`}>
        {summary}
      </p>

      <ul className="project-card__highlights">
        {visibleHighlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-card__footer">
        {isExpandable && (
          <button
            type="button"
            className="project-card__read-more"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Read less ▴" : `Read more ${hasExtraHighlights ? `(${highlights.length - 3} more)` : ""} ▾`}
          </button>
        )}

        {(githubUrl || liveUrl) && (
          <div className="project-card__links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Visit site <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
