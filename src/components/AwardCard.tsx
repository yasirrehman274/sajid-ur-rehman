import type { Award } from "@/types";

/** Highlighted award / grant entry. */
export default function AwardCard({ award }: { award: Award }) {
  const isGrant = /principal investigator|grant/i.test(award.title);

  return (
    <article className="card-base flex h-full flex-col p-5 hover:-translate-y-0.5 hover:border-border-strong sm:p-6">
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={[
            "mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border",
            isGrant ? "border-accent/25 bg-accent text-white" : "border-accent/20 bg-accent-soft text-accent",
          ].join(" ")}
        >
          {isGrant ? (
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M10 2.5v15M5 6.5c0-1.4 2.2-2.5 5-2.5s5 1.1 5 2.5-2.2 2-5 2-5 .6-5 2 2.2 2 5 2 5 1.1 5 2.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M10 2.5 4 5.2v4.4c0 3.6 2.5 6.6 6 7.9 3.5-1.3 6-4.3 6-7.9V5.2z" strokeLinejoin="round" />
              <path d="m7.3 10 1.9 1.9 3.5-3.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-pretty text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground">
            {award.title}
          </h3>
          <p className="mt-1.5 text-pretty text-[0.8125rem] leading-relaxed text-muted">
            {award.issuer}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border-base pt-3.5">
        {award.year ? (
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
            {award.year}
          </span>
        ) : null}
        {award.detail ? (
          <span className="text-[0.75rem] text-subtle">{award.detail}</span>
        ) : null}
      </div>
    </article>
  );
}
