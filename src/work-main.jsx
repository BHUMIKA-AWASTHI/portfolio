import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import SimplePage from "./pages/SimplePage";
import "./styles/pages.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="work" />
      <SimplePage
        title="Selected work"
        text="Projects and case studies are coming soon."
      />
    </main>
  </StrictMode>,
);
