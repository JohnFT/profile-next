import type { Locale } from "@/lib/i18n";

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
};

const en: Project[] = [
  {
    slug: "talk-ready",
    name: "TalkReady",
    description:
      "AI-powered English coaching app with personalized curriculum, roleplay and shadowing practice, interview prep, vocabulary tracking, and progress analytics, powered by Claude and OpenAI.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Anthropic SDK", "OpenAI", "better-auth"],
    github: "https://github.com/JohnFT/talk-ready-v1",
  },
  {
    slug: "animal-farm",
    name: "Animal Farm",
    description:
      "Mobile app for managing ranches and livestock inventory, built with Expo and file-based routing.",
    stack: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/JohnFT/animal-farm",
  },
  {
    slug: "dealscan",
    name: "DealScan (Price Optimizer)",
    description:
      "Compares real effective prices across Colombian retailers, applying store promotions and payment-method discounts. Includes a Telegram bot for on-demand searches and scheduled alerts via GitHub Actions.",
    stack: ["Python", "Playwright", "MongoDB Atlas", "Telegram Bot", "Flask"],
    github: "https://github.com/JohnFT/DealScan",
  },
  {
    slug: "api-rest-demo",
    name: "API REST Demo",
    description: "A demo REST API showcasing backend service design and implementation patterns.",
    stack: ["Java", "Spring Boot", "Maven"],
    github: "https://github.com/JohnFT/api-rest-demo",
  },
  {
    slug: "streaming-app",
    name: "Streaming App",
    description:
      "Full-stack streaming application with a Vite-powered client and a dedicated server.",
    stack: ["TypeScript", "Vite", "Node.js"],
    github: "",
  },
];

const es: Project[] = [
  {
    slug: "talk-ready",
    name: "TalkReady",
    description:
      "Aplicación de coaching de inglés con IA, con currículo personalizado, práctica de roleplay y shadowing, preparación para entrevistas, seguimiento de vocabulario y análisis de progreso, impulsada por Claude y OpenAI.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Anthropic SDK", "OpenAI", "better-auth"],
    github: "https://github.com/JohnFT/talk-ready-v1",
  },
  {
    slug: "animal-farm",
    name: "Animal Farm",
    description:
      "Aplicación móvil para gestionar ranchos e inventario de ganado, construida con Expo y enrutamiento basado en archivos.",
    stack: ["React Native", "Expo", "TypeScript"],
    github: "https://github.com/JohnFT/animal-farm",
  },
  {
    slug: "dealscan",
    name: "DealScan (Price Optimizer)",
    description:
      "Compara precios efectivos reales entre minoristas colombianos, aplicando promociones de tienda y descuentos por medio de pago. Incluye un bot de Telegram para búsquedas bajo demanda y alertas programadas vía GitHub Actions.",
    stack: ["Python", "Playwright", "MongoDB Atlas", "Telegram Bot", "Flask"],
    github: "https://github.com/JohnFT/DealScan",
  },
  {
    slug: "api-rest-demo",
    name: "API REST Demo",
    description: "Una API REST de demostración que muestra patrones de diseño e implementación de servicios backend.",
    stack: ["Java", "Spring Boot", "Maven"],
    github: "https://github.com/JohnFT/api-rest-demo",
  },
  {
    slug: "streaming-app",
    name: "Streaming App",
    description:
      "Aplicación de streaming full-stack con un cliente potenciado por Vite y un servidor dedicado.",
    stack: ["TypeScript", "Vite", "Node.js"],
    github: "",
  },
];

export const projects: Record<Locale, Project[]> = { en, es };
