import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { LayoutContent } from "@/components/layout/LayoutContent";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { footerData } from "@/data/footer";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f8" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://omidjavaheri.ir"),
  title: "Omid Javaheri — Front-End Developer",
  description:
    "Portfolio of Omid Javaheri — front-end developer building fast, polished web products with React, Next.js, and TypeScript.",
  keywords: [
    "portfolio",
    "frontend developer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Omid Javaheri" }],
  creator: "Omid Javaheri",
  publisher: "Omid Javaheri",
  robots: "index",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omidjavaheri.ir",
    siteName: "Omid Javaheri Portfolio",
    title: "Omid Javaheri — Front-End Developer",
    description:
      "Portfolio of Omid Javaheri — front-end developer building fast, polished web products.",
    images: [
      {
        url: "/images/profile.svg",
        width: 500,
        height: 500,
        alt: "Omid Javaheri Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

const domain = "https://omidjavaheri.ir";
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: footerData.name,
  jobTitle: experiences[0]?.title || "Frontend Developer",
  url: domain,
  image: `${domain}/images/profile.svg`,
  sameAs: footerData.socialLinks.map((link) => link.url),
  worksFor: {
    "@type": "Organization",
    name: experiences[0]?.company,
  },
  alumniOf:
    experiences.find((exp) =>
      exp.company.includes("Islamic Azad University")
    )?.company || "Islamic Azad University, Central Tehran Branch",
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${footerData.name} Portfolio`,
  url: domain,
};

const schemaProjects = projects.map((project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: project.preview || project.link || domain,
  creator: {
    "@type": "Person",
    name: footerData.name,
  },
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${plexSans.variable} ${plexMono.variable} safe-top antialiased`}
      >
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProjects) }}
        />
      </body>
    </html>
  );
}
