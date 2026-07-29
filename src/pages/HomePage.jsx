import heroSticker from "../../images/hero-sticker.png";
import ContactSection from "../components/ContactSection";
import "./HomePage.css";
import ScrollProgress from "../components/ScrollProgress";

export default function HomePage() {
  // This page contains the existing hero, story and contact sections unchanged.
  return (
    <>
      <ScrollProgress />
      <section className="hero">
        <div className="hero-left">
          <h1>
            <span className="developer-herotext">Developer's</span>
            <span className="journal-herotext">Journal </span>
          </h1>
          <span className="volume"> Volume 01 </span>
          <p>
            Building clean, scalable and user-focused web experiences one line
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
      <ContactSection />
    </>
  );
}
