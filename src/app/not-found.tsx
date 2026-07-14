"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center justify-center gradient-mesh px-4">
      <div className="text-center">
        <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
          Not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/">
            <Home className="h-4 w-4" />
            Back home
          </Link>
        </Button>
      </div>
    </section>
  );
}
