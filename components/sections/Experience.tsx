import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Download } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export function Experience() {
  return (
    <section id="experience" className="bg-dark px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="font-display text-4xl font-bold text-light">
                Production-Minded Growth
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
                Curated highlights across live production software engineering,
                enterprise database operations, and systems infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                href="/images/cv-moses-simbeye.pdf"
                download
                className="h-10 gap-2 px-4 text-xs"
              >
                <Download size={14} />
                Download Full CV
              </Button>
              <a
                href="https://linkedin.com/in/moses-simbeye-78b766255"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 border border-dark-3 bg-dark-2 px-4 font-mono text-xs text-secondary transition-colors hover:border-coral hover:text-coral"
              >
                <FaLinkedinIn size={13} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-muted" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-14 space-y-8 border-l border-dark-3 pl-10">
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

