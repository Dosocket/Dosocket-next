"use client";

import { useState, useEffect } from "react";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);

  const data =
    typeof testimonials !== "undefined" && testimonials.length > 0
      ? testimonials
      : [
          {
            name: "Alex Rivers",
            role: "Lead Dev",
            quote:
              "Built exactly what we needed with zero friction. Highly adaptable architectures.",
            image: "https://placehold.net/100",
          },
        ];

  const t = data[i] || data[0];

  useEffect(() => {
    if (data.length <= 1) return;
    const timer = setInterval(() => {
      setI((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <section className="px-8 py-24 md:px-16 bg-background">
      <span className="mb-12 inline-flex rounded-full border border-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black/60">
        / Real Feedback
      </span>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="group flex min-h-[300px] flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 md:col-span-2">
          <span className="text-6xl font-serif leading-none text-black/20">“</span>

          <p className="my-8 text-2xl font-medium tracking-tight text-black md:text-3xl">
            {t.quote}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover grayscale"
              />
              <div>
                <div className="font-bold text-black">{t.name}</div>
                <div className="text-sm text-black/60">{t.role}</div>
              </div>
            </div>
            <div className="text-sm font-bold text-black/40">
              0{i + 1} / 0{data.length}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-black p-8 text-white">
          <div className="text-xs font-bold uppercase tracking-widest text-white/40">
            Metrics Score
          </div>
          <div className="my-auto">
            <div className="text-5xl font-medium tracking-tighter md:text-6xl">99.4%</div>
            <p className="mt-2 text-sm text-white/60">Global retention architecture rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
