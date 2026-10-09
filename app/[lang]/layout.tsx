import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, defaultLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ShaderBackground from "@/components/ShaderBackground";
import TopNav from "@/components/TopNav";
import BottomTabBar from "@/components/BottomTabBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <ShaderBackground />
        <TopNav locale={lang} dict={dict} />
        <div className="flex-1 pb-20 sm:pb-0">{children}</div>
        <BottomTabBar locale={lang} dict={dict} />
      </body>
    </html>
  );
}
