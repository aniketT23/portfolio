"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex items-center justify-center bg-anime-dark-alt text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="slash-marks" />
      <AnimatedSection className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Image placeholder */}
        <AnimatedSection delay={0.2} className="flex justify-center">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-[#0d0520] border-2 border-purple-500/40 flex items-center justify-center text-gray-500 text-sm sm:text-base animate-glow-pulse">
            Your Photo
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.4} className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
            Full Stack Developer with 4+ years of experience specialising in the
            design and delivery of modular Micro UI and distributed API architectures.
            I bridge the gap between complex backend logic and reactive frontend
            experiences using C#, .NET, and frameworks such as Angular, React, Python,
            and GenAI.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
            Beyond core development, I bring a Product-DevOps mindset: automating
            entire infrastructures via CI/CD, optimising system reliability through
            Grafana observability, and integrating Generative AI solutions — including
            a GPT-4 tool published on the Microsoft Marketplace.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
            I thrive in fast-paced environments where I can build scalable, secure,
            and maintainable systems from the ground up.
          </p>
          <a
            href="https://drive.google.com/file/d/1fTzJ9jHFIyTbby1V2qk3FpxlWQVUBJI7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 text-sm border border-purple-500/50 text-purple-300 rounded-md hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgb(123_47_247/0.3)] transition-all duration-300"
          >
            View Resume
          </a>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}
