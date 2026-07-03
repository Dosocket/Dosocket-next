"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FlipText } from "@/components/FlipText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const FLIP_WORDS = ["Future Tech.", "Education.", "Not-For-Profit."];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(".animate-txt-line", { overflow: "hidden" });
      gsap.set(".animate-txt-inner", { y: "100%" });
      gsap.set(".animate-fade-in", { opacity: 0, y: 25 });

      tl.to(".animate-txt-inner", {
        y: "0%",
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.12,
      }).to(
        ".animate-fade-in",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen sm:min-h-[95vh] w-full flex-col justify-center bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 text-black overflow-hidden select-none"
    >
      {/* Decorative side rules */}
      <div className="absolute top-0 left-12 h-full w-px bg-neutral-200/60 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-12 h-full w-px bg-neutral-200/60 pointer-events-none hidden lg:block" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-16 flex flex-col justify-center">

        {/* Small top-line agency descriptor (Uses standard font-sans / Inter) */}
        <p className="animate-fade-in text-balance text-xs sm:text-sm tracking-wide uppercase pt-10 text-black mb-3 sm:mb-4 font-extrabold font-sans">
          DOSOCKET® is a LEADING PAKISTANI WEB DESIGN AGENCY.
        </p>

        {/* 
          Main Headline using 'font-space' (Space Grotesk) instead of the local font.
          Kept the font-bold and tracking properties to preserve the dense, modern typography.
        */}
        <div className="font-space text-[clamp(2.1rem,9.8vw,3.1rem)] sm:text-[clamp(2.7rem,4vw,4rem)] md:text-[6vw] lg:text-[8.1vw] leading-[0.95] tracking-tighter uppercase font-bold">

          <div className="animate-txt-line block">
            <span className="animate-txt-inner block text-neutral-400">
              Websites For
            </span>
          </div>

          <div className="animate-txt-line block">
            <span className="animate-txt-inner block text-black">
              Mission-Driven
            </span>
          </div>

          <div className="animate-txt-line block">
            <span className="animate-txt-inner block text-black">
              Organisations in
            </span>
          </div>

          <div className="animate-fade-in block min-h-[1.3em] sm:text-[clamp(2.7rem,5vw,4rem)] md:text-[7vw] lg:text-[9vw]">
            <FlipText
              words={FLIP_WORDS}
              className="font-space tracking-tighter font-bold"
            />
          </div>
        </div>

        {/* Supporting copy (Uses default font-sans / Inter) */}
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl animate-fade-in">
          <p className="text-balance text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-neutral-600 font-sans">
            We supercharge structural web capabilities across regional sectors by building digital architectures optimized for high performance.
          </p>
        </div>
      </div>
    </section>
  );
}