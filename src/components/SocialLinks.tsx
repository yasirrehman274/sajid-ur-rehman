import type { ReactNode } from "react";

import type { SocialLink } from "@/types";

/**
 * Renders external profile links.
 *
 * The CV lists Google Scholar, ResearchGate and ORCID headings but contains no
 * URLs, so the list below is empty and nothing is rendered. Real links can be
 * added to `src/data/site.ts` (or here) once they are available — no social
 * profile URL is invented.
 */
export const socialLinks: SocialLink[] = [];

type SocialLinksProps = {
  links?: SocialLink[];
  className?: string;
  /** Shown when there is nothing to link to. */
  emptyHint?: ReactNode;
};

export default function SocialLinks({ links = socialLinks, className = "", emptyHint }: SocialLinksProps) {
  if (links.length === 0) {
    if (!emptyHint) return null;
    return <div className={className}>{emptyHint}</div>;
  }

  return (
    <ul className={["flex flex-wrap items-center gap-3", className].filter(Boolean).join(" ")}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer me"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
          >
            {link.label}
            <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
