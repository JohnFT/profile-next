import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import SectionHeader from "@/components/SectionHeader";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      <SectionHeader as="h1" eyebrow={dict.skills.eyebrow} title={dict.skills.heading} subtitle={dict.skills.subtitle} />
      <Skills locale={lang} />
      <Education locale={lang} dict={dict} />
    </main>
  );
}
