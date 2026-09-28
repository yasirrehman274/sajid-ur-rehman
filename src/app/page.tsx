import AwardCard from "@/components/AwardCard";
import ButtonLink from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import Hero from "@/components/Hero";
import PublicationCard from "@/components/PublicationCard";
import ResearchCard from "@/components/ResearchCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { AcademicJourney } from "@/components/Timeline";
import { featuredAwards } from "@/data/awards";
import { publications, publicationCount } from "@/data/publications";
import { researchAreas, researchStatement } from "@/data/research";
import { education, skillGroups } from "@/data/skills";

/** The most recent articles, taken from the CV-derived publication list. */
const selectedPublications = publications.slice(0, 4);

export default function Home() {
  return (
    <>
      <Hero />

      {/* 1 — Research focus */}
      <section className="section-y bg-white" aria-labelledby="research-focus">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h2"
              id="research-focus"
              eyebrow="Research Focus"
              title="Six connected research areas"
              description="The programme spans theory and experiment: atomistic modelling guides material design, and synthesised materials are used to verify the predictions."
              action={
                <ButtonLink href="/research" variant="secondary">
                  All research
                </ButtonLink>
              }
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {researchAreas.map((area, index) => (
              <Reveal as="li" key={area.slug} delay={index * 70}>
                <ResearchCard area={area} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 2 — Research introduction */}
      <section className="section-y border-y border-border-base bg-surface" aria-labelledby="research-intro">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">Approach</p>
              <h2
                id="research-intro"
                className="section-title mt-3 text-balance text-foreground"
              >
                Computational and experimental materials science, in service of energy
              </h2>
              <div className="mt-6 space-y-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">
                <p>{researchStatement}</p>
                <p>
                  Much of the work begins with a first-principles calculation: screening
                  candidate compositions and structures, resolving band alignment and
                  absorption edges, or evaluating lattice thermal conductivity. Those
                  predictions then guide synthesis — hydrothermal and microwave routes that
                  produce layered sulfides, tellurides, oxysalts and doped carbon nitrides —
                  and are then checked against XRD, SEM and TEM imaging and electrochemical
                  measurements.
                </p>
                <p>
                  The through-line is energy: capturing photons, separating charge,
                  driving reactions and storing the result. That means close attention to
                  band structure and optical response, to carrier mobility and phonon
                  transport, and to the interface physics that determines whether an
                  excited carrier survives long enough to do useful work.
                </p>
              </div>
            </Reveal>

            {/* Method pillars */}
            <Reveal className="lg:col-span-5" delay={100}>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    label: "First-principles modelling",
                    body: "Density-functional theory with VASP and CASTEP for structure, band structure, phonons and optical response.",
                  },
                  {
                    label: "Anharmonic transport",
                    body: "Phonopy, phono3py, HiPhive and MACE for lattice thermal conductivity and machine-learned force fields.",
                  },
                  {
                    label: "Synthesis & characterisation",
                    body: "Hydrothermal and microwave synthesis with XRD, SEM and TEM analysis.",
                  },
                  {
                    label: "Electrochemical testing",
                    body: "Electrochemical workstation measurements, LAND cell testing and glove-box assembly.",
                  },
                ].map((pillar) => (
                  <li key={pillar.label} className="card-base p-5">
                    <p className="text-[0.9375rem] font-semibold tracking-tight text-foreground">
                      {pillar.label}
                    </p>
                    <p className="mt-1.5 text-pretty text-[0.875rem] leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — Computational & experimental expertise */}
      <section className="section-y bg-white" aria-labelledby="expertise">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h2"
              id="expertise"
              eyebrow="Expertise"
              title="Computational & experimental expertise"
              description="Tools applied across the whole research cycle, from crystal and band structure to synthesised, tested devices."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 90}>
                <SkillCard group={group} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Selected publications */}
      <section className="section-y border-y border-border-base bg-surface" aria-labelledby="selected-publications">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h2"
              id="selected-publications"
              eyebrow="Selected Publications"
              title="Recent articles"
              description={`${publicationCount} peer-reviewed articles are listed in the CV, most recently in Surfaces and Interfaces, Inorganic Chemistry Frontiers and Colloids and Surfaces A.`}
              action={
                <ButtonLink href="/publications" variant="secondary">
                  View all publications
                </ButtonLink>
              }
            />
          </Reveal>

          <ul className="mt-12 flex flex-col gap-4 lg:mt-14">
            {selectedPublications.map((publication, index) => (
              <Reveal as="li" key={publication.title} delay={index * 70}>
                <PublicationCard publication={publication} index={index + 1} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Awards & recognition */}
      <section className="section-y bg-white" aria-labelledby="awards">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              as="h2"
              id="awards"
              eyebrow="Recognition"
              title="Awards & grants"
              description="Scholarships, university awards and competitive research funding."
              action={
                <ButtonLink href="/about#awards" variant="secondary">
                  Full record
                </ButtonLink>
              }
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
            {featuredAwards.map((award, index) => (
              <Reveal as="li" key={award.title} delay={index * 70}>
                <AwardCard award={award} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Academic journey */}
      <section className="section-y border-t border-border-base bg-surface" aria-labelledby="journey">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">Academic Journey</p>
              <h2
                id="journey"
                className="section-title mt-3 text-balance text-foreground"
              >
                From computational physics to materials science
              </h2>
              <p className="lede mt-4 text-pretty">
                A computational physics degree led into a computer science MS, an M.Phil in
                physics, a PhD at the Institute of Semiconductor, UCAS — and now a
                postdoctoral fellowship at Minzu University of China.
              </p>
              <ButtonLink href="/about" variant="secondary" className="mt-7">
                About &amp; career
              </ButtonLink>
            </Reveal>

            <Reveal className="lg:col-span-8" delay={100}>
              <AcademicJourney items={education} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Call to action */}
      <CtaBand />
    </>
  );
}
