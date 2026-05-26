import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/data/projects";
import { TechTag } from "./TechTag";

const statusClass = {
  Live: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  Production: "border-coral/60 bg-coral/10 text-coral",
  Academic: "border-dark-3 bg-dark text-secondary",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col border border-dark-3 bg-dark-2 p-8 shadow-[var(--card-shadow)] transition-colors duration-150 hover:border-coral">
      <div className="relative mb-6 aspect-[16/9] overflow-hidden border border-dark-3 bg-dark">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-center font-mono text-xs uppercase tracking-[0.08em] text-muted">
            Project screenshot placeholder
          </div>
        )}
      </div>
      <div className="mb-5 flex min-h-[72px] items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-light">{project.title}</h3>
          {project.company ? (
            <p className="mt-1 font-mono text-xs text-coral">{project.company}</p>
          ) : null}
        </div>
        <span
          className={`shrink-0 border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] ${statusClass[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="min-h-[84px] text-sm leading-7 text-secondary">
        {project.description}
      </p>
      <div className="mt-6 min-h-[64px]">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <TechTag key={item}>{item}</TechTag>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-8">
        <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.08em]">
          <Link
            href={`/projects/${project.slug}`}
            className="text-coral underline-offset-4 transition-colors hover:text-light hover:underline"
          >
            View Project
          </Link>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="text-secondary transition-colors hover:text-coral"
            >
              <ExternalLink size={18} />
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-secondary transition-colors hover:text-coral"
            >
              <FaGithub size={18} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
