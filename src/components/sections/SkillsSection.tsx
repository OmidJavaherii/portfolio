"use client";

import React from 'react';
import { AnimatedSection, AnimatedElement } from '../ui/AnimatedSection';

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Zustand", level: 60 },
      ]
    },
    {
      name: "CSS Frameworks",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 },
        { name: "Bootstrap", level: 85 },
      ]
    },
    // {
    //   name: "Backend",
    //   skills: [
    //     { name: "Node.js", level: 85 },
    //     { name: "Express", level: 80 },
    //     { name: "MongoDB", level: 75 },
    //     { name: "SQL", level: 70 },
    //     { name: "Firebase", level: 65 },
    //   ]
    // },
    {
      name: "Other Skills",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "UI/UX Design", level: 65 },
        { name: "Rest API", level: 80 },
        { name: "SEO", level: 40 },
        { name: "Testing", level: 10 },
      ]
    }
  ];

  return (
    <AnimatedSection 
      id="skills" 
      className="py-20 bg-accent/5"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted text-center mb-12">
            I&apos;m constantly learning and exploring new technologies to stay at the forefront of web development.
          </p>
        </div>
        
        <AnimatedElement
          as="div"
          animation="fadeIn"
          delay={0.2}
        >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent/10 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
} 