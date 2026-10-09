import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ContactSection from "@/components/ContactSection";

export default async function MailPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
      <ContactSection as="h1" dict={dict} />
    </main>
  );
}
