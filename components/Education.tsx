import Reveal from "@/components/Reveal";
import { educationContent } from "@/lib/education";
import { certificates, PLATZI_PROFILE } from "@/lib/certificates";
import CertificateSlider from "@/components/CertificateSlider";
import { ExternalIcon } from "@/components/icons";
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
      <Reveal>
        <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h4 className={labelClass}>{dict.education.verifiedHeading}</h4>
            <p className="mt-2 text-sm text-text-muted">
              <span className="font-mono text-accent">
                {certificates.length} {dict.education.certCount}
              </span>{" "}
              · {dict.education.verifiedSubtitle}
            </p>
          </div>
          <a
            href={PLATZI_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-text-muted uppercase transition-colors hover:text-white"
          >
            {dict.education.allOnPlatzi}
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
      <div className="mt-6">
        <CertificateSlider
          certificates={certificates}
          labels={{
            prev: dict.education.prevDiploma,
            next: dict.education.nextDiploma,
            view: dict.education.viewDiploma,
            categories: dict.education.certCategories,
          }}
        />
      </div>
    </div>
  );
}
