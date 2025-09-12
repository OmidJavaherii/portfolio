"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navbarData } from '@/data/navbar';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatedSection
      className={`fixed pt-2.5 h-10 max-sm:pt-3 max-sm:pb-12 md:py-15! md:-mt-8 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Omid Javaheri
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center
          md:space-x-3 lg:space-x-8">
            {navbarData.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-muted'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href={navbarData.ctaButton.href}
              download
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Button size="sm" variant="primary" className="cursor-pointer">
                {navbarData.ctaButton.label}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-accent/10 z-20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed left-0 w-full min-h-screen top-0 pt-6 z-10 transition-all bg-background/95 dark:bg-background/98 backdrop-blur-md duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navbarData.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary transform hover:scale-110 ${pathname === item.href ? 'text-primary' : 'text-muted'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={navbarData.ctaButton.href}
              download
              rel="noopener noreferrer"
              className="cursor-pointer mt-4"
            >
              <Button size="lg" variant="primary" className="cursor-pointer">
                {navbarData.ctaButton.label}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </AnimatedSection>
  );
} 