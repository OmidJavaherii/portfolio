"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <AnimatedSection 
      className="min-h-screen flex items-center justify-center h-full bg-gradient-to-b from-accent/5 z-30 via-background to-background"
      animation="fadeInScale"
      delay={0.1}
    >
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button variant="primary" size="lg">
          <Link href="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
} 