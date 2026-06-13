import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-24 font-sans text-neutral-900">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-6">
          <Link
            href="/about"
            className="inline-block px-5 py-1.5 border border-neutral-300 rounded-full text-xs font-medium tracking-wide uppercase hover:bg-neutral-50 transition-colors duration-200"
          >
            About Us
          </Link>

          {/* Main Statement */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight max-w-2xl">
            We're a creative design studio focused on crafting visual identities,{" "}
            <span className="text-neutral-400">digital experiences,</span>{" "}
            <span className="inline-flex items-center mx-1 translate-y-1">
              <span className="w-7 h-7 rounded-full bg-neutral-900 border-2 border-white -mr-2 flex items-center justify-center text-[10px] text-white">
                ✦
              </span>
              <span className="w-7 h-7 rounded-full bg-neutral-800 border-2 border-white -mr-2 flex items-center justify-center text-[10px] text-white">
                ❖
              </span>
              <span className="w-7 h-7 rounded-full bg-neutral-700 border-2 border-white flex items-center justify-center text-[10px] text-white">
                ⚹
              </span>
            </span>{" "}
            <span className="text-neutral-300">
              and scalable products for brands who dare to stand out.
            </span>
          </h2>
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-4 pt-4 lg:pt-16">
          <div className="space-y-1.5">
            <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">50+</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium whitespace-nowrap">
              Projects Completed
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">10+</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium whitespace-nowrap">
              Industries Served
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">20+</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium whitespace-nowrap">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
