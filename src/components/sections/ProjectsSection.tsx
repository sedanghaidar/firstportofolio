"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, additionalProjects } from "@/data/portfolio";
import { Project } from "@/data/types";
import { ProjectModal } from "@/components/ui/project-modal";

// Interactive Wavy Dot Grid Canvas Background following mouse cursor
function InteractiveProjectBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const spacing = 28; // Spacing between dots
    let time = 0;

    const render = () => {
      time += 0.02;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing + 14;
          const baseY = j * spacing + 14;

          // Wavy motion formula
          const wave = Math.sin(time + i * 0.15 + j * 0.15) * 3;
          let dotX = baseX;
          let dotY = baseY + wave;

          // Mouse interaction radius
          const dx = dotX - mouse.x;
          const dy = dotY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          let radius = 1.2;
          let alpha = 0.12;

          if (dist < maxDist) {
            const factor = 1 - dist / maxDist;
            const force = factor * factor * 14; // Push dots away smoothly
            const angle = Math.atan2(dy, dx);
            dotX += Math.cos(angle) * force;
            dotY += Math.sin(angle) * force;

            radius = 1.2 + factor * 2.2; // Dot grows on hover
            alpha = 0.12 + factor * 0.55; // Glows brighter on hover
          }

          ctx.beginPath();
          ctx.arc(dotX, dotY, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 124, 255, ${alpha})`; // Subtle purple glow
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-70"
    />
  );
}

// Combine projects into unified dataset
const ALL_PROJECTS: Project[] = [
  ...projects,
  ...additionalProjects.map((p, idx) => ({
    id: p.id,
    number: `0${projects.length + idx + 1}`,
    title: p.title,
    subtitle: p.subtitle,
    year: "2024",
    category: p.category,
    description: p.description,
    technologies: p.technologies,
    featured: false,
    liveUrl: p.liveUrl,
    caseStudy: {
      context: p.description,
      problem: "Hardware telemetry and real-time monitoring challenge.",
      approach: "Built hardware sensor pipeline with microcontrollers and live web dashboard.",
      contribution: ["Configured hardware sensors and microcontrollers.", "Engineered data payload telemetry."],
      implementation: `Built with ${p.technologies.join(", ")}.`,
      result: ["Functional prototype successfully tested."],
    },
  })),
];

const FILTERS = [
  { id: "all", label: "ALL" },
  { id: "web", label: "WEB & ENTERPRISE" },
  { id: "ai", label: "AI & MACHINE LEARNING" },
  { id: "iot", label: "IOT & HARDWARE" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "web")
      return (
        p.category.toLowerCase().includes("web") ||
        p.category.toLowerCase().includes("enterprise") ||
        p.category.toLowerCase().includes("commercial") ||
        p.category.toLowerCase().includes("tourism")
      );
    if (activeFilter === "ai")
      return (
        p.category.toLowerCase().includes("machine learning") ||
        p.category.toLowerCase().includes("ai")
      );
    if (activeFilter === "iot")
      return (
        p.category.toLowerCase().includes("iot") ||
        p.category.toLowerCase().includes("hardware")
      );
    return true;
  });

  return (
    <section id="projects" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 overflow-hidden">
      {/* Interactive Wavy Dot Grid Canvas Background */}
      <InteractiveProjectBackground />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-2">
              03 / SELECTED WORK
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              SELECTED WORK.
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-md font-sans leading-relaxed">
            Featured case studies demonstrating system architecture, fullstack development, AI products, and business web solutions.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mb-12 flex flex-wrap items-center gap-3 border-b border-white/10 pb-6">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`font-mono text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-full transition-all ${
                  isActive
                    ? "bg-[#8B7CFF] text-black shadow-lg shadow-[#8B7CFF]/20"
                    : "bg-white/[0.03] text-[#8A8A8A] border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Equal Box Grid ("kotak-kotak clean") */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer editorial-card p-6 flex flex-col justify-between border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm hover:border-[#8B7CFF] rounded-2xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Card Top Banner / Visual Thumbnail */}
                  <div className="relative mb-6 h-48 w-full rounded-xl border border-white/10 bg-gradient-to-br from-[#171717] via-[#0A0A0A] to-[#121020] p-6 flex flex-col justify-between overflow-hidden group-hover:border-[#8B7CFF]/40 transition-colors">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between font-mono text-xs z-10">
                      <span className="bg-white/10 text-white font-bold px-2.5 py-1 rounded">
                        {project.number}
                      </span>
                      <span className="bg-[#8B7CFF]/15 text-[#8B7CFF] font-bold px-2.5 py-1 rounded border border-[#8B7CFF]/30 uppercase text-[10px]">
                        {project.year}
                      </span>
                    </div>

                    {/* Centered Large Project Title Visual */}
                    <div className="z-10 text-center my-auto">
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#8B7CFF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[11px] text-[#8A8A8A] uppercase tracking-wider mt-1">
                        {project.category}
                      </p>
                    </div>

                    {/* Subtle grid background inside thumb */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  </div>

                  {/* Project Info */}
                  <h4 className="font-display font-bold text-xl text-[#8B7CFF] transition-colors mb-2">
                    {project.title} — <span className="text-white font-normal">{project.subtitle}</span>
                  </h4>
                  <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-[#8A8A8A]">
                    <span className="text-white font-bold group-hover:text-[#8B7CFF] inline-flex items-center gap-1.5 transition-colors">
                      CASE STUDY <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#8B7CFF] hover:underline inline-flex items-center gap-1"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
