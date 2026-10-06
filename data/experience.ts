export type Experience = {
  role: string;
  company: string;
  range: string;
  summary: string;
  promoted?: boolean;
  connectsToNext?: boolean;
  isCurrent?: boolean;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Software Engineer",
    company: "Dot Com Zambia PLC — Lusaka",
    range: "2025 – Present",
    promoted: true,
    connectsToNext: true,
    isCurrent: true,
    summary:
      "Engineering core production web applications, database operations, and enterprise tooling on live infrastructure.",
    highlights: [
      "Develop and maintain business-critical web applications with PHP (Laravel) and MySQL on live production systems, delivering features directly from business specifications.",
      "Administer enterprise MySQL databases, access permissions, deployment configurations, and routine monitoring across Windows and Linux environments.",
      "Provide front-line technical troubleshooting for staff and enterprise clients, producing user guides and system documentation.",
    ],
    stack: ["Laravel", "MySQL", "React", "Next.js", "REST APIs", "Linux"],
  },
  {
    role: "IT Intern",
    company: "Dot Com Zambia PLC — Lusaka",
    range: "2024 – 2025",
    summary:
      "Engineered production web interfaces and supported core operational infrastructure, earning internal promotion to Junior Software Engineer.",
    highlights: [
      "Built the frontend for the company's main corporate website, converting requirements into responsive, production-ready pages.",
      "Assisted senior developers with development, defect testing, and operational support for the company's IPO systems.",
      "Maintained internal technical documentation, workflows, and troubleshooting procedures for live systems.",
    ],
    stack: ["Frontend Development", "Corporate Web", "IPO Systems", "MySQL"],
  },
  {
    role: "ICT Support & Management Intern",
    company: "Mulungushi University",
    range: "2024 – 2025",
    summary:
      "Supported campus-wide ICT operations and maintained computing environments across Linux and Windows systems.",
    highlights: [
      "Maintained reliable institutional computing environments, troubleshooting hardware, networking, and software issues for campus users.",
    ],
    stack: ["ICT Support", "Linux", "Windows", "Networking"],
  },
  {
    role: "Graphic Designer / Technician",
    company: "Fusionprints",
    range: "2024",
    summary:
      "Created client-facing visual branding, digital assets, and print-ready technical production work.",
    highlights: [
      "Delivered layout, typography, and brand identity assets from client briefs, building a strong foundation in visual hierarchy and design systems.",
    ],
    stack: ["Adobe Illustrator", "Photoshop", "Brand Design", "Client Delivery"],
  },
];

