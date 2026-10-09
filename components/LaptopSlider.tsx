"use client";

import Image from "next/image";
import { useSlideshow } from "@/lib/useSlideshow";
import type { Shot } from "@/lib/media";
import type { Locale } from "@/lib/i18n";
import { ChevronRightIcon } from "@/components/icons";

const SLIDE_MS = 4500;

export default function LaptopSlider({
  shots,
  locale,
  labels,
}: {
  shots: Shot[];
  locale: Locale;
  labels: { prev: string; next: string; show: string };
}) {
  const { index, setIndex, go, pauseHandlers } = useSlideshow(shots.length, SLIDE_MS);
  const multiple = shots.length > 1;

  return (
    <div className="w-full" {...pauseHandlers}>
      {/* Lid */}
      <div className="rounded-t-2xl border border-white/15 bg-zinc-900 p-2 pb-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] sm:p-2.5 sm:pb-3">
        <div className="mx-auto mb-1.5 h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <div className="group relative aspect-video overflow-hidden rounded-md bg-black">
          {shots.map((shot, i) => {
            const active = i === index;
            return (
              <a
                key={shot.src.src}
                href={shot.src.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={!active}
                tabIndex={active ? 0 : -1}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  active ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {/* Fill the screen width; taller pages show their top, like an unscrolled browser. */}
                <Image
                  src={shot.src}
                  alt={shot.alt[locale]}
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="h-full w-full object-cover object-top"
                />
              </a>
            );
          })}
          {multiple && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={labels.prev}
                className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronRightIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={labels.next}
                className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
      {/* Base */}
      <div className="relative -mx-[7%] h-3 rounded-b-2xl bg-gradient-to-b from-zinc-500 to-zinc-800 sm:h-3.5">
        <div className="mx-auto h-1.5 w-16 rounded-b-md bg-zinc-900/70 sm:w-20" />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="min-w-0 truncate font-mono text-[11px] text-text-subtle" aria-live="polite">
          {shots[index].alt[locale]}
        </span>
        {multiple && (
          <div className="flex shrink-0 gap-1.5">
            {shots.map((shot, i) => (
              <button
                key={shot.src.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${labels.show} ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
