# PRD — Personal Portfolio Website
## Achmad Haidar Tamimi

**Version:** 2.0  
**Date:** 2026-08-09  
**Product:** Personal Software Developer Portfolio  
**Framework:** Next.js 16.3 + React 19 + TypeScript 5

---

# 1. Product Vision

Build a premium personal portfolio that positions Achmad Haidar Tamimi as a **Software Developer who builds digital systems and understands design, data, users, and business workflows**.

The website must balance two goals:

1. **Recruiter-first clarity**
   - A recruiter should understand Haidar's role, strongest experience, strongest projects, and contact options within seconds.
2. **Deep exploration**
   - Technical visitors should be able to explore project context, contribution, implementation, design, and outcomes.

Core principle:

> **Easy to scan. Rewarding to explore.**

The website should feel like a polished digital product, not a CV converted into HTML.

---

# 2. Professional Positioning

## Primary positioning

**Software Developer**

Supporting positioning:

> Building systems. Designing experiences.

Longer positioning:

> A software developer interested in building practical digital products at the intersection of engineering, design, and data.

The portfolio should NOT position Haidar exclusively as:
- a frontend developer,
- AI engineer,
- designer,
- or student.

Instead, it should communicate breadth while keeping **software development** as the primary identity.

---

# 3. Source Profile

The current CV establishes the following professional foundation:

- Informatics student at Universitas Amikom Yogyakarta
- GPA: 3.81 / 4.00
- Fullstack Developer Intern at Dinas Komunikasi dan Informasi Provinsi Jawa Tengah
- IT Manager experience
- Teaching Assistant experience
- HIPMI Amikom design/PDD experience
- Creative Coordinator experience
- Fullstack/internal systems experience
- AI/ML project experience
- Client-facing web projects
- IoT project experience
- Design and visual communication experience

Featured projects:
1. Esensi
2. Skin Checker AI
3. SaliwangCatering
4. WanaJonggolPark

Additional projects:
5. Smart Parking System
6. GasCare

Technical areas:
- Laravel
- PHP
- Node.js
- Python
- TensorFlow
- Flutter
- JavaScript
- Tailwind CSS
- HTML/CSS
- MySQL
- SQL
- Git
- Figma
- Postman
- VS Code
- Google Colab
- Ubuntu

---

# 4. Target Audience

## A. Recruiter / HR

### Primary question
"Who is this candidate and what can he do?"

### Must find quickly
- Name
- Software Developer role
- Professional summary
- Strongest project
- Experience
- Skills
- CV
- Contact

### Desired action
- Download CV
- Open LinkedIn
- Contact via email

---

## B. Technical Interviewer

### Primary question
"How does he actually build things?"

### Must find
- Project context
- Problem
- Personal contribution
- Technical stack
- Implementation
- Result
- Live demo/GitHub where available

### Desired action
- Open case study
- Inspect project
- Open GitHub/live project

---

## C. Potential Client / General Visitor

### Primary question
"What can this person build for me?"

### Must find
- Visual project examples
- Business problem
- Solution
- Result
- Contact

---

# 5. Information Architecture

```text
HOME
│
├── Hero
├── Metrics
├── Selected Work
│   ├── Esensi
│   ├── Skin Checker AI
│   ├── SaliwangCatering
│   └── WanaJonggolPark
│
├── Additional Projects
│   ├── Smart Parking
│   └── GasCare
│
├── About
├── Experience
├── Skills
├── Beyond Code
└── Contact
```

Optional future routes:

```text
/work
/work/[slug]
```

---

# 6. Navigation

Desktop:

```text
HAIDAR                 WORK  ABOUT  EXPERIENCE       CV
```

Mobile:
- Logo/name
- Menu trigger
- CV remains easy to access

Requirements:
- Sticky navigation
- Smooth section navigation
- Active section indication where useful
- CV CTA always accessible
- No oversized navbar

---

# 7. Homepage Hero

## Required content

The hero must communicate:
- Identity
- Role
- Value proposition
- CTA

Recommended headline:

> **BUILDING SYSTEMS.  
> DESIGNING EXPERIENCES.**

Supporting copy:

> I'm Haidar — an Informatics student and software developer interested in building practical digital products across engineering, design, and data.

Actions:

**Primary:** View Work  
**Secondary:** Download CV

Metadata:

> Yogyakarta, Indonesia · Available for opportunities

---

# 8. Hero Interaction

The hero may use a subtle interactive background.

### Required effects

1. Dot/grid background
2. Mouse-following spotlight
3. Text entrance animation
4. CTA micro-interaction

### Interaction principle

The cursor should influence the background subtly.

Example behavior:

