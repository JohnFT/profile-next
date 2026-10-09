import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CompanyRibbon from "@/components/CompanyRibbon";
import SectionHeader from "@/components/SectionHeader";
import AboutPillars from "@/components/AboutPillars";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import SideProjects from "@/components/SideProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import { ExternalIcon } from "@/components/icons";

const container = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="flex flex-1 flex-col">
      <section id="about" className="scroll-mt-20">
        <Hero dict={dict} />
        <CompanyRibbon dict={dict} />
        <div className={`${container} py-24 lg:py-32`}>
          <SectionHeader eyebrow={dict.about.eyebrow} title={dict.about.heading} />
          <Reveal>
            <p className="max-w-4xl text-lg leading-relaxed font-light text-zinc-300">{dict.about.body}</p>
          </Reveal>
          <AboutPillars dict={dict} />
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-line bg-bg-alt">
        <div className={`${container} py-24 lg:py-32`}>
          <SectionHeader
            eyebrow={dict.work.projectsEyebrow}
            title={dict.work.projectsHeading}
            subtitle={dict.work.projectsSubtitle}
          />
          <FeaturedProjects locale={lang} dict={dict} />
          <div className="mt-24">
            <SectionHeader eyebrow={dict.work.eyebrow} title={dict.work.experienceHeading} />
            <Experience locale={lang} dict={dict} />
          </div>
        </div>
      </section>

      <section id="apps" className="scroll-mt-20 border-t border-line">
        <div className={`${container} py-24`}>
          <SectionHeader
            eyebrow={dict.apps.eyebrow}
            title={dict.apps.heading}
            aside={
              <a
                href="https://github.com/JohnFT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs text-text-muted uppercase hover:text-white"
              >
                <span>{dict.apps.githubProfile}</span>
                <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            }
          />
          <Reveal>
            <p className="-mt-6 mb-10 text-sm text-text-muted">{dict.apps.subtitle}</p>
          </Reveal>
          <SideProjects locale={lang} dict={dict} />
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-t border-line bg-bg-alt">
        <div className={`${container} py-24`}>
          <SectionHeader eyebrow={dict.skills.eyebrow} title={dict.skills.heading} subtitle={dict.skills.subtitle} />
          <Skills locale={lang} dict={dict} />
          <Education locale={lang} dict={dict} />
        </div>
      </section>

      <footer id="mail" className="scroll-mt-20 border-t border-white/[0.1] bg-bg-alt pt-24 pb-16">
        <div className={container}>
          <ContactSection dict={dict} />
          <SiteFooter dict={dict} />
        </div>
      </footer>
    </main>
  );
}
