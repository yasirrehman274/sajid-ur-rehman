import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import NewsCard from "@/components/NewsCard";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { hasNews, news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Research updates and academic news from Sajid Ur Rehman, materials science researcher at Minzu University of China.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="News & updates"
        description="Research updates and academic announcements from the group."
      />

      <section className="section-y bg-white" aria-labelledby="news-list">
        <div className="container-page">
          <h2 id="news-list" className="sr-only">
            News items
          </h2>

          {hasNews ? (
            <ul className="grid gap-5 lg:grid-cols-2 lg:gap-6">
              {news.map((item, index) => (
                <Reveal as="li" key={item.id} delay={index * 60}>
                  <NewsCard item={item} />
                </Reveal>
              ))}
            </ul>
          ) : (
            /* Professional empty state — no news has been recorded, and none is
               invented. Entries added to src/data/news.ts render here. */
            <div className="card-base mx-auto max-w-2xl px-6 py-16 text-center sm:py-20">
              <span
                aria-hidden="true"
                className="mx-auto grid size-12 place-items-center rounded-full border border-accent/20 bg-accent-soft"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="5" width="18" height="15" rx="2" />
                  <path d="M7 9.5h10M7 13h7M7 16.5h4" strokeLinecap="round" />
                </svg>
              </span>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                Research updates and academic news will be posted here.
              </h3>
              <p className="mx-auto mt-3 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-muted">
                There are no news items to show at the moment. In the meantime, the
                publication record and research profile are the most current summary of the
                work.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/publications"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
                >
                  View publications
                </a>
                <a
                  href="/research"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Explore research
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
