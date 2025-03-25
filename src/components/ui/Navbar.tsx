"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string | React.ReactNode;
  navItems?: NavItem[];
  ctaButton?: {
    label: string;
    href: string;
  };
}

export function Navbar({ 
  logo = 'Omid Javaheri', 
  // logo = 'Portfolio', 
  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaButton = {
    label: 'Resume',
    href: './Resume-Omid-Javaheri.pdf',
  }
}: NavbarProps) {
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

  return (
    <AnimatedSection
      className={`fixed pt-2.5 h-10 md:py-15! md:-mt-8 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
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
          <nav className="hidden md:flex items-center  space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm">
              <a href={ctaButton.href} download rel="noopener noreferrer">{ctaButton.label}</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent/10 z-20 transition-colors"
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

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed left-0 w-full min-h-screen top-0 pt-6 z-10 transition-all bg-background/95 duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary transform hover:scale-110 ${
                  pathname === item.href ? 'text-primary' : 'text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" size="sm" className="mt-4">
            <a href={ctaButton.href} target="_blank" rel="noopener noreferrer">
                    {ctaButton.label}
                  </a>
            </Button>
          </nav>
        </div>
      </div>
    </AnimatedSection>
  );
} 