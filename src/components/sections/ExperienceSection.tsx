"use client";

import { experiences } from "@/data/experiences";
import { AnimatedSection } from "../ui/AnimatedSection";
import { AnimatedElement } from "../ui/AnimatedSection";

export function ExperienceSection() {
  return (
    <AnimatedSection
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-accent/2"
      animation="fadeIn"
      delay={0.1}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedElement
          as="div"
          className="text-center mb-16"
          animation="slideUp"
          delay={0.2}
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-current/50">
            My professional journey and work experience
          </p>
        </AnimatedElement>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <AnimatedElement
              key={index}
              as="div"
              className="relative pl-8 border-l-2 border-accent mb-0 py-8"
              animation="slideUp"
              delay={0.3 + index * 0.1}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="">{experience.company}</p>
                <p className="text-sm text-current/50">{experience.period}</p>
              </div>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-current/50">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
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
