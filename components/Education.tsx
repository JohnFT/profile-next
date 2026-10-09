import Reveal from "@/components/Reveal";
import { educationContent } from "@/lib/education";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const labelClass = "font-mono text-xs tracking-widest text-accent uppercase";

export default function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const content = educationContent[locale];

  return (
    <div className="mt-20">
      <Reveal>
        <span className="mb-2 block font-mono text-xs tracking-widest text-accent uppercase">
          {dict.education.eyebrow}
        </span>
        <h3 className="text-3xl font-bold tracking-tight">{dict.education.heading}</h3>
      </Reveal>
      <Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-8">
            <h4 className={labelClass}>{dict.education.educationLabel}</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{content.degree}</p>
            <h4 className={`${labelClass} mt-8`}>{dict.education.languagesLabel}</h4>
            <ul className="mt-3 space-y-1 font-mono text-xs text-zinc-300">
              <li>{dict.education.spanish}</li>
              <li>{dict.education.english}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-card p-8">
            <h4 className={labelClass}>{dict.education.certificationsLabel}</h4>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-text-muted">
              {content.certifications.map((item) => (
                <li key={item} className="border-l border-line-strong pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
