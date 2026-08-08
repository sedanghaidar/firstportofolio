"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type FilterCategory = "All" | "Web" | "Mobile" | "AI" | "IoT";

const filters: FilterCategory[] = ["All", "Web", "Mobile", "AI", "IoT"];

const projectColors = [
  "bg-neo-yellow",
  "bg-neo-cyan",
  "bg-neo-pink",
  "bg-neo-lime",
  "bg-neo-orange",
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const headerColor = projectColors[index % projectColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1, type: "spring", stiffness: 200 }}
      className="group h-full flex"
    >
      <div className="neo-card bg-white flex flex-col w-full overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0_0_#000] transition-all duration-300">
        
        {/* Header Strip with Icon placeholder */}
        <div className={cn("h-48 w-full border-b-4 border-black p-6 flex flex-col justify-between", headerColor)}>
          <div className="flex justify-between items-start">
            <div className="bg-white neo-border p-2 shadow-[2px_2px_0_0_#000]">
              <Code2 className="h-6 w-6 stroke-[3]" />
            </div>
            {/* Category badges */}
            <div className="flex flex-wrap gap-2 justify-end">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="bg-black text-white neo-border px-3 py-1 text-xs font-black uppercase tracking-widest shadow-[2px_2px_0_0_#fff]"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-2xl font-black text-black bg-white inline-block px-3 py-1 neo-border self-start shadow-[3px_3px_0_0_#000] mt-auto">
            {project.title}
          </h3>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <p className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-widest border-b-2 border-black/10 pb-2">
            {project.subtitle}
          </p>

          <p className="mb-6 text-base font-semibold text-black leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Impact bullets */}
          <ul className="mb-8 space-y-2">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-black">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-neo-cyan border border-black shadow-[1px_1px_0_0_#000]" />
                {item}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mb-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-100 border-2 border-black px-3 py-1 text-xs font-bold text-black shadow-[2px_2px_0_0_#000]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Live link */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-link-${project.id}`}
            className="mt-auto flex items-center justify-center gap-2 w-full bg-neo-yellow py-4 text-base font-black uppercase neo-btn text-black hover:bg-white"
          >
            <ExternalLink className="h-5 w-5 stroke-[3]" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section
      id="projects"
      className="relative bg-neo-blue py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-black"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)`,
          opacity: 0.05
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-white px-4 sm:px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase">
              Featured Projects
            </h2>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          role="tablist"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              id={`filter-${filter.toLowerCase()}`}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-3 text-sm md:text-base font-black uppercase neo-btn transition-all duration-200",
                activeFilter === filter
                  ? "bg-black text-white shadow-[4px_4px_0_0_#fff] translate-x-[-2px] translate-y-[-2px]"
                  : "bg-white text-black hover:bg-neo-yellow"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
