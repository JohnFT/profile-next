import { featuredProjects } from "@/lib/featuredProjects";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projectList = featuredProjects[locale];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {projectList.map((project, index) => (
        <Reveal key={project.name} delay={Math.min((index % 2) * 0.08, 0.16)}>
          <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-accent/40 lg:p-10">
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded border border-white/5 bg-white/[0.04] px-3 py-1 font-mono text-xs text-text-muted">
                  {project.period}
                </span>
                <span className="font-mono text-xs font-semibold text-accent uppercase">{project.highlight}</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-accent lg:text-3xl">
                {project.name}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-text-muted">{project.description}</p>
            </div>
            <div className="rounded-xl border border-white/[0.05] bg-black/50 p-5 font-mono text-xs">
              <span className="text-text-subtle">{dict.work.roleLabel}: </span>
              <span className="text-zinc-200">{project.role}</span>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
