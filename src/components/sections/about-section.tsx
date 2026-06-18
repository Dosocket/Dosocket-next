/**
 * About Company Section — Homepage
 *
 * Design reference: Influencer Marketing card layout
 * Layout (desktop):
 *   Top row:  [Label + Heading (left)]    [3 stat columns (right)]
 *   Bottom:   [Image (left, spanning 2 rows)]  [Card 1]  [Card 2]
 *                                               [Card 3 spanning 2 cols]
 *
 * Grid: 80px left/right margins, 24px gap between cards
 * Fully responsive: stacks vertically on mobile
 */

"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Stats Data
───────────────────────────────────────── */
const stats = [
  { value: "50+", label: "Deals with Clients" },
  { value: "10+", label: "Team Members" },
  { value: "113+", label: "Completed Projects" },
];

/* ─────────────────────────────────────────
   Service Cards Data
───────────────────────────────────────── */
const cards = [
  {
    title: "Brand & Experience Design",
    description:
      "Our brand strategies are designed to maximize your identity's reach and impact, ensuring effective engagement and measurable results.",
    href: "/services/digital-brand-experience",
  },
  {
    title: "Scalable Development",
    description:
      "Our development strategy focuses on creating high-performance, scalable platforms that drive business growth and support your goals.",
    href: "/services/high-performance-development",
  },
  {
    title: "Growth & Revenue Systems",
    description:
      "Our expert strategies in growth systems help you expand your operations efficiently, ensuring sustainable growth and increased market presence. Partner with us to elevate your business to new heights.",
    href: "/services/growth-revenue-systems",
  },
];

/* ─────────────────────────────────────────
   Read More Button (matching the reference)
───────────────────────────────────────── */
function ReadMoreButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition-all hover:border-neutral-800 hover:bg-neutral-900 hover:text-white"
    >
      Read More
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export function AboutCompany() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28">
      {/* ── Container with 80px margins ── */}
      <div className="mx-auto w-full max-w-[calc(100%-48px)] sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-160px)]">

        {/* ═══════════════════════════════════
            TOP ROW: Heading + Stats
        ═══════════════════════════════════ */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          {/* Left: Label + Heading */}
          <Reveal>
            <div>
              <p className="text-sm font-medium text-blue-600 tracking-wide">About Our Company</p>
              <h2 className="mt-3 max-w-lg text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 md:text-4xl">
                Innovative Product Execution to Boost Your Business
              </h2>
            </div>
          </Reveal>

          {/* Right: Stats row */}
          <Reveal>
            <div className="flex gap-8 sm:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-blue-600 md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ═══════════════════════════════════
            BOTTOM: Image + Cards Grid
            Desktop: 3 columns [image | card | card]
                     then       [image | card spanning 2 cols]
        ═══════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* ── Large Image Placeholder (spanning 2 rows on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-neutral-200 md:row-span-2 md:min-h-0"
          >
            {/* Placeholder icon + label */}
            <div className="flex flex-col items-center gap-3 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="h-12 w-12"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
              <span className="text-sm font-medium">Team Photo</span>
            </div>
          </motion.div>

          {/* ── Card 1: Top-middle ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div>
              <h3 className="text-xl font-bold text-neutral-900">{cards[0].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{cards[0].description}</p>
            </div>
            <ReadMoreButton href={cards[0].href} />
          </motion.div>

          {/* ── Card 2: Top-right ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div>
              <h3 className="text-xl font-bold text-neutral-900">{cards[1].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{cards[1].description}</p>
            </div>
            <ReadMoreButton href={cards[1].href} />
          </motion.div>

          {/* ── Card 3: Bottom, spanning 2 columns on desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 md:col-span-2"
          >
            <div>
              <h3 className="text-xl font-bold text-neutral-900">{cards[2].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{cards[2].description}</p>
            </div>
            <ReadMoreButton href={cards[2].href} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
