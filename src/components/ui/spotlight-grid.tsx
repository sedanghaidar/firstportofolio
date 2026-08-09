"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function SpotlightGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.parentElement?.addEventListener("mousemove", handleMouseMove);
    container.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.parentElement?.removeEventListener("mousemove", handleMouseMove);
      container.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Base Animated Grid Dots (Slow Infinite Moving Dots) */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #F5F5F5 1.5px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Mouse Spotlight (Highlights nearby dots & subtle radial aura) */}
      {isHovered && (
        <div
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 124, 255, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Ambient gradient vignettes */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </div>
  );
}
