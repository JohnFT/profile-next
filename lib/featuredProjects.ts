import type { Locale } from "@/lib/i18n";

export type FeaturedProject = {
  /** Company name as used in lib/experience.ts (drives the tabs and the logo). */
  company: string;
  name: string;
  period: string;
  description: string;
  role: string;
  highlight: string;
  /** Shown as a badge, e.g. the award shared by the Ophelia Suite products. */
  award?: string;
};

const OPHELIA_AWARD = { en: "Ophelia Suite · 2019 Innovation Award", es: "Suite Ophelia · Premio a la Innovación 2019" };

const en: FeaturedProject[] = [
  {
    company: "Mercado Libre",
    name: "Technical Backlog & Application Health (Search)",
    period: "2024 – 2026",
    description:
      "Defined the technical backlog for the application and the Search project across 2024, 2025, and 2026, leading performance and product-health improvements: optimized Web Vitals, reducing LCP and INP times on both mobile web and desktop web, and cut the non-blocking error rate (which caused small crashes) from over 15% to under 0.5%. Also led the reduction of technical debt by refactoring components, improving the developer experience, and focusing on better componentization of the application.",
    role: "Technical backlog definition and leadership of the initiative.",
    highlight: "Errors 15% → <0.5%",
  },
  {
    company: "Mercado Libre",
    name: "Release Automation System",
    period: "2024 – Present",
    description:
      "Designed the architecture as a Node.js API with independent microservices for each pipeline stage: version cut, test-environment deployment, automated testing, and manual regression prep. Integrated an AI agent that oversees canary deployments before promoting to production, and connected the pipeline to Datadog and Grafana for real-time monitoring and alerts. This system increased release cadence from one weekly release — achieved with heavy manual effort and frequent errors — to two to three releases per week, cutting production errors and hotfixes by 50% and increasing the team's capacity to ship more fixes.",
    role: "Architect and technical lead of the system.",
    highlight: "1 → 2–3 releases / wk",
  },
  {
    company: "Mercado Libre",
    name: "Agentic Chat",
    period: "2024 – Present",
    description:
      "Designed the component architecture of the conversational assistant and its integration with an AI model that interprets user intent and queries the product catalog to generate personalized recommendations. Defined the communication contracts between the front-end and the backend APIs responsible for validating each recommendation.",
    role: "Designed the conversational experience, component architecture, and API communication.",
    highlight: "AI recommendations",
  },
  {
    company: "Mercado Libre",
    name: "Search Webview (Native App)",
    period: "2024 – Present",
    description:
      "Built a webview component embedded in the native app's search box, communicating with the app through a native-web bridge. Implemented search history as interactive pills and a recommendation carousel powered by an AI model that surfaces personalized suggestions based on the user's previous search behavior.",
    role: "Technical lead of the development.",
    highlight: "Native-web bridge",
  },
  {
    company: "Mercado Libre",
    name: "Visual E2E Regression",
    period: "2024 – Present",
    description:
      "Designed the architecture of an automated E2E regression framework with visual comparison (screenshot diffing) for the team's most critical flows, integrated into the CI/CD pipeline. Prioritized the highest-impact cases to move from a 100% manual process to an initial 10% automated, with an extensible architecture to scale toward 100%. Manual regression, which used to take a full day, was cut to about an hour, allowing the entire process — from regression to production deployment — to be completed within a single day.",
    role: "Initiator and owner of the initiative.",
    highlight: "Regression 1 day → ~1 h",
  },
  {
    company: "DigitalWare",
    name: "Ophelia Chat",
    period: "2019",
    description:
      "Designed the front-end architecture in Angular 7 and integrated MongoDB as the database for the enterprise chat's real-time messaging, with a C# backend.",
    role: "Full Stack Developer (C#, Angular 7, MongoDB), Front-End Architect, Project Lead.",
    highlight: "Real-time messaging",
    award: OPHELIA_AWARD.en,
  },
  {
    company: "DigitalWare",
    name: "Ophelia Forum",
    period: "2019",
    description:
      "Built the front-end architecture in Angular 7 over a C# backend for the suite's corporate forums, with a focus on interaction and content moderation.",
    role: "Full Stack Developer (C#, Angular 7), Front-End Architect, Project Lead.",
    highlight: "Corporate forums",
    award: OPHELIA_AWARD.en,
  },
  {
    company: "DigitalWare",
    name: "GoodDay",
    period: "2018 – 2019",
    description:
      "Led the software architecture and development of a CRM with enterprise social-network features, coordinating the development team and product decisions end to end.",
    role: "Project management, lead developer, Software Architect, Project Lead.",
    highlight: "CRM + social network",
    award: OPHELIA_AWARD.en,
  },
  {
    company: "DigitalWare",
    name: "Ophelia News",
    period: "2018",
    description:
      "Built the corporate web newspaper full stack with C# and Angular 7, structuring the front-end architecture for publishing and managing editorial content.",
    role: "Full Stack Developer (C#, Angular 7), Front-End Architect, Project Lead.",
    highlight: "Corporate newspaper",
    award: OPHELIA_AWARD.en,
  },
  {
    company: "DigitalWare",
    name: "Ophelia Portal",
    period: "2017 – 2018",
    description:
      "Designed the front-end architecture in Angular 2 over a C# backend for a BPM process portal, including a dynamic form engine, payroll and report generation with indicators, and a real-time process-tracking module.",
    role: "Full Stack Developer (C#, Angular 2), Front-End Architect, UX Lead.",
    highlight: "BPM & dynamic forms",
    award: OPHELIA_AWARD.en,
  },
  {
    company: "Simple SA",
    name: "Reporting Portal",
    period: "2016",
    description:
      "Architected and built the portal as a full-stack application (AngularJS front-end, Java backend), integrating report generation, payroll payment, and a bank dispersal file generator under security standards for social-security transactional data.",
    role: "Project lead, Full Stack Developer (AngularJS, Java), Software Architect.",
    highlight: "Payroll & reporting",
  },
  {
    company: "Simple SA",
    name: "+Simple",
    period: "2016",
    description:
      "Evolved the portal's architecture to add a dynamic template manager and a desktop-to-web payroll file converter, keeping Java as the backend foundation and leading software architecture decisions.",
    role: "Project lead, Full Stack Developer (Java), Software Architect.",
    highlight: "Desktop → web",
  },
  {
    company: "Kidon SA",
    name: "Kidon.co",
    period: "2015",
    description:
      "Built the platform's front-end with AngularJS, structuring reusable components for the different educational games and multimedia content, with a focus on usability for a young audience.",
    role: "Front-end development engineer (AngularJS, JavaScript, jQuery, Sass, CSS3, HTML5).",
    highlight: "Educational games",
  },
];

