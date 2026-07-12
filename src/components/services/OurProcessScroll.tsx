"use client";

/**
 * OurProcessScroll
 * ------------------------------------------------------------------
 * Scroll-driven kinetic typography section — a vertical "wheel" of
 * process words that scrolls through a fixed viewport lens. The
 * centered word is crisp and fully solid; neighboring words carry a
 * directional gradient (fading toward whichever vignette they're
 * closest to) plus a light blur, so the whole stack melts smoothly
 * into the top/bottom edges.
 *
 * Stack: Next.js (App Router, client component) + Tailwind + motion/react
 *
 * DROP-IN USAGE
 * ------------------------------------------------------------------
 *   import OurProcessScroll from "@/components/OurProcessScroll";
 *   ...
 *   <FiveServicesLayout />
 *   <OurProcessScroll />
 *
 * TUNING
 * ------------------------------------------------------------------
 * Everything that controls feel/speed/intensity lives in the CONFIG
 * object below — no need to touch the component logic to adjust it.
 *
 * ON THEME / COLOR
 * ------------------------------------------------------------------
 * This fades a SINGLE base text color in and out via alpha (not a
 * hue swap from dark-to-light). That's deliberate: it's what keeps
 * the centered word reliably crisp regardless of what your actual
 * background color is. `CONFIG.textRGB` defaults to near-black for
 * a light/cream background (as in the reference design). If your
 * section sits on a dark background, flip it to a light RGB, e.g.
 * "250,250,250".
 *
 * The vignette + backdrop use Tailwind's `background` theme token
 * (standard in shadcn/ui-style setups, i.e. `bg-background` resolves
 * via a CSS variable). If your tailwind.config doesn't define that
 * token, either add it or swap `bg-background` below for a literal
 * class like `bg-[#faf9f6]`.
 */

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  type MotionValue,
} from "motion/react";

// ============================================================================
// CONFIG — tune scroll speed, spacing, and fade weights here
// ============================================================================
const CONFIG = {
  // The words, in order. Order matters — it's the scroll sequence.
  words: [
    "DISCOVERY",
    "STRATEGY",
    "DESIGN",
    "DEVELOPMENT",
    "TESTING",
    "LAUNCH",
    "GET SUPPORT",
  ],

  // How much scroll distance drives the whole animation.
  // Taller = slower / more deliberate scroll-scrubbing per word.
  scrollTrackHeight: "300vh",

  // Vertical distance (in vh) between each word's "centered" position.
  // Larger = more separation & scroll distance per word transition.
  itemSpacingVh: 20,

  // Distance (in vh, from dead-center) at which a word reaches its
  // most-faded state. Roughly equal to itemSpacingVh gives you the
  // "one crisp word + two softly-gradiented neighbors" look.
  fadeDistanceVh: 22,

  // Scale interpolation: [at-center, at-fadeDistance]. Keep this
  // subtle — the reference look barely shrinks neighboring words.
  centerScale: 1,
  edgeScale: 0.92,

  // Blur interpolation (px): [at-center, at-fadeDistance]. Keep this
  // LOW — neighbors should read as "slightly soft", not obscured.
  maxBlurPx: 3,

  // Base text color as "R,G,B" (alpha is animated separately below).
  // Near-black for light backgrounds. Use "250,250,250" for dark themes.
  textRGB: "23,23,23",

  // Alpha of the text-gradient stop CLOSEST to center, interpolated
  // from center (distance 0) -> fadeDistance. This is what keeps
  // immediate neighbors legible instead of vanishing entirely.
  nearAlphaRange: [1, 0.16] as [number, number],

  // Alpha of the text-gradient stop FARTHEST from center (the edge
  // sinking into the vignette) — goes fully transparent.
  farAlphaRange: [1, 0] as [number, number],

  // Spring smoothing applied to raw scroll progress for a more fluid,
  // momentum-driven feel rather than a 1:1 scrubbed link.
  spring: { stiffness: 260, damping: 38, mass: 0.4 },

  // Height (as a fraction of the sticky viewport) of each top/bottom
  // vignette gradient.
  vignetteHeightClass: "h-1/3",
} as const;

