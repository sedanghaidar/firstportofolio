# DESIGN SYSTEM — Personal Portfolio
## Achmad Haidar Tamimi

**Version:** 2.0  
**Date:** 2026-08-09  
**Design direction:** Minimalist Editorial × Premium Developer × Technical

---

# 1. Design Philosophy

The portfolio should feel like:

> **A developer portfolio designed by someone who actually cares about design.**

The visual identity combines:
- Editorial typography
- Premium product design
- Technical metadata
- Real project imagery
- Restrained interactive effects

Primary keywords:

**Clean · Bold · Quiet · Technical · Editorial · Human · Fast**

Avoid:

**Template-like · Cyberpunk · Gamer · SaaS-dashboard · Animation-heavy · Generic AI portfolio**

---

# 2. Core Visual Direction

Default theme: **Dark**

The primary visual should be dark charcoal rather than pure black.

Recommended base:

```text
Background: #0A0A0A
Surface:    #111111
Text:       #F5F5F5
Muted:      #8A8A8A
Border:     #242424
Accent:     #8B7CFF
```

Accent color is intentionally restrained.

Use accent for:
- Interactive states
- Small highlights
- Active navigation
- CTA emphasis
- Spotlight

Do not use accent as the dominant page color.

---

# 3. Optional Light Theme

If light mode is implemented:

```text
Background: #F5F4F0
Surface:    #FFFFFF
Text:       #111111
Muted:      #666666
Border:     #D8D7D2
Accent:     #7A5CFF
```

Light mode should be optional and must not delay V1.

---

# 4. Typography

Use `next/font` for local/framework-managed font loading.

Recommended:

### Display
**Manrope**

For:
- Hero
- Section headings
- Project titles
- Large metrics

### Body
**Inter**

For:
- Paragraphs
- Navigation
- Buttons
- Supporting text

### Technical
**IBM Plex Mono**

For:
- Project numbers
- Metadata
- Categories
- Years
- Technology labels

---

# 5. Typography Scale

## Desktop

```text
Hero             88–120px
Section heading  56–72px
Project title    48–72px
Metric           56–80px
Large body       20–24px
Body             16–18px
Small            13–14px
Mono             11–13px
```

## Mobile

```text
Hero             48–64px
Section heading  40–48px
Project title    34–44px
Body             16–17px
Small            12–13px
```

The hero should be allowed to wrap naturally rather than forcing a single line.

---

# 6. Grid

## Desktop

12-column layout.

```text
Max width: 1280–1400px
Horizontal padding: 40–64px
Column gap: 20–32px
```

## Tablet

8 columns.

## Mobile

4 columns.

```text
Horizontal padding: 20px
```

All major sections should share the same container alignment.

---

# 7. Spacing

Base unit: 8px.

```text
8
16
24
32
40
48
64
80
96
120
160
```

Recommended section spacing:

Desktop:
**120–180px**

Mobile:
**80–100px**

Whitespace is a core visual element.

---

# 8. Navigation

Desktop:

```text
┌──────────────────────────────────────────────────────┐
│ HAIDAR             WORK  ABOUT  EXPERIENCE       CV │
└──────────────────────────────────────────────────────┘
```

Behavior:
- Sticky
- Transparent at top
- Subtle blurred/dark surface after scroll
- Thin border after scroll
- Smooth section navigation

CV should be the strongest navigation action.

Mobile:
- Logo/name
- Menu
- CV action

---

# 9. Hero Composition

Hero height:

**80–95vh**

Layout:

```text
┌──────────────────────────────────────────────────────┐
│                                                      │
│  SOFTWARE DEVELOPER                                  │
│                                                      │
│  BUILDING SYSTEMS.                                   │
│  DESIGNING EXPERIENCES.                              │
│                                                      │
│  I'm Haidar — an Informatics student and software    │
│  developer interested in building practical          │
│  digital products across engineering, design,        │
│  and data.                                           │
│                                                      │
│  [ VIEW WORK ]    [ DOWNLOAD CV ]                    │
│                                                      │
│                                      SCROLL ↓        │
└──────────────────────────────────────────────────────┘
```

The headline is the primary visual object.

---

# 10. Hero Background — Dot Pattern

Use a very subtle dot/grid pattern.

Desired appearance:

