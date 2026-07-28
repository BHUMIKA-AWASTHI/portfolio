import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import SimplePage from "./pages/SimplePage";
import "./styles/pages.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="contact" />
      <SimplePage
        title="Let’s connect"
        text="Use the contact form on the home page to send a message."
      />
    </main>
  </StrictMode>,
);
