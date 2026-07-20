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
      className="relative flex min-h-screen sm:min-h-[95vh] w-full flex-col justify-center items-center bg-white pt-16 pb-0 sm:pt-20 md:pt-24 text-black overflow-hidden select-none"
    >
      {/* Decorative side rules */}
      <div className="absolute top-0 left-12 h-full w-px bg-neutral-200/60 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-12 h-full w-px bg-neutral-200/60 pointer-events-none hidden lg:block" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center text-center">

        {/* Small top-line agency descriptor */}
        <p className="animate-fade-in text-balance text-xs sm:text-sm tracking-widest uppercase pt-6 text-neutral-500 mb-4 sm:mb-6 font-extrabold font-sans">
          DOSOCKET® is a LEADING PAKISTANI WEB DESIGN AGENCY.
        </p>

        {/* 
          Main Headline
        */}
        <div className="font-space text-[clamp(2rem,7vw,2.8rem)] sm:text-[clamp(2.5rem,4vw,3.5rem)] md:text-[5vw] lg:text-[6vw] leading-[0.95] tracking-tighter uppercase font-bold flex flex-col items-center w-full">

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

          <div className="animate-fade-in block min-h-[1.3em] sm:text-[clamp(2.5rem,5vw,3.5rem)] md:text-[6vw] lg:text-[6.5vw]">
            <FlipText
              words={FLIP_WORDS}
              className="font-space tracking-tighter font-bold text-neutral-400"
            />
          </div>
        </div>

        {/* Supporting copy */}
        <div className="mt-6 sm:mt-8 md:mt-10 max-w-3xl animate-fade-in">
          <p className="text-balance text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-500 font-sans">
            We supercharge structural web capabilities across regional sectors by building digital architectures optimized for high performance.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-12 sm:mb-16 animate-fade-in w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors text-sm sm:text-base">
            Explore Our Work
          </button>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-black border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>

      {/* Stats Card - End to End */}
      <div className="w-full animate-fade-in mt-auto border-t border-b border-neutral-200/80 bg-white">
        <div className="w-full max-w-7xl mx-auto p-8 md:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x divide-neutral-200/80">
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-black mb-2">100%</span>
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest text-center">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-black mb-2">60+</span>
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest text-center">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-black mb-2">16+</span>
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest text-center">Global Clients</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-space text-black mb-2">4X</span>
              <span className="text-[10px] md:text-xs font-bold text-neutral-500 uppercase tracking-widest text-center">Faster Delivery</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}