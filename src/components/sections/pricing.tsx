"use client";

import React, { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, X, ArrowUpRight } from "lucide-react";
import { AgencyButton } from "@/components/ui/AgencyButton";
import { Reveal } from "@/components/ui/reveal";
import { BRAND } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const plans = [
  {
    name: "Basic",
    price: "$499",
    period: "/project",
    description:
      "Perfect for startups and small businesses testing the waters. Cancel any time.",
    features: [
      "Logo Design",
      "Brand Color Palette & Typography",
      "Basic Brand Guidelines",
      "Landing Page",
      "Mobile Responsive Design",
      "Contact Form Integration",
      "Basic On-Page SEO Setup",
      "Social Media Profile Setup",
      "Source Files Delivery",
      "7–10 Business Days Delivery",
    ],
    buttonLabel: "Book a Free Call",
    popular: false,
  },
  {
    name: "Standard",
    price: "$1,299",
    period: "/project",
    description:
      "For growing businesses ready to build a serious digital presence. Cancel any time.",
    features: [
      "Logo Design",
      "Full Brand Identity System",
      "Business Card + Letterhead Design",
      "Social Media Graphics Pack",
      "UI/UX Design",
      "Multi-Page Website",
      "WordPress or Webflow Development",
      "Mobile Responsive + Cross-Browser",
      "CMS Setup",
      "Blog Setup",
      "Full On-Page SEO",
      "Google Analytics + Search Console Setup",
    ],
    buttonLabel: "Book a Free Call",
    popular: true,
    tag: "Most Popular",
  },
  {
    name: "Premium",
    price: "$2,999",
    period: "/project",
    description:
      "For established businesses that want complete digital presence. Cancel any time.",
    features: [
      "Logo Design",
      "Full Brand Identity System + Complete Guidelines",
      "Full Brand Collateral",
      "Social Media Graphics Pack",
      "Full UI/UX Design",
      "Wireframing + Interactive Prototyping",
      "Pitch Deck Design",
      "Custom Website",
      "WordPress / Webflow / Custom Stack",
      "Advanced CMS Setup",
      "Blog + Content Management System",
      "Basic eCommerce",
    ],
    buttonLabel: "Book a Free Call",
    popular: false,
    tag: "Limited Availability",
  },
  {
    name: "Custom / Enterprise",
    price: "Let's Talk",
    period: "Starting from $5,000+",
    description:
      "Tailored for large businesses and complex projects. Cancel any time.",
    features: [
      "Everything in Premium, Plus:",
      "Tailored Scope Based on Your Needs",
      "Full-Stack Delivery Team",
      "Motion Design & Brand Animations",
      "Video Production & Editing",
      "3D Design & Mockups",
      "Full Marketing Collateral Suite",
      "Unlimited Pages — Custom Website",
    ],
    buttonLabel: "Book a Free Call",
    popular: false,
  },
];

