"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, MapPin, Award } from "lucide-react";

// Interactive Floating Constellation Network Background for About Section
function AboutInteractiveBg() {
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

    const mouse = { x: -1000, y: -1000, isHovered: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovered = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

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

        // Connect node to mouse cursor
        if (mouse.isHovered) {
          const mdx = n.x - mouse.x;
          const mdy = n.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 180) {
            const malpha = (1 - mdist / 180) * 0.45;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(139, 124, 255, ${malpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
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
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
    />
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-t border-white/10 overflow-hidden">
      {/* Interactive Floating Constellation Network Background */}
      <AboutInteractiveBg />

      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#8B7CFF]/10 blur-3xl z-0" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <span className="font-mono text-xs font-semibold text-[#8B7CFF] uppercase tracking-wider block mb-2">
            01 / ABOUT
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            ABOUT ME.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-[#8A8A8A] font-sans text-base leading-relaxed"
          >
            <p>
              Hello everyone👋, My Name is Achmad Haidar Tamimi, I am a fresh Informatics graduate with a strong passion for technology and software development, particularly in full-stack web development. I enjoy building applications that are not only functional, but also intuitive and visually engaging.
            </p>

            <p>
              Alongside my technical background, I have experience in creative content and visual design, allowing me to approach problem-solving from both a technical and creative perspective. I am familiar with frontend and backend fundamentals, as well as modern development tools and workflows.
            </p>

            <p>
              I am a fast learner, detail-oriented, and adaptable to new technologies and challenges.
            </p>

            <p className="font-sans font-medium text-base text-white/90">
              Currently, I am seeking opportunities as a <span className="text-[#8B7CFF] font-bold">Junior Full-Stack Developer</span>, <span className="text-[#8B7CFF] font-bold">Software Intern</span>, or <span className="text-[#8B7CFF] font-bold">Tech-related Intern</span>, where I can contribute, learn, and grow in a collaborative environment.
            </p>
          </motion.div>

          {/* Education & Core Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="editorial-card p-8 border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="p-2 bg-[#8B7CFF]/10 text-[#8B7CFF] rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">EDUCATION</h4>
                  <span className="font-mono text-xs text-[#8A8A8A]">{education.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-display font-bold text-xl text-white">{education.degree}</h5>
                  <p className="font-sans text-sm text-[#8A8A8A]">{education.institution}</p>
                </div>

                <div className="flex items-center justify-between border-y border-white/5 py-3 font-mono text-xs">
                  <span className="text-[#8A8A8A]">CUMULATIVE GPA</span>
                  <span className="text-[#8B7CFF] font-bold text-sm">{education.gpa}</span>
                </div>

                <div className="space-y-2 pt-1 font-mono text-xs text-[#8A8A8A]">
                  <div className="flex items-center gap-2">
                    <Award className="h-3.5 w-3.5 text-[#8B7CFF]" />
                    <span>Focus: {education.concentration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#8B7CFF]" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
