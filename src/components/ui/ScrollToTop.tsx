"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatedSection
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      animation="fadeIn"
      delay={0.1}
    >
      <button
        onClick={scrollToTop}
        className="group p-3 rounded-full bg-primary/10 hover:bg-primary/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </AnimatedSection>
  );
} 