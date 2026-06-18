/**
 * Primary Button Component
 * Black bg, white border, circular arrow icon on the right.
 * On hover: inverts to white bg with black text.
 */

"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  className?: string;
}

export function PrimaryButton({
  label = "Get Started",
  href,
  onClick,
  target = "_self",
  className = "",
}: PrimaryButtonProps) {
  const classes = `
    group relative flex items-center overflow-hidden rounded-full border border-white
    bg-black text-white font-semibold text-[17px] tracking-[0.05em]
    h-[2.8em] pl-4 pr-[3.3em] cursor-pointer
    transition-colors duration-400 ease-in-out
    hover:bg-white hover:text-black hover:border-black
    ${className}
  `;

  const inner = (
    <>
      <span>{label}</span>
      {/* Circular icon on the right */}
      <span
        className={`
          absolute right-[0.3em] flex h-[2.2em] w-[2.2em] items-center justify-center
          rounded-full bg-white ml-4
        `}
      >
        <ArrowRight
          className={`
            w-[1.1em] text-black
            transition-transform duration-300 ease-out
            group-hover:translate-x-[0.1em] group-hover:-rotate-[25deg]
          `}
        />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}


/**
 * Secondary Button Component
 * Dark bg, rounded border, radial gradient ripple on hover.
 */

interface SecondaryButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  className?: string;
}

export function SecondaryButton({
  label = "Explore",
  href,
  onClick,
  target = "_self",
  className = "",
}: SecondaryButtonProps) {
  const classes = `
    group relative overflow-hidden rounded-[30px] border-2 border-[#2c2c2c]
    bg-[#1a1a1a] text-white font-bold text-[1.1rem] cursor-pointer
    px-[30px] py-[15px] outline-none
    transition-all duration-400 ease-in-out
    hover:border-[#666666] hover:bg-[#292929]
    ${className}
  `;

  /* Radial ripple pseudo-element via inline style trick */
  const rippleSpan = (
    <span
      className={`
        pointer-events-none absolute inset-0 scale-0 rounded-[30px]
        bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]
        transition-transform duration-500 ease-in-out
        group-hover:scale-[4]
      `}
    />
  );

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {rippleSpan}
        <span className="relative z-10">{label}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {rippleSpan}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
