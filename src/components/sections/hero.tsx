"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const clientImages = [
  "https://placehold.net/100",
  "https://placehold.net/100",
  "https://placehold.net/100",
];

function ClientAvatars() {
  return (
    <div className="flex -space-x-4 overflow-hidden">
      {clientImages.map((src, index) => (
        <img
          key={index}
          className="h-12 w-12 rounded-full border-2 border-white object-cover"
          src={src}
          alt={`client-${index}`}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Exaggerated Parallax effect on the background image
      gsap.to(imageRef.current, {
        yPercent: 150, // dramatically move the image 150% down relative to its container while scrolling
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative min-h-dvh overflow-hidden text-white">
      {/* Background Image with GSAP target ref */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          src="/images/hero-bg.png"
          alt="Hero background"
          fill
          className="object-cover object-center scale-[1.3] transform-origin-top"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Main Content */}
      <div className="relative flex min-h-dvh flex-col justify-between pt-32 pb-10">
        <div className="flex w-full flex-1 flex-col justify-center px-8 md:px-16">
          <div className="grid items-center gap-12 md:grid-cols-[60%_40%]">
            {/* Left Side */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-balance text-6xl font-medium tracking-tighter md:text-8xl"
              >
                Ship brave
                <br />
                work 2×
                <br />
                faster.
              </motion.h1>
            </div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="ml-auto flex max-w-md flex-col items-start gap-8 md:pt-16"
            >
              <p className="text-lg leading-relaxed text-white/70">
                Dosocket is a senior-led product agency. Brand execution, scalable development
                frameworks, growth mechanics, and AI workflow automation pipelines paired with
                tooling architecture that triples engineering velocity.
              </p>

              <a
                href={BRAND.calcom}
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105"
              >
                <span>Let's Talk</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 px-8 sm:flex-row sm:items-center md:px-16">
          <ClientAvatars />

          <div className="flex items-center gap-4 text-sm font-medium">
            <p>Next chapter awaits</p>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
