import heroSticker from "../../images/hero-sticker.png";
import profileImage from "../../images/my-polaroid.png";
import hcstLogo from "../../images/hcstlogo.jpg";
import jmpsLogo from "../../images/jmpslogo.png";
import sherwoodLogo from "../../images/swclogo.jpg";
import projects from "../data/projects";
import WorkSection from "../components/WorkSection";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import ScrollProgress from "../components/ScrollProgress";

import "./HomePage.css";
import "./AboutPage.css";
import "./WorkPage.css";

const facts = [
  [
    "🌸",
    <>
      <strong>Virgo Sun</strong> ♍ • Dreamer with a logical mind
    </>,
  ],
  ["💻", "Turning ideas into interactive web experiences"],
  ["🎨", "Designing interfaces that feel simple, elegant and intuitive"],
  ["📚", "Always learning because technology never stops evolving"],
  ["☕", "Powered by coffee, curiosity & late-night coding sessions"],
  ["✨", "Creating meaningful digital experiences, one project at a time."],
];

const education = [
  {
    logo: hcstLogo,
    year: "2022 – 2026",
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    place: "Hindustan College of Science & Technology",
  },
  {
    logo: jmpsLogo,
    year: "2021 – 2022",
    title: "Senior Secondary (XII)",
    subtitle: "CBSE • PCM with Computer Science",
    place: "John Milton Public School, Agra",
  },
  {
    logo: sherwoodLogo,
    year: "2019 – 2020",
    title: "Secondary (X)",
    subtitle: "CBSE • Standard Mathematics",
    place: "SheerWood College, Jhansi",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      {/* ================= 1. HOME SECTION ================= */}
      <section id="home" className="home-section-container">
        <section className="hero">
          <div className="hero-left">
            <span className="hero-intro-tag">Hi, I'm Bhumika Awasthi</span>
            <h1>
              <span className="developer-herotext">Developer's</span>
              <span className="journal-herotext">Journal </span>
            </h1>
            <span className="volume"> Volume 01 </span>
            <p>
              I'm Bhumika Awasthi, a Full Stack Developer building clean, scalable and user-focused web experiences one line
              of code at a time.
            </p>
            <div className="hero-points">
              <div>
                <span className="icon">{"{ }"}</span>
                <p>
                  <span>Write Code</span>
                  <span>Solve Problems</span>
                </p>
              </div>
              <div>
                <span className="icon">🚀</span>
                <p>
                  <span>Build Projects</span>
                  <span>Create Impact</span>
                </p>
              </div>
              <div>
                <span className="icon">🌱</span>
                <p>
                  <span>Keep Learning</span>
                  <span>Grow Every Day</span>
                </p>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroSticker} alt="Developer Sticker" />
          </div>
        </section>

        <section className="story">
          <h1>A New Chapter Begins!</h1>
          <p>
            Behind every interface lies a story of countless ideas, careful
            decisions, and continuous learning.
          </p>
          <p>
            This journal is a collection of those stories—where clean code meets
            thoughtful design, and every project reflects a step toward becoming a
            better developer. I believe meaningful experiences are built one
            thoughtful line of code at a time.
          </p>
        </section>
      </section>

      {/* ================= 2. ABOUT SECTION ================= */}
      <section id="about" className="about-section">
        {/* Top Part */}
        <div className="about-wrapper">
          <div className="about-left">
            <div className="polaroid">
              <img src={profileImage} alt="Bhumika Awasthi" />
            </div>

            <div className="about-role">
              <h3>Bhumika Awasthi</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div className="about-right">
            <h1>A little about me...</h1>

            <ul className="about-list">
              {facts.map(([icon, text]) => (
                <li key={icon}>
                  <span>{icon}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Part - Education */}
        <section className="education-section">
          <h2>📖 My Educational Journey</h2>

          <div className="education-board">
            {education.map((item) => (
              <article className="education-card" key={item.year}>
                <img
                  src={item.logo}
                  alt={item.title}
                  className="education-logo"
                />

                <span className="education-year">{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>

                <small>{item.place}</small>
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* ================= 3. WORK SECTION ================= */}
      <section id="work" className="work-page">
        <WorkSection />
      </section>

      {/* ================= 4. PROJECTS SECTION ================= */}
      <section id="projects" className="work-page">
        <section className="projects-wrapper show">
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
      </section>

      {/* ================= 5. CONTACT SECTION ================= */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
