# LeyMX — product website

The marketing site for **LeyMX**, an iPhone app that puts Mexican federal law in your
pocket: full-text search across 8 federal laws (7,878 articles), a serif reader built for
long statutes, and an on-device assistant that answers questions and cites the article —
all working fully offline.

This repository contains the public website: the landing page plus the Privacy Policy,
Support, and Terms of Use pages, in English, Spanish, and French, with light and dark themes.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **next-intl** for localization (en · es · fr)
- **next-themes** for light/dark
- **Framer Motion** for motion
- Deployed on **Vercel**

## Design language — "ink & brass"

A deep ink/navy ground with a warm brass accent. Refined, judicial, and trustworthy, using
an editorial serif (Fraunces) for display type and San Francisco for the interface — the same
restraint as the app itself.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Structure

```
src/
├─ app/[locale]/        landing, privacy, support, terms
├─ components/          UI (header, footer, device frame, Teco mascot, …)
├─ i18n/                locale routing + request config
└─ messages/            en.json · es.json · fr.json
```

The app's legal library is sourced from public-domain Mexican federal law texts published by
the Cámara de Diputados.
