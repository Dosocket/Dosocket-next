"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Brand & Experience",
  "Development",
  "Growth",
  "Automation",
  "Product Teams",
] as const;

export default function WorksPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="bg-background pt-12">
      <section className="container-x pt-16 pb-12">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            / Works
          </span>
        </Reveal>
        <Reveal>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
            Outcomes.
            <br />
            <span className="text-lime">Receipts.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            A live archive of case studies — every project tagged with the quantifiable lift it
            delivered.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors cursor-pointer",
                filter === f
                  ? "border-lime bg-lime text-lime-foreground"
                  : "border-border hover:border-lime/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="container-x pb-28">
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [column-fill:_balance]">
          {list.map((p, i) => {
            const aspects = [
              "aspect-[4/5]",
              "aspect-[3/4]",
              "aspect-[4/3]",
              "aspect-square",
              "aspect-[3/4]",
              "aspect-[4/5]",
            ];
            const aspect = aspects[i % aspects.length];
            return (
              <Reveal key={p.slug} delay={(i % 4) * 0.05} className="mb-6 break-inside-avoid">
                <Link href={`/works/${p.slug}`} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl bg-card ${aspect}`}>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="text-[10px] uppercase tracking-widest text-lime">
                        {p.client}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground">{p.outcome}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-lg font-medium">{p.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.client} · {p.year}
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-lime group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
