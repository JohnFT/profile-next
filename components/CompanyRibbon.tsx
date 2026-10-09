import { experience } from "@/lib/experience";
import type { Dictionary } from "@/lib/dictionaries";
import CompanyLogo from "@/components/CompanyLogo";

export default function CompanyRibbon({ dict }: { dict: Dictionary }) {
  const companies = [...new Set(experience.en.map((job) => job.company))];
  // Duplicated so the marquee can loop seamlessly at -50%.
  const loop = [...companies, ...companies, ...companies, ...companies];

  return (
    <section className="overflow-hidden border-y border-line bg-[#0c0c0d] py-6">
      <div className="mx-auto mb-4 max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <span className="font-mono text-[11px] tracking-widest text-text-subtle uppercase">{dict.companies.label}</span>
      </div>
      <div className="relative w-full overflow-hidden">
        <ul className="marquee items-center gap-6 pr-6 select-none">
          {loop.map((company, index) => (
            <li key={`${company}-${index}`} aria-hidden={index >= companies.length} className="group">
              <CompanyLogo company={company} muted className="h-12 w-40" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
