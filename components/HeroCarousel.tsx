"use client";

import Image from "next/image";
import { companyShots, projectShots, type Shot } from "@/lib/media";
import { useSlideshow } from "@/lib/useSlideshow";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import CompanyLogo from "@/components/CompanyLogo";
import { ChevronRightIcon } from "@/components/icons";

const SLIDE_MS = 4000;

type Slide = {
  key: string;
  /** browser: desktop screenshot in a window; phone: screenshot that already has its bezel; square: app tile */
  kind: "browser" | "phone" | "square";
  /** Company on the career rail this slide belongs to; omitted for side projects. */
  company?: string;
  domain: string;
  badge: string;
  shot: Shot;
  title: string;
  footer: string;
  stack: string;
};

// Career stops, oldest first; keyed by the company names in lib/experience.ts.
const career = [
  { company: "Kidon SA", year: "2015" },
  { company: "Simple SA", year: "2015" },
  { company: "DigitalWare", year: "2017" },
  { company: "Almundo", year: "2019" },
  { company: "Mercado Libre", year: "2020" },
];

function SlideCard({ slide, locale, active, preload }: { slide: Slide; locale: Locale; active: boolean; preload: boolean }) {
  if (slide.kind === "phone") {
    return (
      <div className="deck-card overflow-hidden rounded-[2.2rem]">
        <Image src={slide.shot.src} alt={slide.shot.alt[locale]} sizes="220px" className="block h-auto w-full" />
      </div>
    );
  }

  if (slide.kind === "square") {
    return (
      <div className="deck-card rounded-[2rem] border border-white/15 bg-zinc-950 p-3">
        <Image src={slide.shot.src} alt={slide.shot.alt[locale]} sizes="320px" className="aspect-square w-full rounded-2xl object-cover" />
      </div>
    );
  }

  return (
    <div className="deck-card overflow-hidden rounded-2xl border border-white/15 bg-[#141416]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500/80" />
          <span className="ml-1 truncate font-mono text-[11px] text-zinc-300">{slide.domain}</span>
        </div>
        <span className="shrink-0 rounded border border-ok/30 bg-ok/10 px-2 py-0.5 font-mono text-[10px] text-ok uppercase">
          {slide.badge}
        </span>
      </div>
      {/* Natural ratio, so wide pages (Mercado Libre, Almundo) show edge to edge instead of being cropped */}
      <div className="overflow-hidden bg-white">
        <Image
          src={slide.shot.src}
          alt={slide.shot.alt[locale]}
          preload={preload}
          sizes="(min-width: 1024px) 480px, 80vw"
          className={`block h-auto w-full transition-[filter] duration-500 ${active ? "" : "brightness-75"}`}
        />
      </div>
    </div>
  );
}

const widths: Record<Slide["kind"], string> = {
  browser: "w-[86%]",
  phone: "w-[34%]",
  square: "w-[54%]",
};

