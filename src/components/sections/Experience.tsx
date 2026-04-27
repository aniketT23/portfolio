"use client";

import { EXPERIENCES } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[100dvh] flex items-center justify-center bg-anime-dark text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        <SectionHeading title="Experience" />
        <div className="grid gap-10 sm:gap-12">
          {EXPERIENCES.map((exp, i) => (
            <AnimatedSection key={exp.period} delay={i * 0.2}>
              <ExperienceCard experience={exp} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
