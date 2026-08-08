"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, setScope] = useState(false);

  useEffect(() => {
    setScope(true);
  }, []);

  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0, y: 10 }}
              animate={scope ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: duration,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
