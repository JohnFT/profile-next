"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { switchLocalePath } from "@/lib/paths";
import { useActiveSection } from "@/lib/useActiveSection";
import LocalClock from "@/components/LocalClock";
import { ArrowRightIcon } from "@/components/icons";

export default function TopNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const active = useActiveSection();

  const links = [
    { id: "about", href: "#about", label: dict.nav.about },
    { id: "work", href: "#work", label: dict.nav.work },
    { id: "apps", href: "#apps", label: dict.nav.apps },
    { id: "skills", href: "#skills", label: dict.nav.skills },
  ];

  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const otherHref = switchLocalePath(pathname, otherLocale);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-12">
        <a href="#about" aria-label="John Fonseca" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-white text-lg font-bold tracking-tighter text-black transition-transform duration-300 group-hover:scale-105">
            JF
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-text-muted uppercase transition-colors group-hover:text-accent sm:inline">
            JF // BOG
          </span>
        </a>

        <nav className="flex items-center gap-4 text-sm sm:gap-7">
          <div className="hidden items-center gap-2 rounded-full border border-white/[0.05] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-text-muted md:flex">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-ok" />
            <span>
              BOG / <LocalClock />
            </span>
          </div>
          <ul className="hidden items-center gap-7 font-medium text-zinc-300 lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={active === link.id ? "text-accent transition-colors" : "transition-colors hover:text-accent"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={otherHref}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs font-semibold tracking-wide text-text-muted transition-colors hover:text-text"
          >
            {locale === "en" ? "ES" : "EN"}
          </Link>
          <a
            href="#mail"
            className="flex items-center gap-2 rounded bg-accent px-4 py-2 font-mono text-xs font-semibold tracking-wider text-on-accent uppercase shadow-[0_0_20px_rgba(255,217,142,0.25)] transition-colors hover:bg-accent-hover"
          >
            <span>{dict.nav.cta}</span>
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
