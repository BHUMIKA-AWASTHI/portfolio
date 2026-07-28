import "./ProjectCard.css";

/**
 * A reusable project preview. Add `githubUrl` and/or `liveUrl` to display
 * the relevant action buttons.
 */
export default function ProjectCard({ project }) {
  const { title, year, summary, highlights, githubUrl, liveUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card__tape" aria-hidden="true" />
      <div className="project-card__meta">
        <span>Project note</span>
        <span>{year}</span>
      </div>

      <h2>{title}</h2>
      <p className="project-card__summary">{summary}</p>

      <ul className="project-card__highlights">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

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
    </article>
  );
}
