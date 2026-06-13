"use client";

import Link from "next/link";
import { services, BRAND } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-background pt-12">
      <section className="container-x pt-16 pb-12">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            / Services
          </span>
        </Reveal>
        <Reveal>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
            Five pillars.
            <br />
            <span className="text-lime">One</span> integrated team.
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Each pillar stands alone. Together, they're a full product company — senior,
            AI-multiplied, on monthly cadence.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const featured = i === 0 || i === 3;
            return (
              <Reveal key={s.slug} delay={i * 0.05} className={featured ? "md:col-span-2" : ""}>
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <div
                    className={`flex h-full flex-col rounded-3xl p-8 transition-all hover:-translate-y-1 md:p-10 ${
                      featured
                        ? "bg-lime text-lime-foreground"
                        : "border border-border bg-card hover:border-lime"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`text-xs uppercase tracking-widest ${
                          featured ? "text-lime-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        /0{i + 1}
                      </div>
                      <ArrowUpRight className="size-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <h2
                      className={`mt-6 font-display font-semibold leading-[1.05] ${
                        featured ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"
                      }`}
                    >
                      {s.title}
                    </h2>
                    <p
                      className={`mt-5 max-w-xl text-sm leading-relaxed ${
                        featured ? "text-lime-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {s.description}
                    </p>
                    <ul className={`mt-8 grid gap-1.5 text-sm ${featured ? "grid-cols-2" : ""}`}>
                      {s.inclusions.slice(0, featured ? 6 : 4).map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <span
                            className={`mt-2 inline-block size-1 rounded-full ${
                              featured ? "bg-lime-foreground" : "bg-lime"
                            }`}
                          />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold md:text-3xl">
              Not sure where to start?
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              30-minute scoping call. We'll tell you exactly which pillar (or combination) ships
              your next outcome.
            </p>
          </div>
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-lime py-2.5 pr-2 pl-6 text-sm font-semibold text-lime-foreground"
          >
            Book a Call
            <span className="grid size-8 place-items-center rounded-full bg-ink text-lime">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
