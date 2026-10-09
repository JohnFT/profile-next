import { featuredProjects } from "@/lib/featuredProjects";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function FeaturedProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projectList = featuredProjects[locale];

  return (
    <section className="mt-16">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">{dict.work.projectsHeading}</h2>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projectList.map((project, index) => (
          <Reveal key={project.name} delay={Math.min(index * 0.08, 0.32)}>
            <article className="h-full rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_32px_-8px_var(--color-accent)]">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">{project.name}</h3>
                <span className="font-label shrink-0 text-xs text-text-muted">{project.period}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-text-muted">{project.description}</p>
              <p className="mt-3 text-xs text-text-muted">
                {dict.work.roleLabel}: {project.role}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
