"use client";

import { SKILLS } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBar from "@/components/ui/SkillBar";
import { motion } from "motion/react";

const CATEGORIES = ["Frontend", "Backend", "Languages", "Database", "DevOps & Cloud", "AI", "Tools"] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-anime-dark-alt text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        <SectionHeading title="Skills" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CATEGORIES.map((category) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-lg font-bold text-purple-400 mb-4">{category}</h3>
              <div className="grid gap-4">
                {SKILLS.filter((s) => s.category === category).map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