// ============================================================================
// Single word layer
// ============================================================================
function ProcessWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const {
    itemSpacingVh,
    fadeDistanceVh,
    centerScale,
    edgeScale,
    maxBlurPx,
    textRGB,
    nearAlphaRange,
    farAlphaRange,
  } = CONFIG;

  // This word's vertical position (in vh, relative to screen center) as
  // scroll progress goes 0 -> 1. At progress = index / (total - 1), the
  // word sits exactly at 0 (dead center of the sticky viewport).
  // Negative = word has passed center, sitting above it.
  // Positive = word hasn't reached center yet, sitting below it.
  const startVh = index * itemSpacingVh;
  const endVh = (index - (total - 1)) * itemSpacingVh;
  const yVh = useTransform(progress, [0, 1], [startVh, endVh]);

  // Distance from center drives every "focus" quality.
  const distance = useTransform(yVh, (v) => Math.abs(v));

  const scale = useTransform(distance, [0, fadeDistanceVh], [centerScale, edgeScale]);
  const blurPx = useTransform(distance, [0, fadeDistanceVh], [0, maxBlurPx]);

  const nearAlpha = useTransform(distance, [0, fadeDistanceVh], nearAlphaRange);
  const farAlpha = useTransform(distance, [0, fadeDistanceVh], farAlphaRange);

  // Direction of the internal text gradient: a word above center fades
  // out at its TOP edge (nearest the top vignette) while staying solid
  // at its bottom (nearest center) — and vice versa for a word below
  // center. At distance ≈ 0 both stops converge to solid, so the flip
  // in direction right at center is invisible.
  const direction = useTransform(yVh, (v) => (v <= 0 ? "to top" : "to bottom"));

  const translateY = useMotionTemplate`${yVh}vh`;
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  const backgroundImage = useMotionTemplate`linear-gradient(${direction}, rgba(${textRGB},${nearAlpha}) 0%, rgba(${textRGB},${farAlpha}) 100%)`;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4"
      style={{ y: translateY, scale, filter }}
    >
      <motion.h2
        className="whitespace-nowrap text-center font-extrabold uppercase leading-none tracking-tighter text-6xl sm:text-8xl md:text-9xl lg:text-[8vw]"
        style={{
          backgroundImage,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        {word}
      </motion.h2>
    </motion.div>
  );
}

// ============================================================================
// Main export
// ============================================================================
export default function OurProcessScroll() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scrub the sequence over the pinned phase only: progress = 0 when the
  // section top reaches the viewport top (sticky starts pinning) and 1 when
  // the section bottom reaches the viewport bottom (sticky unpins). This
  // keeps every word transition happening while the lens is fully visible.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Smoothed progress for a weighted, momentum-driven scrub rather than
  // a rigid 1:1 link to the raw scroll position.
  const progress = useSpring(scrollYProgress, CONFIG.spring);

  return (
    <section
      ref={trackRef}
      className="relative w-full bg-background"
      style={{ height: CONFIG.scrollTrackHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {/* Header badge */}
        <div className="absolute inset-x-0 top-10 z-30 flex justify-center sm:top-14">
          <span className="text-xs tracking-widest text-neutral-400">
            [ OUR PROCESS ]
          </span>
        </div>

        {/* Word wheel */}
        <div className="relative h-full w-full">
          {CONFIG.words.map((word, i) => (
            <ProcessWord
              key={word}
              word={word}
              index={i}
              total={CONFIG.words.length}
              progress={progress}
            />
          ))}
        </div>

        {/* Vignette fade — top */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-20 ${CONFIG.vignetteHeightClass} bg-linear-to-b from-background via-background/80 to-transparent`}
        />

        {/* Vignette fade — bottom */}
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 ${CONFIG.vignetteHeightClass} bg-linear-to-t from-background via-background/80 to-transparent`}
        />
      </div>
    </section>
  );
}