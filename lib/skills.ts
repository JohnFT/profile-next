import type { Locale } from "@/lib/i18n";

export type Skill = { name: string; years: number };
export type SkillGroup = { label: string; items: Skill[] };

// The bars are drawn against the full career length.
export const CAREER_YEARS = 11;

// Years of hands-on use as of 2026. Values marked "CV" come from the dated roles in the CV;
// values marked "estimate" have no dates in the CV and should be confirmed by John.
const shared = {
  languages: [
    { name: "TypeScript", years: 3 }, // CV: Angular 2/7 at DigitalWare + Angular 8 at Almundo (2017–2020); the CV does not say Mercado Libre uses TS
    { name: "Node.js", years: 6 }, // CV: Mercado Libre, Oct 2020 → present
    { name: "Java 8", years: 5 }, // CV: Simple SA 2015–2017 + Mercado Libre 2020–2024
    { name: "PHP", years: 3 }, // CV: Opentic 2013–2014 + Simple SA 2015–2017
    { name: "C#", years: 2 }, // CV: DigitalWare 2017–2019
    { name: "Python", years: 1 }, // CV: Opentic (Django) 2013–2014
    { name: "Express", years: 6 }, // estimate: Node.js work at Mercado Libre
    { name: "Spring 5", years: 3 }, // estimate
    { name: "Nest.js", years: 2 }, // estimate
    { name: "Next.js", years: 2 }, // estimate: TalkReady and this portfolio
  ],
  databases: [
    { name: "MySQL", years: 3 }, // CV: Opentic + Simple SA
    { name: "PostgreSQL", years: 3 }, // CV: Opentic + Simple SA
    { name: "Oracle", years: 2 }, // CV: Simple SA 2015–2017
    { name: "SQLite", years: 2 }, // CV: Simple SA 2015–2017
    { name: "H2", years: 2 }, // CV: Simple SA 2015–2017
    { name: "MongoDB", years: 2 }, // CV: Ophelia Chat at DigitalWare 2017–2019
  ],
  frontend: [
    { name: "React", years: 6 }, // CV: Mercado Libre, Oct 2020 → present
    { name: "Angular", years: 3 }, // CV: DigitalWare 2017–2019 + Almundo 2019–2020
    { name: "AngularJS", years: 2 }, // CV: Kidon 2015 + Simple SA 2015–2017
    { name: "Vue.js", years: 1 }, // estimate: CV lists "basic Vue.js"
    { name: "NativeScript", years: 1 }, // estimate
  ],
  mobile: [
    { name: "React Native", years: 2 }, // CV: Almundo 2019–2020
    { name: "Android", years: 2 }, // estimate
    { name: "Ionic", years: 1 }, // estimate
  ],
  devops: [
    { name: "Git", years: 11 }, // estimate: assumed for the whole career
    { name: "Docker", years: 2 }, // CV: Almundo 2019–2020
    { name: "GitLab CI", years: 2 }, // CV: Almundo 2019–2020
    { name: "Jenkins", years: 2 }, // estimate
    { name: "GitHub Actions", years: 2 }, // estimate
    { name: "n8n", years: 1 }, // CV: AI automation since 2025
    { name: "MCP (Model Context Protocol)", years: 1 }, // CV: since 2025
  ],
  ai: [
    { name: "Claude", years: 1 }, // CV: since 2025
    { name: "Cursor", years: 1 }, // CV: since 2025
  ],
  // Same order as the localized leadership labels below.
  leadershipYears: [
    6, // CV: Simple SA 2015–2017, DigitalWare 2017–2019, Mercado Libre 2024 → present
    5, // estimate: mentoring at DigitalWare and Mercado Libre
    8, // estimate
    6, // estimate
    6, // estimate
    6, // estimate
    6, // estimate
  ],
};

const leadership = (names: string[]): Skill[] =>
  names.map((name, i) => ({ name, years: shared.leadershipYears[i] }));

const en: SkillGroup[] = [
  { label: "Languages & Frameworks", items: shared.languages },
  { label: "Databases", items: shared.databases },
  { label: "Frontend", items: shared.frontend },
  { label: "Mobile", items: shared.mobile },
  { label: "DevOps & Automation", items: shared.devops },
  { label: "AI & Productivity", items: shared.ai },
  {
    label: "Leadership",
    items: leadership([
      "Team & project leadership (up to 15)",
      "Mentoring",
      "Scrum",
      "Kanban",
      "Lean Software Development",
      "Trello",
      "Jira",
    ]),
  },
];

const es: SkillGroup[] = [
  { label: "Lenguajes y Frameworks", items: shared.languages },
  { label: "Bases de Datos", items: shared.databases },
  { label: "Frontend", items: shared.frontend },
  { label: "Móvil", items: shared.mobile },
  { label: "DevOps y Automatización", items: shared.devops },
  { label: "IA y Productividad", items: shared.ai },
  {
    label: "Liderazgo",
    items: leadership([
      "Liderazgo técnico y de proyectos (hasta 15 personas)",
      "Mentoría",
      "Scrum",
      "Kanban",
      "Lean Software Development",
      "Trello",
      "Jira",
    ]),
  },
];

export const skillGroups: Record<Locale, SkillGroup[]> = { en, es };
