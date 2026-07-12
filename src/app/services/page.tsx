import { BRAND } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesIntro } from "@/components/services/services-intro";
import { ServicesBento } from "@/components/services/services-bento";
import OurProcessScroll from "@/components/services/OurProcessScroll";
import ServicesFAQ from "@/components/services/ServicesFAQ ";
import GrowFasterParallax from "@/components/services/GrowFasterParallax";

export default function ServicesPage() {
  return (
    // Light canvas, consistent with the rest of the site's `bg-background` token.
    <div className="bg-background text-foreground">
      {/* Section 1 — pinned typography + sequential center→edge image reveal */}
      <ServicesHero />

      {/* Section 2 — monolithic editorial transition split */}
      <ServicesIntro />

      {/* Section 3 — service cards grid (image + bottom text) */}
      <ServicesBento />

      {/* Section 4 — scroll-driven word wheel */}
      <OurProcessScroll />

      {/* Section 5 — ServicesFAQ */}
      <ServicesFAQ />

      {/* Section 6 — cursor-parallax heading with floating imagery */}
      <GrowFasterParallax />

      {/* Closing CTA strip */}
      <section className="container-x pb-32">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
              Not sure where to start?
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              30-minute scoping call. We&apos;ll tell you exactly which pillar (or
              combination) ships your next outcome.
            </p>
          </div>
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#E8FF00] py-2.5 pr-2 pl-6 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            Book a Call
            <span className="grid size-8 place-items-center rounded-full bg-black text-[#E8FF00]">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
