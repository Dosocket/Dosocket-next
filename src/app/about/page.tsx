"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { team, BRAND } from "@/lib/site-data";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import ExecutionFramework from "@/components/ExecutionFramework";

const values = [
  { t: "Senior only", d: "No juniors. Every engagement is led by experienced operators." },
  { t: "AI-multiplied", d: "We use AI systems to accelerate thinking, design, and delivery." },
  { t: "Outcome-driven", d: "Every decision ties back to measurable product impact." },
  { t: "Transparent systems", d: "Shared tools, shared visibility, no hidden workflows." },
];

const why = [
  { t: "2× faster cycles", d: "AI-assisted workflows compress build cycles significantly." },
  { t: "End-to-end ownership", d: "Strategy, design, engineering, growth — one team." },
  { t: "Validation-first", d: "We prototype before committing to full builds." },
  { t: "Flexible scaling", d: "Pods scale based on roadmap intensity." },
];

const process = [
  { t: "Discovery", d: "We define scope, goals, constraints." },
  { t: "Strategy", d: "Architecture + product direction." },
  { t: "Build", d: "Weekly shipping cycles with continuous iteration." },
  { t: "Scale", d: "Growth + optimization systems." },
  { t: "Handoff", d: "Clean delivery or ongoing retainers." },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white overflow-clip">
      {/* ================= HERO ================= */}
      <section className="bg-[#F5F5F5] text-black px-6 md:px-[80px] pt-24 md:pt-32 pb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-black text-white text-[10px] font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            About Dosocket
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 leading-tight text-black">
            Why founders choose DOSOCKET
          </h1>
          <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
            Senior-led product execution and AI-accelerated workflows that<br className="hidden md:block" /> compress build cycles and amplify output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] max-w-[1200px] mx-auto">
          {/* Card 1 */}
          <div className="md:row-span-2 bg-white rounded-[24px] p-6 flex flex-col justify-between border border-gray-200">
            <div className="bg-[#F5F5F5] rounded-[16px] aspect-[4/5] w-full mb-6 overflow-hidden relative border border-gray-100">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium">Image: Architecture</div>
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium leading-[1.4] mb-6 text-black">
                Built by senior experts to deliver scalable systems and unmatched code quality.
              </p>
              <button className="bg-black text-white rounded-full px-5 py-2.5 flex items-center gap-2 text-[14px] font-semibold hover:bg-gray-800 transition">
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] overflow-hidden flex flex-col border border-gray-200">
            <div className="h-[160px] md:h-[180px] w-full relative bg-[#F5F5F5]">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium">Image: Partnership</div>
            </div>
            <div className="p-6">
              <p className="text-lg md:text-xl font-medium leading-[1.4] text-black">
                Trusted by <span className="text-gray-500">fast-growing<br className="hidden md:block" /> startups worldwide.</span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-[24px] p-6 flex flex-row items-end justify-between text-white">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-medium leading-none mb-2 text-[#D6FC00]">2x</h2>
              <p className="text-gray-400 text-[12px] md:text-[13px] font-medium max-w-[120px]">Faster delivery with AI workflows.</p>
            </div>
            <div className="w-[80px] h-[100px] md:w-[100px] md:h-[120px] rounded-[12px] relative ml-4 overflow-hidden bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-medium text-center text-xs px-2">Image: Speed</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-white rounded-[24px] flex flex-col md:flex-row overflow-hidden border border-gray-200">
            <div className="p-6 flex-1 flex flex-col justify-end">
              <p className="text-lg md:text-xl font-medium leading-[1.4] max-w-sm text-black">
                Transforms your vision <span className="text-gray-500">into a robust, market-ready reality.</span>
              </p>
            </div>
            <div className="h-[160px] md:h-auto md:w-[40%] relative bg-[#F5F5F5]">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-center text-sm px-4">Image: Product Interface</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="bg-[#000000] text-[#F5F5F5] px-6 md:px-16 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000]/80 pointer-events-none" />

        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight relative z-10">
            Principles
          </h2>
        </Reveal>

        {/* Grid Layout */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white border border-[#091C1A]/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:border-[#000000] transition-colors duration-300"
            >
              <div>
                {/* Card Title using Main Dark */}
                <h3 className="text-2xl font-medium text-[#091C1A] tracking-tight">
                  {v.t}
                </h3>
                {/* Card Description using Lighter Text color */}
                <p className="mt-4 text-[#091C1A]/70 leading-relaxed text-sm md:text-base">
                  {v.d}
                </p>
              </div>

              {/* Premium subtle detail accentuating the card bottom */}
              <div className="mt-6 w-8 h-1 bg-[#D6FC00] rounded-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="bg-[#F5F5F5] px-6 md:px-[80px] py-32">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start mb-16 gap-6 md:gap-12">
            <div className="bg-white border border-gray-200 text-black text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-2 max-w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              Our expert crew
            </div>
            <h2 className="text-4xl md:text-[56px] font-medium tracking-tight leading-[1.1] text-black">
              Meet the<br />leadership team
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "A", role: "1" },
              { name: "B", role: "2" },
              { name: "C", role: "3" },
              { name: "D", role: "4" },
              { name: "E", role: "5" },
              { name: "F", role: "6" },
              { name: "G", role: "7" },
              { name: "H", role: "8" },
            ].map((m, i) => (
              <div key={m.name} className="relative aspect-[4/5] bg-[#E8E8E8] rounded-[24px] overflow-hidden group">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">
                  Image
                </div>

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

                <div className="absolute bottom-6 left-6 right-8">
                  <h3 className="text-white text-[22px] font-medium leading-tight">{m.name}</h3>
                  <p className="text-white/80 text-[12px] mt-1">{m.role}</p>
                </div>

                {/* Plus button cut-out illusion */}
                <div className="absolute bottom-0 right-0 bg-[#F5F5F5] pt-2 pl-2 rounded-tl-[20px]">
                  <div className="bg-white w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer text-black border border-gray-100 shadow-sm">
                    <span className="text-xl font-light leading-none mb-0.5">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      { /* ================= PROCESS SECTION ================= */}
      <ExecutionFramework />

    </div>
  );
}
