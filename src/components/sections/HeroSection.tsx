"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { scrollToSection } from "@/lib/utils";

const SceneCanvas = dynamic(
  () =>
    import("@/components/three/SceneCanvas").then((mod) => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" aria-hidden />
    ),
  }
);

const stats = [
  { value: "6+", label: "Years" },
  { value: "5+", label: "Projects" },
  { value: "1K+", label: "Users" },
];

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-dvh flex-col overflow-hidden"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-fade opacity-20" />
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      {!prefersReducedMotion && (
        <SceneCanvas
          reducedMotion={prefersReducedMotion ?? false}
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70"
        />
      )}

      <div className="container-wide relative z-10 flex flex-1 flex-col justify-between px-4 pb-10 pt-24 md:px-6 md:pb-14 md:pt-28">
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          variants={fadeUp}
          className="flex items-center gap-3 font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="signal-dot signal-dot-pulse" />
          <span className="text-signal">Available</span>
          <span className="text-border">/</span>
          <span>Tehran, IR</span>
          <span className="text-border">/</span>
          <span>Front-End</span>
        </motion.div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="font-mono-label text-xs uppercase tracking-[0.28em] text-muted-foreground"
            >
              Portfolio — 2026
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="hero-title font-display font-bold tracking-tight"
            >
              <span className="block text-foreground">Omid</span>
              <span className="block text-outline">Javaheri</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              I craft fast, precise interfaces — from logistics dashboards to
              e-commerce platforms — with React, Next.js, and TypeScript.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" onClick={() => scrollToSection("#projects")}>
                View work
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
              >
                Get in touch
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link
                  href="./Resume-Omid-Javaheri.pdf"
                  download
                  rel="noopener noreferrer"
                >
                  Download CV
                </Link>
              </Button>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="mt-14 flex gap-10 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-bold md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 font-mono-label text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-between border-t border-border pt-6"
        >
          <button
            type="button"
            onClick={() => scrollToSection("#about")}
            className="group flex items-center gap-3 font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
          <p className="hidden font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
            React · Next.js · TypeScript
          </p>
        </motion.div>
      </div>
    </section>
  );
}
