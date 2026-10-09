import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/lib/dictionaries";

export default function AboutPillars({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
      {dict.about.pillars.map((pillar, index) => (
        <Reveal key={pillar.title} delay={Math.min(index * 0.08, 0.24)}>
          <div className="h-full rounded-xl border border-white/[0.06] bg-card-2 p-8 transition-colors hover:border-white/20">
            <div className="mb-4 font-mono text-sm text-accent">{`${String(index + 1).padStart(2, "0")} //`}</div>
            <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-text-muted">{pillar.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
