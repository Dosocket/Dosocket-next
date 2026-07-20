"use client";

import React, { useEffect } from "react";

export function AboutHero() {
  useEffect(() => {
    // 1. Spotlight tracker
    const spotlight = document.getElementById("about-spotlight");
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlight) {
        spotlight.style.left = `${e.clientX + window.scrollX}px`;
        spotlight.style.top = `${e.clientY + window.scrollY}px`;
      }
    };
    document.body.addEventListener("mousemove", handleMouseMove);

    // 2. Parallax Cards
    const cards = document.querySelectorAll(".about-premium-card") as NodeListOf<HTMLElement>;
    const moveHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    cards.forEach(card => {
      const moveFn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -((y - centerY) / centerY) * 2;
        const rotateY = ((x - centerX) / centerX) * 2;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      };
      const leaveFn = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      };
      moveHandlers.set(card, moveFn);
      leaveHandlers.set(card, leaveFn);
      card.addEventListener("mousemove", moveFn);
      card.addEventListener("mouseleave", leaveFn);
    });

    // 3. Counter Animation
    const counters = document.querySelectorAll(".about-stat-counter") as NodeListOf<HTMLElement>;
    const animateCounter = (counter: HTMLElement) => {
      const target = parseInt(counter.getAttribute("data-target") || "0", 10);
      const duration = 2000;
      const startPoint = performance.now();
      const updateVal = (now: number) => {
        const elapsed = now - startPoint;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          counter.innerText = Math.floor(easeOut * target).toString();
          requestAnimationFrame(updateVal);
        } else {
          counter.innerText = target.toString();
        }
      };
      requestAnimationFrame(updateVal);
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(counter => scrollObserver.observe(counter));

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      cards.forEach(card => {
        const moveFn = moveHandlers.get(card);
        const leaveFn = leaveHandlers.get(card);
        if (moveFn) card.removeEventListener("mousemove", moveFn);
        if (leaveFn) card.removeEventListener("mouseleave", leaveFn);
      });
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="about-noise-grid text-zinc-900 relative overflow-x-hidden w-full selection:bg-zinc-950 selection:text-white pt-24 md:pt-32 pb-24">
      <style dangerouslySetInnerHTML={{ __html: `
        .about-noise-grid {
          background-color: #FFFFFF;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, #FFFFFF 100%),
            linear-gradient(to right, rgba(0,0,0,0.008) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(0,0,0,0.008) 1px, transparent 1px),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.012'/%3E%3C/svg%3E");
          background-size: 100% 100%, 80px 80px, 80px 80px, auto;
        }
        .about-spotlight-tracker {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
          z-index: 1;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: left 0.15s cubic-bezier(0.1, 0.8, 0.2, 1), top 0.15s cubic-bezier(0.1, 0.8, 0.2, 1);
        }
        .about-glow-lime {
          box-shadow: 0 0 45px -12px rgba(198, 255, 0, 0.2);
        }
        .about-premium-card {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          will-change: transform, box-shadow;
        }
        .about-premium-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.1);
        }
        @keyframes about-dash { to { stroke-dashoffset: 0; } }
        .about-anim-dash { stroke-dasharray: 8; animation: about-dash 12s linear infinite; }
        @keyframes about-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.5deg); }
        }
        .about-float-slow { animation: about-float 8s ease-in-out infinite; }
        @keyframes about-spin-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .about-spin-orbit { animation: about-spin-orbit 40s linear infinite; }
      `}} />

      {/* Spotlight */}
      <div id="about-spotlight" className="about-spotlight-tracker hidden md:block absolute"></div>

      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <header className="text-center mb-28 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.22em] uppercase bg-zinc-950 text-white mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF00]"></span>
            ABOUT DOSOCKET
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.05] mb-8 max-w-3xl">
            Why Founders Choose <span className="relative inline-block text-zinc-950 font-black">DOSOCKET</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 font-light leading-relaxed max-w-2xl px-2">
            Senior-led product execution powered by AI workflows that accelerate delivery without compromising quality.
          </p>
        </header>

        {/* ── BENTO GRID ── */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">

          {/* ── CARD 1: Senior Product Experts (Large Left, with Blueprint SVG) ── */}
          <article className="about-premium-card md:col-span-7 md:row-span-2 bg-white border border-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[580px] md:min-h-[660px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">01 / ARCHITECTURE</span>
                <span className="text-[9px] bg-zinc-50 text-zinc-500 px-2 py-0.5 rounded font-mono font-bold border border-zinc-100">SYSTEM ARCHITECTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                Senior Product Experts
              </h3>
              <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Every project is led by experienced product strategists, designers, and engineers who build scalable, production-ready systems.
              </p>
            </div>

            {/* Blueprint SVG Illustration */}
            <div className="w-full my-6 relative overflow-hidden h-72 rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:16px_16px] opacity-60"></div>
              <div className="relative w-full h-full flex items-center justify-center scale-95 md:scale-100 transition-transform duration-700 group-hover:scale-105">
                <svg className="w-5/6 h-5/6 overflow-visible" viewBox="0 0 450 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="225" cy="125" r="90" stroke="rgba(0,0,0,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="225" cy="125" r="130" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                  <path d="M 50,200 L 400,200 M 50,50 L 50,200 M 400,50 L 400,200" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                  <g className="about-float-slow">
                    <path d="M120 160 L225 107 L330 160 L225 213 Z" fill="rgba(0,0,0,0.01)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <path d="M120 160 L120 135 L225 82 L330 135 L330 160" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="2 2" />
                    <g transform="translate(0, -25)">
                      <path d="M150 140 L225 102 L300 140 L225 178 Z" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1.2" />
                      <path d="M165 137 L195 122" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                      <circle cx="160" cy="138" r="1.5" fill="rgba(0,0,0,0.2)" />
                      <circle cx="164" cy="136" r="1.5" fill="rgba(0,0,0,0.2)" />
                      <circle cx="168" cy="134" r="1.5" fill="rgba(0,0,0,0.2)" />
                      <path d="M170 148 L225 120 L280 148 L225 176 Z" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                      <path d="M180 145 L225 122 L270 145" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 1" />
                      <path d="M200 165 L225 152 L250 165" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    </g>
                    <line x1="225" y1="77" x2="225" y2="40" stroke="rgba(0,0,0,0.12)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="150" y1="115" x2="150" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="300" y1="115" x2="300" y2="70" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="225" cy="40" r="3.5" fill="white" stroke="black" strokeWidth="1.5" />
                    <circle cx="150" cy="70" r="2.5" fill="white" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
                    <circle cx="300" cy="70" r="2.5" fill="white" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" />
                    <path d="M 80,105 L 120,85" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                    <text x="75" y="118" fill="rgba(0,0,0,0.3)" fontSize="8" fontFamily="monospace">COORD [XYZ_09]</text>
                    <path d="M 370,105 L 330,85" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                    <text x="345" y="118" fill="rgba(0,0,0,0.3)" fontSize="8" fontFamily="monospace">SCALE [1.00]</text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-950 hover:text-black border-b border-zinc-950/10 pb-1 hover:border-zinc-950 transition-colors duration-300">
                Explore Our Work
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </article>

          {/* ── CARD 2: Trusted by Fast-Growing Startups (with Crystal Shield SVG) ── */}
          <article className="about-premium-card md:col-span-5 bg-white border border-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">02 / ENDORSEMENTS</span>
                <span className="text-[9px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-mono font-bold border border-emerald-100">SECURE SHIELD</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                Trusted by Fast-Growing Startups
              </h3>
              <p className="text-zinc-500 mt-2 text-sm font-light leading-relaxed max-w-sm">
                Trusted by ambitious founders building products used worldwide.
              </p>
            </div>

            {/* Crystal Shield SVG */}
            <div className="relative h-36 w-full mt-4 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:10px_10px] opacity-40"></div>
              <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg className="w-40 h-40 overflow-visible" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="80" r="50" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                  <g className="about-spin-orbit">
                    <line x1="80" y1="30" x2="80" y2="130" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                    <line x1="30" y1="80" x2="130" y2="80" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                    <circle cx="80" cy="30" r="2" fill="rgba(0,0,0,0.15)" />
                    <circle cx="130" cy="80" r="2" fill="rgba(0,0,0,0.15)" />
                    <circle cx="80" cy="130" r="2" fill="rgba(0,0,0,0.15)" />
                    <circle cx="30" cy="80" r="2" fill="rgba(0,0,0,0.15)" />
                  </g>
                  <g className="about-float-slow">
                    <path d="M80 40 L112 52 V84 C112 105 98 120 80 126 C62 120 48 105 48 84 V52 L80 40 Z" fill="rgba(255,255,255,0.85)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <path d="M80 40 V126" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                    <path d="M80 84 L112 52" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M80 84 L48 52" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M80 84 L112 84" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M80 84 L48 84" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M80 84 L98 120" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M80 84 L62 120" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                    <path d="M68 82 L76 90 L92 74" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </article>

          {/* ── CARD 3: Faster Product Delivery — TEXT ONLY, no image/SVG ── */}
          <article className="about-premium-card md:col-span-5 bg-black rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[320px] about-glow-lime border border-zinc-900">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,255,0,0.12),transparent_55%)]"></div>
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-zinc-950 rounded-full blur-3xl opacity-80"></div>

            <div className="z-10 flex flex-col justify-center h-full">
              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#C6FF00] uppercase mb-3 block">03 / VELOCITY</span>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-7xl font-black text-white tracking-tighter leading-none select-none transition-all duration-500 group-hover:text-[#C6FF00]">
                  5×
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-3">
                Faster Product Delivery
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xs">
                AI-powered workflows eliminate repetitive work and dramatically increase execution speed.
              </p>
            </div>
          </article>

          {/* ── CARD 4: From Idea to Launch (with Multi-Device SVG) ── */}
          <article className="about-premium-card md:col-span-8 bg-white border border-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
              <div className="lg:col-span-5 flex flex-col justify-between h-full z-10">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-2 block">04 / DEPLOYMENT</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-none mb-3">
                    From Idea to Launch
                  </h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    We transform product ideas into polished digital experiences ready for real users.
                  </p>
                </div>
                <div className="pt-8 lg:pt-16">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-900">
                    <span className="w-2 h-2 rounded-full bg-[#C6FF00] border border-black/10"></span>
                    LIVE PRODUCTION BUILDS
                  </span>
                </div>
              </div>

              {/* Multi-Device Ecosystem SVG */}
              <div className="lg:col-span-7 relative h-64 sm:h-72 w-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
                <div className="relative w-full h-full flex items-center justify-center scale-90 md:scale-95 group-hover:scale-100 transition-transform duration-700">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 60 160 L 160 90 L 260 140" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 160 90 L 160 170" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />
                    {/* Laptop */}
                    <g className="about-float-slow">
                      <path d="M 100 130 L 220 130 L 240 150 L 80 150 Z" fill="rgba(0,0,0,0.02)" />
                      <rect x="110" y="70" width="100" height="60" rx="4" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
                      <rect x="114" y="74" width="92" height="46" rx="2" fill="#fafafa" />
                      <rect x="120" y="80" width="30" height="24" rx="2" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" />
                      <line x1="124" y1="110" x2="146" y2="110" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                      <path d="M 124 96 L 132 88 L 138 92 L 146 84" stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none" />
                      <rect x="156" y="80" width="44" height="34" rx="2" fill="white" stroke="rgba(0,0,0,0.05)" />
                      <line x1="162" y1="88" x2="190" y2="88" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                      <line x1="162" y1="94" x2="180" y2="94" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                      <line x1="162" y1="100" x2="194" y2="100" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                      <path d="M 102 130 L 218 130 L 226 138 L 94 138 Z" fill="#fafafa" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
                      <line x1="120" y1="134" x2="200" y2="134" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="6 3" />
                    </g>
                    {/* Tablet */}
                    <g transform="translate(-40, 20)" className="about-float-slow" style={{ animationDelay: "-2s" }}>
                      <rect x="60" y="60" width="45" height="70" rx="5" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
                      <rect x="63" y="65" width="39" height="54" rx="2" fill="#fafafa" />
                      <circle cx="82.5" cy="124" r="2" fill="rgba(0,0,0,0.15)" />
                      <circle cx="82" cy="85" r="10" stroke="rgba(0,0,0,0.08)" strokeWidth="2.5" fill="none" />
                      <circle cx="82" cy="85" r="10" stroke="rgba(0,0,0,0.25)" strokeDasharray="18 40" strokeWidth="2.5" fill="none" />
                    </g>
                    {/* Phone */}
                    <g transform="translate(190, 40)" className="about-float-slow" style={{ animationDelay: "-4s" }}>
                      <rect x="40" y="40" width="28" height="54" rx="5" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
                      <rect x="42" y="44" width="24" height="42" rx="2" fill="#fafafa" />
                      <circle cx="54" cy="90" r="1.5" fill="rgba(0,0,0,0.15)" />
                      <line x1="46" y1="50" x2="54" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
                      <rect x="46" y="56" width="20" height="24" rx="1" fill="rgba(0,0,0,0.03)" />
                    </g>
                    {/* AI Toast */}
                    <g transform="translate(30, 20)" className="about-float-slow" style={{ animationDelay: "-1s" }}>
                      <rect x="100" y="40" width="60" height="24" rx="4" fill="white" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                      <circle cx="112" cy="52" r="4" fill="#C6FF00" stroke="black" strokeWidth="1" />
                      <line x1="124" y1="49" x2="150" y2="49" stroke="black" strokeWidth="1.5" />
                      <line x1="124" y1="54" x2="142" y2="54" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
                    </g>
                    <circle cx="160" cy="90" r="3" fill="black" />
                    <circle cx="42" cy="110" r="2.5" fill="rgba(0,0,0,0.3)" />
                    <circle cx="244" cy="107" r="2.5" fill="rgba(0,0,0,0.3)" />
                  </svg>
                </div>
              </div>
            </div>
          </article>

          {/* ── CARD 5: AI Integrated Workflow (with Node Map SVG) ── */}
          <article className="about-premium-card md:col-span-4 bg-white border border-zinc-100 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group min-h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">05 / PIPELINE</span>
                <span className="text-[9px] bg-zinc-900 text-white px-2 py-0.5 rounded font-mono border border-zinc-950">LLM AGENT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                AI Integrated Workflow
              </h3>
              <p className="text-zinc-500 mt-2 text-sm font-light leading-relaxed">
                Automation handles repetitive execution while experts focus on strategy and innovation.
              </p>
            </div>

            {/* AI Node Map SVG */}
            <div className="relative h-44 w-full mt-6 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] bg-[size:12px_12px] opacity-40"></div>
              <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg className="w-11/12 h-11/12 overflow-visible" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="70" x2="190" y2="70" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                  <line x1="100" y1="10" x2="100" y2="130" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                  <path d="M 25 70 L 60 40 L 140 40 L 175 70" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" className="about-anim-dash" />
                  <path d="M 25 70 L 60 100 L 140 100 L 175 70" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" className="about-anim-dash" />
                  <path d="M 25 70 L 100 70 L 175 70" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
                  <circle cx="25" cy="70" r="6" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                  <circle cx="25" cy="70" r="2.5" fill="rgba(0,0,0,0.4)" />
                  <circle cx="175" cy="70" r="6" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                  <circle cx="175" cy="70" r="2.5" fill="black" />
                  <g className="about-float-slow">
                    <rect x="52" y="28" width="24" height="24" rx="4" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <path d="M 59 40 L 69 40" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <circle cx="64" cy="40" r="1.5" fill="black" />
                    <rect x="122" y="28" width="24" height="24" rx="4" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <path d="M 129 40 L 139 40" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5" />
                    <circle cx="134" cy="40" r="1.5" fill="black" />
                  </g>
                  <g className="about-float-slow" style={{ animationDelay: "-2.5s" }}>
                    <rect x="52" y="88" width="24" height="24" rx="4" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <circle cx="64" cy="100" r="3" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                    <rect x="122" y="88" width="24" height="24" rx="4" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                    <circle cx="134" cy="100" r="3" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none" />
                  </g>
                  <g className="about-float-slow" style={{ animationDelay: "-1.2s" }}>
                    <rect x="85" y="55" width="30" height="30" rx="6" fill="black" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <circle cx="100" cy="70" r="5" fill="#C6FF00" className="animate-pulse" />
                    <circle cx="100" cy="70" r="11" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 2" />
                  </g>
                  <circle cx="85" cy="40" r="2" fill="black" className="animate-pulse" />
                  <circle cx="110" cy="100" r="2" fill="rgba(0,0,0,0.3)" />
                </svg>
              </div>
            </div>
          </article>

          {/* ── CARD 6: Built for Scale (with Server Infrastructure SVG) ── */}
          <article className="about-premium-card md:col-span-12 bg-white border border-zinc-100 rounded-3xl p-8 sm:p-12 overflow-hidden relative group min-h-[380px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-50/5 to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full">
              <div className="md:col-span-6 z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">06 / PERFORMANCE</span>
                  <span className="text-[9px] bg-zinc-50 text-zinc-500 px-2 py-0.5 rounded font-mono font-bold border border-zinc-100">ELASTIC SCALING</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-none">
                  Built for Scale
                </h3>
                <p className="text-zinc-500 mt-4 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                  Infrastructure engineered to support rapid growth, enterprise performance, and long-term scalability.
                </p>
              </div>

              {/* Server Infrastructure SVG */}
              <div className="md:col-span-6 relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
                <div className="relative w-full h-full flex items-center justify-center scale-95 group-hover:scale-100 transition-transform duration-700">
                  <svg className="w-11/12 h-11/12 overflow-visible" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 40 140 L 160 110 L 280 140" stroke="rgba(0,0,0,0.03)" strokeWidth="1.5" />
                    <path d="M 160 110 L 160 150" stroke="rgba(0,0,0,0.03)" strokeWidth="1.5" />
                    <g opacity="0.85">
                      <path d="M 40 130 L 90 120 L 140 85 L 190 75 L 240 35 L 280 30" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 40 130 L 90 120 L 140 85 L 190 75 L 240 35 L 280 30" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 40 130 L 90 120 L 140 85 L 190 75 L 240 35 L 280 30 L 280 145 L 40 145 Z" fill="rgba(0,0,0,0.01)" />
                      <circle cx="140" cy="85" r="3.5" fill="white" stroke="black" strokeWidth="2" />
                      <circle cx="240" cy="35" r="3.5" fill="white" stroke="black" strokeWidth="2" />
                    </g>
                    <g className="about-float-slow">
                      <g transform="translate(60, 45)">
                        <path d="M 10 40 L 40 40 L 45 45 L 5 45 Z" fill="rgba(0,0,0,0.02)" />
                        <rect x="8" y="10" width="34" height="8" rx="2" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                        <circle cx="14" cy="14" r="1.5" fill="black" />
                        <line x1="22" y1="14" x2="36" y2="14" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        <rect x="8" y="20" width="34" height="8" rx="2" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                        <circle cx="14" cy="24" r="1.5" fill="black" />
                        <line x1="22" y1="24" x2="32" y2="24" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        <rect x="8" y="30" width="34" height="8" rx="2" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                        <circle cx="14" cy="34" r="1.5" fill="#C6FF00" stroke="black" strokeWidth="0.5" className="animate-pulse" />
                        <line x1="22" y1="34" x2="36" y2="34" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                      </g>
                      <g transform="translate(180, 55)">
                        <rect x="8" y="10" width="34" height="8" rx="2" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                        <circle cx="14" cy="14" r="1.5" fill="#C6FF00" stroke="black" strokeWidth="0.5" />
                        <line x1="22" y1="14" x2="34" y2="14" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        <rect x="8" y="20" width="34" height="8" rx="2" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                        <circle cx="14" cy="24" r="1.5" fill="black" />
                        <line x1="22" y1="24" x2="36" y2="24" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                      </g>
                    </g>
                    <path d="M 102 75 L 188 75" stroke="rgba(0,0,0,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                    <path d="M 102 85 L 188 75" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </article>

        </section>

        {/* ── STATS FOOTER ── */}
        <footer className="relative mt-24">
          <div className="absolute -top-12 left-1/3 w-32 h-32 bg-zinc-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-zinc-100 rounded-full blur-3xl opacity-60"></div>

          <div className="backdrop-blur-md bg-white/70 border border-zinc-200/40 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.04)] rounded-3xl py-10 px-8 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center relative overflow-hidden">

            <div className="flex flex-col justify-center items-center relative">
              <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tight flex items-center justify-center mb-1.5 select-none">
                <span className="about-stat-counter" data-target="98">0</span>%
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Client Satisfaction</span>
              <div className="absolute right-0 top-1/4 h-1/2 w-px bg-zinc-100 hidden lg:block"></div>
            </div>

            <div className="flex flex-col justify-center items-center relative">
              <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tight flex items-center justify-center mb-1.5 select-none">
                <span className="about-stat-counter" data-target="120">0</span>+
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Products Delivered</span>
              <div className="absolute right-0 top-1/4 h-1/2 w-px bg-zinc-100 hidden lg:block"></div>
            </div>

            <div className="flex flex-col justify-center items-center relative">
              <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tight flex items-center justify-center mb-1.5 select-none">
                <span className="about-stat-counter" data-target="35">0</span>+
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Global Clients</span>
              <div className="absolute right-0 top-1/4 h-1/2 w-px bg-zinc-100 hidden lg:block"></div>
            </div>

            <div className="flex flex-col justify-center items-center relative">
              <div className="text-4xl md:text-5xl font-extrabold text-black tracking-tight flex items-center justify-center mb-1.5 select-none">
                <span className="about-stat-counter" data-target="5">0</span>×
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Faster Delivery</span>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
