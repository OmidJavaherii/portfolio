import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectSpread } from "@/components/projects/ProjectSpread";
import { getFeaturedProjects } from "@/data/projects";

const variants = ["split", "spec", "offset"] as const;

export function SelectedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="section-padding" aria-labelledby="selected-heading">
      <div className="container-wide">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-tag">Selected work</p>
              <h2
                id="selected-heading"
                className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight md:text-5xl"
              >
                Projects from production.
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                All projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-12">
          {featured.map((project, index) => (
            <ProjectSpread
              key={project.slug}
              project={project}
              index={index}
              variant={variants[index] ?? "split"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
