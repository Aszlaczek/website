import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import { LanguageProvider } from "../src/context/LanguageContext";

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
