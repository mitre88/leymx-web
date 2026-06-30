import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Teco } from "./Teco";

const SUPPORT_EMAIL = "alehernandezm@msev.gob.mx";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--hairline)] bg-[var(--surface)]">
      <div className="rule-brass" />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Teco className="size-9" />
              <span className="font-display text-xl tracking-tight">
                Ley<span className="text-brass">MX</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t("tagline")}
            </p>
            <p className="mt-5 text-xs text-faint">{t("source")}</p>
          </div>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="t-eyebrow text-faint">{t("product")}</span>
            <Link href="/#features" className="text-muted transition-colors hover:text-foreground">
              {t("features")}
            </Link>
            <Link href="/#assistant" className="text-muted transition-colors hover:text-foreground">
              {t("assistant")}
            </Link>
            <Link href="/#areas" className="text-muted transition-colors hover:text-foreground">
              {t("areas")}
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="t-eyebrow text-faint">{t("legal")}</span>
            <Link href="/privacy" className="text-muted transition-colors hover:text-foreground">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="text-muted transition-colors hover:text-foreground">
              {t("terms")}
            </Link>
          </nav>

          <nav className="flex flex-col gap-3 text-sm">
            <span className="t-eyebrow text-faint">{t("contact")}</span>
            <Link href="/support" className="text-muted transition-colors hover:text-foreground">
              {t("support")}
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-muted transition-colors hover:text-foreground"
            >
              {t("email")}
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--hairline)] pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <span>
            © {year} LeyMX. {t("rights")}
          </span>
          <span>{t("madeBy")}</span>
        </div>
      </div>
    </footer>
  );
}
