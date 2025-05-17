import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutContent } from "@/components/layout/LayoutContent";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { registerServiceWorker } from "@/utils/registerServiceWorker";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#046D8B",
};

export const metadata: Metadata = {
  title: "Omid Javaheri - Portfolio",
  description: "Personal portfolio website showcasing my projects, skills, and experience.",
  keywords: ["portfolio", "developer", "web development", "software engineer"],
  authors: [{ name: "Omid Javaheri" }],
  creator: "Omid Javaheri",
  publisher: "Omid Javaheri",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omidjavaheri.com",
    siteName: "Omid Javaheri Portfolio",
    title: "Omid Javaheri - Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omid Javaheri Portfolio",
      },
    ],
  },
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Register service worker
  if (typeof window !== 'undefined') {
    registerServiceWorker();
  }

  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#046D8B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Omid Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Omid Portfolio" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} safe-top`}>
        <div className="aurora-bg" />
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
