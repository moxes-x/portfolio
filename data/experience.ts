export type Experience = {
  role: string;
  company: string;
  range: string;
  promoted?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Junior Software Developer",
    company: "Dot Com Zambia PLC",
    range: "2025-Present",
    promoted: true,
    bullets: [
      "Promoted from intern after contributing to real production systems and internal delivery workflows.",
      "Build and maintain full-stack features across Laravel, React, Next.js, REST APIs, and MySQL.",
      "Contributed to production platforms serving thousands of users, collaborating with cross-functional teams to deliver reliable software.",
      //"Collaborate with technical and operations teams to ship reliable, maintainable business software.", including IPO management, helpdesk, eToll Plus, and eLevy systems.
    ],
    stack: ["Laravel", "React", "Next.js", "REST APIs", "MySQL"],
  },
  {
    role: "ICT Support & Management Intern",
    company: "Mulungushi University",
    range: "2024-2025",
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
