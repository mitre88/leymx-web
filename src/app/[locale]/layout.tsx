import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { fraunces } from "../fonts";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://leymx.vercel.app";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, l === routing.defaultLocale ? "/" : `/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    applicationName: "LeyMX",
    authors: [{ name: "Alejandro Hernández Mitre" }],
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      siteName: "LeyMX",
      title: t("title"),
      description: t("description"),
      locale,
      url: locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
      // og:image is auto-injected by the app/opengraph-image.tsx file convention.
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      // twitter:image is auto-injected by opengraph-image.tsx as well.
    },
    icons: {
      // SVG favicon from public/. apple-icon is auto-wired by app/apple-icon.tsx.
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <NextIntlClientProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
