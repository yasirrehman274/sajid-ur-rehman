import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import PublicationExplorer from "@/components/PublicationExplorer";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { bookChapters, publicationCount, publicationYears, publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed articles and book chapters by Sajid Ur Rehman on energy conversion and storage materials, photocatalysis, electrocatalysis, thermoelectrics and electronic and optical properties of materials.",
  alternates: { canonical: "/publications" },
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications"
        description={`${publicationCount} peer-reviewed journal articles and ${bookChapters.length} book chapters, transcribed from the official curriculum vitae. Titles, authors, journals and years are reproduced exactly as published.`}
      />

      <section className="section-y bg-white" aria-labelledby="articles">
        <div className="container-page">
          <h2 id="articles" className="sr-only">
            Journal articles
          </h2>
          <PublicationExplorer publications={publications} years={publicationYears} />
        </div>
      </section>

      {/* Book chapters */}
      <section
        className="section-y border-t border-border-base bg-surface"
        aria-labelledby="book-chapters"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="book-chapters"
              eyebrow="Book Chapters"
              title="Books & chapters"
              description="Invited and contributed chapters on metal oxide composites, group II–VI chalcogenides, graphitic carbon nitride nanocomposites and spinel oxides for energy conversion."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            {bookChapters.map((chapter, index) => (
              <Reveal as="li" key={chapter.title} delay={index * 60}>
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
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
