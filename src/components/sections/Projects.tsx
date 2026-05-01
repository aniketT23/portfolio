"use client";

import { PROJECTS } from "@/data/projects";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const JUTSU_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  chidori: { border: "#06b6d4", glow: "rgba(6,182,212,0.15)", label: "⚡ Chidori" },
  rasengan: { border: "#6e8efb", glow: "rgba(110,142,251,0.15)", label: "🌀 Rasengan" },
  sharingan: { border: "#ef4444", glow: "rgba(239,68,68,0.15)", label: "👁 Sharingan" },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 sm:py-40 px-6 sm:px-10 w-full overflow-hidden"
    >
      {/* Parallax background layers */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_30%,#1a0a2e_0%,transparent_60%)] opacity-30" />
      </motion.div>

      {/* Shadow aura wisps (Solo Leveling) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-t from-purple-900/5 to-transparent rounded-t-full"
            style={{
              left: `${15 + i * 14}%`,
              bottom: 0,
              width: `${40 + (i % 3) * 15}px`,
              height: `${80 + (i % 4) * 40}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.02, 0.1, 0.02],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
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
            Projects
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[var(--foreground)] leading-tight">
            Selected work
          </h2>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, i) => {
            const jutsu = project.jutsu ? JUTSU_COLORS[project.jutsu] : null;
            return (
              <motion.div
                key={project.title}
                className="group relative p-8 sm:p-10 lg:p-12 rounded-2xl border bg-[var(--card-bg)]/40 backdrop-blur-sm overflow-hidden"
                style={{ borderColor: jutsu ? `${jutsu.border}20` : "var(--border)" }}
                initial={{ opacity: 0, y: 60, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  borderColor: jutsu ? jutsu.border : "var(--accent)",
                  boxShadow: jutsu ? `0 0 50px ${jutsu.glow}` : "0 0 50px rgba(240,160,80,0.08)",
                }}
              >
                {/* Jutsu glow on hover */}
                {jutsu && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(ellipse at top right, ${jutsu.glow}, transparent 60%)`,
                    }}
                  />
                )}

                {/* Project number watermark */}
                <motion.span
                  className="absolute top-6 right-8 text-7xl sm:text-[8rem] font-bold text-[var(--foreground)]/[0.02] select-none leading-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.4 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                <div className="relative z-10">
                  {/* Jutsu badge */}
                  {jutsu && (
                    <motion.span
                      className="inline-block text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-4"
                      style={{ color: jutsu.border }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {jutsu.label}
                    </motion.span>
                  )}

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1.5 rounded-lg border text-[var(--muted)]"
                        style={{ borderColor: jutsu ? `${jutsu.border}20` : "var(--border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium transition-colors flex items-center gap-1.5 group/link"
                        style={{ color: jutsu?.border || "var(--accent)" }}
                        whileHover={{ x: 3 }}
                      >
                        Live Demo
                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </motion.a>
                    )}
                    {project.sourceUrl && (
                      <motion.a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5 group/link"
                        whileHover={{ x: 3 }}
                      >
                        Source Code
                        <svg className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
