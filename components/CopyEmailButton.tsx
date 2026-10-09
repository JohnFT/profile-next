"use client";

import { useState } from "react";
import { CopyIcon } from "@/components/icons";

export default function CopyEmailButton({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="inline-flex max-w-full items-center gap-3 rounded-xl border border-white/10 bg-[#161618] p-1.5 pr-4">
      <button
        type="button"
        onClick={handleCopy}
        className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold text-on-accent transition-colors ${
          copied ? "bg-ok" : "bg-accent hover:bg-accent-hover"
        }`}
      >
        <CopyIcon className="h-4 w-4" />
        <span aria-live="polite">{copied ? copiedLabel : label}</span>
      </button>
      <a href={`mailto:${email}`} className="truncate font-mono text-xs text-zinc-300 hover:text-accent">
        {email}
      </a>
    </div>
  );
}
