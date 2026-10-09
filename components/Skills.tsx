import { skillGroups, CAREER_YEARS } from "@/lib/skills";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const groups = skillGroups[locale];
  const yearsLabel = (years: number) => `${years} ${years === 1 ? dict.skills.year : dict.skills.years}`;

  return (
    <>
      <Reveal>
        <div className="-mt-4 mb-10 flex items-center gap-3 font-mono text-xs text-text-subtle">
          <span className="h-1.5 w-10 shrink-0 rounded-full bg-gradient-to-r from-accent/50 to-accent" />
          {dict.skills.scale}
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {groups.map((group, index) => {
          // A lone last card (7 groups in a 3- or 2-column grid) stretches to fill its row.
          const wide = index === groups.length - 1 && groups.length % 3 === 1;
          const items = [...group.items].sort((a, b) => b.years - a.years);
          return (
            <Reveal
              key={group.label}
              delay={Math.min((index % 3) * 0.08, 0.16)}
              className={wide ? "md:col-span-2 lg:col-span-3" : undefined}
            >
              <div className="h-full rounded-xl border border-white/[0.06] bg-card-2 p-8 transition-colors hover:border-white/20">
                <div className="mb-6 font-mono text-sm text-accent uppercase">
                  {`${String(index + 1).padStart(2, "0")} // ${group.label}`}
                </div>
                <ul className={`grid gap-x-10 gap-y-4 ${wide ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex min-w-0 items-center gap-2 text-sm leading-snug text-zinc-200">
                          <TechIcon label={skill.name} />
                          {skill.name}
                        </span>
                        <span className="shrink-0 font-mono text-xs text-accent">{yearsLabel(skill.years)}</span>
                      </div>
                      <div
                        className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"
                        role="meter"
                        aria-label={skill.name}
                        aria-valuemin={0}
                        aria-valuemax={CAREER_YEARS}
                        aria-valuenow={skill.years}
                        aria-valuetext={yearsLabel(skill.years)}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent/50 to-accent"
                          style={{ width: `${Math.min(skill.years / CAREER_YEARS, 1) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
