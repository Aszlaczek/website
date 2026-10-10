import type { Translations } from "../Language";

export type Lang = "en" | "pl";

export type TickerItem = (typeof import("./constants").TICKER_ITEMS)[number];

export interface Project {
  num: string;
  title: string;
  year: string;
  tone: string;
  stack: readonly string[];
}

export interface Stat {
  value: string;
  key: keyof Translations["stats"];
}

export type NavLink = (typeof import("./constants").NAV_LINKS)[number];

export interface Experience {
  num: string;
  title: string;
  company: string;
  date: string;
  desc: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SoftSkill {
  label: string;
  text: string;
}