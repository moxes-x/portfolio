import type { Experience } from "@/data/experience";
import { TechTag } from "./TechTag";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <article className="relative border border-dark-3 bg-dark-2 p-8 transition-colors duration-150 hover:border-coral">
      <span className="absolute -left-[41px] top-9 h-3 w-3 bg-coral" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-light">{item.role}</h3>
            {item.promoted ? (
              <span className="bg-coral px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-white">
                Promoted
              </span>
            ) : null}
          </div>
          <p className="mt-2 font-mono text-sm text-coral">{item.company}</p>
        </div>
        <p className="font-mono text-sm text-muted">{item.range}</p>
      </div>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-secondary">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
      </div>
    </article>
  );
}
