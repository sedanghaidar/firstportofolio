"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Remove any leftover light class on root html
    document.documentElement.classList.remove("light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Haidar portfolio top"
          >
            <span className="font-display font-black text-xl tracking-tighter text-white group-hover:text-[#8B7CFF] transition-colors italic">
              SAY HAI!
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B7CFF]" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "font-mono text-xs tracking-wider transition-colors relative py-1 focus:outline-none",
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8A8A8A] hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B7CFF]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA: CV Download */}
          <div className="flex items-center gap-4">
            <a
              href="/cv-achmad-haidar-tamimi.pdf"
              download
              id="nav-download-cv"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#8B7CFF] text-white hover:text-black font-mono text-xs font-semibold rounded-lg border border-white/10 hover:border-[#8B7CFF] transition-all duration-200"
            >
              <span>CV</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-[#111111] border-b border-white/10 p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "w-full text-left font-mono text-sm tracking-wider py-2 transition-colors",
                      isActive ? "text-[#8B7CFF] font-bold" : "text-[#8A8A8A] hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="/cv-achmad-haidar-tamimi.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 px-5 py-3 bg-[#8B7CFF] text-black font-mono text-sm font-semibold rounded-lg hover:bg-[#9F92FF] transition-colors"
                >
                  <span>DOWNLOAD CV</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
