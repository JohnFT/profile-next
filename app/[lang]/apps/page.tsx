import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import SectionHeader from "@/components/SectionHeader";
import SideProjects from "@/components/SideProjects";

export default async function AppsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      <SectionHeader as="h1" eyebrow={dict.apps.eyebrow} title={dict.apps.heading} subtitle={dict.apps.subtitle} />
      <SideProjects locale={lang} dict={dict} />
    </main>
  );
}
