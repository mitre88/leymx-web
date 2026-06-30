# LeyMX website — design research & decisions

## Goal

A product site that feels as considered as the app: a legal-research tool for lawyers and
students that is fast, offline, and private. The site has to communicate trust and craft in
seconds, then get out of the way.

## References studied

Landing pages we looked at for structure and tone (adapted, not copied):

- **Linear** (linear.app) — technical minimalism, dark editorial ground, restrained motion.
  Borrowed: a single dramatic dark hero band and a calm type-led layout.
- **Things** (things.com) — premium feel, generous spacing, one accent color held with
  conviction. Borrowed: the discipline of one dominant color + one accent.
- **Tot** (tot.cc) — ultra-minimal, lets the product screenshots breathe.
- **Apple product pages** — the bar for device-framed screenshots and quiet, confident copy.
  Borrowed: framed device shots over flat PNGs; stat row beneath the headline.

App-store landing patterns surveyed (hero with device + value prop, feature sections,
how-it-works, privacy callout, single download CTA) informed the section order below.

## Brand → web translation: "ink & brass"

The app's palette is a deep ink/navy ground (~#06101C) with a warm brass/gold accent
(~#C9A24B), San Francisco type, and a serif reader on warm paper.

Decisions:

- **Keep the ink ground for the dramatic bands** (hero, on-device-assistant, final CTA) in
  both light and dark themes — those sections are always dark, which gives the page a strong
  light/dark rhythm and lets brass glow.
- **Light theme uses warm paper** (#fbf8f1) for the reading sections, echoing the app's reader.
- **Type pairing:** an editorial serif — **Fraunces** — for display headlines (judicial,
  characterful, not a default sans), with **San Francisco** for all interface and body text,
  matching the app. No Inter/Roboto/Arial.
- **Accent discipline:** one dominant color (ink) + one accent (brass). For small text on
  light surfaces the brass is darkened (#806223) to meet WCAG AA; decorative brass keeps the
  brighter #C9A24B.
- **Atmosphere, not flat fills:** brass aurora radials, a faint film-grain overlay, decorative
  "legal" gridlines in the hero, and soft device shadows.

## Hero pattern chosen

Asymmetric two-column hero: an editorial serif headline + value proposition + brass download
button on the left, a device-framed real app screenshot with the owl mascot **Teco** peeking
over it on the right, over the ink ground with a brass aurora. A three-up stat row
(7,878 articles · 8 laws · 0 data collected) anchors the bottom. One orchestrated load moment:
the hero elements stagger in, and the device floats gently.

## Section order

1. Hero (device + Teco + tagline)
2. Trust bar — "No account. No tracking. No signal required."
3. Features — offline search, on-device assistant, serif reader, browse by area, one-time
   purchase, privacy-first
4. On-device assistant spotlight — "an assistant that cites its sources"
5. Browse by area of law — the seven materias with the app's colored tiles
6. How it works — ask → read → confirm
7. Privacy callout — "we collect nothing"
8. Final CTA — Teco + App Store badge
9. Disclaimer — not legal advice

## Accessibility

WCAG AA contrast across body, muted, and accent text in both themes (verified); visible brass
focus rings; semantic landmarks; reduced-motion respected; state never signaled by color alone.
