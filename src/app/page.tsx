/**
 * Homepage — page.tsx
 *
 * Section order (per design brief):
 * 1. Hero          — light dotted bg, centered heading, floating widgets
 * 2. Marquee       — scrolling ticker (unchanged)
 * 3. WhyChooseUs   — black bg, massive typography, stat cards
 * 4. ServicesGrid  — existing service cards (unchanged)
 * 5. FivePillars   — zigzag alternating process steps
 * 6. Works         — portfolio grid (unchanged)
 * 7. Testimonials  — reviews (unchanged)
 */

import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AboutCompany } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProjectDetails } from "@/components/sections/project-details";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";

export default function Index() {
  return (
    <div>
      {/* ── 1. Hero Section ── */}
      <Hero />

      {/* ── 2. Scrolling Marquee Ticker ── */}
      <Marquee />

      {/* ── 3. Why Choose Us — black bg, massive type, stat cards ── */}
      <WhyChooseUs />

      {/* ── 4. About Company — heading + stats + image + service cards ── */}
      <AboutCompany />

      {/* ── 5. Services Grid ── */}
      <ServicesGrid />

      {/* ── 6. Project Details ── */}
      <ProjectDetails />

      {/* ── 7. Testimonials ── */}
      <Testimonials />

      {/* ── 8. FAQ ── */}
      <FAQ />
    </div>
  );
}
