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
        yPercent: 150,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Cutting-edge Blur + Y stagger reveal for the Hero Heading
      const headingLines = gsap.utils.toArray(".hero-line");
      gsap.fromTo(
        headingLines,
        { y: 60, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.1,
        }
      );

      // Fade in the right side paragraph with a slight delay
      gsap.fromTo(
        ".hero-right",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
      );
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
              <h1 className="text-balance text-5xl font-medium tracking-tighter sm:text-6xl md:text-8xl">
                <div className="overflow-hidden pb-2"><div className="hero-line">Ship brave</div></div>
                <div className="overflow-hidden pb-2"><div className="hero-line">work 2×</div></div>
                <div className="overflow-hidden pb-2"><div className="hero-line">faster.</div></div>
              </h1>
            </div>

            {/* Right Side */}
            <div className="hero-right ml-auto flex max-w-md flex-col items-start gap-8 md:pt-16">
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
            </div>
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
