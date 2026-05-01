"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/data/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#06060a]/80 backdrop-blur-md border-b border-[var(--border)]/50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          AT.
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]/50 bg-[#06060a]/95 backdrop-blur-md"
          >
            <ul className="px-6 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
