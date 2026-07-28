import { useState } from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";

const BASE = import.meta.env.BASE_URL;

const links = [
  { label: "Home", href: `${BASE}` },
  { label: "About", href: `${BASE}about/` },
  { label: "Work", href: `${BASE}work/` },
  { label: "Blog", href: `${BASE}blog/` },
  { label: "Contact", href: `${BASE}contact/` },
];

export default function Navbar({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <a href={BASE} className="logo">
          <img src={logo} alt="Bhumika Logo" />
        </a>

        {/* Desktop */}
        <ul className="nav-links">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                className={
                  currentPage === label.toLowerCase() ? "active" : undefined
                }
                href={href}
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
          {links
            // .filter((link) => link.label !== "Blog") // remove if you want Blog too
            .map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={currentPage === label.toLowerCase() ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
        </div>
      </nav>
    </header>
  );
}
