/**
 * Why Choose Us Section — Homepage
 *
 * Design reference: Social Duckk-style poster
 * - Full black background with noise/grain texture
 * - Massive bold white heading: "WHY CHOOSE" / yellow circle arrow + "US"
 * - Stat cards grid: white cards + one lime-yellow accent card
 * - Grid: 80px left/right margins, 24px gap between cards
 */

"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

/* ─────────────────────────────────────────
   Stats Data
───────────────────────────────────────── */
const stats = [
  { value: "3+", label: "years of industry experience", span: "col-span-2", accent: false },
  { value: "12", label: "Recent Clients", span: "col-span-1 row-span-2", accent: true },
  { value: "42+", label: "Happy Clients", span: "col-span-1", accent: false },
  { value: "113+", label: "Projects Done", span: "col-span-1", accent: false },
];

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export function WhyChooseUs() {
  return (
    /* ── Full-bleed black section with a subtle grain overlay ── */
    <section className="relative overflow-hidden bg-black py-20 lg:py-32 text-white">

      {/* Grain texture overlay (CSS noise) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />

      {/* ── Grid Container (Responsive margins) ── */}
      <div className="relative z-10 mx-auto max-w-[calc(100%-48px)] sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-160px)]">

        {/* ── Heading Block ── */}
        <Reveal>
          <div className="mb-14">
            {/* "WHY" */}
            <p className="text-[clamp(72px,12vw,160px)] font-black uppercase leading-none tracking-tight text-white">
              WHY
            </p>
            {/* "CHOOSE" */}
            <p className="text-[clamp(72px,12vw,160px)] font-black uppercase leading-none tracking-tight text-white">
              CHOOSE
            </p>
            {/* Arrow circle + "US" on same row */}
            <div className="flex items-center gap-4">
              {/* Yellow arrow circle */}
              <div className="flex h-[clamp(60px,8vw,100px)] w-[clamp(60px,8vw,100px)] items-center justify-center rounded-full bg-[#E8FF00]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[40%] w-[40%] text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              {/* "US" with outline stroke */}
              <p
                className="text-[clamp(72px,12vw,160px)] font-black uppercase leading-none tracking-tight"
                style={{ WebkitTextStroke: "2px white", color: "transparent" }}
              >
                US
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Stats Grid (24px gap) ── */}
        {/* Layout: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className={`
                ${stat.span.includes("col-span-2") ? "md:col-span-2" : "md:col-span-1"}
                ${stat.span.includes("row-span-2") ? "md:row-span-2" : ""}
                ${stat.accent
                  ? "bg-[#E8FF00] text-black"
                  : "bg-white text-black"
                }
                flex flex-col items-center justify-center rounded-2xl p-8 text-center
              `}
            >
              <p className="text-[clamp(40px,6vw,80px)] font-black leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-black/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
