import { Reveal } from "@/components/animations/Reveal";

export function IntroSection() {
  return (
    <section className="section-padding border-b border-border" aria-labelledby="intro-heading">
      <div className="container-wide grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        <Reveal>
          <p className="section-tag">Introduction</p>
          <h2
            id="intro-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Frontend for products people already use.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="max-w-2xl space-y-5 text-base leading-8 text-muted-foreground md:text-lg md:leading-8">
            <p>
              Most of my work sits in production: trading dashboards, restaurant
              operations, brand sites, and wallet-connected Web3 apps. The job
              is to make the next action obvious, and to keep the interface
              fast after the third feature lands.
            </p>
            <p>
              I go full-stack with Next.js when the product needs it. What does
              not change is shared UI, careful rendering, and code a small team
              can keep shipping.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
