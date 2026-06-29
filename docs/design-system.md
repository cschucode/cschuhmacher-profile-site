# Design System — Chris Schuhmacher

A **dark, immersive, navy-first** identity for a public-figure landing page. Navy is the primary canvas across the entire site; amber is the signature accent; text is off-white. The whole page should read like the current `FitnessMonkey` band — that band is the gold standard, extended everywhere.

> Stack: Next.js 16 (App Router), React 19, **Tailwind CSS v4** (CSS-first via `@theme inline` in `app/globals.css`), Framer Motion. Fonts are Geist Sans / Geist Mono (already loaded — do not change). Custom props are referenced in JSX as arbitrary values, e.g. `bg-[color:var(--color-surface-base)]`, `text-[color:var(--color-text-primary)]`.

---

## 1. Design principles

1. **Dark is the canvas, not a mode.** Navy is the page background everywhere. Depth comes from *subtle surface steps, hairline borders, and amber glows* — never from white space or light cards.
2. **Amber is earned, not sprinkled.** Amber marks the things that matter: the name, key phrases, primary CTAs, active nav, the FitnessMonkey band. One or two amber moments per viewport, max.
3. **Dignified, not flashy.** Serious, hopeful, human. Generous spacing, restrained motion, strong typographic hierarchy. No neon, no heavy shadows, no gratuitous animation.
4. **Wider and composed.** A ~1080px container with intentional multi-column / asymmetric layouts — but body copy always keeps a comfortable reading measure (~65–70ch).
5. **Rhythm through layers.** Alternate surface depth and full-bleed bands section-to-section so a scroll feels paced, even though it's all dark.

---

## 2. Color tokens & roles

Replace the current `@theme inline` block. Keep the existing brand tokens (`--color-fm*`, `--color-accent`) for backward compatibility, and add a navy scale + semantic roles.

### Navy surface scale (raw)
On dark, **higher elevation = lighter**. Base canvas is the darkest.

| Token | Hex | Role |
|---|---|---|
| `--navy-950` | `#121a25` | deepest — footer, hero vignette base |
| `--navy-900` | `#16212f` | **base page canvas** |
| `--navy-850` | `#1b2838` | alt/raised section band |
| `--navy-800` | `#1f2d3d` | raised band (= existing `--color-fm-navy-dark`) |
| `--navy-750` | `#25364a` | **card surface** |
| `--navy-700` | `#2c3e54` | elevated / card hover (= existing `--color-fm-navy`) |
| `--navy-650` | `#34465e` | strong hairline / divider |
| `--navy-600` | `#405572` | border on elevated surfaces |

### Semantic tokens (use these in components)

```css
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* --- Navy scale --- */
  --navy-950: #121a25;
  --navy-900: #16212f;
  --navy-850: #1b2838;
  --navy-800: #1f2d3d;
  --navy-750: #25364a;
  --navy-700: #2c3e54;
  --navy-650: #34465e;
  --navy-600: #405572;

  /* --- Surfaces --- */
  --color-surface-base: #16212f;      /* page canvas */
  --color-surface-raised: #1b2838;    /* alt section band */
  --color-surface-card: #25364a;      /* cards */
  --color-surface-elevated: #2c3e54;  /* card hover / FM band body */
  --color-surface-footer: #121a25;    /* deepest */

  /* --- Text on dark --- */
  --color-text-primary: #f4f6f8;      /* headings, body emphasis */
  --color-text-secondary: #c4cdd8;    /* body copy */
  --color-text-muted: #8b97a6;        /* labels, captions, meta */

  /* --- Borders / hairlines --- */
  --color-border: #2a3a4f;            /* default hairline (~white/8 over navy) */
  --color-border-strong: #34465e;     /* card border, dividers */
  --color-border-accent: #f2a53c;     /* amber border on hover/active */

  /* --- Accents --- */
  --color-fm: #f2a53c;          /* amber primary */
  --color-fm-light: #f8c06b;    /* amber hover / light text */
  --color-fm-dark: #b5731a;     /* amber for text on LIGHT bg only (resume) */
  --color-fm-navy: #2c3e54;
  --color-fm-navy-dark: #1f2d3d;
  --color-amber-hover: #f8c06b; /* button hover = fm-light */
  --color-amber-press: #e0913a; /* button active */

  /* --- Secondary accent (blue) --- */
  --color-accent: #2563eb;        /* keep — solid blue fills */
  --color-accent-text: #60a5fa;   /* blue for TEXT/links on dark (lighter) */

  /* --- Focus --- */
  --color-focus-ring: #f8c06b;    /* amber-light focus ring */
}
```

