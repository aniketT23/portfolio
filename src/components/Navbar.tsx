"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/data/navigation";
import DesktopNav from "@/components/ui/DesktopNav";
import MobileMenu from "@/components/ui/MobileMenu";
import HamburgerIcon from "@/components/ui/HamburgerIcon";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href="#home" className="text-xl font-bold tracking-wide bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Aniket Tiwari
        </a>

        <DesktopNav links={NAV_LINKS} />

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon isOpen={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <MobileMenu
          links={NAV_LINKS}
          onLinkClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
