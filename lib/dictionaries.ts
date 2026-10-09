import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; work: string; apps: string; skills: string; mail: string };
  hero: { location: string; title: string; intro: string };
  about: {
    heading: string;
    body: string;
    pillars: { title: string; description: string }[];
  };
  work: {
    experienceHeading: string;
    projectsHeading: string;
    roleLabel: string;
  };
  apps: {
    heading: string;
    subtitle: string;
  };
  skills: { heading: string };
  education: {
    heading: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
    spanish: string;
    english: string;
  };
  mail: {
    heading: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: { copyright: string };
};

const en: Dictionary = {
  meta: {
    title: "John Alexander Fonseca Tumay",
    description: "Technical Leader · FullStack Engineer & Project Lead — portfolio and experience.",
  },
  nav: {
    about: "About",
    work: "Work",
    apps: "Apps",
    skills: "Skills",
    mail: "Mail",
  },
  hero: {
    location: "Bogotá D.C., Colombia",
    title: "Technical Leader · FullStack Engineer & Project Lead",
    intro:
      "11 years turning ideas into software and leading high-performing teams across front-end and full-stack environments.",
  },
  about: {
    heading: "About",
    body: "Technical Leader with 11 years turning ideas into software and leading high-performing teams across front-end and full-stack environments. I lead teams of up to 15 people across multiple simultaneous initiatives, combining architectural vision with execution: I design high-performance solutions, automate deployments with the help of AI, and take every initiative from idea to production. I also bring Project Lead skills — managing scope, timelines, and priorities using agile development methodologies such as Scrum, Kanban, and Lean Software Development, supported by tools like Trello and Jira — and I mentor front-end teams, establishing myself as a technical reference wherever I work. I complement this with a product and UX mindset, and since 2025 I've integrated generative AI (Claude and Cursor) into my workflow to accelerate application development and automate processes.",
    pillars: [
      {
        title: "Architecture & Performance",
        description:
          "Designing scalable, high-performance web architectures and improving Web Vitals and reliability at large scale.",
      },
      {
        title: "Team Leadership & Mentoring",
        description:
          "Leading teams of up to 15 engineers across simultaneous initiatives, mentoring front-end developers as a technical reference.",
      },
      {
        title: "AI-Accelerated Delivery",
        description:
          "Automating development and release workflows with Claude, Cursor, n8n, and MCP to cut delivery times.",
      },
    ],
  },
  work: {
    experienceHeading: "Experience",
    projectsHeading: "Featured Projects",
    roleLabel: "Role",
  },
  apps: {
    heading: "Apps",
    subtitle: "Personal projects built outside of work.",
  },
  skills: {
    heading: "Skills",
  },
  education: {
    heading: "Education & Languages",
    educationLabel: "Education",
    languagesLabel: "Languages",
    certificationsLabel: "Certifications & Continuing Education",
    spanish: "Spanish: Native",
    english: "English: A2 (Basic)",
  },
  mail: {
    heading: "Let's connect",
    subtitle: "Open to new opportunities, collaborations, or a technical conversation.",
    emailLabel: "Email",
    locationLabel: "Location",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
  },
  footer: {
    copyright: "John Alexander Fonseca Tumay",
  },
};

const es: Dictionary = {
  meta: {
    title: "John Alexander Fonseca Tumay",
    description: "Líder Técnico · Ingeniero FullStack y Project Lead — portafolio y experiencia.",
  },
  nav: {
    about: "Acerca de",
    work: "Trabajo",
    apps: "Apps",
    skills: "Habilidades",
    mail: "Correo",
  },
  hero: {
    location: "Bogotá D.C., Colombia",
    title: "Líder Técnico · Ingeniero FullStack y Project Lead",
    intro:
      "11 años transformando ideas en software y liderando equipos de alto rendimiento en entornos front-end y full-stack.",
  },
  about: {
    heading: "Acerca de",
    body: "Líder Técnico con 11 años transformando ideas en software y liderando equipos de alto rendimiento en entornos front-end y full-stack. Lidero equipos de hasta 15 personas en múltiples iniciativas simultáneas, combinando visión arquitectónica con ejecución: diseño soluciones de alto rendimiento, automatizo despliegues con ayuda de IA y llevo cada iniciativa desde la idea hasta producción. También aporto habilidades de Project Lead — gestionando alcance, tiempos y prioridades con metodologías ágiles como Scrum, Kanban y Lean Software Development, apoyado en herramientas como Trello y Jira — y mentoreo equipos de front-end, consolidándome como referente técnico donde trabajo. Complemento esto con una mentalidad de producto y UX, y desde 2025 he integrado IA generativa (Claude y Cursor) en mi flujo de trabajo para acelerar el desarrollo de aplicaciones y automatizar procesos.",
    pillars: [
      {
        title: "Arquitectura y Rendimiento",
        description:
          "Diseño de arquitecturas web escalables y de alto rendimiento, mejorando Web Vitals y confiabilidad a gran escala.",
      },
      {
        title: "Liderazgo de Equipos y Mentoría",
        description:
          "Liderazgo de equipos de hasta 15 ingenieros en iniciativas simultáneas, mentoreando desarrolladores front-end como referente técnico.",
      },
      {
        title: "Entrega Acelerada con IA",
        description:
          "Automatización de flujos de desarrollo y release con Claude, Cursor, n8n y MCP para reducir tiempos de entrega.",
      },
    ],
  },
  work: {
    experienceHeading: "Experiencia",
    projectsHeading: "Proyectos Destacados",
    roleLabel: "Rol",
  },
  apps: {
    heading: "Apps",
    subtitle: "Proyectos personales construidos fuera del trabajo.",
  },
  skills: {
    heading: "Habilidades",
  },
  education: {
    heading: "Educación e Idiomas",
    educationLabel: "Educación",
    languagesLabel: "Idiomas",
    certificationsLabel: "Certificaciones y Educación Continua",
    spanish: "Español: Nativo",
    english: "Inglés: A2 (Básico)",
  },
  mail: {
    heading: "Conectemos",
    subtitle: "Abierto a nuevas oportunidades, colaboraciones o una conversación técnica.",
    emailLabel: "Correo",
    locationLabel: "Ubicación",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
  },
  footer: {
    copyright: "John Alexander Fonseca Tumay",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
