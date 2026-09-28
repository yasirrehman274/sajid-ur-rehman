import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sajid Ur Rehman, materials science researcher at the School of Science, Minzu University of China, for academic collaboration and research enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={site.fullName}
        description="Get in touch about research collaboration, joint supervision, invited talks or access to published datasets and calculation inputs."
      />

      <section className="section-y bg-white" aria-labelledby="contact-details">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Email */}
            <Reveal className="lg:col-span-7">
              <h2 id="contact-details" className="section-title text-balance text-foreground">
                Email
              </h2>
              <p className="lede mt-4 max-w-2xl text-pretty">
                Both addresses reach me directly. Messages are answered as soon as
                possible.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {site.emails.map((email) => (
                  <li key={email.href}>
                    <a
                      href={email.href}
                      className="card-base group flex flex-col gap-2 p-5 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgb(11_21_36/0.25)] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
                    >
                      <span className="flex items-center gap-3.5">
                        <span
                          aria-hidden="true"
                          className="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent-soft"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="size-4 text-accent"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          >
                            <rect x="2.25" y="4" width="15.5" height="12" rx="2" />
                            <path d="m3 5.5 7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[0.9375rem] font-medium text-foreground sm:text-base">
                            {email.label}
                          </span>
                          {email.primary ? (
                            <span className="mt-1 block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
                              Primary
                            </span>
                          ) : (
                            <span className="mt-1 block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
                              Institutional
                            </span>
                          )}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden shrink-0 items-center gap-1.5 text-[0.8125rem] font-medium text-accent sm:inline-flex"
                      >
                        Send email
                        <svg viewBox="0 0 16 16" className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Collaboration */}
            <Reveal className="lg:col-span-5" delay={80}>
              <div className="relative isolate h-full overflow-hidden rounded-2xl border border-accent/15 bg-[radial-gradient(120%_140%_at_10%_0%,#0f4c81_0%,#0a3760_55%,#082c4c_100%)] p-6 sm:p-8">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute inset-0 rule-grid opacity-25 [mask-image:radial-gradient(ellipse_70%_90%_at_20%_10%,#000,transparent)]" />
                  <div className="absolute -right-20 -bottom-24 size-80 rounded-full bg-teal/20 blur-3xl" />
                </div>

                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Collaboration
                </h2>
                <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-white/75">
                  I am interested in collaborative work on energy conversion and storage
                  materials, photocatalysis and electrocatalysis, thermoelectric materials
                  and two-dimensional materials. I am also glad to discuss joint supervision
                  for graduate students and to host visiting researchers.
                </p>

                <dl className="mt-8 space-y-5 border-t border-white/15 pt-6 text-[0.875rem]">
                  <div>
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                      Affiliation
                    </dt>
                    <dd className="mt-1.5 text-pretty text-white">
                      School of Science, Minzu University of China
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                      Location
                    </dt>
                    <dd className="mt-1.5 text-white">{site.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/55">
                      Field
                    </dt>
                    <dd className="mt-1.5 text-pretty text-white">{site.specialization}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Profiles */}
          <Reveal className="mt-12">
            <div className="card-base p-6 sm:p-7">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Research profiles
              </h2>
              <p className="mt-2 max-w-2xl text-pretty text-[0.875rem] leading-relaxed text-muted">
                Google Scholar, ResearchGate, ORCID and LinkedIn are not listed with URLs in
                the CV, so no links are shown. Verified addresses can be added to enable
                them here and in the site footer.
              </p>
              <SocialLinks
                className="mt-5"
                emptyHint={
                  <span className="text-[0.8125rem] text-subtle">
                    No public profile links available yet.
                  </span>
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Note on the contact form */}
      <section className="section-y border-t border-border-base bg-surface" aria-labelledby="contact-note">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="contact-note"
              eyebrow="Note"
              title="Email is the fastest route"
              description="This site has no server-side contact form, so nothing you type could be delivered. Email links are used instead: they open your own mail client and go straight to the address above, with no third-party service in between."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
