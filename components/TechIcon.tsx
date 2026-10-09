import {
  siAndroid,
  siAngular,
  siAnthropic,
  siApachemaven,
  siBetterauth,
  siClaude,
  siCursor,
  siDocker,
  siDotnet,
  siExpo,
  siExpress,
  siFlask,
  siGit,
  siGithubactions,
  siGitlab,
  siH2database,
  siIonic,
  siIos,
  siJenkins,
  siJira,
  siModelcontextprotocol,
  siMysql,
  siMongodb,
  siN8n,
  siNativescript,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSpring,
  siSpringboot,
  siSqlite,
  siTelegram,
  siTrello,
  siTypescript,
  siVite,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";
import type { ComponentType } from "react";
import { AiIcon, CodeIcon, TeamIcon } from "@/components/icons";

// Matched in order against the lowercased skill label, so put specific names first
// (e.g. "react native" before "react", "spring boot" before "spring").
const brandIcons: [string, SimpleIcon][] = [
  ["react native", siReact],
  ["react", siReact],
  ["next.js", siNextdotjs],
  ["node.js", siNodedotjs],
  ["nest.js", siNestjs],
  ["express", siExpress],
  ["typescript", siTypescript],
  ["python", siPython],
  ["java", siOpenjdk],
  ["c#", siDotnet],
  ["php", siPhp],
  ["spring boot", siSpringboot],
  ["spring", siSpring],
  ["maven", siApachemaven],
  ["angular", siAngular],
  ["vue", siVuedotjs],
  ["nativescript", siNativescript],
  ["android", siAndroid],
  ["ionic", siIonic],
  ["ios", siIos],
  ["expo", siExpo],
  ["github actions", siGithubactions],
  ["gitlab", siGitlab],
  ["git", siGit],
  ["docker", siDocker],
  ["jenkins", siJenkins],
  ["n8n", siN8n],
  ["mcp", siModelcontextprotocol],
  ["claude", siClaude],
  ["anthropic", siAnthropic],
  ["cursor", siCursor],
  ["trello", siTrello],
  ["jira", siJira],
  ["prisma", siPrisma],
  ["postgresql", siPostgresql],
  ["mysql", siMysql],
  ["sqlite", siSqlite],
  ["h2", siH2database],
  ["mongodb", siMongodb],
  ["telegram", siTelegram],
  ["flask", siFlask],
  ["vite", siVite],
  ["better-auth", siBetterauth],
];

function LoopIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={2} stroke="currentColor">
      <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={2} stroke="currentColor">
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M9.5 4v16M15 4v16" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={2} stroke="currentColor">
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" strokeLinejoin="round" />
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} strokeWidth={2} stroke="currentColor">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
    </svg>
  );
}

const genericIcons: [string, ComponentType<{ className?: string }>][] = [
  ["oracle", DatabaseIcon],
  ["openai", AiIcon],
  ["scrum", LoopIcon],
  ["kanban", BoardIcon],
  ["lean", BoltIcon],
  ["mentor", TeamIcon],
  ["leadership", TeamIcon],
  ["liderazgo", TeamIcon],
];

// Near-black brand colors would vanish on the dark theme, so those render in the text color.
function isTooDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.25;
}

export default function TechIcon({ label, className = "h-3.5 w-3.5" }: { label: string; className?: string }) {
  const key = label.toLowerCase();
  const brand = brandIcons.find(([name]) => key.includes(name))?.[1];

  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className={`shrink-0 ${className}`}
        fill={isTooDark(brand.hex) ? "currentColor" : `#${brand.hex}`}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Generic = genericIcons.find(([name]) => key.includes(name))?.[1] ?? CodeIcon;
  return (
    <span aria-hidden className="shrink-0 text-accent">
      <Generic className={className} />
    </span>
  );
}
