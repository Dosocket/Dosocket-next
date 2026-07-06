"use client";

import { motion, type Variants } from "motion/react";

/**
 * SECTION 2 — Monolithic Minimal Transition Split
 * ----------------------------------------------------------------------------
 * A wide editorial band on the light canvas. A tiny bracketed technical label
 * on the left; a massive tight-tracked statement on the right that reveals
 * word-by-word (each word rises from a clipped baseline).
 *
 * Because neon lime is near-invisible as text on white, accent words are rendered
 * as marker-highlights (lime fill / dark text) instead of coloured text.
 */

const HEADLINE: { text: string; accent?: boolean }[] = [
  { text: "We" },
  { text: "are" },
  { text: "a" },
  { text: "full-service" },
  { text: "design" },
  { text: "agency" },
  { text: "specializing" },
  { text: "in" },
  { text: "branding,", accent: true },
  { text: "UI/UX,", accent: true },
  { text: "and" },
  { text: "website" },
  { text: "design" },
  { text: "for" },
  { text: "ambitious" },
  { text: "businesses." },
];

// Container staggers word children; tune staggerChildren for reveal cadence.
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

// Each word rises from a clipped baseline — the editorial "type sets itself" feel.
const word: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function ServicesIntro() {
  return (
    <section className="relative bg-background py-28 md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(120px,180px)_1fr] lg:gap-16">
          {/* ---------- LEFT: technical bracketed label ---------- */}
          <div className="lg:pt-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground"
            >
              <span className="inline-block size-2 rounded-full bg-[#E8FF00] ring-1 ring-black/10" />
              [ Service ]
            </motion.span>
          </div>

          {/* ---------- RIGHT: massive word-by-word statement ---------- */}
          <motion.h2
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="font-display font-bold uppercase leading-[0.95] tracking-tighter text-foreground"
            // clamp keeps the statement monolithic but never overflowing.
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
          >
            {HEADLINE.map((w, i) => (
              // Per-word clip mask: overflow-hidden crops the word until it rises in.
              <span
                key={i}
                className="mr-[0.25em] inline-flex overflow-hidden pb-[0.12em] align-bottom"
              >
                <motion.span
                  variants={word}
                  className={
                    w.accent
                      ? "inline-block bg-[#E8FF00] px-[0.15em] text-foreground shadow-[0_0_30px_-8px_#E8FF00]"
                      : "inline-block"
                  }
                >
                  {w.text}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
