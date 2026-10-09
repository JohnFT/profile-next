import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function SideProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projectList = projects[locale];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min((index % 3) * 0.08, 0.16)}>
          <ProjectCard project={project} privateLabel={dict.apps.privateRepo} />
        </Reveal>
      ))}
    </div>
  );
}
