import type { Locale } from "@/lib/i18n";

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

const en: Experience[] = [
  {
    role: "Technical Leader",
    company: "Mercado Libre",
    period: "January 2024 – Present",
    location: "Bogotá, Colombia",
    bullets: [
      "Led different initiatives with teams of up to 15 people across multiple technical skill sets and stacks, with direct responsibility for technical and architecture decisions.",
      "Design scalable, high-performance software architectures for web applications using React and Node.js, building on Nordic, the organization's internal framework.",
      "Acted as Project Lead, managing scope, timelines, and priorities using agile methodologies (Scrum, Kanban, Lean Software Development) supported by Trello and Jira.",
      "Mentor and train front-end teams, supporting other developers' technical growth and establishing myself as a go-to reference for the discipline.",
      "Automate internal development and deployment processes with the help of AI (Claude, Cursor, n8n, MCP), reducing the team's delivery times.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Mercado Libre",
    period: "October 2020 – March 2024",
    location: "Colombia",
    bullets: [
      "Designed and built scalable front-end solutions with React and Node.js within a high-demand technology ecosystem.",
      "Contributed to mobile applications and Java backend services, bringing a full-stack perspective to multi-platform projects.",
      "Acted as Project Lead for one year within this role; technical skills led to promotion to Technical Leader in 2024.",
    ],
  },
  {
    role: "Software Engineer (Front-End / DevOps)",
    company: "Almundo",
    period: "April 2019 – October 2020",
    location: "Bogotá, Colombia",
    bullets: [
      "Built mobile applications with React Native and web applications with Angular 8, applying Domain-Driven Design (DDD) principles.",
      "Designed and implemented continuous deployment (CI/CD) pipelines with GitLab and Docker containers.",
      "Combined development and DevOps to speed up software delivery without sacrificing quality.",
    ],
  },
  {
    role: "Senior Software Engineering Manager",
    company: "DigitalWare",
    period: "May 2017 – April 2019",
    location: "Bogotá, Colombia",
    bullets: [
      "Designed product and software architectures, directing technology innovation projects end to end.",
      "Led front-end teams as architect, setting technical and user-experience standards.",
      "Combined product vision, software architecture, and team leadership, recognized with the 2019 Innovation Award.",
    ],
  },
  {
    role: "Development Analyst / Database Manager",
    company: "Simple SA",
    period: "September 2015 – May 2017",
    location: "Bogotá, Colombia",
    bullets: [
      "Led development and database administration: MySQL, PostgreSQL, Oracle, SQLite, and H2.",
      "Designed full-stack architectures with HTML5, PHP, JavaScript, jQuery, Ajax, Java EE, JavaFX, SOAP, and AngularJS.",
      "Led projects as software architect and Full Stack Developer, coordinating the team and requirements gathering.",
    ],
  },
  {
    role: "Front-End Engineer",
    company: "Kidon SA",
    period: "March 2015 – September 2015",
    location: "",
    bullets: [
      "Built client-side experiences with AngularJS, JavaScript, jQuery, Sass, CSS3, and HTML5.",
      "Applied UX best practices designed for a young audience.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Opentic SAS",
    period: "July 2013 – July 2014",
    location: "",
    bullets: [
      "Built full-stack web solutions with HTML5, PHP, JavaScript, jQuery, Ajax, and Django (Python).",
      "Managed MySQL and PostgreSQL databases and took part in requirements gathering and analysis.",
    ],
  },
];

const es: Experience[] = [
  {
    role: "Líder Técnico",
    company: "Mercado Libre",
    period: "Enero 2024 – Presente",
    location: "Bogotá, Colombia",
    bullets: [
      "Lideré distintas iniciativas con equipos de hasta 15 personas de múltiples disciplinas y stacks técnicos, con responsabilidad directa sobre las decisiones técnicas y de arquitectura.",
      "Diseño arquitecturas de software escalables y de alto rendimiento para aplicaciones web usando React y Node.js, sobre Nordic, el framework interno de la organización.",
      "Me desempeñé también como Project Lead, gestionando alcance, tiempos y prioridades con metodologías ágiles (Scrum, Kanban, Lean Software Development) apoyado en Trello y Jira.",
      "Mentoreo y formo equipos de front-end, apoyando el crecimiento técnico de otros desarrolladores y consolidándome como referente de la disciplina.",
      "Automatizo procesos internos de desarrollo y despliegue con ayuda de IA (Claude, Cursor, n8n, MCP), reduciendo los tiempos de entrega del equipo.",
    ],
  },
  {
    role: "Ingeniero de Software Senior",
    company: "Mercado Libre",
    period: "Octubre 2020 – Marzo 2024",
    location: "Colombia",
    bullets: [
      "Diseñé y construí soluciones de front-end escalables con React y Node.js dentro de un ecosistema tecnológico de alta demanda.",
      "Contribuí a aplicaciones móviles y servicios backend en Java, aportando una visión full-stack a proyectos multiplataforma.",
      "Me desempeñé como Project Lead durante un año en este rol; fueron mis habilidades técnicas las que llevaron a mi promoción a Líder Técnico en 2024.",
    ],
  },
  {
    role: "Ingeniero de Software (Front-End / DevOps)",
    company: "Almundo",
    period: "Abril 2019 – Octubre 2020",
    location: "Bogotá, Colombia",
    bullets: [
      "Construí aplicaciones móviles con React Native y aplicaciones web con Angular 8, aplicando principios de Domain-Driven Design (DDD).",
      "Diseñé e implementé pipelines de integración y despliegue continuo (CI/CD) con GitLab y contenedores Docker.",
      "Combiné desarrollo y DevOps para acelerar la entrega de software sin sacrificar calidad.",
    ],
  },
  {
    role: "Gerente Senior de Ingeniería de Software",
    company: "DigitalWare",
    period: "Mayo 2017 – Abril 2019",
    location: "Bogotá, Colombia",
    bullets: [
      "Diseñé arquitecturas de producto y de software, dirigiendo proyectos de innovación tecnológica de principio a fin.",
      "Lideré equipos de front-end como arquitecto, definiendo estándares técnicos y de experiencia de usuario.",
      "Combiné visión de producto, arquitectura de software y liderazgo de equipos, reconocido con el Premio a la Innovación 2019.",
    ],
  },
  {
    role: "Analista de Desarrollo / Administrador de Bases de Datos",
    company: "Simple SA",
    period: "Septiembre 2015 – Mayo 2017",
    location: "Bogotá, Colombia",
    bullets: [
      "Lideré el desarrollo y la administración de bases de datos: MySQL, PostgreSQL, Oracle, SQLite y H2.",
      "Diseñé arquitecturas full-stack con HTML5, PHP, JavaScript, jQuery, Ajax, Java EE, JavaFX, SOAP y AngularJS.",
      "Lideré proyectos como arquitecto de software y desarrollador Full Stack, coordinando al equipo y el levantamiento de requerimientos.",
    ],
  },
  {
    role: "Ingeniero Front-End",
    company: "Kidon SA",
    period: "Marzo 2015 – Septiembre 2015",
    location: "",
    bullets: [
      "Construí experiencias de cliente con AngularJS, JavaScript, jQuery, Sass, CSS3 y HTML5.",
      "Apliqué buenas prácticas de UX orientadas a una audiencia joven.",
    ],
  },
  {
    role: "Desarrollador de Software Junior",
    company: "Opentic SAS",
    period: "Julio 2013 – Julio 2014",
    location: "",
    bullets: [
      "Construí soluciones web full-stack con HTML5, PHP, JavaScript, jQuery, Ajax y Django (Python).",
      "Administré bases de datos MySQL y PostgreSQL y participé en el levantamiento y análisis de requerimientos.",
    ],
  },
];

export const experience: Record<Locale, Experience[]> = { en, es };
