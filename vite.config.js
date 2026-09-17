import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/", // repository name
  plugins: [react()],
});
