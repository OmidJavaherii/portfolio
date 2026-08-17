import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { experiences } from "@/data/experience";
import { getProject } from "@/data/projects";

export function ExperienceTimeline() {
  return (
    <ol className="container-wide px-[var(--space-gutter)] pb-[var(--space-section)]">
      {experiences.map((role) => (
        <Reveal key={role.id}>
          <li className="grid gap-8 border-t border-border py-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:py-16">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {role.period}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {role.company}
              </h2>
              <p className="mt-2 text-foreground">{role.position}</p>
              <p className="mt-1 spec-label">{role.location}</p>
            </div>

            <div>
              <p className="text-base leading-7 text-muted-foreground">
                {role.summary}
              </p>

              <h3 className="spec-label mt-8">Responsibilities</h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-foreground/90">
                {role.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="spec-label mt-8">Selected work</h3>
              <ul className="mt-3 space-y-3 text-sm leading-7 text-foreground/90">
                {role.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {role.selectedProjects.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                  {role.selectedProjects.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/projects/${slug}`}
                        className="link-underline font-mono-label text-[11px] uppercase tracking-[0.14em]"
                      >
                        {project.title}
                      </Link>
                    );
                  })}
                </div>
              )}

              <ul className="mt-8 flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border px-2 py-1 font-mono-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
