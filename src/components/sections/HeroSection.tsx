"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, MessageCircle } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8"
    >
      {/* Background Grid Pattern (Neobrutalism style) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`,
          backgroundSize: "60px 60px",
          opacity: 0.05
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full">

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3 rounded-full border-4 border-black bg-neo-lime px-6 py-2.5 shadow-[4px_4px_0_0_#000]"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-black" />
          </span>
          <span className="text-sm font-bold text-black uppercase tracking-wide">Available for Work</span>
        </motion.div>

        {/* Hero Title container */}
        <div className="mb-6 mt-8 sm:mt-10 relative w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative sm:absolute sm:-top-10 sm:left-0 md:-top-12 md:-left-8 sm:-rotate-6 bg-neo-yellow neo-border px-3 py-1 shadow-[4px_4px_0_0_#000] z-20 self-start mb-3 sm:mb-0 inline-block"
          >
            <span className="font-black text-lg md:text-xl">Hello! 👋</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black tracking-tighter uppercase leading-tight md:leading-none">
            Achmad Haidar Tamimi<span className="text-neo-cyan text-stroke-black relative inline-block">

            </span>
          </h1>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 mt-4 sm:mt-6 inline-block bg-black px-4 sm:px-6 py-2.5 sm:py-3"
        >
          <div className="text-base sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider h-7 sm:h-8">
            <Typewriter texts={["Software Developer", "Web Developer", "Data Analyst"]} />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <button
            id="hero-cta-projects"
            onClick={() => scrollTo("projects")}
            className="flex w-full sm:w-auto items-center justify-center gap-3 bg-neo-cyan px-10 py-4 text-lg neo-btn text-black hover:bg-white"
          >
            <ExternalLink className="h-5 w-5 stroke-[3]" />
            Lihat Proyek
          </button>

          <button
            id="hero-cta-contact"
            onClick={() => scrollTo("contact")}
            className="flex w-full sm:w-auto items-center justify-center gap-3 bg-white px-10 py-4 text-lg neo-btn text-black hover:bg-neo-yellow"
          >
            <MessageCircle className="h-5 w-5 stroke-[3]" />
            Hubungi Saya
          </button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => scrollTo("about")}
          className="mt-12 sm:mt-24 flex flex-col items-center gap-3 group"
          aria-label="Scroll to About section"
        >
          <div className="flex h-12 w-12 items-center justify-center bg-white neo-border shadow-[4px_4px_0_0_#000] group-hover:translate-y-2 transition-transform duration-300">
            <ArrowDown className="h-6 w-6 text-black stroke-[3]" />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
