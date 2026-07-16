"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ExternalLink } from "lucide-react";
import ExecutionFramework from "@/components/ExecutionFramework";

// Types
interface TeamMember {
  name: string;
  role: string;
  img: string;
  portfolioUrl: string;
}

interface Value {
  t: string;
  d: string;
}

const values: Value[] = [
  {
    t: "Senior only",
    d: "No juniors. Every engagement is led by experienced operators.",
  },
  {
    t: "AI-multiplied",
    d: "We use AI systems to accelerate thinking, design, and delivery.",
  },
  {
    t: "Outcome-driven",
    d: "Every decision ties back to measurable product impact.",
  },
  {
    t: "Transparent systems",
    d: "Shared tools, shared visibility, no hidden workflows.",
  },
];

// Team data with individual portfolio links
const teamMembers: TeamMember[] = [
  {
    name: "Qasim",
    role: "CEO",
    img: "/Qasim.jpeg",
    portfolioUrl: "https://icuxali.framer.ai/",
  },
  {
    name: "Fatima",
    role: "UI/UX Designer",
    img: "/Fatima-Rashid.jpeg",
    portfolioUrl: "#", // Add Fatima's portfolio link here
  },
  {
    name: "Minhaj",
    role: "Full Stack Developer",
    img: "/Minhaj.jpeg",
    portfolioUrl: "https://minhaj-psi.vercel.app/",
  },
  {
    name: "Ayesha",
    role: "Sales Manager",
    img: "/Ayesha-Janjua.jpeg",
    portfolioUrl: "#", // Add Ayesha's portfolio link here
  },
];

export default function AboutPage() {
  const handlePortfolioClick = (member: TeamMember) => {
    // Open portfolio in new tab
    if (member.portfolioUrl && member.portfolioUrl !== "#") {
      window.open(member.portfolioUrl, "_blank");
    }
  };

  return (
    <div className="bg-black text-white overflow-clip">
      {/* ================= HERO ================= */}
      <section className="bg-[#F5F5F5] text-black px-6 md:px-20 pt-24 md:pt-32 pb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-black text-white text-[10px] font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            About Dosocket
          </div>
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 leading-tight text-black">
            Why founders choose DOSOCKET
          </h1>
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-xl">
            Senior-led product execution and AI-accelerated workflows that
            <br className="hidden md:block" /> compress build cycles and amplify
            output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Card 1 - Architecture */}
          <div className="md:row-span-2 bg-white rounded-3xl p-6 flex flex-col justify-between border border-gray-200">
            <div className="bg-[#F5F5F5] rounded-2xl aspect-4/5 w-full mb-6 overflow-hidden relative border border-gray-100">
              <img
                src="/Architecture.jpg"
                alt="Architecture"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium leading-[1.4] mb-6 text-black">
                Built by senior experts to deliver scalable systems and
                unmatched code quality.
              </p>
              <button className="bg-black text-white rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-semibold hover:bg-gray-800 transition">
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2 - Partnership */}
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col border border-gray-200">
            <div className="h-40 md:h-45 w-full relative bg-[#F5F5F5] overflow-hidden">
              <img
                src="/Partnership.jpg"
                alt="Partnership"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-lg md:text-xl font-medium leading-[1.4] text-black">
                Trusted by{" "}
                <span className="text-gray-500">
                  fast-growing
                  <br className="hidden md:block" /> startups worldwide.
                </span>
              </p>
            </div>
          </div>

          {/* Card 3 - Speed */}
          <div className="bg-black rounded-3xl p-6 flex flex-row items-end justify-between text-white">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-medium leading-none mb-2 text-[#D6FC00]">
                2x
              </h2>
              <p className="text-gray-400 text-xs md:text-[13px] font-medium max-w-30">
                Faster delivery with AI workflows.
              </p>
            </div>
            <div className="w-20 h-25 md:w-25 md:h-30 rounded-xl relative ml-4 overflow-hidden bg-gray-900 flex-shrink-0">
              <img
                src="/Speed.jpg"
                alt="Speed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 4 - Product Interface */}
          <div className="md:col-span-2 bg-white rounded-3xl flex flex-col md:flex-row overflow-hidden border border-gray-200">
            <div className="p-6 flex-1 flex flex-col justify-end">
              <p className="text-lg md:text-xl font-medium leading-[1.4] max-w-sm text-black">
                Transforms your vision{" "}
                <span className="text-gray-500">
                  into a robust, market-ready reality.
                </span>
              </p>
            </div>
            <div className="h-40 md:h-auto md:w-[40%] relative bg-[#F5F5F5] overflow-hidden">
              <img
                src="/Product-Interface.jpg"
                alt="Product Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="bg-black text-[#F5F5F5] px-6 md:px-16 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 pointer-events-none" />

        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight relative z-10">
            Principles
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white border border-[#091C1A]/5 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:border-black transition-colors duration-300"
            >
              <div>
                <h3 className="text-2xl font-medium text-[#091C1A] tracking-tight">
                  {v.t}
                </h3>
                <p className="mt-4 text-[#091C1A]/70 leading-relaxed text-sm md:text-base">
                  {v.d}
                </p>
              </div>
              <div className="mt-6 w-8 h-1 bg-black rounded-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="bg-[#F5F5F5] px-6 md:px-20 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start mb-16 gap-6 md:gap-12">
            <div className="bg-white border border-gray-200 text-black text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-2 max-w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              Our expert crew
            </div>
            <h2 className="text-4xl md:text-[56px] font-medium tracking-tight leading-[1.1] text-black">
              Meet the
              <br />
              leadership team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member: TeamMember) => (
              <div
                key={member.name}
                className="relative aspect-4/5 bg-[#E8E8E8] rounded-3xl overflow-hidden group"
              >
                {/* Image Container */}
                <div className="w-full h-full">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-team-member.jpg";
                    }}
                  />
                </div>

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>

                {/* Name and Role */}
                <div className="absolute bottom-6 left-6 right-8">
                  <h3 className="text-white text-[22px] font-medium leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">{member.role}</p>
                </div>

                {/* Portfolio button */}
                <div className="absolute bottom-0 right-0 bg-[#F5F5F5] pt-2 pl-2 rounded-tl-[20px]">
                  <button
                    onClick={() => handlePortfolioClick(member)}
                    className="bg-white w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer text-black border border-gray-100 shadow-sm group/btn"
                    aria-label={`View ${member.name}'s portfolio`}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <ExecutionFramework />
    </div>
  );
}
