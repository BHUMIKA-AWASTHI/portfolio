import profileImage from "../../images/hero-sticker-new.png";
import "./AboutPage.css";

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
    year: "2022 – Present",
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    place: "Hindustan College of Science & Technology",
  },
  {
    year: "2021",
    title: "Senior Secondary (XII)",
    subtitle: "CBSE - PCM with Computer Science",
    place: "John Milton Public School, Agra - UP",
  },
  {
    year: "2019",
    title: "Secondary (X)",
    subtitle: "CBSE - All Subjects with Standard Mathematics",
    place: "SheerWood College, Jhansi - UP",
  },
];

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="polaroid">
            <img src={profileImage} alt="Bhumika Awasthi" />
            <span className="polaroid-name">Bhumika!</span>
          </div>

          <div className="about-role">
            <h3>Bhumika Awasthi</h3>
            <p>Full Stack Developer</p>
            <span>Building thoughtful digital experiences.</span>
          </div>
        </div>

        <div className="about-right">
          <section>
            <h1>A little about me...</h1>

            <ul className="about-list">
              {facts.map(([icon, text]) => (
                <li key={icon}>
                  <span>{icon}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="education-section">
            <h2>📖 My Learning Journey</h2>

            <div className="education-timeline">
              {education.map((item) => (
                <div className="education-card" key={item.year}>
                  <span className="education-year">{item.year}</span>

                  <h3>{item.title}</h3>

                  <p>{item.subtitle}</p>

                  <small>{item.place}</small>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
