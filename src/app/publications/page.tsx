import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import PublicationExplorer from "@/components/PublicationExplorer";
import {
  bookChapters,
  publicationCount,
  publicationFilterYears,
  publications,
} from "@/data/publications";

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
          <PublicationExplorer
            publications={publications}
            bookChapters={bookChapters}
            years={publicationFilterYears}
          />
        </div>
      </section>
    </>
  );
}