### Contrast (verified, WCAG relative luminance)

| Pair | Ratio | Verdict |
|---|---|---|
| `--color-text-primary` #f4f6f8 on base #16212f | **14.7:1** | AAA |
| `--color-text-secondary` #c4cdd8 on base | **9.8:1** | AAA |
| `--color-text-muted` #8b97a6 on base | **5.4:1** | AA (body+labels OK) |
| Amber #f2a53c text on base #16212f | **7.7:1** | AAA |
| Amber #f2a53c text on card #2c3e54 | **5.4:1** | AA |
| Blue-text #60a5fa on base | **6.3:1** | AA+ |
| **Amber button:** navy-dark #1f2d3d text on amber #f2a53c | **6.8:1** | AAA |

**Rule:** never put `--color-fm-dark` (#b5731a) on dark navy — it fails. It is reserved for the light `/resume` page. On dark, amber text = `--color-fm` or `--color-fm-light`.

---

## 3. Surfaces & elevation

Four layers only. Depth = surface step + hairline + (occasional) glow.

| Layer | Token | When |
|---|---|---|
| **L0 Canvas** | `--color-surface-base` `#16212f` | page background (set on `<body>`) |
| **L1 Band** | `--color-surface-raised` `#1b2838` | full-bleed alternating sections to break rhythm |
| **L2 Card** | `--color-surface-card` `#25364a` | Featured / WhatIDo / stat cards / chips-on-card |
| **L3 Elevated** | `--color-surface-elevated` `#2c3e54` | card hover, the FM band body, popovers |

Rules:
- Cards sit on canvas/band with `border border-[color:var(--color-border-strong)]` (a hairline does most of the elevation work).
- No drop shadows for separation on dark. Hover may add a soft amber-tinted glow: `hover:shadow-[0_0_0_1px_var(--color-fm),0_8px_30px_-12px_rgba(242,165,60,0.25)]`.
- Glows are decorative blurred radial blobs (`blur-3xl opacity-15–25`), used sparingly (Hero, FM band, Contact) — same technique already in `FitnessMonkey.tsx`.
- Section dividers: 1px hairline `bg-[color:var(--color-border)]`, or the existing gradient-to-transparent rule beside H2s (recolor to navy hairline).

---

## 4. Spacing & layout

### Container
- **Primary container:** `max-w-5xl` (64rem / 1024px) — replaces today's `max-w-3xl`. Use `mx-auto px-6 md:px-8`.
- **Wide container** (optional, for big asymmetric sections): `max-w-6xl` (72rem / 1152px).
- **Reading measure for body copy:** `max-w-[68ch]` (≈ `max-w-2xl`). Body paragraphs never span the full 1024px — keep them in a constrained column even inside a wide grid.

> Change `app/page.tsx` `<main>` from `max-w-3xl` to `max-w-5xl` and let full-bleed bands break out (see §6).

### Vertical rhythm (section padding)
| Use | Class |
|---|---|
| Contained section | `py-20 md:py-28` |
| Full-bleed band | `py-24 md:py-32` |
| Hero | `min-h-[88vh]` flex-centered (keep) |
| Footer | `py-12` |

Within sections: heading→content gap `mb-10 md:mb-12`; paragraph stack `space-y-5`; card grid gap `gap-5 md:gap-6`.

### Grid approach for multi-column sections
- **Story:** 12-col → narrative `md:col-span-7` (reading measure) + stat band `md:col-span-5` (or stats as a full-width row beneath). Asymmetric.
- **Featured:** `grid sm:grid-cols-2 gap-5` for podcasts; press chips as wrap row.
- **WhatIDo:** `grid md:grid-cols-3 gap-6` (keep).
- **Experience:** `md:grid-cols-[1fr_3fr]` per item is optional; simplest is keep the single rail but widen the description to reading measure. Period/company on left meta column at `md:` if desired.
- **About:** `md:grid-cols-3` — prose `col-span-2`, skills `col-span-1` (keep).

---

## 5. Typography

Geist Sans throughout; Geist Mono only for the year/eyebrow micro-labels if a "data" feel is wanted (optional).

| Role | Size | Weight | Tracking | Color |
|---|---|---|---|---|
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl` | `font-bold` | `tracking-tight` `leading-[1.05]` | primary, key phrase in `--color-fm-light` |
| H2 (section) | `text-3xl md:text-4xl` | `font-bold` | `tracking-tight` | primary |
| H3 (card/role) | `text-lg md:text-xl` | `font-semibold` | normal | primary |
| Eyebrow / kicker | `text-xs sm:text-sm` | `font-semibold` | `uppercase tracking-[0.18em]` | `--color-fm-light` or muted |
| Body large (Story/FM) | `text-lg md:text-xl` | `font-normal` | `leading-relaxed` | secondary |
| Body | `text-base` | `font-normal` | `leading-relaxed` | secondary |
| Small / meta | `text-sm` | `font-medium` | normal | muted |
| Stat number | `text-4xl md:text-5xl` | `font-bold` | `tabular-nums` | primary |

Color usage on dark:
- Headings → `text-[color:var(--color-text-primary)]`.
- Body → `text-[color:var(--color-text-secondary)]`.
- Captions/labels/periods → `text-[color:var(--color-text-muted)]`.
- Emphasis inside body (names like *Dignifi*, *Fitness Monkey*): primary for tech, `--color-fm-light` for the FM brand specifically.

---

## 6. Section background rhythm

Goal: paced depth on an all-dark page. Alternate **canvas → band → canvas**, with two bold accent moments (FM = amber, Contact = blue/amber). Full-bleed bands use the existing `.full-bleed` helper.

| # | Section | Surface | Full-bleed? | Accent moment |
|---|---|---|---|---|
| — | `<body>` | `--color-surface-base` | — | — |
| 1 | **Hero** | canvas + amber/blue glow blobs (recolor existing) | no | amber key phrase + amber primary CTA |
| 2 | **Story** | canvas | no | stat band uses L2 cards w/ amber numbers optional |
| 3 | **Timeline** | **band** `--color-surface-raised`, full-bleed | **yes** | amber rail nodes |
| 4 | **Featured** | canvas | no | amber card hover borders |
| 5 | **WhatIDo** | **band** `--color-surface-raised`, full-bleed | **yes** | mixed: blue (Software) + amber (FM/Training) icon rings |
| 6 | **FitnessMonkey** | **elevated navy gradient band** (keep as-is, the boldest amber moment) | **yes** | **primary amber band — the anchor** |
| 7 | **About** | canvas | no | amber skill-group labels optional |
| 8 | **Experience** | canvas (or subtle band) | no | blue rail nodes (tech identity) |
| 9 | **Contact** | **band** with gradient `from navy-800 to accent/10`, rounded or full-bleed | optional | blue→amber, secondary accent moment |
| 10 | **Footer** | `--color-surface-footer` `#121a25` (deepest) | yes | muted text only |
| — | **/resume** | **LIGHT** page (see §9) — exception | — | navy headings, amber-dark links |

FM band stays the loudest: navy gradient + animated amber glow + amber CTA. Don't let any other section out-amber it; give neighbors (WhatIDo above, About below) calmer treatments so FM pops.

---

## 7. Component patterns

All states include `focus-visible` rings for keyboard accessibility. Standard ring:
`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface-base)]`.

### Primary button (amber)
```
inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
bg-[color:var(--color-fm)] text-[color:var(--color-fm-navy-dark)]
hover:bg-[color:var(--color-amber-hover)] active:bg-[color:var(--color-amber-press)]
transition-colors focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)]
focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface-base)]
```
(Text = navy-dark on amber = 6.8:1. This is the existing FM CTA — promote it to the global primary.)

### Secondary button (ghost / outline on dark)
```
inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium
border border-[color:var(--color-border-strong)] text-[color:var(--color-text-secondary)]
hover:border-[color:var(--color-fm)] hover:text-[color:var(--color-text-primary)]
hover:bg-white/5 transition-colors focus-visible:ring-2 ...
```
(Replaces the gray `border-gray-300` outline buttons and the dark/white "My Story" button. Drop the `bg-gray-900 dark:bg-white` invert pattern entirely.)

### Card (Featured / WhatIDo)
```
group flex flex-col h-full p-6 rounded-2xl
bg-[color:var(--color-surface-card)] border border-[color:var(--color-border-strong)]
hover:bg-[color:var(--color-surface-elevated)] hover:border-[color:var(--color-fm)]/60
hover:shadow-[0_10px_30px_-12px_rgba(242,165,60,0.25)]
transition-all focus-visible:ring-2 ...
```
- Card title → primary; blurb → secondary; CTA row → `--color-fm-light` with arrow `group-hover:translate-x-0.5`.
- Icon ring: `inline-flex w-12 h-12 items-center justify-center rounded-xl ring-1`; amber pillars → `text-[color:var(--color-fm)] ring-[color:var(--color-fm)]/40`; tech pillar → `text-[color:var(--color-accent-text)] ring-[color:var(--color-accent-text)]/40`.

### Chips / tags
- **Tag (Experience):** `px-3 py-1 text-xs font-medium rounded-full text-[color:var(--color-text-secondary)] bg-white/5 border border-[color:var(--color-border)]`.
- **Skill chip (About):** `px-3 py-1.5 text-sm font-medium rounded-lg text-[color:var(--color-text-secondary)] bg-[color:var(--color-surface-card)] hover:bg-[color:var(--color-surface-elevated)] transition-colors`.
- **Press chip (Featured "in print"):** outline style — `border border-[color:var(--color-border-strong)] hover:border-[color:var(--color-fm)]/60`.

### Timeline rail + node
- Rail: `border-l-2 border-[color:var(--color-border-strong)] group-hover:border-[color:var(--color-fm)]` (Story/Timeline) — use blue accent for **Experience** (`group-hover:border-[color:var(--color-accent-text)]`) to signal the tech chapter.
- Node: `absolute left-[-9px] w-4 h-4 rounded-full bg-[color:var(--color-surface-base)] border-2 border-[color:var(--color-border-strong)] group-hover:border-[color:var(--color-fm)] group-hover:bg-[color:var(--color-fm)]/25 transition-colors`.
- Year/eyebrow: `--color-fm-light`, uppercase tracking.

### Stat band (Story)
```
grid grid-cols-2 md:grid-cols-4 gap-4
[each] text-center px-4 py-6 rounded-2xl
bg-[color:var(--color-surface-card)] border border-[color:var(--color-border-strong)]
```
Number → `text-4xl font-bold tabular-nums text-[color:var(--color-text-primary)]`; label → muted. Optional: make the number `--color-fm-light` for one amber accent.

### Links / hover
- Inline body link: `font-medium text-[color:var(--color-accent-text)] hover:text-[color:var(--color-fm-light)] hover:underline underline-offset-2`.
- FM-brand link: `text-[color:var(--color-fm-light)] hover:opacity-80`.
- All links get `focus-visible:rounded-sm focus-visible:ring-2 ...`.

### Sticky header
- Top (unscrolled): `bg-transparent py-4`.
- Scrolled: `bg-[color:var(--color-surface-base)]/80 backdrop-blur-md border-b border-[color:var(--color-border)] py-3` (swap the white/80 + shadow).
- Nav links: muted → primary on hover; **FitnessMonkey** link stays `--color-fm-light`; active/`/resume` link primary.
- Logo "CS": `text-[color:var(--color-text-primary)]`.

### Icon treatment
- Default icons inherit `currentColor` at `--color-text-secondary`.
- Brand/social glyphs in FM band & contact: `text-[color:var(--color-fm)]`.
- Section accent icons: amber (lifestyle) vs `--color-accent-text` blue (tech).

---

## 8. Motion

Keep `ScrollReveal` (`opacity 0→1`, `y 30→0`, `0.6s easeOut`, `once`, `-50px` margin). It already reads well on dark.
- Stagger via the existing `delay={index * 0.05–0.1}` — keep subtle.
- `.animate-gradient` glow: keep the 12s pan but **lower opacity in this darker context** — `opacity-15` to `opacity-25` (FM band already at `opacity-20`; Hero blobs should drop from `opacity-50` to ~`opacity-25` and be recolored to amber/blue at low alpha so they read as glow, not haze).
- Respect `prefers-reduced-motion` (already handled for the gradient; Framer Motion honors it via the OS setting — no extra work needed, but avoid large `y` translations growing beyond 30px).
- Hover transitions: keep the global `transition` rule but it's heavy — consider scoping; at minimum keep card/button `transition-colors`/`transition-all` at default 200ms.

---

## 9. Light/dark toggle decision — RECOMMENDATION: **drop the toggle, ship one cohesive dark identity.**

Reasoning: the three committed decisions (dark-primary, immersive, premium public-figure feel) make dark *the brand*, not a preference. A second high-quality light theme doubles QA, dilutes the identity, and the amber/navy system was designed for dark — a light variant would need a parallel token set (amber-dark text, light surfaces, recomputed contrast) for little user value.

Token implications of dropping it:
- Define semantic tokens as **flat dark values** (as in §2) — *not* gated behind `.dark`. The site is dark unconditionally.
- Set `<body className="bg-[color:var(--color-surface-base)] text-[color:var(--color-text-secondary)]">` (remove `bg-white dark:bg-gray-900 …`).
- Remove the toggle button from `Header.tsx` and the theme `<Script>` in `layout.tsx` + the localStorage logic. You may keep `@variant dark` defined but unused, or delete it.
- Strip `dark:` variants from components — replace `gray-*`/`dark:gray-*` pairs with the semantic tokens. (This is the bulk of the restyle work.)

**Exception — `/resume`:** keep it **light** (white background, navy headings, `--color-fm-dark` #b5731a for links) for print/PDF and recruiter readability. It's a deliberate, standalone document, not part of the immersive scroll. Don't force dark there. This means resume can keep simple light styling with no token gymnastics; just ensure links use amber-dark (passes on white) not amber.

If the user later insists on a light mode for the homepage: re-introduce `.dark` as the default-on class and author a light token set, but treat it as a follow-up, not launch scope.

---

## 10. Implementation order (developer checklist)

1. **Tokens first.** Rewrite `@theme inline` in `app/globals.css` per §2. Keep `.full-bleed` and `.animate-gradient`. Add the navy scale + semantic + focus tokens.
2. **Body + layout primitive.** `app/layout.tsx`: remove theme `<Script>` and the `bg-white dark:bg-gray-900 …` body classes → set dark surface + secondary text + keep `overflow-x-hidden`. `app/page.tsx`: `max-w-3xl` → `max-w-5xl`.
3. **Header.** Remove toggle + dark logic; restyle sticky states per §7; widen nav container to `max-w-5xl`.
4. **Shared primitives.** Lock in button (primary/secondary), card, chip, timeline-node, and link classes as the canonical recipes (consider a tiny `cn` helper or local constants) before touching sections.
5. **Section by section, in page order:** Hero → Story → Timeline → Featured → WhatIDo → FitnessMonkey (lightest touch — only token-align) → About → Experience → Contact → footer. Apply §6 surface rhythm + §7 components. Strip all `dark:` / `gray-*` pairs.
6. **/resume.** Convert to a self-contained light page (§9 exception): white bg, navy headings, `--color-fm-dark` links. Verify print.
7. **QA pass:** contrast spot-check (§2 table), focus-visible on every interactive element, reduced-motion, and full-bleed.

### Risks / gotchas
- **`.full-bleed` + `overflow-x-hidden`:** the body already has `overflow-x-hidden`, which is what makes `width:100vw; margin-left:-50vw` safe (no horizontal scrollbar). **Keep `overflow-x-hidden` on `<body>`.** When you move `<main>` to `max-w-5xl`, full-bleed bands still break out to viewport width — verify on a wide monitor that bands span edge-to-edge and contained content stays at 1024px. With a vertical scrollbar present, `100vw` can be ~15px wider than content width; if you see a sliver of horizontal scroll, the `overflow-x-hidden` clips it — do not remove it.
- **Amber button contrast:** always pair amber `#f2a53c` with navy-dark `#1f2d3d` text (6.8:1). Never white text on amber (fails). Never amber-dark `#b5731a` on navy (fails) — that token is resume-only.
- **Muted text #8b97a6 (5.4:1):** fine for labels/meta/body; do **not** drop it below ~14px for long passages and don't use it for the smallest captions on the lighter card surfaces without re-checking (on `--color-surface-elevated` #2c3e54 it falls to ~3.6:1 — use `--color-text-secondary` for small text on cards).
- **Global `* { transition }` rule:** it animated dark-mode swaps; with the toggle gone it's now just overhead. Optionally scope transitions to interactive elements, but it's safe to leave.
- **Glow opacity:** the Hero blobs at `opacity-40/50` will look milky on dark — drop to ~`opacity-20–25` and recolor to amber/blue low-alpha, or they'll fight the FM band for attention.
- **Resume stays light** — don't let a global dark `<body>` token leak into it; `/resume` should set its own light background on its `<main>`/root.
