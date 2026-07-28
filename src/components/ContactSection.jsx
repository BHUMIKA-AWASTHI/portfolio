import { useState } from "react";
import paper from "../../images/pink-paper.png";
import "./ContactSection.css";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(event.currentTarget.action, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };
  return (
    <>
      <section className="contact-section">
        <div className="left-content">
          <span className="section-tag"> FOUND IN MY NOTEBOOK </span>
          <h2>"Every great collaboration begins with a simple message."</h2>
          <p>
            Behind every meaningful project is a conversation that started with
            a simple hello.
          </p>
          <p>
            Whether you have an idea to build, a challenge to solve, or simply
            want to connect, I'd love to hear your story.
          </p>
          <p className="note">
            ✦ Leave me a note, and let's create something remarkable together.
          </p>
          <div className="signature">— Bhumika ✦</div>
        </div>
        <div className="contact-right">
          <div className="paper-wrapper">
            <img className="paper-bg" src={paper} alt="Notebook Paper" />
            <form
              action="https://formspree.io/f/xbdnpadd"
              method="POST"
              className="contact-form"
              onSubmit={submit}
            >
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Type your message here"
                required
              />
              <button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {status === "sent" && (
        <div className="success-popup show">
          <div className="popup-card">
            <div className="popup-check">✓</div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
