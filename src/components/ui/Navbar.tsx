"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="#home" 
            className="text-xl font-bold flex items-center"
          >
            {typeof logo === 'string' ? logo : logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {ctaButton && (
              <Button variant="primary" size="sm">
                <a href={ctaButton.href} download rel="noopener noreferrer">
                  {ctaButton.label}
                </a>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-6 px-4 bg-card border-t border-border">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="text-sm font-medium block py-2 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {ctaButton && (
              <li className="pt-2">
                <Button variant="primary" size="sm" className="w-full">
                  <a href={ctaButton.href} target="_blank" rel="noopener noreferrer">
                    {ctaButton.label}
                  </a>
                </Button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
} 