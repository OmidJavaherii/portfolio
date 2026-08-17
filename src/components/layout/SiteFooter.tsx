import { site, socialLinks } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide px-[var(--space-gutter)] py-10 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {site.shortName} / {site.role}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              {site.name} — frontend with React, Next.js, and TypeScript.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono-label uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono-label uppercase tracking-[0.14em]">
            {site.location} · {site.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
