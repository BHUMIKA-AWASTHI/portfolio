import profileImage from "../../images/my-polaroid.png";
import "./AboutPage.css";

import hcstLogo from "../../images/hcstlogo.jpg";
import jmpsLogo from "../../images/jmpslogo.png";
import sherwoodLogo from "../../images/swclogo.jpg";
import ScrollProgress from "../components/ScrollProgress";

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

export default function AboutPage() {
  return (
    <>
      <ScrollProgress />
      <section className="about-section">
        {/* Top Part */}

        <div className="about-wrapper">
          <div className="about-left">
            <div className="polaroid">
              <img src={profileImage} alt="Bhumika Awasthi" />
              {/* <span className="polaroid-name">Bhumika!</span> */}
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

        {/* Bottom Part */}

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
    </>
  );
}
