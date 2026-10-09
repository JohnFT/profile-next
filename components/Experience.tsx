"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/experience";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const jobs = experience[locale];
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0, 1]);

  return (
    <section>
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">{dict.work.experienceHeading}</h2>
      </Reveal>
      <div ref={timelineRef} className="relative mt-6 space-y-6 pl-6">
        <div className="absolute top-0 left-0 h-full w-px bg-glass" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute top-0 left-0 h-full w-px origin-top bg-accent shadow-[0_0_8px_var(--color-accent)]"
        />
        {jobs.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={Math.min(index * 0.06, 0.24)}>
            <div className="relative">
              <span
                className="absolute -left-[29px] top-6 h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: index % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-2)" }}
              />
              <div className="rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold">
                    {job.role}{" "}
                    <span className="font-normal text-text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-label text-xs text-text-muted">{job.period}</span>
                </div>
                {job.location && <p className="text-sm text-text-muted">{job.location}</p>}
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
