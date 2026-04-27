"use client";

import { Skill } from "@/types";
import { motion } from "motion/react";
import SkillIcon from "@/components/ui/SkillIcon";

interface SkillBarProps {
  skill: Skill;
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="flex items-center gap-2">
      <SkillIcon name={skill.name} className="w-4 h-4 text-purple-400" />
      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
    </div>
  );
}
