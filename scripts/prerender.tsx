import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createServer } from "vite";
import type { Lang } from "../src/Language";
import type * as ServerEntry from "../src/entry-server";

// Load through Vite so SSR and the browser use the same aliases and BASE_URL.
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false, watch: null }, appType: "custom" });
try {
  const { render, getSeo } = await server.ssrLoadModule("/src/entry-server.tsx") as typeof ServerEntry;
  const template = readFileSync(resolve("dist/index.html"), "utf8");
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error("Missing prerender root marker. Run vite build first.");
  const escape = (text: string) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const origin = "https://aszlaczek.github.io/website/";
  for (const [path, lang] of [["", "en"], ["en/", "en"], ["pl/", "pl"]] as const) {
    const seo = getSeo(lang as Lang);
    const meta = (key: string, value: string) => `<meta ${key.startsWith("og:") ? "property" : "name"}="${key}" content="${escape(value)}" />`;
    const head = [
      `<title>${escape(seo.title)}</title>`,
      meta("description", seo.description),
      `<link rel="canonical" href="${seo.url}" />`,
      ...["en", "pl", "x-default"].map((language) => `<link rel="alternate" hreflang="${language}" href="${origin}${language === "x-default" ? "en" : language}/" />`),
      meta("og:type", "website"), meta("og:url", seo.url), meta("og:title", seo.title),
      meta("og:description", seo.description), meta("og:locale", seo.locale),
      meta("og:locale:alternate", lang === "en" ? "pl_PL" : "en_GB"),
      meta("og:site_name", "Adrian Wzorek Portfolio"), meta("og:image", `${origin}og-image.jpg`),
      meta("og:image:width", "1200"), meta("og:image:height", "630"), meta("og:image:alt", "Adrian Wzorek — Portfolio"),
      meta("twitter:card", "summary_large_image"), meta("twitter:title", seo.title),
      meta("twitter:description", seo.description), meta("twitter:image", `${origin}og-image.jpg`),
      meta("twitter:image:alt", "Adrian Wzorek — Portfolio"),
      `<script id="portfolio-schema" type="application/ld+json">${JSON.stringify(seo.structuredData).replace(/</g, "\\u003c")}</script>`,
    ].join("\n    ");
    const html = template.replace('<html lang="en">', `<html lang="${lang}">`)
      .replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, head)
      .replace(marker, `<div id="root">${render(lang)}</div>`);
    const directory = resolve("dist", path);
    mkdirSync(directory, { recursive: true });
    writeFileSync(resolve(directory, "index.html"), html);
    console.log(`Prerendered ${path || "/"} (${lang})`);
  }
} finally {
  await server.close();
}
