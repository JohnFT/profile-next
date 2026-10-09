import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import { PerformanceIcon, TeamIcon, AiIcon, CodeIcon } from "@/components/icons";
import type { Dictionary } from "@/lib/dictionaries";

// Same order as dict.about.pillars; tools are named in the pillar descriptions and About body.
const pillarVisuals = [
  { Icon: CodeIcon, tools: ["TypeScript", "React", "Angular", "Node.js", "Java", "React Native", "Docker"] },
  { Icon: PerformanceIcon, tools: ["React", "Node.js", "Java", "Android", "iOS"] },
  { Icon: TeamIcon, tools: ["Scrum", "Kanban", "Jira", "Trello"] },
  { Icon: AiIcon, tools: ["Claude", "Cursor", "n8n", "MCP"] },
];

export default function AboutPillars({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {dict.about.pillars.map((pillar, index) => {
        const { Icon, tools } = pillarVisuals[index];
        return (
          <Reveal key={pillar.title} delay={Math.min(index * 0.08, 0.24)} className="h-full">
            <div className="group flex h-full flex-col rounded-xl border border-white/[0.06] bg-card-2 p-8 transition-colors hover:border-white/20">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="font-mono text-sm text-accent">{`${String(index + 1).padStart(2, "0")} //`}</div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/25 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">{pillar.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="inline-flex items-center gap-2 rounded border border-white/5 bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    <TechIcon label={tool} />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
