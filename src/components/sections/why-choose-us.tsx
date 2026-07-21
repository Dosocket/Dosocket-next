"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-162.5 lg:h-screen flex items-center py-8 lg:py-0 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center w-full">
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-3 lg:mb-4">
                Why Choose Us
              </p>
            </Reveal>

            <Reveal>
              <h2 className="w-full text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tighter mb-4 lg:mb-6 font-space">
                Building Digital Products That Actually Grow Businesses.
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed max-w-md mb-6 lg:mb-8">
                We combine AI automation, modern product design, and conversion-focused development to create digital experiences that save time, improve efficiency, and help businesses scale faster.
              </p>
            </Reveal>

            <Reveal>
              <button className="self-start px-6 py-2.5 lg:px-7 lg:py-3 bg-white text-black text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors">
                Explore Our Work
              </button>
            </Reveal>
          </div>

          {/* Right Column - Compact Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:col-span-2 bg-white rounded-2xl p-5 lg:p-6 text-black flex flex-col justify-center"
            >
              <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-1 lg:mb-2 font-space">113+</h3>
              <p className="text-sm lg:text-base font-bold mb-1">Projects Delivered</p>
              <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed max-w-xl">
                Successfully launched AI products, SaaS platforms, websites, and digital systems that deliver measurable business impact.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-5 lg:p-6 text-black flex flex-col justify-center"
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-1 lg:mb-2 font-space">42+</h3>
              <p className="text-sm font-bold mb-1">Happy Clients</p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Trusted by startups, founders, agencies, and scaling businesses worldwide.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#C6FF00] rounded-2xl p-5 lg:p-6 text-black flex flex-col justify-center"
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-1 lg:mb-2 font-space">5x</h3>
              <p className="text-sm font-bold mb-1">More Productivity</p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                AI-powered workflows eliminate repetitive tasks and help teams move faster.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sm:col-span-2 bg-white rounded-2xl p-5 lg:p-6 text-black flex flex-col justify-center"
            >
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-1 lg:mb-2 font-space">AI First</h3>
              <p className="text-sm lg:text-base font-bold mb-1">Automation Systems</p>
              <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed max-w-xl">
                We design intelligent workflows that reduce manual work, improve accuracy, and streamline operations from end to end.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}