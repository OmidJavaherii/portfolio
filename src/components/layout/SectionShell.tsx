"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface SectionShellProps {
  id?: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
  eyebrow?: string;
  index?: number;
}

export function SectionShell({
  id,
  label,
  title,
  description,
  children,
  className,
  alternate = false,
  eyebrow,
  index,
}: SectionShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const sectionNumber =
    index !== undefined ? String(index).padStart(2, "0") : null;

  return (
    <section
      id={id}
      className={cn(
        "section-padding relative",
        alternate && "bg-secondary/40",
        className
      )}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container-wide relative">
        <div className="mb-12 flex items-start gap-6 md:mb-16 md:gap-10">
          <div className="hidden w-px shrink-0 self-stretch bg-border md:block" />
          <motion.header
            className="min-w-0 flex-1"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-4 flex items-center gap-4">
              {sectionNumber && (
                <span className="font-mono-label text-sm text-muted-foreground">
                  {sectionNumber}
                </span>
              )}
              <span className="section-tag">{eyebrow || label}</span>
              <span className="h-px flex-1 bg-border" />
            </motion.div>

            <motion.h2
              id={id ? `${id}-heading` : undefined}
              variants={fadeUp}
              className="text-balance font-display text-3xl font-bold leading-[1.02] tracking-tight md:text-5xl lg:text-[3.25rem]"
            >
              {title}
            </motion.h2>

            {description && (
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
              >
                {description}
              </motion.p>
            )}
          </motion.header>
        </div>
        {children}
      </div>
    </section>
  );
}
