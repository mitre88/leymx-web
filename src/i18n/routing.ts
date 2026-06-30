import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "fr"],
  defaultLocale: "en",
  // Clean URLs: default locale at "/", others prefixed (/es, /fr)
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
