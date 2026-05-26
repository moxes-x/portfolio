import { skillGroups, softSkills } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechTag } from "@/components/ui/TechTag";

export function Skills() {
  return (
    <section id="skills" className="bg-dark-2 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-light">
            Technical Competencies
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-secondary">
            A practical stack shaped by production systems, support work, and
            visual design foundations.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.04}>
              <article className="h-full border border-dark-3 bg-dark p-8 transition-colors duration-150 hover:border-coral">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                  {group.category}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechTag key={skill}>{skill}</TechTag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="border border-dark-3 bg-dark p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Soft skills
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <TechTag key={skill}>{skill}</TechTag>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
