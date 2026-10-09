import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  aside,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  aside?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col justify-between gap-4 border-b border-line pb-8 md:flex-row md:items-end">
        <div>
          <span className="mb-2 block font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</span>
          <Heading className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</Heading>
        </div>
        {subtitle && <p className="max-w-md text-sm font-light text-text-muted">{subtitle}</p>}
        {aside}
      </div>
    </Reveal>
  );
}