```text
·   ·   ·   ·   ·   ·   ·
  ·   ·   ·   ·   ·   ·
·   ·   ·   ·   ·   ·   ·
  ·   ·   ·   ·   ·   ·
```

Base opacity:
**approximately 5–10%**

Dots must remain subordinate to typography.

---

# 11. Mouse-Following Spotlight

This is one of the main interactive effects.

## Behavior

The pointer creates a soft local spotlight around its position.

Concept:

```text
                cursor
                  ↓

          · · · · ◉ · · · ·
          · · · ◉ ◉ ◉ · · ·
          · · ◉ ◉ ◉ ◉ ◉ · ·
          · · · ◉ ◉ ◉ · · ·
          · · · · ◉ · · · ·
```

The dots do not move.

Only:
- opacity,
- brightness,
- or background radial-gradient

changes near the pointer.

## Technical behavior

Use pointer coordinates:

```text
--mouse-x
--mouse-y
```

and a CSS radial gradient or motion value.

The effect should have:
- soft edges
- low opacity
- no cursor trail
- no laggy physics

Disable or simplify on touch devices.

---

# 12. Aceternity UI Integration

Aceternity-style components are allowed selectively.

Recommended:
- Dot Background
- Background Grid
- Spotlight
- Text Reveal
- Subtle Moving Border

Do not use all of them simultaneously.

### Rule

> One section should have one dominant visual effect.

Example:

Hero:
**Dot + Spotlight**

Project section:
**Image hover**

Contact:
**Subtle text/CTA motion**

This keeps the design coherent.

---

# 13. Hero Animation

Use Motion.

Sequence:

```text
0ms       Label
150ms     Headline line 1
250ms     Headline line 2
400ms     Description
550ms     CTA
700ms     Metadata
```

Animation:
- opacity: 0 → 1
- y: 20px → 0

Duration:
**400–700ms**

Use gentle easing.

---

# 14. Metrics

Layout:

```text
3+              6+              3.81
YEARS           PROJECTS        GPA
EXPERIENCE      SHIPPED         / 4.00
```

Use:
- Large Manrope number
- Small IBM Plex Mono label
- Thin divider

Avoid individual cards.

---

# 15. Section Headings

Pattern:

```text
01 / SELECTED WORK

Selected
work.
```

or:

```text
SELECTED WORK
```

Keep section numbering small and technical.

---

# 16. Featured Project — Esensi

This is the strongest visual project.

Composition:

```text
01 / INTERNAL SYSTEM
2025

ESENSI
Internal Event Management System

┌──────────────────────────────────────────────┐
│                                              │
│               LARGE IMAGE                   │
│                                              │
└──────────────────────────────────────────────┘

Laravel · Flutter · MySQL

Modernizing an internal event management
system into a more structured digital workflow.

VIEW CASE STUDY →
```

Image should occupy most of the visual weight.

---

# 17. Project Layout Hierarchy

## Featured

One large project.

## Secondary

Two-column layout.

```text
┌──────────────────────┐  ┌──────────────────────┐
│ SKIN CHECKER AI      │  │ SALIWANG CATERING    │
│                      │  │                      │
│ [ IMAGE ]            │  │ [ IMAGE ]            │
│                      │  │                      │
└──────────────────────┘  └──────────────────────┘
```

Then:

```text
┌──────────────────────────────────────────────┐
│ WANAJONGGOL PARK                            │
│ [ LARGE IMAGE ]                              │
└──────────────────────────────────────────────┘
```

The exact asymmetry can be adjusted during implementation.

---

# 18. Project Card

Structure:

```text
01 / CATEGORY
2025

PROJECT TITLE

Short description.

TECH · TECH · TECH

VIEW CASE STUDY →
```

Keep metadata small.

Project title should dominate.

---

# 19. Project Hover

Desktop:

```text
Image scale:
1.00 → 1.02

Arrow:
x 0 → 4px

Overlay:
very subtle

Transition:
300–450ms
```

No giant glow.

No 3D tilt by default.

No cursor-following project cards.

---

# 20. Case Study Page

Hero:

```text
01 / CASE STUDY

ESENSI

Internal Event Management System

Laravel · Flutter · MySQL
```

Then a large project image.

Content order:

