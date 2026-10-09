import type { Locale } from "@/lib/i18n";

export function switchLocalePath(pathname: string, locale: Locale): string {
  const parts = pathname.split("/");
  parts[1] = locale;
  return parts.join("/") || "/";
}
