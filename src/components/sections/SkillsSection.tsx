"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Monitor, Database, Wrench, Users } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  monitor: Monitor,
  database: Database,
  tool: Wrench,
  users: Users,
};

const bgColors = [
  "bg-neo-pink",
  "bg-neo-cyan",
  "bg-neo-yellow",
  "bg-neo-lime",
  "bg-neo-red",
];

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05, type: "spring", stiffness: 300 }}
      className="bg-white border-2 border-black px-4 py-2 text-sm font-black text-black shadow-[2px_2px_0_0_#000] hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all cursor-default uppercase"
    >
      {skill}
    </motion.span>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative bg-[#fdfbf7] py-24 px-6 lg:px-8 border-b-4 border-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="inline-block bg-neo-pink px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] mb-6 rotate-2">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Technical Expertise
            </h2>
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gIndex) => {
            const Icon = iconMap[group.icon] ?? Server;
            const bgColor = bgColors[gIndex % bgColors.length];

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: gIndex * 0.1, type: "spring", stiffness: 200 }}
                className={cn(
                  "neo-card p-6 md:p-8",
                  bgColor,
                  // Soft skills card spans full width on lg
                  group.icon === "users" && "sm:col-span-2 lg:col-span-3"
                )}
              >
                {/* Group header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-white neo-border shadow-[3px_3px_0_0_#000]">
                    <Icon className="h-6 w-6 text-black stroke-[3]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-wide bg-white px-2 py-1 neo-border shadow-[2px_2px_0_0_#000]">
                    {group.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, sIndex) => (
                    <SkillBadge key={skill} skill={skill} index={sIndex} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
