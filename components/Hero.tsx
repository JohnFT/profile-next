import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import { companyShots, type Shot } from "@/lib/media";
import profilePhoto from "@/assets/profile.webp";
import { ChevronDownIcon } from "@/components/icons";

function BrowserBar({ domain, badge }: { domain: string; badge: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500/80" />
        <span className="ml-1 truncate font-mono text-[11px] text-zinc-300">{domain}</span>
      </div>
      <span className="shrink-0 rounded border border-ok/30 bg-ok/10 px-2 py-0.5 font-mono text-[10px] text-ok uppercase">
        {badge}
      </span>
    </div>
  );
}

function BrowserCard({
  className,
  domain,
  badge,
  shot,
  title,
  body,
  footer,
  stack,
  focus,
  preload = false,
}: {
  className: string;
  domain: string;
  badge: string;
  shot: Shot;
  title: string;
  body: string;
  footer: string;
  stack: string;
  /** Classes that crop/zoom into part of the screenshot; omit to show it whole. */
  focus?: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`deck-card absolute flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#141416] ${className}`}
    >
      <BrowserBar domain={domain} badge={badge} />
      {/* Full screenshot at its natural ratio, framed like a browser viewport */}
      <div className="overflow-hidden border-b border-white/10 bg-white">
        <Image
          src={shot.src}
          alt=""
          preload={preload}
          sizes={focus ? "740px" : "380px"}
          className={`block w-full ${focus ?? "h-auto"}`}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-3 font-mono text-[11px]">
          <span className="truncate text-text-subtle uppercase">{footer}</span>
          <span className="shrink-0 text-ok">{stack}</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ dict }: { dict: Dictionary }) {
  const { deck } = dict;

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

        <div
          aria-hidden
          className="deck relative flex h-[520px] items-center justify-center select-none sm:h-[620px] lg:col-span-6 lg:h-[680px]"
        >
          <BrowserCard
            className="deck-card-1 h-[440px] w-[280px] sm:h-[520px] sm:w-[360px]"
            domain="kidon.co"
            badge="2015"
            shot={companyShots["Kidon SA"][0]}
            title="Kidon"
            body={deck.kidonBody}
            footer={deck.kidonFooter}
            stack="AngularJS · Sass"
          />
          <BrowserCard
            className="deck-card-2 h-[450px] w-[285px] sm:h-[530px] sm:w-[370px]"
            domain="mercadolibre.com.co"
            badge={deck.meliBadge}
            shot={companyShots["Mercado Libre"][1]}
            title="Mercado Libre"
            body={deck.meliBody}
            footer={deck.meliFooter}
            stack="React · Node.js"
            focus="h-[200px] origin-[85%_40%] scale-[1.35] object-cover object-[85%_40%] sm:h-[250px]"
          />
          <BrowserCard
            className="deck-card-3 z-20 h-[460px] w-[290px] sm:h-[550px] sm:w-[380px]"
            domain="almundo.com"
            badge="2019 – 2020"
            shot={companyShots.Almundo[0]}
            title="Almundo"
            body={deck.almundoBody}
            footer={deck.almundoFooter}
            stack="GitLab CI · Docker"
            preload
          />

          {/* Foremost: Pago Simple phone */}
          <div className="deck-card deck-card-4 absolute z-30 flex h-[360px] w-[200px] flex-col justify-between rounded-[2rem] border border-white/20 bg-zinc-950/95 p-4 backdrop-blur-xl sm:h-[440px] sm:w-[250px]">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-wider uppercase">
              <span className="flex items-center gap-2 text-accent">
                <span className="h-2 w-2 rounded-full bg-ok" />
                Pago Simple
              </span>
              <span className="text-text-subtle">{deck.simpleTag}</span>
            </div>
            <div className="overflow-hidden rounded-2xl border-4 border-black">
              <Image
                src={companyShots["Simple SA"][0].src}
                alt=""
                preload
                sizes="250px"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-accent/20 to-transparent p-2.5">
              <span className="block font-mono text-[9px] font-semibold text-accent uppercase">{deck.simpleNote}</span>
              <span className="text-[10px] text-zinc-300">{deck.simpleNoteBody}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
