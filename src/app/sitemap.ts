import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leymx.vercel.app";

const PATHS = ["", "/privacy", "/support", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    const languages = Object.fromEntries(
      routing.locales.map((l) => [
        l,
        `${SITE_URL}${l === routing.defaultLocale ? "" : `/${l}`}${path}`,
      ])
    );

    entries.push({
      url: `${SITE_URL}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.6,
      alternates: { languages },
    });
  }

  return entries;
}
