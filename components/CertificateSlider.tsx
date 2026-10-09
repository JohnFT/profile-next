"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSlideshow } from "@/lib/useSlideshow";
import {
  CERTIFICATE_CATEGORIES,
  certificateLevel,
  type Certificate,
  type CertificateCategory,
} from "@/lib/certificates";
import { ChevronRightIcon } from "@/components/icons";

const SLIDE_MS = 5000;

export default function CertificateSlider({
  certificates,
  labels,
}: {
  certificates: Certificate[];
  labels: { prev: string; next: string; view: string; categories: Record<CertificateCategory, string> };
}) {
  const [category, setCategory] = useState<CertificateCategory>(CERTIFICATE_CATEGORIES[0]);
  const list = certificates.filter((cert) => cert.category === category);
  const { index, setIndex, go, pauseHandlers } = useSlideshow(list.length, SLIDE_MS);
  const current = list[Math.min(index, list.length - 1)];
  const listRef = useRef<HTMLOListElement>(null);

  // Keep the active row visible inside the scrollable list without scrolling the page.
  useEffect(() => {
    const container = listRef.current;
    const row = container?.children[index] as HTMLElement | undefined;
    if (!container || !row) return;
    container.scrollTo({ top: row.offsetTop - container.clientHeight / 2 + row.clientHeight / 2, behavior: "smooth" });
  }, [index, category]);

  const selectCategory = (next: CertificateCategory) => {
    setCategory(next);
    setIndex(0);
  };

  return (
    <div {...pauseHandlers}>
      <div role="tablist" className="mb-5 flex flex-wrap gap-2">
        {CERTIFICATE_CATEGORIES.map((cat) => {
          const active = cat === category;
          const count = certificates.filter((cert) => cert.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => selectCategory(cat)}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors ${
                active
                  ? "border-accent/50 bg-accent/10 text-accent"
                  : "border-white/10 text-text-muted hover:border-white/25 hover:text-white"
              }`}
            >
              {labels.categories[cat]}
              <span className={active ? "text-accent/70" : "text-text-subtle"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <div>
          <div className="group relative aspect-[864/667] overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9)]">
            {/* Only the visible diploma is rendered, so 100+ images never load at once. */}
            <Image
              key={current.key}
              src={current.image}
              alt={current.title}
              width={current.width}
              height={current.height}
              sizes="(min-width: 1024px) 600px, 92vw"
              className="fade-in h-full w-full object-contain"
            />
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={labels.prev}
              className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRightIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={labels.next}
              className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[11px]">
            <span className="text-text-subtle" aria-live="polite">
              {Math.min(index, list.length - 1) + 1} / {list.length}
            </span>
            <a
              href={current.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-accent"
            >
              {labels.view} {current.provider} ↗
            </a>
          </div>
        </div>

        <ol ref={listRef} className="relative max-h-[320px] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[440px]">
          {list.map((cert, i) => {
            const active = cert.key === current.key;
            const level = certificateLevel(cert);
            return (
              <li key={cert.key}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={active}
                  className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
                    active ? "border-accent/40 bg-accent/10" : "border-white/[0.06] bg-card hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-11 shrink-0 rounded border px-1 py-0.5 text-center font-mono text-[10px] ${
                      active ? "border-accent/40 text-accent" : "border-white/10 text-text-muted"
                    }`}
                  >
                    {level ?? cert.date.slice(0, 4)}
                  </span>
                  <span className={`min-w-0 flex-1 text-[13px] leading-snug ${active ? "text-white" : "text-zinc-300"}`}>
                    {cert.title}
                  </span>
                  {cert.provider !== "Platzi" && (
                    <span className="shrink-0 rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-text-muted">
                      {cert.provider}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
