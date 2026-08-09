"use client";

import { motion } from "framer-motion";
import { beyondCodeItems } from "@/data/portfolio";
import { Palette, Image as ImageIcon } from "lucide-react";

export function BeyondCodeSection() {
  return (
    <section id="beyond-code" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-2">
              05 / BEYOND CODE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
              VISUAL & DESIGN WORK.
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-md font-sans leading-relaxed">
            Creative direction, visual communication, award-winning poster design, and digital branding assets.
          </p>
        </div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beyondCodeItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="editorial-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#8B7CFF]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-lg text-[#8B7CFF]">
                    <Palette className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] text-[#8A8A8A] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#8B7CFF] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#8A8A8A] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-xs text-[#8A8A8A]">
                <ImageIcon className="h-3.5 w-3.5 text-[#8B7CFF]" />
                <span>Design Portfolio Asset</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