```text
Mouse position
      ↓
Local spotlight
      ↓
Nearby dots become slightly more visible
```

The dots should NOT physically chase the cursor.

The effect should feel like:
- ambient,
- technical,
- premium,
- restrained.

---

# 9. Metrics

Display only credible, useful proof points.

Recommended:

```text
3+          6+          3.81
YEARS       PROJECTS    GPA
EXPERIENCE  SHIPPED     / 4.00
```

The metrics must not dominate the hero.

---

# 10. Selected Work

This is the primary conversion section.

## Project priority

### 01 — Esensi
**Internal Event Management System**

Technology:
- Laravel
- Flutter
- MySQL

Key story:
- Existing system modernization
- Laravel 7 → 11 migration
- Flutter modernization
- UI/UX redesign
- Digital attendance
- Role-based management
- Material distribution
- Account/institution/speaker modules
- Real-world organizational deployment

This is the strongest featured case study.

---

### 02 — Skin Checker AI
**AI / Machine Learning Product**

Technology:
- TensorFlow
- Python
- Gradio
- Hugging Face

Key story:
- CNN-based image classification
- Facial skin type prediction
- Real-time user interaction
- Deployed AI product

---

### 03 — SaliwangCatering
**Business Website**

Technology:
- HTML
- Tailwind CSS

Key story:
- Client requirement → web solution
- Mobile optimization
- Menu/service presentation
- WhatsApp-based inquiry flow
- Live client deployment

---

### 04 — WanaJonggolPark
**Reservation Website**

Technology:
- HTML
- Tailwind CSS

Key story:
- Reservation flow
- Tourism/restaurant information
- Mobile-first design
- Lightweight implementation

---

# 11. Additional Projects

Secondary presentation:

### Smart Parking
ESP32 · Ultrasonic Sensor · Web Dashboard

### GasCare
ESP32 · MQ-2 · Load Cell

These should demonstrate:
- IoT
- Sensor integration
- Data flow
- System thinking

They should not compete visually with the main projects.

---

# 12. Project Detail Model

Every case study should answer:

```text
WHAT IS IT?
WHY WAS IT NEEDED?
WHAT DID I DO?
HOW DID I BUILD IT?
WHAT HAPPENED AFTERWARD?
```

Recommended sections:

```text
01 / CONTEXT
02 / PROBLEM
03 / APPROACH
04 / MY CONTRIBUTION
05 / IMPLEMENTATION
06 / RESULT
07 / REFLECTION
```

Optional:
- Architecture
- UI/UX process
- Before/after
- Screenshots
- Live demo
- GitHub
- Figma

---

# 13. About

The About section should add personality and professional philosophy rather than repeat the CV.

Core message:

> I enjoy turning messy problems into structured digital systems.

Supporting idea:

> My interests sit between software engineering, design, and data.

Optional visual:
- portrait
- workspace
- design work
- subtle personal visual

---

# 14. Experience

Use compact timeline presentation.

Priority:
1. Diskominfo Jawa Tengah — Fullstack Developer Intern
2. Darussalam Printing and Publishing — IT Manager
3. HIPMI Amikom — PDD
4. National Seminar — Creative Coordinator
5. Teaching Assistant

Default state:
- Year
- Organization
- Position
- One-line summary

Expanded state:
- 2–4 relevant impact bullets

---

# 15. Skills

Group skills by function.

```text
DEVELOPMENT
Laravel · PHP · Node.js · Python

FRONT-END
Flutter · JavaScript · Tailwind CSS · HTML/CSS

DATA
TensorFlow · Pandas · NumPy · SQL

DATABASE
MySQL · SQL

TOOLS
Git · Figma · Postman · VS Code · Google Colab · Ubuntu
```

Do not use percentage/progress bars.

---

# 16. Beyond Code

Show design/visual capabilities:
- Poster
- UI/UX
- Branding
- Social media
- Event visual
- Digital art
- Photography where relevant

Purpose:

> Reinforce that the developer also understands visual communication and user experience.

This should be image-led and text-light.

---

# 17. Contact

Primary closing statement:

> **LET'S BUILD SOMETHING USEFUL.**

Actions:
- Email
- LinkedIn
- GitHub
- CV

EmailJS can be used for an optional contact form.

The contact form is secondary to direct contact links.

---

# 18. Technology Stack

## Core

- Next.js 16.3.0
- App Router
- Turbopack
- React 19.2.8
- TypeScript 5

## Styling

- Tailwind CSS v4
- clsx
- tailwind-merge

## Motion

- Motion / Framer Motion
- Aceternity UI patterns/components where appropriate

## Icons

- Lucide React

## Contact

- @emailjs/browser

