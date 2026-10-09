import type { Dictionary } from "@/lib/dictionaries";

export default function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-text-subtle sm:flex-row">
      <div>
        © {new Date().getFullYear()} {dict.footer.copyright}
      </div>
      <div className="flex items-center gap-6">
        <span className="uppercase">{dict.footer.timezone}</span>
        <a href="#about" className="uppercase transition-colors hover:text-white">
          {dict.footer.backToTop} ↑
        </a>
      </div>
    </div>
  );
}
