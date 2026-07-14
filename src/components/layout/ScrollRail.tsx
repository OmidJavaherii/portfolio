"use client";

import { useEffect, useState } from "react";
import { navbarData } from "@/data/navbar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn, scrollToSection } from "@/lib/utils";

const sectionIds = navbarData.navItems
  .filter((item) => item.href !== "#home")
  .map((item) => item.href.replace("#", ""));

export function ScrollRail() {
  const activeId = useScrollSpy(sectionIds);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside
      className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-hidden
    >
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative h-48 w-px bg-border">
          <div
            className="absolute left-0 top-0 w-full bg-primary transition-all duration-150"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
        <div className="flex flex-col gap-3">
          {navbarData.navItems
            .filter((item) => item.href !== "#home")
            .map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "pointer-events-auto h-2 w-2 transition-all duration-300",
                    isActive
                      ? "scale-125 bg-primary shadow-[0_0_8px_var(--signal)]"
                      : "bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to ${item.label}`}
                />
              );
            })}
        </div>
      </div>
    </aside>
  );
}
