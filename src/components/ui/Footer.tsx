"use client";

import Link from "next/link";
import { footerData } from "@/data/footer";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-4 py-12 md:px-6">
      <div className="container-wide">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Omid Javaheri
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Front-end developer — Tehran, Iran
            </p>
            <div className="mt-5 flex gap-2">
              {footerData.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel panel-hover flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Visit my ${link.platform} profile`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerData.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="font-mono-label text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-mono-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {footerData.name}</p>
          <p>Next.js · React · Three.js · Motion</p>
        </div>
      </div>
    </footer>
  );
}
