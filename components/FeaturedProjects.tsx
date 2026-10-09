"use client";

import { useEffect, useRef, useState } from "react";
import { featuredProjects } from "@/lib/featuredProjects";
import { useSlideshow } from "@/lib/useSlideshow";
import CompanyLogo from "@/components/CompanyLogo";
import { ChevronRightIcon } from "@/components/icons";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const SLIDE_MS = 7000;

export default function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = featuredProjects[locale];
  const companies = [...new Set(projects.map((project) => project.company))];
  const [company, setCompany] = useState(companies[0]);
  const list = projects.filter((project) => project.company === company);
  const { index, setIndex, go, pauseHandlers } = useSlideshow(list.length, SLIDE_MS);
  const safeIndex = Math.min(index, list.length - 1);
  const current = list[safeIndex];
  const listRef = useRef<HTMLOListElement>(null);

  // Keep the active row visible inside the scrollable list without scrolling the page.
  useEffect(() => {
    const container = listRef.current;
    const row = container?.children[safeIndex] as HTMLElement | undefined;
    if (!container || !row) return;
    container.scrollTo({ top: row.offsetTop - container.clientHeight / 2 + row.clientHeight / 2, behavior: "smooth" });
  }, [safeIndex, company]);

  const selectCompany = (next: string) => {
    setCompany(next);
    setIndex(0);
  };

  return (
    <div {...pauseHandlers}>
      <div role="tablist" className="mb-5 flex flex-wrap gap-2">
        {companies.map((name) => {
          const active = name === company;
          return (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => selectCompany(name)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                active
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-white/10 text-text-muted hover:border-white/25 hover:text-white"
              }`}
            >
              {name}
              <span className={active ? "text-accent/70" : "text-text-subtle"}>
                {projects.filter((project) => project.company === name).length}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-6">
        <div className="relative flex flex-col rounded-2xl border border-line bg-card p-6 sm:p-8 lg:min-h-[460px] lg:p-10">
          {/* Re-keyed so each project fades in when the slide changes. */}
          <div key={`${current.company}-${current.name}`} className="fade-in flex flex-1 flex-col">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <CompanyLogo company={current.company} className="h-9 w-24" />
                <span className="rounded border border-white/5 bg-white/[0.04] px-3 py-1 font-mono text-xs text-text-muted">
                  {current.period}
                </span>
              </div>
              <span className="font-mono text-xs font-semibold text-accent uppercase">{current.highlight}</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold lg:text-3xl">{current.name}</h3>
            {current.award && (
              <p className="mb-4 inline-flex self-start rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                {current.award}
              </p>
            )}
            <p className="mb-8 flex-1 text-sm leading-relaxed text-text-muted lg:text-[15px]">{current.description}</p>
            <div className="rounded-xl border border-white/[0.05] bg-black/50 p-5 font-mono text-xs">
              <span className="text-text-subtle">{dict.work.roleLabel}: </span>
              <span className="text-zinc-200">{current.role}</span>
            </div>
          </div>

          {list.length > 1 && (
            <div className="mt-6 flex items-center justify-between gap-4 font-mono text-[11px]">
              <span className="text-text-subtle" aria-live="polite">
                {safeIndex + 1} / {list.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={dict.work.prevProject}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ChevronRightIcon className="h-4 w-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={dict.work.nextProject}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        <ol ref={listRef} className="relative max-h-[320px] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[540px]">
          {list.map((project, i) => {
            const active = i === safeIndex;
            return (
              <li key={project.name}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={active}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    active ? "border-accent/40 bg-accent/10" : "border-white/[0.06] bg-card hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-11 shrink-0 rounded border px-1 py-0.5 text-center font-mono text-[10px] ${
                      active ? "border-accent/40 text-accent" : "border-white/10 text-text-muted"
                    }`}
                  >
                    {project.period.slice(0, 4)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[13px] leading-snug ${active ? "text-white" : "text-zinc-300"}`}>
                      {project.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] text-text-subtle uppercase">
                      {project.highlight}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
