/**
 * Hero Section — Homepage
 *
 * Design reference: ChronoTask-style hero
 * - Light gray dotted/noise background (full viewport height)
 * - Centered headline (large, bold, two-tone) + sub-copy + primary CTA
 * - Floating UI "widget" cards positioned absolutely around the center content
 * - Grid: 80px left/right margin, content max-width constrained
 *
 * Animations:
 * - GSAP staggered blur-reveal on heading lines
 * - GSAP fade-up on sub-copy and CTA (hero-right class)
 */

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BRAND } from "@/lib/site-data";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ─────────────────────────────────────────
   Floating Widget Sub-Components
───────────────────────────────────────── */

/** Left floating card — mimics a sticky note widget */
function StickyNoteWidget() {
  return (
    <div className="absolute left-[80px] top-[160px] hidden w-[170px] rotate-[-4deg] rounded-xl bg-[#FFE566] p-4 shadow-xl lg:block">
      <p className="font-handwriting text-[13px] leading-snug text-[#222]">
        Take notes to keep track of crucial details and accomplish more tasks with ease.
      </p>
    </div>
  );
}

/** Left small card — blue checkbox widget */
function CheckboxWidget() {
  return (
    <div className="absolute left-[100px] top-[340px] hidden rounded-2xl bg-white p-3 shadow-lg lg:block">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/** Right floating card — mimics a reminders widget */
function RemindersWidget() {
  return (
    <div className="absolute right-[80px] top-[150px] hidden w-[200px] rounded-2xl bg-white p-4 shadow-xl lg:block">
      <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide">Reminders</p>
      <div className="mt-2 flex items-center gap-2">
        {/* Clock icon */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[12px] font-semibold text-neutral-800">Today's Meeting</p>
          <p className="text-[10px] text-neutral-400">With the marketing team</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-full bg-blue-50 px-3 py-1.5">
        <span className="text-[11px] font-medium text-blue-600">Time</span>
        <div className="flex items-center gap-1">
          <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] text-white">13:00</span>
          <span className="text-[10px] text-blue-400">– 13:45</span>
        </div>
      </div>
    </div>
  );
}

/** Bottom-left floating card — task list widget */
function TasksWidget() {
  return (
    <div className="absolute bottom-[60px] left-[80px] hidden w-[220px] rounded-2xl bg-white p-4 shadow-xl lg:block">
      <p className="text-[12px] font-bold text-neutral-800">Today's tasks</p>
      <div className="mt-3 space-y-2">
        {[
          { label: "New Ideas for campaign", progress: 60, color: "bg-orange-400" },
          { label: "Design PPT #4", progress: 112, color: "bg-emerald-400" },
        ].map((task) => (
          <div key={task.label}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-neutral-600 truncate max-w-[140px]">{task.label}</span>
              <span className="text-[10px] font-semibold text-neutral-500">{task.progress}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-neutral-100">
              <div
                className={`h-1.5 rounded-full ${task.color}`}
                style={{ width: `${Math.min(task.progress, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Bottom-right floating card — integrations badge */
function IntegrationsWidget() {
  return (
    <div className="absolute bottom-[60px] right-[80px] hidden w-[190px] rounded-2xl bg-white p-4 shadow-xl lg:block">
      <p className="text-[12px] font-bold text-neutral-800">100+ Integrations</p>
      <div className="mt-3 flex items-center gap-2">
        {/* Gmail */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-lg">M</div>
        {/* Slack */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-lg">#</div>
        {/* Calendar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">31</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Hero Main Component
───────────────────────────────────────── */

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* Staggered blur-reveal on heading lines */
      const lines = gsap.utils.toArray(".hero-line");
      gsap.fromTo(
        lines,
        { y: 60, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.14,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      /* Fade-up for sub-copy and CTA */
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, delay: 0.55, ease: "power3.out" }
      );
    },
    { scope: containerRef }
  );

  return (
    /* ── Full-viewport hero with dotted light-gray bg ── */
    <section
      ref={containerRef}
      className="relative min-h-dvh overflow-hidden bg-[#f0f0f0] pt-24"
      style={{
        /* Subtle dot pattern */
        backgroundImage: "radial-gradient(circle, #c4c4c4 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* ── Floating Widget Cards ── */}
      <StickyNoteWidget />
      <CheckboxWidget />
      <RemindersWidget />
      <TasksWidget />
      <IntegrationsWidget />

      {/* ── Centre Grid (Responsive margins) ── */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-96px)] max-w-[calc(100%-48px)] sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-160px)] flex-col items-center justify-center gap-6 text-center">

        {/* Heading — two-tone (black line / gray line) */}
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-7xl">
          <div className="overflow-hidden">
            <div className="hero-line">Ship brave, build fast,</div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-line text-neutral-400">stay ahead.</div>
          </div>
        </h1>

        {/* Sub-copy + CTA */}
        <div className="hero-sub flex flex-col items-center gap-6">
          <p className="max-w-[480px] text-base leading-relaxed text-neutral-500">
            Dosocket is a senior-led product agency — brand, development, growth, and AI
            automation pipelines that ship 2× faster.
          </p>

          {/* Buttons: Primary + Secondary side by side */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <PrimaryButton label="Get Started" href={BRAND.calcom} target="_blank" />
            <SecondaryButton label="Explore Work" href="/works" />
          </div>
        </div>
      </div>
    </section>
  );
}
