"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AgencyButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: "filled" | "outline";
  className?: string;
}

export function AgencyButton({
  text,
  onClick,
  href,
  variant = "filled",
  className,
}: AgencyButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 cursor-pointer text-center group w-full";

  const variants = {
    filled:
      "bg-lime text-lime-foreground hover:scale-[1.02] shadow-sm hover:shadow-md hover:brightness-95",
    outline:
      "border border-border bg-white text-foreground hover:border-foreground hover:bg-neutral-50 hover:scale-[1.02] shadow-xs",
  };

  const content = (
    <>
      <span className="tracking-tight">{text}</span>
      <span
        className={cn(
          "grid size-7 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          variant === "filled"
            ? "bg-black text-lime"
            : "bg-neutral-100 text-foreground group-hover:bg-black group-hover:text-white"
        )}
      >
        <ArrowUpRight className="size-3.5" />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </button>
  );
}
