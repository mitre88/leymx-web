import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  Search,
  Sparkles,
  BookOpen,
  LayoutGrid,
  BadgeCheck,
  ShieldCheck,
  ArrowRight,
  Quote,
  WifiOff,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Teco } from "@/components/Teco";
import { Reveal } from "@/components/Reveal";
import { DeviceFrame } from "@/components/DeviceFrame";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { MateriaIcon, MATERIA_ORDER } from "@/components/MateriaIcon";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <Assistant />
      <Areas />
      <HowItWorks />
      <PrivacyBanner />
      <FinalCta />
      <Disclaimer />
    </>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="grain relative overflow-hidden bg-[var(--ink-900)] text-[#eef1f5]">
      {/* atmosphere: brass aurora + legal gridlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(120% 80% at 80% -10%, rgba(201,162,75,0.22), transparent 55%), radial-gradient(90% 60% at 10% 110%, rgba(28,48,71,0.6), transparent 60%)",
        }}
      />
      <div aria-hidden className="legal-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="reveal flex items-center gap-2.5 text-brass" style={{ animationDelay: "0ms" }}>
            <span className="grid size-6 place-items-center rounded-md bg-[rgba(201,162,75,0.16)]">
              <WifiOff className="size-3.5" strokeWidth={2} />
            </span>
            <span className="t-eyebrow">{t("eyebrow")}</span>
          </div>

          <h1 className="t-display reveal mt-6 text-balance text-white" style={{ animationDelay: "90ms" }}>
            {t("title")}
          </h1>

          <p className="t-lead reveal mt-6 max-w-xl text-[#c2ccd8]" style={{ animationDelay: "180ms" }}>
            {t("subtitle")}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "270ms" }}>
            <Link href="/#download" className="btn-brass px-6 py-3.5 text-base">
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/#how"
              className="inline-flex items-center gap-1.5 text-base font-medium text-[#c2ccd8] transition-colors hover:text-white"
            >
              {t("ctaSecondary")}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* stats row */}
          <dl className="reveal mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8" style={{ animationDelay: "360ms" }}>
            {[
              { v: t("stat1Value"), l: t("stat1Label") },
              { v: t("stat2Value"), l: t("stat2Label") },
              { v: t("stat3Value"), l: t("stat3Label") },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-3xl text-white sm:text-4xl">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-[#8a97a6]">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* device + Teco */}
        <div className="reveal relative mx-auto flex w-full max-w-sm justify-center" style={{ animationDelay: "220ms" }}>
          <div
            aria-hidden
            className="absolute inset-x-6 top-8 bottom-0 rounded-[40px] bg-[radial-gradient(closest-side,rgba(201,162,75,0.28),transparent)]"
          />
          <div className="float-slow relative">
            <DeviceFrame
              light="/screenshots/search-light.png"
              dark="/screenshots/search-dark.png"
              alt={t("screenshotAlt")}
              priority
              sizes="(max-width: 1024px) 70vw, 340px"
              className="max-w-[300px]"
            />
            <Teco className="absolute -left-8 -top-6 size-24 drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] sm:-left-12 sm:size-28" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Trust bar -------------------------- */
function TrustBar() {
  const t = useTranslations("trust");
  return (
    <div className="border-y border-[var(--hairline)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-5 text-center sm:px-8">
        <ShieldCheck className="size-5 text-brass" strokeWidth={1.8} />
        <p className="text-sm font-medium tracking-wide text-muted">{t("line")}</p>
      </div>
    </div>
  );
}

/* ---------------------------- Features -------------------------- */
function Features() {
  const t = useTranslations("features");

  const items: { key: string; Icon: typeof Search; span?: boolean }[] = [
    { key: "offline", Icon: Search, span: true },
    { key: "ai", Icon: Sparkles },
    { key: "reader", Icon: BookOpen },
    { key: "browse", Icon: LayoutGrid },
    { key: "oneTime", Icon: BadgeCheck },
    { key: "privacy", Icon: ShieldCheck },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <Reveal className="max-w-2xl">
        <span className="t-eyebrow text-brass">{t("eyebrow")}</span>
        <h2 className="t-h2 mt-4 text-balance">{t("title")}</h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal
            as="article"
            key={it.key}
            delay={i * 0.06}
            className={`card group p-7 transition-transform duration-300 hover:-translate-y-1 ${
              it.span ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-brass">
              <it.Icon className="size-6" strokeWidth={1.7} />
            </span>
            <h3 className="t-h3 mt-5">{t(`${it.key}.title`)}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {t(`${it.key}.body`)}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- Assistant -------------------------- */
function Assistant() {
  const t = useTranslations("assistant");
  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <section
      id="assistant"
      className="grain relative scroll-mt-20 overflow-hidden bg-[var(--ink-900)] text-[#eef1f5]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 15% 20%, rgba(201,162,75,0.16), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-32">
        <Reveal className="order-2 mx-auto flex w-full max-w-sm justify-center lg:order-1">
          <DeviceFrame
            light="/screenshots/assistant-light.png"
            dark="/screenshots/assistant-dark.png"
            alt={t("screenshotAlt")}
            className="max-w-[290px]"
          />
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <span className="t-eyebrow text-brass">{t("eyebrow")}</span>
          <h2 className="t-h2 mt-4 text-balance text-white">{t("title")}</h2>
          <div className="mt-6 flex gap-3 text-[#c2ccd8]">
            <Quote className="size-7 shrink-0 -scale-x-100 text-brass/70" />
            <p className="text-[17px] leading-relaxed">{t("body")}</p>
          </div>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[rgba(201,162,75,0.18)] text-brass">
                  <span className="size-1.5 rounded-full bg-current" />
                </span>
                <span className="text-[15px] text-[#d7dee6]">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Areas ---------------------------- */
function Areas() {
  const t = useTranslations("areas");

  return (
    <section id="areas" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="t-eyebrow text-brass">{t("eyebrow")}</span>
          <h2 className="t-h2 mt-4 text-balance">{t("title")}</h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            {t("subtitle")}
          </p>
          <DeviceFrame
            light="/screenshots/browse-light.png"
            dark="/screenshots/browse-dark.png"
            alt={t("title")}
            className="mt-10 max-w-[260px]"
          />
        </Reveal>

        <ul className="grid gap-3.5 sm:grid-cols-2">
          {MATERIA_ORDER.map((k, i) => (
            <Reveal
              as="li"
              key={k}
              delay={i * 0.05}
              className="card flex items-center gap-4 p-4 transition-transform duration-300 hover:translate-x-1"
            >
              <MateriaIcon k={k} />
              <span className="font-display text-lg">{t(k)}</span>
              <ArrowRight className="ml-auto size-4 text-faint" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------- How it works ------------------------ */
function HowItWorks() {
  const t = useTranslations("how");
  const steps = [
    { n: "01", t: t("step1Title"), b: t("step1Body") },
    { n: "02", t: t("step2Title"), b: t("step2Body") },
    { n: "03", t: t("step3Title"), b: t("step3Body") },
  ];

  return (
    <section id="how" className="scroll-mt-20 border-y border-[var(--hairline)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="t-eyebrow text-brass">{t("eyebrow")}</span>
          <h2 className="t-h2 mt-4 text-balance">{t("title")}</h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[var(--hairline)] md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.1}
              className="bg-[var(--background)] p-8"
            >
              <span className="font-display text-5xl text-brass/40">{s.n}</span>
              <h3 className="t-h3 mt-4">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Privacy banner ----------------------- */
function PrivacyBanner() {
  const t = useTranslations("privacyBanner");

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-28">
      <Reveal className="card relative overflow-hidden p-10 sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,75,0.16),transparent)]"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-brass">
              <ShieldCheck className="size-5" strokeWidth={1.9} />
              <span className="t-eyebrow">{t("eyebrow")}</span>
            </div>
            <h2 className="t-h2 mt-4 text-balance">{t("title")}</h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">{t("body")}</p>
          </div>
          <Link
            href="/privacy"
            className="btn-ghost inline-flex shrink-0 items-center gap-2 px-6 py-3.5 text-base font-medium"
          >
            {t("cta")}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------- Final CTA -------------------------- */
function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section
      id="download"
      className="grain relative scroll-mt-20 overflow-hidden bg-[var(--ink-900)] text-[#eef1f5]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 120%, rgba(201,162,75,0.22), transparent 60%)",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <Teco className="mx-auto size-24" />
          <h2 className="t-display mt-6 text-balance text-white" style={{ fontSize: "clamp(2.2rem,1.4rem+3vw,3.6rem)" }}>
            {t("title")}
          </h2>
          <p className="t-lead mx-auto mt-5 max-w-xl text-[#c2ccd8]">{t("subtitle")}</p>
          <div className="mt-9 flex justify-center">
            <AppStoreBadge />
          </div>
          <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-[#8a97a6]">
            {t("note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Disclaimer -------------------------- */
function Disclaimer() {
  const t = useTranslations("disclaimer");
  return (
    <div className="bg-[var(--surface)]">
      <p className="mx-auto max-w-3xl px-5 py-8 text-center text-xs leading-relaxed text-faint sm:px-8">
        {t("text")}
      </p>
    </div>
  );
}
