"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Experience } from "@/data/types";
import { Code2, BookOpen, Palette, Server } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categoryIcons = {
  code: Code2,
  teaching: BookOpen,
  design: Palette,
  it: Server,
};

const bgColors = {
  code: "bg-neo-cyan",
  teaching: "bg-neo-violet",
  design: "bg-neo-pink",
  it: "bg-neo-lime",
};

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = categoryIcons[item.category] ?? Code2;
  const bgColor = bgColors[item.category] ?? bgColors.code;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
      className="relative flex gap-3 sm:gap-6 pb-12 sm:pb-16 last:pb-0"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center bg-white neo-border shadow-[4px_4px_0_0_#000]"
          )}
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-black stroke-[3]" />
        </div>
        {/* Vertical line */}
        <div className="mt-2 w-1.5 flex-1 bg-black border-x border-black" />
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-4 min-w-0">
        <div className="neo-card bg-white p-4 sm:p-6 md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={cn("neo-pill px-3 py-1 text-sm text-black border-2", bgColor)}>
              {item.duration}
            </span>
          </div>
          <h3 className="mb-2 text-xl sm:text-2xl font-black text-black leading-tight">{item.role}</h3>
          <p className="mb-4 text-base sm:text-lg font-bold text-neutral-600 border-b-4 border-black pb-4 inline-block w-full">
            {item.company}
          </p>
          <p className="mb-6 text-sm sm:text-base font-semibold text-black leading-relaxed">
            {item.description}
          </p>
          <ul className="space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-medium text-black">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-black border border-black shadow-[2px_2px_0_0_#000]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative bg-[#fdfbf7] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-black"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block bg-neo-lime px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] mb-6 rotate-1">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Work & Activities
            </h2>
          </div>
          <p className="mt-6 text-lg font-bold text-neutral-800 max-w-2xl mx-auto border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000]">
            Perjalanan profesional dan pengalaman organisasi yang telah membentuk
            kemampuan saya sebagai developer dan kolaborator.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
