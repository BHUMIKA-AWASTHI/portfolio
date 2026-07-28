import ProjectCard from "../components/ProjectCard";
import "./WorkPage.css";

const projects = [
  {
    title: "GlowCart",
    year: "2025",
    summary:
      "A full-stack e-commerce experience designed around a smooth, secure shopping flow.",
    highlights: [
      "MERN stack application",
      "Authentication and cart system",
      "Responsive, API-powered interface",
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
    ],
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
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <section className="work-page__intro">
        <p className="work-page__eyebrow">From my developer's journal</p>
        <h1>Selected work</h1>
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
    </main>
  );
}
