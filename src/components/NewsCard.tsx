import type { NewsItem } from "@/types";

const categoryStyles: Record<NewsItem["category"], string> = {
  Publication: "border-accent/25 bg-accent-soft text-accent",
  Award: "border-accent/25 bg-accent text-white",
  Grant: "border-teal/25 bg-teal/10 text-teal",
  Announcement: "border-border-strong bg-surface text-muted",
};

/** A single news / research-update entry. */
export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card-base flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <time
          dateTime={item.date}
          className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle"
        >
          {item.date}
        </time>
        <span
          className={[
            "rounded-full border px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em]",
            categoryStyles[item.category],
          ].join(" ")}
        >
          {item.category}
        </span>
      </div>

      <h2 className="mt-3.5 text-pretty text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground">
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {item.title}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          item.title
        )}
      </h2>

      <p className="mt-2.5 flex-1 text-pretty text-[0.9375rem] leading-relaxed text-muted">
        {item.summary}
      </p>
    </article>
  );
}
