import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectSpec } from "@/components/projects/ProjectSpec";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { NextProject, ProjectLinks } from "@/components/projects/NextProject";
import { ProjectCopy } from "@/components/projects/ProjectCopy";
import { Reveal } from "@/components/animations/Reveal";
import { projects, getProject } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return createMetadata({ title: "Project" });

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <PageHeader
        label={`${project.category} / ${project.year}`}
        title={project.title}
        description={project.description}
      />

      <div className="container-wide px-[var(--space-gutter)] pb-10">
        <ProjectSpec project={project} />
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className="container-wide px-[var(--space-gutter)]">
        <ProjectVisual
          project={project}
          priority
          interactive
          className="h-[min(70vh,40rem)] min-h-[22rem] border border-border"
        />
      </div>

      <article className="container-wide grid gap-12 px-[var(--space-gutter)] py-[var(--space-section)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <h2 className="spec-label">Overview</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {project.description}
          </p>
          <h2 className="spec-label mt-10">Role</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {project.role}
            {project.company ? ` at ${project.company}.` : "."}
          </p>
          <h2 className="spec-label mt-10">Technologies</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="border border-border px-2 py-1 font-mono-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <ProjectCopy project={project} />
        </Reveal>
      </article>

      <NextProject currentSlug={project.slug} />
    </main>
  );
}
