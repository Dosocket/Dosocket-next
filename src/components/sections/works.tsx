import Link from "next/link";
import { projects } from "@/lib/site-data";

export function WorkCard({
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
      href={`/works/${p.slug}`}
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

export function Works() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-8 py-16 md:px-16 bg-background">
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
