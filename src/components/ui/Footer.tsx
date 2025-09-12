"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { footerData } from "@/data/footer";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <AnimatedSection animation="fadeIn" delay={0.1} className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Omid Javaheri</h3>
            <p className="text-muted mb-6">
              FrontEnd developer passionate about creating beautiful and
              functional web experiences.
            </p>

            <div className="flex space-x-4">
              {footerData.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
                  aria-label={`Visit my ${link.platform} profile`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-primary transition-colors"
                    onClick={(e) => handleScroll(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted">
              <li>Tehran, Iran</li>
              <li>
                <Link href="mailto:omidjavaheri.eng@gmail.com">omidjavaheri.eng@gmail.com</Link>
              </li>
              <li>
                <Link href="tel:+989138100702">+98 913 810 0702</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12  pt-8 -mb-12 max-md:-mb-10 max-sm:-mb-8 text-center text-muted">
          <p>
            &copy; {currentYear} {footerData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
