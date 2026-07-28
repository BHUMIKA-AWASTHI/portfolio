import { useState } from "react";
import heroSticker from "../../images/hero-sticker.png";
import paper from "../../images/pink-paper.png";
import "./HomePage.css";

export default function HomePage() {
  // The form status controls its button and the success popup.
  const [status, setStatus] = useState("idle");

  // Send the form without a full page refresh.
  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(event.currentTarget.action, { method: 'POST', body: new FormData(event.currentTarget), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error("Request failed");
      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };
  // This page contains the existing hero, story and contact sections unchanged.
  return <>
    <section className="hero"><div className="hero-left"><h1><span className="developer-herotext">Developer's</span><span className="journal-herotext">Journal </span></h1><span className="volume"> Volume 01 </span><p>Building clean, scalable and user-focused web experiences one line of code at a time.</p><div className="hero-points"><div><span className="icon">{'{ }'}</span><p><span>Write Code</span><span>Solve Problems</span></p></div><div><span className="icon">🚀</span><p><span>Build Projects</span><span>Create Impact</span></p></div><div><span className="icon">🌱</span><p><span>Keep Learning</span><span>Grow Every Day</span></p></div></div></div><div className="hero-right"><img src={heroSticker} alt="Developer Sticker" /></div></section>
    <section className="story"><h1>A New Chapter Begins!</h1><p>Behind every interface lies a story of countless ideas, careful decisions, and continuous learning.</p><p>This journal is a collection of those stories—where clean code meets thoughtful design, and every project reflects a step toward becoming a better developer. I believe meaningful experiences are built one thoughtful line of code at a time.</p></section>
    <section className="contact-section"><div className="left-content"><span className="section-tag"> FOUND IN MY NOTEBOOK </span><h2>"Every great collaboration begins with a simple message."</h2><p>Behind every meaningful project is a conversation that started with a simple hello.</p><p>Whether you have an idea to build, a challenge to solve, or simply want to connect, I'd love to hear your story.</p><p className="note">✦ Leave me a note, and let's create something remarkable together.</p><div className="signature">— Bhumika ✦</div></div><div className="contact-right"><div className="paper-wrapper"><img className="paper-bg" src={paper} alt="Notebook Paper" /><form action="https://formspree.io/f/xbdnpadd" method="POST" className="contact-form" onSubmit={submit}><input type="text" name="name" placeholder="Name" required /><input type="email" name="email" placeholder="Email" required /><textarea name="message" placeholder="Type your message here" required /><button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Submit'}</button></form></div></div></section>
    {status === 'sent' && <div className="success-popup show"><div className="popup-card"><div className="popup-check">✓</div><h2>Message Sent!</h2><p>Thank you for reaching out. I'll get back to you soon.</p><button onClick={() => setStatus('idle')}>Close</button></div></div>}
  </>
}
