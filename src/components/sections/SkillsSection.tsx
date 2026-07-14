"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/skills";
import { fadeUp, staggerContainer } from "@/lib/motion";

const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Performance",
];

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="skills"
      label="Skills"
      index={4}
      title="Tools I reach for"
      description="A focused toolkit — always learning, always shipping."
      alternate
    >
      <motion.div
        className="panel mb-px bg-card p-6 md:p-8"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-primary">
          Core stack
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {coreStack.map((skill) => (
            <Badge key={skill} className="px-3 py-1.5 font-mono-label text-[11px]">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid gap-px bg-border md:grid-cols-3"
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
      >
        {skillCategories.map((category, index) => (
          <motion.section
            key={category.name}
            variants={fadeUp}
            className="panel panel-hover bg-card p-6 md:p-8"
            aria-labelledby={`skill-${index}`}
          >
            <p className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3
              id={`skill-${index}`}
              className="mt-3 font-display text-lg font-bold tracking-tight"
            >
              {category.name}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Badge variant="outline" className="font-normal text-xs">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </motion.div>
    </SectionShell>
  );
}
