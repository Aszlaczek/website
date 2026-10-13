import type { Translations } from "../Language";

export type { Lang } from "../Language";

export type TickerItem = (typeof import("./constants").TICKER_ITEMS)[number];

export type Project = (typeof import("./constants").PROJECTS)[number];

export interface ProjectCopy {
  tag: string;
  desc: string;
  problem: string;
  decisions: string[];
  outcome: string;
  note?: string;
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