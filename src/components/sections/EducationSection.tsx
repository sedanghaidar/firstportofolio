"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BarChart2, Database } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const certIconMap: Record<string, React.ElementType> = {
  "bar-chart": BarChart2,
  database: Database,
  award: Award,
};

const certColors = [
  "bg-neo-cyan",
  "bg-neo-lime",
  "bg-neo-pink",
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      className="relative bg-white py-24 px-6 lg:px-8 border-b-4 border-black"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
          backgroundSize: "32px 32px",
          opacity: 0.05
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-block bg-neo-orange px-6 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] mb-6 -rotate-1">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
              Education & Certs
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="neo-card bg-neo-yellow p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-white neo-border shadow-[4px_4px_0_0_#000]">
                  <GraduationCap className="h-8 w-8 text-black stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-black leading-tight uppercase">
                    {education.institution}
                  </h3>
                  <p className="text-lg font-bold text-black/70 mt-1 uppercase tracking-wide">
                    {education.degree}
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-white p-6 neo-border shadow-[4px_4px_0_0_#000]">
                {[
                  { label: "Periode", value: education.period },
                  { label: "IPK", value: education.gpa },
                  { label: "Konsentrasi", value: education.concentration },
                  { label: "Lokasi", value: education.location },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b-2 border-black/10 pb-2 last:border-0 last:pb-0">
                    <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">{label}</span>
                    <span className="text-base font-black text-black text-left sm:text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GPA visual indicator */}
            <div className="mt-10 bg-white p-5 neo-border shadow-[4px_4px_0_0_#000]">
              <div className="mb-3 flex justify-between items-center text-sm font-black uppercase tracking-widest text-black">
                <span>GPA Score</span>
                <span className="bg-neo-cyan px-2 py-1 neo-border shadow-[2px_2px_0_0_#000]">{education.gpa}</span>
              </div>
              <div className="h-6 w-full border-2 border-black bg-neutral-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95.5%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="h-full bg-neo-pink border-r-2 border-black"
                />
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-black text-black uppercase mb-2 bg-neo-cyan px-4 py-2 inline-block border-4 border-black shadow-[4px_4px_0_0_#000] self-start">
              Certifications
            </h3>
            {certifications.map((cert, index) => {
              const Icon = certIconMap[cert.icon] ?? Award;
              const bgColor = certColors[index % certColors.length];
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className={cn(
                    "neo-card flex items-center gap-4 p-5 md:p-6",
                    bgColor
                  )}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white neo-border shadow-[3px_3px_0_0_#000]">
                    <Icon className="h-6 w-6 text-black stroke-[3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-black text-black leading-tight uppercase">
                      {cert.title}
                    </p>
                    <p className="text-sm font-bold text-black/70 mt-1 uppercase tracking-wide">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 bg-white border-2 border-black px-3 py-1.5 text-sm font-black text-black shadow-[2px_2px_0_0_#000]">
                    {cert.year}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
