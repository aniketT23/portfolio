"use client";

import { motion } from "motion/react";

interface ContactFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full bg-[#0d0520] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgb(123_47_247/0.2)] transition-all duration-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full bg-[#0d0520] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgb(123_47_247/0.2)] transition-all duration-300"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-[#0d0520] border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgb(123_47_247/0.2)] transition-all duration-300 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 hover:shadow-[0_0_20px_rgb(123_47_247/0.4)] transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}
