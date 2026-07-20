"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-32 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-neutral-500 uppercase mb-8">
                Why Choose Us
              </p>
            </Reveal>
            
            <Reveal>
              <h2 className="text-[clamp(3rem,5vw,5rem)] font-bold leading-[1.05] tracking-tighter mb-8 max-w-sm font-space">
                Building <br />
                Digital <br />
                Products <br />
                That <br />
                Actually <br />
                Grow <br />
                Businesses.
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-md mb-10">
                We combine AI automation, modern product design, and conversion-focused development to create digital experiences that save time, improve efficiency, and help businesses scale faster. Every project is built with measurable business growth in mind.
              </p>
            </Reveal>

            <Reveal>
              <button className="self-start px-8 py-3.5 bg-white text-black text-sm sm:text-base font-medium rounded-full hover:bg-neutral-200 transition-colors">
                Explore Our Work
              </button>
            </Reveal>
          </div>

          {/* Right Column - Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:col-span-2 bg-white rounded-3xl p-8 sm:p-12 text-black flex flex-col justify-center"
            >
              <h3 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-4 font-space">113+</h3>
              <p className="text-lg sm:text-xl font-bold mb-3">Projects Delivered</p>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
                Successfully launched AI products, SaaS platforms, websites, and digital systems that deliver measurable business impact.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 sm:p-10 text-black flex flex-col justify-center"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-4 font-space">42+</h3>
              <p className="text-lg font-bold mb-3">Happy Clients</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Trusted by startups, founders, agencies, and scaling businesses worldwide.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 sm:p-10 text-black flex flex-col justify-center"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-4 font-space">5x</h3>
              <p className="text-lg font-bold mb-3">More Productivity</p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                AI-powered workflows eliminate repetitive tasks and help teams move significantly faster.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="sm:col-span-2 bg-white rounded-3xl p-8 sm:p-12 text-black flex flex-col justify-center"
            >
              <h3 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-4 font-space">AI First</h3>
              <p className="text-lg sm:text-xl font-bold mb-3">Automation Systems</p>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl">
                We design intelligent workflows that reduce manual work, improve accuracy, and streamline business operations from end to end.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
