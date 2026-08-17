import { Reveal } from "@/components/animations/Reveal";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesSection() {
  return (
    <section className="section-padding border-t border-border" aria-labelledby="cap-heading">
      <div className="container-wide">
        <Reveal>
          <p className="section-tag">Capabilities</p>
          <h2
            id="cap-heading"
            className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl"
          >
            What I take on.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <article className="h-full bg-background p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono-label text-[12px] text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
