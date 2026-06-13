import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/site-data";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};

  return {
    title: `${p.title} — Dosocket`,
    description: p.summary,
    openGraph: {
      title: `${p.title} — Dosocket`,
      description: p.summary,
      images: [{ url: p.cover }],
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    notFound();
  }

  const related = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <div className="bg-background pt-12">
      <section className="container-x pt-6">
        <div className="relative overflow-hidden rounded-3xl aspect-[16/9] w-full">
          <Image
            src={p.cover}
            alt={p.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-14">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-white/30 px-3 py-1">{p.category}</span>
                <span className="text-white/70">
                  {p.client} · {p.year}
                </span>
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
                {p.services.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="container-x pb-24">
        <div className="ink-section p-10 md:p-16">
          <Reveal>
            <div className="text-xs uppercase tracking-wider text-white/50">The Result</div>
          </Reveal>
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
          <div className="md:col-span-4 relative aspect-[16/10]">
            <Image
              src={p.gallery[0]}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto">
            <Image
              src={p.gallery[1]}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:col-span-2 relative aspect-[4/5] md:aspect-auto">
            <Image
              src={p.gallery[2]}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="md:col-span-4 relative aspect-[16/10]">
            <Image
              src={p.gallery[3]}
              alt=""
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x pb-24">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">How we approached it</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {p.process.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.05}>
              <div className="rounded-2xl border bg-card p-7 h-full">
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
          <Link href="/works" className="text-sm hover:underline">
            All works →
          </Link>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {related.map((r) => (
            <Link key={r.slug} href={`/works/${r.slug}`} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted relative">
                <Image
                  src={r.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="font-medium">{r.title}</div>
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