## Tooling

- ESLint 9
- Git/GitHub

## Platform

- Vercel recommended

---

# 19. Aceternity UI Usage Policy

Aceternity UI should enhance the portfolio, not define the portfolio.

## Approved use

- Dot background
- Grid background
- Spotlight
- Mouse-following spotlight
- Text reveal
- Subtle moving border
- Carefully selected interactive effects

## Avoid

- Every card using 3D hover
- Excessive glowing borders
- Multiple particle systems
- Heavy WebGL effects
- Every section using a different animation
- Effects that distract from project screenshots

Principle:

> **Aceternity is seasoning, not the main dish.**

---

# 20. Functional Requirements

### FR-01 Responsive
Desktop, tablet, mobile.

### FR-02 Navigation
Sections/routes are accessible through navigation.

### FR-03 CV
Open/download current CV.

### FR-04 Project links
Live links open correctly.

### FR-05 Case studies
Featured projects support detailed content.

### FR-06 Contact
Email, LinkedIn, GitHub and optional EmailJS form.

### FR-07 Accessibility
Semantic HTML, keyboard navigation, focus states, alt text, sufficient contrast, reduced motion.

### FR-08 SEO
Metadata, Open Graph, semantic headings, sitemap/robots where appropriate.

### FR-09 Image optimization
Use Next.js Image for project visuals.

### FR-10 Performance
Avoid unnecessary client components and heavy animation.

---

# 21. Next.js Architecture Requirements

Prefer Server Components by default.

Use Client Components only when required for:
- Motion
- Mouse interaction
- Navigation state
- Contact form
- Interactive UI

Recommended structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── work/
│       ├── page.tsx
│       └── [slug]/
│           └── page.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   ├── ui/
│   └── motion/
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
│
├── lib/
│   └── utils.ts
│
└── public/
    ├── images/
    ├── projects/
    └── cv/
```

---

# 22. Data-Driven Content

Project cards should consume structured data.

Example:

```ts
{
  number: "01",
  title: "Esensi",
  category: "Internal Event Management System",
  year: "2025",
  description: "...",
  technologies: ["Laravel", "Flutter", "MySQL"],
  image: "/projects/esensi.webp",
  featured: true,
  links: {
    live: "..."
  }
}
```

This allows future projects to be added without rebuilding UI components.

---

# 23. Motion Requirements

Motion should communicate hierarchy and interaction.

### Entrance
- Fade
- Small vertical reveal
- Stagger

### Hover
- Image scale: approximately 1.02
- Arrow movement
- Subtle text/metadata emphasis

### Hero
- Text reveal
- Spotlight
- Dot response

### Scroll
- Section reveal where useful

Avoid:
- Long transitions
- Constant movement
- Scroll hijacking
- Animation that blocks content

---

# 24. Performance Requirements

Target:
- Fast initial load
- Minimal JavaScript
- Optimized images
- Lazy-load below-fold media
- Server-render static content where possible
- Keep interactive components isolated

Do not add a library unless its value is clear.

---

# 25. Accessibility

Must support:
- Keyboard navigation
- Focus states
- Reduced motion
- Screen-reader labels
- Semantic HTML
- Good contrast
- 44px minimum touch targets
- No hover-only information

---

# 26. SEO

Required:
- Title
- Description
- Open Graph image
- Canonical URL
- Semantic H1/H2 hierarchy
- Sitemap
- Robots configuration

Project pages should have unique metadata.

---

# 27. MVP

## Must have
- Hero
- Dot/spotlight background
- Metrics
- Featured work
- Additional projects
- About
- Experience
- Skills
- Contact
- CV
- Responsive design
- SEO
- Accessibility

## Should have
- Case study pages
- Project data model
- Subtle Motion animations
- Aceternity effects
- Design gallery

## Could have
- Dark/light theme
- Command palette
- Blog
- More interactive architecture visuals

## Won't have in V1
- Authentication
- CMS
- Admin dashboard
- Complex backend
- Full WebGL experience
- Excessive 3D effects

---

# 28. Acceptance Criteria

- [ ] Role is understandable within 5 seconds.
- [ ] Hero communicates identity and value.
- [ ] CV is immediately accessible.
- [ ] Esensi is visually prioritized.
- [ ] Each featured project explains problem, contribution, stack, and result.
- [ ] Project screenshots are real and optimized.
- [ ] Mouse effects remain subtle.
- [ ] Aceternity components do not overwhelm the content.
- [ ] Site works without hover on mobile.
- [ ] Navigation works on all screen sizes.
- [ ] Contact methods are obvious.
- [ ] Website remains fast.
- [ ] Content is faithful to actual experience.
