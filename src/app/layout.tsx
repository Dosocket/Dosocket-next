import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

export const metadata: Metadata = {
  title: "Dosocket — Senior Craft, AI-Multiplied Velocity",
  description: "Dosocket is a senior-led product agency. Brand, development, growth, AI automation, and on-demand product teams — 2× faster.",
  openGraph: {
    title: "Dosocket",
    description: "Brand, development, growth, AI automation, on-demand product teams. @dosocket",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <SmoothScroll>
          {/* SLIDING PANEL — the page content. Sits ABOVE the footer (z-10) with a
              solid background so it fully hides the footer until scrolled past.
              The bottom shadow sells the "solid slab lifting off the footer" seam.
              (Shadow points DOWNWARD onto the footer; flip the sign to taste.)
              min-h-screen guarantees the panel always fills the viewport, so the
              footer never peeks out on short pages. */}
          <div className="relative z-10 min-h-screen bg-background shadow-[0_24px_50px_-6px_rgba(0,0,0,0.55)]">
            <SiteHeader />
            <main>{children}</main>
          </div>

          {/* REVEAL-DOOR FOOTER — rendered BEHIND the panel at z-0. */}
          <SiteFooter />
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
// G:\Projects\DoSocket\dosocket-next\src\app\layout.tsx