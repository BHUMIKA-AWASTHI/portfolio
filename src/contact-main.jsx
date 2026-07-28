import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import "./styles/global.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="contact" />
      <ContactPage />
    </main>
  </StrictMode>,
);
