"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";

export function ServicesGrid() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="px-8 py-24 md:px-16 md:py-32 bg-[#FBF9F6]">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <div>
            <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black/60">
              / SERVICES
            </span>
            <h2 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.1] tracking-tight md:text-6xl text-black">
              Five pillars. One <br /> integrated team.
            </h2>
          </div>
        </Reveal>
        <Reveal>
          <p className="max-w-sm text-sm text-black/70">
            Pick a single pillar or run the whole stack. Either way, you get senior people,
            AI-multiplied output, and a weekly cadence.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid items-stretch gap-4 md:grid-cols-6">
        {services.map((s, i) => {
          const big = i === 0 || i === 1;

          return (
            <Reveal
              key={s.slug}
              delay={i * 0.06}
              className={`${big ? "md:col-span-3" : "md:col-span-2"} block h-full`}
            >
              <Link
                href={`/services/${s.slug}`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group flex h-full min-h-[280px] w-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 transition-colors hover:border-black"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-black/40">/{String(i + 1).padStart(2, '0')}</span>
                  <ArrowUpRight className="h-5 w-5 text-black/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-[28px] text-black">{s.title}</h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-black/60">
                    {s.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
