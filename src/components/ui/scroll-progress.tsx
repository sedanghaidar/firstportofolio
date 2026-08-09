"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B7CFF] via-[#A699FF] to-[#8B7CFF] z-[100] origin-left pointer-events-none shadow-[0_0_10px_rgba(139,124,255,0.8)]"
      style={{ scaleX }}
    />
  );
}
