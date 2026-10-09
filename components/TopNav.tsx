"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { switchLocalePath } from "@/lib/paths";
import { useActiveSection } from "@/lib/useActiveSection";
import { AboutIcon, WorkIcon, AppsIcon, SkillsIcon, MailIcon } from "@/components/icons";

export default function TopNav({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const active = useActiveSection();

  const links = [
    { id: "about", href: "#about", label: dict.nav.about, Icon: AboutIcon },
    { id: "work", href: "#work", label: dict.nav.work, Icon: WorkIcon },
    { id: "apps", href: "#apps", label: dict.nav.apps, Icon: AppsIcon },
    { id: "skills", href: "#skills", label: dict.nav.skills, Icon: SkillsIcon },
    { id: "mail", href: "#mail", label: dict.nav.mail, Icon: MailIcon },
  ];

  const otherLocale: Locale = locale === "en" ? "es" : "en";
  const otherHref = switchLocalePath(pathname, otherLocale);

  return (
    <header className="sticky top-0 z-40 hidden border-b border-glass bg-bg/70 backdrop-blur-2xl sm:block">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-8 py-4">
        <a href="#about" className="font-label text-sm font-bold tracking-widest text-accent">
          PORTFOLIO
        </a>
        <ul className="flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={
                  active === link.id
                    ? "font-semibold text-accent transition-colors"
                    : "text-text-muted transition-colors hover:text-text"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Link
          href={otherHref}
          className="font-label rounded-full border border-glass px-3 py-1 text-xs font-semibold tracking-wide text-text-muted transition-colors hover:text-text"
        >
          {locale === "en" ? "ES" : "EN"}
        </Link>
      </nav>
    </header>
  );
}
