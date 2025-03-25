"use client";

import React, { memo, useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedSectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
  withContainer?: boolean;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'fadeInScale';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export const AnimatedSection = memo(function AnimatedSection({
  id,
  className = '',
  children,
  containerClassName = '',
  withContainer = true,
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  rootMargin = '-50px',
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useScrollReveal({
    threshold,
    rootMargin,
    once: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  const baseClasses = 'py-12 md:py-20 transition-all duration-700 ease-out';
  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  };
  
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`${baseClasses} ${className}`}
      style={animationStyles}
    >
      {withContainer ? (
        <div className={`container mx-auto px-4 md:px-6 ${containerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
});

interface AnimatedElementProps {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'fadeInScale' | 'float' | 'bounce';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  style?: React.CSSProperties;
}

export const AnimatedElement = memo(function AnimatedElement({
  as: Component = 'div',
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  rootMargin = '-10px',
  style = {},
}: AnimatedElementProps) {
  const { ref, isIntersecting } = useScrollReveal({
    threshold,
    rootMargin,
    once: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  const baseClasses = 'transition-all duration-700 ease-out';
  const animationStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    ...style,
  };

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={`${baseClasses} ${className}`}
      style={animationStyles}
    >
      {children}
    </Component>
  );
}); 