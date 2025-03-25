import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omid Javaheri | Portfolio",
  description: "Personal portfolio website showcasing my projects, skills, and experience as a frontend developer.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ]
  },
  themeColor: '#0EA5E9',
  viewport: "width=device-width, initial-scale=1",
  keywords: ["portfolio", "frontend developer", "web development", "React", "Next.js"],
  authors: [{ name: "Omid Javaheri" }],
  creator: "Omid Javaheri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
