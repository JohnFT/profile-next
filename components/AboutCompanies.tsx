"use client";

import { experience } from "@/lib/experience";
import { useSlideshow } from "@/lib/useSlideshow";
import type { Locale } from "@/lib/i18n";
import CompanyLogo from "@/components/CompanyLogo";

const SLIDE_MS = 2800;

/** One card per company, most recent first: latest role there and the full span of time. */
function companies(locale: Locale) {
  const jobs = experience[locale];
  const names = [...new Set(jobs.map((job) => job.company))];
  return names.map((company) => {
    const roles = jobs.filter((job) => job.company === company);
    const end = roles[0].period.split(" – ")[1];
    const start = roles[roles.length - 1].period.split(" – ")[0];
    return { company, role: roles[0].role, period: `${start} – ${end}` };
  });
}

export default function AboutCompanies({ locale }: { locale: Locale }) {
  const items = companies(locale);
  const { index, setIndex, pauseHandlers } = useSlideshow(items.length, SLIDE_MS);
  const current = items[index];

  return (
    <div className="rounded-2xl border border-line bg-card p-6 sm:p-8" {...pauseHandlers}>
      {/* Logos crossfade in place */}
      <div className="relative h-28 sm:h-32">
        {items.map((item, i) => (
          <div
            key={item.company}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-all duration-700 ${
              i === index ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <CompanyLogo company={item.company} className="h-full w-full px-8 py-6" />
          </div>
        ))}
      </div>

      <div className="mt-6 min-h-[4.5rem]" aria-live="polite">
        <p className="text-xl font-bold tracking-tight">{current.company}</p>
        <p className="mt-1 text-sm text-text-muted">{current.role}</p>
        <p className="mt-1 font-mono text-[11px] text-accent uppercase">{current.period}</p>
      </div>

      <div className="mt-5 flex gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.company}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={item.company}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
