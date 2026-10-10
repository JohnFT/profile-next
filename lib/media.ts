import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n";
import mercadolibreLogo from "@/assets/logos/mercadolibre.webp";
import almundoLogo from "@/assets/logos/almundo.svg";
import digitalwareLogo from "@/assets/logos/digitalware.webp";
import simpleLogo from "@/assets/logos/simple.svg";
import kidonLogo from "@/assets/logos/kidon.svg";
import mercadolibre1 from "@/assets/work/mercadolibre-1.webp";
import mercadolibre2 from "@/assets/work/mercadolibre-2.webp";
import mercadolibre3 from "@/assets/work/mercadolibre-3.webp";
import almundo1 from "@/assets/work/almundo-1.webp";
import almundo2 from "@/assets/work/almundo-2.webp";
import kidon1 from "@/assets/work/kidon-1.webp";
import kidon2 from "@/assets/work/kidon-2.webp";
import kidon3 from "@/assets/work/kidon-3.webp";
import simple1 from "@/assets/work/simple-1.webp";
import talkready5 from "@/assets/work/talkready-5.webp";
import talkready6 from "@/assets/work/talkready-6.webp";
import talkready2 from "@/assets/work/talkready-2.webp";
import talkready3 from "@/assets/work/talkready-3.webp";
import animalfarm0 from "@/assets/work/animalfarm-0.webp";
import animalfarm1 from "@/assets/work/animalfarm-1.webp";
import animalfarm2 from "@/assets/work/animalfarm-2.webp";
import animalfarm3 from "@/assets/work/animalfarm-3.webp";
import animalfarm4 from "@/assets/work/animalfarm-4.webp";
import animalfarm5 from "@/assets/work/animalfarm-5.webp";

export type Shot = { src: StaticImageData; alt: Record<Locale, string> };

// Keyed by the company name used in lib/experience.ts.
export const companyLogos: Record<string, StaticImageData> = {
  "Mercado Libre": mercadolibreLogo,
  Almundo: almundoLogo,
  DigitalWare: digitalwareLogo,
  "Simple SA": simpleLogo,
  "Kidon SA": kidonLogo,
};

export const companyShots: Record<string, Shot[]> = {
  "Mercado Libre": [
    { src: mercadolibre1, alt: { en: "Mercado Libre home page", es: "Página de inicio de Mercado Libre" } },
    { src: mercadolibre2, alt: { en: "Mercado Libre search results", es: "Resultados de búsqueda de Mercado Libre" } },
    { src: mercadolibre3, alt: { en: "Mercado Libre product page", es: "Página de producto de Mercado Libre" } },
  ],
  Almundo: [
    { src: almundo1, alt: { en: "Almundo flight search", es: "Búsqueda de vuelos de Almundo" } },
    { src: almundo2, alt: { en: "Almundo flight results", es: "Resultados de vuelos de Almundo" } },
  ],
  "Simple SA": [
    { src: simple1, alt: { en: "Pago Simple payroll payment app", es: "App de pago de planilla Pago Simple" } },
  ],
  "Kidon SA": [
    { src: kidon1, alt: { en: "Camarógrafo RCN game by Kidon", es: "Juego Camarógrafo RCN de Kidon" } },
    { src: kidon2, alt: { en: "Un Viaje Feliz Avianca game by Kidon", es: "Juego Un Viaje Feliz de Avianca, de Kidon" } },
    { src: kidon3, alt: { en: "Kidon avatar creator", es: "Creador de avatares de Kidon" } },
  ],
};

// Keyed by the project slug used in lib/projects.ts.
export const projectShots: Record<string, Shot[]> = {
  "talk-ready": [
    { src: talkready5, alt: { en: "TalkReady AI roleplays", es: "Roleplays con IA en TalkReady" } },
    { src: talkready6, alt: { en: "TalkReady AI-generated stories", es: "Historias generadas con IA en TalkReady" } },
    { src: talkready2, alt: { en: "TalkReady practice lesson", es: "Lección de práctica en TalkReady" } },
    { src: talkready3, alt: { en: "TalkReady dashboard and AI modes", es: "Panel y modos de IA de TalkReady" } },
  ],
  "animal-farm": [
    { src: animalfarm0, alt: { en: "Animal Farm (MyRancho) sign-in screen", es: "Pantalla de inicio de sesión de Animal Farm (MyRancho)" } },
    { src: animalfarm1, alt: { en: "Animal Farm ranch list with alerts", es: "Lista de ranchos con alertas en Animal Farm" } },
    { src: animalfarm2, alt: { en: "Animal Farm ranch dashboard and key metrics", es: "Panel del rancho e indicadores clave en Animal Farm" } },
    { src: animalfarm3, alt: { en: "Animal Farm task calendar", es: "Calendario de tareas en Animal Farm" } },
    { src: animalfarm4, alt: { en: "Animal Farm livestock inventory", es: "Inventario de ganado en Animal Farm" } },
    { src: animalfarm5, alt: { en: "Animal Farm animal detail", es: "Detalle de animal en Animal Farm" } },
  ],
};
