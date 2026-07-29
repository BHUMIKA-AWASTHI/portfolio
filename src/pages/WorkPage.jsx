import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import experiences from "../data/experiences";
import ScrollProgress from "../components/ScrollProgress";

import "./WorkPage.css";

const projects = [
  {
    title: "Mine Eraaah",
    year: "2025",
    summary:
      "A complete e-commerce platform built for small businesses, featuring a seamless shopping experience with a dedicated admin dashboard.",
    highlights: [
      "User authentication and role-based access",
      "Admin dashboard for product & order management",
      "Responsive MERN stack application",
    ],
    liveUrl: "https://mine-eraaah.vercel.app/",
  },
  {
    title: "GlowCart",
    year: "2025",
    summary:
      "A full-stack e-commerce experience designed around a smooth, secure shopping flow.",
    highlights: [
      "MERN stack application",
      "Authentication and cart system",
      "Responsive, API-powered interface",
      "Deplying soon!",
    ],
  },
  {
    title: "CampusCoin",
    year: "2025",
    summary:
      "A blockchain-based campus wallet that makes it easy to view activity and manage transactions.",
    highlights: [
      "React.js wallet dashboard",
      "Transaction update API integration",
      "Clear, student-friendly user interface",
      "Deployed v1 only , v2 is to be deployed yet!",
    ],
    liveUrl: "https://campus-coin.netlify.app/",
  },
  {
    title: "Agra Odyssey",
    year: "2024",
    summary:
      "A tourism and reservation website for discovering destinations and planning memorable trips.",
    highlights: [
      "Destination discovery and booking features",
      "Responsive layouts for every screen size",
      "Thoughtfully optimized user journeys",
      "Deploying soon!",
    ],
  },
];

export default function WorkPage() {
  const [showProjects, setShowProjects] = useState(false);

  const handleProjects = () => {
    setShowProjects(true);

    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <>
      <ScrollProgress />
      <main className="work-page">
        {/* ================= Work Experience ================= */}

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

          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}

          {!showProjects && (
            <div className="journal-divider">
              <span className="journal-divider__line"></span>

              <button
                className="journal-divider__button"
                onClick={handleProjects}
              >
                <span className="flower">✿</span>

                <span className="text">View My Projects</span>

                <span className="arrow">↓</span>
              </button>

              <span className="journal-divider__line"></span>
            </div>
          )}
        </section>

        {/* ================= Projects ================= */}

        <section
          id="projects"
          className={`projects-wrapper ${showProjects ? "show" : ""}`}
        >
          <section className="work-page__intro">
            <p className="work-page__eyebrow">From my developer's journal</p>

            <h1>Selected Work</h1>

            <p>
              A few projects where I turned ideas into friendly, responsive web
              experiences.
            </p>
          </section>

          <section className="work-page__grid" aria-label="Project portfolio">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}
