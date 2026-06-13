import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { services, projects } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight, Check } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};

  return {
    title: `${s.title} — Dosocket`,
    description: s.short,
    openGraph: {
      title: `${s.title} — Dosocket`,
      description: s.short,
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);

  if (!s) {
    notFound();
  }

  const related = services.filter((x) => s.relatedSlugs.includes(x.slug));
  const relatedWorks = projects
    .filter(
      (p) =>
        p.category === s.title || p.services.some((sv) => sv.toLowerCase().includes(s.title.toLowerCase()))
    )
    .slice(0, 3);

  return (
    <div className="bg-background pt-12">
      <section className="container-x pt-10 pb-20">
        <Reveal>
          <div
            className="font-display font-bold uppercase tracking-[0.05em] text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}
          >
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
          <Reveal>
            <h2 className="text-2xl font-semibold md:text-3xl">What's included</h2>
          </Reveal>
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
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Process & timeline</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {s.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="h-full rounded-2xl border bg-card p-6">
                <div className="font-display text-3xl font-semibold text-muted-foreground/40">
                  0{i + 1}
                </div>
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
            <Link href="/works" className="text-sm hover:underline">
              All works →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedWorks.map((p) => (
              <Link key={p.slug} href={`/works/${p.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted relative">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
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
            <Link
              key={r.slug}
              href={`/services/${r.slug}`}
              className="group flex items-center justify-between rounded-2xl border bg-card p-8 transition-colors hover:border-lime"
            >
              <div>
                <div className="text-lg font-semibold">{r.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.short}</div>
              </div>
              <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
