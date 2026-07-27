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

      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="about-noise-grid text-zinc-900 relative overflow-x-hidden w-full selection:bg-zinc-950 selection:text-white pt-24 md:pt-32 pb-24">
      <style dangerouslySetInnerHTML={{
        __html: `
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
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .about-premium-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04);
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
          <article className="about-premium-card md:col-span-7 md:row-span-2 bg-white border border-zinc-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
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

            {/* Img */}
            <div className="flex-1 relative w-full min-h-[200px] mt-6 mb-4 rounded-2xl overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover" src="SeniorProductExpert.png" alt="SP-Img" />
            </div>


            <div className="pt-4">
              <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-zinc-950 hover:text-black border-b border-zinc-950/10 pb-1 hover:border-zinc-950 transition-colors duration-300">
                Explore Our Work
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </article>

          {/* ── CARD 2: Trusted by Fast-Growing Startups (with Crystal Shield SVG) ── */}
          <article className="about-premium-card md:col-span-5 bg-white border border-zinc-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

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
            <div className="relative w-full mt-6 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
              <img className="w-full h-auto object-contain" src="\TrustedbyFastGrowingStartups.png" alt="TFG-IMG" />
            </div>
          </article>

          {/* ── CARD 3: Faster Product Delivery — TEXT ONLY, no image/SVG ── */}
          <article className="about-premium-card md:col-span-5 bg-black rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group about-glow-lime border border-zinc-900">
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
          <article className="about-premium-card md:col-span-8 bg-white border border-zinc-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

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

              {/* img */}
              <div className="lg:col-span-7 flex-1 relative w-full h-full min-h-[250px] overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center mt-6 lg:mt-0">
                <img className="absolute inset-0 w-full h-full object-cover" src="\FromIDeatolaunch.png" alt="FIL-IMG" />
              </div>
            </div>
          </article>

          {/* ── CARD 5: AI Integrated Workflow (with Node Map SVG) ── */}
          <article className="about-premium-card md:col-span-4 bg-white border border-zinc-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-50/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

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
            <div className="relative w-full mt-6 overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center">
              <img className="w-full h-auto object-contain" src="\AIIntegratedWorkflow.png" alt="AI-IMG" />
            </div>
          </article>

          {/* ── CARD 6: Built for Scale (with Server Infrastructure SVG) ── */}
          <article className="about-premium-card md:col-span-12 bg-white border border-zinc-100 rounded-3xl p-5 sm:p-6 overflow-hidden relative group flex flex-col justify-between">
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-zinc-50/5 to-zinc-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

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

              {/* IMG */}
              <div className="md:col-span-6 relative w-full h-auto overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 flex items-center justify-center mt-6 md:mt-0">
                <img className="w-full h-auto object-contain" src="\BuiltforScale.png" alt="BFS-IMG" />
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
