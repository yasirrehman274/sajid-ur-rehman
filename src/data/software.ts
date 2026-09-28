import type { SoftwareTool } from "@/types";

/**
 * Computational and experimental tooling listed in CV section 5 "Skills &
 * Expertise". Descriptions describe what each tool is used for in the research;
 * they are functional descriptions of the software itself.
 */
export const software: SoftwareTool[] = [
  {
    name: "VASP",
    category: "Electronic Structure",
    description:
      "Ab-initio plane-wave package for density-functional-theory calculations of periodic solids: relaxation, band structure, density of states, phonons and elastic properties.",
    url: "https://www.vasp.at",
  },
  {
    name: "CASTEP",
    category: "Electronic Structure",
    description:
      "Plane-wave DFT code used for total-energy, optical-response and non-equilibrium calculations on solids, including work-function and dielectric properties.",
    url: "https://www.castep.org",
  },
  {
    name: "Phonopy",
    category: "Phonons & Thermal Transport",
    description:
      "Computational phonon tool for calculating phonon force constants, phonon band structures, dispersions, mode Grüneisen parameters and thermal properties within the harmonic and quasi-harmonic approximations.",
    url: "https://phonopy.github.io/phonopy",
  },
  {
    name: "phono3py",
    category: "Phonons & Thermal Transport",
    description:
      "Anharmonic phonon module built on phonopy for full third-order force constants, phonon-phonon scattering, cumulative thermal conductivity and Grüneisen ratios.",
    url: "https://phonopy.github.io/phono3py",
  },
  {
    name: "HiPhive",
    category: "Machine Learning & Interatomic Potentials",
    description:
      "High-performance force-constant generation framework that fits harmonic and anharmonic interatomic force constants from phonopy and DFT data.",
    url: "https://phonopy.github.io/hiphive",
  },
  {
    name: "MACE",
    category: "Machine Learning & Interatomic Potentials",
    description:
      "Equivariant graph neural-network interatomic potential for accurate machine-learned energies and forces with improved sample efficiency.",
    url: "https://github.com/ACEsuit/mace",
  },
  {
    name: "BoltzTraP2",
    category: "Transport & Scattering",
    description:
      "Python implementation of Boltzmann transport theory for semi-analytic calculation of electronic transport coefficients from DFT band structures.",
    url: "https://boltztrap2.readthedocs.io",
  },
  {
    name: "AMSET",
    category: "Transport & Scattering",
    description:
      "Electronic transport package coupling DFT with Boltzmann transport theory and Wannier interpolation to predict temperature-dependent transport in materials and heterostructures.",
    url: "https://amset.readthedocs.io",
  },
  {
    name: "Python",
    category: "Programming",
    description:
      "Primary language for automating calculation workflows, post-processing and analysing spectroscopic and electrochemical data.",
  },
];

/** Ordering used to lay out the software page. */
export const softwareCategoryOrder: SoftwareTool["category"][] = [
  "Electronic Structure",
  "Phonons & Thermal Transport",
  "Machine Learning & Interatomic Potentials",
  "Transport & Scattering",
  "Programming",
];
