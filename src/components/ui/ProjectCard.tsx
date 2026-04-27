import { Project } from "@/types";
import { motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="anime-card group bg-[#0d0520]/80 border border-purple-500/10 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all duration-300"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="w-full h-32 sm:h-40 bg-[#1a1030] rounded-lg mb-3 sm:mb-4 flex items-center justify-center text-gray-600 text-xs sm:text-sm">
        Screenshot
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded border border-purple-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.liveUrl || project.sourceUrl) && (
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-4 py-1.5 border border-purple-500/50 text-purple-300 rounded-md hover:bg-purple-500/20 hover:shadow-[0_0_10px_rgb(123_47_247/0.3)] transition-all duration-300"
            >
              See Live
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-4 py-1.5 border border-gray-600 text-gray-300 rounded-md hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300"
            >
              Source Code
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