```text
01 / CONTEXT
02 / PROBLEM
03 / APPROACH
04 / MY CONTRIBUTION
05 / IMPLEMENTATION
06 / RESULT
07 / REFLECTION
```

---

# 21. Case Study Visual Language

Use:
- Large screenshots
- Horizontal rules
- Numbered sections
- Technical labels
- Short paragraphs
- Architecture diagrams where valuable

Avoid:
- Card for every paragraph
- Excessive rounded containers
- Walls of text

---

# 22. About Section

Large statement:

> I like turning messy problems into structured digital systems.

Supporting copy:

> My interests sit somewhere between software engineering, design, and data.

Layout:

```text
ABOUT

I like turning messy problems
into structured digital systems.

                         [IMAGE]

Short biography...
```

A portrait is optional.

The content must remain professional.

---

# 23. Experience Timeline

Visual:

```text
2025
●──── FULLSTACK DEVELOPER INTERN
│     Diskominfo Jawa Tengah
│
2024
●──── CREATIVE COORDINATOR
│     National Seminar
│
2024
●──── PDD DIVISION
│     HIPMI Amikom
│
2022
●──── IT MANAGER
      Darussalam Printing
```

Use a thin line and small dot.

No large cards.

---

# 24. Skills

Visual hierarchy:

```text
DEVELOPMENT

Laravel   PHP   Node.js   Python


FRONT-END

Flutter   JavaScript   Tailwind CSS


DATA

TensorFlow   Pandas   NumPy   SQL


TOOLS

Git   Figma   Postman   VS Code
```

Tags may use subtle borders.

Avoid excessive pill UI.

---

# 25. Beyond Code

Image-led section.

Potential grid:

```text
┌──────────────┐ ┌───────────────────┐
│ POSTER       │ │ UI DESIGN         │
│              │ │                   │
└──────────────┘ └───────────────────┘

┌──────────────────────────────┐
│ EVENT / BRANDING             │
└──────────────────────────────┘
```

Use horizontal scrolling on mobile if appropriate.

---

# 26. Contact

Closing hero:

```text
LET'S BUILD
SOMETHING
USEFUL.
```

Links:

```text
EMAIL →
LINKEDIN →
GITHUB →
DOWNLOAD CV →
```

Optional EmailJS form can appear below or beside the direct links.

The form should never become the dominant CTA.

---

# 27. Buttons

Primary:

```text
VIEW WORK →
```

Secondary:

```text
DOWNLOAD CV
```

Style:
- Strong typography
- Compact
- Clear hover state
- 44px minimum touch target

Possible hover:
- arrow movement
- subtle background shift
- no excessive glow

---

# 28. Border Radius

Use restrained radius:

```text
Small: 8px
Medium: 12px
Large: 16px
```

Buttons may use:
- 8px
- or pill shape for selected CTAs

Do not round everything.

---

# 29. Borders

Primary border:

```text
rgba(255,255,255,0.08)
```

Secondary border:

```text
rgba(255,255,255,0.04)
```

Borders should be visible but quiet.

---

# 30. Shadows

Use shadows sparingly.

Prefer:
- border
- contrast
- whitespace
- surface separation

over heavy shadows.

---

# 31. Icons

Use Lucide React.

Primary icons:
- ArrowRight
- ExternalLink
- Download
- Mail
- Github
- Linkedin
- Menu
- X

Icons should clarify actions.

Do not place icons beside every piece of metadata.

---

# 32. Motion System

Use Motion / Framer Motion.

Create reusable motion primitives:

```text
FadeIn
RevealText
StaggerContainer
StaggerItem
ImageReveal
```

This avoids writing custom animation logic repeatedly.

---

# 33. Motion Rules

### Entrance

Opacity:
`0 → 1`

Y:
`20px → 0`

### Image reveal

Clip/scale reveal.

### Hover

Scale:
`1 → 1.02`

### CTA

Arrow:
`0 → 4px`

### Section reveal

Only where useful.

Do not animate every text block.

---

# 34. Reduced Motion

When:

```css
prefers-reduced-motion: reduce
```

disable:
- large transforms
- parallax
- cursor effects
- complex entrance sequences

Keep content immediately visible.

---

# 35. Mobile

Mobile must not depend on desktop effects.

