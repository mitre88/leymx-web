import { ImageResponse } from "next/og";

export const alt = "LeyMX — Mexican federal law, offline and instant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "78px",
          background:
            "radial-gradient(120% 90% at 85% -10%, #1d3147 0%, #06101c 55%)",
          color: "#eef1f5",
        }}
      >
        {/* top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              background: "#0b1828",
              border: "2px solid rgba(201,162,75,0.5)",
              fontSize: 46,
            }}
          >
            🦉
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontFamily: "serif",
              letterSpacing: "-0.02em",
            }}
          >
            LeyMX
          </div>
        </div>

        {/* middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "#c9a24b",
              marginBottom: 20,
            }}
          >
            MEXICAN FEDERAL LAW · OFFLINE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontFamily: "serif",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            The law, the moment you need it.
          </div>
        </div>

        {/* bottom: stats */}
        <div style={{ display: "flex", gap: "60px" }}>
          {[
            ["7,878", "ARTICLES"],
            ["8", "FEDERAL LAWS"],
            ["0", "DATA COLLECTED"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 54, fontFamily: "serif", color: "#fff" }}>
                {v}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 19,
                  letterSpacing: "2px",
                  color: "#8a97a6",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
