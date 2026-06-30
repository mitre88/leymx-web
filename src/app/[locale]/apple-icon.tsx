import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06101c",
          fontSize: 118,
        }}
      >
        🦉
      </div>
    ),
    size
  );
}
