import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";

/**
 * SITE FOOTER — "Scroll Reveal Door" bed
 * ============================================================================
 * The stationary bed the page slides up to reveal. Reveal mechanics live in the
 * layout (src/app/layout.tsx): the page panel sits at `z-10` with a bottom
 * shadow; this footer sits BEHIND it at `z-0`, pinned to the viewport bottom.
 *
 * HEIGHT: mobile runs in normal flow (`relative`); desktop is the reveal bed
 * (`md:sticky md:bottom-0`). Keep the md height ≤ a typical desktop viewport so
 * the whole footer shows on reveal. The big wordmark is pinned to the bottom, so
 * it's always visible regardless of the content above it.
 */

const NAV: [string, string][] = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/works", "Projects"],
  ["/contact", "Contact"],
];

const SOCIALS: [string, string][] = [
  [BRAND.socials.linkedin, "LinkedIn"],
  [BRAND.socials.instagram, "Instagram"],
];

const LEGAL: [string, string][] = [
  ["#", "Terms & Conditions"],
  ["#", "Privacy Policy"],
];

export function SiteFooter() {
  return (
    <footer className="relative z-0 h-[44rem] w-full overflow-hidden bg-neutral-950 text-neutral-400 md:sticky md:bottom-0 md:h-[34rem]">
      {/* Faint top hairline so the seam with the sliding panel reads crisply. */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      {/* CONTENT — flows from the top; `mt-auto` drops the legal bar to the bottom.
          NAVBAR CLEARANCE: because the footer is pinned to the viewport bottom, its
          top sits at (viewportHeight − footerHeight). The md height above is kept
          COMFORTABLY SHORTER than a typical desktop viewport so the top never rises
          under the fixed header, and `pt-24` adds extra clearance for short screens.
          The bottom padding RESERVES room for the pinned wordmark below. */}
      <div className="container-x relative z-10 flex h-full flex-col pt-24 pb-[24vw] md:pt-24 md:pb-40">
        {/* ══════════ TOP: CTA (left) + nav (right) ══════════ */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* CTA */}
          <div className="max-w-2xl">
            <h2
              className="font-display font-bold uppercase leading-[0.9] tracking-tighter text-white"
              // clamp(min, fluid, max) keeps the CTA bold but sized for the shorter footer.
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
            >
              Let&apos;s build
              <br />
              the system<span className="text-[#E8FF00]">.</span>
            </h2>
            <Link
              href={BRAND.calcom}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-[#E8FF00]"
            >
              <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#E8FF00] after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                Book a call
              </span>
              <span className="grid size-9 place-items-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-[#E8FF00] group-hover:bg-[#E8FF00]/10">
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </Link>
          </div>

          {/* Primary navigation — right-aligned on desktop. */}
          <nav className="flex flex-col gap-3 md:items-end">
            {NAV.map(([href, label]) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium uppercase tracking-wide text-neutral-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ══════════ BOTTOM BAR: socials + legal (left) · copyright (right) ══════════ */}
        <div className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
            {SOCIALS.map(([href, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
            {/* subtle divider between socials and legal */}
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            {LEGAL.map(([href, label]) => (
              <Link
                key={label}
                href={href}
                className="transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          <p className="text-xs uppercase tracking-wider text-neutral-500">
            Copyright © 2026 DOSOCKET. All rights reserved.
          </p>
        </div>
      </div>

      {/* ══════════ MONOLITHIC WORDMARK ══════════
          Pinned to the footer's BOTTOM so it's always visible regardless of the
          content above. Tucked so ~80% shows and the bottom ~20% bleeds past the
          footer edge (= the viewport bottom on reveal). The wrapper's
          `overflow-hidden` clips the tucked portion.

          TUCK: `translate-y-[0.18em]` = how far it drops below the edge (≈20%).
          Reserved space above comes from the content's `pb-[26vw] md:pb-[10rem]`. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none overflow-hidden">
        <div className="container-x justify-center flex">
          <h2
            className="translate-y-[0.18em] whitespace-nowrap font-display font-bold uppercase leading-[0.78] tracking-tighter text-white"
            // Sized to the shorter footer; capped so ultra-wide screens don't overflow.
            style={{ fontSize: "min(18vw, 15rem)" }}
          >
            Dosocket
          </h2>
        </div>
      </div>
    </footer>
  );
}
