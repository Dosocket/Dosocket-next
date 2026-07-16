"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  className?: string;
  /** Words to cycle through, one at a time */
  words: string[];
  /** Fill colors — one is picked at random per word, never blended, never repeats back-to-back */
  colors?: string[];
}

const DEFAULT_COLORS = [""];

const ENTER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EXIT_EASE: [number, number, number, number] = [0.55, 0, 1, 0.45];

const ENTER_DURATION = 0.8; // word slides up into place, lands black
const HOLD_BLACK = 1.5;     // pause — word sits black, fill hasn't started yet
const FILL_DURATION = 3;    // color slides up from the bottom, fills the word
const EXIT_DURATION = 0.6;  // once fully filled, word slides up and away

// Total time one word occupies the slot, start to finish.
// Same on every screen size — timing doesn't change with breakpoint.
const CYCLE_MS = (ENTER_DURATION + HOLD_BLACK + FILL_DURATION + EXIT_DURATION) * 1000;

const wordVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: ENTER_DURATION, ease: ENTER_EASE },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: EXIT_DURATION, ease: EXIT_EASE },
  },
};

export function FlipText({ className, words, colors = DEFAULT_COLORS }: FlipTextProps) {
  const [index, setIndex] = useState(0);
  const [fillColor, setFillColor] = useState(colors[0]);
  const lastColorRef = useRef<number>(-1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const word = words[index % words.length];
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  // Pick a random fill color for this word — never the same as the previous word's color.
  useEffect(() => {
    if (colors.length === 0) return;
    let next = Math.floor(Math.random() * colors.length);
    if (colors.length > 1) {
      while (next === lastColorRef.current) {
        next = Math.floor(Math.random() * colors.length);
      }
    }
    lastColorRef.current = next;
    setFillColor(colors[next]);
  }, [index, colors]);

  // Advance to the next word once this one's full cycle finishes.
  // Lives inside the component so it can never drift out of sync, on any screen size.
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, CYCLE_MS);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, words.length]);

  return (
    // text-[0.85em] makes this slightly smaller than the surrounding heading
    // text, scaling automatically with whatever font-size is active at any
    // breakpoint. This is a safety margin: "Not-For-Profit." is the longest
    // word in the rotation, and forcing it onto one line (whitespace-nowrap,
    // needed so the slide/fill animation looks clean) means it has the
    // highest overflow risk on narrow phones. Shrinking it ~15% guarantees
    // it always has room, without needing separate per-breakpoint overrides.
    // No left/right padding here — keeps it flush-left with the lines above it.
    <span
      className={cn(
        "relative inline-grid align-baseline text-[0.85em] normal-case tracking-normal overflow-hidden",
        className
      )}
    >
      {/* Invisible sizer, sized to the longest word so layout never jumps between words */}
      <span
        aria-hidden
        className="col-start-1 row-start-1 inline-flex whitespace-nowrap opacity-0 pointer-events-none"
      >
        {longestWord}
      </span>

      <AnimatePresence mode="sync">
        <motion.span
          key={index}
          variants={wordVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="col-start-1 row-start-1 inline-block whitespace-nowrap"
        >
          <span className="relative inline-block">
            {/* Black base layer — visible during the hold, before the fill starts */}
            <span className="text-black">{word}</span>

            {/* Color slides up from the bottom, fills the word smoothly */}
            <motion.span
              key={fillColor}
              className="absolute inset-0"
              style={{ color: fillColor }}
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: FILL_DURATION,
                delay: ENTER_DURATION + HOLD_BLACK,
                ease: "easeInOut",
              }}
            >
              {word}
            </motion.span>
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default FlipText;