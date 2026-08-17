import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  label,
  title,
  description,
  className,
}: {
  label: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("section-padding pb-10 md:pb-14", className)}>
      <div className="container-wide">
        <Reveal>
          <p className="section-tag">{label}</p>
          <h1 className="page-title mt-4 max-w-4xl font-display font-semibold text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
