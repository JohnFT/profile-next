export const PLATZI_PROFILE = "https://platzi.com/p/jfonseca/";

export const CERTIFICATE_CATEGORIES = ["frontend", "backend", "management", "english", "design"] as const;
export type CertificateCategory = (typeof CERTIFICATE_CATEGORIES)[number];

export type CertificateProvider = "Platzi" | "Udemy";

export type Certificate = {
  key: string;
  provider: CertificateProvider;
  date: string;
  category: CertificateCategory;
  title: string;
  /** Diploma image, already prefixed with the basePath (next/image does not add it for string srcs). */
  image: string;
  width: number;
  height: number;
  /** Public verification page on the provider's site. */
  url: string;
};

type RawCertificate = { id: number | string; date: string; category: CertificateCategory; title: string };
type RawUdemyCertificate = RawCertificate & { width: number; height: number };

// Diploma images live in public/diplomas/ (Udemy ones in public/diplomas/udemy/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** CEFR level (A1/A2/B1) for English courses, when the title names one. */
export const certificateLevel = (cert: Certificate) => cert.title.match(/\b(A1|A2|B1|B2)\b/)?.[1];

// All public Platzi diplomas, newest first, as listed on John's "Mis certificados" page.
const platzi: RawCertificate[] = [
  { id: 4989, date: "2026-09-25", category: "english", title: "Curso de Inglés Intermedio B1: Expresiones de Tiempo y Cantidad" },
  { id: 2391, date: "2026-09-24", category: "english", title: "Curso de Inglés Intermedio B1: Descripción de Eventos y Preferencias" },
  { id: 2196, date: "2026-09-04", category: "english", title: "Curso de Inglés Básico A2: Descripciones y Comparaciones" },
  { id: 2655, date: "2026-08-29", category: "english", title: "Curso de Inglés Básico A2: Experiencias Pasadas y Planes" },
  { id: 7265, date: "2026-08-27", category: "english", title: "Curso de Inglés Básico A2: Infinitivos y Presente Continuo" },
  { id: 9243, date: "2026-08-17", category: "english", title: "Curso de Inglés Básico A2: Sustantivos e Intenciones Futuras" },
  { id: 12672, date: "2026-08-13", category: "english", title: "Curso de Inglés Básico A2: Propuestas y Permisos" },
  { id: 12671, date: "2026-08-13", category: "english", title: "Curso de Inglés Básico A2: Adverbios y Expresiones de Tiempo" },
  { id: 4988, date: "2026-08-11", category: "english", title: "Curso de Inglés Básico A2: Preguntas y Respuestas Comunes" },
  { id: 7065, date: "2026-08-03", category: "english", title: "Audio Curso de Inglés para el Uso de Preposiciones" },
  { id: 3996, date: "2026-07-31", category: "english", title: "Curso de Inglés Práctico sobre Elementos de Trabajo" },
  { id: 3230, date: "2026-07-29", category: "english", title: "Curso de Inglés Práctico sobre los Miembros de la Familia" },
  { id: 2921, date: "2026-07-22", category: "english", title: "Curso Básico de Vocabulario y Expresiones en Inglés" },
  { id: 2395, date: "2026-07-17", category: "english", title: "Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples" },
  { id: 12989, date: "2026-07-16", category: "english", title: "Curso de Inglés Básico A1: Preferencias y Habilidades" },
  { id: 13082, date: "2026-07-16", category: "english", title: "Curso de Inglés Básico A1: Fechas, Horas y Descripciones" },
  { id: 12016, date: "2026-07-16", category: "english", title: "Curso de Inglés Básico A1: Verbos Comunes" },
  { id: 11945, date: "2026-07-15", category: "english", title: "Curso de Inglés Básico A1: Presente Simple" },
  { id: 11944, date: "2026-07-15", category: "english", title: "Curso de Inglés Básico A1: Verbo To Be" },
  { id: 10629, date: "2026-07-15", category: "english", title: "Curso de Inglés Básico A1 para Principiantes" },
  { id: 12028, date: "2025-06-01", category: "backend", title: "Curso de N8N" },
  { id: 2723, date: "2022-04-27", category: "design", title: "Curso de Inversión Intermedio para el Análisis de Riesgo Bursátil y Toma de Decisiones" },
  { id: 2722, date: "2022-04-26", category: "design", title: "Curso de Introducción al Análisis Técnico de Mercados Financieros" },
  { id: 2340, date: "2021-10-12", category: "management", title: "Curso de Gestión para Planificar, Definir e Identificar Riesgos de un Proyecto" },
  { id: 1967, date: "2021-10-11", category: "management", title: "Curso de Gestión de Equipos Ágiles" },
  { id: 2341, date: "2021-10-11", category: "management", title: "Curso de Seguimiento y Cierre de Proyectos" },
  { id: 2071, date: "2021-10-11", category: "management", title: "Curso Básico de Digital Project Management" },
  { id: 1974, date: "2021-10-11", category: "management", title: "Curso de Project Management con PMBOK" },
  { id: 1721, date: "2021-10-08", category: "management", title: "Curso de Fundamentos de Gestión de Proyectos 2019" },
  { id: 1775, date: "2020-06-17", category: "backend", title: "Curso de Complejidad Algorítmica con Python" },
  { id: 1764, date: "2020-05-27", category: "backend", title: "Curso de Introducción al Pensamiento Computacional con Python" },
  { id: 1748, date: "2020-05-04", category: "backend", title: "Curso de Introducción a la Terminal y Línea de Comandos 2019" },
  { id: 1649, date: "2020-05-04", category: "backend", title: "Curso de Autenticación con Passport.js 2019" },
  { id: 1839, date: "2020-04-26", category: "backend", title: "Curso de Server Side Render con Express" },
  { id: 1646, date: "2020-04-26", category: "backend", title: "Curso de Backend con Node.js 2019" },
  { id: 1759, date: "2020-04-21", category: "backend", title: "Curso de Fundamentos de Node.js" },
  { id: 1789, date: "2020-04-21", category: "frontend", title: "Curso de Asincronismo con JavaScript 2019" },
  { id: 1650, date: "2020-04-21", category: "backend", title: "Curso de Prework: Buenas Prácticas y Entorno de Desarrollo en macOS 2019" },
  { id: 1640, date: "2020-04-20", category: "frontend", title: "Curso de Frontend Developer 2019" },
  { id: 1807, date: "2020-04-20", category: "frontend", title: "Curso de Closures y Scope en JavaScript 2020" },
  { id: 1771, date: "2020-04-19", category: "frontend", title: "Taller de Creación de Router para Single Page App con JavaScript" },
  { id: 1787, date: "2020-04-18", category: "frontend", title: "Curso de Single Page Application con JavaScript Vanilla" },
  { id: 1422, date: "2020-04-18", category: "design", title: "Curso de Sistemas de Diseño para Desarrolladores" },
  { id: 1798, date: "2020-04-18", category: "frontend", title: "Curso de JavaScript Engine (V8) y el Navegador" },
  { id: 1245, date: "2020-04-17", category: "frontend", title: "Curso de Stylus 2018" },
  { id: 1246, date: "2020-04-16", category: "frontend", title: "Curso de Less 2018" },
  { id: 1244, date: "2020-04-16", category: "frontend", title: "Curso de Sass 2018" },
  { id: 1758, date: "2020-04-15", category: "frontend", title: "Curso Práctico de HTML y CSS" },
  { id: 1242, date: "2020-04-15", category: "frontend", title: "Curso de PostCSS" },
  { id: 1665, date: "2020-04-15", category: "frontend", title: "Curso de Preprocesadores CSS" },
  { id: 1557, date: "2020-04-13", category: "backend", title: "Curso Profesional de Git y GitHub" },
  { id: 1339, date: "2020-04-12", category: "frontend", title: "Fundamentos de JavaScript 2018" },
  { id: 1814, date: "2020-04-12", category: "frontend", title: "Curso Básico de JavaScript" },
  { id: 1744, date: "2020-04-12", category: "frontend", title: "Curso Práctico de Maquetación en CSS" },
  { id: 1313, date: "2020-04-11", category: "frontend", title: "Curso de Progressive Web Apps con React.js" },
  { id: 1492, date: "2020-04-11", category: "frontend", title: "Curso de HTML y CSS 2019" },
  { id: 1601, date: "2020-04-10", category: "frontend", title: "Curso de React Avanzado" },
  { id: 1309, date: "2020-04-09", category: "management", title: "Curso de Business Model Canvas" },
  { id: 1311, date: "2020-04-08", category: "frontend", title: "Curso de Next.js 2018" },
  { id: 1282, date: "2020-04-07", category: "design", title: "Curso de Servicio al Cliente y Soporte a Usuarios" },
  { id: 1346, date: "2020-04-07", category: "design", title: "Curso de Introducción a los Negocios Online en Ecommerce" },
  { id: 1512, date: "2020-04-06", category: "backend", title: "Curso Práctico de GraphQL con JavaScript" },
  { id: 1652, date: "2020-04-06", category: "frontend", title: "Curso de React Router 5 y Redux" },
  { id: 1613, date: "2020-04-05", category: "frontend", title: "Curso de Redux por Bedu" },
  { id: 1342, date: "2020-04-03", category: "frontend", title: "Curso de React Router" },
  { id: 1763, date: "2020-04-02", category: "backend", title: "Curso de Gestión de Dependencias y Paquetes con NPM" },
  { id: 1620, date: "2020-04-02", category: "frontend", title: "Curso de Webpack 2019" },
  { id: 1765, date: "2020-03-31", category: "backend", title: "Curso de Postman" },
  { id: 1651, date: "2020-03-30", category: "frontend", title: "Curso Práctico de React JS 2019" },
  { id: 1548, date: "2020-03-30", category: "frontend", title: "Curso de React.js 2019" },
  { id: 1642, date: "2020-03-27", category: "frontend", title: "Curso Profesional de JavaScript" },
  { id: 1815, date: "2020-03-25", category: "frontend", title: "Curso de ECMAScript 6+" },
  { id: 1470, date: "2020-03-24", category: "frontend", title: "Curso de Diseño y Maquetación para Emails" },
  { id: 1210, date: "2020-02-25", category: "design", title: "Curso de Design Thinking con Minds Garage" },
  { id: 1228, date: "2020-02-21", category: "design", title: "Curso de Introducción al Diseño" },
  { id: 1501, date: "2020-02-20", category: "english", title: "Curso de Inglés Práctico: Conversación 2019" },
  { id: 1500, date: "2020-02-18", category: "english", title: "Curso de Inglés Práctico: Gramática 2019" },
  { id: 1499, date: "2020-02-18", category: "english", title: "Curso de Inglés Práctico: Fundamentos 2019" },
  { id: 1370, date: "2020-02-06", category: "english", title: "Curso de Inglés Básico: Gramática 2018" },
  { id: 1371, date: "2020-02-06", category: "english", title: "Curso de Inglés Básico: Conversación 2018" },
  { id: 1358, date: "2020-02-05", category: "english", title: "Curso de Inglés Básico: Fundamentos 2018" },
  { id: 1390, date: "2020-01-31", category: "frontend", title: "Curso de WPO: Optimización de Carga de Sitios Web" },
  { id: 1362, date: "2018-11-12", category: "frontend", title: "Curso de Responsive Design" },
  { id: 1229, date: "2018-11-11", category: "frontend", title: "Curso de CSS Grid Layout 2017" },
  { id: 1350, date: "2018-11-11", category: "frontend", title: "Curso de Desarrollo Web Online" },
  { id: 1307, date: "2018-10-29", category: "management", title: "Curso de SCRUM 2018" },
  { id: 1111, date: "2018-10-28", category: "frontend", title: "Curso Básico de Vue.js 2016" },
  { id: 1153, date: "2018-10-23", category: "frontend", title: "Curso de Angular 4" },
  { id: 1268, date: "2018-10-23", category: "frontend", title: "Curso de PWA con Angular 2018" },
  { id: 1340, date: "2018-10-15", category: "frontend", title: "Curso de Angular 6 2018" },
  { id: 1075, date: "2017-02-15", category: "management", title: "Introducción a las Metodologías Ágiles 2017" },
  { id: 100, date: "2017-01-19", category: "backend", title: "Curso de PostgreSQL 2017" },
  { id: 50, date: "2017-01-16", category: "backend", title: "Curso de SQL y MySQL 2016" },
  { id: 1069, date: "2017-01-05", category: "frontend", title: "Curso de Diseño HTML y CSS para Emails 2016" },
  { id: 1071, date: "2017-01-03", category: "frontend", title: "Curso de Desarrollo Web con Angular 2017" },
  { id: 1047, date: "2016-11-14", category: "frontend", title: "Diseño web con PostCSS, el futuro de CSS" },
  { id: 1038, date: "2016-11-12", category: "frontend", title: "Curso Definitivo de JavaScript 2016" },
  { id: 1013, date: "2016-11-12", category: "frontend", title: "Curso de JavaScript y jQuery 2015" },
  { id: 1054, date: "2016-10-16", category: "frontend", title: "Curso de Frontend con Bootstrap y Foundation 2016" },
  { id: 1036, date: "2016-10-03", category: "frontend", title: "Curso de Responsive Design 2016" },
  { id: 1049, date: "2016-10-03", category: "backend", title: "Curso Definitivo de Android 2016" },
  { id: 1009, date: "2016-09-26", category: "backend", title: "Curso de Patrones de Diseño de Software 2016" },
  { id: 1034, date: "2016-09-21", category: "frontend", title: "Curso de Desarrollo Web Online 2016" },
  { id: 45, date: "2016-09-21", category: "backend", title: "Curso profesional de Git y GitHub 2016" },
  { id: 39, date: "2016-05-07", category: "backend", title: "Curso de Programación Básica 2014" },
  { id: 1004, date: "2016-05-06", category: "backend", title: "Curso básico de Java 2015" },
];

