import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { experiences } from "@/data/experience";

export function ExperienceSnapshot() {
  return (
    <section className="section-padding border-t border-border" aria-labelledby="exp-heading">
      <div className="container-wide">
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-tag">Experience</p>
              <h2
                id="exp-heading"
                className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl"
              >
                Recent roles.
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/experience">
                Full timeline
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <ol className="divide-y divide-border border-y border-border">
          {experiences.map((role) => (
            <li key={role.id} className="grid gap-4 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
              <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {role.period}
              </p>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {role.position}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {role.company} · {role.location}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  {role.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
