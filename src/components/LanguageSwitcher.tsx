"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

const LABELS: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function pick(next: string) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={t("language")}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className="btn-ghost flex h-10 items-center gap-1.5 px-3 text-sm font-medium text-foreground"
      >
        <Globe className="size-[17px]" strokeWidth={1.8} />
        <span className="uppercase">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="card absolute right-0 z-50 mt-2 w-44 overflow-hidden p-1.5"
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => pick(l)}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                  l === locale
                    ? "text-brass"
                    : "text-foreground hover:bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]"
                )}
              >
                {LABELS[l]}
                {l === locale && <Check className="size-4" strokeWidth={2} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
