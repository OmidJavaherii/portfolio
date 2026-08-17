"use client";

import { cn } from "@/lib/utils";

export function LiveSitePreview({
  url,
  title,
  interactive = false,
  className,
}: {
  url: string;
  title: string;
  interactive?: boolean;
  className?: string;
}) {
  const host = new URL(url).hostname.replace(/^www\./, "");

  return (
    <div
      className={cn(
        "flex h-full min-h-[16rem] w-full flex-col overflow-hidden bg-secondary",
        className
      )}
    >
      <div className="flex shrink-0 items-center gap-3 border-b border-border bg-card px-3 py-2">
        <span className="flex gap-1" aria-hidden>
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="size-1.5 rounded-full bg-border" />
        </span>
        <p className="min-w-0 truncate font-mono-label text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          Live · {host}
        </p>
      </div>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-background">
        <iframe
          src={url}
          title={`Live preview of ${title}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className={
            interactive
              ? "absolute inset-0 h-full w-full border-0 bg-background"
              : "absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 bg-background"
          }
          tabIndex={interactive ? 0 : -1}
        />
        {!interactive && (
          <div className="absolute inset-0" aria-hidden />
        )}
      </div>
    </div>
  );
}
