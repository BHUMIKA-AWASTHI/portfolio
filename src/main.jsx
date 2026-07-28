import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Navbar is shared; the page component changes for each entry point. */}
    <main className="site-shell">
      <Navbar currentPage="home" />
      <HomePage />
    </main>
  </StrictMode>,
);
