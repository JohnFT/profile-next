import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { projectShots } from "@/lib/media";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function SideProjects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projectList = projects[locale];
  const sliderLabels = { prev: dict.work.prevShot, next: dict.work.nextShot, show: dict.work.showShot };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectList.map((project, index) => (
        <Reveal
          key={project.slug}
          delay={Math.min((index % 3) * 0.08, 0.16)}
          className={projectShots[project.slug] ? "md:col-span-2 lg:col-span-3" : undefined}
        >
          <ProjectCard
            project={project}
            locale={locale}
            shots={projectShots[project.slug]}
            privateLabel={dict.apps.privateRepo}
            demoLabel={dict.apps.liveDemo}
            sliderLabels={sliderLabels}
          />
        </Reveal>
      ))}
    </div>
  );
}
