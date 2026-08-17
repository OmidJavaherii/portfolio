import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { site, socialLinks } from "@/data/site";
import { experiences } from "@/data/experience";
import { createMetadata } from "@/lib/metadata";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0F" },
  ],
};

export const metadata: Metadata = {
  ...createMetadata({}),
  metadataBase: new URL(site.domain),
  keywords: [
    "frontend engineer",
    "react",
    "next.js",
    "typescript",
    "web3",
    "fintech",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.domain,
  email: site.email,
  image: `${site.domain}/images/profile.jpg`,
  sameAs: socialLinks.map((link) => link.url),
  worksFor: {
    "@type": "Organization",
    name: experiences[0]?.company,
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Islamic Azad University, Central Tehran Branch",
    },
  ],
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} Portfolio`,
  url: site.domain,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </head>
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} min-h-dvh antialiased`}
      >
        <ThemeProvider>
          <SkipLink />
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
        />
      </body>
    </html>
  );
}
