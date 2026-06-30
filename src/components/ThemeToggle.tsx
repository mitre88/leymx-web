"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={t("toggleTheme")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="btn-ghost grid size-10 place-items-center text-foreground"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[18px]" strokeWidth={1.8} />
        ) : (
          <Moon className="size-[18px]" strokeWidth={1.8} />
        )
      ) : (
        <span className="size-[18px]" />
      )}
    </button>
  );
}
