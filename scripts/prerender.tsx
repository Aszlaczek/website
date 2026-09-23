import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { LanguageProvider } from "../src/context/LanguageContext";

const storage = new Map<string, string>();

const g = globalThis as Record<string, unknown>;
if (typeof g.localStorage === "undefined") {
  g.localStorage = {
    getItem: (k: string) => storage.get(k) ?? null,
    setItem: (k: string, v: string) => void storage.set(k, v),
    removeItem: (k: string) => void storage.delete(k),
  };
}
if (typeof g.navigator === "undefined") {
  g.navigator = { language: "en" };
} else if (!(g.navigator as { language?: string }).language) {
  try {
    Object.defineProperty(g.navigator, "language", { value: "en", configurable: true });
  } catch {
    /* navigator.language is not configurable — LanguageContext falls back to "en" */
  }
}

const appHtml = renderToString(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

const indexPath = resolve("dist/index.html");
if (!existsSync(indexPath)) {
  console.error("dist/index.html not found — run `vite build` first.");
  process.exit(1);
}

const template = readFileSync(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  console.error('Prerender marker `<div id="root"></div>` not found in dist/index.html.');
  process.exit(1);
}

const out = template.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, out);

const text = appHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
console.log(`Prerendered ${text.length} chars of HTML content into dist/index.html`);
