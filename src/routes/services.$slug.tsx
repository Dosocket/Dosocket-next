import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { Service } from "@/lib/site-data";

import { services, projects } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: `${s?.title ?? "Service"} — Dosocket` },
        { name: "description", content: s?.short ?? "" },
        { property: "og:title", content: `${s?.title} — Dosocket` },
        { property: "og:description", content: s?.short ?? "" },
      ],
    };
  },
  loader: ({ params }): Service => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },

  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-semibold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block underline">Back to services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData() as Service;

  const related = services.filter((x) => s.relatedSlugs.includes(x.slug));
  const relatedWorks = projects.filter((p) =>
    p.category === s.title || p.services.some((sv) => sv.toLowerCase().includes(s.title.toLowerCase()))
  ).slice(0, 3);

  return (
    <>
      <section className="container-x pt-10 pb-20">
        <Reveal>
          <div className="font-display font-bold uppercase tracking-[0.05em] text-foreground leading-[0.9]"
               style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}>
            {s.title.split("").join(" ")}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.description}</p>
        </Reveal>
      </section>

      {/* Inclusions */}
      <section className="container-x pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <Reveal><h2 className="text-2xl font-semibold md:text-3xl">What's included</h2></Reveal>
          <Reveal>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {s.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-lime" />
                  {inc}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-x pb-24">
        <div className="ink-section p-10 md:p-16">
          <Reveal>
            <div className="text-xs uppercase tracking-wider text-white/50">Why us for {s.title}</div>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-3xl text-2xl font-medium leading-relaxed text-white text-balance md:text-3xl">
              {s.philosophy}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="container-x pb-24">
        <Reveal><h2 className="text-3xl font-semibold md:text-4xl">Process & timeline</h2></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {s.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl border bg-card p-6">
                <div className="font-display text-3xl font-semibold text-muted-foreground/40">0{i + 1}</div>
                <div className="mt-3 text-base font-semibold">{p.step}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related works */}
      {relatedWorks.length > 0 && (
        <section className="container-x pb-24">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Recent {s.title.toLowerCase()} work</h2>
            <Link to="/works" className="text-sm hover:underline">All works →</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedWorks.map((p) => (
              <Link key={p.slug} to="/works/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <img src={p.image} alt="" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-3 text-sm font-medium">{p.title}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="container-x pb-28">
        <h2 className="text-2xl font-semibold md:text-3xl">Related services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group flex items-center justify-between rounded-2xl border bg-card p-8">
              <div>
                <div className="text-lg font-semibold">{r.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.short}</div>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
