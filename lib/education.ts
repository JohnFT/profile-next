import type { Locale } from "@/lib/i18n";

export type EducationContent = {
  degree: string;
  certifications: string[];
};

const en: EducationContent = {
  degree: "Systems Engineering (10th semester) — INCCA University of Colombia, 2013 – In progress",
  certifications: [
    "Ongoing training in generative AI with Claude (Anthropic) and Cursor — since 2025.",
    "Platzi (2016–2018) – Backend & Frontend Professional, Java, Git, Responsive Design, Android, Angular, React with Redux, Google Fullstack Developer, Databases (MySQL, PostgreSQL), Agile Methodologies & Scrum, Design Patterns, PWA with Angular, CSS Grid Layout, basic Vue.js.",
    "Udemy (2018–2019) – Angular 7 with Redux, Adobe InDesign, Adobe Illustrator, Digital Design Master with Photoshop, UX: Web Design & User Experience Master, The Complete Guide to Becoming a Software Architect.",
    "UX Biss – UX and Product Design Course (2018).",
  ],
};

const es: EducationContent = {
  degree: "Ingeniería de Sistemas (10.º semestre) — Universidad INCCA de Colombia, 2013 – En curso",
  certifications: [
    "Formación continua en IA generativa con Claude (Anthropic) y Cursor — desde 2025.",
    "Platzi (2016–2018) – Profesional Backend & Frontend, Java, Git, Diseño Responsivo, Android, Angular, React con Redux, Google Fullstack Developer, Bases de Datos (MySQL, PostgreSQL), Metodologías Ágiles y Scrum, Patrones de Diseño, PWA con Angular, CSS Grid Layout, Vue.js básico.",
    "Udemy (2018–2019) – Angular 7 con Redux, Adobe InDesign, Adobe Illustrator, Máster en Diseño Digital con Photoshop, UX: Máster en Diseño Web y Experiencia de Usuario, Guía Completa para ser Arquitecto de Software.",
    "UX Biss – Curso de UX y Diseño de Producto (2018).",
  ],
};

export const educationContent: Record<Locale, EducationContent> = { en, es };
