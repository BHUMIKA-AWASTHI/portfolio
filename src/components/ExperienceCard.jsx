import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <div className="experience-card__tape"></div>

      <div className="experience-card__date">{experience.duration}</div>

      <div className="experience-card__body">
        <span className="experience-card__company">{experience.company}</span>

        <h2>{experience.role}</h2>

        <p>{experience.summary}</p>

        <ul>
          {experience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
