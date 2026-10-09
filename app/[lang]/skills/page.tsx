import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Reveal from "@/components/Reveal";
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
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.nav.skills}</h1>
      </Reveal>
      <div className="mt-10">
        <Skills locale={lang} dict={dict} />
        <Education locale={lang} dict={dict} />
      </div>
    </main>
  );
}
