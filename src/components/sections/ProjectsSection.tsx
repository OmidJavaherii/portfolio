"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { AnimatedElement, AnimatedSection } from "../ui/AnimatedSection";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="py-20 bg-background"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents a
            unique challenge and solution.
          </p>
        </div>

        <AnimatedElement as="div" animation="fadeInScale" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                link={project.link}
                preview={project.preview}
              />
            ))}
          </div>
        </AnimatedElement>

        <div className="text-center mt-12">
          <Button variant="secondary">
            <a
              href="https://github.com/omidjavaherii"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
