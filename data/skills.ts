export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    category: "Backend",
    skills: ["PHP (Laravel)", "Node.js", "Python"],
  },
  {
    category: "Databases",
    skills: ["MySQL"],
  },
  {
    category: "APIs",
    skills: ["REST"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Bitbucket", "Linux", "Windows"],
  },
  {
    category: "Design",
    skills: [
      "Figma",
      "Graphic Design",
      "Adobe Illustrator",
      "Affinity Designer",
      "Photoshop",
    ],
  },
];

export const softSkills = [
  "Production ownership",
  "Technical support",
  "Client communication",
  "Design thinking",
  "Documentation",
];
