"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Map, Code, Rocket, Package } from "lucide-react";

const ICONS = [Search, Map, Code, Rocket, Package];

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    subtitle: "We define scope, goals, constraints.",
    desc: "Before building, we thoroughly identify your system targets, project scope guidelines, and evaluate potential business or timing challenges.",
    bullets: [
      "Complete audit of system requirements",
      "Timeline constraint configuration",
      "Evaluation of roadmap viability",
      "Detailed Scope of Work agreement formulation"
    ]
  },
  {
    num: "02",
    title: "Strategy",
    subtitle: "Architecture + product direction.",
    desc: "We formulate the exact framework direction, build custom data schemas, and draw structured technical workflows.",
    bullets: [
      "Full-scale system database design mapping",
      "Advanced user flow & wireframe layout checks",
      "API design schemas definition",
      "Serverless optimization structure planning"
    ]
  },
  {
    num: "03",
    title: "Build",
    subtitle: "Weekly shipping cycles.",
    desc: "High momentum agile software development begins. We ship modular code changes directly to staging servers on weekly cycles.",
    bullets: [
      "Weekly functional feature deployment",
      "Continuous automated quality testing",
      "Rigorous peer code review stages",
      "Instant client demonstration loops"
    ]
  },
  {
    num: "04",
    title: "Scale",
    subtitle: "Growth + optimization systems.",
    desc: "We optimize your live code to survive massive traffic surges, tune queries, and setup high scale cache infrastructure.",
    bullets: [
      "Advanced database query optimizations",
      "Full asset delivery global CDN tuning",
      "Auto-scaling configuration and stress testing",
      "Comprehensive conversions tracking analytics"
    ]
  },
  {
    num: "05",
    title: "Handoff",
    subtitle: "Clean delivery or ongoing retainers.",
    desc: "Your product deployment succeeds cleanly. All credentials, design repositories, logs, and codes are delivered smoothly.",
    bullets: [
      "Fully completed repository ownership handover",
      "DevOps keys & credentials transfer walkthrough",
      "Interactive codebase walkthrough recording",
      "Long term retainer or maintenance planning"
    ]
  }
];

