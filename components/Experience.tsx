"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/experience";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CompanyLogo from "@/components/CompanyLogo";
import { companyShots } from "@/lib/media";
import type { Locale } from "@/lib/i18n";

export default function Experience({ locale }: { locale: Locale }) {
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
      <div ref={timelineRef} className="relative space-y-6 pl-6">
        <div className="absolute top-0 left-0 h-full w-px bg-line" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute top-0 left-0 h-full w-px origin-top bg-accent"
        />
        {jobs.map((job, index) => (
          <Reveal key={`${job.company}-${job.period}`} delay={Math.min(index * 0.06, 0.24)}>
            <div className="relative">
              <span
                className={`absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full ${
                  index === 0 ? "bg-accent" : "border border-line-strong bg-bg"
                }`}
              />
              <div className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-white/20 lg:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <CompanyLogo company={job.company} className="h-11 w-28 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-lg font-bold">
                        {job.role} <span className="font-normal text-accent">· {job.company}</span>
                      </h4>
                      <span className="font-mono text-xs text-text-muted">{job.period}</span>
                    </div>
                    {job.location && <p className="mt-1 font-mono text-xs text-text-subtle">{job.location}</p>}
                  </div>
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-text-muted marker:text-text-subtle">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {index === jobs.findIndex((j) => j.company === job.company) && companyShots[job.company] && (
                  <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {companyShots[job.company].map((shot) => (
                      <li key={shot.src.src}>
                        <a
                          href={shot.src.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/50"
                        >
                          <Image
                            src={shot.src}
                            alt={shot.alt[locale]}
                            sizes="(min-width: 1024px) 300px, 45vw"
                            className="aspect-video w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
