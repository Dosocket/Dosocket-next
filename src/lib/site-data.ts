export const BRAND = {
  name: "Dosocket",
  handle: "@dosocket",
  email: "hello@dosocket.com",
  calcom: "https://cal.com/dosocketagency",
  socials: {
    cal: "https://cal.com/dosocketagency",
    gmail: "mailto:dosocketagency@gmail.com",
    facebook: "https://facebook.com/dosocket",
    instagram: "https://instagram.com/dosocket",
    linkedin: "https://linkedin.com/company/dosocket",
    x: "https://x.com/dosocket",
  },
};

export type Project = {
  slug: string;
  title: string;
  category: "Brand & Experience" | "Development" | "Growth" | "Automation" | "Product Teams";
  client: string;
  year: string;
  image: string;
  cover: string;
  summary: string;
  outcome: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: string[];
  process: { step: string; text: string }[];
  services: string[];
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const projects: Project[] = [
  {
    slug: "northwind-rebrand",
    title: "Northwind Rebrand",
    category: "Brand & Experience",
    client: "Northwind Capital",
    year: "2025",
    image: u("photo-1487958449943-2429e8be8625"),
    cover: u("photo-1487958449943-2429e8be8625", 1800, 900),
    summary: "End-to-end rebrand and digital storefront for a boutique investment firm.",
    outcome: "+184% qualified inbound in 90 days",
    challenge:
      "Northwind had outgrown a 12-year-old identity and a WordPress site that converted at 0.6%.",
    solution:
      "A new geometric identity, AI heat-map–validated information architecture, and a typed marketing site shipped in six weeks.",
    results: [
      { label: "Qualified inbound", value: "+184%" },
      { label: "Conversion rate", value: "4.1%" },
      { label: "Time to ship", value: "6 wks" },
    ],
    gallery: [
      u("photo-1487958449943-2429e8be8625"),
      u("photo-1518005020951-eccb494ad742"),
      u("photo-1503387762-592deb58ef4e"),
      u("photo-1545558014-8692077e9b5c"),
    ],
    process: [
      {
        step: "Discovery",
        text: "Interviews with the eight partners and a competitive audit of 22 peer firms.",
      },
      {
        step: "Strategy",
        text: "Positioning around 'compounding clarity' that informed every artifact.",
      },
      {
        step: "Identity",
        text: "Custom monospace wordmark, a geometric mark, a tight five-color palette.",
      },
      { step: "Build", text: "Typed marketing site with predictive heat-map validation." },
    ],
    services: ["Brand", "Web", "AI Validation"],
  },
  {
    slug: "smartpay-platform",
    title: "Smartpay Platform",
    category: "Development",
    client: "Smartpay Finance",
    year: "2025",
    image: u("photo-1556742049-0cfed4f6a45d"),
    cover: u("photo-1556742049-0cfed4f6a45d", 1800, 900),
    summary: "Rebuilt a consumer payments app on a typed edge stack in half the planned time.",
    outcome: "−55% support tickets · 4.8★ store rating",
    challenge:
      "An aging app with a 2.9 rating and a checkout flow losing 38% of users at confirmation.",
    solution:
      "A ground-up rebuild on TanStack + Cloudflare edge, paired with AI coding assistants for a 50% faster cycle.",
    results: [
      { label: "Checkout completion", value: "+41%" },
      { label: "Store rating", value: "4.8 ★" },
      { label: "Support tickets", value: "−55%" },
    ],
    gallery: [
      u("photo-1556742049-0cfed4f6a45d"),
      u("photo-1551288049-bebda4e38f71"),
      u("photo-1460925895917-afdab827c52f"),
      u("photo-1611162617213-7d7a39e9b1d7"),
    ],
    process: [
      { step: "Audit", text: "Heuristic review and analytics deep-dive across 14 critical flows." },
      { step: "Architecture", text: "Edge-first event pipeline with a typed React frontend." },
      { step: "Build", text: "Six sprints with AI-assisted code review for sub-2-day PRs." },
      { step: "Handoff", text: "Docs, training, and a 90-day engineering retainer." },
    ],
    services: ["Web App", "Edge Infra", "Design System"],
  },
  {
    slug: "ordinaire-ecom",
    title: "Ordinaire DTC",
    category: "Growth",
    client: "Ordinaire Skincare",
    year: "2025",
    image: u("photo-1556228720-195a672e8a03"),
    cover: u("photo-1556228720-195a672e8a03", 1800, 900),
    summary: "Predictive AI-led growth engine for a clinical-skincare DTC launch.",
    outcome: "$4.2M Year-One DTC revenue",
    challenge: "A new clinical-skincare brand entering a saturated category with no paid playbook.",
    solution:
      "Hyper-segmented campaigns generated and optimized in real time, paired with CRO across the funnel.",
    results: [
      { label: "Y1 DTC revenue", value: "$4.2M" },
      { label: "Blended ROAS", value: "5.6×" },
      { label: "Repeat purchase", value: "47%" },
    ],
    gallery: [
      u("photo-1556228720-195a672e8a03"),
      u("photo-1571781926291-c477ebfd024b"),
      u("photo-1522335789203-aaa46d6b1d65"),
      u("photo-1620916566398-39f1143ab7be"),
    ],
    process: [
      { step: "Audit", text: "Funnel teardown and competitive paid audit across 11 brands." },
      {
        step: "Segments",
        text: "Predictive AI built 24 audience segments with creative briefs per segment.",
      },
      { step: "Launch", text: "Always-on testing across Meta, Google, and TikTok." },
      { step: "CRO", text: "Weekly funnel optimization driven by session replays." },
    ],
    services: ["Performance", "SEO", "CRO"],
  },
  {
    slug: "apex-automation",
    title: "Apex Ops Automation",
    category: "Automation",
    client: "Apex Editorial",
    year: "2025",
    image: u("photo-1513364776144-60967b0f800f"),
    cover: u("photo-1513364776144-60967b0f800f", 1800, 900),
    summary: "Custom AI workflows replacing 32 hrs/wk of manual editorial ops.",
    outcome: "32 hrs/wk reclaimed across the editorial team",
    challenge:
      "Editorial ops were drowning in Slack triage, asset routing, and inbound contributor vetting.",
    solution:
      "A custom chatbot trained on internal style guides plus API integrations between Notion, Slack, and the CMS.",
    results: [
      { label: "Hours saved / wk", value: "32" },
      { label: "Lead qualification", value: "Auto" },
      { label: "Time to publish", value: "−41%" },
    ],
    gallery: [
      u("photo-1513364776144-60967b0f800f"),
      u("photo-1499951360447-b19be8fe80f5"),
      u("photo-1604079628040-94301bb21b91"),
      u("photo-1561070791-2526d30994b8"),
    ],
    process: [
      { step: "Map", text: "Mapped 14 recurring workflows and the systems each one touched." },
      { step: "Train", text: "Fine-tuned a domain chatbot on 6 years of style guides and edits." },
      { step: "Wire", text: "API integrations between Slack, Notion, Airtable, and the CMS." },
      { step: "Roll out", text: "Two weeks of paired adoption with the editorial team." },
    ],
    services: ["AI Chatbot", "API Integrations", "Workflow Design"],
  },
  {
    slug: "quantum-team",
    title: "Quantum Embedded Team",
    category: "Product Teams",
    client: "Quantum Labs",
    year: "2025",
    image: u("photo-1551288049-bebda4e38f71"),
    cover: u("photo-1551288049-bebda4e38f71", 1800, 900),
    summary: "A two-person Dosocket pod embedded with Quantum's product org for six months.",
    outcome: "3× output vs. previous in-house ramp",
    challenge:
      "Quantum needed senior design + engineering velocity without a six-month hiring cycle.",
    solution:
      "A dedicated designer + developer pod, integrated into Linear and Slack, leveraging AI assistants to triple shipping cadence.",
    results: [
      { label: "Output multiplier", value: "3×" },
      { label: "Time to first ship", value: "Week 1" },
      { label: "Retention", value: "Month 9" },
    ],
    gallery: [
      u("photo-1551288049-bebda4e38f71"),
      u("photo-1460925895917-afdab827c52f"),
      u("photo-1518770660439-4636190af475"),
      u("photo-1581291518857-4e27b48ff24e"),
    ],
    process: [
      {
        step: "Match",
        text: "Paired the right designer + engineer to the team's stack and culture.",
      },
      { step: "Onboard", text: "Embedded in Linear and Slack within the first 48 hours." },
      { step: "Ship", text: "Weekly demos with AI-assisted PR velocity." },
      { step: "Extend", text: "Renewed for a second pod on a sister product." },
    ],
    services: ["Embedded Design", "Embedded Engineering", "AI Tooling"],
  },
  {
    slug: "stark-storefront",
    title: "Stark Storefront",
    category: "Brand & Experience",
    client: "Stark & Co.",
    year: "2024",
    image: u("photo-1607082348824-0a96f2a4b9da"),
    cover: u("photo-1607082348824-0a96f2a4b9da", 1800, 900),
    summary: "An industrial-luxury Shopify storefront for a small-batch coffee roaster.",
    outcome: "+72% subscription LTV",
    challenge:
      "A specialty roaster moving from cafe-only sales into national grocery needed a storefront that earned shelf-presence credibility online.",
    solution:
      "A monochrome typographic system, a modular Shopify subscription flow, and a content engine the in-house team can run.",
    results: [
      { label: "Subscription LTV", value: "+72%" },
      { label: "AOV", value: "+38%" },
      { label: "Retail accounts", value: "180+" },
    ],
    gallery: [
      u("photo-1607082348824-0a96f2a4b9da"),
      u("photo-1521017432531-fbd92d768814"),
      u("photo-1559056199-641a0ac8b55e"),
      u("photo-1559525839-d9acfd3d2bfd"),
    ],
    process: [
      { step: "Audit", text: "Studied 60+ specialty roasters and three target retailers." },
      { step: "Identity", text: "Refined the wordmark and built a typographic hierarchy." },
      { step: "Build", text: "Shopify storefront with a modular subscription flow." },
      { step: "Launch", text: "Photography, trade collateral, and a 90-day growth engine." },
    ],
    services: ["Brand", "eCommerce", "Growth"],
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  inclusions: string[];
  philosophy: string;
  process: { step: string; text: string }[];
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "digital-brand-experience",
    title: "Digital Brand & Experience",
    short: "Brand identity, UI/UX design, and web architecture.",
    description:
      "Brand identity, UI/UX design, and web architecture. We use AI for rapid prototyping and heat-map prediction to build digital storefronts that convert.",
    inclusions: [
      "Brand strategy & positioning",
      "Visual identity & design systems",
      "UI/UX design",
      "Web architecture & IA",
      "AI-driven heat-map prediction",
      "Conversion-tuned storefronts",
    ],
    philosophy:
      "A brand isn't a logo — it's a conversion engine. We design systems precise enough to scale and distinctive enough to be remembered.",
    process: [
      {
        step: "Discovery",
        text: "Stakeholder interviews, competitive landscape, and AI-validated user research.",
      },
      {
        step: "Strategy",
        text: "Positioning and the strategic core every artifact will reference.",
      },
      { step: "Design", text: "Identity, UI, and motion validated against predictive heat-maps." },
      { step: "Ship", text: "A typed, scalable system your team can extend from day one." },
    ],
    relatedSlugs: ["high-performance-development", "growth-revenue-systems"],
  },
  {
    slug: "high-performance-development",
    title: "High-Performance Development",
    short: "Scalable web, app, and eCommerce platforms.",
    description:
      "Scalable web, app, and eCommerce platforms built in half the time using AI coding assistants for cleaner, faster backend infrastructure.",
    inclusions: [
      "Marketing sites & web apps",
      "Mobile & cross-platform apps",
      "eCommerce (Shopify & headless)",
      "Edge-first backend infrastructure",
      "AI-assisted code review",
      "CI/CD and observability",
    ],
    philosophy:
      "Code should be as beautiful as the design. We ship typed, accessible, performance-budgeted platforms — twice as fast, half the surface area.",
    process: [
      { step: "Scope", text: "Architecture, integrations, and a performance budget." },
      { step: "Build", text: "Component-first delivery with AI-assisted PR velocity." },
      { step: "QA", text: "Accessibility, performance, and cross-device review." },
      { step: "Handoff", text: "Docs, training, and a maintenance plan." },
    ],
    relatedSlugs: ["digital-brand-experience", "ai-workflow-automation"],
  },
  {
    slug: "growth-revenue-systems",
    title: "Growth & Revenue Systems",
    short: "SEO, performance marketing, and CRO.",
    description:
      "SEO, performance marketing, and CRO. We use predictive AI to analyze markets, generate hyper-segmented campaigns, and optimize conversion rates in real-time.",
    inclusions: [
      "Technical & content SEO",
      "Paid acquisition across channels",
      "Conversion-rate optimization",
      "Predictive market analysis",
      "Hyper-segmented campaign generation",
      "Real-time funnel optimization",
    ],
    philosophy:
      "Growth is an engineering discipline. We instrument the funnel, let predictive AI find the lift, and ship the wins weekly.",
    process: [
      { step: "Audit", text: "Funnel teardown and competitive paid + organic audit." },
      { step: "Segment", text: "AI-built audience segments with bespoke creative briefs." },
      { step: "Launch", text: "Always-on testing across paid, SEO, and lifecycle." },
      { step: "Optimize", text: "Weekly CRO sprints driven by session and event data." },
    ],
    relatedSlugs: ["digital-brand-experience", "ai-workflow-automation"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    short: "Custom internal workflows, AI chatbots, and API integrations.",
    description:
      "Custom internal workflows, AI chatbots trained on your company data, and API integrations to automate manual tasks and lead qualification.",
    inclusions: [
      "Custom AI chatbots on your data",
      "Workflow design & mapping",
      "API integrations (Slack, Notion, CRM)",
      "Lead qualification automation",
      "Internal copilots",
      "Eval and monitoring",
    ],
    philosophy:
      "The best AI work is the work nobody sees — it just removes the manual step that used to live there.",
    process: [
      { step: "Map", text: "Identify the recurring workflows and the systems they touch." },
      { step: "Train", text: "Fine-tune on your company data with proper evals." },
      { step: "Wire", text: "API integrations across your existing stack." },
      { step: "Roll out", text: "Paired adoption with the team that uses it daily." },
    ],
    relatedSlugs: ["high-performance-development", "on-demand-product-teams"],
  },
  {
    slug: "on-demand-product-teams",
    title: "On-Demand Product Teams",
    short: "Dedicated designers and developers on a monthly retainer.",
    description:
      "Dedicated designers and developers integrated directly into your company on a monthly retainer, utilizing AI to output the volume of three traditional employees.",
    inclusions: [
      "Senior designers & developers",
      "Monthly retainer engagement",
      "Direct Slack + Linear integration",
      "AI-assisted output multiplier",
      "Weekly demos & reporting",
      "Flex up / flex down monthly",
    ],
    philosophy:
      "Hiring takes six months. We embed in a week — and ship like a team that's been there for a year.",
    process: [
      { step: "Match", text: "Pair the right talent to your stack and culture." },
      { step: "Onboard", text: "Embedded in your tools within 48 hours." },
      { step: "Ship", text: "Weekly demos with AI-assisted PR velocity." },
      { step: "Extend", text: "Renew, flex, or graduate to a permanent hire." },
    ],
    relatedSlugs: ["high-performance-development", "ai-workflow-automation"],
  },
];

export const team = [
  {
    name: "Aarav Mehta",
    role: "CEO & Founder",
    bio: "Fifteen years building product and brand for venture-backed companies. Started Dosocket to merge senior craft with AI-multiplied velocity.",
    image: u("photo-1500648767791-00dcc994a43e", 600, 600),
  },
  {
    name: "Riya Kapoor",
    role: "Co-Founder",
    bio: "Operator turned design partner. Previously led growth at two consumer fintechs and an enterprise SaaS unicorn.",
    image: u("photo-1494790108377-be9c29b29330", 600, 600),
  },
  {
    name: "Daniel Okafor",
    role: "Lead Developer",
    bio: "Edge-first frontend engineer. Builds the production platforms — typed, accessible, fast — and the AI tooling that ships them faster.",
    image: u("photo-1507003211169-0a1dd7228f2d", 600, 600),
  },
];

export const testimonials = [
  {
    quote:
      "Dosocket shipped in six weeks what our previous agency couldn't ship in six months. The output-per-dollar is unmatched.",
    name: "Priya Anand",
    role: "CMO, Northwind Capital",
    image: team[1].image,
  },
  {
    quote:
      "They didn't just redesign the app — they rebuilt how we ship. Our cycle time is half what it was.",
    name: "Jordan Wei",
    role: "VP Product, Smartpay",
    image: team[0].image,
  },
  {
    quote:
      "The embedded pod was on day one what an in-house hire would be at month six. We renewed twice.",
    name: "Sasha Lin",
    role: "Head of Product, Quantum Labs",
    image: team[2].image,
  },
];
