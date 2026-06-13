"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const items = ["Brand & Experience", "Development", "Growth", "AI Automation", "Product Teams"];

export function Marquee() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Base infinite marquee animation
      const loop = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Tie animation timescale to scroll velocity using ScrollTrigger
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          // Increase speed massively temporarily when user scrolls
          const velocity = self.getVelocity();
          const targetTimeScale = 1 + Math.abs(velocity / 200); // 5x more sensitive
          
          gsap.to(loop, {
            timeScale: targetTimeScale,
            duration: 0.1, // ramp up almost instantly
            overwrite: true,
            onComplete: () => {
              // Return to normal speed after scrolling stops
              gsap.to(loop, { timeScale: 1, duration: 1.5, ease: "power2.out" });
            }
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="overflow-hidden border-y border-black/10 py-6 bg-background">
      <div
        ref={trackRef}
        className="flex gap-12 whitespace-nowrap will-change-transform"
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-xl font-semibold text-black/40">
            {t} <span className="text-black">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
