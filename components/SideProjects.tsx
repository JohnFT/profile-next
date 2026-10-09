import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";

export default function SideProjects({ locale }: { locale: Locale }) {
  const projectList = projects[locale];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projectList.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index * 0.08, 0.32)}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
