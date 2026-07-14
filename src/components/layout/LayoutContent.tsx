"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ScrollRail } from "@/components/layout/ScrollRail";
import { SkipLink } from "@/components/layout/SkipLink";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFoundPage = pathname === "/not-found";

  return (
    <>
      {!isNotFoundPage && <SkipLink />}
      {!isNotFoundPage && <Header />}
      {!isNotFoundPage && <ScrollRail />}
      <div id="main-content">{children}</div>
      {!isNotFoundPage && <ScrollToTop />}
    </>
  );
}
