"use client";

import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedElement } from "../ui/AnimatedSection";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Front-End Developer",
    company: "Self-Taught & Training (Tehran, Iran)",
    period: "2023 - Present",
    description: [
      "I have been learning and practicing Front-End Development for nearly two years",
      "I have completed 10+ projects using Next.js, React, TypeScript, and JavaScript",
      "I've built 5+ responsive web applications, focusing on performance and user experience",
      "Committed to continuous learning, I adapt to new technologies each year to stay updated with modern front-end trends",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
      "Figma",
      "MUI",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Technical Project Management",
    company: "iSEE Smart Home (Isfahan-Tehran, Iran) ",
    period: "2019 - 2025",
    description: [
      "Managed 20+ projects (10+ units each), ensuring timely delivery and team coordination",
      "Led R&D for 10+ units, optimizing functionality and solving technical challenges",
      "Consulted 40+ clients, achieving 85%+ satisfaction by delivering tailored smart solutions",
      "Quickly adapted to new electronics technologies, showcasing rapid learning and problem-solving skills",
    ],
    technologies: ["C", "Java", "Project Management", "Team Management", "Customer Service", "Problem Solving", "Time Management",],
  },
];

export function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/5"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedElement
          as="div"
          className="text-center mb-16"
          animation="fadeIn"
          delay={0.2}
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-600">
            My professional journey and work experience
          </p>
        </AnimatedElement>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <AnimatedElement
              key={index}
              as="div"
              className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
              animation="slideLeft"
              delay={0.3 + index * 0.1}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:border-blue-400" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-600">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-600">
                  {experience.period}
                </p>
              </div>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
