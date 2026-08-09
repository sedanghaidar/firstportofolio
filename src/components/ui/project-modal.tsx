"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/types";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 md:p-10 text-[#F5F5F5]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-[#8A8A8A]">
              <span className="text-[#8B7CFF] font-bold">{project.number}</span>
              <span>/</span>
              <span className="uppercase tracking-wider">{project.category}</span>
              <span>/</span>
              <span>{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#8A8A8A] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Project Title & Subtitle */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-2">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-[#8A8A8A] font-sans font-medium">
              {project.subtitle}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Detailed Breakdown */}
          {caseStudy ? (
            <div className="space-y-8 border-t border-white/10 pt-8">
              {/* 01 / CONTEXT */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-2">
                  01 / CONTEXT
                </h3>
                <p className="text-[#8A8A8A] text-base leading-relaxed font-sans">
                  {caseStudy.context}
                </p>
              </section>

              {/* 02 / PROBLEM */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-2">
                  02 / PROBLEM
                </h3>
                <p className="text-[#8A8A8A] text-base leading-relaxed font-sans">
                  {caseStudy.problem}
                </p>
              </section>

              {/* 03 / APPROACH */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-2">
                  03 / APPROACH
                </h3>
                <p className="text-[#8A8A8A] text-base leading-relaxed font-sans">
                  {caseStudy.approach}
                </p>
              </section>

              {/* 04 / MY CONTRIBUTION */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-3">
                  04 / MY CONTRIBUTION
                </h3>
                <ul className="space-y-2">
                  {caseStudy.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#8A8A8A]">
                      <span className="text-[#8B7CFF] font-mono text-xs mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 05 / IMPLEMENTATION */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-2">
                  05 / IMPLEMENTATION
                </h3>
                <p className="text-[#8A8A8A] text-base leading-relaxed font-sans">
                  {caseStudy.implementation}
                </p>
              </section>

              {/* 06 / RESULT */}
              <section>
                <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-3">
                  06 / RESULT
                </h3>
                <ul className="space-y-2">
                  {caseStudy.result.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#F5F5F5] font-medium">
                      <span className="text-[#8B7CFF] font-mono text-xs mt-1.5">✓</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 07 / REFLECTION */}
              {caseStudy.reflection && (
                <section className="bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                  <h3 className="font-mono text-xs text-[#8B7CFF] uppercase tracking-wider mb-2">
                    07 / REFLECTION
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed font-sans italic">
                    "{caseStudy.reflection}"
                  </p>
                </section>
              )}
            </div>
          ) : (
            <div className="py-6 border-t border-white/10">
              <p className="text-[#8A8A8A] text-base">{project.description}</p>
            </div>
          )}

          {/* Action Links Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 mt-8">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B7CFF] text-black font-semibold rounded-lg text-sm hover:bg-[#9F92FF] transition-colors"
                >
                  <span>Live Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg text-sm hover:bg-white/10 transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#8A8A8A] hover:text-white underline transition-colors"
            >
              Close Overlay [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
