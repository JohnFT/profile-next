"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/experience";
import Reveal from "@/components/Reveal";
import CompanyLogo from "@/components/CompanyLogo";
import LaptopSlider from "@/components/LaptopSlider";
import { companyShots } from "@/lib/media";
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
  const sliderLabels = { prev: dict.work.prevShot, next: dict.work.nextShot, show: dict.work.showShot };

  return (
    <section>
      <div ref={timelineRef} className="relative space-y-6 pl-6">
        <div className="absolute top-0 left-0 h-full w-px bg-line" />
        <motion.div style={{ scaleY: lineScale }} className="absolute top-0 left-0 h-full w-px origin-top bg-accent" />
        {jobs.map((job, index) => {
          // Screenshots only on the first (most recent) role at each company.
          const shots =
            index === jobs.findIndex((j) => j.company === job.company) ? companyShots[job.company] : undefined;
          return (
            <Reveal key={`${job.company}-${job.period}`} delay={Math.min(index * 0.06, 0.24)}>
              <div className="relative">
                <span
                  className={`absolute -left-[29px] top-7 h-2.5 w-2.5 rounded-full ${
                    index === 0 ? "bg-accent" : "border border-line-strong bg-bg"
                  }`}
                />
                <div
                  className={`rounded-xl border border-line bg-card p-6 transition-colors hover:border-white/20 lg:p-8 ${
                    shots ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-12" : ""
                  }`}
                >
                  <div>
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <CompanyLogo company={job.company} className="h-11 w-28 shrink-0" />
                      <div className="w-full min-w-0 flex-1">
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
                  </div>
                  {shots && (
                    <div className="mt-8 px-[5%] lg:mt-0 lg:px-[4%]">
                      <LaptopSlider shots={shots} locale={locale} labels={sliderLabels} />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
