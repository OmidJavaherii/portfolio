import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="section-padding border-t border-border" aria-labelledby="cta-heading">
      <div className="container-wide">
        <Reveal>
          <p className="section-tag">Contact</p>
          <h2
            id="cta-heading"
            className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Let&apos;s build something useful.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Open to frontend roles and product work. Based in {site.location}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
