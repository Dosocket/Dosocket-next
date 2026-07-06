"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/**
 * SECTION 3 — Services · Open-Air Editorial Grid
 * ----------------------------------------------------------------------------
 * Frameless, card-less editorial layout: images are independent structural
 * elements, and the details (title → description → capabilities) sit directly
 * beneath them. Adapted to the site's LIGHT canvas — the spec's dark colours are
 * translated to their light-theme equivalents (e.g. "headline → white" becomes
 * "headline foreground/70 → foreground"), while the #E8FF00 accent, image
 * grayscale→colour bloom, and scroll reveals are kept exactly.
 *
 * GRID TRACKING (5 services):
 *   • Items 1–4 → two equal columns (`col-span-1`), image on top, text below.
 *   • Item 5    → full-width closer (`md:col-span-2`), split image-left / text-right.
 * Breakpoint: single column on mobile, two columns from `md` up.
 */

export function ServicesBento() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-x">
        {/* Minimal, frameless section label (no bounding box). */}
        <div className="mb-14 flex items-baseline gap-3 md:mb-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            What we do
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {String(services.length).padStart(2, "0")} Pillars
          </span>
        </div>

        {/* UNIFIED PARENT GRID — houses all 5 services, no background frames.
            gap-x-12 between columns, generous gap-y between rows. */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 md:gap-y-32">
          {services.map((service, i) => {
            // The last service is the full-width asymmetric closer.
            const isCloser = i === services.length - 1;
            return (
              <ServiceItem
                key={service.slug}
                service={service}
                index={i}
                closer={isCloser}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({
  service,
  index,
  closer,
}: {
  service: (typeof services)[number];
  index: number;
  closer: boolean;
}) {
  // Subtle per-column stagger so the two items in a row don't fire in perfect sync.
  const delay = (index % 2) * 0.08;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      // Damping: 0.7s with a gentle ease-out cubic — long enough to feel composed,
      // short enough not to lag the scroll.
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        "group",
        // CLOSER: span both columns + horizontal split (image left / text right).
        closer &&
          "md:col-span-2 md:flex md:flex-row md:items-center md:gap-16",
      )}
    >
      {/* ── IMAGE ── independent structural element, rounded boundary, no frame.
          On the closer it takes the left half; otherwise it's the full column. */}
      <div className={cn(closer && "w-full md:w-1/2")}>
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-3xl",
            // Slightly wider ratio for the hero closer, standard 4:3 otherwise.
            closer ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            // HOVER PHYSICS (spec): grayscale + opacity-40 + scale-110 at rest →
            // colour + opacity-80 + scale-100 on hover. 700ms ease-out is the damping.
            // (opacity-40 reads as a faded/dormant image on the light canvas — bump
            //  the base opacity here if your imagery needs to sit stronger.)
            className="object-cover opacity-40 grayscale scale-110 transition-[transform,filter,opacity] duration-700 ease-out group-hover:scale-100 group-hover:opacity-80 group-hover:grayscale-0"
          />
        </div>
      </div>

      {/* ── DETAILS ── sit directly beneath the image (or right half on the closer). */}
      <div className={cn(closer ? "mt-8 w-full md:mt-0 md:w-1/2" : "mt-0")}>
        {/* Title — strengthens foreground/70 → foreground on hover (light-theme
            equivalent of the spec's "shift to white"). */}
        <h3 className="mt-6 font-sans text-xl font-bold uppercase tracking-tight text-foreground/70 transition-colors duration-500 group-hover:text-foreground sm:text-2xl md:text-3xl">
          {service.title}
        </h3>

        {/* Micro-line highlight — a short rule that fills with #E8FF00 on hover. */}
        <span className="mt-3 block h-0.5 w-10 origin-left scale-x-100 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-[#E8FF00]" />

        {/* Paragraph summary */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {service.description}
        </p>

        {/* Capabilities list — square #E8FF00-on-hover indicators. */}
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {service.inclusions.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-foreground/70"
            >
              <span className="size-1.5 shrink-0 rounded-[1px] bg-foreground/40 transition-colors duration-300 group-hover:bg-[#E8FF00]" />
              {item}
            </li>
          ))}
        </ul>

        {/* Explore link — border + arrow activate with the #E8FF00 accent on hover. */}
        <Link
          href={`/services/${service.slug}`}
          className="group/link mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-foreground/60 transition-colors hover:text-foreground"
        >
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#E8FF00] after:transition-transform after:duration-500 group-hover/link:after:scale-x-100">
            Explore capability
          </span>
          <span className="grid size-8 place-items-center rounded-full border border-border transition-all duration-500 group-hover/link:border-[#E8FF00] group-hover/link:bg-[#E8FF00]/10">
            <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover/link:rotate-45" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
