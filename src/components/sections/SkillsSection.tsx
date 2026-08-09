"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-2">
              04 / SKILLS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
              TECHNICAL STACK.
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-md font-sans leading-relaxed">
            Functional tools, languages, frameworks, databases, and machine learning infrastructure.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((catGroup, index) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="editorial-card p-6 sm:p-8"
            >
              <h3 className="font-mono text-xs font-bold text-[#8B7CFF] uppercase tracking-widest border-b border-white/10 pb-3 mb-6">
                {catGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill) => (
                  <span key={skill} className="tech-tag text-xs font-mono py-1.5 px-3">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

