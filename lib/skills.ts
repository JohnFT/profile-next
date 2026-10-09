import type { Locale } from "@/lib/i18n";

export type SkillGroup = { label: string; items: string[] };

const shared = {
  languages: ["Java 8", "Node.js", "Python", "TypeScript", "C#", "PHP", "Spring 5", "Express", "Nest.js", "Next.js"],
  frontend: ["React", "Angular", "AngularJS", "Vue.js", "NativeScript"],
  mobile: ["React Native", "Android", "Ionic"],
  devops: ["Git", "Docker", "GitLab CI", "Jenkins", "GitHub Actions", "n8n", "MCP (Model Context Protocol)"],
  ai: ["Claude", "Cursor"],
};

const en: SkillGroup[] = [
  { label: "Languages & Backend", items: shared.languages },
  { label: "Frontend", items: shared.frontend },
  { label: "Mobile", items: shared.mobile },
  { label: "DevOps & Automation", items: shared.devops },
  { label: "AI & Productivity", items: shared.ai },
  {
    label: "Leadership",
    items: [
      "Team & project leadership (up to 15)",
      "Mentoring",
      "Scrum",
      "Kanban",
      "Lean Software Development",
      "Trello",
      "Jira",
    ],
  },
];

const es: SkillGroup[] = [
  { label: "Lenguajes y Backend", items: shared.languages },
  { label: "Frontend", items: shared.frontend },
  { label: "Móvil", items: shared.mobile },
  { label: "DevOps y Automatización", items: shared.devops },
  { label: "IA y Productividad", items: shared.ai },
  {
    label: "Liderazgo",
    items: [
      "Liderazgo técnico y de proyectos (hasta 15 personas)",
      "Mentoría",
      "Scrum",
      "Kanban",
      "Lean Software Development",
      "Trello",
      "Jira",
    ],
  },
];

export const skillGroups: Record<Locale, SkillGroup[]> = { en, es };
