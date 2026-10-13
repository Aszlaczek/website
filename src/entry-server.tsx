import { renderToString } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";
import type { Lang } from "./Language";
export { getSeo } from "./lib/seo";

export function render(lang: Lang) {
  return renderToString(<LanguageProvider initialLang={lang}><App /></LanguageProvider>);
}
