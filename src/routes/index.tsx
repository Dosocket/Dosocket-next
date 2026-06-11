import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { projects, services, testimonials, BRAND } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import AboutSection from "@/components/AboutSection";
import HeroBg from "../assets/Hero_bg.png";
const clientImages = [
  "https://placehold.net/100",
  "https://placehold.net/100",
  "https://placehold.net/100",
];

function ClientAvatars() {
  return (
    <div className="flex -space-x-4 overflow-hidden">
      {clientImages.map((src, index) => (
        <img
          key={index}
          className="h-12 w-12 rounded-full border-2 border-white object-cover"
          src={src}
          alt={`client-${index}`}
        />
      ))}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dosocket — Senior Craft, AI-Multiplied Velocity" },
      {
        name: "description",
        content:
          "Dosocket is a modern agency shipping brand, product, growth, and AI automation — twice as fast, with senior-led pods.",
      },
    ],
  }),
  component: Index,
});

export default function Index() {
  return (
    <div className=" text-black">
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesGrid />
      <Works />
      <Testimonials />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Main Content */}
      <div className="relative flex min-h-dvh flex-col justify-between pt-32 pb-10">
        <div className="flex w-full flex-1 flex-col justify-center px-8 md:px-16">
          <div className="grid items-center gap-12 md:grid-cols-[60%_40%]">
            {/* Left Side */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-balance text-6xl font-medium tracking-tighter md:text-8xl"
              >
                Ship brave
                <br />
                work 2×
                <br />
                faster.
              </motion.h1>
            </div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="ml-auto flex max-w-md flex-col items-start gap-8 md:pt-16"
            >
              <p className="text-lg leading-relaxed text-white/70">
                Dosocket is a senior-led product agency. Brand execution, scalable development
                frameworks, growth mechanics, and AI workflow automation pipelines paired with
                tooling architecture that triples engineering velocity.
              </p>

              <a
                href={BRAND.calcom}
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105"
              >
                <span>Let's Talk</span>

                <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 px-8 sm:flex-row sm:items-center md:px-16">
          <ClientAvatars />

          <div className="flex items-center gap-4 text-sm font-medium">
            <p>Next chapter awaits</p>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Brand & Experience", "Development", "Growth", "AI Automation", "Product Teams"];
  return (
    <section className="overflow-hidden border-y border-black/10 py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-xl font-semibold text-black/40">
            {t} <span className="text-black">/</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function ServicesGrid() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="px-8 py-24 md:px-16 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <div>
            <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black/60">
              / Services
            </span>
            <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.05] tracking-tighter md:text-6xl">
              Five pillars. One integrated team.
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
                to="/services/$slug"
                params={{ slug: s.slug }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group flex h-full min-h-[280px] w-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-8 transition-colors hover:border-black"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-black/40">/0{i + 1}</span>
                  <ArrowUpRight className="h-5 w-5 text-black/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-black/60">
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

function Works() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-8 py-16 md:px-16">
      <div className="mb-12 flex items-center justify-between">
        <span className="inline-flex rounded-full border border-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black/60">
          / Selected Works
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {featured.map((project, index) => {
          let aspect = "aspect-square";
          let className = "md:col-span-1";

          if (index === 1) {
            aspect = "aspect-video md:aspect-auto";
            className = "md:col-span-2";
          }

          return (
            <WorkCard
              key={project.slug || index}
              p={project}
              aspect={aspect}
              className={className}
            />
          );
        })}
      </div>
    </section>
  );
}

function WorkCard({
  p,
  className = "",
  aspect,
}: {
  p: (typeof projects)[number];
  className?: string;
  aspect: string;
}) {
  if (!p) return null;

  return (
    <Link
      to="/works/$slug"
      params={{ slug: p.slug }}
      className={`group relative flex w-full overflow-hidden rounded-2xl bg-black/5 p-6 ${aspect} ${className}`}
    >
      <img
        src={p.image}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 mt-auto text-white">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">
          {p.category}
        </div>
        <div className="mt-1 text-lg font-medium leading-tight tracking-tight">{p.title}</div>
      </div>
    </Link>
  );
}

function Testimonials() {
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
          {
            name: "Sarah Chen",
            role: "Product Manager",
            quote: "Clean codebase and beautiful spatial interface execution. Exceeded timelines.",
            image: "https://placehold.net/100",
          },
          {
            name: "Marcus Voss",
            role: "CTO",
            quote: "Dynamic components that cut down our project release schedule by half.",
            image: "https://placehold.net/100",
          },
          {
            name: "Elena Rostova",
            role: "Founder",
            quote: "Incredible attention to responsive details. Flawless animations and flow.",
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
    <section className="px-8 py-24 md:px-16">
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

