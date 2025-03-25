"use client";

import React from 'react';
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

export function AnimatedSection({
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

  const animationClasses = 
    isIntersecting 
      ? `reveal active ${animation}` 
      : 'reveal';
  
  const delayStyle = delay ? { animationDelay: `${delay}s` } : {};
  
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 md:py-20 ${animationClasses} ${className}`}
      style={delayStyle}
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
}

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

export function AnimatedElement({
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

  const animationClasses = 
    isIntersecting 
      ? `reveal active ${animation}` 
      : 'reveal';
  
  const combinedStyle = {
    ...style,
    ...(delay ? { animationDelay: `${delay}s` } : {}),
  };

  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={`${animationClasses} ${className}`}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
} 