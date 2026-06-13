"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { team, BRAND } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="min-h-[95vh] flex items-center px-6 md:px-16 overflow-hidden relative">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] md:w-[800px] md:h-[800px] bg-lime-400/20 blur-[160px] rounded-full" />
          </motion.div>
          <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] md:w-[800px] md:h-[800px] bg-lime-400/20 blur-[160px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full relative z-10 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.35em] text-white/40 uppercase">About Dosocket</p>

            <h1 className="mt-6 text-6xl md:text-8xl font-medium leading-[0.95] tracking-tight">
              Senior craft.
              <br />
              <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(184,255,61,0.25)]">
                AI-multiplied
              </span>
              <br />
              velocity.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="md:ml-auto max-w-md text-white/70 text-lg leading-relaxed md:pt-20"
          >
            We are a senior-led product studio building systems, products, and growth engines using
            AI-accelerated workflows that compress time and amplify output.
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="px-6 md:px-16 py-32">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Our story</h2>
          </Reveal>

          <Reveal>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed max-w-2xl">
              <p>
                Most agencies are structurally inefficient — junior execution under senior pricing.
              </p>
              <p>We rebuilt everything around senior-only pods and AI-native workflows.</p>
              <p>The result is not an agency — it is a product execution system.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="px-6 md:px-16 py-32 flex flex-col md:flex-row justify-between items-start gap-16">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight whitespace-nowrap">Why Dosocket</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 w-full max-w-4xl">
          {why.map((w, i) => (
            <motion.div
              key={w.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-2xl font-medium text-white">{w.t}</h3>
              <p className="mt-4 text-white/60 leading-relaxed">{w.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,61,0.08),transparent_60%)]" />

        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight relative z-10">
            Principles
          </h2>
        </Reveal>

        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {values.map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-xl font-medium">{v.t}</h3>
              <p className="mt-4 text-black/60 leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="px-6 md:px-16 py-32">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Leadership</h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-medium">{m.name}</h3>
                <p className="text-white/40 text-sm uppercase tracking-widest mt-1">{m.role}</p>
                <p className="mt-4 text-white/60 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 md:px-16 py-32">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Process</h2>
        </Reveal>

        <div className="mt-20 space-y-14">
          {process.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid md:grid-cols-[120px_300px_1fr] gap-6"
            >
              <div className="text-lime-400 text-3xl font-medium">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="text-xl font-medium">{p.t}</div>

              <div className="text-white/60 leading-relaxed max-w-2xl">{p.d}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
