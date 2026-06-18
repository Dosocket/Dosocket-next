import Link from "next/link";
import { BRAND } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#f5f5f5] relative overflow-hidden flex flex-col items-center pb-8">
      
      {/* ═══════════════════════════════════
          TOP LIME CTA SECTION
      ═══════════════════════════════════ */}
      <div className="w-[calc(100%-32px)] sm:w-[calc(100%-64px)] mt-4 bg-[#E8FF00] rounded-[2.5rem] px-6 py-28 flex flex-col items-center text-center relative z-10 shadow-lg">
        <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-black">
          Turn your ideas into reality
        </h2>
        <p className="mt-5 text-black/70 max-w-md text-[15px] leading-relaxed">
          Dosocket makes it effortless to build digital products, uncover insights,
          and ship faster with your team.
        </p>
        <Link
          href={BRAND.calcom}
          target="_blank"
          className="mt-10 bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-neutral-800 transition-transform hover:scale-105 active:scale-95"
        >
          Get Started
        </Link>
      </div>

      {/* ═══════════════════════════════════
          BOTTOM FLOATING CARD SECTION
      ═══════════════════════════════════ */}
      <div className="relative w-full px-4 sm:px-8 flex flex-col items-center mt-[-40px] pt-24 min-h-[450px]">

        {/* Floating White Card */}
        <div className="relative z-10 w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 p-8 md:p-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Brand & Description */}
            <div className="md:col-span-5 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                {/* Brand Logo Icon */}
                <div className="bg-black text-white p-1.5 rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="w-4 h-4"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-semibold text-lg tracking-tight text-neutral-900">
                  Dosocket
                </span>
              </div>
              <p className="text-sm text-neutral-500 max-w-xs leading-[1.6]">
                Dosocket helps teams transform complex ideas into clear, engaging
                products—everything you need to build the future in one place.
              </p>
            </div>

            {/* Right Column: Links Grid */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <FooterCol
                title="Product"
                links={[
                  ["/features", "Features"],
                  ["/pricing", "Pricing"],
                  ["/integrations", "Integrations"],
                  ["/updates", "Updates"],
                ]}
              />
              <FooterCol
                title="Resources"
                links={[
                  ["/documentation", "Documentation"],
                  ["/guides", "Guides"],
                  ["/blog", "Blog"],
                  ["/support", "Support"],
                ]}
              />
              <FooterCol
                title="Company"
                links={[
                  ["/about", "About"],
                  ["/careers", "Careers"],
                  ["/contact", "Contact"],
                  ["/partners", "Partners"],
                ]}
              />
            </div>
          </div>

          {/* Footer Bottom Strip */}
          <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-100 pt-8 text-[13px] font-medium text-neutral-400">
            <p>© {new Date().getFullYear()} Dosocket. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-neutral-900 transition-colors underline decoration-transparent hover:decoration-neutral-300 underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-neutral-900 transition-colors underline decoration-transparent hover:decoration-neutral-300 underline-offset-4">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Huge Watermark Background Text (Moved Below the Card) */}
        <div className="w-full flex justify-center pointer-events-none select-none overflow-hidden mt-12 mb-[-20px]">
          <h1 className="text-[17vw] font-black leading-none tracking-tighter text-black/10">
            DOSOCKET
          </h1>
        </div>

      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   Footer Column Component
───────────────────────────────────────── */
function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <ul className="space-y-3 text-[13px]">
        {links.map(([href, label]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
