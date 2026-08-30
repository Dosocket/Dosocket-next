import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing — Flexible Plans & Transparent Rates | Dosocket",
  description:
    "Simple, transparent pricing for branding, high-performance web development, digital marketing, and dedicated product teams. No hidden fees, cancel anytime.",
  openGraph: {
    title: "Pricing — Dosocket",
    description:
      "Simple, transparent pricing for branding, development, marketing, and on-demand teams.",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Pricing />
    </main>
  );
}
