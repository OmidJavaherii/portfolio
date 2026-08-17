import type { NavItem, SocialLink } from "@/types";

export const site = {
  name: "Omid Javaheri",
  shortName: "OJ",
  role: "Frontend Engineer",
  headline: "I build production web apps that stay fast and usable.",
  description:
    "React, Next.js, and TypeScript — for trading platforms, product sites, and Web3. I care about performance, shared UI, and shipping with small teams.",
  location: "Tehran",
  availability: "Available",
  yearsExperience: "3",
  lastRole: "Tara Chain",
  lastRoleFocus: "Web3 product UI",
  email: "omidjavaheri.eng@gmail.com",
  phone: "+989138100702",
  phoneDisplay: "+98 913 810 0702",
  domain: "https://omidjavaheri.ir",
  resumePath: "/Resume-Omid-Javaheri.pdf",
  stack: ["React", "Next.js", "TypeScript"],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/OmidJavaherii",
    label: "GitHub",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/omidjavaheri",
    label: "LinkedIn",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/omid.javaheri_",
    label: "Instagram",
  },
];
