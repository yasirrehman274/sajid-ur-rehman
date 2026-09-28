import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SoftwareCard from "@/components/SoftwareCard";
import ButtonLink from "@/components/ButtonLink";
import { software, softwareCategoryOrder } from "@/data/software";

export const metadata: Metadata = {
  title: "Software & Tools",
  description:
    "Computational research software used by Sajid Ur Rehman: VASP, CASTEP, Phonopy, phono3py, HiPhive, MACE, BoltzTraP2, AMSET and Python for first-principles, phonon, transport and machine-learning workflows.",
  alternates: { canonical: "/software" },
};

/** Group tools by category, preserving the declared category order. */
const groups = softwareCategoryOrder
  .map((category) => ({
    category,
    tools: software.filter((tool) => tool.category === category),
  }))
  .filter((group) => group.tools.length > 0);

/** Per-category framing. Describes the role each group plays in the workflow. */
const categoryNotes: Record<string, string> = {
  "Electronic Structure":
    "Plane-wave density-functional theory for ground-state properties: relaxed structures, band structures, density of states, elastic constants and optical response.",
  "Phonons & Thermal Transport":
    "Harmonic and anharmonic lattice dynamics, used to obtain phonon dispersions, mode Grüneisen parameters, phonon lifetimes and lattice thermal conductivity.",
  "Machine Learning & Interatomic Potentials":
    "Force-constant regression and equivariant neural-network potentials that extend first-principles accuracy to larger and longer simulations.",
  "Transport & Scattering":
    "Boltzmann transport applied to DFT band structures, including carrier mobility, Seebeck coefficients and temperature-dependent transport across interfaces.",
  Programming:
    "Automation and analysis: scripting calculation workflows, post-processing output and handling spectroscopic and electrochemical datasets.",
};

export default function SoftwarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Software & Tools"
        title="Computational research tools"
        description="The software stack behind the computational side of the research — from first-principles electronic structure through anharmonic phonon transport to machine-learned interatomic potentials."
        action={
          <ButtonLink href="/cv" variant="secondary">
            View CV
          </ButtonLink>
        }
      />

      <section className="section-y bg-white" aria-labelledby="tool-stack">
        <div className="container-page">
          <h2 id="tool-stack" className="sr-only">
            Tool stack
          </h2>

          <div className="flex flex-col gap-14 lg:gap-16">
            {groups.map((group, groupIndex) => (
              <section key={group.category} aria-labelledby={`cat-${groupIndex}`}>
                <Reveal>
                  <div className="flex flex-col gap-3 border-b border-border-base pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <h2
                        id={`cat-${groupIndex}`}
                        className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                      >
                        {group.category}
                      </h2>
                      <p className="lede mt-2.5 text-pretty text-[0.9375rem]">
                        {categoryNotes[group.category]}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                      {group.tools.length}{" "}
                      {group.tools.length === 1 ? "tool" : "tools"}
                    </p>
                  </div>
                </Reveal>

                <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {group.tools.map((tool, index) => (
                    <Reveal as="li" key={tool.name} delay={index * 60}>
                      <SoftwareCard tool={tool} />
                    </Reveal>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
