"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[100dvh] flex items-center justify-center bg-anime-dark-alt text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <AnimatedSection className="max-w-2xl w-full">
        <SectionHeading
          title="Get in Touch"
          subtitle="tiwarianiket91@gmail.com"
        />
        <ContactForm />
      </AnimatedSection>
    </section>
  );
}
