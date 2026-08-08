"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Experience } from "@/data/types";
import { Code2, BookOpen, Palette, Server } from "lucide-react";

interface TimelineProps {
  items: Experience[];
  className?: string;
}

const categoryIcons = {
  code: Code2,
  teaching: BookOpen,
  design: Palette,
  it: Server,
};

const categoryColors = {
  code: "from-cyan-500 to-blue-500",
  teaching: "from-violet-500 to-purple-500",
  design: "from-pink-500 to-rose-500",
  it: "from-green-500 to-teal-500",
};

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = categoryIcons[item.category] ?? Code2;
  const gradientClass = categoryColors[item.category] ?? categoryColors.code;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex gap-6 pb-12 last:pb-0"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-lg",
            gradientClass
          )}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        {/* Vertical line */}
        <div className="mt-2 w-px flex-1 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      {/* Content */}
      <div className="group flex-1 pb-4">
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-800/80">
          <div className="mb-1 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-slate-600/50 bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300">
              {item.duration}
            </span>
          </div>
          <h3 className="mb-1 text-lg font-semibold text-white">{item.role}</h3>
          <p className="mb-3 text-sm font-medium text-cyan-400">
            {item.company}
          </p>
          <p className="mb-4 text-sm text-slate-400 leading-relaxed">
            {item.description}
          </p>
          <ul className="space-y-1.5">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
