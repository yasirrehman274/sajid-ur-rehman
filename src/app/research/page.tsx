import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import ResearchCard from "@/components/ResearchCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { researchAreas, researchStatement } from "@/data/research";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in materials science: energy storage and conversion, photocatalysis, electrocatalysis, thermoelectric materials, metal-ion batteries and electronic & optical properties.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research in Materials Science"
        description={researchStatement}
      />

      {/* Research areas */}
      <section className="section-y bg-white" aria-labelledby="research-areas-title">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="research-areas-title"
              eyebrow="Research Areas"
              title="Where the work is focused"
              description="Each area combines density-functional-theory modelling with synthesis and characterisation. The descriptions below reflect the topics recorded in the CV and published record."
            />
          </Reveal>

          <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
            {researchAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 60}>
                <div id={area.slug} className="scroll-mt-28">
                  <ResearchCard area={area} variant="large" hideLink headingLevel="h2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section
        className="section-y border-y border-border-base bg-surface"
        aria-labelledby="research-toolchain"
      >
        <div className="container-page">
          <Reveal>
            <SectionHeading
              id="research-toolchain"
              eyebrow="Toolchain"
              title="How the research is done"
              description="A combined computational and experimental workflow: predict, synthesise, characterise, test."
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

      <CtaBand />
    </>
  );
}
