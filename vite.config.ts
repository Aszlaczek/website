import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

const base = process.env.GITHUB_ACTIONS ? "/website/" : "/";

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    process.env.ANALYZE ? visualizer({ filename: "dist/stats.html", gzipSize: true }) : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
