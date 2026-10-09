import Reveal from "@/components/Reveal";
import { educationContent } from "@/lib/education";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const content = educationContent[locale];

  return (
    <section className="mt-16">
      <Reveal>
        <h2 className="text-xl font-semibold tracking-tight">{dict.education.heading}</h2>
      </Reveal>
      <Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl">
            <h3 className="font-label text-xs font-semibold tracking-wide text-accent">
              {dict.education.educationLabel}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">{content.degree}</p>
            <h3 className="font-label mt-6 text-xs font-semibold tracking-wide text-accent">
              {dict.education.languagesLabel}
            </h3>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-text-muted">
              <li>{dict.education.spanish}</li>
              <li>{dict.education.english}</li>
            </ul>
          </div>
          <div className="rounded-xl border border-glass bg-surface-2 p-6 backdrop-blur-xl">
            <h3 className="font-label text-xs font-semibold tracking-wide text-accent">
              {dict.education.certificationsLabel}
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-text-muted">
              {content.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
