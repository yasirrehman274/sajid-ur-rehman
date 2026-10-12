"use client";

import { useMemo, useState } from "react";

import BookChapterCard from "@/components/BookChapterCard";
import PublicationCard from "@/components/PublicationCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { BookChapter, Publication } from "@/types";

type PublicationExplorerProps = {
  publications: Publication[];
  bookChapters: BookChapter[];
  years: number[];
};

type YearGroup<T> = [year: number, items: T[]];

/** Buckets items by year, newest first. */
function groupByYear<T extends { year: number }>(items: T[]): YearGroup<T>[] {
  const map = new Map<number, T[]>();
  for (const item of items) {
    const bucket = map.get(item.year);
    if (bucket) bucket.push(item);
    else map.set(item.year, [item]);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}

/**
 * Year filter over the publication archive.
 *
 * Journal articles and book chapters are filtered independently by the same
 * selected year, so the two lists always stay in sync: a year can show
 * articles, chapters, both, or neither. Each list is grouped by year straight
 * from the data — no per-year branching — so adding a new article or chapter
 * is enough to make it appear.
 *
 * All work happens on the client against data already serialised into the
 * page, so /publications stays a statically prerendered Server Component.
 */
export default function PublicationExplorer({
  publications,
  bookChapters,
  years,
}: PublicationExplorerProps) {
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const isAll = selectedYear === "all";

  const articleGroups = useMemo(
    () =>
      groupByYear(
        publications.filter(
          (publication) => isAll || publication.year === selectedYear,
        ),
      ),
    [publications, isAll, selectedYear],
  );

  const chapterGroups = useMemo(
    () =>
      groupByYear(
        bookChapters.filter((chapter) => isAll || chapter.year === selectedYear),
      ),
    [bookChapters, isAll, selectedYear],
  );

  const articleCount = articleGroups.reduce((total, [, items]) => total + items.length, 0);
  const chapterCount = chapterGroups.reduce((total, [, items]) => total + items.length, 0);

  return (
    <div>
      {/* Year filter */}
      <div className="card-base p-5 sm:p-6">
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
            onClick={() => setSelectedYear("all")}
            aria-pressed={isAll}
            className={[
              "rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium transition-colors",
              isAll
                ? "border-accent bg-accent text-white"
                : "border-border-base bg-white text-muted hover:border-accent hover:text-accent",
            ].join(" ")}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              aria-pressed={selectedYear === year}
              className={[
                "rounded-full border px-3.5 py-1.5 font-mono text-[0.8125rem] font-medium tabular-nums transition-colors",
                selectedYear === year
                  ? "border-accent bg-accent text-white"
                  : "border-border-base bg-white text-muted hover:border-accent hover:text-accent",
              ].join(" ")}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border-base pt-4">
          <p aria-live="polite" className="text-[0.8125rem] text-muted">
            Showing <span className="font-medium text-foreground">{articleCount}</span> of{" "}
            {publications.length} articles
          </p>
          {!isAll ? (
            <button
              type="button"
              onClick={() => setSelectedYear("all")}
              className="text-[0.8125rem] font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              Clear filter
            </button>
          ) : null}
        </div>
      </div>

      {/* Journal articles, grouped by year */}
      {articleCount === 0 ? (
        <div className="card-base mt-6 px-6 py-16 text-center">
          <p className="text-[0.9375rem] font-medium text-foreground">No articles for this year</p>
          <p className="mx-auto mt-2 max-w-md text-[0.875rem] leading-relaxed text-muted">
            There are no journal articles recorded for {selectedYear}. Choose another year, or
            select all to see the full list.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-col gap-12">
          {articleGroups.map(([year, items]) => (
            <section key={year} aria-labelledby={`year-${year}`}>
              <div className="flex items-baseline gap-4">
                <h2
                  id={`year-${year}`}
                  className="font-mono text-xl font-medium tabular-nums tracking-tight text-foreground sm:text-2xl"
                >
                  {year}
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

      {/* Book chapters, filtered by the same year. Rendered only when the
          selected year actually has at least one chapter, so no empty section
          or placeholder card is ever shown. */}
      {chapterCount > 0 ? (
        <section
          className="mt-16 border-t border-border-base pt-14 sm:mt-20 sm:pt-16"
          aria-labelledby="book-chapters"
        >
          <SectionHeading
            id="book-chapters"
            eyebrow="Book Chapters"
            title="Books & chapters"
            description="Invited and contributed chapters on metal oxide composites, group II–VI chalcogenides, graphitic carbon nitride nanocomposites and spinel oxides for energy conversion."
          />

          <div className="mt-12 flex flex-col gap-12">
            {chapterGroups.map(([year, items]) => (
              <section key={year} aria-labelledby={`chapter-year-${year}`}>
                <div className="flex items-baseline gap-4">
                  <h3
                    id={`chapter-year-${year}`}
                    className="font-mono text-xl font-medium tabular-nums tracking-tight text-foreground sm:text-2xl"
                  >
                    {year}
                  </h3>
                  <span className="h-px flex-1 bg-border-base" aria-hidden="true" />
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                    {items.length} {items.length === 1 ? "chapter" : "chapters"}
                  </span>
                </div>

                <ul className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-6">
                  {items.map((chapter) => (
                    <Reveal as="li" key={chapter.title} delay={0}>
                      <BookChapterCard chapter={chapter} />
                    </Reveal>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
