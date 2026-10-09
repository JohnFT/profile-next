import { skillGroups } from "@/lib/skills";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const groups = skillGroups[locale];

  return (
    <section>
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">{dict.skills.heading}</h2>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => (
          <Reveal key={group.label} delay={Math.min(index * 0.06, 0.24)}>
            <div className="h-full rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl">
              <h3 className="font-label text-xs font-semibold tracking-wide text-accent">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-label rounded-full bg-surface-3 px-2.5 py-1 text-xs text-text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
