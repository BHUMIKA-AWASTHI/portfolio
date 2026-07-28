import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import "./styles/pages.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="about" />
      <AboutPage />
    </main>
  </StrictMode>,
);
