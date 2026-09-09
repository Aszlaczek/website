import { en } from "./en";
import { pl } from "./pl";

export type Lang = "en" | "pl";
export type Translations = typeof en;

export const translations: Record<Lang, Translations> = { en, pl };
