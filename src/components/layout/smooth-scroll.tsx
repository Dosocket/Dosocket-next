"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // controls the smoothness (lower = smoother)
      wheelMultiplier: 1,
    });
    
    lenisRef.current = lenis;

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Sync GSAP's ticker with Lenis's requestAnimationFrame
    function update(time: number) {
      lenis.raf(time * 1000);
    }
    
    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      lenisRef.current = null;
    };
  }, []);

  // Force scroll to top on route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
