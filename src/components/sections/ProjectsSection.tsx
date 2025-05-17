"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { AnimatedElement, AnimatedSection } from "../ui/AnimatedSection";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Shop: Royal Jeans",
      description: "Responsive creative web for happy new year supporting two languages.",
      imageSrc: "/images/project6.png",
      tags: ["Next.js", "JavaScript", "Tailwind CSS", "Vite"],
      link: "https://royaljeans.ir/",
      preview: "https://royaljeans.ir/",
    },
    {
      title: "Happy New year",
      description: "Responsive creative web for happy new year supporting two languages.",
      imageSrc: "/images/project1.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/OmidJavaherii/my-404-page/",
      preview: "https://my-404-page-phi.vercel.app/",
    },
    {
      title: "Restaurant Menu Website",
      description:
        "A fully responsive e-commerce platform with cart, checkout, and payment integration.",
      imageSrc: "/images/project2.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Zustand",
        "React Query",
        "React Hook Form",
        "Toastify",
        "MUI",
        "Tailwind CSS",
      ],
      link: "https://github.com/OmidJavaherii/restaurant-menu/",
      preview: "https://restaurant-menu-one-chi.vercel.app",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website showcasing projects and skills.",
      imageSrc: "/images/project3.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/OmidJavaherii/portfolio/",
      preview: "https://portfolio-umber-gamma-29.vercel.app/",
    },
    {
      title: "Game APP",
      description:
        "Developed an interactive Tic-Tac-Toe game with a smooth and responsive UI.",
      imageSrc: "/images/project4.png",
      tags: ["React", "TypeScript", "Context API", "PWA"],
      link: "https://github.com/OmidJavaherii/tic-tac-toe/",
      preview: "https://tic-tac-toe-ten-tau-23.vercel.app/",
    },
    {
      title: "Dashboard App",
      description:
        "An admin dashboard with data visualization, user management, and analytics.",
      imageSrc: "/images/project5.png",
      tags: ["React", "JavaScript", "Tailwind CSS", "React Router"],
      link: "https://github.com/OmidJavaherii/dashboard-react/",
      preview: "https://omidjavaherii-dashboard-admin.liara.run/",
    },
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
            Here are some of my recent projects. Each project represents a
            unique challenge and solution.
          </p>
        </div>

        <AnimatedElement
          as="div"
          animation="fadeInScale"
          delay={0.2}
        >
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
