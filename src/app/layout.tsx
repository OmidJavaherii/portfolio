import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutContent } from "@/components/layout/LayoutContent";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { registerServiceWorker } from "@/utils/registerServiceWorker";
import { footerData } from "@/data/footer";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
  robots: "index",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omidjavaheri.ir",
    siteName: "Omid Javaheri Portfolio",
    title: "Omid Javaheri - Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience.",
    images: [
      {
        url: "/images/profile.jpg",
        width: 960,
        height: 910,
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

const domain = "https://omidjavaheri.ir"
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: footerData.name,
  jobTitle: experiences[0]?.title || "Frontend Developer",
  url: domain,
  image: `${domain}/images/profile.jpg`,
  sameAs: footerData.socialLinks.map((link) => link.url),
  worksFor: {
    "@type": "Organization",
    name: experiences[0]?.company,
  },
  alumniOf: experiences.find((exp) =>
    exp.company.includes("Islamic Azad University")
  )?.company || "Islamic Azad University, Central Tehran Branch",
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${footerData.name} Portfolio`,
  url: domain,
  potentialAction: {
    "@type": "SearchAction",
    target: `${domain}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
