import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Works } from "@/components/sections/works";
import { Testimonials } from "@/components/sections/testimonials";

export default function Index() {
  return (
    <div className="text-black">
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesGrid />
      <Works />
      <Testimonials />
    </div>
  );
}
