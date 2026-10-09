"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/** Auto-advancing slide index that pauses on hover/focus and for reduced-motion users. */
export function useSlideshow(count: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, paused, reduceMotion, intervalMs]);

  return {
    index,
    setIndex,
    go: (step: number) => setIndex((i) => (i + step + count) % count),
    pauseHandlers: {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: () => setPaused(false),
    },
  };
}
