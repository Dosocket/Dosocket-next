"use client";

import { services, BRAND } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function ServicesPage() {
  const repeatedServices = [
    ...services,
    ...services.map((s) => ({ ...s, slug: `${s.slug}-2` })),
    ...services.map((s) => ({ ...s, slug: `${s.slug}-3` })),
  ];

  return (
    <div className="bg-background pt-12">
      <HeroParallax
        services={repeatedServices}
        heading="Digital Ecosystems"
        subtext={
          <span className="block">
            We build comprehensive solutions blending <span className="text-lime font-medium">Brand, Product,</span> and <span className="text-lime font-medium">Growth</span> into powerful systems. Not just isolated tools, but fully integrated digital experiences that scale.
          </span>
        }
      />

      <section className="container-x pb-28 relative z-20 bg-background">
        {/* CTA strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              Not sure where to start?
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              30-minute scoping call. We'll tell you exactly which pillar (or combination) ships
              your next outcome.
            </p>
          </div>
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-lime py-2.5 pr-2 pl-6 text-sm font-semibold text-lime-foreground"
          >
            Book a Call
            <span className="grid size-8 place-items-center rounded-full bg-ink text-lime">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
