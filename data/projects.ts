export type ProjectStatus = "Live" | "Production" | "Academic";

export type Project = {
  title: string;
  slug: string;
  description: string;
  status: ProjectStatus;
  image?: string;
  company?: string;
  stack: string[];
  href?: string;
  repo?: string;
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Conservation Volunteer Platform",
    slug: "conservation-volunteer-platform",
    description:
      "Academic capstone turned working full-stack platform for conservation volunteer coordination.",
    status: "Academic",
    image: "/images/v.conservation.png",
    stack: ["Laravel", "React", "Inertia", "Tailwind CSS"],
    impact: "University capstone with real working software outcomes.",
  },
  {
    title: "solganic1.com",
    slug: "solganic1-com",
    description:
      "Live client website delivered as a full-stack project with production deployment needs.",
    status: "Live",
    image: "/images/solganic.png",
    stack: ["Full-stack", "Responsive UI", "Deployment"],
    href: "https://solganic1.com",
    impact: "Live client website.",
  },
  {
    title: "soilsynth.com",
    slug: "soilsynth-com",
    description:
      "Live client website delivered for a soil-focused brand with responsive layouts and production deployment.",
    status: "Live",
    image: "/images/soilsynth.png",
    stack: ["Full-stack", "Responsive UI", "Deployment"],
    href: "https://www.soilsynth.com/",
    impact: "Live client website.",
  },
  {
    title: "Motex Technologies Apps",
    slug: "motex-technologies-apps",
    description:
      "Motex Technologies startup collaboration built with a friend, with Wedding Manager as the main product and Door Bouncer as the companion event-entry app.",
    status: "Live",
    image: "/images/motex tech.png",
    stack: ["Wedding Manager", "Door Bouncer", "Deployment"],
    href: "https://motextechnologies.neocities.org/",
    impact:
      "Live startup showcase featuring Wedding Manager as the core platform plus Door Bouncer for guest check-in control.",
  },
];
