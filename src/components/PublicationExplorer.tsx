"use client";

import { useMemo, useState } from "react";

import PublicationCard from "@/components/PublicationCard";
import type { Publication } from "@/types";

type PublicationExplorerProps = {
  publications: Publication[];
  years: number[];
};

/**
 * Year filter plus free-text search over the publication list.
 *
 * All filtering happens on the client against data that is already serialised
 * into the page, so the route itself stays a statically prerendered Server
 * Component.
 */
export default function PublicationExplorer({ publications, years }: PublicationExplorerProps) {
  const [year, setYear] = useState<number | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return publications.filter((publication) => {
      if (year !== "all" && publication.year !== year) return false;
      if (!needle) return true;
      return (
        publication.title.toLowerCase().includes(needle) ||
        publication.authors.toLowerCase().includes(needle) ||
        publication.journal.toLowerCase().includes(needle)
      );
    });
  }, [publications, year, query]);

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const publication of filtered) {
      const bucket = map.get(publication.year);
      if (bucket) bucket.push(publication);
      else map.set(publication.year, [publication]);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  const hasFilters = year !== "all" || query.trim().length > 0;

  return (
    <div>
      {/* Controls */}
      <div className="card-base p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          {/* Year filter */}
          <div className="min-w-0">
            <p
              id="year-filter-label"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle"
            >
              Filter by year
            </p>
            <div
              role="group"
              aria-labelledby="year-filter-label"
              className="mt-3 flex flex-wrap gap-2"
            >
              <button
                type="button"
                onClick={() => setYear("all")}
                aria-pressed={year === "all"}
                className={[
                  "rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors",
                  year === "all"
                    ? "border-accent bg-accent text-white"
                    : "border-border-base bg-white text-muted hover:border-accent hover:text-accent",
                ].join(" ")}
              >
                All
              </button>
              {years.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setYear(option)}
                  aria-pressed={year === option}
                  className={[
                    "rounded-full border px-3.5 py-1.5 font-mono text-[0.8125rem] font-medium tabular-nums transition-colors",
                    year === option
                      ? "border-accent bg-accent text-white"
                      : "border-border-base bg-white text-muted hover:border-accent hover:text-accent",
                  ].join(" ")}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="w-full lg:max-w-xs">
            <label
              htmlFor="publication-search"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle"
            >
              Search
            </label>
            <div className="relative mt-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-subtle"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <circle cx="9" cy="9" r="5.5" />
                <path d="m13.5 13.5 3 3" strokeLinecap="round" />
              </svg>
              <input
                id="publication-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Title, author or journal"
                className="w-full rounded-full border border-border-base bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-subtle focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-base pt-4">
          <p aria-live="polite" className="text-[0.8125rem] text-muted">
            Showing <span className="font-medium text-foreground">{filtered.length}</span> of{" "}
            {publications.length} articles
          </p>
          {hasFilters ? (
            <button
              type="button"
              onClick={() => {
                setYear("all");
                setQuery("");
              }}
              className="text-[0.8125rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      {/* Results */}
      {grouped.length === 0 ? (
        <div className="card-base mt-6 px-6 py-16 text-center">
          <p className="text-[0.9375rem] font-medium text-foreground">No matching publications</p>
          <p className="mx-auto mt-2 max-w-md text-[0.875rem] leading-relaxed text-muted">
            No article matches the current year and search combination. Try a different
            search term or clear the year filter.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-12">
          {grouped.map(([groupYear, items]) => (
            <section key={groupYear} aria-labelledby={`year-${groupYear}`}>
              <div className="flex items-baseline gap-4">
                <h2
                  id={`year-${groupYear}`}
                  className="font-mono text-xl font-medium tabular-nums tracking-tight text-foreground sm:text-2xl"
                >
                  {groupYear}
                </h2>
                <span className="h-px flex-1 bg-border-base" aria-hidden="true" />
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  {items.length} {items.length === 1 ? "article" : "articles"}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-4">
                {items.map((publication) => (
                  <li key={publication.title}>
                    <PublicationCard publication={publication} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
