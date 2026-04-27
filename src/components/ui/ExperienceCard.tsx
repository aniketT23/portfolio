import { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 group">
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-[#0a0a0f] shadow-[0_0_10px_rgb(123_47_247/0.5)]" />
      <div className="mb-1">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {experience.role}
        </h3>
        <p className="text-purple-400 text-sm sm:text-base font-medium">
          {experience.company} — {experience.location}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">{experience.period}</p>
      </div>
      <ul className="mt-3 space-y-2">
        {experience.highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-xs sm:text-sm text-gray-400 leading-relaxed flex gap-2"
          >
            <span className="text-purple-400 mt-1 shrink-0">▹</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
