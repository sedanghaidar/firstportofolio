"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
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
          "fixed top-0 z-50 w-full bg-background transition-all duration-200",
          scrolled ? "border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] py-2" : "py-4 border-b-4 border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-neo-yellow neo-border shadow-[2px_2px_0_0_#000] transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0_0_#000]">
              <span className="text-base font-bold text-black tracking-tighter uppercase">HAI!</span>
            </div>
            <span className="hidden text-base font-bold text-black sm:block">
              Achmad Haidar
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-bold border-2 border-transparent transition-all duration-200",
                    isActive
                      ? "text-black bg-neo-cyan border-black shadow-[2px_2px_0_0_#000]"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-100 hover:border-black hover:shadow-[2px_2px_0_0_#000]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Download CV + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="/cv-achmad-haidar-tamimi.pdf"
              download
              id="nav-download-cv"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-neo-pink text-black text-sm neo-btn"
            >
              <Download className="h-4 w-4 stroke-[3]" />
              CV
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center bg-white neo-border shadow-[2px_2px_0_0_#000] text-black active:translate-y-1 active:translate-x-1 active:shadow-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5 stroke-[3]" /> : <Menu className="h-5 w-5 stroke-[3]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 top-16 z-40 bg-neo-yellow border-b-4 border-black p-6 shadow-[0_8px_0_0_rgba(0,0,0,1)] md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "w-full text-left px-5 py-3 text-lg font-bold border-2 transition-all",
                      isActive
                        ? "bg-white border-black shadow-[3px_3px_0_0_#000]"
                        : "border-transparent hover:border-black hover:bg-white/50"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="mt-4 pt-4 border-t-2 border-black/20">
                <a
                  href="/cv-achmad-haidar-tamimi.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 px-5 py-4 bg-neo-pink text-black text-lg neo-btn"
                >
                  <Download className="h-5 w-5 stroke-[3]" />
                  Download CV (PDF)
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
