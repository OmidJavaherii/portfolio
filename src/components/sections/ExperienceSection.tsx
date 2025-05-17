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
    company: "Desna (Tehran, Iran)",
    period: "Apr 2025 - Present",
    description: [
      "Developed and delivered 3 key projects, including a B2B clothing e-commerce platform, a corporate web application, and two interactive dashboard applications, using Next.js, React, TypeScript, and JavaScript",
      "Implemented responsive and high-performance user interfaces with a focus on seamless user experience and scalability",
      "Utilized Redux for state management, React Hook Form with Yup for form validation, and Tailwind CSS/MUI for modern, efficient styling",
      "Collaborated on-site with cross-functional teams to ensure project alignment with business goals and technical requirements",
      "Actively adopted and integrated new front-end technologies to enhance project quality and stay aligned with industry trends",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
      "Git",
      "Gitlab",
      "GitHub",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Freelancer (Tehran, Iran)",
    period: "Feb 2023 -Apr 2025",
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
      "Netlify",
    ],
  },
  {
    title: "Technical Project Management",
    company: "iSEE Smart Home (Isfahan-Tehran, Iran) ",
    period: "Apr 2019 -Mar 2025",
    description: [
      "Managed 20+ projects (10+ units each), ensuring timely delivery and team coordination",
      "Led R&D for 10+ units, optimizing functionality and solving technical challenges",
      "Consulted 40+ clients, achieving 95%+ satisfaction by delivering tailored smart solutions",
      "Quickly adapted to new electronics technologies, showcasing rapid learning and problem-solving skills",
    ],
    technologies: [
      "Product Management",
      "C",
      "Java",
      "Project Management",
      "Team Management",
      "Customer Service",
      "Problem Solving",
      "Time Management",
    ],
  },
];

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
          animation="fadeIn"
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
              className="relative pl-8 border-l-2 border-accent"
              animation="slideLeft"
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
