"use client";

import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { AnimatedElement, AnimatedSection } from "../ui/AnimatedSection";

export function ProjectsSection() {
  const projects = [
    {
      title: "Frontend Interview Questions",
      description:
        "A full package that contains a list of questions that are asked in frontend interviews.",
      imageSrc: "/images/project1.jpg",
      tags: [
        ".md files",
        "Github Pages",
        "Markdown",
        "Frontend",
        "Cheatsheet",

      ],
      link: "https://github.com/OmidJavaherii/frontend-interview-questions/",
      preview: "https://omidjavaherii.github.io/frontend-interview-questions/",
    },
    {
      title: "E-commerce Shop: Royal Jeans",
      description:
        "A fully responsive e-commerce platform for a clothing factory has a payment gateway for the users to pay for their orders.",
      imageSrc: "/images/project2.jpg",
      tags: [
        "Next.js",
        "JavaScript",
        "Bootstrap",
        "Sweat alert",
        "Redux",
        "mapbox-gl",
        "swiper",
      ],
      preview: "https://royaljeans.ir/",
    },
    {
      title: "Restaurant Website: Ghajari Food",
      description:
        "A traditional restaurant website with a dashboard for the admin to manage the orders and the products and users.",
      imageSrc: "/images/project3.jpg",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Toastify",
        "Zustand",
      ],
      preview: "https://ghajarifood.com/",
    },
    {
      title: "ETF Online: Online Trading Platform",
      description:
        "A scalable, responsive online trading platform featuring real-time stock charts, dynamic content routing, and secure admin and user dashboards.",
      imageSrc: "/images/project4.jpg",
      tags: [
        "Next.js",
        "TypeScript",
        "Daysi UI",
        "Tailwind CSS",
        "Socket IO",
      ],
      preview: "https://etfonline.ir/",
    },
    {
      title: "Pathfinding Visualizer",
      description:
        "An interactive web app visualizing multiple pathfinding algorithms with a responsive grid, real-time execution, and adjustable speed.",
      imageSrc: "/images/project5.jpg",
      tags: [
        "Next.js",
        "TypeScript",
        "PWA",
        "Algorithms",
        "Tailwind CSS",
      ],
      link: "https://github.com/OmidJavaherii/Path-finder-Algorithm/",
      preview: "https://pathfinderalgorithm.netlify.app/",
    },
    // {
    //   title: "Restaurant Menu Website",
    //   description:
    //     "A fully responsive e-commerce platform with cart, checkout, and payment integration.",
    //   imageSrc: "/images/project7.jpg",
    //   tags: [
    //     "Next.js",
    //     "TypeScript",
    //     "Zustand",
    //     "React Query",
    //     "React Hook Form",
    //     "Toastify",
    //     "MUI",
    //     "Tailwind CSS",
    //   ],
    //   link: "https://github.com/OmidJavaherii/restaurant-menu/",
    //   preview: "https://restaurant-menu-one-chi.vercel.app",
    // },

    {
      title: "Happy New year",
      description:
        "Responsive creative web for happy new year supporting two languages.",
      imageSrc: "/images/project6.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com/OmidJavaherii/my-404-page/",
      preview: "https://my-404-page-phi.vercel.app/",
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
