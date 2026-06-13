# Dosocket Agency Portfolio

A premium, high-performance web application built for the Dosocket product agency. The site utilizes cutting-edge web technologies to deliver an ultra-fast, statically generated experience paired with cinematic, physics-based animations.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation Engines:** 
  - [GSAP](https://gsap.com/) (ScrollTrigger, Timelines)
  - [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)
- **Deployment:** Vercel (Fully statically generated via SSG)

## 📁 Project Structure

The project follows a strict modular architecture to separate concerns and maximize Server Component usage:

```text
dosocket-demo/
├── src/
│   ├── app/                  # Next.js App Router (Pages, Layouts, CSS)
│   │   ├── about/
│   │   ├── contact/
│   │   ├── services/         # Dynamic SSG routes: /services/[slug]
│   │   ├── works/            # Dynamic SSG routes: /works/[slug]
│   │   └── layout.tsx        # Global shell and providers
│   ├── components/
│   │   ├── layout/           # Structural pieces (Header, Footer, SmoothScroll)
│   │   ├── sections/         # Large modular page blocks (Hero, Marquee, WorksGrid)
│   │   └── ui/               # Granular reusable bits (CustomCursor, Reveal)
│   └── lib/                  # Utilities and local CMS data
│       └── site-data.ts      # Hardcoded portfolio data
```

## 🛠️ Key Features

- **Custom Physics-Based Scroll:** Overrides native scrolling with Lenis momentum physics, mathematically synced to GSAP's `requestAnimationFrame` ticker.
- **Cinematic Animations:** 
  - Dynamic marquee that accelerates based on scroll velocity.
  - Custom SVG cursor with mathematically inverted background blending (`mix-blend-difference`).
  - Staggered, high-end blur reveals on hero typography.
  - Aggressive 150% parallax effects on background imagery.
- **Zero-Latency Navigation:** Heavily utilizes Next.js Server Components and `generateStaticParams()` to completely pre-render the application to static HTML at build time.

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment

This project is optimized for deployment on Vercel. Because it utilizes `generateStaticParams()`, a standard `npm run build` will pre-render every single route, resulting in blazing fast TTFB (Time to First Byte) in production.
