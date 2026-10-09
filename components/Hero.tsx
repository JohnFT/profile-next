"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], reduceMotion ? [1, 1] : [1, 0]);

  return (
    <div ref={ref} className="relative flex min-h-[70vh] flex-col justify-center px-6 py-20 sm:min-h-[80vh]">
      <motion.div style={{ y: contentY, opacity }} className="mx-auto w-full max-w-3xl">
        <span className="font-label inline-block rounded-full border border-glass bg-surface-2 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
          {dict.hero.location}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
          John Alexander <span className="text-accent">Fonseca Tumay</span>
        </h1>
        <p className="mt-4 text-lg text-text-muted sm:text-xl">{dict.hero.title}</p>
        <p className="mt-6 max-w-xl text-text-muted">{dict.hero.intro}</p>
      </motion.div>
    </div>
  );
}
