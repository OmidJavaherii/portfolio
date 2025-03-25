"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    
    // Only trigger if we haven't already and the element is intersecting
    if (entry.isIntersecting && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      setIsIntersecting(true);
      
      // If once is true, unobserve the element after it's been revealed
      if (once && entry.target) {
        observerRef.current?.unobserve(entry.target);
      }
    } else if (!once && !entry.isIntersecting) {
      setIsIntersecting(false);
    }
  }, [once]);

  useEffect(() => {
    const node = ref.current;
    
    if (!node) return;
    
    // Reset the trigger flag when the component mounts
    hasTriggeredRef.current = false;
    
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