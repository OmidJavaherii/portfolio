"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
import { navbarData } from "@/data/navbar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn, scrollToSection } from "@/lib/utils";

const sectionIds = navbarData.navItems.map((item) =>
  item.href.replace("#", "")
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 safe-top transition-all duration-500",
        isScrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-14 items-center justify-between px-4 md:h-16 md:px-6">
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-3"
          aria-label="Omid Javaheri — Home"
        >
          <span className="font-mono-label text-xs text-muted-foreground transition-colors group-hover:text-primary">
            OJ
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="hidden font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Front-End Dev
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navbarData.navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                data-active={isActive}
                className={cn(
                  "link-underline font-mono-label text-xs uppercase tracking-[0.14em] transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex font-mono-label text-xs uppercase tracking-wider">
            <Link
              href={navbarData.ctaButton.href}
              download
              rel="noopener noreferrer"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs border-l border-border bg-background">
              <SheetHeader>
                <SheetTitle className="text-left font-display text-lg">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
                {navbarData.navItems.map((item, i) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeId === id;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "border-b border-border py-4 font-mono-label text-sm uppercase tracking-[0.12em] transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="mr-3 text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
                <Button asChild className="mt-8 w-full">
                  <Link
                    href={navbarData.ctaButton.href}
                    download
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
