import { Fraunces } from "next/font/google";

// Editorial serif for display type — characterful, judicial, not a default sans.
// SF Pro (system stack) carries all UI/body text per the brand.
// Fraunces is a variable font — omit `weight` so the full axis range is
// available (we drive weight from CSS). `axes` adds optical sizing + softness.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});
