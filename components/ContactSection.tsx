import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CopyEmailButton from "@/components/CopyEmailButton";
import type { Dictionary } from "@/lib/dictionaries";

const EMAIL = "johnafonseca@gmail.com";

const networks = [
  { label: "LinkedIn", handle: "in/johnalexander-fonseca", href: "https://linkedin.com/in/johnalexander-fonseca" },
  { label: "GitHub", handle: "github.com/JohnFT", href: "https://github.com/JohnFT" },
];

export default function ContactSection({ dict, as: Heading = "h2" }: { dict: Dictionary; as?: "h1" | "h2" }) {
  return (
    <div className="grid grid-cols-1 gap-12 pb-20 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Reveal>
          <span className="mb-3 block font-mono text-xs tracking-widest text-accent uppercase">{dict.mail.eyebrow}</span>
          <Heading className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
            {dict.mail.heading}
          </Heading>
          <p className="mb-8 max-w-xl text-base font-light text-text-muted">{dict.mail.subtitle}</p>
          <CopyEmailButton email={EMAIL} label={dict.mail.copyEmail} copiedLabel={dict.mail.copied} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-10 max-w-xl space-y-3 font-mono text-xs">
            <div className="mb-2 text-[11px] tracking-widest text-text-subtle uppercase">{dict.mail.connectLabel}</div>
            {networks.map((network) => (
              <a
                key={network.label}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded border border-white/5 bg-white/[0.03] p-3 text-zinc-300 transition-colors hover:bg-white/[0.08]"
              >
                <span>{network.label}</span>
                <span className="truncate">{network.handle} ↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-5 lg:self-end">
        <Reveal delay={0.12}>
          <ContactForm dict={dict} />
        </Reveal>
      </div>
    </div>
  );
}
