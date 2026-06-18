"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { MessageCircleQuestion, ChevronDown } from "lucide-react";
import Link from "next/link";

/* ─────────────────────────────────────────
   FAQ Data
───────────────────────────────────────── */
const faqs = [
  {
    question: "What is Dosocket?",
    answer:
      "Dosocket is a senior-led product agency that helps you build brand, development, growth, and AI automation pipelines. It's built to make your digital product execution 2× faster, simpler, and smarter.",
  },
  {
    question: "How does it work?",
    answer:
      "Simply pick a single pillar or run the whole stack. We integrate directly into your workflow, and you get senior people, AI-multiplied output, and a weekly cadence. No complicated onboarding—just start building.",
  },
  {
    question: "Is my data and IP safe?",
    answer:
      "Yes. We use enterprise-grade security and secure infrastructure to protect your information and intellectual property. Your code and data belong only to you—always.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can pause, downgrade, or cancel your engagement anytime—no hidden fees or long-term locked contracts. We believe in earning your business every week.",
  },
];

/* ─────────────────────────────────────────
   FAQ Component
───────────────────────────────────────── */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-32">
      {/* ── Outer wrapper to match the dark box design ── */}
      <div className="mx-auto w-full max-w-[calc(100%-48px)] sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-160px)]">
        
        {/* Dark Container */}
        <div className="rounded-[2.5rem] bg-[#111] px-6 py-16 sm:p-16 lg:p-20 text-white shadow-2xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            
            {/* ═══════════════════════════════════
                LEFT COLUMN
            ═══════════════════════════════════ */}
            <div className="flex flex-col">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-neutral-300">
                  <MessageCircleQuestion className="h-4 w-4" />
                  Your Questions, Answered
                </div>
                <h2 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-white">
                  Frequently <br />
                  <span className="text-[#E8FF00]">Asked Questions</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-neutral-400 max-w-md">
                  Dosocket is a senior-led platform that helps you design, build, and automate. It's built to make your daily work faster, simpler, and smarter.
                </p>
              </Reveal>

              {/* Still Have Questions Box */}
              <Reveal delay={0.2}>
                <div className="mt-12 rounded-3xl border border-white/10 bg-[#1a1a1a] p-8">
                  <h3 className="text-2xl font-medium text-white">Still Have Questions?</h3>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    We understand that every business has unique needs. If there's anything you'd like to clarify about our services, pricing, or how Dosocket fits into your workflow, our team is here to help.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                    Reach out anytime — we'll guide you through every detail to make sure you get the most out of our platform.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="#"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#E8FF00] px-8 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
                    >
                      Book a Demo
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ═══════════════════════════════════
                RIGHT COLUMN (Accordion)
            ═══════════════════════════════════ */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <Reveal key={index} delay={index * 0.1}>
                    <div
                      className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                        isOpen
                          ? "border-white/20 bg-[#1a1a1a]"
                          : "border-white/10 bg-transparent hover:bg-white/5"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between p-6 sm:p-8 text-left"
                      >
                        <h3 className="text-xl font-medium text-white sm:text-2xl pr-8">
                          {faq.question}
                        </h3>
                        <div
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 ${
                            isOpen ? "bg-white/10 rotate-180" : "bg-transparent"
                          }`}
                        >
                          <ChevronDown className="h-5 w-5 text-white" />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-8 pt-0 sm:px-8 text-sm leading-relaxed text-neutral-400">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
