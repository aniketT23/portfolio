"use client";

import { Skill } from "@/types";
import { motion } from "motion/react";

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-[#1a1030] rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
