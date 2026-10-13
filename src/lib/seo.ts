import { PROJECTS } from "../data/constants";
import { translations, type Lang } from "../Language";

export const SITE_URL = "https://aszlaczek.github.io/website/";

export function getSeo(lang: Lang) {
  const t = translations[lang];
  const title = `Adrian Wzorek — Junior Software Engineer | React & TypeScript`;
  const description = lang === "pl"
    ? "Portfolio Adriana Wzorka: React, TypeScript i Next.js. Aplikacje full-stack, automatyzacja pracy i własny parser wyrażeń. Projekty, kod i CV."
    : "Adrian Wzorek’s portfolio: React, TypeScript and Next.js. Full-stack apps, workplace tools and a custom expression parser. Projects, source code and CV.";
  const url = `${SITE_URL}${lang}/`;
  const person = {
    "@type": "Person", "@id": `${SITE_URL}#person`, name: "Adrian Wzorek",
    url: SITE_URL, jobTitle: "Junior Software Engineer",
    sameAs: ["https://github.com/Aszlaczek", "https://www.linkedin.com/in/adrian-wzorek-902572309/"],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [person, {
      "@type": "ProfilePage", "@id": url, url, name: title,
      description, inLanguage: lang, mainEntity: { "@id": person["@id"] },
    }, {
      "@type": "ItemList", name: t.projects.section,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem", position: index + 1,
        item: { "@type": "SoftwareSourceCode", name: project.title,
          description: t.projects.items[project.id].desc,
          url: project.demo, codeRepository: project.code,
          author: { "@id": person["@id"] },
        },
      })),
    }],
  };
  return { title, description, url, structuredData, locale: lang === "pl" ? "pl_PL" : "en_GB" };
}

export function applySeo(lang: Lang) {
  const seo = getSeo(lang);
  document.title = seo.title;
  const values: Record<string, string> = {
    'meta[name="description"]': seo.description,
    'meta[property="og:title"]': seo.title,
    'meta[property="og:description"]': seo.description,
    'meta[property="og:url"]': seo.url,
    'meta[property="og:locale"]': seo.locale,
    'meta[property="og:locale:alternate"]': lang === "pl" ? "en_GB" : "pl_PL",
    'meta[name="twitter:title"]': seo.title,
    'meta[name="twitter:description"]': seo.description,
  };
  for (const [selector, content] of Object.entries(values)) {
    document.querySelector(selector)?.setAttribute("content", content);
  }
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", seo.url);
  const schema = document.getElementById("portfolio-schema");
  if (schema) schema.textContent = JSON.stringify(seo.structuredData);
}
