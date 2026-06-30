import { Apple } from "lucide-react";
import { getTranslations } from "next-intl/server";

/**
 * App Store badge — placeholder while the app is in review.
 * Rendered as a non-interactive pill (the app is not yet live), styled to
 * read like the official badge without misrepresenting availability.
 */
export async function AppStoreBadge({
  label,
}: {
  label?: string;
}) {
  const t = await getTranslations("badge");
  const cta = label ?? t("placeholder");

  return (
    <span
      className="inline-flex select-none items-center gap-3 rounded-2xl border border-[var(--hairline)] bg-[#0c1118] px-5 py-3 text-left text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,.8)]"
      aria-label={cta}
    >
      <Apple className="size-7 shrink-0" fill="currentColor" strokeWidth={0} />
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-[0.14em] text-white/60">
          {cta}
        </span>
        <span className="font-display block text-lg leading-none">
          App&nbsp;Store
        </span>
      </span>
    </span>
  );
}
