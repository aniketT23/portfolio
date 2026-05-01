"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 sm:py-40 px-6 sm:px-10 w-full overflow-hidden"
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,#1a0a2e_0%,transparent_70%)] opacity-30" />
        {/* Decorative seal */}
        <motion.div
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--accent)]/[0.04]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Section divider */}
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
            About
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-[var(--foreground)] leading-tight">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo with parallax */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-start"
            style={{ y: imgY }}
          >
            <motion.div
              className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] lg:w-[350px] lg:h-[450px]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-purple-500/10 rounded-2xl blur-[30px] scale-105" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[var(--accent)]/10">
                <Image
                  src="/images/profile2.jpg"
                  alt="Aniket Tiwari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 350px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060a]/60 via-transparent to-transparent" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-[var(--accent)]/30" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-[var(--accent)]/30" />
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: textY }}
          >
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-sm sm:text-base text-[var(--muted)] leading-[1.9]">
                Full Stack Developer with 4+ years of experience specialising in the
                design and delivery of modular Micro UI and distributed API architectures.
                I bridge the gap between complex backend logic and reactive frontend
                experiences using C#, .NET, and frameworks such as Angular, React, Python,
                and GenAI.
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-[1.9]">
                Beyond core development, I bring a Product-DevOps mindset: automating
                entire infrastructures via CI/CD, optimising system reliability through
                Grafana observability, and integrating Generative AI solutions — including
                a GPT-4 tool published on the Microsoft Marketplace.
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-[1.9]">
                I thrive in fast-paced environments where I can build scalable, secure,
                and maintainable systems from the ground up.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { num: "4+", label: "Years Exp" },
                { num: "10K+", label: "Users Served" },
                { num: "40%", label: "Faster Detection" },
                { num: "90%", label: "Test Coverage" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)]/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ borderColor: "rgba(240,160,80,0.3)", y: -2 }}
                >
                  <p className="text-2xl font-bold text-[var(--accent)] mb-1">{stat.num}</p>
                  <p className="text-[10px] sm:text-xs text-[var(--muted)]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://drive.google.com/file/d/1fTzJ9jHFIyTbby1V2qk3FpxlWQVUBJI7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-200 group mt-8"
              whileHover={{ x: 5 }}
            >
              View Resume
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
