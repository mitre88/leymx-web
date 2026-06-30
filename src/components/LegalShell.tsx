import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Teco } from "./Teco";

export function LegalShell({
  eyebrow,
  title,
  updated,
  intro,
  backLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  intro: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      {/* slim brand band */}
      <div className="grain relative overflow-hidden bg-[var(--ink-900)] text-[#eef1f5]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 80% at 85% 0%, rgba(201,162,75,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-14 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[#c2ccd8] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {backLabel}
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Teco className="size-11" />
            <span className="t-eyebrow text-brass">{eyebrow}</span>
          </div>
          <h1 className="t-h2 mt-4 text-white">{title}</h1>
          {updated && <p className="mt-3 text-sm text-[#8a97a6]">{updated}</p>}
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <p className="text-lg leading-relaxed text-foreground">{intro}</p>
        <div className="rule-brass mt-10" />
        <div className="mt-10 space-y-10">{children}</div>
      </article>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-muted">{children}</p>
    </section>
  );
}
