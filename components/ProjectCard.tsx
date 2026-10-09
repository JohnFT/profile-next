import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, privateLabel }: { project: Project; privateLabel: string }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-white/[0.07] bg-card p-6 transition-colors hover:border-white/20">
      <div>
        <div className="mb-3 font-mono text-xs text-accent uppercase">{project.stack.slice(0, 2).join(" / ")}</div>
        <h3 className="mb-2 font-mono text-lg font-bold">{project.name}</h3>
        <p className="text-xs leading-relaxed text-text-muted">{project.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/5 pt-4 font-mono text-xs">
        <span className="truncate text-text-subtle">{project.stack.slice(2).join(" · ")}</span>
        {project.github ? (
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
        )}
      </div>
    </article>
  );
}
