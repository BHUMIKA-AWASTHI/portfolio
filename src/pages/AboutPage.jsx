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
  ["🎨", "I love designing interfaces that are simple, clean & enjoyable"],
  [
    "📚",
    "Always learning something new—because technology never stops evolving",
  ],
  ["☕", "Powered by coffee, curiosity & late-night coding sessions"],
  [
    "✨",
    "I believe the best products are built with equal parts creativity, patience, and purpose.",
  ],
];

// The content is kept in facts so JSX only needs one reusable list item.
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
          </div>
        </div>
        <div className="about-right">
          <h1>A little about me...</h1>
          <ul className="about-list">
            {/* Create one list item for each fact. */}
            {facts.map(([icon, text]) => (
              <li key={icon}>
                <span>{icon}</span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
