"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import SkillsSolarSystem from "@/components/ui/SkillsSolarSystem";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-anime-dark-alt text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl w-full">
        <SectionHeading title="Skills" subtitle="Hover over the orbiting icons to explore" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SkillsSolarSystem />
        </motion.div>
      </div>
    </section>
  );
}
