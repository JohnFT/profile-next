import type { Locale } from "@/lib/i18n";

export type FeaturedProject = {
  name: string;
  period: string;
  description: string;
  role: string;
};

const en: FeaturedProject[] = [
  {
    name: "Technical Backlog & Application Health (Search)",
    period: "2024 – 2026",
    description:
      "Defined the technical backlog for the application and the Search project across 2024, 2025, and 2026, leading performance and product-health improvements: optimized Web Vitals (reducing LCP and INP on mobile and desktop web) and cut the non-blocking error rate from over 15% to under 0.5%. Also led technical-debt reduction by refactoring components and improving componentization.",
    role: "Technical backlog definition and leadership of the initiative.",
  },
  {
    name: "Release Automation System",
    period: "2024 – Present",
    description:
      "Node.js API with microservices automating each stage of the release pipeline (version cut, testing, regression, and AI-supervised canary deployments), with Datadog and Grafana monitoring. Increased release cadence from 1 to 2–3 releases per week, cutting production errors and hotfixes by 50%.",
    role: "Architect and technical lead of the system.",
  },
  {
    name: "Agentic Chat and Search Webview",
    period: "2024 – Present",
    description:
      "Designed the architecture of the agentic chat that connects users with an AI model for personalized product recommendations, and led development of a search webview embedded in the native app, with search history and an AI-powered recommendation carousel.",
    role: "Architecture design and technical leadership of the development.",
  },
  {
    name: "Visual E2E Regression",
    period: "2024 – Present",
    description:
      "Automated E2E regression framework with visual comparison, integrated into the CI/CD pipeline, moving from a 100% manual process to 10% automated. Cut regression time from a full day to about an hour.",
    role: "Initiator and owner of the initiative.",
  },
  {
    name: "Ophelia Suite",
    period: "2017 – 2019",
    description:
      "Designed the front-end architecture (C#, Angular 2/7) of five enterprise products at DigitalWare: Ophelia Portal (BPM and dynamic forms), Ophelia News, GoodDay (CRM and enterprise social network), Ophelia Forum, and Ophelia Chat (real-time messaging with MongoDB). Recognized with the 2019 Innovation Award.",
    role: "Full Stack Developer, Front-End Architect, Project Lead (on GoodDay).",
  },
  {
    name: "Reporting Portal / +Simple",
    period: "2016",
    description:
      "Architected and evolved a social-security transactional portal (AngularJS / Java), adding report generation, payroll payment, bank dispersal files, and a dynamic template manager.",
    role: "Project lead, Full Stack Developer (AngularJS, Java), Software Architect.",
  },
];

const es: FeaturedProject[] = [
  {
    name: "Backlog Técnico y Salud de la Aplicación (Search)",
    period: "2024 – 2026",
    description:
      "Definí el backlog técnico de la aplicación y del proyecto de Search durante 2024, 2025 y 2026, liderando mejoras de rendimiento y salud del producto: optimicé los Web Vitals (reduciendo LCP e INP en mobile web y desktop web) y reduje la tasa de errores no bloqueantes de más del 15% a menos del 0.5%. También lideré la reducción de deuda técnica refactorizando componentes y mejorando la componentización de la aplicación.",
    role: "Definición del backlog técnico y liderazgo de la iniciativa.",
  },
  {
    name: "Sistema de Automatización de Releases",
    period: "2024 – Presente",
    description:
      "API en Node.js con microservicios que automatiza cada etapa del pipeline de release (corte de versión, pruebas, regresión y despliegues canary supervisados por IA), con monitoreo en Datadog y Grafana. Aumentó la cadencia de releases de 1 a 2-3 por semana, reduciendo errores en producción y hotfixes en un 50%.",
    role: "Arquitecto y líder técnico del sistema.",
  },
  {
    name: "Chat Agéntico y Webview de Búsqueda",
    period: "2024 – Presente",
    description:
      "Diseñé la arquitectura del chat agéntico que conecta a los usuarios con un modelo de IA para recomendaciones personalizadas de productos, y lideré el desarrollo de un webview de búsqueda embebido en la app nativa, con historial de búsqueda y un carrusel de recomendaciones impulsado por IA.",
    role: "Diseño de arquitectura y liderazgo técnico del desarrollo.",
  },
  {
    name: "Regresión Visual E2E",
    period: "2024 – Presente",
    description:
      "Framework de regresión E2E automatizado con comparación visual, integrado al pipeline de CI/CD, pasando de un proceso 100% manual a 10% automatizado. Redujo el tiempo de regresión de un día completo a aproximadamente una hora.",
    role: "Iniciador y responsable de la iniciativa.",
  },
  {
    name: "Suite Ophelia",
    period: "2017 – 2019",
    description:
      "Diseñé la arquitectura de front-end (C#, Angular 2/7) de cinco productos empresariales en DigitalWare: Ophelia Portal (BPM y formularios dinámicos), Ophelia News, GoodDay (CRM y red social corporativa), Ophelia Forum y Ophelia Chat (mensajería en tiempo real con MongoDB). La suite fue reconocida con el Premio a la Innovación 2019.",
    role: "Desarrollador Full Stack, Arquitecto Front-End, Project Lead (en GoodDay).",
  },
  {
    name: "Portal de Reportes / +Simple",
    period: "2016",
    description:
      "Diseñé y evolucioné un portal transaccional de seguridad social (AngularJS / Java), agregando generación de reportes, pago de nómina, archivos de dispersión bancaria y un gestor de plantillas dinámicas.",
    role: "Líder de proyecto, Desarrollador Full Stack (AngularJS, Java), Arquitecto de Software.",
  },
];

export const featuredProjects: Record<Locale, FeaturedProject[]> = { en, es };
