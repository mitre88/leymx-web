import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { LegalShell, LegalSection } from "@/components/LegalShell";

const SUPPORT_EMAIL = "alehernandezm@msev.gob.mx";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsPage" });
  const path = locale === routing.defaultLocale ? "/terms" : `/${locale}/terms`;
  return {
    title: `${t("title")} — LeyMX`,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale ? "/terms" : `/${l}/terms`,
        ])
      ),
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsBody />;
}

function TermsBody() {
  const t = useTranslations("termsPage");
  return (
    <LegalShell
      eyebrow={t("eyebrow")}
      title={t("title")}
      updated={t("updated")}
      intro={t("intro")}
      backLabel={t("backHome")}
    >
      <LegalSection title={t("s1Title")}>{t("s1Body")}</LegalSection>
      <LegalSection title={t("s2Title")}>{t("s2Body")}</LegalSection>
      <LegalSection title={t("s3Title")}>{t("s3Body")}</LegalSection>
      <LegalSection title={t("s4Title")}>{t("s4Body")}</LegalSection>
      <LegalSection title={t("s5Title")}>{t("s5Body")}</LegalSection>
      <LegalSection title={t("s6Title")}>{t("s6Body")}</LegalSection>
      <LegalSection title={t("s7Title")}>{t("s7Body")}</LegalSection>
      <LegalSection title={t("s8Title")}>{t("s8Body")}</LegalSection>
      <section>
        <h2 className="font-display text-xl tracking-tight text-foreground">
          {t("s9Title")}
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          {t("s9Body")}{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-brass underline-offset-4 hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
      </section>
    </LegalShell>
  );
}
