import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import profilePhoto from "@/assets/profile.webp";
import { ChevronDownIcon } from "@/components/icons";
import HeroCarousel from "@/components/HeroCarousel";
import type { Locale } from "@/lib/i18n";

export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {

  return (
    <section className="hero-glow bg-grid-pattern relative flex items-center overflow-hidden pt-12 pb-20 lg:min-h-[860px] lg:pt-16 lg:pb-28">
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="z-20 flex flex-col items-start lg:col-span-6 lg:pr-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900 p-1 shadow-2xl sm:h-28 sm:w-28">
                <Image
                  src={profilePhoto}
                  alt="John Alexander Fonseca Tumay"
                  preload
                  sizes="112px"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <span className="absolute right-1 bottom-1 h-4 w-4 rounded-full border-2 border-bg bg-ok" />
            </div>
            <div>
              <div className="mb-1.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-accent uppercase">
                <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" />
                <span>{dict.hero.status}</span>
              </div>
              <p className="font-mono text-xs text-text-muted uppercase">{dict.hero.tagline}</p>
              <p className="mt-0.5 font-mono text-xs text-text-subtle uppercase">{dict.hero.location}</p>
            </div>
          </div>

          <h1 className="mb-6 text-5xl leading-[1.05] font-bold tracking-tight text-accent sm:text-6xl lg:text-7xl">
            John Alexander Fonseca Tumay
          </h1>
          <p className="mb-3 max-w-xl text-lg leading-relaxed font-normal text-zinc-200 sm:text-xl lg:text-2xl">
            {dict.hero.title}
          </p>
          <p className="mb-9 max-w-xl leading-relaxed font-light text-text-muted">{dict.hero.intro}</p>

          <div className="flex w-full flex-wrap items-center gap-4 sm:w-auto">
            <a
              href="#work"
              className="flex items-center gap-3 rounded bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-zinc-200"
            >
              <span>{dict.hero.ctaPrimary}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </a>
            <a
              href="#mail"
              className="rounded border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-medium tracking-wide text-zinc-200 transition-colors hover:bg-white/[0.09]"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>

          <dl className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-line pt-8">
            {dict.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-bold text-white">{stat.value}</dd>
                <dd className="mt-0.5 text-xs tracking-wider text-text-muted uppercase">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <HeroCarousel dict={dict} locale={locale} />
        </div>
      </div>
    </section>
  );
}
