import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { getNextProject } from "@/data/projects";

export function NextProject({ currentSlug }: { currentSlug: string }) {
  const next = getNextProject(currentSlug);
  if (!next) return null;

  return (
    <section className="border-t border-border">
      <div className="container-wide px-[var(--space-gutter)] py-16 md:py-20">
        <p className="spec-label">Next project</p>
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-sm text-muted-foreground">{next.category}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-5xl">
              {next.title}
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 font-mono-label text-[11px] uppercase tracking-[0.16em]">
            Open case study
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  if (!project.links?.live && !project.links?.github) return null;

  return (
    <p className="flex flex-wrap gap-4 text-sm">
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          Live site
        </a>
      )}
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          GitHub
        </a>
      )}
    </p>
  );
}
