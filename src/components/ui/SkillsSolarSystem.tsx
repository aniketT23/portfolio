"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SKILLS } from "@/data/skills";
import SkillIcon from "@/components/ui/SkillIcon";

const CATEGORIES = ["Frontend", "Backend", "Languages", "Database", "DevOps & Cloud", "AI", "Tools"] as const;

const ORBIT_COLORS = [
  "rgba(123, 47, 247, 0.20)",
  "rgba(0, 212, 255, 0.18)",
  "rgba(255, 106, 0, 0.16)",
  "rgba(123, 47, 247, 0.14)",
  "rgba(0, 212, 255, 0.14)",
  "rgba(255, 45, 85, 0.14)",
  "rgba(255, 215, 0, 0.14)",
];

const CATEGORY_COLORS = [
  "#a855f7",
  "#00d4ff",
  "#ff6a00",
  "#7b2ff7",
  "#22d3ee",
  "#ff2d55",
  "#ffd700",
];

// Orbit radii - well separated
const ORBIT_RADII = [80, 130, 185, 235, 290, 340, 390];

// Real solar system: inner planets orbit MUCH faster, outer planets are slow
// Mercury ~88 days, Venus ~225, Earth ~365, Mars ~687, Jupiter ~4333, Saturn ~10759, Neptune ~60190
// Translated to seconds: inner = fast, outer = very slow
const ORBIT_SPEEDS = [18, 28, 38, 50, 65, 80, 100];

// Alternate rotation directions like real orbits for visual variety
const ORBIT_DIRECTIONS = [1, -1, 1, -1, 1, -1, 1]; // 1 = clockwise, -1 = counter-clockwise

const NODE_SIZE = 36; // px

interface SkillNodeProps {
  name: string;
  color: string;
  angle: number;
  radius: number;
  duration: number;
  direction: number;
  index: number;
}

function SkillNode({ name, color, angle, radius, duration, direction, index }: SkillNodeProps) {
  const [hovered, setHovered] = useState(false);
  const rotateTarget = 360 * direction;

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        width: 0,
        height: 0,
      }}
      animate={{ rotate: rotateTarget }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay: -(angle / 360) * duration,
      }}
    >
      {/* Position node exactly on the orbit ring — center of node sits on radius */}
      <motion.div
        className="absolute"
        style={{
          left: radius - NODE_SIZE / 2,
          top: -(NODE_SIZE / 2),
          width: NODE_SIZE,
          height: NODE_SIZE,
        }}
        // counter-rotate to keep icon upright
        animate={{ rotate: -rotateTarget }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: -(angle / 360) * duration,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center rounded-full cursor-pointer"
          style={{
            width: NODE_SIZE,
            height: NODE_SIZE,
            background: `radial-gradient(circle, ${color}55 0%, ${color}15 60%, transparent 100%)`,
            border: `1.5px solid ${color}88`,
            boxShadow: hovered
              ? `0 0 20px ${color}88, 0 0 40px ${color}44`
              : `0 0 8px ${color}33`,
            zIndex: hovered ? 100 : 10 + index,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={hovered ? { scale: 1.35 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <SkillIcon
            name={name}
            className="w-4 h-4 sm:w-5 sm:h-5"
            style={{ color }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            <span
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded font-medium"
              style={{
                background: "rgba(10, 10, 15, 0.95)",
                border: `1px solid ${color}55`,
                color,
              }}
            >
              {name}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSolarSystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const maxRadius = ORBIT_RADII[ORBIT_RADII.length - 1];

  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{ height: `min(90vw, ${maxRadius * 2 + 80}px)` }}
    >
      {/* Central Core */}
      <motion.div
        className="absolute z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle, rgba(123,47,247,0.7) 0%, rgba(0,212,255,0.3) 40%, transparent 70%)",
          boxShadow: "0 0 60px rgba(123,47,247,0.5), 0 0 120px rgba(0,212,255,0.2)",
        }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(123,47,247,0.5), 0 0 120px rgba(0,212,255,0.2)",
            "0 0 90px rgba(123,47,247,0.8), 0 0 180px rgba(0,212,255,0.4)",
            "0 0 60px rgba(123,47,247,0.5), 0 0 120px rgba(0,212,255,0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs sm:text-sm font-bold text-white/90 text-center leading-tight">
          Full<br />Stack
        </span>
      </motion.div>

      {/* Orbit rings */}
      {CATEGORIES.map((category, catIndex) => {
        const radius = ORBIT_RADII[catIndex];
        return (
          <div
            key={`ring-${category}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: radius * 2,
              height: radius * 2,
              border: `1px solid ${ORBIT_COLORS[catIndex]}`,
            }}
          />
        );
      })}

      {/* Skill nodes - rendered individually so they don't block each other */}
      {mounted &&
        CATEGORIES.map((category, catIndex) => {
          const skills = SKILLS.filter((s) => s.category === category);
          const radius = ORBIT_RADII[catIndex];
          const duration = ORBIT_SPEEDS[catIndex];
          const color = CATEGORY_COLORS[catIndex];
          const direction = ORBIT_DIRECTIONS[catIndex];

          return skills.map((skill, skillIndex) => {
            const angle = (skillIndex / skills.length) * 360;
            return (
              <SkillNode
                key={skill.name}
                name={skill.name}
                color={color}
                angle={angle}
                radius={radius}
                duration={duration}
                direction={direction}
                index={catIndex * 10 + skillIndex}
              />
            );
          });
        })}

      {/* Category legend */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {CATEGORIES.map((cat, i) => (
          <div key={cat} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: CATEGORY_COLORS[i], boxShadow: `0 0 6px ${CATEGORY_COLORS[i]}66` }}
            />
            <span className="text-[10px] sm:text-xs text-gray-400">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
