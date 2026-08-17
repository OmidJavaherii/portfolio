import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70dvh] items-center px-[var(--space-gutter)]">
      <div className="container-wide">
        <p className="section-tag">404</p>
        <h1 className="page-title mt-4 font-display font-semibold">
          Page not found.
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          This URL does not match a page or project on this site.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
