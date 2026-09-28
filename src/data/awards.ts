import type { Award } from "@/types";

/** CV section 2(c) — academic awards, achievements and grants. */
export const awards: Award[] = [
  {
    title: "Principal Investigator",
    issuer: "Beijing Natural Science Foundation",
    year: "2024 – 2026",
    detail: "Grant No. IS24029 · 132K RMB",
  },
  {
    title: "CAS-TWAS Scholarship (PhD)",
    issuer: "University of Chinese Academy of Sciences (UCAS)",
    year: "2016 – 2020",
  },
  {
    title: "Chinese Government Scholarship for Outstanding International Students",
    issuer: "Ministry of Education of China",
    year: "2020",
  },
  {
    title: "Excellent International Graduate Award",
    issuer: "University of Chinese Academy of Sciences (UCAS)",
    year: "2020",
  },
  {
    title: "Excellent International Student Award",
    issuer: "University of Chinese Academy of Sciences (UCAS)",
    year: "2019",
  },
  {
    title: "Excellent International Student Award",
    issuer: "University of Chinese Academy of Sciences (UCAS)",
    year: "2018",
  },
];

/** Subset rendered on the home page. */
export const featuredAwards: Award[] = awards.slice(0, 4);
