import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/works/")({
  head: () => ({
    meta: [
      { title: "Works — Dosocket" },
      {
        name: "description",
        content:
          "Case studies, outcomes, and the receipts: brand, product, growth, and AI automation work from Dosocket.",
      },
      { property: "og:title", content: "Works — Dosocket" },
      {
        property: "og:description",
        content: "Outcomes-led case studies from a senior, AI-multiplied product agency.",
      },
    ],
  }),
  component: WorksPage,
});

const filters = [
  "All",
  "Brand & Experience",
  "Development",
  "Growth",
  "Automation",
  "Product Teams",
] as const;

function WorksPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="mx-24 pt-16 pb-12">
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
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${filter === f ? "border-lime bg-lime text-lime-foreground" : "border-border hover:border-lime/50"}`}
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
                <Link to="/works/$slug" params={{ slug: p.slug }} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl bg-card ${aspect}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
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
    </>
  );
}
