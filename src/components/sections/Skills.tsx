"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SKILLS } from "@/data/skills";

const CATEGORIES = [
  { name: "Frontend", icon: "◈", color: "#f0a050" },
  { name: "Backend", icon: "△", color: "#6e8efb" },
  { name: "Languages", icon: "⬢", color: "#e06070" },
  { name: "Database", icon: "◇", color: "#50c878" },
  { name: "DevOps & Cloud", icon: "⊕", color: "#8b5cf6" },
  { name: "AI", icon: "✧", color: "#f59e0b" },
  { name: "Tools", icon: "⊙", color: "#06b6d4" },
] as const;

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [100, -40]);

  const leftCategories = CATEGORIES.slice(0, 4);
  const rightCategories = CATEGORIES.slice(4);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 sm:py-40 px-6 sm:px-10 w-full overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,#1a0a2e_0%,transparent_60%)] opacity-30" />
        {/* Naruto-style summoning circle BG */}
        <motion.div
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-[var(--accent)]/[0.03]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-dashed border-[var(--accent-secondary)]/[0.03]"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
            style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 4) * 20}%` }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}
      </div>

      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[var(--accent)] mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[var(--foreground)] leading-tight">
            Jutsu Arsenal
          </h2>
        </motion.div>

        {/* Two-column masonry with parallax offset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column */}
          <motion.div className="space-y-6" style={{ y: leftColY }}>
            {leftCategories.map((category, catIdx) => {
              const categorySkills = SKILLS.filter((s) => s.category === category.name);
              if (categorySkills.length === 0) return null;
              return (
                <SkillCard
                  key={category.name}
                  category={category}
                  skills={categorySkills}
                  index={catIdx}
                />
              );
            })}
          </motion.div>

          {/* Right column - offset for parallax feel */}
          <motion.div className="space-y-6 lg:mt-24" style={{ y: rightColY }}>
            {rightCategories.map((category, catIdx) => {
              const categorySkills = SKILLS.filter((s) => s.category === category.name);
              if (categorySkills.length === 0) return null;
              return (
                <SkillCard
                  key={category.name}
                  category={category}
                  skills={categorySkills}
                  index={catIdx + 4}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  category,
  skills,
  index,
}: {
  category: { name: string; icon: string; color: string };
  skills: { name: string }[];
  index: number;
}) {
  return (
    <motion.div
      className="group relative p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]/60 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ borderColor: category.color, y: -4 }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${category.color}0a 0%, transparent 60%)`,
        }}
      />

      {/* Chakra line accent */}
      <div
        className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${category.color}40, transparent)` }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            className="text-2xl"
            style={{ color: category.color }}
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            {category.icon}
          </motion.span>
          <h3 className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: category.color }}>
            {category.name}
          </h3>
          <div className="flex-1 h-[1px] ml-2" style={{ background: `linear-gradient(90deg, ${category.color}20, transparent)` }} />
        </div>

        {/* Skills with staggered animation */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              className="px-3.5 py-2 text-xs text-[var(--foreground)]/70 border border-[var(--border)] rounded-lg hover:text-[var(--foreground)] transition-all duration-200 cursor-default"
              style={{
                // @ts-expect-error CSS custom property
                "--hover-border": category.color,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 + i * 0.04 }}
              whileHover={{
                borderColor: category.color,
                boxShadow: `0 0 15px ${category.color}15`,
                y: -1,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
