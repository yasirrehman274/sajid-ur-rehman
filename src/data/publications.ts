import type { BookChapter, Publication } from "@/types";

/**
 * Publications transcribed from the official CV
 * (`public/cv/sajid-ur-rehman-cv.pdf`), section 6 "List of Publications".
 *
 * Rules observed while transcribing:
 *  - Titles, author names, journal names and years are reproduced verbatim.
 *  - No DOI or article URL is present in the CV, so `url` is intentionally
 *    omitted everywhere. Nothing is fabricated.
 *  - The CV lists 45 numbered articles, but entries 5/17, 6/18 and 7/22 are
 *    exact duplicates of each other. Those repeats are removed here so the
 *    list contains 42 distinct articles.
 *  - Chemical formulae use Unicode subscript digits to match the CV typography.
 *  - NEEDS CONFIRMATION: two articles carry no year in the CV — the GaN-SnX/X₂
 *    paper in Int. J. Hydrogen Energy 191, 152264 and the perovskite stability
 *    paper in Energy Technology 2500137. Both sit inside the CV's contiguous
 *    block of explicitly-2025 entries, so they are recorded as 2025. Verify
 *    against the publishers and correct `year` if either is different.
 */
export const publications: Publication[] = [
  {
    title:
      "Predicting long-term stability of O₂ and H₂O adsorption on the perovskite Cs₂SnI₆ surfaces: A first-principles approach",
    authors: "Haris Habib, Houda El Hyani, Sajid Ur Rehman, Hamid Ullah, Ke-Fan Wang",
    journal: "Surfaces and Interfaces",
    year: 2026,
  },
  {
    title:
      "2D pentagonal MgTe₂ (α, β, γ) monolayers as single atom catalyst for efficient CO₂ reduction",
    authors:
      "Zhanyao Xu, Sajid Ur Rehman, Haris Habib, Zeeshan Tariq, Hafiz Muhammad Naeem Ullah, Xiaoming Zhang, Bakhtiar Ul Haq, Yang Wang, Chuanbo Li, Honglian Guo",
    journal: "Surfaces and Interfaces",
    year: 2026,
    note: "Equal Contribution",
  },
  {
    title:
      "Novel pentagonal MgX₂ (X= O, S, Se, Te) monolayers: promising photocatalysts for overall water splitting and CO₂ reduction",
    authors:
      "Zhanyao Xu, Sajid Ur Rehman, Yuan Xu, Haris Habib, Zeeshan Tariq, Hafiz Muhammad Naeem Ullah, Yang Wang, Chuanbo Li, Xiaoming Zhang",
    journal: "Inorganic Chemistry Frontiers",
    year: 2026,
    note: "Equal Contribution",
  },
  {
    title: "Carbon-Coated CoV₂O₆·2H₂O as a High-Capacity Anode for Lithium-Ion Batteries",
    authors:
      "Ali Tariq, Zeeshan Tariq, Hafiz Muhammad Naeem Ullah, Sajid Ur Rehman, Xiaoming Zhang, Jun Zheng, Yuhua Zuo",
    journal: "Colloids and Surfaces A: Physicochemical and Engineering Aspects",
    year: 2026,
    details: "140238",
  },
  {
    title:
      "Novel Two-dimensional Tellurophosphates: Visible Light Photocatalysts for Water Splitting and Carbon Dioxide Reduction",
    authors:
      "Sajid Ur Rehman, Haris Habib, Zeeshan Tariq, Hafiz Muhammad Naeem Ullah, Faheem K. Butt, Xiaoming Zhang, Chuanbo Li",
    journal: "Surfaces and Interfaces",
    year: 2024,
    details: "105255",
  },
  {
    title:
      "Engineering of Interfacial Electric Field by g-C₃N₄/ZnSnO₃ Heterojunction for Excellent Photocatalytic Applications",
    authors:
      "Zia Ur Rehman, Sajid Ur Rehman, Muhammad Bilal, Faheem K. Butt, Asif Hussain, Jawad Ahmad Jrar, Kewang Zheng et al.",
    journal: "Journal of Cleaner Production",
    year: 2024,
    details: "143258",
  },
  {
    title:
      "Selenium doping to improve internal electric field for excellent photocatalytic efficiency of g-C₃N₄ nanosheets",
    authors:
      "Zia Ur Rehman, Muhammad Bilal, Faheem K. Butt, Sajid Ur Rehman, Zeeshan Asghar, Kewang Zheng, Yongcai Zhang, Xiaoyong Xu, Jianhua Hou, Xiaozhi Wang",
    journal: "Separation and Purification Technology",
    year: 2024,
    details: "350, 128001",
  },
  {
    title:
      "Two-dimensional GaN-SnX/X₂ (X=S, Se) heterostructures: A promising visible light driven photocatalysts for overall water splitting",
    authors: "Haris Habib, Houda El Hyani, Sajid Ur Rehman, Ke-Fan Wang",
    journal: "International Journal of Hydrogen Energy",
    year: 2025,
    details: "191, 152264",
    note: "Corresponding Author",
  },
  {
    title:
      "High-performance Ethanol Detection Achieved by WO₃/Co₃O₄ Composite Heterojunctions with Synergistic pn Junction Features",
    authors:
      "Zhenghua Li, Sajid ur Rehman, Syeda Sitwat Batool, Hui Zhou, Yang Wang, Chuanbo Li, Xiaoming Zhang",
    journal: "Sensors and Actuators B: Chemical",
    year: 2025,
    details: "137929",
    note: "Equal Contribution",
  },
  {
    title: "Degradation Pathways in Perovskite Solar Cells: Strategies for Enhancing Stability",
    authors:
      "Haris Habib, Sajid Ur Rehman, Houda El Hyani, Muhammad Nawaz Sharif, Furui Tan, Ke-Fan Wang",
    journal: "Energy Technology",
    year: 2025,
    details: "2500137",
  },
  {
    title:
      "Nitrogen-defect containing Si-C/g-C₃N₄ heterostructure with improved charge transfer kinetics for photocatalytic H₂ production and CO₂ reduction",
    authors:
      "Zia Ur Rehman, Sajid Ur Rehman, Faheem K. Butt, Yongcai Zhang, Jianhua Hou, Xiaozhi Wang",
    journal: "Renewable Energy",
    year: 2025,
    details: "124536",
  },
  {
    title:
      "Boron doped g-C₃N₄ porous nanosheets to increase electron-hole pair generation for excellent photocatalytic H₂ production and CO₂ reduction",
    authors:
      "Zia Ur Rehman, Muhammad Bilal, Sajid Ur Rehman, Faheem K. Butt, Zeeshan Asghar, Yongcai Zhang, Xiaoyong Xu, Jianhua Hou, Xiaozhi Wang",
    journal: "Separation and Purification Technology",
    year: 2025,
    details: "354, 129535",
  },
  {
    title:
      "Alcohol-sensitive MoS₂ optoelectronic synapses for mimicking human-like visual adaptation",
    authors:
      "Xiao Liu, Ming Huang, Xiongfeng Zou, Wajid Ali, Sajid Ur Rehman, Juan Li, Ziwei Li, Li Xiang, Anlian Pan",
    journal: "InfoMat",
    year: 2025,
    details: "e70019",
  },
  {
    title:
      "Manganese doped tailored cobalt sulfide as an accelerated catalyst for oxygen evolution reaction",
    authors:
      "Hafiz Muhammad Naeem Ullah, Nouraiz Mushtaq, Sajid Ur Rehman, Zeeshan Tariq, S. S. Ali, Muhammad Tahir, Chuanbo Li, Xiaoming Zhang, Junbai Li",
    journal: "Journal of Colloid and Interface Science",
    year: 2025,
    details: "678, 1087-1095",
  },
  {
    title:
      "Magnetic Proximity Induced Giant Enhancement of Valley Polarization and Zeeman Splitting in WS₂/Fe₃GaTe₂ Heterostructures",
    authors:
      "Wajid Ali, Liuli Yang, Yunfei Xie, Hao Song, Ming Huang, Sajid Ur Rehman, Ziwei Li, Zahir Muhammad, Anlian Pan",
    journal: "Nano Letters",
    year: 2025,
  },
  {
    title: "Graphene/TiO₂ Nanofiber Hybrids for Multispectral Photodetectors",
    authors:
      "Syeda Sitwat Batool, Muhammad Umair Hassan, Peter G. Oduor, Syeda Maria Batool, Sajid Ur-Rehman, Xiaoming Zhang, Chuanbo Li",
    journal: "ACS Applied Nano Materials",
    year: 2025,
    details: "8(29), 14677-14688",
  },
  {
    title:
      "Two-dimensional CrSe₂/GaN heterostructures for visible-light photocatalysis with high utilization of solar energy",
    authors:
      "Jingjing Wang, Sajid Ur Rehman, Zeeshan Tariq, Bin Zou, Xiaoming Zhang, Faheem K. Butt, Chuanbo Li",
    journal: "International Journal of Hydrogen Energy",
    year: 2024,
    details: "51, 382-395",
    note: "Equal Contribution",
  },
  {
    title:
      "Promising two dimensional XSe₂/SnS (X= Pt, Zr, Hf) vdW heterostructures for overall water splitting with higher carrier mobilities",
    authors:
      "Zeeshan Tariq, Haris Habib, Sajid Ur Rehman, Hafiz Muhammad Naeem Ullah, Ali Tariq, Faheem K. Butt, Chuanbo Li, Xiaoming Zhang",
    journal: "International Journal of Hydrogen Energy",
    year: 2024,
    details: "87, 669-677",
  },
  {
    title:
      "Tailoring Bi₂Se₃ Topological Insulator for Visible-NIR Photodetectors with Schottky Contacts Using Liquid Phase Exfoliation",
    authors:
      "Sadaf Noureen, Sajid Ur Rehman, Syeda Maria Batool, Junaid Ali, Qifeng Zhang, Syeda Sitwat Batool, Yang Wang, Chuanbo Li",
    journal: "ACS Applied Materials & Interfaces",
    year: 2024,
    details: "16(6), 8158–8168",
  },
  {
    title:
      "High carrier mobility ZrSSe/SnX (X= S, Se, S₂, Se₂) vdW heterostructures for photocatalytic overall water splitting: A first-principles study",
    authors: "Zeeshan Tariq, Sajid Ur Rehman, Faheem K. Butt, Xiaoming Zhang, Chuanbo Li",
    journal: "Molecular Catalysis",
    year: 2024,
    details: "553, 113716",
  },
  {
    title:
      "Type-I/Type-II Transition of MoSe₂/g-GaN van der Waals heterostructures mediated by biaxial strain and electric field for overall water splitting",
    authors:
      "Sajid Ur Rehman, Zeeshan Tariq, Bin Zou, Faheem K. Butt, Xiaoming Zhang, Shuai Feng, Bakhtiar Ul Haq, Chuanbo Li",
    journal: "Materials Science and Engineering: B",
    year: 2023,
    details: "288, 116195",
  },
  {
    title:
      "Novel two-dimensional MC₂N₄ (M= Cr, Mo, W) monolayers for overall water splitting with high visible-light absorption",
    authors:
      "Sajid Ur Rehman, Zeeshan Tariq, Faheem K. Butt, Xiaoming Zhang, Bakhtiar Ul Haq, Chuanbo Li",
    journal: "Solar Energy",
    year: 2022,
    details: "241, 416-427",
  },
  {
    title:
      "Two-dimensional antimony selenide (Sb₂Se₃) nanosheets prepared by hydrothermal method for visible-light photodetectors",
    authors:
      "Jing Wang, Sajid Ur Rehman, Yang Xu, Binzhou Zuo, Haohang Cheng, Lingshan Guo, Bin Zou, Xiaoming Zhang, Chuanbo Li",
    journal: "Solar Energy",
    year: 2022,
    details: "233, 213-220",
    note: "Equal Contribution",
  },
  {
    title: "Physical properties of novel Tin-chalcogenides heterostructures: A first-principles study",
    authors:
      "Bakhtiar Ul Haq, Salem AlFaify, R. Ahmed, Faheem K. Butt, Muhammad Tahir, Sajid Ur Rehman, M. M. Alsardia, Se-Hun Kim",
    journal: "Materials Science in Semiconductor Processing",
    year: 2022,
    details: "149, 106820",
  },
  {
    title:
      "Pristine and Janus Chromium Dichalcogenides: Potential Photocatalysts for Overall Water Splitting in Wide Solar Spectrum Under Strain and Electric Field",
    authors:
      "Jingjing Wang, Sajid Ur Rehman, Zeeshan Tariq, Xiaoming Zhang, Jun Zheng, Faheem K. Butt, Chuanbo Li",
    journal: "Solar Energy and Solar Cell",
    year: 2021,
    details: "230, 111258",
    note: "Equal Contribution",
  },
  {
    title:
      "Vanadium Based Zinc Spinel Oxides: Potential Material as Photoanode for Water Oxidation and Optoelectronic Devices",
    authors:
      "Zeeshan Tariq, Sajid Ur Rehman, Xiaoming Zhang, Faheem K. Butt, Shuai Feng, Bakhtiar Ul Haq, Buwen Cheng, Chuanbo Li",
    journal: "International Journal of Hydrogen Energy",
    year: 2021,
    details: "46(55), 28110-28120",
  },
  {
    title:
      "Elucidating the role of lattice thermal conductivity in π-phases of IV-VI monochalcogenides for highly efficient thermoelectric performance",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Zeeshan Tariq, Xiaoming Zhang, Jun Zheng, Genadi Naydenov, Bakhtiar Ul Haq, Chuanbo Li",
    journal: "International Journal of Energy Research",
    year: 2021,
    details: "45(4), 6369-6382",
  },
  {
    title:
      "Hierarchical mesoporous nanoflowers of Zn₂VO₄ for high capacity anode in lithium ion batteries",
    authors:
      "Zeeshan Tariq, Sajid Ur Rehman, Junying Zhang, Faheem K. Butt, Xiaoming Zhang, Buwen Cheng, Sarwat Zahra, Chuanbo Li",
    journal: "Materials Science in Semiconductor Processing",
    year: 2021,
    details: "123, 105549",
  },
  {
    title:
      "Pristine and Janus monolayers of vanadium dichalcogenides: potential materials for overall water splitting and solar energy conversion",
    authors:
      "Zeeshan Tariq, Sajid Ur Rehman, Xiaoming Zhang, Faheem K. Butt, Shuai Feng, Bakhtiar Ul Haq, Jun Zheng, Buwen Cheng, Chuanbo Li",
    journal: "Journal of Materials Science",
    year: 2021,
    details: "56(21), 12270-12284",
  },
  {
    title:
      "Two dimensional graphitic carbon nitride Nanosheets as prospective material for photocatalytic degradation of nitrogen oxides",
    authors:
      "Zia Ur Rehman, Faheem K. Butt, Narmina O. Balayeva, Faryal Idrees, Jianhua Hou, Zeeshan Tariq, Sajid Ur Rehman, Bakhtiar Ul Haq, Salem Alfaify, Saif Ali, Sher Zaman",
    journal: "Diamond and Related Materials",
    year: 2021,
    details: "120, 108650",
  },
  {
    title:
      "A type-II GaSe/HfS₂ van der Waals heterostructure as promising photocatalyst with high carrier mobility",
    authors:
      "Obeid, Mohammed M., Asadollah Bafekry, Sajid Ur Rehman, Chuong V. Nguyen",
    journal: "Applied Surface Science",
    year: 2020,
    details: "147607",
  },
  {
    title:
      "Devising square- and hexagonal-shaped monolayers of ZnO for nanoscale electronic and optoelectronic applications",
    authors:
      "Bakhtiar Ul Haq, S. AlFaify, Thamraa Alshahrani, R. Ahmed, Faheem K. Butt, Sajid Ur Rehman, Zeeshan Tariq",
    journal: "Solar Energy",
    year: 2020,
    details: "211, 920-927",
  },
  {
    title:
      "Optoelectronic properties of new direct bandgap polymorphs of single-layered Germanium sulfide",
    authors:
      "Bakhtiar Ul Haq, S. AlFaify, A. Laref, R. Ahmed, Faheem K. Butt, Aijaz Rasool Chaudhry, Sajid Ur Rehman, Q. Mahmood",
    journal: "Ceramics International",
    year: 2019,
    details: "45(14), 18073-18078",
  },
  {
    title:
      "Cubic Germanium monochalcogenides (π-GeS and π-GeSe): emerging materials for optoelectronic and energy harvesting devices",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Zeeshan Tariq, Bakhtiar Ul Haq, Guochen Lin, Chuanbo Li",
    journal: "Solar Energy",
    year: 2019,
    details: "185, 211-221",
  },
  {
    title:
      "First-principles study of electronic and optical properties of sulfur doped tin monoxide: A potential applicant for optoelectronic devices",
    authors:
      "Zeeshan Tariq, Faheem K. Butt, Sajid Ur Rehman, Bakhtiar Ul Haq, F. Aleem, Chuanbo Li",
    journal: "Ceramics International",
    year: 2019,
    details: "45(6), 7495-7503",
  },
  {
    title: "Theoretical studies on InGaAs/InAlAs SAGCM avalanche photodiodes",
    authors:
      "Siyu Cao, Yue Zhao, Sajid Ur Rehman, Shuai Feng, Yuhua Zuo, Chuanbo Li, Lichun Zhang, Buwen Cheng, Qiming Wang",
    journal: "Nanoscale Research Letters",
    year: 2018,
    details: "13(1), 1-15",
  },
  {
    title:
      "Elucidating the first-principles calculations of SnO₂ Within DFT framework and beyond: a library for optimization of various pseudopotentials",
    authors:
      "Rabilah Gilani, Sajid Ur Rehman, Faheem K. Butt, Bakhtiar Ul Haq, F. Aleem",
    journal: "Silicon",
    year: 2018,
    details: "10(5), 2317-2328",
  },
  {
    title: "Exploring novel phase of tin sulfide for photon/energy harvesting materials",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Bakhtiar Ul Haq, Salem AlFaify, Waheed S. Khan, Chuanbo Li",
    journal: "Solar Energy",
    year: 2018,
    details: "169, 648-657",
  },
  {
    title:
      "First-principles calculations of nitrogen-doped antimony triselenide: A prospective material for solar cells and infrared optoelectronic devices",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Chuanbo Li, Bakhtiar Ul Haq, Zeeshan Tariq, F. Aleem",
    journal: "Frontiers of Physics",
    year: 2018,
    details: "13(3), 1-12",
  },
  {
    title:
      "An insight into a novel cubic phase SnSe for prospective applications in optoelectronics and clean energy devices",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Fateh Hayat, Bakhtiar Ul Haq, Zeeshan Tariq, F. Aleem, Chuanbo Li",
    journal: "Journal of Alloys and Compounds",
    year: 2018,
    details: "733, 22-32",
  },
  {
    title:
      "Investigation of thermoelectric properties of novel cubic phase SnSe: a promising material for thermoelectric applications",
    authors:
      "Faheem K. Butt, Bakhtiar Ul Haq, Sajid Ur Rehman, R. Ahmed, Chuanbao Cao, S. AlFaifi",
    journal: "Journal of Alloys and Compounds",
    year: 2017,
    details: "715, 438-444",
  },
  {
    title:
      "Pressure induced structural and optical properties of cubic phase SnSe: An investigation for the infrared/mid-infrared optoelectronic devices",
    authors:
      "Sajid Ur Rehman, Faheem K. Butt, Zeeshan Tariq, Fateh Hayat, Rabilah Gilani, F. Aleem",
    journal: "Journal of Alloys and Compounds",
    year: 2017,
    details: "695, 194-201",
  },
];

