import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import BlogPage from "./pages/BlogPage";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <main className="site-shell">
      <Navbar currentPage="blog" />
      <BlogPage />
    </main>
  </StrictMode>,
);
