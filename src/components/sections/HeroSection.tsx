"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function HeroSection() {
  return (
    <AnimatedSection 
      id="home" 
      className="pt-32 pb-16 md:pt-26 sm:pt-20 max-sm:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-accent/5 via-background to-background"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
              Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Omid Javaheri</span>
            </h1>
            
            <p className="text-muted text-lg mb-8 max-w-2xl">
              I&apos;m a passionate frontend developer with expertise in building modern web applications.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="primary">
                <a href="#projects">
                View My Projects
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#contact">
                Contact Me
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-center lg:text-left">
              <div>
                <div className="font-bold text-3xl text-primary">90%</div>
                <div className="text-muted">Client Satisfaction</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-primary">15+</div>
                <div className="text-muted">Projects Completed</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-primary">2+</div>
                <div className="text-muted">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-2xl animate-pulse" />
              <div className="relative h-full w-full rounded-full border-2 border-accent/20 overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile Placeholder"
                  fill
                  className="object-cover"
                  priority
                />
                {/* <Image
                  src="/images/profile.svg"
                  alt="Profile Placeholder"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute top-8 left-11 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-5 right-7 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-7 -left-7 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
            
            {/* Tech stack icons */}
            <div className="absolute top-0 right-0 bg-card p-4 rounded-full shadow-lg">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl">⚛️</span>
              </div>
            </div>
            <div className="absolute top-1/8 left-1/12 bg-card p-4 rounded-full shadow-lg">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl">🧑‍💻</span>
              </div>
            </div>
            <div className="absolute bottom-1/8 right-1/12 bg-card p-4 rounded-full shadow-lg">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xl">💾</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 bg-card p-4 rounded-full shadow-lg">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 