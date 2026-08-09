"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { SpotlightGrid } from "@/components/ui/spotlight-grid";

const ROLES = ["SOFTWARE DEVELOPER", "DATA ANALYST", "AI ENTHUSIAST"];

function DynamicRole() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrentText(ROLES[0]);
      return;
    }

    const fullRole = ROLES[roleIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && currentText === fullRole) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 50 : 85;
      timeoutId = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? fullRole.slice(0, prev.length - 1)
            : fullRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{ROLES[0]}</span>;
  }

  return (
    <span className="inline-flex items-center font-mono whitespace-nowrap">
      <span className="text-[#8B7CFF]">{currentText || "\u00A0"}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="text-white font-mono font-light ml-0.5 inline-block"
        aria-hidden="true"
      >
        |
      </motion.span>
    </span>
  );
}

function MinimalLiveClock() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTimeStr(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className="w-full border-t border-white/10 pt-4 pb-6 mt-auto relative z-10"
    >
      <div
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
        className="mx-auto max-w-6xl flex items-center justify-between gap-4 text-xs text-[#8A8A8A] tracking-normal select-none"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[#8B7CFF] font-medium">[{timeStr || "19:46:42"} WIB]</span>
          <span className="text-white/20">•</span>
          <span className="text-white/70">Yogyakarta, ID 🇮🇩</span>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0A0A0A] px-6 sm:px-10 lg:px-16 xl:px-20 pt-28 pb-2"
    >
      {/* Interactive Dot & Spotlight Background */}
      <SpotlightGrid />

      <div className="relative z-10 mx-auto max-w-6xl w-full my-auto pt-8 pb-12">
        {/* 1. Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono text-[#8B7CFF] uppercase tracking-wider select-none">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7CFF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7CFF]" />
            </span>
            <span>AVAILABLE FOR WORK</span>
          </span>
        </motion.div>

        {/* 2. Greeting (Below Badge) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#8A8A8A] mb-2.5 tracking-tight"
        >
          Hi, I'm <span className="text-white font-bold">Achmad Haidar</span> 👋
        </motion.p>

        {/* 2. Main Animated Role Title (LARGEST - Hero Focal Point) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.05] text-white mb-6 min-h-[1.15em] flex items-center"
        >
          <DynamicRole />
        </motion.h1>

        {/* 3. Subtitle / Value Proposition Description (SMALLEST & CLEANEST) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs sm:text-sm md:text-base text-[#8A8A8A] font-sans font-normal leading-relaxed max-w-xl mb-10"
        >
          I enjoy turning complex ideas and problems into practical, intuitive digital products.
        </motion.p>

        {/* 4. CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <button
            id="hero-cta-work"
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8B7CFF] text-black font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#9F92FF] transition-all transform hover:-translate-y-0.5"
          >
            <span>VIEW WORK</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </button>

          <a
            href="/cv-achmad-haidar-tamimi.pdf"
            download
            id="hero-cta-cv"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4 stroke-[2.5]" />
            <span>DOWNLOAD CV</span>
          </a>
        </motion.div>
      </div>

      {/* 5. Minimalist Live Clock */}
      <MinimalLiveClock />
    </section>
  );
}

