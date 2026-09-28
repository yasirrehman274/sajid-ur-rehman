import type { Metadata } from "next";

import ButtonLink from "@/components/ButtonLink";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { awards } from "@/data/awards";
import { education, experience, languages, skillGroups } from "@/data/skills";
import { bookChapters, publicationCount } from "@/data/publications";
import { site } from "@/data/site";
import { resolveCvFile } from "@/lib/cv-file";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Sajid Ur Rehman — education, academic career, awards and grants, skills, publications and book chapters.",
  alternates: { canonical: "/cv" },
};

const cv = resolveCvFile();

export default function CvPage() {
  return (
    <>
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="Curriculum Vitae"
        description="The complete academic record, as published in the official curriculum vitae PDF."
        action={
          cv ? (
            <a
              href={cv.href}
              download={cv.fileName}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep sm:px-6 sm:py-3 sm:text-[0.9375rem]"
            >
              <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                <path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 14.5V16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.5" strokeLinecap="round" />
              </svg>
              Download CV
            </a>
          ) : null
        }
      />

      <section className="section-y bg-white" aria-labelledby="cv-download">
        <div className="container-page">
          {cv ? (
            <Reveal>
              <div className="card-base flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="min-w-0">
                  <h2 id="cv-download" className="text-lg font-semibold tracking-tight text-foreground">
                    Full CV (PDF)
                  </h2>
                  <p className="mt-2 max-w-xl text-pretty text-[0.875rem] leading-relaxed text-muted">
                    Seven pages covering personal data, academic qualifications, awards,
                    career details, research interests, skills, the full publication list,
                    book chapters and references.
                  </p>
                  <p className="mt-3 font-mono text-[0.6875rem] break-all text-subtle">
                    {cv.href}
                  </p>
                </div>
                <a
                  href={cv.href}
                  download={cv.fileName}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep sm:px-6 sm:py-3 sm:text-[0.9375rem]"
                >
                  <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <path d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14.5V16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.5" strokeLinecap="round" />
                  </svg>
                  Download
                </a>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="card-base px-6 py-14 text-center">
                <h2 id="cv-download" className="text-lg font-semibold tracking-tight text-foreground">
                  CV PDF not yet uploaded
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-[0.875rem] leading-relaxed text-muted">
                  Add the PDF to{" "}
                  <code className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-[0.75rem]">
                    public/cv/
                  </code>{" "}
                  and a download button will appear here automatically. The structured
                  summary below is available in the meantime.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Structured summary */}
      <section
        className="section-y border-y border-border-base bg-surface"
        aria-labelledby="cv-summary"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="cv-summary"
              eyebrow="Summary"
              title="Curriculum vitae at a glance"
              description="The same record, structured for reading on screen."
            />
          </Reveal>

          {/* Snapshot */}
          <Reveal className="mt-10">
            <dl className="grid gap-px overflow-hidden rounded-xl border border-border-base bg-border-base sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Journal articles", value: String(publicationCount) },
                { label: "Book chapters", value: String(bookChapters.length) },
                { label: "Awards & grants", value: String(awards.length) },
                { label: "Qualifications", value: String(education.length) },
              ].map((stat) => (
                <div key={stat.label} className="bg-white px-5 py-6">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Personal data */}
          <Reveal className="mt-10">
            <div className="card-base p-6 sm:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Personal data
              </h3>
              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    Name
                  </dt>
                  <dd className="mt-1.5 text-foreground">{site.fullName}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    Email
                  </dt>
                  <dd className="mt-1.5 flex flex-col gap-1">
                    {site.emails.map((email) => (
                      <a
                        key={email.href}
                        href={email.href}
                        className="text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                      >
                        {email.label}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-subtle">
                    Field of specialisation
                  </dt>
                  <dd className="mt-1.5 text-foreground">{site.specialization}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Education + career */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-base h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Academic qualifications
                </h3>
                <div className="mt-6">
                  <Timeline items={education} variant="education" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-base h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Academic positions held
                </h3>
                <div className="mt-6">
                  <Timeline items={experience} variant="career" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Awards */}
          <Reveal className="mt-6">
            <div className="card-base p-6 sm:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Academic awards and achievements
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {awards.map((award) => (
                  <li key={award.title} className="border-l-2 border-accent/20 pl-4">
                    <p className="text-pretty text-[0.9375rem] font-medium text-foreground">
                      {award.title}
                    </p>
                    <p className="mt-1 text-pretty text-[0.875rem] leading-relaxed text-muted">
                      {award.issuer}
                      {award.year ? ` · ${award.year}` : ""}
                      {award.detail ? ` · ${award.detail}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Skills + languages */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 70}>
                <div className="card-base h-full p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="rounded-full border border-border-base bg-surface px-3 py-1.5 text-[0.8125rem] leading-snug text-muted"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <div className="card-base h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  Languages
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {languages.map((language) => (
                    <li key={language.language}>
                      <p className="text-[0.9375rem] font-medium text-foreground">
                        {language.language}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted">
                        {language.proficiency}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-6">
            <div className="card-base flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <p className="text-pretty text-[0.9375rem] leading-relaxed text-muted">
                The full publication list — {publicationCount} articles and{" "}
                {bookChapters.length} book chapters — is available on the publications page.
              </p>
              <ButtonLink href="/publications" className="shrink-0">
                View publications
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
