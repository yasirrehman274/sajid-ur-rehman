import type { Metadata } from "next";

import AwardCard from "@/components/AwardCard";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import ProfileCard from "@/components/ProfileCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import SocialLinks from "@/components/SocialLinks";
import Timeline from "@/components/Timeline";
import { awards } from "@/data/awards";
import { education, experience, languages, skillGroups } from "@/data/skills";
import { publicationCount } from "@/data/publications";
import { researchInterests } from "@/data/research";

export const metadata: Metadata = {
  title: "About",
  description:
    "Profile, education, academic career, awards and research skills of Sajid Ur Rehman, materials science researcher at the School of Science, Minzu University of China.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Profile"
        description="Materials science researcher working on energy conversion and storage materials, using first-principles computation alongside synthesis and electrochemical characterisation."
        action={
          <ButtonLink href="/cv" variant="secondary">
            Download CV
          </ButtonLink>
        }
      />

      {/* Profile + specialisation */}
      <section className="section-y bg-white" aria-labelledby="profile">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-4">
              <ProfileCard />
            </Reveal>

            <Reveal className="lg:col-span-8" delay={80}>
              <h2 id="profile" className="section-title text-balance text-foreground">
                Research specialisation
              </h2>

              <div className="mt-6 space-y-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">
                <p>
                  My field of specialisation is materials science, with a focus on energy
                  conversion and storage materials. Alongside experimental work, I am a
                  computational codes expert in <strong className="font-medium text-foreground">VASP</strong> and{" "}
                  <strong className="font-medium text-foreground">CASTEP</strong>, applying
                  density-functional theory to electronic structure, phonons and optical
                  response.
                </p>
                <p>
                  I am currently a postdoctoral fellow at the School of Science, Minzu
                  University of China in Beijing, having completed my PhD at the Institute of
                  Semiconductor, University of Chinese Academy of Sciences (UCAS). Before
                  that I worked in the Centre for High Energy Physics at the University of the
                  Punjab and taught physics at secondary and university level in Lahore.
                </p>
                <p>
                  Across {publicationCount} peer-reviewed articles and{" "}
                  {awards.length} awards and grants, the work has concentrated on
                  two-dimensional materials, chalcogenides and doped carbon nitrides for
                  photocatalysis, electrocatalysis, thermoelectrics and energy storage.
                </p>
              </div>

              <h3 className="mt-10 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-subtle">
                Research interests
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {researchInterests.map((interest) => (
                  <li
                    key={interest}
                    className="rounded-full border border-border-base bg-surface px-3 py-1.5 text-[0.8125rem] leading-snug text-muted"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        className="section-y border-y border-border-base bg-surface"
        aria-labelledby="education"
      >
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Education</p>
              <h2 id="education" className="section-title mt-3 text-balance text-foreground">
                Academic qualifications
              </h2>
              <p className="lede mt-4 text-pretty text-[0.9375rem]">
                The CV does not record dates for these qualifications, so none are shown.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={80}>
              <Timeline items={education} variant="education" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-y bg-white" aria-labelledby="career">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Career</p>
              <h2 id="career" className="section-title mt-3 text-balance text-foreground">
                Academic positions held
              </h2>
              <p className="lede mt-4 text-pretty text-[0.9375rem]">
                From high-energy physics research in Lahore to a postdoctoral fellowship in
                Beijing.
              </p>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={80}>
              <Timeline items={experience} variant="career" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section
        id="awards"
        className="section-y scroll-mt-24 border-y border-border-base bg-surface"
        aria-labelledby="awards-heading"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="awards-heading"
              eyebrow="Awards"
              title="Awards, scholarships & grants"
              description="Competitive fellowships, university awards and principal-investigator funding."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
            {awards.map((award, index) => (
              <Reveal as="li" key={award.title} delay={index * 60}>
                <AwardCard award={award} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills + languages */}
      <section className="section-y bg-white" aria-labelledby="skills">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="skills"
              eyebrow="Skills"
              title="Skills & expertise"
              description="Computational and experimental capabilities applied across the research cycle."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 90}>
                <SkillCard group={group} />
              </Reveal>
            ))}
          </div>

          {/* Languages */}
          <Reveal className="mt-6">
            <div className="card-base p-6 sm:p-7">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                Language proficiency
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {languages.map((language) => (
                  <li
                    key={language.language}
                    className="flex flex-col gap-1 border-l-2 border-accent/20 pl-4"
                  >
                    <span className="text-[0.9375rem] font-medium text-foreground">
                      {language.language}
                    </span>
                    <span className="text-[0.875rem] leading-relaxed text-muted">
                      {language.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Profiles */}
      <section className="section-y border-t border-border-base bg-surface" aria-labelledby="profiles">
        <div className="container-page">
          <Reveal>
            <div className="card-base flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2
                  id="profiles"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Research profiles
                </h2>
                <p className="mt-2 max-w-xl text-pretty text-[0.875rem] leading-relaxed text-muted">
                  Google Scholar, ResearchGate and ORCID are listed on the CV but no profile
                  URLs are recorded. Links will appear here once the real addresses are
                  supplied.
                </p>
              </div>
              <div className="shrink-0">
                <SocialLinks
                  emptyHint={
                    <span className="text-[0.8125rem] text-subtle">No public profile links available yet.</span>
                  }
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
