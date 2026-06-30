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
  const t = await getTranslations({ locale, namespace: "privacyPage" });
  const path = locale === routing.defaultLocale ? "/privacy" : `/${locale}/privacy`;
  return {
    title: `${t("title")} — LeyMX`,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale ? "/privacy" : `/${l}/privacy`,
        ])
      ),
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyBody />;
}

function PrivacyBody() {
  const t = useTranslations("privacyPage");
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
      <section>
        <h2 className="font-display text-xl tracking-tight text-foreground">
          {t("s8Title")}
        </h2>
        <p className="mt-3 leading-relaxed text-muted">
          {t("s8Body")}{" "}
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