/** Book chapters from CV section 6(c). */
export const bookChapters: BookChapter[] = [
  {
    title:
      "Metal Oxide-carbon Composites of Vanadium Oxide and their Energy Storage Applications: Metal Oxide-Carbon Hybrid Materials",
    authors: "Zeeshan Tariq, Sajid Ur Rehman, Xiaoming Zhang, Chuanbo Li",
    publisher: "Elsevier",
    year: 2022,
    note: "Book Chapter",
  },
  {
    title: "Recent Developments in Group II-VI Based Chalcogenides and Their Potential Application in Solar Cells",
    authors:
      "Saif Ali, Faheem K. Butt, Junaid Ahmad, Zia Ur Rehman, Sami Ullah, Mashal Firdous, Sajid Ur Rehman, Zeeshan Tariq",
    publisher: "CRC",
    year: 2022,
    details: "2D Nanomaterials Chemistry and Properties",
    note: "Book Chapter",
  },
  {
    title: "Graphitic Carbon Nitride/Metal Oxides Nanocomposites and Their Applications in Engineering",
    authors:
      "Faheem K. Butt, Sami Ullah, Junaid Ahmad, Sajid Ur Rehman, Zeeshan Tariq",
    publisher: "Springer, Cham",
    year: 2020,
    details: "In Composite Materials, pp. 231-265",
  },
  {
    title: "Zinc Based Spinel Oxides for Energy Conversion and Storage Applications",
    authors: "Faheem K. Butt, Sajid Ur Rehman",
    publisher: "Springer",
    year: 2019,
    details: "Nanotechnology: Applications in Energy, Drug and Food, pp. 31-48",
    note: "Book Chapter",
  },
  {
    title: "Tin-Based Novel Cubic Chalcogenides: A New Paradigm for Photovoltaic Research",
    authors: "Sajid Ur Rehman, Faheem K. Butt, Zeeshan Tariq, Chuanbo Li, C. Li",
    publisher: "Wiley",
    year: 2018,
    details: "Emerging Photovoltaic Materials: Silicon & Beyond, pp. 141-163",
    note: "Book Chapter",
  },
];

/** Distinct publication years, newest first — used for the year filter. */
export const publicationYears: number[] = Array.from(
  new Set(publications.map((publication) => publication.year)),
).sort((a, b) => b - a);

/** Total number of distinct journal articles listed in the CV. */
export const publicationCount = publications.length;
