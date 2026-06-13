import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { CustomCursor } from "@/components/ui/custom-cursor";
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-background text-foreground flex flex-col">
        <CustomCursor />
        <SmoothScroll>
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
