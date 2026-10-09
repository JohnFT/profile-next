"use client";

import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { useActiveSection } from "@/lib/useActiveSection";
import { AboutIcon, WorkIcon, AppsIcon, SkillsIcon, MailIcon } from "@/components/icons";

export default function BottomTabBar({ dict }: { locale: Locale; dict: Dictionary }) {
  const active = useActiveSection();

  const links = [
    { id: "about", href: "#about", label: dict.nav.about, Icon: AboutIcon },
    { id: "work", href: "#work", label: dict.nav.work, Icon: WorkIcon },
    { id: "apps", href: "#apps", label: dict.nav.apps, Icon: AppsIcon },
    { id: "skills", href: "#skills", label: dict.nav.skills, Icon: SkillsIcon },
    { id: "mail", href: "#mail", label: dict.nav.mail, Icon: MailIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-40 flex w-full items-center justify-around border-t border-line bg-bg/90 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-2xl sm:hidden">
      {links.map((link) => {
        const isActive = active === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            className={
              isActive
                ? "flex flex-col items-center gap-1 px-2 text-accent"
                : "flex flex-col items-center gap-1 px-2 text-text-muted"
            }
          >
            <link.Icon className="h-5 w-5" />
            <span className="font-mono text-[10px] font-semibold tracking-wide">
              {link.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
