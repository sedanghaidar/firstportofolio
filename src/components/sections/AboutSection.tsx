"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Code2 } from "lucide-react";
import { stats } from "@/data/portfolio";
import { Stat } from "@/data/types";
import { cn } from "@/lib/utils";

const iconMap = {
  graduation: GraduationCap,
  briefcase: Briefcase,
  trophy: Trophy,
  code: Code2,
};

const bgColors = [
  "bg-neo-yellow",
  "bg-neo-pink",
  "bg-neo-cyan",
  "bg-neo-lime",
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[stat.icon];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
      className={cn(
        "neo-card flex flex-col items-start gap-4 p-6",
        bgColor
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center bg-white neo-border shadow-[2px_2px_0_0_#000]">
        <Icon className="h-7 w-7 text-black stroke-[2.5]" />
      </div>
      <div>
        <p className="text-2xl font-black text-black tracking-tight">{stat.value}</p>
        <p className="text-sm font-bold text-black/80 mt-1 uppercase tracking-wide">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative bg-white py-24 px-6 lg:px-8 border-b-4 border-black"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-block bg-neo-yellow px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] mb-6 -rotate-2">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Who I Am
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#f8f9fa] neo-border p-8 md:p-10 shadow-[8px_8px_0_0_#000]"
          >
            <div className="space-y-6 text-black font-semibold text-lg leading-relaxed">
              <p>
                Fresh graduate <span className="bg-neo-yellow px-1 border-2 border-black">Informatika</span> dari{" "}
                <span className="font-black underline decoration-4 decoration-neo-pink">Universitas Amikom Yogyakarta</span>{" "}
                dengan IPK 3.82/4.00.
              </p>
              <p>
                Saya memiliki pengalaman langsung membangun aplikasi web dan
                mobile enterprise menggunakan <strong className="bg-neo-red px-1 border-2 border-black text-white">Laravel</strong> dan{" "}
                <strong className="bg-neo-blue px-1 border-2 border-black text-white">Flutter</strong> — terbiasa
                bekerja dalam tim kecil untuk memodernisasi sistem internal dan
                menghadirkan solusi yang berfokus pada pengguna.
              </p>
              <p>
                Latar belakang{" "}
                <span className="bg-neo-cyan px-1 border-2 border-black">graphic design</span> yang saya miliki
                memungkinkan saya untuk tidak hanya membangun sistem yang
                fungsional, tetapi juga intuitif dan menyenangkan digunakan.
              </p>
              <p>
                Ketertarikan kuat pada{" "}
                <strong>aplikasi enterprise</strong>,{" "}
                proses bisnis, dan teknologi{" "}
                <strong>ERP</strong>.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Laravel", "Flutter", "UI/UX Design", "Data Analysis", "ERP Systems"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="neo-pill bg-white px-4 py-2 text-sm text-black hover:bg-black hover:text-white hover:-translate-y-1 transition-all"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
