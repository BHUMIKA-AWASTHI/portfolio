import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar />
      <HomePage />
    </main>
  </StrictMode>,
);