// Comparison table data
const comparisonData = [
  {
    category: "DESIGN",
    features: [
      {
        name: "Logo Design",
        basic: "✅ 2 Concepts",
        standard: "✅ 3 Concepts",
        premium: "✅ 5 Concepts",
        custom: "✅ Unlimited",
      },
      {
        name: "Full Brand Identity System",
        basic: "❌",
        standard: "✅",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Brand Collateral (Card, Letterhead)",
        basic: "❌",
        standard: "✅",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Social Media Graphics Pack",
        basic: "❌",
        standard: "✅ 10 Templates",
        premium: "✅ 20+ Templates",
        custom: "✅ Full Suite",
      },
      {
        name: "UI/UX Design",
        basic: "❌",
        standard: "✅ 5 Screens",
        premium: "✅ 15 Screens",
        custom: "✅ Unlimited",
      },
      {
        name: "Wireframing + Prototyping",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Pitch Deck Design",
        basic: "❌",
        standard: "❌",
        premium: "✅ 20 Slides",
        custom: "✅",
      },
      {
        name: "Motion Design & Animation",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Video Production",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "3D Design & Mockups",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
    ],
  },
  {
    category: "DEVELOPMENT",
    features: [
      {
        name: "Landing Page",
        basic: "✅ 1 Page",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Multi-Page Website",
        basic: "❌",
        standard: "✅ 5 Pages",
        premium: "✅ 10 Pages",
        custom: "✅ Unlimited",
      },
      {
        name: "WordPress / Webflow",
        basic: "❌",
        standard: "✅",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "CMS Setup",
        basic: "❌",
        standard: "✅ Basic",
        premium: "✅ Advanced",
        custom: "✅ Custom",
      },
      {
        name: "Blog Setup",
        basic: "❌",
        standard: "✅",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "eCommerce Store",
        basic: "❌",
        standard: "❌",
        premium: "✅ 50 Products",
        custom: "✅ Full + Marketplace",
      },
      {
        name: "Third-Party Integrations",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅ Complex",
      },
      {
        name: "Custom Web App / SaaS",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Mobile App (iOS + Android)",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Speed & Core Web Vitals Optim.",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Post-Launch Maintenance",
        basic: "❌",
        standard: "✅ 1 Month",
        premium: "✅ 3 Months",
        custom: "✅ Long-Term",
      },
    ],
  },
  {
    category: "DIGITAL MARKETING",
    features: [
      {
        name: "On-Page SEO",
        basic: "✅ Basic",
        standard: "✅ Full",
        premium: "✅ Full",
        custom: "✅ Ongoing",
      },
      {
        name: "Technical SEO",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "SEO Strategy & Optimization",
        basic: "❌",
        standard: "❌",
        premium: "✅ 3 Months",
        custom: "✅ Retainer",
      },
      {
        name: "GA4 + Search Console Setup",
        basic: "❌",
        standard: "✅",
        premium: "✅ + Heatmap",
        custom: "✅ Full Suite",
      },
      {
        name: "Social Media Management",
        basic: "❌",
        standard: "✅ 1 Month / 1 Platform",
        premium: "✅ 3 Months / 2 Platforms",
        custom: "✅ Ongoing",
      },
      {
        name: "Paid Ads (Google / Meta)",
        basic: "❌",
        standard: "❌",
        premium: "✅ 1 Month",
        custom: "✅ Multi-Platform",
      },
      {
        name: "Content Marketing / Blog Posts",
        basic: "❌",
        standard: "❌",
        premium: "✅ 4 Posts",
        custom: "✅ Full Strategy",
      },
      {
        name: "Email Marketing",
        basic: "❌",
        standard: "❌",
        premium: "✅ Setup + 2 Campaigns",
        custom: "✅ Full Automation",
      },
      {
        name: "CRM & Marketing Automation",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Monthly Performance Reports",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅ + Quarterly",
      },
      {
        name: "Influencer Marketing",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
    ],
  },
  {
    category: "SUPPORT & DELIVERY",
    features: [
      {
        name: "Dedicated Project Manager",
        basic: "❌",
        standard: "✅",
        premium: "✅",
        custom: "✅ Account Manager",
      },
      {
        name: "Strategy / Discovery Call",
        basic: "❌",
        standard: "✅ 1 Hour",
        premium: "✅ 2 Hours",
        custom: "✅ Monthly Sessions",
      },
      {
        name: "Weekly Progress Updates",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Priority Support",
        basic: "❌",
        standard: "❌",
        premium: "✅ 24-Hour Response",
        custom: "✅ SLA-Based",
      },
      {
        name: "Post-Launch Support",
        basic: "❌",
        standard: "✅ 30 Days",
        premium: "✅ 90 Days",
        custom: "✅ Long-Term",
      },
      {
        name: "NDA & Contract Protection",
        basic: "❌",
        standard: "❌",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "White-Label Services",
        basic: "❌",
        standard: "❌",
        premium: "❌",
        custom: "✅",
      },
      {
        name: "Source Files Delivery",
        basic: "✅",
        standard: "✅",
        premium: "✅",
        custom: "✅",
      },
      {
        name: "Delivery Time",
        basic: "7–10 Days",
        standard: "14–18 Days",
        premium: "25–30 Days",
        custom: "Custom Timeline",
      },
    ],
  },
];

export function Pricing() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (idx: number) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const openContact = (intent: string) => {
    if (typeof window !== "undefined") {
      window.open(BRAND.calcom, "_blank");
    }
  };

  const renderCellContent = (content: string) => {
    if (content === "❌") {
      return (
        <span className="inline-flex size-6 items-center justify-center rounded-full bg-red-50 text-red-600 mx-auto">
          <X size={14} strokeWidth={2.5} className="text-red-600" />
        </span>
      );
    }
    if (content.startsWith("✅")) {
      const text = content.substring(1).trim();
      if (text === "") {
        return (
          <span className="inline-flex size-6 items-center justify-center rounded-full bg-neutral-100 text-black mx-auto">
            <Check size={14} strokeWidth={2.5} className="text-black" />
          </span>
        );
      }
      return (
        <div className="flex items-center justify-center gap-2">
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-neutral-100 text-black shrink-0">
            <Check size={12} strokeWidth={2.5} className="text-black" />
          </span>
          <span className="text-sm font-medium text-foreground">{text}</span>
        </div>
      );
    }
    return <span className="text-sm font-semibold text-foreground">{content}</span>;
  };

  return (
    <div className="bg-background text-foreground">
      {/* ── Header / Hero Banner ── */}
      <section className="container-x pt-24 pb-16">
        <Reveal>
          <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            / Pricing
          </span>
        </Reveal>
        <Reveal>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
            Simple, Transparent
            <br />
            <span className="text-[#A1A1A1]">Pricing.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Predictable scope, senior talent, and rapid delivery. No hidden retainers or surprise fees.
          </p>
        </Reveal>
      </section>

      {/* ── Pricing Cards Grid ── */}
      <section className="container-x pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const isExpanded = !!expandedCards[idx];
            const isBasicPlan = idx === 0;
            const hasManyFeatures = plan.features.length > 7;
            const shouldShowSeeMore = !isBasicPlan && hasManyFeatures;

            const displayedFeatures = isBasicPlan
              ? plan.features
              : isExpanded
                ? plan.features
                : plan.features.slice(0, 7);

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                layout
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <div className="w-full h-full flex flex-col">
                  <div
                    className={cn(
                      "relative rounded-3xl p-6 md:p-8 flex flex-col w-full h-full transition-all duration-300",
                      plan.popular
                        ? "border-2 border-black bg-white shadow-xl ring-2 ring-black/5"
                        : "border border-border bg-white shadow-xs hover:border-black/40 hover:shadow-md"
                    )}
                  >
                    {plan.tag && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
                        <span
                          className={cn(
                            "px-4 py-1 rounded-full uppercase shadow-sm inline-block font-display text-[10px] font-extrabold tracking-wider",
                            plan.popular
                              ? "bg-lime text-black"
                              : "bg-neutral-900 text-white"
                          )}
                        >
                          {plan.tag}
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="font-display font-bold text-2xl text-foreground">
                        {plan.name}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-border">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs md:text-sm font-medium text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 relative pb-4">
                      <ul className="flex flex-col gap-3.5">
                        <AnimatePresence initial={false}>
                          {displayedFeatures.map((feature, fIdx) => (
                            <motion.li
                              key={fIdx}
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-start gap-3"
                            >
                              <div className="mt-0.5 shrink-0 flex items-center justify-center size-5 rounded-full bg-neutral-100 text-black shadow-xs">
                                <Check size={11} strokeWidth={3} className="text-black" />
                              </div>
                              <span className="text-sm font-medium text-foreground/80 leading-snug">
                                {feature}
                              </span>
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>

                      {/* Blurry fade effect when collapsed */}
                      {!isBasicPlan && !isExpanded && hasManyFeatures && (
                        <div
                          className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.95))",
                          }}
                        />
                      )}

                      {/* See More / See Less toggle */}
                      {shouldShowSeeMore && (
                        <div className="flex justify-center w-full mt-6">
                          <button
                            type="button"
                            onClick={() => toggleExpand(idx)}
                            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-black transition-colors cursor-pointer"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp size={14} /> See Less
                              </>
                            ) : (
                              <>
                                <ChevronDown size={14} /> See More
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    <AgencyButton
                      text={plan.buttonLabel}
                      onClick={() =>
                        openContact(`Book a Free Call - ${plan.name}`)
                      }
                      variant={plan.popular ? "filled" : "outline"}
                      className="mt-8"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Comparison Table Section ── */}
      <section className="container-x pb-32">
        <div className="mb-12">
          <Reveal>
            <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              / Detailed Breakdown
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-6 font-display text-4xl font-semibold md:text-5xl">
              What&apos;s included in{" "}
              <span className="text-[#A1A1A1]">each plan</span>
            </h2>
          </Reveal>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-border bg-white p-4 md:p-8 shadow-sm">
          <table className="w-full border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-bold text-base md:text-lg text-foreground w-[32%]">
                  Feature / Service
                </th>
                <th className="text-center p-4 font-display font-bold text-base text-foreground w-[17%]">
                  Basic{" "}
                  <span className="block text-xs font-semibold text-muted-foreground mt-0.5">
                    $499
                  </span>
                </th>
                <th className="text-center p-4 font-display font-bold text-base text-foreground bg-neutral-50/80 rounded-t-2xl w-[17%]">
                  Standard{" "}
                  <span className="block text-xs font-semibold text-lime-foreground bg-lime px-2 py-0.5 rounded-full mt-1 max-w-max mx-auto">
                    $1,299
                  </span>
                </th>
                <th className="text-center p-4 font-display font-bold text-base text-foreground w-[17%]">
                  Premium{" "}
                  <span className="block text-xs font-semibold text-muted-foreground mt-0.5">
                    $2,999
                  </span>
                </th>
                <th className="text-center p-4 font-display font-bold text-base text-foreground w-[17%]">
                  Custom{" "}
                  <span className="block text-xs font-semibold text-muted-foreground mt-0.5">
                    $5,000+
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  <tr className="border-t-2 border-border/80">
                    <td
                      colSpan={5}
                      className="p-3.5 pt-6 bg-neutral-50/80 rounded-lg"
                    >
                      <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-foreground">
                        {category.category}
                      </span>
                    </td>
                  </tr>
                  {category.features.map((feature, fIdx) => (
                    <tr
                      key={fIdx}
                      className="border-b border-border/60 hover:bg-neutral-50/50 transition-colors"
                    >
                      <td className="p-4 text-sm font-medium text-muted-foreground">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        {renderCellContent(feature.basic)}
                      </td>
                      <td className="p-4 text-center bg-neutral-50/40">
                        {renderCellContent(feature.standard)}
                      </td>
                      <td className="p-4 text-center">
                        {renderCellContent(feature.premium)}
                      </td>
                      <td className="p-4 text-center">
                        {renderCellContent(feature.custom)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Closing Scoping Strip matching Services page */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-8 md:p-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
              Need a custom scope?
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Book a 30-minute discovery call. We&apos;ll scope your project and provide a guaranteed fixed quote within 24 hours.
            </p>
          </div>
          <a
            href={BRAND.calcom}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-lime py-3 pr-2.5 pl-6 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02] shrink-0"
          >
            Book Scoping Call
            <span className="grid size-8 place-items-center rounded-full bg-black text-lime">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
