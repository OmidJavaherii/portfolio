import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { LiveSitePreview } from "@/components/projects/LiveSitePreview";

export function ProjectVisual({
  project,
  className,
  priority = false,
  interactive = false,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  interactive?: boolean;
}) {
  if (project.links?.live) {
    return (
      <LiveSitePreview
        url={project.links.live}
        title={project.title}
        interactive={interactive}
        className={className}
      />
    );
  }

  if (project.image) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden bg-secondary", className)}>
        <Image
          src={project.image}
          alt={`${project.title} interface`}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex min-h-[16rem] flex-col justify-between overflow-hidden bg-secondary p-6 md:min-h-[22rem] md:p-8",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="relative flex items-start justify-between gap-4">
        <p className="spec-label text-primary">{project.category}</p>
        <p className="font-mono-label text-xs text-muted-foreground">
          {project.year}
        </p>
      </div>
      <div className="relative">
        <p className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </p>
        <p className="mt-3 max-w-sm font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {project.technologies.slice(0, 4).join(" · ")}
        </p>
      </div>
    </div>
  );
}
