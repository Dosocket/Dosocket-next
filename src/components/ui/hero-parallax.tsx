"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import type { Service } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const HeroParallax = ({
  services,
  heading = "What we build",
  subtext = "Five disciplines. One studio. From brand and product to growth and AI — we ship the full system, not just a piece of it.",
}: {
  services: Service[];
  heading?: React.ReactNode;
  subtext?: React.ReactNode;
}) => {
  // Split data array into two rows for the parallax track layout
  const mid = Math.ceil(services.length / 2);
  const firstRow = services.slice(0, mid);
  const secondRow = services.slice(mid);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // --- PARALLAX TUNING CONFIGURATION ---
  // Change stiffness/damping here to make the overall scrolling speed tighter or looser
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Adjust these values (e.g., 600, -600) to increase or decrease total horizontal shift distance
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig,
  );

  // Controls the 3D perspective tilt entry of the grid when scrolling down
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 150]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      // h-[250vh] controls how long the parallax section stays pinned on screen during scroll
      className="relative flex h-[350vh] flex-col self-auto overflow-hidden bg-background py-40 antialiased perspective-[1000px] transform-3d"
    >
      <Header heading={heading} subtext={subtext} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {/* Row 1 track container layout (moves right) */}
        <motion.div className="mb-8 flex flex-row-reverse space-x-12 space-x-reverse md:space-x-20 md:space-x-reverse">
          {firstRow.map((service) => (
            <ServiceCard
              service={service}
              translate={translateX}
              key={service.slug}
            />
          ))}
        </motion.div>

        {/* Row 2 track container layout (moves left) */}
        <motion.div className="flex flex-row space-x-12 md:space-x-20">
          {secondRow.map((service) => (
            <ServiceCard
              service={service}
              translate={translateXReverse}
              key={service.slug}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

function Header({ heading, subtext }: { heading: React.ReactNode; subtext: React.ReactNode }) {
  return (
    <div className="container-x relative top-0 left-0 w-full py-20 md:py-10">
      <h1
        className="font-display font-extrabold uppercase leading-[0.95] tracking-wider text-foreground"
        // Clamp bounds: min size, scaling fluid size, max size limit
        style={{ fontSize: "clamp(2.5rem, 12vw, 2.5rem)" }}
      >
        {heading}
      </h1>
      <div className="mt-8 max-w-2xl font-normal text-base text-muted-foreground md:text-xl">
        {subtext}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  translate,
}: {
  service: Service;
  translate: MotionValue<number>;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      style={{ x: translate }}
      // whileHover y value controls how many pixels the box lifts up physically on cursor focus
      whileHover={{ y: -6 }}
      // --- CARD PHYSICAL BOX SIZE CONFIGURATION ---
      // Update these Tailwind widths/heights to change the card shape (e.g., md:w-lg, lg:w-160)
      className="relative h-72 w-80 sm:w-96 md:h-80 md:w-lg lg:h-104 lg:w-160 shrink-0"
    >
      <Link
        href={`/services/${service.slug.replace(/-\d+$/, "")}`}
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-900 bg-neutral-950 p-8 transition-all duration-500 select-none",
          "hover:border-neutral-800 hover:shadow-[0_0_50px_-12px_rgba(163,230,53,0.15)]"
        )}
      >
        {/* Ambient top-right background corner glow radius (lime tint) */}
        <div className="absolute -right-20 -top-20 size-60 rounded-full bg-lime/5 blur-[80px] transition-all duration-700 group-hover:bg-lime/10 group-hover:scale-125 pointer-events-none" />

        {/* --- FULL BACKGROUND PICTURE CONFIGURATION --- */}
        {/* Set to inset-0 and w-full so the image spans across the entire card boundary background */}
        {/* Base opacity is set to opacity-35 so image layout detail is completely clear and visible */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-35 group-hover:opacity-60 transition-all duration-700 pointer-events-none">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            // --- IMAGE FILTERS & HOVER EFFECTS ---
            // "grayscale" keeps it black & white. "group-hover:grayscale-0" pops color back on hover.
            // "scale-110 group-hover:scale-100" creates a smooth zoom-out lens effect on hover.
            className="object-cover object-center grayscale contrast-110 transition-transform duration-1000 ease-out scale-110 group-hover:scale-100 group-hover:grayscale-0"
          />
        </div>

        {/* --- HIGH-READABILITY DIMMING OVERLAY --- */}
        {/* Dark mask layer sitting directly over image to protect text contrast so it remains highly readable */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40 z-0 mix-blend-multiply" />

        {/* --- CARD CONTENT WRAPPER --- */}
        {/* Increased max-w thresholds to md:max-w-[85%] since the full background image allows text to fill more space */}
        <div className="relative z-10 flex h-full flex-col justify-between max-w-[90%] md:max-w-[85%]">

          <div>
            {/* Minimal Icon Box Container styling */}
            <div className="inline-grid size-12 place-items-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-white shadow-inner transition-all duration-500 group-hover:border-lime/30 group-hover:bg-black group-hover:text-lime">
              <Icon className="size-5 transition-transform duration-500 group-hover:scale-110" aria-hidden />
            </div>

            {/* Service Headline Title */}
            <h2 className="mt-6 font-sans text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-neutral-100 group-hover:text-white transition-colors">
              {service.title}
            </h2>

            {/* Service Brief Copy description */}
            <p className="mt-3 line-clamp-3 md:line-clamp-4 text-xs sm:text-sm lg:text-base leading-relaxed font-normal text-neutral-300 group-hover:text-white transition-colors">
              {service.short}
            </p>
          </div>

          {/* Bottom Link Action Row (Explore Capability button metadata) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 group-hover:text-lime transition-colors duration-300 pt-4">
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-lime after:transition-all after:duration-300 group-hover:after:w-full">
              Explore Capability
            </span>
            <div className="inline-flex size-6 items-center justify-center rounded-full border border-neutral-800 bg-transparent transition-all duration-300 group-hover:border-lime group-hover:bg-lime/10">
              <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out group-hover:rotate-45" />
            </div>
          </div>

        </div>

        {/* Interactive Bottom Accent Line Border — animates across the width on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-lime transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
    </motion.div>
  );
}