import logo from "../../images/logo.png";

const BASE = import.meta.env.BASE_URL;

const links = [
  { label: "Home", href: `${BASE}` },
  { label: "About", href: `${BASE}about/` },
  { label: "Work", href: `${BASE}work/` },
  { label: "Blog", href: `${BASE}blog/` },
  { label: "Contact", href: `${BASE}contact/` },
];

export default function Navbar({ currentPage }) {
  return (
    <header>
      <nav className="navbar">
        <a href={BASE} className="logo">
          <img src={logo} alt="Bhumika Logo" />
        </a>
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
      </nav>
    </header>
  );
}
