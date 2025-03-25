"use client";

import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: ScrollRevealOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          
          // If once is true, unobserve the element after it's been revealed
          if (once && node) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(node);
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [threshold, rootMargin, once]);
  
  return { ref, isIntersecting };
} 