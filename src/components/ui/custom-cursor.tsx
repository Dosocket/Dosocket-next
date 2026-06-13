"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Select all interactive elements
    const hoverables = document.querySelectorAll("a, button, input, textarea, select");
    
    // QuickSetter for performance
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.2, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleHoverEnter = () => {
      gsap.to(cursorRef.current, { scale: 2, backgroundColor: "rgba(184, 255, 61, 0.5)", border: "none", duration: 0.3 });
    };

    const handleHoverLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: "white", border: "1px solid white", duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
      // Fallback for custom cursors on links
      (el as HTMLElement).style.cursor = "none";
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
      });
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white mix-blend-difference"
      style={{ willChange: "transform" }}
    />
  );
}
