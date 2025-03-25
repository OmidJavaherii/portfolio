"use client";

import React from 'react';

interface LoaderProps {
  type?: 'ring' | 'dots' | 'progress' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  text?: string;
}

export function Loader({
  type = 'ring',
  size = 'md',
  color,
  className = '',
  text,
}: LoaderProps) {
  const sizeClasses = {
    sm: {
      ring: 'w-6 h-6 border-2',
      dots: 'gap-1',
      dot: 'w-1 h-1',
      progress: 'h-1',
      pulse: 'w-6 h-6',
    },
    md: {
      ring: 'w-10 h-10 border-3',
      dots: 'gap-2',
      dot: 'w-2 h-2',
      progress: 'h-2',
      pulse: 'w-10 h-10',
    },
    lg: {
      ring: 'w-16 h-16 border-4',
      dots: 'gap-3',
      dot: 'w-3 h-3',
      progress: 'h-3',
      pulse: 'w-16 h-16',
    },
  };

  const colorStyle = color ? { borderTopColor: color, backgroundColor: color } : {};

  const renderLoader = () => {
    switch (type) {
      case 'ring':
        return <div className={`loader-ring ${sizeClasses[size].ring} ${className}`} style={colorStyle} />;
      
      case 'dots':
        return (
          <div className={`loader-dots ${sizeClasses[size].dots} ${className}`}>
            <div className={sizeClasses[size].dot} style={{ backgroundColor: color }} />
            <div className={sizeClasses[size].dot} style={{ backgroundColor: color }} />
            <div className={sizeClasses[size].dot} style={{ backgroundColor: color }} />
          </div>
        );
      
      case 'progress':
        return (
          <div className={`w-full bg-background-darker rounded-full overflow-hidden ${className}`}>
            <div 
              className={`${sizeClasses[size].progress} bg-gradient-to-r from-primary to-secondary shimmer`}
              style={{ width: '90%' }}
            />
          </div>
        );
      
      case 'pulse':
        return (
          <div 
            className={`${sizeClasses[size].pulse} rounded-full ${className} pulse`}
            style={{ backgroundColor: color || 'var(--primary)' }}
          />
        );
        
      default:
        return <div className={`loader-ring ${sizeClasses[size].ring} ${className}`} style={colorStyle} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {renderLoader()}
      {text && <p className="mt-3 text-sm text-muted">{text}</p>}
    </div>
  );
}

export function PageTransition() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 fadeIn">
      <Loader type="dots" size="lg" text="Loading..." />
    </div>
  );
} 