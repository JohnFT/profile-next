import { skillGroups } from "@/lib/skills";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";

export default function Skills({ locale }: { locale: Locale }) {
  const groups = skillGroups[locale];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {groups.map((group, index) => (
        <Reveal key={group.label} delay={Math.min((index % 3) * 0.08, 0.16)}>
          <div className="h-full rounded-xl border border-white/[0.06] bg-card-2 p-8 transition-colors hover:border-white/20">
            <div className="mb-4 font-mono text-sm text-accent uppercase">
              {`${String(index + 1).padStart(2, "0")} // ${group.label}`}
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-white/5 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
