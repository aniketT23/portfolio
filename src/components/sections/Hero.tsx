"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

const ParticleBackground = dynamic(
  () => import("@/components/three/ParticleBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center bg-anime-dark text-white overflow-hidden"
    >
      <ParticleBackground />

      {/* Speed lines overlay */}
      <div className="speed-lines" />
      <div className="slash-marks" />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] animate-energy-aura" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.3em] text-purple-400/80 mb-3 sm:mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-4 sm:mb-6 animate-text-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aniket Tiwari
          </span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Full Stack Developer with 4+ years of experience in C#, .NET, Angular, React, Python &amp; GenAI — building scalable micro-frontends, distributed APIs, and AI-powered tools.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.a
            href="#projects"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border border-purple-500/50 text-purple-300 rounded-md hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgb(123_47_247/0.3)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_25px_rgb(123_47_247/0.4)] transition-all duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
