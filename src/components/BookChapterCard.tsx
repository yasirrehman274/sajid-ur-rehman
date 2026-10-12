import type { BookChapter } from "@/types";

type BookChapterCardProps = {
  chapter: BookChapter;
};

/** A single book chapter. Book chapters are presented separately from journal articles. */
export default function BookChapterCard({ chapter }: BookChapterCardProps) {
  return (
    <article className="card-base flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
          {chapter.year}
        </span>
        {chapter.note ? (
          <span className="rounded-full border border-border-base bg-white px-2.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
            {chapter.note}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-pretty text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground">
        {chapter.title}
      </h3>
      <p className="mt-2.5 flex-1 text-pretty text-[0.875rem] leading-relaxed text-muted">
        {chapter.authors}
      </p>
      <p className="mt-4 border-t border-border-base pt-3.5 text-[0.8125rem] text-subtle">
        {chapter.publisher}
        {chapter.details ? ` · ${chapter.details}` : ""}
      </p>
    </article>
  );
}
