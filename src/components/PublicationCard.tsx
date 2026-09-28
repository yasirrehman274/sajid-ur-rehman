import type { Publication } from "@/types";

type PublicationCardProps = {
  publication: Publication;
  /** Index within the overall list, shown as a subtle reference number. */
  index?: number;
};

/**
 * A single publication entry. Long titles wrap naturally — no truncation and no
 * horizontal overflow. An external "Read Article" action only appears when a
 * verified URL exists in the data.
 */
export default function PublicationCard({ publication, index }: PublicationCardProps) {
  const { title, authors, journal, year, details, url, note } = publication;
  const reference = details ? `${journal} ${details}` : journal;

  return (
    <article className="card-base group relative p-5 hover:border-border-strong sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        {/* Year / index rail */}
        <div className="flex shrink-0 items-center gap-3 sm:w-24 sm:flex-col sm:items-start sm:gap-1.5">
          <span className="font-mono text-sm font-medium tabular-nums text-accent">{year}</span>
          {typeof index === "number" ? (
            <span className="font-mono text-[0.6875rem] tabular-nums text-subtle">
              [{String(index).padStart(2, "0")}]
            </span>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-pretty text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
            {title}
          </h3>

          <p className="mt-2.5 text-pretty text-[0.875rem] leading-relaxed text-muted">{authors}</p>

          <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <cite className="text-[0.8125rem] font-medium not-italic text-foreground">
              {reference}
            </cite>
            {note ? (
              <span className="rounded-full border border-border-base bg-surface px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
                {note}
              </span>
            ) : null}
          </div>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border-strong px-3.5 py-1.5 text-[0.8125rem] font-medium text-accent transition-colors hover:border-accent hover:bg-accent-soft"
            >
              Read Article
              <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sr-only">— opens in a new tab</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
