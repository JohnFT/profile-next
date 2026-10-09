import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { about: string; work: string; apps: string; skills: string; mail: string; cta: string };
  hero: {
    location: string;
    title: string;
    intro: string;
    status: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  deck: {
    talkBody: string;
    talkFooter: string;
    meliBadge: string;
    meliBody: string;
    meliFooter: string;
    kidonBody: string;
    kidonFooter: string;
    almundoBody: string;
    almundoFooter: string;
    simpleTag: string;
    simpleNote: string;
    simpleNoteBody: string;
  };
  companies: { label: string };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    pillars: { title: string; description: string }[];
  };
  work: {
    eyebrow: string;
    projectsEyebrow: string;
    projectsSubtitle: string;
    experienceHeading: string;
    projectsHeading: string;
    roleLabel: string;
    prevShot: string;
    prevProject: string;
    nextProject: string;
    nextShot: string;
    showShot: string;
  };
  apps: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    githubProfile: string;
    privateRepo: string;
  };
  skills: { eyebrow: string; heading: string; subtitle: string; year: string; years: string; scale: string };
  education: {
    eyebrow: string;
    heading: string;
    educationLabel: string;
    languagesLabel: string;
    certificationsLabel: string;
    verifiedHeading: string;
    verifiedSubtitle: string;
    viewDiploma: string;
    prevDiploma: string;
    nextDiploma: string;
    certCount: string;
    certCategories: Record<"english" | "frontend" | "backend" | "management" | "design", string>;
    allOnPlatzi: string;
    spanish: string;
    english: string;
  };
  mail: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    copyEmail: string;
    copied: string;
    connectLabel: string;
  };
  footer: { copyright: string; timezone: string; backToTop: string };
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
    cta: "Get in touch",
  },
  hero: {
    location: "Bogotá D.C., Colombia",
    title: "Technical Leader · FullStack Engineer & Project Lead",
    intro:
      "11 years turning ideas into software and leading high-performing teams across front-end and full-stack environments.",
    status: "Open to new opportunities",
    tagline: "11+ yrs · Technical Lead / Full-stack / Front-end Specialist",
    ctaPrimary: "View featured work",
    ctaSecondary: "Get in touch",
    stats: [
      { value: "11+", label: "Years building software" },
      { value: "15", label: "Engineers led" },
      { value: "−50%", label: "Production hotfixes" },
    ],
  },
  deck: {
    talkBody: "AI-powered English coaching: personalized curriculum, roleplay, shadowing and interview prep with Claude and OpenAI.",
    talkFooter: "Side project // AI",
    meliBadge: "2020 – Now",
    meliBody: "Search, AI-powered recommendations and release automation for one of Latin America's largest marketplaces.",
    meliFooter: "Tech lead // Search",
    kidonBody: "Interactive experiences and games for a young audience, built with AngularJS and Sass.",
    kidonFooter: "Front-end // UX",
    almundoBody: "Travel booking with React Native and Angular 8, shipped through GitLab CI/CD and Docker.",
    almundoFooter: "Front-end // DevOps",
    simpleTag: "Payroll",
    simpleNote: "Social security portal",
    simpleNoteBody: "Payroll payment, reports & bank dispersal files",
  },
  companies: { label: "Where I've built software" },
  about: {
    eyebrow: "Profile // Leadership",
    heading: "About",
    body: "Technical Leader with 11 years turning ideas into software and leading high-performing teams across front-end and full-stack environments. I lead teams of up to 15 people across multiple simultaneous initiatives, combining architectural vision with execution: I design high-performance solutions, automate deployments with the help of AI, and take every initiative from idea to production. I also bring Project Lead skills — managing scope, timelines, and priorities using agile development methodologies such as Scrum, Kanban, and Lean Software Development, supported by tools like Trello and Jira — and I mentor front-end teams, establishing myself as a technical reference wherever I work. I complement this with a product and UX mindset, and since 2025 I've integrated generative AI (Claude and Cursor) into my workflow to accelerate application development and automate processes.",
    pillars: [
      {
        title: "Solid Full-Stack Development",
        description:
          "11 years writing production code across front-end, back-end, and mobile: from React, Angular, and Node.js to Java services and React Native apps, shipped with CI/CD and Docker.",
      },
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
    eyebrow: "Career // Track record",
    projectsEyebrow: "Flagship deliveries",
    projectsSubtitle: "Initiatives I've architected and led, from application health to AI-powered search.",
    experienceHeading: "Experience",
    projectsHeading: "Featured Projects",
    roleLabel: "Role",
    prevShot: "Previous screenshot",
    prevProject: "Previous project",
    nextProject: "Next project",
    nextShot: "Next screenshot",
    showShot: "Show screenshot",
  },
  apps: {
    eyebrow: "Code & experiments",
    heading: "Apps",
    subtitle: "Personal projects built outside of work.",
    githubProfile: "GitHub profile",
    privateRepo: "Private repo",
  },
  skills: {
    eyebrow: "Disciplines & stack",
    heading: "Skills",
    subtitle: "The tools and practices I use to take products from idea to production.",
    year: "yr",
    years: "yrs",
    scale: "Years of hands-on experience, on an 11-year career scale",
  },
  education: {
    eyebrow: "Learning",
    heading: "Education & Languages",
    educationLabel: "Education",
    languagesLabel: "Languages",
    certificationsLabel: "Certifications & Continuing Education",
    verifiedHeading: "Verified certificates",
    verifiedSubtitle: "open and verify any of them on Platzi or Udemy.",
    viewDiploma: "Verify on",
    prevDiploma: "Previous diploma",
    nextDiploma: "Next diploma",
    certCount: "public diplomas",
    certCategories: {
      frontend: "Frontend",
      backend: "Backend & Tools",
      management: "Management & Agile",
      english: "English",
      design: "Design & Business",
    },
    allOnPlatzi: "Platzi profile",
    spanish: "Spanish: Native",
    english: "English: B1 (Intermediate)",
  },
  mail: {
    eyebrow: "Start a conversation",
    heading: "Let's connect",
    subtitle: "Open to new opportunities, collaborations, or a technical conversation.",
    emailLabel: "Email",
    locationLabel: "Location",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send message",
    copyEmail: "Copy email",
    copied: "Copied!",
    connectLabel: "Find me on",
  },
  footer: {
    copyright: "John Alexander Fonseca Tumay",
    timezone: "Bogotá · UTC−5",
    backToTop: "Back to top",
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
    cta: "Contáctame",
  },
  hero: {
    location: "Bogotá D.C., Colombia",
    title: "Líder Técnico · Ingeniero FullStack y Project Lead",
    intro:
      "11 años transformando ideas en software y liderando equipos de alto rendimiento en entornos front-end y full-stack.",
    status: "Abierto a nuevas oportunidades",
    tagline: "11+ años · Front-end y full-stack",
    ctaPrimary: "Ver trabajo destacado",
    ctaSecondary: "Contáctame",
    stats: [
      { value: "11+", label: "Años construyendo software" },
      { value: "15", label: "Ingenieros liderados" },
      { value: "−50%", label: "Hotfixes en producción" },
    ],
  },
  deck: {
    talkBody: "Coaching de inglés con IA: currículo personalizado, roleplay, shadowing y preparación de entrevistas con Claude y OpenAI.",
    talkFooter: "Proyecto personal // IA",
    meliBadge: "2020 – Hoy",
    meliBody: "Búsqueda, recomendaciones con IA y automatización de releases para uno de los marketplaces más grandes de Latinoamérica.",
    meliFooter: "Líder técnico // Search",
    kidonBody: "Experiencias interactivas y juegos para una audiencia joven, construidos con AngularJS y Sass.",
    kidonFooter: "Front-end // UX",
    almundoBody: "Reservas de viajes con React Native y Angular 8, desplegadas con CI/CD en GitLab y Docker.",
    almundoFooter: "Front-end // DevOps",
    simpleTag: "Nómina",
    simpleNote: "Portal de seguridad social",
    simpleNoteBody: "Pago de nómina, reportes y archivos de dispersión bancaria",
  },
  companies: { label: "Donde he construido software" },
  about: {
    eyebrow: "Perfil // Liderazgo",
    heading: "Acerca de",
    body: "Líder Técnico con 11 años transformando ideas en software y liderando equipos de alto rendimiento en entornos front-end y full-stack. Lidero equipos de hasta 15 personas en múltiples iniciativas simultáneas, combinando visión arquitectónica con ejecución: diseño soluciones de alto rendimiento, automatizo despliegues con ayuda de IA y llevo cada iniciativa desde la idea hasta producción. También aporto habilidades de Project Lead — gestionando alcance, tiempos y prioridades con metodologías ágiles como Scrum, Kanban y Lean Software Development, apoyado en herramientas como Trello y Jira — y mentoreo equipos de front-end, consolidándome como referente técnico donde trabajo. Complemento esto con una mentalidad de producto y UX, y desde 2025 he integrado IA generativa (Claude y Cursor) en mi flujo de trabajo para acelerar el desarrollo de aplicaciones y automatizar procesos.",
    pillars: [
      {
        title: "Desarrollo Full-Stack Sólido",
        description:
          "11 años escribiendo código en producción en front-end, back-end y móvil: de React, Angular y Node.js a servicios en Java y apps en React Native, entregados con CI/CD y Docker.",
      },
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
    eyebrow: "Carrera // Trayectoria",
    projectsEyebrow: "Entregas destacadas",
    projectsSubtitle: "Iniciativas que he diseñado y liderado, desde la salud de la aplicación hasta búsqueda con IA.",
    experienceHeading: "Experiencia",
    projectsHeading: "Proyectos Destacados",
    roleLabel: "Rol",
    prevShot: "Captura anterior",
    prevProject: "Proyecto anterior",
    nextProject: "Proyecto siguiente",
    nextShot: "Captura siguiente",
    showShot: "Ver captura",
  },
  apps: {
    eyebrow: "Código y experimentos",
    heading: "Apps",
    subtitle: "Proyectos personales construidos fuera del trabajo.",
    githubProfile: "Perfil de GitHub",
    privateRepo: "Repo privado",
  },
  skills: {
    eyebrow: "Disciplinas y stack",
    heading: "Habilidades",
    subtitle: "Las herramientas y prácticas que uso para llevar productos de la idea a producción.",
    year: "año",
    years: "años",
    scale: "Años de experiencia práctica, sobre una carrera de 11 años",
  },
  education: {
    eyebrow: "Aprendizaje",
    heading: "Educación e Idiomas",
    educationLabel: "Educación",
    languagesLabel: "Idiomas",
    certificationsLabel: "Certificaciones y Educación Continua",
    verifiedHeading: "Certificados verificables",
    verifiedSubtitle: "puedes abrir y comprobar cualquiera en Platzi o Udemy.",
    viewDiploma: "Verificar en",
    prevDiploma: "Diploma anterior",
    nextDiploma: "Diploma siguiente",
    certCount: "diplomas públicos",
    certCategories: {
      frontend: "Frontend",
      backend: "Backend y Herramientas",
      management: "Gestión y Agilidad",
      english: "Inglés",
      design: "Diseño y Negocios",
    },
    allOnPlatzi: "Perfil en Platzi",
    spanish: "Español: Nativo",
    english: "Inglés: B1 (Intermedio)",
  },
  mail: {
    eyebrow: "Iniciemos una conversación",
    heading: "Conectemos",
    subtitle: "Abierto a nuevas oportunidades, colaboraciones o una conversación técnica.",
    emailLabel: "Correo",
    locationLabel: "Ubicación",
    formName: "Nombre",
    formEmail: "Correo",
    formMessage: "Mensaje",
    formSubmit: "Enviar mensaje",
    copyEmail: "Copiar correo",
    copied: "¡Copiado!",
    connectLabel: "Encuéntrame en",
  },
  footer: {
    copyright: "John Alexander Fonseca Tumay",
    timezone: "Bogotá · UTC−5",
    backToTop: "Volver arriba",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
