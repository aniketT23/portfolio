"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 sm:py-40 px-6 sm:px-10 w-full overflow-hidden"
    >
      {/* Parallax bg */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_80%,#1a0a2e_0%,transparent_60%)] opacity-30" />
        {/* Seal circle */}
        <motion.div
          className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[var(--accent)]/[0.03]"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-[var(--accent)] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--foreground)] leading-tight">
            Let&apos;s connect
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-lg mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </motion.div>

        <motion.form
          className="space-y-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="name" className="block text-[10px] text-[var(--muted)] mb-3 uppercase tracking-[0.2em]">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full bg-transparent border-b border-[var(--border)] px-0 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] transition-colors duration-500"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-[10px] text-[var(--muted)] mb-3 uppercase tracking-[0.2em]">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-transparent border-b border-[var(--border)] px-0 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] transition-colors duration-500"
                placeholder="you@example.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-[10px] text-[var(--muted)] mb-3 uppercase tracking-[0.2em]">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-transparent border-b border-[var(--border)] px-0 py-3 text-sm text-[var(--foreground)] placeholder-[var(--muted)]/40 focus:outline-none focus:border-[var(--accent)] transition-colors duration-500 resize-none"
              placeholder="Tell me about your project..."
            />
          </motion.div>

          <motion.div
            className="flex justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              type="submit"
              className="px-10 py-3 text-sm bg-gradient-to-r from-[var(--accent)] to-[#ff6b35] text-[#06060a] rounded-full font-semibold hover:shadow-[0_0_30px_rgba(240,160,80,0.3)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xs text-[var(--muted)] mb-2">Or reach me directly at</p>
          <a
            href="mailto:tiwarianiket91@gmail.com"
            className="text-sm text-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
          >
            tiwarianiket91@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
