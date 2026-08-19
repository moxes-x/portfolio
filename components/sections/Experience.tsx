import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="bg-dark px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-4xl font-bold text-light">
            Production-Minded Growth
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-secondary">
            Reverse-chronological experience across software development, ICT
            support, and design-oriented client delivery.
          </p>
        </Reveal>

        <div className="relative mt-12 space-y-8 border-l border-dark-3 pl-10">
          {experience.map((item, index) => (
            <Reveal
              key={`${item.role}-${item.company}`}
              delay={index * 0.04}
              className="relative"
            >
              {item.connectsToNext ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 -left-10 top-[42px] z-10 w-px bg-coral"
                />
              ) : null}
              <TimelineItem item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
