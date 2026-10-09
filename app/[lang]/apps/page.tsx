import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Reveal from "@/components/Reveal";
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
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.apps.heading}</h1>
        <p className="mt-3 text-text-muted">{dict.apps.subtitle}</p>
      </Reveal>
      <div className="mt-10">
        <SideProjects locale={lang} />
      </div>
    </main>
  );
}
