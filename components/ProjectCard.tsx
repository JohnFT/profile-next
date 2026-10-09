import type { Project } from "@/lib/projects";
import type { Shot } from "@/lib/media";
import type { Locale } from "@/lib/i18n";
import LaptopSlider from "@/components/LaptopSlider";
import TechIcon from "@/components/TechIcon";

type SliderLabels = { prev: string; next: string; show: string };

function RepoLink({ project, privateLabel }: { project: Project; privateLabel: string }) {
  return project.github ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="shrink-0 text-zinc-300 transition-colors hover:text-accent"
    >
      GitHub →
    </a>
  ) : (
    <span className="shrink-0 text-text-subtle">{privateLabel}</span>
  );
}

export default function ProjectCard({
  project,
  locale,
  shots,
  privateLabel,
  sliderLabels,
}: {
  project: Project;
  locale: Locale;
  shots?: Shot[];
  privateLabel: string;
  sliderLabels: SliderLabels;
}) {
  // Projects with screenshots get a wide, featured layout with a laptop slideshow.
  if (shots) {
    return (
      <article className="grid grid-cols-1 gap-10 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent/40 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center lg:gap-14 lg:p-10">
        <div>
          <div className="mb-3 font-mono text-xs text-accent uppercase">{project.stack.slice(0, 2).join(" / ")}</div>
          <h3 className="mb-4 font-mono text-3xl font-bold">{project.name}</h3>
          <p className="text-sm leading-relaxed text-text-muted lg:text-base">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded border border-white/5 bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-zinc-300"
              >
                <TechIcon label={tech} />
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-white/5 pt-4 font-mono text-xs">
            <RepoLink project={project} privateLabel={privateLabel} />
          </div>
        </div>
        <div className="px-[5%] lg:px-[4%]">
          <LaptopSlider shots={shots} locale={locale} labels={sliderLabels} />
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-white/[0.07] bg-card p-6 transition-colors hover:border-white/20">
      <div>
        <div className="mb-3 font-mono text-xs text-accent uppercase">{project.stack.slice(0, 2).join(" / ")}</div>
        <h3 className="mb-2 font-mono text-lg font-bold">{project.name}</h3>
        <p className="text-xs leading-relaxed text-text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="inline-flex items-center gap-1.5 rounded border border-white/5 bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-300"
            >
              <TechIcon label={tech} className="h-3 w-3" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex items-center justify-end border-t border-white/5 pt-4 font-mono text-xs">
        <RepoLink project={project} privateLabel={privateLabel} />
      </div>
    </article>
  );
}
