import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* This entry point renders only the About page at /about/. */}
    <main className="site-shell">
      <Navbar currentPage="about" />
      <AboutPage />
    </main>
  </StrictMode>,
);
