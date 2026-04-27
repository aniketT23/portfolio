import { Project } from "@/types";
import { motion } from "motion/react";
import { ChidoriEffect, RasenganEffect, SharinganEffect } from "@/components/ui/JutsuEffects";

const JUTSU_CONFIG: Record<string, {
  label: string;
  character: string;
  borderColor: string;
  glowColor: string;
  accentColor: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  Effect: React.ComponentType;
}> = {
  chidori: {
    label: "⚡ Chidori",
    character: "Kakashi's Lightning Blade",
    borderColor: "border-cyan-400/20 hover:border-cyan-400/60",
    glowColor: "hover:shadow-[0_0_30px_rgb(0_212_255/0.3),0_0_60px_rgb(0_212_255/0.15)]",
    accentColor: "text-cyan-400",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
    tagText: "text-cyan-300",
    Effect: ChidoriEffect,
  },
  rasengan: {
    label: "🌀 Rasengan",
    character: "Naruto's Spiraling Sphere",
    borderColor: "border-blue-400/20 hover:border-blue-400/60",
    glowColor: "hover:shadow-[0_0_30px_rgb(0_140_255/0.3),0_0_60px_rgb(0_140_255/0.15)]",
    accentColor: "text-blue-400",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
    tagText: "text-blue-300",
    Effect: RasenganEffect,
  },
  sharingan: {
    label: "👁️ Sharingan",
    character: "Sasuke's Eternal Mangekyō",
    borderColor: "border-red-400/20 hover:border-red-500/60",
    glowColor: "hover:shadow-[0_0_30px_rgb(255_45_85/0.3),0_0_60px_rgb(255_45_85/0.15)]",
    accentColor: "text-red-400",
    tagBg: "bg-red-500/10",
    tagBorder: "border-red-500/20",
    tagText: "text-red-300",
    Effect: SharinganEffect,
  },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const jutsu = project.jutsu ? JUTSU_CONFIG[project.jutsu] : null;

  return (
    <motion.div
      className={`group relative bg-[#0d0520]/80 rounded-xl p-4 sm:p-6 border transition-all duration-500 ${
        jutsu ? `${jutsu.borderColor} ${jutsu.glowColor}` : "border-purple-500/10 hover:border-purple-500/40"
      }`}
      whileHover={{ y: -10, transition: { duration: 0.3, type: "spring", stiffness: 200 } }}
    >
      {/* Jutsu visual effect overlay */}
      {jutsu && <jutsu.Effect />}

      {/* Jutsu content wrapper (above effects) */}
      <div className="relative z-10">
        {/* Jutsu badge */}
        {jutsu && (
          <div className="flex items-center justify-between mb-3">
            <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${jutsu.accentColor}`}>
              {jutsu.label}
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-600 italic">
              {jutsu.character}
            </span>
          </div>
        )}

        <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors ${
          jutsu ? `group-hover:${jutsu.accentColor}` : "group-hover:text-purple-400"
        }`}>
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-1 rounded border ${
                jutsu ? `${jutsu.tagBg} ${jutsu.tagBorder} ${jutsu.tagText}` : "bg-purple-500/10 border-purple-500/20 text-purple-300"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs sm:text-sm px-4 py-1.5 rounded-md border transition-all duration-300 ${
                  jutsu
                    ? `border-current/50 ${jutsu.accentColor} hover:bg-current/10`
                    : "border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Live
              </motion.a>
            )}
            {project.sourceUrl && (
              <motion.a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm px-4 py-1.5 border border-gray-600 text-gray-300 rounded-md hover:border-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Source Code
              </motion.a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
