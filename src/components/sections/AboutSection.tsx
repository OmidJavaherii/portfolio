"use client";

import React from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedNotes } from "../ui/Note";

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
              I’m a Front-End Developer with over 2 years of experience,
              blending a background in project management from 20+ smart
              building projects and 25+ happy clients. Skilled in
              React, TypeScript, and Next.js. I thrive on crafting
              high-performance, user-focused experiences. My knack for quickly mastering new
              technologies drives me to deliver impactful digital
              solutions—explore my work to see how I can bring value to your
              next project.
            </p>

            <p className="mb-4">
              Excited to join a team that values impactful digital solutions,
              actively looking for a challenging role to leverage my skills.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">
              Education & Certification
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  BSc in Computer Software Engineering - Islamic Azad University
                  Central Tehran Branch, Iran (2023-2025)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Associate of Electrical and Electronics Engineering - Esfahan
                  Technical and Vocational College (2021-2023)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Computer Science - CS50x (2023)</span>
              </li>
            </ul>

            <Button variant="secondary" className="mt-4">
              <a href="./Resume-Omid-Javaheri.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>

          <div>
            <AnimatedNotes />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
