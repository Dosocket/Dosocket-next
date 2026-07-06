"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";
import { services, projects } from "@/lib/site-data";

/**
 * SECTION 1 — Immersive Typography & Sequential Back-Reveal Hero
 * ----------------------------------------------------------------------------
 * A tall scroll-track pins the massive "SERVICES" wordmark. Each image gets its
 * OWN exclusive slice of the scroll timeline, so they reveal strictly ONE AFTER
 * ANOTHER: an image blooms from center (behind the wordmark), flies out to a
 * specific screen edge / corner, and vanishes there — then the next one begins.
 *
 * To re-order or re-aim the cascade, edit HERO_LAYERS. Each layer's active
 * window is computed automatically from its index, so adding/removing an image
 * re-slices the timeline evenly.
 */

// Total scroll distance the hero occupies. Higher = each image lingers longer.
const SCROLL_TRACK_VH = 420;

// Spring smoothing for position/scale. Kept fairly stiff so each card completes
// its travel within its (short) exclusive window. Lower stiffness = more lag.
const SPRING = { stiffness: 90, damping: 24, mass: 0.5 } as const;

type Layer = {
  src: string;
  alt: string;
  // Final destination from center, in px — a screen edge or corner. Large enough
  // that the card exits the viewport as it fades. Cards travel in a straight line
  // from center to this point (no rotation).
  x: number;
  y: number;
};

/**
 * 6 layers. Destinations trace the perimeter so no two images exit the same way:
 * bottom-left corner → right-middle edge → top-right corner → top-left corner →
 * top-middle edge → bottom-right corner. (Order = reveal order.)
 */
const HERO_LAYERS: Layer[] = [
  { src: services[0].image, alt: services[0].title, x: -820, y: 470 }, // ↙ bottom-left corner
  { src: services[1].image, alt: services[1].title, x: 1020, y: 0 },   // → right-middle edge
  { src: services[2].image, alt: services[2].title, x: 840, y: -480 }, // ↗ top-right corner
  { src: services[3].image, alt: services[3].title, x: -840, y: -480 },// ↖ top-left corner
  { src: services[4].image, alt: services[4].title, x: 0, y: -580 },   // ↑ top-middle edge
  { src: projects[0].cover, alt: projects[0].title, x: 840, y: 470 },  // ↘ bottom-right corner
];

export function ServicesHero() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Wordmark stays as the anchor the images emerge from; only a gentle breathing
  // scale so it never feels static. Subtext leaves once scrolling commits.
  const headlineScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.08]),
    SPRING,
  );
  const subOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.28], [1, 1, 0]),
    SPRING,
  );
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section
      ref={trackRef}
      className="relative bg-background"
      style={{ height: `${SCROLL_TRACK_VH}vh` }}
    >
      {/* Pinned stage. perspective gives the emerging cards a touch of depth. */}
      <div
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* Soft light-mode depth: neutral vignette only (no colour tint). */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_40%,rgba(0,0,0,0.04)_100%)]" />

        {/* ---------- IMAGE LAYER (each card emerges from center, z-0) ---------- */}
        <div
          className="absolute inset-0 grid place-items-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {HERO_LAYERS.map((layer, i) => (
            <HeroCard
              key={i}
              layer={layer}
              index={i}
              total={HERO_LAYERS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* ---------- WORDMARK + SUBTEXT (anchor above the cards, z-10) ---------- */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <motion.h1
            style={{ scale: headlineScale }}
            className="font-display font-bold uppercase leading-[0.85] tracking-tighter text-foreground"
          >
            <span
              className="block"
              // clamp(min, fluid, max): prominent but no longer oversized.
              style={{ fontSize: "clamp(2.5rem, 12vw, 8rem)" }}
            >
              Services
            </span>
          </motion.h1>

          <motion.p
            style={{ opacity: subOpacity }}
            className="mt-8 max-w-2xl text-[11px] font-medium uppercase leading-relaxed tracking-[0.25em] text-muted-foreground sm:text-sm sm:tracking-[0.3em]"
          >
            We have the skill to shape what&apos;s next. Brand, product, and
            technology expertise — all under one roof.
          </motion.p>
        </div>

        {/* ---------- SCROLL HINT ---------- */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-foreground/20 p-1">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-foreground"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * A single card. It is ONLY active during its exclusive scroll window
 * [index/total → (index+1)/total]; outside that window its opacity is 0, so the
 * reveal is strictly sequential.
 */
function HeroCard({
  layer,
  index,
  total,
  progress,
}: {
  layer: Layer;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { x, y } = layer;

  // This card's slice of the timeline.
  const w = 1 / total;
  const start = index * w;
  const end = start + w;
  // Bloom at center for the first ~30% of the slice, then fly to the edge.
  const hold = start + w * 0.3;
  // Fade in over the first 14%, fade out over the last 26% (vanishing at the edge).
  const fadeIn = start + w * 0.14;
  const fadeOut = end - w * 0.26;

  // Position: hold near center, then travel to the assigned edge/corner.
  const tx = useSpring(
    useTransform(progress, [start, hold, end], [0, x * 0.06, x]),
    SPRING,
  );
  const ty = useSpring(
    useTransform(progress, [start, hold, end], [0, y * 0.06, y]),
    SPRING,
  );
  // Scale: small behind the wordmark → full at center → larger toward the viewer.
  const scale = useSpring(
    useTransform(progress, [start, hold, end], [0.4, 1, 1.7]),
    SPRING,
  );
  // Opacity is NOT sprung, so visibility timing stays crisp and one-at-a-time.
  const opacity = useTransform(
    progress,
    [start, fadeIn, fadeOut, end],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      // gridArea 1/1 stacks every card in the same centered cell; motion x/y then
      // sends it straight out from that shared origin behind the wordmark.
      style={{ gridArea: "1 / 1", x: tx, y: ty, scale, opacity }}
      className="relative"
    >
      {/* CARD SIZE: tune w / max-w / aspect to reshape the flying tiles. */}
      <div className="relative aspect-[16/11] w-[58vw] max-w-[420px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-2xl shadow-black/20 ring-1 ring-black/5">
        <Image
          src={layer.src}
          alt={layer.alt}
          fill
          sizes="(max-width: 768px) 58vw, 420px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}
