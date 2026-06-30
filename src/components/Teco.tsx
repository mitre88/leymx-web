import * as React from "react";

/**
 * Teco — the LeyMX tecolote (owl) mascot.
 * Drawn as a self-contained SVG so it stays crisp at any size and inherits
 * the ink & brass palette. No raster asset. Reads cleanly down to ~32px.
 */
export function Teco({
  className,
  title = "Teco, the LeyMX owl",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="teco-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9a7b3e" />
          <stop offset="1" stopColor="#7c6230" />
        </linearGradient>
        <linearGradient id="teco-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3ead3" />
          <stop offset="1" stopColor="#e3d4ad" />
        </linearGradient>
        <linearGradient id="teco-brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e6cf99" />
          <stop offset="1" stopColor="#c9a24b" />
        </linearGradient>
        <radialGradient id="teco-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#06101c" stopOpacity="0.28" />
          <stop offset="1" stopColor="#06101c" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="100" cy="178" rx="56" ry="12" fill="url(#teco-shadow)" />

      {/* ear tufts */}
      <path
        d="M58 56 L48 24 L80 46 Z"
        fill="url(#teco-body)"
      />
      <path
        d="M142 56 L152 24 L120 46 Z"
        fill="url(#teco-body)"
      />

      {/* body */}
      <path
        d="M100 38
           C 142 38 162 70 162 110
           C 162 150 136 174 100 174
           C 64 174 38 150 38 110
           C 38 70 58 38 100 38 Z"
        fill="url(#teco-body)"
      />

      {/* belly / chest plate */}
      <path
        d="M100 84
           C 124 84 136 104 136 128
           C 136 154 120 170 100 170
           C 80 170 64 154 64 128
           C 64 104 76 84 100 84 Z"
        fill="url(#teco-belly)"
      />

      {/* feather flecks on belly */}
      <g fill="#caa86a" opacity="0.55">
        <path d="M100 120 q4 5 0 10 q-4 -5 0 -10 Z" />
        <path d="M86 132 q4 5 0 10 q-4 -5 0 -10 Z" />
        <path d="M114 132 q4 5 0 10 q-4 -5 0 -10 Z" />
      </g>

      {/* brass eye-mask (judicial spectacles motif) */}
      <path
        d="M52 86
           C 52 64 78 60 100 60
           C 122 60 148 64 148 86
           C 148 104 128 112 100 112
           C 72 112 52 104 52 86 Z"
        fill="#fbf6ea"
        stroke="url(#teco-brass)"
        strokeWidth="5"
      />

      {/* eyes */}
      <circle cx="76" cy="86" r="15" fill="#10212f" />
      <circle cx="124" cy="86" r="15" fill="#10212f" />
      <circle cx="80" cy="81" r="5" fill="#fdfbf6" />
      <circle cx="128" cy="81" r="5" fill="#fdfbf6" />

      {/* beak */}
      <path
        d="M100 96 L92 110 L108 110 Z"
        fill="url(#teco-brass)"
      />

      {/* feet */}
      <g fill="url(#teco-brass)">
        <path d="M84 168 l-6 10 m6 -10 l0 11 m0 -11 l6 10" stroke="url(#teco-brass)" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M116 168 l-6 10 m6 -10 l0 11 m0 -11 l6 10" stroke="url(#teco-brass)" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