// Udemy certificates; ids are the UC- codes from udemy.com/certificate/<id>/.
// Older certificates are 1200×896; the newer Udemy layout is slightly shorter.
const udemy: RawUdemyCertificate[] = [
  { id: "UC-9a1e00cb-da92-4e3f-b044-3bf2abe03e37", date: "2026-10-09", category: "backend", title: "Patrones de diseño en Javascript y Node.JS", width: 1200, height: 893 },
  { id: "UC-RRC7O886", date: "2019-11-15", category: "design", title: "UX & Web Design Master Course: Strategy, Design, Development", width: 1200, height: 896 },
  { id: "UC-XDZ77R3U", date: "2019-11-15", category: "backend", title: "The Complete Guide to Becoming a Software Architect", width: 1200, height: 896 },
  { id: "UC-GZEV4KPK", date: "2019-09-26", category: "design", title: "Master Diseño Digital con Adobe Photoshop CC 2019 + 30 horas", width: 1200, height: 896 },
];

export const certificates: Certificate[] = [
  ...platzi.map((c) => ({
    key: `platzi-${c.id}`,
    provider: "Platzi" as const,
    date: c.date,
    category: c.category,
    title: c.title,
    image: `${basePath}/diplomas/${c.id}.webp`,
    width: 864,
    height: 667,
    url: `${PLATZI_PROFILE}curso/${c.id}-course/diploma/detalle/`,
  })),
  ...udemy.map((c) => ({
    key: `udemy-${c.id}`,
    provider: "Udemy" as const,
    date: c.date,
    category: c.category,
    title: c.title,
    image: `${basePath}/diplomas/udemy/${c.id}.webp`,
    width: c.width,
    height: c.height,
    url: `https://www.udemy.com/certificate/${c.id}/`,
  })),
].sort((a, b) => b.date.localeCompare(a.date));
