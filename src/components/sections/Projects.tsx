"use client";

import { PROJECTS } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-[100dvh] flex items-center justify-center bg-anime-dark text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full">
        <SectionHeading title="Projects" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
