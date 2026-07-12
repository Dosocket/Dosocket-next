"use client";

/**
 * GrowFasterParallax
 * ------------------------------------------------------------------
 * Big editorial heading with a cluster of images floating over the
 * type. As the cursor moves across the section, each image drifts
 * toward it by a different amount (per-item `depth`), producing a
 * layered parallax that "follows the cursor". A circular "TALK TO US"
 * badge sits in the cluster and drifts too.
 *
 * Matches the codebase tokens (bg-background, text-foreground,
 * font-display, container-x, BRAND.calcom) so it drops in below
 * <ServicesFAQ /> on the services page with no extra theme setup.
 *
 * DROP-IN USAGE
 * ------------------------------------------------------------------
 *   import GrowFasterParallax from "@/components/services/GrowFasterParallax";
 *   ...
 *   <ServicesFAQ />
 *   <GrowFasterParallax />
 *
 * SWAPPING IMAGES
 * ------------------------------------------------------------------
 * FLOATERS defaults to the service PNGs already in /public so it
 * renders out of the box. Drop real photos into /public and update
 * each `src`. `pos` places the item (percent of the section box),
 * `size` is its width, and `depth` is how strongly it chases the
 * cursor (px of travel at the section edge). `hideOnMobile` trims the
 * cluster on small screens so the heading stays readable.
 */

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";

// ============================================================================
// CONFIG
// ============================================================================
const HEADING = ["GROW FASTER WITH", "PROVEN MARKETING", "EXPERTS"];

// Spring applied to the raw cursor position for a smooth, trailing drift.
const SPRING = { stiffness: 90, damping: 18, mass: 0.6 } as const;

type Floater = {
  src: string;
  alt: string;
  /** Center position as percent of the section box: [left%, top%]. */
  pos: [number, number];
  /** Image width (any CSS length). Height follows the intrinsic ratio. */
  size: string;
  /** Aspect ratio (w / h) used to reserve the box. */
  ratio: number;
  /** Parallax travel in px at the section edge. Higher = more movement. */
  depth: number;
  /** Static resting rotation, in degrees. */
  rotate?: number;
  /** Stacking relative to the heading (heading sits at z-10). */
  z?: number;
  hideOnMobile?: boolean;
};

const FLOATERS: Floater[] = [
  {
    src: "/GrowthandRevenueSystems.png",
    alt: "Growth and revenue systems",
    pos: [40, 22],
    size: "clamp(140px, 12vw, 230px)",
    ratio: 16 / 10,
    depth: 34,
    rotate: -3,
    z: 20,
  },
  {
    src: "/OnDemandProductTeams.png",
    alt: "On-demand product teams",
    pos: [83, 28],
    size: "clamp(150px, 13vw, 250px)",
    ratio: 3 / 4,
    depth: 60,
    rotate: 4,
    z: 20,
    hideOnMobile: true,
  },
  {
    src: "/HighPerformanceDevelopment.png",
    alt: "High performance development",
    pos: [26, 74],
    size: "clamp(160px, 15vw, 300px)",
    ratio: 4 / 3,
    depth: 48,
    rotate: -2,
    z: 20,
    hideOnMobile: true,
  },
  {
    src: "/AIandWorkflowAutomation.png",
    alt: "AI and workflow automation",
    pos: [70, 82],
    size: "clamp(120px, 10vw, 190px)",
    ratio: 1,
    depth: 76,
    rotate: 6,
    z: 5,
    hideOnMobile: true,
  },
];

// ============================================================================
// One parallax layer (image or badge)
// ============================================================================
function useDrift(
  mx: MotionValue<number>,
  my: MotionValue<number>,
  depth: number,
) {
  // mx / my arrive normalized to [-0.5, 0.5]; scale to px of travel.
  const x = useTransform(mx, (v) => v * depth * 2);
  const y = useTransform(my, (v) => v * depth * 2);
  return { x, y };
}

function FloatingImage({
  item,
  mx,
  my,
}: {
  item: Floater;
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const { x, y } = useDrift(mx, my, item.depth);

  return (
    <motion.div
      aria-hidden
      style={{
        x,
        y,
        left: `${item.pos[0]}%`,
        top: `${item.pos[1]}%`,
        width: item.size,
        rotate: item.rotate ?? 0,
        zIndex: item.z ?? 20,
      }}
      className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 ${
        item.hideOnMobile ? "hidden md:block" : ""
      }`}
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-card shadow-2xl ring-1 ring-black/5"
        style={{ aspectRatio: item.ratio }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 40vw, 250px"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
}

function TalkBadge({
  mx,
  my,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
}) {
  const { x, y } = useDrift(mx, my, 92);

  return (
    <motion.a
      href={BRAND.calcom}
      target="_blank"
      rel="noreferrer"
      style={{ x, y, left: "62%", top: "78%", zIndex: 30 }}
      className="group absolute grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-foreground text-background shadow-2xl transition-transform duration-300 hover:scale-105 md:size-36"
    >
      <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest md:text-xs">
        Talk to us
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  );
}

// ============================================================================
// Main export
// ============================================================================
export default function GrowFasterParallax() {
  const ref = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, SPRING);
  const my = useSpring(rawY, SPRING);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalize cursor to [-0.5, 0.5] relative to the section center.
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full overflow-hidden bg-background pb-10 py-28 md:py-40"
    >
      <div className="container-x">
        {/* Heading sits underneath the floating cluster */}
        <h2 className="relative z-10 mx-auto max-w-5xl text-center font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl">
          {HEADING.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Parallax cluster, absolutely positioned over the heading box */}
        <div className="pointer-events-none absolute inset-0">
          {FLOATERS.map((item) => (
            <FloatingImage key={item.src} item={item} mx={mx} my={my} />
          ))}
          {/* Badge re-enables pointer events on itself so it stays clickable */}
          <div className="pointer-events-auto">
            <TalkBadge mx={mx} my={my} />
          </div>
        </div>
      </div>
    </section>
  );
}
