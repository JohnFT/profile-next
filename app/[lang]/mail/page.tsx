import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { MailIcon, AboutIcon } from "@/components/icons";

export default async function MailPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{dict.mail.heading}</h1>
        <p className="mt-3 text-text-muted">{dict.mail.subtitle}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 space-y-4">
          <a
            href="mailto:johnafonseca@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-glass bg-surface-2 p-4 backdrop-blur-xl transition-colors hover:border-accent/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-3 text-accent">
              <MailIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="font-label block text-xs text-text-muted">{dict.mail.emailLabel}</span>
              <span className="font-semibold">johnafonseca@gmail.com</span>
            </span>
          </a>
          <a
            href="https://linkedin.com/in/johnalexander-fonseca"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-glass bg-surface-2 p-4 backdrop-blur-xl transition-colors hover:border-accent-2/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-3 text-accent-2">
              <AboutIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="font-label block text-xs text-text-muted">LinkedIn</span>
              <span className="font-semibold">linkedin.com/in/johnalexander-fonseca</span>
            </span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <ContactForm dict={dict} />
      </Reveal>
    </main>
  );
}
