"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { InstallPWA } from "@/components/ui/InstallPWA";

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotFoundPage = pathname === '/not-found';

  return (
    <>
      {!isNotFoundPage && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!isNotFoundPage && <ScrollToTop />}
      <InstallPWA />
    </>
  );
} 