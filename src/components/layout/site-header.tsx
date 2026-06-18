"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-[800px] -translate-x-1/2 px-4 md:px-0 transition-all duration-300">
      <div className="flex h-14 w-full items-center justify-between rounded-full bg-white/95 px-4 pr-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200/50 backdrop-blur-md">
        
        {/* Logo — text wordmark only */}
        <div className="flex items-center justify-start pl-2">
          <Link
            href="/"
            className="font-display text-base font-bold text-black"
          >
            Dosocket
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-none items-center gap-6">
          {nav.map((n) => {
            const isActive = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                href={n.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black",
                  isActive ? "text-black" : "text-neutral-500"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center justify-end">
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#111113] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-full text-black hover:bg-neutral-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute left-4 right-4 top-16 mt-2 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-neutral-200/50 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => {
              const isActive = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-neutral-100 hover:text-black",
                    isActive ? "bg-neutral-50 text-black font-semibold" : "text-neutral-500"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={BRAND.calcom}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-full bg-[#111113] px-5 py-3.5 text-sm font-medium text-white"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
