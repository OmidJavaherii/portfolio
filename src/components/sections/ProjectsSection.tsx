"use client";

import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ProjectsSection() {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with cart, checkout, and payment integration.',
      image: '/images/project1.jpg',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern and responsive portfolio website showcasing projects and skills.',
      image: '/images/project2.jpg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#'
    },
    {
      title: 'Dashboard App',
      description: 'An admin dashboard with data visualization, user management, and analytics.',
      image: '/images/project3.jpg',
      tags: ['React', 'TypeScript', 'Material UI', 'Chart.js'],
      link: '#'
    },
    {
      title: 'Mobile App',
      description: 'A cross-platform mobile app for task management and productivity.',
      image: '/images/project4.jpg',
      tags: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    }
  ];

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
            Here are some of my recent projects. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift transition-all duration-300">
              <div className="aspect-video relative bg-accent/10">
                {project.image && (
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">View Project</Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="secondary">View All Projects</Button>
        </div>
      </div>
    </AnimatedSection>
  );
} 