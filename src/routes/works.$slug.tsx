import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Project } from "@/lib/site-data";

import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/works/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${p?.title ?? "Case Study"} — Dosocket` },
        { name: "description", content: p?.summary ?? "" },
        { property: "og:title", content: `${p?.title} — Dosocket` },
        { property: "og:description", content: p?.summary ?? "" },
        { property: "og:image", content: p?.cover ?? "" },
      ],
    };
  },
  loader: ({ params }): Project => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },

  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Case study not found</h1>
      <Link to="/works" className="mt-6 inline-block underline">Back to works</Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const p = Route.useLoaderData() as Project;

  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <>
      <section className="container-x pt-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-14">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-white/30 px-3 py-1">{p.category}</span>
                <span className="text-white/70">{p.client} · {p.year}</span>
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">{p.title}</h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-16 md:grid-cols-3">
          <Reveal>
            <div>
              <div className="text-xs text-muted-foreground">Challenge</div>
              <p className="mt-3 text-base leading-relaxed">{p.challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <div className="text-xs text-muted-foreground">Solution</div>
              <p className="mt-3 text-base leading-relaxed">{p.solution}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs text-muted-foreground">Services</div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {p.services.map((s) => <li key={s}>· {s}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="container-x pb-24">
        <div className="ink-section p-10 md:p-16">
          <Reveal><div className="text-xs uppercase tracking-wider text-white/50">The Result</div></Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {p.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.07}>
                <div className="text-white">
                  <div className="font-display text-6xl font-semibold md:text-7xl">{r.value}</div>
                  <div className="mt-2 text-sm text-white/60">{r.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          <div className="md:col-span-4">
            <img src={p.gallery[0]} alt="" className="aspect-[16/10] w-full rounded-2xl object-cover" />
          </div>
          <div className="md:col-span-2">
            <img src={p.gallery[1]} alt="" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
          <div className="md:col-span-2">
            <img src={p.gallery[2]} alt="" className="aspect-[4/5] w-full rounded-2xl object-cover" />
          </div>
          <div className="md:col-span-4">
            <img src={p.gallery[3]} alt="" className="aspect-[16/10] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x pb-24">
        <Reveal><h2 className="text-3xl font-semibold md:text-4xl">How we approached it</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {p.process.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div className="rounded-2xl border bg-card p-7">
                <div className="text-xs text-muted-foreground">/0{i + 1}</div>
                <div className="mt-3 text-lg font-semibold">{s.step}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="container-x pb-32">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Related work</h2>
          <Link to="/works" className="text-sm hover:underline">All works →</Link>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} to="/works/$slug" params={{ slug: r.slug }} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img src={r.image} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="font-medium">{r.title}</div>
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
