"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="safe-top sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container-wide flex h-[var(--header-height)] items-center justify-between px-[var(--space-gutter)]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — Home`}
        >
          <span className="font-mono-label text-xs text-muted-foreground transition-colors group-hover:text-primary">
            {site.shortName}
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="hidden font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
            {site.role}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "link-underline font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={site.resumePath} download>
              Resume
              <Download className="h-3.5 w-3.5" />
            </a>
          </Button>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="font-mono-label text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {site.shortName} / Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "min-h-11 px-1 py-3 font-display text-2xl tracking-tight",
                        active ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href={site.resumePath}
                  download
                  className="mt-4 min-h-11 font-mono-label text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  Download resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
