import Reveal from "@/components/Reveal";
import { PerformanceIcon, TeamIcon, AiIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/dictionaries";

const icons = [PerformanceIcon, TeamIcon, AiIcon];

export default function AboutPillars({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-8 space-y-4">
      {dict.about.pillars.map((pillar, index) => {
        const Icon = icons[index];
        return (
          <Reveal key={pillar.title} delay={Math.min(index * 0.08, 0.24)}>
            <div className="flex gap-4 rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-3 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-1 text-sm leading-6 text-text-muted">{pillar.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
