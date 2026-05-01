"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Multi-layer parallax speeds
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sealRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden w-full"
    >
      {/* === LAYER 1: Deep background - dark sky gradient === */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-30%,#1a0a2e_0%,#06060a_50%)]" />
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 2 : 1,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 80}%`,
              opacity: 0.15 + (i % 5) * 0.08,
            }}
            animate={{ opacity: [0.1, 0.4 + (i % 3) * 0.2, 0.1] }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* === LAYER 2: Midground - Seal circles (Naruto summoning jutsu) === */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: midY }}
      >
        {/* Outer seal */}
        <motion.div
          className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[900px] lg:h-[900px] rounded-full border border-[var(--accent)]/[0.06]"
          style={{ rotate: sealRotate }}
        />

        {/* Inner seal */}
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full border border-dashed border-[var(--accent)]/[0.04]"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Core glow */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[var(--accent)]/[0.03] blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* === LAYER 3: Shadow soldiers rising (Solo Leveling effect) === */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
        style={{ y: fgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-[#06060a]/80 to-transparent" />
        {/* Shadow wisps */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-purple-900/10 to-transparent rounded-t-full"
            style={{
              left: `${5 + i * 12}%`,
              width: `${30 + (i % 3) * 20}px`,
              height: `${60 + (i % 4) * 30}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>

      {/* === LAYER 4: Floating chakra particles === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${(i * 7) % 100}%`,
              bottom: `${10 + (i % 6) * 5}%`,
              background: i % 2 === 0 ? "var(--accent)" : "var(--accent-secondary)",
            }}
            animate={{
              y: [0, -(100 + i * 40)],
              x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 5)],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
        {/* Text side */}
        <motion.div className="flex-1 text-center lg:text-left" style={{ y: textY, opacity }}>
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[var(--accent)] mb-6 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ⟨ Full-Stack Developer ⟩
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold leading-[0.9] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="block text-[var(--foreground)]"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              Aniket
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-[var(--accent)] to-[#ff6b35] bg-clip-text text-transparent"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              Tiwari
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-[var(--muted)] max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Building scalable micro-frontends, distributed APIs, and AI-powered
            tools with 4+ years of experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 text-sm border border-[var(--accent)]/30 text-[var(--foreground)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_20px_rgba(240,160,80,0.15)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 text-sm bg-gradient-to-r from-[var(--accent)] to-[#ff6b35] text-[#06060a] rounded-full font-semibold hover:shadow-[0_0_30px_rgba(240,160,80,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo side - parallax portrait */}
        <motion.div
          className="relative flex-shrink-0"
          style={{ y: photoY, scale: photoScale }}
        >
          <motion.div
            className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Photo glow behind */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/10 to-transparent rounded-3xl blur-[40px] scale-110" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[var(--accent)]/10">
              <Image
                src="/images/profile1.jpg"
                alt="Aniket Tiwari"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 380px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative corner marks */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)]/30 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)]/30 rounded-br-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* === Scroll indicator === */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-[var(--muted)]">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-[var(--accent)]/60 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
