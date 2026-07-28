import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import WorkPage from "./pages/WorkPage";
import "./styles/global.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="work" />
      <WorkPage />
    </main>
  </StrictMode>,
);
