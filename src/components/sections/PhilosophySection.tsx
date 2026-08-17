import { Reveal } from "@/components/animations/Reveal";
import { philosophy } from "@/data/philosophy";

export function PhilosophySection() {
  return (
    <section className="section-padding border-t border-border" aria-labelledby="phil-heading">
      <div className="container-wide">
        <Reveal>
          <p className="section-tag">Approach</p>
          <h2
            id="phil-heading"
            className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Things I keep coming back to.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 md:grid-cols-2">
          {philosophy.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <li>
                <p className="font-mono-label text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
