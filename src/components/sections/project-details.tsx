"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Search, Paintbrush, Smartphone, Upload } from "lucide-react";

/* ─────────────────────────────────────────
   Steps Data
───────────────────────────────────────── */
const steps = [
  {
    id: 1,
    title: "1 Research",
    description:
      "We explored fitness challenges and user pain points to uncover what people truly need from a home workout app.",
    duration: "1 Week",
    icon: Search,
    color: "green", // light green card
  },
  {
    id: 2,
    title: "2 Visual Design",
    description:
      "We built a clean, energetic design with easy navigation, motivating visuals, and interactive features that keep workouts exciting.",
    duration: "2 Week",
    icon: Paintbrush,
    color: "white", // white card
  },
  {
    id: 3,
    title: "3 Prototype & Test",
    description:
      "We ran multiple test rounds to refine the experience, making sure the app feels smooth, secure, and enjoyable for every user.",
    duration: "1-2 Days",
    icon: Smartphone,
    color: "white", // white card
  },
  {
    id: 4,
    title: "4 Final Delivery",
    description:
      "We wrapped it all up with a polished presentation that demonstrated the app's value—showing how it empowers users to train anytime, anywhere.",
    duration: "1-2 Days",
    icon: Upload,
    color: "green", // light green card
  },
];

/* ─────────────────────────────────────────
   Single Card Component
───────────────────────────────────────── */
function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const isRight = index % 2 !== 0;
  const isGreen = step.color === "green";
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative z-10 flex w-full md:w-[48%] flex-row items-stretch gap-0 rounded-2xl p-2 ${
        isGreen ? "bg-[#f2fbe8]" : "bg-[#f9f9f9]"
      } shadow-sm border ${isGreen ? "border-[#e0f1cc]" : "border-neutral-100"}`}
    >
      {/* Duration Badge */}
      <div
        className={`flex min-w-[40px] flex-col items-center justify-center rounded-xl px-2 py-4 text-white ${
          isGreen ? "bg-[#114b35]" : "bg-[#1a1a1a]"
        }`}
      >
        <span
          className="text-xs font-medium tracking-wider"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {step.duration}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent">
            <Icon className="h-5 w-5 text-neutral-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-neutral-900">{step.title}</h3>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   SVG Connectors
───────────────────────────────────────── */
function ConnectorLeftToRight() {
  return (
    <div
      className="absolute top-[50%] left-[48%] hidden w-[28%] md:block"
      style={{ height: "calc(50% + 64px)" }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Starts left (0%), goes right to 80%, curves down to 100%, goes down */}
        <path
          d="M 0 0 L 80 0 Q 100 0 100 20 L 100 100"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
        {/* Arrow head at the bottom */}
        <path
          d="M 95 92 L 100 100 L 105 92"
          stroke="#cbd5e1"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ConnectorRightToLeft() {
  return (
    <div
      className="absolute top-[50%] left-[24%] hidden w-[28%] md:block"
      style={{ height: "calc(50% + 64px)" }}
      aria-hidden
    >
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Starts right (100%), goes left to 20%, curves down to 0%, goes down */}
        <path
          d="M 100 0 L 20 0 Q 0 0 0 20 L 0 100"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
        {/* Arrow head at the bottom */}
        <path
          d="M -5 92 L 0 100 L 5 92"
          stroke="#cbd5e1"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Export
───────────────────────────────────────── */
export function ProjectDetails() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-12">
        {/* ── Top Label + Date Boxes ── */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between mb-16">
          <div className="flex-1">
            <Reveal>
              <div className="inline-flex rounded-full bg-[#bdf07f] px-4 py-1.5 text-sm font-semibold text-[#3b660c] mb-6">
                Project Details
              </div>
              <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-neutral-900 md:text-5xl max-w-2xl">
                Building a Seamless Fitness Experience
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                Beyond just workout tracking, we crafted an app experience that
                motivates users at every step—from personalized training flows to
                clean visuals that make staying fit feel simple and rewarding.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              <div className="flex h-20 w-24 flex-col items-center justify-center bg-[#f5f5f5] text-sm font-medium text-neutral-600">
                Jul 2025
              </div>
              <div className="flex h-20 w-24 flex-col items-center justify-center bg-[#bdf07f] text-sm font-medium text-[#3b660c]">
                Aug 2025
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Zigzag Timeline ── */}
        <div className="relative mt-12 flex flex-col gap-12 md:gap-16">
          {steps.map((step, i) => {
            const isRight = i % 2 !== 0;
            const isLast = i === steps.length - 1;

            return (
              <div
                key={step.id}
                className={`relative flex w-full ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                <StepCard step={step} index={i} />
                
                {/* Connector to the next step */}
                {!isLast && (
                  <>
                    {isRight ? <ConnectorRightToLeft /> : <ConnectorLeftToRight />}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
