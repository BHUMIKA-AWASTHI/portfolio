import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["home", "about", "work", "projects", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
      setActiveSection(id);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, "#home", "home")}
        >
          <img src={logo} alt="Bhumika Logo" />
        </a>

        {/* Desktop */}
        <ul className="nav-links">
          {links.map(({ label, href, id }) => (
            <li key={id}>
              <a
                className={activeSection === id ? "active" : undefined}
                href={href}
                onClick={(e) => handleNavClick(e, href, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          {links.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => handleNavClick(e, href, id)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
