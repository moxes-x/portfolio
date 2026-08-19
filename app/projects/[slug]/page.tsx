import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Moses Simbeye`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Moses Simbeye`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Moses Simbeye`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark px-6 py-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-secondary transition-colors hover:text-coral"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-10 border border-dark-3 bg-dark-2 p-8 shadow-[var(--card-shadow)] md:p-10">
          <div className="relative mb-10 aspect-[16/9] overflow-hidden border border-dark-3 bg-dark">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} case study image`}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-center font-mono text-xs uppercase tracking-[0.08em] text-muted">
                Case study image placeholder
              </div>
            )}
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
            {project.status}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-light md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-secondary">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                Problem
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                The project needed practical software that could support real
                users, internal workflows, and maintainable delivery over time.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                My Role
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                I contributed as a full-stack developer, working across UI,
                backend logic, API integration, and production-minded fixes.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                Stack
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                The stack was selected around maintainability, delivery speed,
                and the needs of the project environment.
              </p>
            </section>
            <section>
              <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-coral">
                Result
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {project.impact}
              </p>
            </section>
          </div>

          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 border border-coral px-5 py-3 font-mono text-xs uppercase tracking-[0.08em] text-coral transition-colors hover:bg-coral hover:text-white"
            >
              View live project
              <ExternalLink size={16} />
            </a>
          ) : null}
        </div>
      </article>
    </main>
  );
}
