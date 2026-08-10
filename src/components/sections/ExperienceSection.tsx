"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Code, Palette, BookOpen } from "lucide-react";

const categoryIcons = {
  engineering: Code,
  management: Briefcase,
  design: Palette,
  teaching: BookOpen,
};

// Animated Constellation Dots Background without mouse interaction
function CareerDotsBg() {
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
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    const numNodes = 40;
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    initNodes();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 124, 255, 0.4)";
        ctx.fill();

        // Connect node to node
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(139, 124, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-white/10 overflow-hidden">
      <CareerDotsBg />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-2">
              04 / EXPERIENCE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
              CAREER & ROLES.
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-sm max-w-md font-sans leading-relaxed">
            Professional development, engineering internships, leadership, and instructional experience.
          </p>
        </div>

        {/* Minimalist Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 border-l border-white/10">
          {experiences.map((exp, index) => {
            const Icon = categoryIcons[exp.category] || Briefcase;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-3 w-3 rounded-full bg-[#0A0A0A] border-2 border-[#8B7CFF] group-hover:bg-[#8B7CFF] transition-colors" />

                {/* Main Content Box */}
                <div className="editorial-card p-6 sm:p-8 hover:border-[#8B7CFF]/40 transition-all">
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 font-mono text-xs text-[#8A8A8A]">
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-[#8B7CFF]" />
                      <span className="text-[#8B7CFF] font-semibold uppercase">
                        {exp.company} {exp.location ? `| ${exp.location}` : ""}
                      </span>
                    </div>
                    <span>{exp.duration}</span>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {exp.role}
                  </h3>

                  {/* Summary Description */}
                  <p className="font-sans text-base text-[#8A8A8A] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Bullet Impact Points */}
                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-sans text-sm text-[#8A8A8A]">
                        <span className="text-[#8B7CFF] font-mono text-xs mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

