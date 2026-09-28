import type { ResearchArea } from "@/types";

/**
 * Research areas, derived from CV section 4 "Research Interests":
 *   Energy Storage and Conversion Devices · Thermoelectric Properties ·
 *   Electronic and Optical properties · Metal Ion Batteries ·
 *   Photocatalysis & Electrocatalysis
 *
 * No research projects, grants or programmes are described here beyond what
 * the CV states.
 */
export const researchAreas: ResearchArea[] = [
  {
    slug: "energy-storage-conversion",
    title: "Energy Storage & Conversion",
    summary:
      "Materials for lithium-ion anodes, spinel and chalcogenide electrodes, and the conversion of solar energy into chemical or electrical form.",
    description:
      "Work in this area targets electrode and catalyst materials for storing and converting energy efficiently. Synthetic routes such as hydrothermal and microwave synthesis are combined with first-principles modelling to understand how composition, phase and structure control electrochemical performance — including high-capacity anodes for lithium-ion batteries and metal oxide–carbon composites for energy storage applications.",
    topics: [
      "Lithium-ion battery anodes",
      "Metal oxide–carbon composites",
      "Spinel oxides",
      "Solar energy conversion",
      "Electrochemical energy storage",
    ],
  },
  {
    slug: "photocatalysis",
    title: "Photocatalysis",
    summary:
      "First-principles design of visible-light photocatalysts for overall water splitting and CO₂ reduction.",
    description:
      "Photocatalytic materials are screened and designed at the atomic scale, focusing on two-dimensional monolayers, van der Waals heterostructures and doped graphitic carbon nitride that can drive overall water splitting and CO₂ reduction under visible light. Interface engineering — built-in electric fields, dopant-induced charge separation and type-I/type-II band alignment transitions controlled by strain and external fields — is used to extend absorption into the visible range and raise carrier mobility.",
    topics: [
      "Overall water splitting",
      "CO₂ reduction",
      "2D monolayers & vdW heterostructures",
      "Built-in interfacial electric fields",
      "g-C₃N₄ photocatalysis",
    ],
  },
  {
    slug: "electrocatalysis",
    title: "Electrocatalysis",
    summary:
      "Catalyst design for the oxygen evolution reaction and photoanodic water oxidation.",
    description:
      "Electrocatalytic behaviour is studied from both theory and experiment: transition-metal sulfides and spinel oxides are tuned by doping and morphology to accelerate the oxygen evolution reaction, while ab-initio calculations are used to rationalise the adsorption energetics that govern catalytic activity. These insights are applied to water oxidation and overall water splitting systems.",
    topics: [
      "Oxygen evolution reaction",
      "Water oxidation photoanodes",
      "Doped transition-metal sulfides",
      "Adsorption energetics",
      "HER / OER catalysis",
    ],
  },
  {
    slug: "thermoelectric-materials",
    title: "Thermoelectric Materials",
    summary:
      "Thermal transport and phase-dependent thermoelectric performance of monochalcogenides.",
    description:
      "The thermoelectric behaviour of IV–VI and group IV monochalcogenides is investigated with an emphasis on how lattice thermal conductivity controls conversion efficiency. Force-constant and machine-learned interatomic potential workflows are used to compute phonon lifetimes and thermal transport, and cubic phase engineering is exploited to identify low-conductivity polymorphs suitable for high-performance thermoelectric devices.",
    topics: [
      "Lattice thermal conductivity",
      "Phonon lifetimes & scattering",
      "IV–VI monochalcogenides",
      "Cubic phase engineering",
      "Power factor optimisation",
    ],
  },
  {
    slug: "metal-ion-batteries",
    title: "Metal-Ion Batteries",
    summary:
      "High-capacity anode materials and their hydrothermal synthesis for lithium-ion cells.",
    description:
      "Hierarchical and mesoporous anode architectures — including Zn₂VO₄ nanoflowers, spinel oxides and carbon-coated vanadium oxyhydrate — are synthesised hydrothermally and evaluated in coin cells on a LAND battery testing system. Density-functional-theory calculations complement the experimental work by tracking structural stability, redox energetics and lithium transport pathways in the candidate phases.",
    topics: [
      "Hierarchical mesoporous anodes",
      "Spinel oxide anodes",
      "Hydrothermal synthesis",
      "Coin-cell testing",
      "Lithium-ion transport",
    ],
  },
  {
    slug: "electronic-optical-properties",
    title: "Electronic & Optical Properties",
    summary:
      "First-principles prediction of band structure, carriers, absorption and photodetector response.",
    description:
      "A large part of the research programme is devoted to predicting how composition and crystal structure determine electronic and optical response. Density-functional-theory workflows with VASP and CASTEP, combined with BoltzTraP2 transport and AMSET absorption calculations, are used to characterise band gaps, carrier mobility, effective masses and optical absorption of chalcogenides, topological insulators and wide-bandgap semiconductors for photodetector and optoelectronic device design.",
    topics: [
      "Band structure & density of states",
      "Carrier mobility & effective mass",
      "Optical absorption spectra",
      "Topological insulators",
      "Photodetector materials",
    ],
  },
];

export const researchInterests: string[] = [
  "Energy Storage and Conversion Devices",
  "Electronic and Optical Properties",
  "Photocatalysis & Electrocatalysis",
  "Thermoelectric Properties",
  "Metal Ion Batteries",
];

/** Short positioning statement used on the home page. */
export const researchStatement =
  "My research sits at the intersection of computational and experimental materials science. I use first-principles methods to understand how composition, phase and structure govern electronic, optical and thermal behaviour, and I validate those predictions with synthesised materials and electrochemical and spectroscopic characterisation. The central theme is energy conversion and storage: how materials can be engineered to capture light, move charge efficiently, catalyse reactions, or store energy for practical devices.";
