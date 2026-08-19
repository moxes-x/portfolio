import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechTag } from "@/components/ui/TechTag";

const languages = ["English", "Nyanja", "Bemba"];
const certifications = [
  "Huawei IoT",
  "Cloud",
  "AI Fundamentals",
  "ICTAZ Member",
  "Udemy - UX & Web Design Master Course: Strategy, Design, Development",
];

export function About() {
  return (
    <section id="about" className="bg-dark px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-light">
            Building Systems That Work
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-secondary">
            <p>
              I&apos;m Moses Simbeye, a Software Engineer based in
              Lusaka, focused on building scalable, maintainable, and
              user-centered software systems.
            </p>
            <p>
              I work across both frontend and backend development, transforming
              complex requirements into clean, reliable systems. My experience
              includes developing management platforms, authentication systems,
              dashboards, APIs, and workflow solutions with a strong emphasis
              on performance, usability, and long-term maintainability.
            </p>
            <p>
              Beyond software development, my background in ICT support and
              graphic design helps me approach products with both technical
              precision and strong visual awareness.
            </p>
          </div>
          <div className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <TechTag key={language}>{language}</TechTag>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((certification) => (
                <TechTag key={certification}>{certification}</TechTag>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative min-h-[420px] border border-dark-3 bg-dark-2 p-6 shadow-[var(--card-shadow)]">
            <div className="absolute left-0 top-0 h-full w-1 bg-coral" />
            <div className="relative h-full min-h-[372px] overflow-hidden border border-dark-3 bg-dark">
              <Image
                src="/images/moses-professional.jpg"
                alt="Moses Simbeye professional portrait"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
