"use client";

/**
 * ServicesFAQ
 * ------------------------------------------------------------------
 * Two-column section: a testimonial quote on the left, an FAQ
 * accordion + closing CTA on the right. Matches this codebase's
 * existing tokens (bg-background, text-foreground, border-border,
 * bg-card, font-display) so it drops in next to ServicesHero /
 * ServicesIntro / ServicesBento / OurProcessScroll without any new
 * theme setup.
 *
 * DROP-IN USAGE
 * ------------------------------------------------------------------
 *   import { ServicesFAQ } from "@/components/services/services-faq";
 *   ...
 *   <OurProcessScroll />
 *   <ServicesFAQ />
 *
 * CONTENT
 * ------------------------------------------------------------------
 * Edit TESTIMONIAL / FAQ_ITEMS / CTA below. Avatar paths are public
 * folder references (e.g. "/testimonials/daniel-carter.jpg") — drop
 * real images into /public and update the paths.
 */

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { BRAND } from "@/lib/site-data";

// ============================================================================
// CONTENT — edit copy and asset paths here
// ============================================================================
const TESTIMONIAL = {
  quote:
    "The FAQ section clarified their process, making me feel informed and ensuring a smooth, trustworthy collaboration.",
  name: "Qasim",
  role: "Startup Founder",
  avatar: "/Qasim.jpeg",
};

const FAQ_ITEMS = [
  {
    question: "How many revisions do you provide?",
    answer:
      "Every engagement includes two rounds of revisions at each major milestone. Additional rounds can be scoped in if a project needs more iteration.",
  },
  {
    question: "How do we get started with a new project?",
    answer:
      "We start with a short scoping call to understand your goals, timeline, and budget, then follow up with a proposal and a clear project plan before any work begins.",
  },
  {
    question: "Will I get updates during the project?",
    answer:
      "Yes — you'll have a shared channel for async updates plus a recurring check-in call, so you always know exactly where things stand.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects run 4–8 weeks depending on scope. We'll give you a specific timeline once we've scoped the work together.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer and all major credit cards. Projects are typically split into a deposit and milestone-based payments.",
  },
  {
    question: "Do you offer support after the project is completed?",
    answer:
      "Yes — every project includes a post-launch support window, and ongoing retainers are available if you'd like continued help after that.",
  },
  {
    question: "What information do you need from me before starting?",
    answer:
      "Brand assets, any existing research or analytics, and access to the relevant accounts or repos. We'll send a simple checklist once the project kicks off.",
  },
  {
    question: "What happens if I need changes after the project is finished?",
    answer:
      "Small fixes are covered under the post-launch support window. Larger changes can be scoped as a quick follow-on engagement.",
  },
];

const CTA = {
  heading: "Ready to take the next step for your project?",
  buttonLabel: "Book an intro call",
  href: BRAND.calcom,
};

// ============================================================================
// Accordion row
// ============================================================================
function FAQRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-medium text-foreground md:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex size-6 shrink-0 items-center justify-center text-foreground"
        >
          <Plus className="size-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// Main export
// ============================================================================
export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left column — testimonial */}
        <div>
          <blockquote className="max-w-sm text-lg font-semibold leading-snug text-foreground md:text-xl">
            “{TESTIMONIAL.quote}”
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-border bg-card">
              <Image
                src={TESTIMONIAL.avatar}
                alt={TESTIMONIAL.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {TESTIMONIAL.name}
              </p>
              <p className="text-sm text-muted-foreground">{TESTIMONIAL.role}</p>
            </div>
          </div>
        </div>

        {/* Right column — FAQ */}
        <div>
          <h2 className="font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground md:text-4xl">
            All the essential answers to help you make a decision
          </h2>

          <div className="mt-10 border-t border-border">
            {FAQ_ITEMS.map((item, i) => (
              <FAQRow
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-3xl">
              {CTA.heading}
            </h3>

            <a
              href={CTA.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center rounded-full border border-border bg-card py-2 pr-5 pl-2 text-sm font-semibold text-foreground shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            >
              <div>
                <span className="grid p-2
                 size-full place-items-center rounded-full">
                  {CTA.buttonLabel}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;