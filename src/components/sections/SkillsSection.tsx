"use client";

import React from 'react';
import { AnimatedSection, AnimatedElement } from '../ui/AnimatedSection';

export function SkillsSection() {
  // const skillCategories = [
  //   {
  //     name: "Frontend Development",
  //     skills: [
  //       { name: "JavaScript", level: "Advanced" },
  //       { name: "TypeScript", level: "Intermediate" },
  //       { name: "React", level: "Advanced" },
  //       { name: "Next.js", level: "Advanced" },
  //       { name: "Redux", level: "Intermediate" },
  //     ]
  //   },
  //   {
  //     name: "CSS Frameworks",
  //     skills: [
  //       { name: "HTML/CSS", level: "Expert" },
  //       { name: "Responsive Design", level: "Expert" },
  //       { name: "Tailwind CSS", level: "Advanced" },
  //       { name: "Material UI", level: "Advanced" },
  //       { name: "Bootstrap", level: "Advanced" },
  //     ]
  //   },
  //   // {
  //   //   name: "Backend",
  //   //   skills: [
  //   //     { name: "Node.js", level: 85 },
  //   //     { name: "Express", level: 80 },
  //   //     { name: "MongoDB", level: 75 },
  //   //     { name: "SQL", level: 70 },
  //   //     { name: "Firebase", level: 65 },
  //   //   ]
  //   // },
  //   {
  //     name: "Other Skills",
  //     skills: [
  //       { name: "Git/GitHub", level: "Advanced" },
  //       { name: "UI/UX Design", level: "Intermediate" },
  //       { name: "Rest API", level: "Advanced" },
  //       { name: "SEO", level: "Beginner" },
  //       { name: "Testing", level: "Beginner" },
  //     ]
  //   }
  // ];

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: ["Next.js","React.js","JavaScript", "TypeScript", "Redux"]
    },
    {
      name: "CSS Frameworks",
      skills: ["HTML/CSS", "Responsive Design", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
      name: "Other Skills",
      skills: ["Git/GitHub", "Rest API", "StoryBook", "SEO", "Testing"]
    }
  ];

  // const getLevelColor = (level: string) => {
  //   switch (level.toLowerCase()) {
  //     case 'expert':
  //       return 'bg-primary';
  //     case 'advanced':
  //       return 'bg-accent';
  //     case 'intermediate':
  //       return 'bg-secondary';
  //     case 'beginner':
  //       return 'bg-muted';
  //     default:
  //       return 'bg-muted';
  //   }
  // };

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
          {/* {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-xl p-6 shadow-sm glass glass-hover">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)}/10 text-${getLevelColor(skill.level).split('-')[1]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-accent/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                        style={{ 
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : 
                                 skill.level === 'Intermediate' ? '60%' : '40%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))} */}
          {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-card rounded-xl p-6 shadow-sm glass glass-hover hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-accent/20">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-center gap-3 text-base"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
} 