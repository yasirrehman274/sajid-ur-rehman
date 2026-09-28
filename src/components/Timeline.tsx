import Link from "next/link";

import type { Education, Experience } from "@/types";

type TimelineProps = {
  items: Education[] | Experience[];
  /** Distinguishes degree entries from job entries. */
  variant: "education" | "career";
};

/**
 * Vertical academic timeline. Renders as an ordered list with a rail, so the
 * structure is meaningful without CSS and collapses gracefully on small screens.
 */
export default function Timeline({ items, variant }: TimelineProps) {
  const isEducation = variant === "education";

  return (
    <ol
      className="relative space-y-0"
      aria-label={isEducation ? "Academic qualifications" : "Academic positions held"}
    >
      {/* Rail */}
      <span
        aria-hidden="true"
        className="absolute left-[0.4375rem] top-2 bottom-2 w-px bg-border-base sm:left-[0.6875rem]"
      />

      {items.map((item, index) => {
        const degree = "degree" in item ? item.degree : undefined;
        const role = "role" in item ? item.role : undefined;
        const period = item.period ?? "";
        const heading = degree ?? role ?? "";
        const isCurrent = /\b(present|todate|current)\b/i.test(period);

        return (
          <li key={`${heading}-${index}`} className="relative pl-9 sm:pl-12">
            <div className="pb-9 last:pb-0">
              <span
                aria-hidden="true"
                className={[
                  "absolute left-0 top-1 grid size-[1.125rem] place-items-center rounded-full border-2 bg-white sm:size-6",
                  isCurrent ? "border-accent" : "border-border-strong",
                ].join(" ")}
              >
                {isEducation ? (
                  <svg viewBox="0 0 12 12" className={["size-2.5", isCurrent ? "text-accent" : "text-border-strong"].join(" ")} fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6 1.5 11 4.5 6 7.5 1 4.5z" strokeLinejoin="round" />
                    <path d="M3 6v2.5c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5V6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 12 12" className={["size-2.5", isCurrent ? "text-accent" : "text-border-strong"].join(" ")} fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="1.25" y="3.25" width="9.5" height="7" rx="1.25" />
                    <path d="M4 3.25V2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.25M1.25 6.25h9.5" strokeLinecap="round" />
                  </svg>
                )}
              </span>

              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-pretty text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground">
                  {heading}
                </h3>
                {period ? (
                  <p className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
                    {period}
                    {isCurrent ? (
                      <span className="ml-1.5 rounded-full border border-accent/25 px-1.5 py-0.5 text-[0.5625rem] text-accent">
                        Current
                      </span>
                    ) : null}
                  </p>
                ) : null}
              </div>

              <p className="mt-1.5 text-pretty text-[0.9375rem] leading-relaxed text-muted">
                {item.institution}
                <span className="text-subtle"> · {item.location}</span>
              </p>

              {"summary" in item && item.summary ? (
                <p className="mt-2.5 max-w-2xl text-pretty text-[0.875rem] leading-relaxed text-subtle">
                  {item.summary}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Convenience wrapper used by the home page academic-journey section. */
export function AcademicJourney({ items }: { items: Education[] }) {
  return (
    <div>
      <Timeline items={items} variant="education" />
      <p className="mt-6 text-[0.8125rem] text-subtle">
        Full academic record on the{" "}
        <Link href="/about" className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
          about page
        </Link>
        .
      </p>
    </div>
  );
}
