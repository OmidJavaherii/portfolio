"use client";

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { AnimatedNotes } from '../ui/Note';

export function AboutSection() {
  return (
    <AnimatedSection 
      id="about" 
      className="py-20 bg-background"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Get to know more about me and my journey in web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="mb-4">
              With over 5 years of experience in web development, I've worked on a diverse range of projects from small business 
              websites to large-scale web applications. My passion for creating intuitive and beautiful user interfaces has driven 
              me to continuously improve my skills and stay up-to-date with the latest technologies.
            </p>
            
            <p className="mb-4">
              I believe in writing clean, maintainable code and following best practices. My approach to development focuses 
              on creating scalable solutions that can grow with your business.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Education & Certification</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>BSc in Computer Science - University of Technology (2018-2022)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Certified Web Developer - Web Development Institute (2020)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Advanced JavaScript Certification - CodeMasters (2021)</span>
              </li>
            </ul>
            
            <Button variant="secondary" className="mt-4">Download Resume</Button>
          </div>
          
          <div>
            <AnimatedNotes />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
} 