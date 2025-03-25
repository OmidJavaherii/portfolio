"use client";

import React from 'react';
import { AnimatedElement } from './AnimatedSection';

type NoteType = 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary';

interface NoteProps {
  children: React.ReactNode;
  type?: NoteType;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  animated?: boolean;
  dismissable?: boolean;
}

export function Note({
  children,
  type = 'info',
  title,
  icon,
  className = '',
  animated = true,
  dismissable = false,
}: NoteProps) {
  const [dismissed, setDismissed] = React.useState(false);

  const typeStyles = {
    info: {
      bg: 'bg-accent/10',
      border: 'border-accent',
      text: 'text-accent',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    success: {
      bg: 'bg-green-100 dark:bg-green-900/20',
      border: 'border-green-500',
      text: 'text-green-600 dark:text-green-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900/20',
      border: 'border-yellow-500',
      text: 'text-yellow-600 dark:text-yellow-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    error: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      border: 'border-red-500',
      text: 'text-red-600 dark:text-red-400',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
    },
    primary: {
      bg: 'bg-primary/10',
      border: 'border-primary',
      text: 'text-primary',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    secondary: {
      bg: 'bg-secondary/10',
      border: 'border-secondary',
      text: 'text-secondary',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  };

  if (dismissed) {
    return null;
  }

  const NoteContent = () => (
    <div
      className={`p-4 rounded-lg border-l-4 ${typeStyles[type].bg} ${typeStyles[type].border} ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex">
          {icon || (
            <div className={`mr-3 ${typeStyles[type].text}`}>
              {typeStyles[type].icon}
            </div>
          )}
          <div>
            {title && <h4 className="text-base font-medium mb-1">{title}</h4>}
            <div className="text-sm">{children}</div>
          </div>
        </div>
        {dismissable && (
          <button
            onClick={() => setDismissed(true)}
            className="ml-4 text-muted hover:text-foreground"
            aria-label="Close note"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  return animated ? (
    <AnimatedElement
      animation="fadeInScale"
      className="my-4"
      delay={0.1}
    >
      <NoteContent />
    </AnimatedElement>
  ) : (
    <div className="my-4">
      <NoteContent />
    </div>
  );
}

export function AnimatedNotes() {
  return (
    <AnimatedElement animation="fadeIn" delay={0.1}>
      <div className="space-y-6">
        <Note type="primary" title="Did you know?" animated={false}>
          I have experience working with multiple programming languages and frameworks.
        </Note>
        
        <Note type="success" title="Available for hire!" animated={false}>
          Currently accepting new project opportunities and collaborations.
        </Note>
        
        <Note type="info" title="Fun fact" animated={false}>
          I&apos;ve contributed to open source projects that have over 1000+ stars on GitHub.
        </Note>

        <p className="text-sm text-muted">
          Don&apos;t forget to check out my other projects!
        </p>
      </div>
    </AnimatedElement>
  );
} 