export default function ExecutionFramework() {
  const containerRef = useRef<HTMLDivElement>(null);
  const outerGlowRef = useRef<SVGCircleElement>(null);
  const innerCoreRef = useRef<SVGCircleElement>(null);
  const dotGroupRef = useRef<SVGGElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const activeIndexRef = useRef(0);

  // Render Loop variables
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      if (totalScrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const scrollRatio = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      
      let mappedProgress;
      if (scrollRatio <= 0.85) {
        mappedProgress = (scrollRatio / 0.85) * 4.0;
      } else {
        const exitRatio = (scrollRatio - 0.85) / 0.15;
        mappedProgress = 4.0 + exitRatio * 0.8;
      }
      
      targetProgressRef.current = Math.max(0, Math.min(4.8, mappedProgress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (window.innerHeight < 850) {
        setScale(window.innerHeight / 850);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const loop = () => {
      // Lerp for buttery smooth physics
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.09;
      const p = currentProgressRef.current;

      // Update Dot Position along the static cubic bezier S-curve
      let dotX = 140;
      let activeY = 50;
      
      if (p <= 2) {
        // Top half curve mapping
        const t = Math.max(0, p / 2); // 0 to 1
        const u = 1 - t;
        dotX = 140 * u * u * u + 420 * u * u * t + 120 * u * t * t + 40 * t * t * t;
        activeY = 50 + 300 * t - 300 * t * t + 200 * t * t * t;
      } else {
        // Bottom half curve mapping
        const t = Math.min(1, (p - 2) / 2); // 0 to 1
        const u = 1 - t;
        dotX = 40 * u * u * u + 120 * u * u * t + 420 * u * t * t + 140 * t * t * t;
        activeY = 250 + 300 * t - 300 * t * t + 200 * t * t * t;
      }

      // Linear extensions for exiting bounds gracefully
      if (p > 4) {
        dotX = 140;
        activeY = 450 + (p - 4) * 100;
      } else if (p < 0) {
        dotX = 140;
        activeY = 50 + p * 100;
      }

      // Hide dot when significantly out of bounds
      const isOutOfBounds = p < -0.1 || p > 4.5;
      if (dotGroupRef.current) {
        if (isOutOfBounds) {
          dotGroupRef.current.setAttribute("opacity", "0");
        } else {
          dotGroupRef.current.setAttribute("opacity", "1");
          if (outerGlowRef.current) {
            outerGlowRef.current.setAttribute("cx", dotX.toString());
            outerGlowRef.current.setAttribute("cy", activeY.toString());
          }
          if (innerCoreRef.current) {
            innerCoreRef.current.setAttribute("cx", dotX.toString());
            innerCoreRef.current.setAttribute("cy", activeY.toString());
          }
        }
      }

      // Sync active step
      const nearestActive = Math.max(0, Math.min(4, Math.round(p)));
      if (nearestActive !== activeIndexRef.current) {
        activeIndexRef.current = nearestActive;
        setActiveIndex(nearestActive);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const activeData = STEPS[activeIndex];

  return (
    <div ref={containerRef} className="relative h-[320vh] w-full bg-[#F5F5F5]">
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 md:px-8">
        
        <div 
          className="flex flex-col items-center w-full"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
        >
          {/* Title */}
          <div className="text-center mb-6 md:mb-10 z-10 relative">
            <div className="bg-white border border-gray-200 text-black text-[12px] font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest inline-flex mb-4 md:mb-6">
              Execution Framework
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-4">
              How we turn vision into reality
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
              A battle-tested 5-step process designed for fast-growing startups and enterprises.
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="relative w-full max-w-[1000px] h-[600px] bg-white rounded-[32px] border border-gray-200 p-6 md:p-10 flex flex-col shadow-xl z-10">
          
          <div className="grid grid-cols-12 gap-4 md:gap-8 items-center h-full relative w-full">
            
            {/* Left Column: Steps */}
            <div className="col-span-4 h-[500px] relative z-10 select-none hidden sm:block">
              {STEPS.map((step, idx) => {
                const isActive = activeIndex === idx;
                const isPast = activeIndex > idx;
                const Icon = ICONS[idx];
                
                return (
                  <div
                    key={idx}
                    className="absolute right-0 w-full flex items-center justify-end gap-4 transition-all duration-500"
                    style={{ 
                      top: `${50 + idx * 100}px`, 
                      transform: `translateY(-50%) translateX(${isActive ? '-12px' : '0px'})`,
                      opacity: isActive ? 1 : 0.4
                    }}
                  >
                    <div className="text-right hidden md:block">
                      <h4 className={`text-base md:text-lg font-bold tracking-wide transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 max-w-[200px] mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                    
                    {/* Icon Circle */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 border shadow-sm ${
                      isActive 
                        ? 'bg-[#D6FC00] text-black border-[#D6FC00] scale-110 shadow-lg shadow-[#D6FC00]/20' 
                        : isPast 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-gray-400 border-gray-200'
                    }`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Middle Column: SVG Curve */}
            <div className="col-span-1 sm:col-span-2 justify-center h-[500px] relative pointer-events-none hidden sm:flex">
              <svg width="180" height="500" className="absolute top-0 overflow-visible">
                <defs>
                  <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="curve-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.05" />
                    <stop offset="25%" stopColor="#000000" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#000000" stopOpacity="0.9" />
                    <stop offset="75%" stopColor="#000000" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Static SVG Path - centered with a gentle sweeping slope */}
                <path 
                  d="M 140 0 L 140 50 C 140 150, 40 150, 40 250 C 40 350, 140 350, 140 450 L 140 500" 
                  fill="none" 
                  stroke="url(#curve-gradient)" 
                  strokeWidth="3" 
                />

                {/* Static node markers along the path */}
                <g>
                  <circle cx="140" cy="50" r="4" fill="#E5E5E5" className={`transition-opacity duration-300 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`} />
                  <circle cx="90" cy="150" r="4" fill="#E5E5E5" className={`transition-opacity duration-300 ${activeIndex === 1 ? 'opacity-0' : 'opacity-100'}`} />
                  <circle cx="40" cy="250" r="4" fill="#E5E5E5" className={`transition-opacity duration-300 ${activeIndex === 2 ? 'opacity-0' : 'opacity-100'}`} />
                  <circle cx="90" cy="350" r="4" fill="#E5E5E5" className={`transition-opacity duration-300 ${activeIndex === 3 ? 'opacity-0' : 'opacity-100'}`} />
                  <circle cx="140" cy="450" r="4" fill="#E5E5E5" className={`transition-opacity duration-300 ${activeIndex === 4 ? 'opacity-0' : 'opacity-100'}`} />
                </g>

                {/* Travelling dot */}
                <g ref={dotGroupRef}>
                  <circle ref={outerGlowRef} r="14" fill="#D6FC00" opacity="0.4" filter="url(#neon-glow)" />
                  <circle ref={innerCoreRef} r="6" fill="#000000" stroke="#D6FC00" strokeWidth="2" />
                </g>
              </svg>
            </div>

            {/* Right Column: Active Step Details */}
            <div className="col-span-12 sm:col-span-6 flex items-center relative z-10 h-[500px]">
              <div className="w-full bg-black rounded-[24px] p-6 md:p-8 text-white shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-800">
                {/* Subtle bg glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D6FC00]/10 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="bg-[#D6FC00]/10 text-[#D6FC00] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D6FC00]/20">
                    Phase {activeData.num}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-3">
                  {activeData.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base font-medium mb-6 uppercase tracking-wider">
                  {activeData.subtitle}
                </p>

                <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed mb-8">
                  {activeData.desc}
                </p>

                <div className="space-y-5 mb-8">
                  {activeData.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D6FC00]/10 text-[#D6FC00] flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-300 text-[14px] md:text-base leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
