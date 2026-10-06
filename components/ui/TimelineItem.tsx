import type { Experience } from "@/data/experience";
import { TechTag } from "./TechTag";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <article
      className={`relative border bg-dark-2 p-7 transition-colors duration-150 hover:border-coral sm:p-8 ${
        item.isCurrent ? "border-dark-3 shadow-[0_0_24px_rgba(255,107,74,0.06)]" : "border-dark-3"
      }`}
    >
      <span
        className={`absolute -left-[41px] top-9 h-3 w-3 ${
          item.isCurrent ? "bg-coral shadow-[0_0_8px_#ff6b4a]" : "bg-coral"
        }`}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-xl font-bold text-light">{item.role}</h3>
            {item.isCurrent ? (
              <span className="inline-flex items-center gap-1.5 border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current
              </span>
            ) : null}
            {item.promoted ? (
              <span className="bg-coral px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-white">
                Promoted
              </span>
            ) : null}
          </div>
          <p className="mt-2 font-mono text-sm text-coral">{item.company}</p>
        </div>
        <p className="font-mono text-xs text-muted sm:text-sm">{item.range}</p>
      </div>

      <p className="mt-4 border-l-2 border-coral/60 pl-3.5 text-sm font-medium leading-relaxed text-light/90">
        {item.summary}
      </p>

      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-secondary">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2.5">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 bg-coral/80"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
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

