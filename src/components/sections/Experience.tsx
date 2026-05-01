"use client";

import { EXPERIENCES } from "@/data/experience";
import { motion } from "motion/react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-alt py-24 sm:py-32 px-6 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
            Experience
          </p>
          <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-[var(--foreground)]">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.period}
              className="relative pl-6 border-l border-[var(--border)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] border-2 border-[var(--background)]" />

              <div className="mb-3">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)]">
                  {exp.role}
                </h3>
                <p className="text-sm text-[var(--accent-secondary)]">
                  {exp.company} — {exp.location}
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">{exp.period}</p>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed flex gap-2"
                  >
                    <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
