import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/site-data";

const socials: [string, string][] = [
  ["Cal.com", BRAND.socials.cal],
  ["Gmail", BRAND.socials.gmail],
  ["Facebook", BRAND.socials.facebook],
  ["Instagram", BRAND.socials.instagram],
  ["LinkedIn", BRAND.socials.linkedin],
  ["X", BRAND.socials.x],
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="px-8 py-20 md:px-16">

        <div className="grid items-end gap-12 border-b border-white/10 pb-20 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-medium leading-[1.05] tracking-tighter md:text-7xl">
              Ready to ship
              <br />
              something
              <br />
              unreasonable?
            </h2>
            <p className="max-w-md text-lg text-white/70">
              Dosocket pairs senior craft with AI-multiplied velocity. Book a 30-minute scoping call
              — we reply same day.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href={BRAND.calcom}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Book a Call
              <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">Studio</div>
            <div className="space-y-1 text-sm text-white/80">
              <p>Distributed team</p>
              <p>San Francisco · Bangalore</p>
              <p className="pt-4">{BRAND.email}</p>
              <p>{BRAND.handle}</p>
            </div>
          </div>

          <FooterCol
            title="Explore"
            links={[
              ["/", "Home"],
              ["/about", "About"],
              ["/works", "Works"],
              ["/services", "Services"],
              ["/contact", "Contact"],
            ]}
          />

          <FooterCol
            title="Services"
            links={[
              ["/services/digital-brand-experience", "Brand & Experience"],
              ["/services/high-performance-development", "Development"],
              ["/services/growth-revenue-systems", "Growth"],
              ["/services/ai-workflow-automation", "AI & Automation"],
              ["/services/on-demand-product-teams", "Product Teams"],
            ]}
          />

          <div className="flex flex-col gap-6">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">
              Social
            </div>
            <ul className="space-y-3 text-sm">
              {socials.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 text-sm text-white/50 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center overflow-hidden border-t border-white/10 py-10">
        <h1 className="text-[18vw] font-bold leading-none tracking-tighter text-white md:text-[15vw]">
          DOSOCKET
        </h1>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xs font-bold uppercase tracking-widest text-white/40">{title}</div>
      <ul className="space-y-3 text-sm">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link to={href} className="text-white/80 transition-colors hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}