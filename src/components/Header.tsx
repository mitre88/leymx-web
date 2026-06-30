"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Teco } from "./Teco";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#features", label: t("features") },
    { href: "/privacy", label: t("privacy") },
    { href: "/support", label: t("support") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="LeyMX"
        >
          <Teco className="size-9" />
          <span className="font-display text-xl tracking-tight">
            Ley<span className="text-brass">MX</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Link
            href="/#download"
            className="btn-brass hidden px-4 py-2 text-sm md:inline-flex"
          >
            {t("download")}
          </Link>
          <button
            type="button"
            className="btn-ghost grid size-10 place-items-center md:hidden"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--hairline)] bg-[var(--background)] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-[var(--surface-2)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="btn-brass mt-2 justify-center px-4 py-3 text-base"
            >
              {t("download")}
            </Link>
            <div className="mt-3 flex items-center justify-between border-t border-[var(--hairline)] pt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