export default function HeroCarousel({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { deck, work } = dict;

  const slides: Slide[] = [
    {
      key: "meli",
      kind: "browser",
      company: "Mercado Libre",
      domain: "mercadolibre.com.co",
      badge: deck.meliBadge,
      shot: companyShots["Mercado Libre"][0],
      title: "Mercado Libre",
      footer: deck.meliFooter,
      stack: "React · Node.js",
    },
    {
      key: "talkready",
      kind: "browser",
      domain: "talkready.app",
      badge: "AI",
      shot: projectShots["talk-ready"][0],
      title: "TalkReady",
      footer: deck.talkFooter,
      stack: "Next.js · Claude",
    },
    {
      key: "animal-farm",
      kind: "phone",
      domain: "",
      badge: "",
      shot: projectShots["animal-farm"][0],
      title: "MyRancho",
      footer: deck.farmFooter,
      stack: "React Native · Expo",
    },
    {
      key: "almundo",
      kind: "browser",
      company: "Almundo",
      domain: "almundo.com",
      badge: "2019 – 2020",
      shot: companyShots.Almundo[0],
      title: "Almundo",
      footer: deck.almundoFooter,
      stack: "Angular · GitLab CI",
    },
    {
      key: "simple",
      kind: "square",
      company: "Simple SA",
      domain: "",
      badge: "",
      shot: companyShots["Simple SA"][0],
      title: "Pago Simple",
      footer: deck.simpleFooter,
      stack: "2015 – 2017",
    },
    {
      key: "kidon",
      kind: "browser",
      company: "Kidon SA",
      domain: "kidon.co",
      badge: "2015",
      shot: companyShots["Kidon SA"][0],
      title: "Kidon",
      footer: deck.kidonFooter,
      stack: "AngularJS · Sass",
    },
  ];

  const { index, setIndex, go, pauseHandlers } = useSlideshow(slides.length, SLIDE_MS);
  const current = slides[index];
  const count = slides.length;

  return (
    <div className="relative w-full" {...pauseHandlers}>
      {/* Career rail: click a company to jump to its screen; the active one lights up */}
      <p className="mb-3 font-mono text-[11px] tracking-wider text-text-subtle uppercase">{deck.careerLabel}</p>
      <ol className="relative grid grid-cols-5 gap-2 sm:gap-3">
        <span aria-hidden className="absolute top-5 right-[10%] left-[10%] h-px bg-gradient-to-r from-white/5 via-white/20 to-accent" />
        {career.map((stop, i) => {
          const target = slides.findIndex((s) => s.company === stop.company);
          const active = current.company === stop.company;
          const latest = i === career.length - 1;
          const label = (
            <>
              <CompanyLogo
                company={stop.company}
                muted={!active}
                className={`h-10 w-full max-w-[110px] px-1.5 py-1.5 transition sm:px-3 ${active ? "shadow-[0_0_28px_rgba(255,217,142,0.45)] ring-2 ring-accent" : ""}`}
              />
              <span className={`font-mono text-[10px] sm:text-[11px] ${active ? "text-accent" : "text-text-subtle"}`}>
                {latest ? deck.meliBadge : stop.year}
              </span>
            </>
          );
          return (
            <li key={stop.company} className="relative flex flex-col items-center">
              {target >= 0 ? (
                <button
                  type="button"
                  onClick={() => setIndex(target)}
                  data-umami-event="carrusel-empresa"
                  data-umami-event-empresa={stop.company}
                  aria-label={stop.company}
                  aria-current={active}
                  className="group flex w-full flex-col items-center gap-2"
                >
                  {label}
                </button>
              ) : (
                <div className="flex w-full flex-col items-center gap-2">{label}</div>
              )}
            </li>
          );
        })}
      </ol>

      {/* 3D ring: the active slide faces front, neighbours turn away into the distance */}
      <div className="carousel relative mt-6 h-[340px] sm:h-[500px]">
        {slides.map((slide, i) => {
          // Shortest signed distance around the ring, so it wraps both ways.
          let d = i - index;
          if (d > count / 2) d -= count;
          if (d < -count / 2) d += count;
          const abs = Math.abs(d);
          const hidden = abs > 2;
          return (
            <button
              key={slide.key}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={slide.title}
              aria-hidden={d !== 0}
              tabIndex={d === 0 ? 0 : -1}
              className={`carousel-slide absolute top-1/2 ${widths[slide.kind]} ${hidden ? "pointer-events-none" : ""}`}
              style={{
                // Offsets are a share of the stage width, so wide browsers and narrow phones space evenly.
                left: `${50 + d * 52}%`,
                transform: `translate(-50%, -50%) translateZ(${-abs * 240}px) rotateY(${-d * 40}deg)`,
                opacity: hidden ? 0 : abs === 0 ? 1 : abs === 1 ? 0.65 : 0.3,
                zIndex: 10 - abs,
              }}
            >
              <SlideCard slide={slide} locale={locale} active={d === 0} preload={i === 0} />
            </button>
          );
        })}
      </div>

      {/* Caption and controls for the active slide */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={work.prevShot}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <ChevronRightIcon className="h-4 w-4 rotate-180" />
        </button>
        <div className="min-w-0 text-center" aria-live="polite">
          <p className="text-lg font-bold tracking-tight">
            {current.title}
            {!current.company && (
              <span className="ml-2 rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 align-middle font-mono text-[10px] font-normal text-accent uppercase">
                {deck.sideLabel}
              </span>
            )}
          </p>
          <p className="mt-1 truncate font-mono text-[11px] text-text-subtle uppercase">
            {current.footer} <span className="text-ok normal-case">· {current.stack}</span>
          </p>
          <div className="mt-3 flex justify-center gap-1.5">
            {slides.map((slide, i) => (
              <button
                key={slide.key}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${work.showShot} ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={work.nextShot}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
