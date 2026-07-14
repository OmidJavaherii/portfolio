"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

const highlights = [
  {
    tag: "Stack",
    title: "Multi-framework experience",
    body: "React, Next.js, TypeScript, and modern tooling across fintech, e-commerce, and dashboards.",
  },
  {
    tag: "Status",
    title: "Open to opportunities",
    body: "Accepting frontend roles and product team collaborations.",
    open: true,
  },
  {
    tag: "OSS",
    title: "Open source contributor",
    body: "Projects with 1000+ GitHub stars in the community.",
  },
];

const education = [
  "BSc Computer Software Engineering — Islamic Azad University, Tehran (2023–2025)",
  "Associate Electrical Engineering — Esfahan TV College (2021–2023)",
  "Computer Science — CS50x, Harvard (2023)",
];

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="about"
      label="About"
      index={1}
      title="Building interfaces that ship and scale"
      description="Front-end developer focused on performance, maintainability, and clean architecture."
    >
      <div className="grid gap-px bg-border md:grid-cols-2">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="panel bg-card p-6 md:col-span-2 md:p-10"
        >
          <motion.div variants={fadeUp}>
            <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
              Experienced front-end developer specializing in scalable,
              high-performance web applications. I work across fintech,
              e-commerce, and dashboard products — collaborating with designers
              and backend teams to deliver responsive, reliable interfaces.
              Driven by clean code, speed, and user experience.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Looking for a team that values impactful digital products.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <Button asChild>
              <Link
                href="./Resume-Omid-Javaheri.pdf"
                download
                rel="noopener noreferrer"
              >
                Download CV
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.section
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="panel bg-card p-6 md:p-8"
          aria-labelledby="education-heading"
        >
          <h3
            id="education-heading"
            className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-primary"
          >
            Education
          </h3>
          <ul className="mt-5 space-y-4">
            {education.map((item) => (
              <li
                key={item}
                className="border-l border-border pl-4 text-sm leading-6 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid gap-px bg-border"
        >
          {highlights.map(({ tag, title, body, open }) => (
            <motion.section
              key={title}
              variants={fadeUp}
              className="panel panel-hover bg-card p-6 md:p-8"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {tag}
                </span>
                {open && (
                  <Badge className="font-mono-label text-[9px] uppercase">
                    Open
                  </Badge>
                )}
              </div>
              <h4 className="font-display text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {body}
              </p>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
