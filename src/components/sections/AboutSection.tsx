"use client";

import React from "react";
import { Button } from "../ui/Button";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedNotes } from "../ui/Note";
import Link from "next/link";

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
              Experienced Front-End Developer proficient in React, Next.js, TypeScript, and modern JavaScript. Specializes
              in creating scalable and high-performance web applications with a focus on fintech, e-commerce, and
              dashboard projects. Strong commitment to front-end architecture and performance optimization, working
              collaboratively with designers and back-end developers to create seamless, responsive, and reliable user
              interfaces. Driven by a passion for enhancing speed, maintainability, and user experience through clean code
              and efficient solutions. Eager to leverage technical expertise and ability to resolve complex technical
              challenges in a forward-thinking team to develop impactful digital products.
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
            <Link
              href="./Resume-Omid-Javaheri.pdf"
              download
              rel="noopener noreferrer"
              className="cursor-pointer mt-4"
            >
              <Button size="md" variant="secondary" className="cursor-pointer">
                Download Resume
              </Button>
            </Link>
          </div>
          <div>
            <AnimatedNotes />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
