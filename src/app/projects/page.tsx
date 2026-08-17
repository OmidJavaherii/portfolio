import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectSpread } from "@/components/projects/ProjectSpread";
import { Reveal } from "@/components/animations/Reveal";
import {
  getPrimaryProjects,
  getSecondaryProjects,
} from "@/data/projects";
import { createMetadata } from "@/lib/metadata";
import { formatIndex } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Selected production work across restaurant operations, Web3, logistics, and commerce.",
  path: "/projects",
});

export default function ProjectsPage() {
  const primary = getPrimaryProjects();
  const secondary = getSecondaryProjects();

  return (
    <main>
      <PageHeader
        label="Projects"
        title="Work from production."
        description="Restaurant operations, Web3, logistics, and commerce. Smaller personal tools are at the bottom."
      />

      <div className="container-wide px-[var(--space-gutter)] pb-8">
        <div className="flex flex-col gap-10 md:gap-16">
          {primary.map((project, index) => (
            <ProjectSpread
              key={project.slug}
              project={project}
              index={index}
              variant={
                project.links?.live || project.image
                  ? index % 2 === 0
                    ? "split"
                    : "offset"
                  : "spec"
              }
            />
          ))}
        </div>
      </div>

      <section className="section-padding border-t border-border" aria-labelledby="also-heading">
        <div className="container-wide">
          <Reveal>
            <p className="section-tag">Also</p>
            <h2
              id="also-heading"
              className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl"
            >
              Personal tools
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {secondary.map((project, index) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col gap-3 py-6 md:flex-row md:items-baseline md:justify-between"
                >
                  <span className="font-mono-label text-xs text-muted-foreground">
                    {formatIndex(index)}
                  </span>
                  <span className="flex-1 font-display text-xl font-semibold tracking-tight group-hover:text-primary">
                    {project.title}
                  </span>
                  <span className="max-w-md text-sm text-muted-foreground">
                    {project.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
