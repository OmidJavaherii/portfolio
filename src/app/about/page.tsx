import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/animations/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { about, education } from "@/data/about";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: `About ${site.name} — frontend engineer in ${site.location}, working across product, fintech, and Web3.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHeader label="About" title={about.title} description={about.lead} />

      <div className="container-wide grid gap-12 px-[var(--space-gutter)] pb-[var(--space-section)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-secondary">
            <Image
              src="/images/profile.jpg"
              alt={`${site.name}, ${site.role}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          </div>
        </Reveal>

        <div className="space-y-10">
          <Reveal>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="spec-label">Currently learning</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-foreground">
              {about.currently}
            </p>
          </Reveal>

          <Reveal>
            <h2 className="spec-label">What I care about</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-muted-foreground">
              {about.caresAbout.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="spec-label">Interests</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-muted-foreground">
              {about.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="spec-label">Education</h2>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <p className="mt-1 font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.period} · {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <ContactCTA />
    </main>
  );
}
