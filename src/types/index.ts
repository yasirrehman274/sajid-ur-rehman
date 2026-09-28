/**
 * Shared domain types for the site.
 *
 * All content lives in `src/data/*` and is typed here so that presentation
 * components stay free of hard-coded strings.
 */

/** A journal article listed in the CV. */
export interface Publication {
  /** Title exactly as written in the CV. Never paraphrased. */
  title: string;
  /** Author list exactly as written in the CV. */
  authors: string;
  /** Journal name. */
  journal: string;
  /** Publication year. */
  year: number;
  /** Volume / issue / article number or page range, when stated in the CV. */
  details?: string;
  /** Real external link. Omitted unless a verified URL exists. */
  url?: string;
  /** Notes recorded in the CV, e.g. "Equal Contribution". */
  note?: string;
}

/** A book or book chapter from the CV. */
export interface BookChapter {
  title: string;
  authors: string;
  publisher: string;
  year: number;
  details?: string;
  note?: string;
}

/** A research area / theme the group works on. */
export interface ResearchArea {
  slug: string;
  title: string;
  /** Short summary used on cards. */
  summary: string;
  /** Longer copy used on the research page. */
  description: string;
  /** Topic keywords derived from the CV. */
  topics: string[];
  /** Optional verified image path under /public. */
  image?: string;
}

/** A computational or experimental tool from the CV skills section. */
export interface SoftwareTool {
  name: string;
  category: SoftwareCategory;
  description: string;
  /** Canonical project homepage. Only set when verified. */
  url?: string;
}

export type SoftwareCategory =
  | "Electronic Structure"
  | "Phonons & Thermal Transport"
  | "Machine Learning & Interatomic Potentials"
  | "Transport & Scattering"
  | "Programming";

/** A single skill bullet. */
export interface Skill {
  name: string;
  description?: string;
}

/** A named group of skills (computational / experimental). */
export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
}

/** An award, scholarship or grant from the CV. */
export interface Award {
  title: string;
  issuer: string;
  year?: string;
  /** Optional supporting detail, e.g. grant number or amount. */
  detail?: string;
}

/** A degree or academic qualification. */
export interface Education {
  degree: string;
  institution: string;
  location: string;
  /** Only set when the CV states a period. */
  period?: string;
}

/** An academic or professional position. */
export interface Experience {
  role: string;
  institution: string;
  location: string;
  /** Period exactly as recorded in the CV. */
  period: string;
  summary?: string;
}

/** A language proficiency entry. */
export interface Language {
  language: string;
  proficiency: string;
}

/** A news / research update entry. */
export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: NewsCategory;
  url?: string;
}

export type NewsCategory = "Publication" | "Award" | "Grant" | "Announcement";

/** A navigation entry. */
export interface NavItem {
  label: string;
  href: string;
}

/** An external profile link. Only rendered when a verified URL exists. */
export interface SocialLink {
  label: string;
  href: string;
}
