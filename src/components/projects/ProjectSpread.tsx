import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCopy } from "@/components/projects/ProjectCopy";
import { ProjectSpec } from "@/components/projects/ProjectSpec";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { cn, formatIndex } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectSpread({
  project,
  index,
  variant = "split",
}: {
  project: Project;
  index: number;
  variant?: "split" | "offset" | "spec";
}) {
  const href = `/projects/${project.slug}`;

  if (variant === "spec") {
    return (
      <Reveal>
        <article className="group border-t border-border py-8 md:py-10">
          <Link href={href} className="grid gap-6 md:grid-cols-[8rem_1fr_auto] md:items-start">
            <p className="font-mono-label text-xs text-muted-foreground">
              {formatIndex(index)}
            </p>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                {project.description}
              </p>
              <div className="mt-5">
                <ProjectCopy project={project} compact />
              </div>
              <div className="mt-5">
                <ProjectSpec project={project} compact />
              </div>
            </div>
            <span className="hidden items-center gap-1 font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-primary md:inline-flex">
              Case study
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </article>
      </Reveal>
    );
  }

  const reversed = variant === "offset";

  return (
    <Reveal>
      <article
        className={cn(
          "group grid overflow-hidden border border-border bg-card md:grid-cols-2",
          reversed && "md:[&>*:first-child]:order-2"
        )}
      >
        <div className="relative min-h-[16rem] md:min-h-[28rem]">
          <ProjectVisual
            project={project}
            className="h-full min-h-[16rem] md:min-h-[28rem]"
          />
          <Link
            href={href}
            className="absolute inset-0 z-10"
            aria-label={`${project.title} case study`}
          />
        </div>
        <div className="flex flex-col justify-between p-6 md:p-10">
          <div>
            <p className="spec-label">
              {formatIndex(index)} / {project.category}
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              <Link href={href} className="transition-colors hover:text-primary">
                {project.title}
              </Link>
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
              {project.description}
            </p>
            <div className="mt-6">
              <ProjectCopy project={project} compact />
            </div>
            <div className="mt-6">
              <ProjectSpec project={project} />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild>
              <Link href={href}>
                Case study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            {project.links?.live && (
              <Button variant="outline" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.links?.github && (
              <Button variant="ghost" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  Code
                  <Github className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
