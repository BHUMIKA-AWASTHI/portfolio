import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import experiences from "../data/experiences";

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="work-experience">
      <div className="work-heading">
        <p className="work-page__eyebrow">Professional Journey</p>

        <h1>Work Experience</h1>

        <p className="my-experience-journey">
          My journey through internships and real-world development
          experiences that helped shape my skills as a frontend and
          full-stack developer.
        </p>
      </div>

      <div className="single-experience-container">
        <button
          className="work-arrow-btn work-arrow-btn--prev"
          onClick={prevCard}
          aria-label="Previous experience"
        >
          <span>‹</span>
        </button>

        <div className="single-card-viewport">
          <ExperienceCard
            key={experiences[currentIndex].company}
            experience={experiences[currentIndex]}
          />
        </div>

        <button
          className="work-arrow-btn work-arrow-btn--next"
          onClick={nextCard}
          aria-label="Next experience"
        >
          <span>›</span>
        </button>
      </div>

      {/* Pagination dots & counter */}
      <div className="work-pagination">
        <div className="work-dots-group">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              className={`work-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${exp.company} experience`}
            />
          ))}
        </div>
        <span className="work-counter">
          0{currentIndex + 1} / 0{experiences.length}
        </span>
      </div>
    </section>
  );
}
