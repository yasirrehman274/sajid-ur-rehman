import type { NavItem } from "@/types";

/**
 * Canonical site-wide configuration.
 *
 * Only information that appears in the CV is stored here. Nothing is invented:
 * social/ORCID/Scholar URLs are intentionally left empty because the CV lists
 * those fields without values.
 */
export const site = {
  name: "Sajid Ur Rehman",
  fullName: "SAJID UR REHMAN",
  role: "PhD Researcher",
  discipline: "Materials Science",
  tagline: "Energy Conversion & Storage Materials",
  specialization:
    "Materials Science | Energy Conversion and Storage Materials | Computational Materials Science",
  description:
    "Official academic website of Sajid Ur Rehman, a materials science researcher working on energy conversion and storage materials, photocatalysis, electrocatalysis, thermoelectric materials and electronic/optical properties, using first-principles computational methods (VASP, CASTEP) together with hydrothermal and microwave synthesis and electrochemical characterisation.",
  location: "Beijing, China",
  emails: [
    { label: "sajidurehman@live.com", href: "mailto:sajidurehman@live.com", primary: true },
    { label: "sajid@muc.edu.cn", href: "mailto:sajid@muc.edu.cn", primary: false },
  ] as const,
  /** Path of the CV PDF served from /public. */
  cvPath: "/cv/sajid-ur-rehman-cv.pdf",
  cvFileName: "sajid-ur-rehman-cv.pdf",
} as const;

/** Primary navigation, in order. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Software & Tools", href: "/software" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "CV", href: "/cv" },
];

/** Short navigation used in the footer. */
export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Public URL of the deployed site, used for canonical and Open Graph metadata.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in the deployment environment (Vercel project
 * settings, or a local `.env.local`). The localhost fallback exists so a fresh
 * clone builds and type-checks without configuration; it must be replaced with
 * the real domain before deploying, otherwise canonical and social tags will
 * point at localhost.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
