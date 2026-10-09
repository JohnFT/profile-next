import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Reveal from "@/components/Reveal";
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
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.nav.work}</h1>
      </Reveal>
      <div className="mt-10">
        <Experience locale={lang} dict={dict} />
        <FeaturedProjects locale={lang} dict={dict} />
      </div>
    </main>
  );
}
