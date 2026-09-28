import type { Education, Experience, Language, SkillGroup } from "@/types";

/** CV section 5(a) — computational expertise. */
export const computationalSkills: SkillGroup = {
  id: "computational",
  title: "Computational",
  summary:
    "First-principles, phonon and transport workflows for electronic, optical and thermal properties of materials.",
  skills: [
    { name: "VASP", description: "Plane-wave DFT for periodic solids" },
    { name: "CASTEP", description: "Plane-wave DFT and optical response" },
    { name: "Phonopy", description: "Harmonic phonons and force constants" },
    { name: "phono3py", description: "Anharmonic phonon scattering and κ_L" },
    { name: "HiPhive", description: "Force-constant fitting" },
    { name: "MACE", description: "Machine-learned interatomic potentials" },
    { name: "BoltzTraP2", description: "Boltzmann transport coefficients" },
    { name: "AMSET", description: "Temperature-dependent electronic transport" },
    { name: "Python", description: "Workflow automation and data analysis" },
  ],
};

/** CV section 5(b) — experimental expertise. */
export const experimentalSkills: SkillGroup = {
  id: "experimental",
  title: "Experimental",
  summary:
    "Synthesis and characterisation of materials, together with electrochemical and cell testing.",
  skills: [
    { name: "Hydrothermal Synthesis" },
    { name: "Microwave Synthesis" },
    { name: "XRD" },
    { name: "SEM" },
    { name: "TEM" },
    { name: "Electrochemical Workstation" },
    { name: "LAND Battery Testing System" },
    { name: "Glove Box" },
  ],
};

export const skillGroups: SkillGroup[] = [computationalSkills, experimentalSkills];

/** CV section 2(b) — academic qualifications. No dates are stated in the CV. */
export const education: Education[] = [
  {
    degree: "Postdoctoral Fellowship",
    institution: "Minzu University of China",
    location: "Beijing, China",
  },
  {
    degree: "Ph.D.",
    institution: "Institute of Semiconductor, University of Chinese Academy of Sciences (UCAS)",
    location: "Beijing, China",
  },
  {
    degree: "M.Phil. (Physics)",
    institution: "University of Lahore",
    location: "Pakistan",
  },
  {
    degree: "MS (Computer Science)",
    institution: "Government College University Lahore",
    location: "Pakistan",
  },
  {
    degree: "B.Sc. (Hons.) Computational Physics",
    institution: "University of the Punjab",
    location: "Pakistan",
  },
];

/** CV section 3 — academic positions held. Periods are as recorded in the CV. */
export const experience: Experience[] = [
  {
    role: "Post-Doctoral Fellow",
    institution: "School of Science, Minzu University of China",
    location: "Beijing, China",
    period: "10/2020 – Present",
    summary:
      "Computational and experimental research on energy conversion and storage materials, photocatalysis and thermoelectrics.",
  },
  {
    role: "Lecturer",
    institution: "Department of Physics, The University of Lahore",
    location: "Pakistan",
    period: "08/2016 – 12/2016",
  },
  {
    role: "Senior Science Teacher (Physics)",
    institution: "Government High School Baghbanpura Lahore",
    location: "Pakistan",
    period: "04/2012 – 08/2016",
  },
  {
    role: "Research Assistant",
    institution: "Center for High Energy Physics, University of the Punjab",
    location: "Pakistan",
    period: "03/2008 – 07/2008",
  },
];

/** CV section 2(d) — language proficiency. */
export const languages: Language[] = [
  { language: "English", proficiency: "Advanced — writing, spoken, reading" },
  { language: "Urdu", proficiency: "Advanced — writing, spoken, reading" },
  { language: "Chinese", proficiency: "Elementary — listening and speaking" },
  { language: "Arabic", proficiency: "Reading" },
];
