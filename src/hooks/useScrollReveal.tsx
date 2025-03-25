"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
}: ScrollRevealOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    
    if (entry.isIntersecting) {
      setIsIntersecting(true);
    } else {
      setIsIntersecting(false);
    }
  }, []);

  useEffect(() => {
    const node = ref.current;
    
    if (!node) return;
    
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });
    
    observerRef.current.observe(node);
    
    return () => {
      if (node && observerRef.current) {
        observerRef.current.unobserve(node);
      }
    };
  }, [threshold, rootMargin, handleIntersect]);
  
  return { ref, isIntersecting };
} 