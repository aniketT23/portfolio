"use client";

import { motion } from "motion/react";

/* ═══════════════════════════════════════════
   CHIDORI — Real lightning bolts that crackle
   ═══════════════════════════════════════════ */
export function ChidoriEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {/* Lightning bolt SVGs */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
        {/* Main bolt */}
        <motion.path
          d="M 50,0 L 60,40 L 45,42 L 65,90 L 50,92 L 80,150 L 55,152 L 90,220"
          fill="none"
          stroke="rgba(0,212,255,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#chidori-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.3, 0.7, 1] }}
        />
        {/* Secondary bolt */}
        <motion.path
          d="M 350,0 L 340,50 L 355,52 L 330,100 L 345,102 L 310,170"
          fill="none"
          stroke="rgba(110,231,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#chidori-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8, delay: 0.3, times: [0, 0.3, 0.7, 1] }}
        />
        {/* Tertiary bolt */}
        <motion.path
          d="M 200,280 L 190,240 L 210,238 L 185,190 L 205,188 L 175,140"
          fill="none"
          stroke="rgba(0,180,255,0.5)"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#chidori-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1, delay: 0.6, times: [0, 0.3, 0.7, 1] }}
        />
        {/* Side crackling */}
        <motion.path
          d="M 0,100 L 30,95 L 25,105 L 55,98 L 50,110 L 80,102"
          fill="none"
          stroke="rgba(0,212,255,0.4)"
          strokeWidth="1"
          filter="url(#chidori-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1.2, delay: 0.15 }}
        />
        <motion.path
          d="M 400,200 L 370,195 L 375,210 L 345,200 L 350,215 L 320,205"
          fill="none"
          stroke="rgba(110,231,255,0.4)"
          strokeWidth="1"
          filter="url(#chidori-glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 0.9, delay: 0.45 }}
        />
        <defs>
          <filter id="chidori-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Electric spark particles — fixed positions to avoid hydration mismatch */}
      {[
        { left: 22, top: 18, repeatDelay: 1.1, delay: 0.2 },
        { left: 55, top: 48, repeatDelay: 1.6, delay: 0.7 },
        { left: 38, top: 72, repeatDelay: 0.9, delay: 1.3 },
        { left: 75, top: 35, repeatDelay: 1.8, delay: 0.5 },
        { left: 63, top: 85, repeatDelay: 1.3, delay: 1.8 },
        { left: 30, top: 55, repeatDelay: 2.0, delay: 1.0 },
      ].map((spark, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-300"
          style={{
            left: `${spark.left}%`,
            top: `${spark.top}%`,
            boxShadow: "0 0 6px 2px rgba(0,212,255,0.8)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: spark.repeatDelay,
            delay: spark.delay,
          }}
        />
      ))}

      {/* Overall card electric glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 via-transparent to-cyan-500/5" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   RASENGAN — Spinning blue energy sphere
   ═══════════════════════════════════════════ */
export function RasenganEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {/* Rasengan sphere — top-right corner */}
      <div className="absolute -top-6 -right-6 w-28 h-28">
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(100,180,255,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Energy rings */}
        <motion.div
          className="absolute inset-4 rounded-full"
          style={{
            border: "2px solid rgba(100,180,255,0.3)",
            boxShadow: "0 0 15px rgba(100,180,255,0.2), inset 0 0 15px rgba(100,180,255,0.1)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-6 rounded-full"
          style={{
            border: "1.5px solid rgba(150,200,255,0.4)",
            boxShadow: "0 0 10px rgba(150,200,255,0.3)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full"
          style={{
            border: "1px solid rgba(200,220,255,0.5)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
        />

        {/* Core glow */}
        <motion.div
          className="absolute inset-10 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(180,220,255,0.6) 0%, rgba(100,180,255,0.3) 50%, transparent 100%)",
            boxShadow: "0 0 20px rgba(100,180,255,0.5)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(100,180,255,0.5)",
              "0 0 35px rgba(100,180,255,0.8)",
              "0 0 20px rgba(100,180,255,0.5)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Spiral lines inside */}
        <svg className="absolute inset-4 w-full h-full" viewBox="0 0 80 80">
          <motion.circle
            cx="40" cy="40" r="25"
            fill="none"
            stroke="rgba(180,220,255,0.3)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "40px 40px" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="40" cy="40" r="18"
            fill="none"
            stroke="rgba(200,230,255,0.4)"
            strokeWidth="0.5"
            strokeDasharray="3 6"
            animate={{ rotate: -360 }}
            style={{ transformOrigin: "40px 40px" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Subtle card glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-blue-500/5 via-transparent to-blue-400/3" />
    </div>
  );
}

/* ═══════════════════════════════════════════
   SHARINGAN — Mangekyō Sharingan eye pattern
   (Based on Sasuke's Eternal Mangekyō)
   ═══════════════════════════════════════════ */
export function SharinganEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      {/* Sharingan eye — center of card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        {/* Outer red glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,45,85,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Sharingan SVG */}
        <motion.svg
          className="absolute inset-2 w-full h-full"
          viewBox="0 0 200 200"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {/* Outer ring */}
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,45,85,0.25)" strokeWidth="2" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,45,85,0.15)" strokeWidth="1" />

          {/* Mangekyō pattern — 3 curved blades forming the star */}
          {[0, 120, 240].map((rotation) => (
            <g key={rotation} transform={`rotate(${rotation} 100 100)`}>
              {/* Blade petal */}
              <path
                d="M 100,30 Q 140,70 100,100 Q 60,70 100,30"
                fill="rgba(255,45,85,0.12)"
                stroke="rgba(255,45,85,0.4)"
                strokeWidth="1.5"
              />
              {/* Inner curve */}
              <path
                d="M 100,45 Q 130,75 100,100"
                fill="none"
                stroke="rgba(255,80,100,0.3)"
                strokeWidth="1"
              />
            </g>
          ))}

          {/* Inner circle ring */}
          <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(255,45,85,0.3)" strokeWidth="1.5" />

          {/* 3 tomoe dots */}
          {[0, 120, 240].map((rotation) => (
            <circle
              key={`tomoe-${rotation}`}
              cx={100 + 35 * Math.cos(((rotation - 90) * Math.PI) / 180)}
              cy={100 + 35 * Math.sin(((rotation - 90) * Math.PI) / 180)}
              r="5"
              fill="rgba(255,45,85,0.5)"
            />
          ))}

          {/* Center pupil */}
          <circle cx="100" cy="100" r="12" fill="rgba(255,45,85,0.2)" />
          <circle cx="100" cy="100" r="6" fill="rgba(255,45,85,0.35)" />
          <circle cx="100" cy="100" r="3" fill="rgba(255,45,85,0.5)" />
        </motion.svg>
      </div>

      {/* Red ambient glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 via-transparent to-red-500/3" />
    </div>
  );
}
