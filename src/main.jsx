import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main>
      <Navbar currentPage="home" />
      <HomePage />
    </main>
  </StrictMode>,
);
