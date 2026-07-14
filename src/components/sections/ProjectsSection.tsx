"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { projects } from "@/data/projects";
import { fadeUp, staggerContainer } from "@/lib/motion";

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  return (
    <article
      className={`panel panel-hover group grid h-full overflow-hidden ${
        featured ? "md:grid-cols-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-secondary ${
          featured ? "aspect-video md:aspect-auto md:min-h-[320px]" : "aspect-video"
        }`}
      >
        <ProjectImage
          src={project.imageSrc}
          alt={project.title}
          title={project.title}
          featured={featured}
        />
        <div className="absolute left-0 top-0 bg-primary px-3 py-1.5 font-mono-label text-[9px] uppercase tracking-wider text-primary-foreground">
          {featured ? "Featured" : "Project"}
        </div>
      </div>

      <div className="flex flex-col p-6 md:p-8">
        <div className="mb-auto">
          <h3
            className={`font-display font-bold leading-tight tracking-tight ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, featured ? 8 : 5).map((tag) => (
              <Badge key={tag} variant="outline" className="font-mono-label text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          {project.preview && (
            <Button size="sm" asChild>
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
          {project.link && (
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <Github className="h-3 w-3" />
              </a>
            </Button>
          )}
          <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <SectionShell
      id="projects"
      label="Work"
      index={3}
      title="Selected projects"
      description="Real products with measurable outcomes — logistics, trading, e-commerce, and tools."
    >
      <motion.div
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="space-y-px bg-border"
      >
        {featured && (
          <motion.div variants={fadeUp}>
            <ProjectCard project={featured} featured />
          </motion.div>
        )}

        <div className="grid gap-px bg-border md:grid-cols-2">
          {rest.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Button variant="outline" size="lg" asChild>
          <Link
            href="https://github.com/omidjavaherii"
            target="_blank"
            rel="noopener noreferrer"
          >
            All projects on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </SectionShell>
  );
}
