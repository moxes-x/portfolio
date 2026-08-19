export type Experience = {
  role: string;
  company: string;
  range: string;
  promoted?: boolean;
  connectsToNext?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Software Developer",
    company: "Dot Com Zambia PLC — Lusaka",
    range: "2025 – Present",
    promoted: true,
    connectsToNext: true,
    bullets: [
      "Develop and maintain business-critical web applications using PHP (Laravel) and MySQL on live production systems.",
      "Build new features from business requirements, fix defects, and verify fixes before deployment.",
      "Administer MySQL databases and access, including user accounts, permissions, and password resets for enterprise applications.",
      "Provide front-line technical support to staff and customers by phone, email, and chat, troubleshooting software, hardware, and connectivity issues on Windows and Linux.",
      "Support deployments, upgrades, configuration changes, monitoring, and performance checks; produce technical documentation and user guides.",
    ],
    stack: ["Laravel", "React", "Next.js", "REST APIs", "MySQL"],
  },
  {
    role: "IT Intern",
    company: "Dot Com Zambia PLC — Lusaka",
    range: "2024 – 2025",
    bullets: [
      "Built the company’s frontend for the main corporate website, translating business requirements into responsive, production-ready pages.",
      "Contributed to development and support of the company’s IPO systems, assisting with functionality, fixes, and testing.",
      "Produced technical documentation covering internal systems, workflows, and support procedures.",
      "Provided ongoing technical support and troubleshooting on the company’s production systems alongside senior developers.",
      "Gained hands-on exposure to the company’s live infrastructure ahead of promotion to Junior Software Developer.",
    ],
    stack: ["Frontend Development", "Documentation", "Production Support"],
  },
  {
    role: "ICT Support & Management Intern",
    company: "Mulungushi University",
    range: "2024–2025",
    bullets: [
      "Supported ICT operations, troubleshooting, user assistance, and day-to-day technology management.",
      "Helped maintain reliable computing environments across Linux, Windows, and institutional systems.",
      "Strengthened practical support discipline, documentation habits, and stakeholder communication.",
    ],
    stack: ["ICT Support", "Linux", "Windows", "Networking"],
  },
  {
    role: "Graphic Designer / Technician",
    company: "Fusionprints",
    range: "2024",
    bullets: [
      "Created client-facing graphic design work while supporting technical production processes.",
      "Built a design foundation in layout, visual hierarchy, brand consistency, and practical delivery.",
      "Developed the communication habits needed to translate client needs into finished digital assets.",
    ],
    stack: [
      "Adobe Illustrator",
      "Affinity Designer",
      "Photoshop",
      "Graphic Design",
      "Client Work",
    ],
  },
];