Rules:
- No hover-only content
- No cursor spotlight
- Single-column project flow
- Full-width images
- 20px horizontal padding
- Large but controlled typography
- Sticky navigation
- Easy CV access

---

# 36. Responsive Project Behavior

Desktop:
- asymmetric editorial layout

Tablet:
- simplified two-column layout

Mobile:
- one column

Example:

```text
DESKTOP
[ LARGE ] [ SMALL ]

MOBILE
[ LARGE ]
[ SMALL ]
```

---

# 37. Loading Strategy

No splash screen.

Preferred:

```text
Page request
↓
Server-render content
↓
Images load progressively
↓
Motion enhances already-visible content
```

Do not make users wait for an animated logo.

---

# 38. Image Direction

Use real project screenshots wherever possible.

Recommended formats:
- WebP
- AVIF where supported

Recommended ratios:
- Featured: 16:9
- Secondary: 4:3 / 3:2
- UI detail: native aspect ratio

Avoid:
- Generic stock images
- Excessive laptop mockups
- Fake 3D scenes
- Decorative images unrelated to work

---

# 39. Design Tokens

```css
:root {
  --bg: #0A0A0A;
  --surface: #111111;
  --surface-2: #151515;

  --text: #F5F5F5;
  --muted: #8A8A8A;

  --border: rgba(255,255,255,0.08);
  --border-subtle: rgba(255,255,255,0.04);

  --accent: #8B7CFF;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 120px;
}
```

---

# 40. Component Architecture

Recommended:

```text
components/
├── layout/
│   ├── Navbar
│   └── Footer
│
├── sections/
│   ├── Hero
│   ├── Metrics
│   ├── SelectedWork
│   ├── About
│   ├── Experience
│   ├── Skills
│   ├── BeyondCode
│   └── Contact
│
├── projects/
│   ├── ProjectCard
│   ├── FeaturedProject
│   ├── ProjectMeta
│   └── ProjectLinks
│
├── ui/
│   ├── Button
│   ├── SectionHeading
│   ├── Spotlight
│   ├── DotBackground
│   └── MagneticButton
│
└── motion/
    ├── FadeIn
    ├── RevealText
    ├── StaggerContainer
    └── ImageReveal
```

---

# 41. Client Component Strategy

Keep most components as Server Components.

Use `"use client"` only for:
- Mouse spotlight
- Motion components
- Mobile navigation state
- EmailJS form
- Interactive project UI

This keeps the JavaScript payload controlled.

---

# 42. Data Architecture

Projects should live outside components.

Example:

```ts
export const projects = [
  {
    number: "01",
    title: "Esensi",
    category: "Internal Event Management System",
    year: "2025",
    description: "...",
    technologies: [
      "Laravel",
      "Flutter",
      "MySQL"
    ],
    image: "/projects/esensi.webp",
    featured: true,
    links: {
      live: "..."
    }
  }
]
```

Components render the data.

---

# 43. Accessibility

Requirements:
- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Focus-visible states
- Alt text
- Accessible buttons
- 44px touch targets
- Reduced-motion support
- Contrast-conscious colors

The visual effects must never reduce usability.

---

# 44. Performance

Rules:
- Use Next.js `Image`
- Lazy-load below-fold images
- Avoid giant unoptimized screenshots
- Keep Motion components isolated
- Avoid unnecessary client rendering
- Avoid large background videos
- Avoid heavy 3D libraries

Performance is part of the design quality.

---

# 45. Visual Priority

The page must communicate in this order:

```text
1. WHO IS HAIDAR?
2. WHAT DOES HE BUILD?
3. WHAT HAS HE BUILT?
4. WHERE HAS HE WORKED?
5. WHAT CAN HE DO?
6. WHAT MAKES HIM DIFFERENT?
7. HOW DO I CONTACT HIM?
```

Not:

```text
1. Animation
2. Technology
3. Profile photo
4. Decorative effects
5. Content
```

---

# 46. Final Art Direction

The final experience should feel:

> **Quietly impressive.**

Not loud.

Not overloaded.

The strongest design elements are:

**Typography + whitespace + real work + subtle interaction + clear hierarchy.**

Aceternity and Motion should make the site feel alive, but the portfolio should remain impressive even if all animation is disabled.

That is the final design test:

> **If the animations disappeared, would the portfolio still look excellent?**

If yes, the design is working.
