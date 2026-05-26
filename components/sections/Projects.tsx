import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Projects() {
  return (
    <section id="projects" className="bg-dark-2 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-light">
            Selected Work
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-secondary">
            A mix of production systems, client work, and academic software with
            real-world delivery constraints.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
