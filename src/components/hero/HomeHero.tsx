import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex h-[calc(100dvh-var(--header-height)-env(safe-area-inset-top,0px))] flex-col overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"
        aria-hidden
      />

      <div className="container-wide relative flex min-h-0 flex-1 flex-col px-[var(--space-gutter)] py-5 md:py-7">
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
          <p className="spec-label">{site.name}</p>
          <p className="flex items-center gap-3 font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="signal-dot signal-dot-pulse" aria-hidden />
            <span className="text-primary">{site.availability}</span>
            <span aria-hidden>/</span>
            <span>{site.location}</span>
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-center py-6">
          <p className="spec-label text-primary">{site.role}</p>
          <h1 className="hero-title mt-3 max-w-4xl font-display font-semibold text-balance">
            I build production web apps that stay fast and usable.
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground md:mt-6 md:text-base md:leading-7">
            {site.description}
          </p>
          <div className="mt-7 flex flex-row flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/projects">
                View work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Let&apos;s talk</Link>
            </Button>
          </div>
        </div>

        <dl className="grid shrink-0 grid-cols-3 gap-px overflow-hidden border border-border bg-border lg:grid-cols-6">
          <SpecRow label="Status" value={site.availability} />
          <SpecRow label="Location" value={site.location} />
          <SpecRow label="Last role" value={site.lastRole} />
          <SpecRow label="Focus" value={site.lastRoleFocus} />
          <SpecRow label="Experience" value={`${site.yearsExperience} years`} />
          <SpecRow label="Stack" value={site.stack.join(" · ")} />
        </dl>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-3 py-3 md:px-4 md:py-3.5">
      <dt className="spec-label">{label}</dt>
      <dd className="mt-1 truncate text-sm text-foreground">{value}</dd>
    </div>
  );
}
