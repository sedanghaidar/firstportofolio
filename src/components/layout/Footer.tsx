"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] pt-12 pb-10 px-6 sm:px-10 lg:px-16 xl:px-20 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#8B7CFF]/10 blur-3xl" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase italic">
                SAY HAI!
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#8A8A8A] tracking-wide">
              Full-Stack Software Developer & Informatics Engineer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="editorial-card px-5 py-2.5 flex items-center gap-2 border border-white/10 bg-white/[0.02] hover:border-[#8B7CFF] rounded-full transition-all group font-mono text-xs text-white"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#8B7CFF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Copyright & Tech Stack Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-mono text-xs text-[#8A8A8A]">
          <p>© {new Date().getFullYear()} Achmad Haidar Tamimi. All rights reserved.</p>
          <p className="text-[11px] text-[#8A8A8A]/80">
            Crafted with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
