"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Typewriter({ texts, delay = 2000, typingSpeed = 100, deletingSpeed = 50 }: { texts: string[]; delay?: number, typingSpeed?: number, deletingSpeed?: number }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 50);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay, typingSpeed, deletingSpeed]);

  return (
    <span className="inline-block relative">
      I'm a <span className="text-neo-cyan text-stroke-black relative">{currentText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[3px] h-[1em] bg-white align-middle ml-1"
      />
    </span>
  );
}
