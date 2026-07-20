"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Plus } from "lucide-react";
import ExecutionFramework from "@/components/ExecutionFramework";
import { AboutHero } from "@/components/sections/about-hero";
import { useState } from "react";

// Types
interface TeamMember {
  name: string;
  role: string;
  img: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
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

// Team data with individual links
const teamMembers: TeamMember[] = [
  {
    name: "Qasim",
    role: "CEO",
    img: "/Qasim.jpeg",
    portfolioUrl: "https://icuxali.framer.ai/",
    linkedinUrl: "https://www.linkedin.com/in/icuxqasimali?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Fatima",
    role: "UI/UX Designer",
    img: "/Fatima-Rashid.jpeg",
    portfolioUrl: "https://www.behance.net/fatimarashid23",
    linkedinUrl: "https://www.linkedin.com/in/fatimarashi",
  },
  {
    name: "Minhaj",
    role: "Full Stack Developer",
    img: "/Minhaj.jpeg",
    portfolioUrl: "https://minhaj-psi.vercel.app/",
    linkedinUrl: "https://www.linkedin.com/in/minhaj-arshad-8aa522372/",
  },
  {
    name: "Ayesha",
    role: "Sales Manager",
    img: "/Ayesha-Janjua.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/ayesha-j-834008413?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

export default function AboutPage() {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  const toggleMemberDetails = (name: string) => {
    setActiveMember(activeMember === name ? null : name);
  };

  return (
    <div className="bg-black text-white overflow-clip">
      {/* ================= HERO ================= */}
      <AboutHero />

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

                {/* Plus button & details popup */}
                <div className="absolute bottom-0 right-0 bg-[#F5F5F5] pt-2 pl-2 rounded-tl-[20px]">
                  <button
                    onClick={() => toggleMemberDetails(member.name)}
                    className="bg-white w-10 h-10 rounded-[14px] flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer text-black border border-gray-100 shadow-sm relative z-10"
                    aria-label={`View ${member.name}'s details`}
                  >
                    <Plus className={`w-5 h-5 transition-transform duration-300 ${activeMember === member.name ? 'rotate-45' : ''}`} />
                  </button>
                  
                  {/* Mini Pop-up */}
                  {activeMember === member.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute bottom-12 right-0 bg-white border border-gray-200 shadow-lg rounded-xl p-3 min-w-[120px] flex flex-col gap-2 z-20"
                    >
                      {member.linkedinUrl && (
                        <a 
                          href={member.linkedinUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-black font-medium transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.portfolioUrl && (
                        <a 
                          href={member.portfolioUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-gray-700 hover:text-black font-medium transition-colors"
                        >
                          Portfolio
                        </a>
                      )}
                    </motion.div>
                  )}
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
