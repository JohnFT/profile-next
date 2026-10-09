import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import SectionHeader from "@/components/SectionHeader";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      <SectionHeader
        as="h1"
        eyebrow={dict.work.projectsEyebrow}
        title={dict.work.projectsHeading}
        subtitle={dict.work.projectsSubtitle}
      />
      <FeaturedProjects locale={lang} dict={dict} />
      <div className="mt-24">
        <SectionHeader eyebrow={dict.work.eyebrow} title={dict.work.experienceHeading} />
        <Experience locale={lang} dict={dict} />
      </div>
    </main>
  );
}