const es: FeaturedProject[] = [
  {
    company: "Mercado Libre",
    name: "Backlog Técnico y Salud de la Aplicación (Search)",
    period: "2024 – 2026",
    description:
      "Definí el backlog técnico de la aplicación y del proyecto de Search durante 2024, 2025 y 2026, liderando mejoras de rendimiento y salud del producto: optimicé los Web Vitals, reduciendo los tiempos de LCP e INP tanto en mobile web como en desktop web, y reduje la tasa de errores no bloqueantes (que causaban pequeños crashes) de más del 15% a menos del 0.5%. También lideré la reducción de deuda técnica refactorizando componentes, mejorando la experiencia de desarrollo y enfocándome en una mejor componentización de la aplicación.",
    role: "Definición del backlog técnico y liderazgo de la iniciativa.",
    highlight: "Errores 15% → <0.5%",
  },
  {
    company: "Mercado Libre",
    name: "Sistema de Automatización de Releases",
    period: "2024 – Presente",
    description:
      "Diseñé la arquitectura como una API en Node.js con microservicios independientes para cada etapa del pipeline: corte de versión, despliegue en ambiente de pruebas, pruebas automatizadas y preparación de la regresión manual. Integré un agente de IA que supervisa los despliegues canary antes de promover a producción, y conecté el pipeline con Datadog y Grafana para monitoreo y alertas en tiempo real. El sistema aumentó la cadencia de una release semanal —lograda con mucho esfuerzo manual y errores frecuentes— a dos o tres releases por semana, redujo en un 50% los errores en producción y los hotfixes, y aumentó la capacidad del equipo para entregar más correcciones.",
    role: "Arquitecto y líder técnico del sistema.",
    highlight: "1 → 2–3 releases / sem",
  },
  {
    company: "Mercado Libre",
    name: "Chat Agéntico",
    period: "2024 – Presente",
    description:
      "Diseñé la arquitectura de componentes del asistente conversacional y su integración con un modelo de IA que interpreta la intención del usuario y consulta el catálogo de productos para generar recomendaciones personalizadas. Definí los contratos de comunicación entre el front-end y las APIs de backend encargadas de validar cada recomendación.",
    role: "Diseño de la experiencia conversacional, arquitectura de componentes y comunicación con APIs.",
    highlight: "Recomendaciones con IA",
  },
  {
    company: "Mercado Libre",
    name: "Webview de Búsqueda (App Nativa)",
    period: "2024 – Presente",
    description:
      "Construí un componente webview embebido en el buscador de la app nativa, que se comunica con la app mediante un puente nativo-web. Implementé el historial de búsqueda como pills interactivas y un carrusel de recomendaciones impulsado por un modelo de IA que sugiere opciones personalizadas según el comportamiento de búsqueda previo del usuario.",
    role: "Líder técnico del desarrollo.",
    highlight: "Puente nativo-web",
  },
  {
    company: "Mercado Libre",
    name: "Regresión Visual E2E",
    period: "2024 – Presente",
    description:
      "Diseñé la arquitectura de un framework de regresión E2E automatizado con comparación visual (screenshot diffing) para los flujos más críticos del equipo, integrado al pipeline de CI/CD. Prioricé los casos de mayor impacto para pasar de un proceso 100% manual a un 10% automatizado inicial, con una arquitectura extensible para escalar hacia el 100%. La regresión manual, que tomaba un día completo, se redujo a cerca de una hora, permitiendo completar todo el proceso —de la regresión al despliegue en producción— en un solo día.",
    role: "Iniciador y responsable de la iniciativa.",
    highlight: "Regresión 1 día → ~1 h",
  },
  {
    company: "DigitalWare",
    name: "Ophelia Chat",
    period: "2019",
    description:
      "Diseñé la arquitectura de front-end en Angular 7 e integré MongoDB como base de datos para la mensajería en tiempo real del chat empresarial, con backend en C#.",
    role: "Desarrollador Full Stack (C#, Angular 7, MongoDB), Arquitecto Front-End, Project Lead.",
    highlight: "Mensajería en tiempo real",
    award: OPHELIA_AWARD.es,
  },
  {
    company: "DigitalWare",
    name: "Ophelia Forum",
    period: "2019",
    description:
      "Construí la arquitectura de front-end en Angular 7 sobre un backend en C# para los foros corporativos de la suite, con foco en la interacción y la moderación de contenido.",
    role: "Desarrollador Full Stack (C#, Angular 7), Arquitecto Front-End, Project Lead.",
    highlight: "Foros corporativos",
    award: OPHELIA_AWARD.es,
  },
  {
    company: "DigitalWare",
    name: "GoodDay",
    period: "2018 – 2019",
    description:
      "Lideré la arquitectura de software y el desarrollo de un CRM con funcionalidades de red social corporativa, coordinando al equipo de desarrollo y las decisiones de producto de principio a fin.",
    role: "Gestión del proyecto, desarrollador líder, Arquitecto de Software, Project Lead.",
    highlight: "CRM + red social",
    award: OPHELIA_AWARD.es,
  },
  {
    company: "DigitalWare",
    name: "Ophelia News",
    period: "2018",
    description:
      "Construí el periódico web corporativo full stack con C# y Angular 7, estructurando la arquitectura de front-end para la publicación y gestión de contenido editorial.",
    role: "Desarrollador Full Stack (C#, Angular 7), Arquitecto Front-End, Project Lead.",
    highlight: "Periódico corporativo",
    award: OPHELIA_AWARD.es,
  },
  {
    company: "DigitalWare",
    name: "Ophelia Portal",
    period: "2017 – 2018",
    description:
      "Diseñé la arquitectura de front-end en Angular 2 sobre un backend en C# para un portal de procesos BPM, que incluye un motor de formularios dinámicos, generación de nómina y reportes con indicadores, y un módulo de seguimiento de procesos en tiempo real.",
    role: "Desarrollador Full Stack (C#, Angular 2), Arquitecto Front-End, Líder de UX.",
    highlight: "BPM y formularios dinámicos",
    award: OPHELIA_AWARD.es,
  },
  {
    company: "Simple SA",
    name: "Portal de Reportes",
    period: "2016",
    description:
      "Diseñé y construí el portal como una aplicación full stack (front-end en AngularJS, backend en Java), integrando generación de reportes, pago de nómina y un generador de archivos de dispersión bancaria bajo estándares de seguridad para datos transaccionales de seguridad social.",
    role: "Líder de proyecto, Desarrollador Full Stack (AngularJS, Java), Arquitecto de Software.",
    highlight: "Nómina y reportes",
  },
  {
    company: "Simple SA",
    name: "+Simple",
    period: "2016",
    description:
      "Evolucioné la arquitectura del portal para agregar un gestor de plantillas dinámicas y un conversor de archivos de nómina de escritorio a web, manteniendo Java como base del backend y liderando las decisiones de arquitectura de software.",
    role: "Líder de proyecto, Desarrollador Full Stack (Java), Arquitecto de Software.",
    highlight: "Escritorio → web",
  },
  {
    company: "Kidon SA",
    name: "Kidon.co",
    period: "2015",
    description:
      "Construí el front-end de la plataforma con AngularJS, estructurando componentes reutilizables para los distintos juegos educativos y el contenido multimedia, con foco en la usabilidad para una audiencia joven.",
    role: "Ingeniero de desarrollo front-end (AngularJS, JavaScript, jQuery, Sass, CSS3, HTML5).",
    highlight: "Juegos educativos",
  },
];

export const featuredProjects: Record<Locale, FeaturedProject[]> = { en, es };
