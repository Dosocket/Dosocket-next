import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/works", label: "Works" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black px-8 md:px-16 text-white">
      <div className="flex h-12 w-full items-center justify-between">

        <div className="flex flex-1 items-center justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-lg font-black uppercase tracking-wider"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
            Dosocket
          </Link>
        </div>

        <nav className="hidden md:flex flex-none items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
              activeProps={{
                className: "text-white font-bold",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 items-center justify-end">
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-sm font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="w-full border-t border-white/10 bg-black px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white"
                activeProps={{ className: "bg-white/10 text-white font-bold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={BRAND.calcom}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-black"
            >
              <span>Book Call</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}