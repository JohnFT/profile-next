import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-accent-2/40 hover:shadow-[0_0_32px_-8px_var(--color-accent-2)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold">{project.name}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-accent-2 underline-offset-4 hover:underline"
          >
            GitHub ↗
          </a>
        )}
      </div>
      <p className="mt-2 text-sm leading-6 text-text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-label rounded-full bg-surface-3 px-2.5 py-1 text-xs text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
