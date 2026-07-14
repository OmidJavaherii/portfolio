"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experiences";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="experience"
      label="Experience"
      index={2}
      title="Where I've shipped product"
      description="Recent roles across logistics, trading, e-commerce, and education."
      alternate
    >
      <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16">
        <motion.aside
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="panel p-6">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-primary">
              Summary
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Logistics, trading dashboards, e-commerce, education, and
              technical project management.
            </p>
            <Button asChild className="mt-6 w-full">
              <Link
                href="./Resume-Omid-Javaheri.pdf"
                download
                rel="noopener noreferrer"
              >
                Full CV
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.aside>

        <motion.ol
          className="relative space-y-0"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border" aria-hidden />

          {experiences.map((experience, index) => (
            <motion.li
              key={`${experience.company}-${experience.period}`}
              variants={fadeUp}
              className="group relative pb-10 pl-10 last:pb-0"
            >
              <span
                className="absolute left-0 top-1.5 h-[22px] w-[22px] border border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary/10"
                aria-hidden
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")} — {experience.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {experience.company}
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {experience.description.slice(0, 3).map((item, itemIndex) => (
                  <li
                    key={`${experience.company}-${itemIndex}`}
                    className="text-sm leading-6 text-muted-foreground"
                  >
                    — {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {experience.technologies.slice(0, 8).map((tech) => (
                  <Badge key={tech} variant="muted" className="font-mono-label text-[10px]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionShell>
  );
}
