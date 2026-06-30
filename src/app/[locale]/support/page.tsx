import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { ArrowLeft, Mail, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Teco } from "@/components/Teco";
import { Faq } from "@/components/Faq";

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
  const t = await getTranslations({ locale, namespace: "supportPage" });
  const path = locale === routing.defaultLocale ? "/support" : `/${locale}/support`;
  return {
    title: `${t("title")} — LeyMX`,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === routing.defaultLocale ? "/support" : `/${l}/support`,
        ])
      ),
    },
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SupportBody />;
}

function SupportBody() {
  const t = useTranslations("supportPage");

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
    { q: t("faq5Q"), a: t("faq5A") },
    { q: t("faq6Q"), a: t("faq6A") },
  ];

  const steps = [t("howto1"), t("howto2"), t("howto3"), t("howto4")];

  return (
    <div>
      {/* hero band */}
      <div className="grain relative overflow-hidden bg-[var(--ink-900)] text-[#eef1f5]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 80% at 85% 0%, rgba(201,162,75,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-14 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#c2ccd8] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {t("backHome")}
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Teco className="size-11" />
            <span className="t-eyebrow text-brass">{t("eyebrow")}</span>
          </div>
          <h1 className="t-h2 mt-4 text-white">{t("title")}</h1>
          <p className="mt-4 max-w-xl text-[#c2ccd8]">{t("intro")}</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        {/* contact card */}
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 size-44 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,75,0.16),transparent)]"
          />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <h2 className="font-display text-2xl tracking-tight">{t("contactTitle")}</h2>
              <p className="mt-2 leading-relaxed text-muted">{t("contactBody")}</p>
            </div>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="btn-brass inline-flex shrink-0 items-center gap-2 px-6 py-3.5 text-base"
            >
              <Mail className="size-[18px]" strokeWidth={2} />
              {t("contactCta")}
            </a>
          </div>
        </div>

        {/* quick start */}
        <div className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">{t("howtoTitle")}</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={i} className="card flex items-start gap-4 p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--accent)_14%,transparent)] font-display text-sm text-brass">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* faq */}
        <div className="mt-16">
          <h2 className="font-display text-2xl tracking-tight">{t("faqTitle")}</h2>
          <div className="mt-6">
            <Faq items={faqs} />
          </div>
        </div>

        {/* back link */}
        <div className="mt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brass underline-offset-4 hover:underline"
          >
            {t("backHome")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
