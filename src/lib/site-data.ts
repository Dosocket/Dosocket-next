import {
  Palette,
  Code2,
  TrendingUp,
  Bot,
  Users,
  type LucideIcon,
} from "lucide-react";

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
  category:
    | "Brand & Experience"
    | "Development"
    | "Growth"
    | "Automation"
    | "Product Teams";
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
    slug: "alga",
    title: "Alga",
    category: "Brand & Experience",
    client: "Alga Startups",
    year: "2026",
    image: "/projects/Alga/Alga%20-%20Website.webp",
    cover: "/projects/Alga/Alga%20-%20Website.webp",
    summary: "A modern, engaging digital storefront for a forward-thinking brand.",
    outcome: "+140% faster onboarding",
    challenge: "Alga needed a sleek, highly performant web presence that clearly communicates their value proposition and converts visitors quickly.",
    solution: "We designed and developed a lightning-fast responsive website utilizing seamless animations and optimized user journeys to maximize engagement.",
    results: [
      { label: "User Retention", value: "+45%" },
      { label: "Conversion Rate", value: "3.2%" },
      { label: "Time to Launch", value: "4 wks" }
    ],
    gallery: [
      "/projects/Alga/1764481856115-mockup-macbook-pro.webp",
      "/projects/Alga/Alga%20-%20Mobile.webp",
      "/projects/Alga/Alga%20-%20Website%20-%20Full%20Screen.webp",
      "/projects/Alga/Alga%20-%20Website.webp",
      "/projects/Alga/Alga%20Mockup.webp",
      "/projects/Alga/Alga%20Mockup121212121.webp",
      "/projects/Alga/Full.webp",
      "/projects/Alga/Laptop.webp",
      "/projects/Alga/MObile.webp",
      "/projects/Alga/Mobile%20-%20Screen.webp",
      "/projects/Alga/Single%20sfcreen%20mobile.webp"
    ],
    process: [
      { step: "Discovery", text: "Analyzed target demographics and competitive landscape." },
      { step: "Design", text: "Created wireframes and high-fidelity mockups focusing on conversion." },
      { step: "Development", text: "Built the frontend using modern web technologies for maximum performance." },
      { step: "Launch", text: "Conducted rigorous QA testing and deployed the site." }
    ],
    services: ["Web Design", "UI/UX", "Frontend Development"]
  },
  {
    slug: "cryptovault",
    title: "CryptoVault",
    category: "Development",
    client: "CryptoVault Inc.",
    year: "2026",
    image: "/projects/CryptoVault%20-%20%20Website/Crypto%20Website.webp",
    cover: "/projects/CryptoVault%20-%20%20Website/Crypto%20Website.webp",
    summary: "A secure and intuitive platform for modern digital asset management.",
    outcome: "$2M+ processed in first month",
    challenge: "Building trust in the crypto space requires an interface that is both highly secure and incredibly easy to use for newcomers.",
    solution: "A complete overhaul of the user dashboard, focusing on transparent data visualization and a streamlined onboarding process.",
    results: [
      { label: "Processed Volume", value: "$2M+" },
      { label: "User Growth", value: "300%" },
      { label: "Support Tickets", value: "-60%" }
    ],
    gallery: [
      "/projects/CryptoVault%20-%20%20Website/1st%20-%20MockUP.webp",
      "/projects/CryptoVault%20-%20%20Website/Crypto%20Website.webp",
      "/projects/CryptoVault%20-%20%20Website/Instagram%20Post%202nd.webp",
      "/projects/CryptoVault%20-%20%20Website/Instagram%20Post.webp",
      "/projects/CryptoVault%20-%20%20Website/Main%20Screen%20Mockup.webp",
      "/projects/CryptoVault%20-%20%20Website/create_a_desktop_202603291357.webp",
      "/projects/CryptoVault%20-%20%20Website/create_a_mock_202603291325.webp",
      "/projects/CryptoVault%20-%20%20Website/create_a_mock_202603291332.webp",
      "/projects/CryptoVault%20-%20%20Website/i_want_mockup_202603291348.webp"
    ],
    process: [
      { step: "Research", text: "Evaluated security best practices and user pain points in crypto exchanges." },
      { step: "UX Overhaul", text: "Redesigned the portfolio dashboard for clarity and ease of use." },
      { step: "Implementation", text: "Integrated real-time market data securely." },
      { step: "Optimization", text: "A/B tested CTA placements to maximize user registrations." }
    ],
    services: ["Web App", "Security UI", "Data Visualization"]
  },
  {
    slug: "dr-lush",
    title: "DR Lush",
    category: "Brand & Experience",
    client: "DR Lush Aesthetics",
    year: "2026",
    image: "/projects/DR%20Lush%20-%20Website/Lushora%20-%20Website.webp",
    cover: "/projects/DR%20Lush%20-%20Website/Lushora%20-%20Website.webp",
    summary: "An ultra-premium eCommerce experience for a luxury wellness brand.",
    outcome: "+210% increase in online sales",
    challenge: "DR Lush needed their digital presence to match the extreme premium quality of their physical aesthetic products.",
    solution: "A highly visual, cinematic website experience with ultra-realistic product showcases and an elegant checkout flow.",
    results: [
      { label: "Online Sales", value: "+210%" },
      { label: "Average Order Value", value: "+35%" },
      { label: "Bounce Rate", value: "-25%" }
    ],
    gallery: [
      "/projects/DR%20Lush%20-%20Website/A_ultra-realistic_premium_product_mockup_202606102055.webp",
      "/projects/DR%20Lush%20-%20Website/A_ultra-realistic_premium_product_mockup_202606102056.webp",
      "/projects/DR%20Lush%20-%20Website/Lushora%20-%20Website.webp",
      "/projects/DR%20Lush%20-%20Website/Mock%20Up.webp"
    ],
    process: [
      { step: "Brand Audit", text: "Aligned digital assets with physical luxury packaging." },
      { step: "Visual Design", text: "Created cinematic product showcases with subtle interactions." },
      { step: "eCommerce Build", text: "Developed a custom, seamless checkout experience." },
      { step: "Launch", text: "Supported the rollout with high-end social media assets." }
    ],
    services: ["eCommerce", "Brand Strategy", "Visual Design"]
  },
  {
    slug: "fintrack",
    title: "FinTrack",
    category: "Product Teams",
    client: "FinTrack Technologies",
    year: "2026",
    image: "/projects/FinTrack/Expense%20Dashboard.webp",
    cover: "/projects/FinTrack/Expense%20Dashboard.webp",
    summary: "A comprehensive expense tracking dashboard that simplifies personal finance.",
    outcome: "1M+ active monthly users",
    challenge: "Existing expense trackers were either too complex or lacked the necessary features for power users.",
    solution: "We designed a balanced dashboard that offers quick insights at a glance, with the ability to drill down into detailed analytics.",
    results: [
      { label: "Active Users", value: "1M+" },
      { label: "Session Time", value: "+40%" },
      { label: "5-Star Ratings", value: "15k+" }
    ],
    gallery: [
      "/projects/FinTrack/A_cinematic_product_202603292229.webp",
      "/projects/FinTrack/A_dramatic_floating_202603292306.webp",
      "/projects/FinTrack/Expense%20Dashboard.webp",
      "/projects/FinTrack/Image_1_%E2%80%94_202603292222.webp",
      "/projects/FinTrack/Main%20Dashbaord.webp",
      "/projects/FinTrack/make_a_simple_202603292338.webp"
    ],
    process: [
      { step: "User Research", text: "Surveyed 500+ users to understand their financial tracking habits." },
      { step: "Prototyping", text: "Iterated on dashboard layouts to find the perfect balance of information density." },
      { step: "Engineering", text: "Built a reactive frontend that handles thousands of transactions instantly." },
      { step: "Beta Testing", text: "Ran a closed beta to refine features before public launch." }
    ],
    services: ["Product Design", "Frontend Engineering", "User Research"]
  },
  {
    slug: "ironclad-fitness",
    title: "Ironclad Fitness",
    category: "Growth",
    client: "Ironclad Gyms",
    year: "2026",
    image: "/projects/Ironclad%20Fitness/Ironclad%20Fitness.webp",
    cover: "/projects/Ironclad%20Fitness/Ironclad%20Fitness.webp",
    summary: "A robust digital platform and growth strategy for a premier fitness chain.",
    outcome: "3x increase in membership signups",
    challenge: "Ironclad Fitness needed to translate their hardcore, community-driven gym atmosphere into an online platform that drives foot traffic.",
    solution: "We built a high-energy, visually striking website paired with an aggressive social media campaign strategy.",
    results: [
      { label: "New Memberships", value: "3x" },
      { label: "Social Engagement", value: "+180%" },
      { label: "App Downloads", value: "50k+" }
    ],
    gallery: [
      "/projects/Ironclad%20Fitness/Ironclad%20Fitness%20-%202.webp",
      "/projects/Ironclad%20Fitness/Ironclad%20Fitness.webp",
      "/projects/Ironclad%20Fitness/Laptop%201.webp",
      "/projects/Ironclad%20Fitness/Laptop%202.webp",
      "/projects/Ironclad%20Fitness/Laptop%203.webp",
      "/projects/Ironclad%20Fitness/Laptop%204.webp",
      "/projects/Ironclad%20Fitness/Mobile%201.webp",
      "/projects/Ironclad%20Fitness/Mobile%202.webp",
      "/projects/Ironclad%20Fitness/Mockup%20-%20Ironslad%20Fitness%20-%20Instagram.webp",
      "/projects/Ironclad%20Fitness/Mockup%20-%20Ironslad%20Fitness%20-%20Main.webp",
      "/projects/Ironclad%20Fitness/Tablet%201.webp"
    ],
    process: [
      { step: "Strategy", text: "Developed a digital strategy centered around community and results." },
      { step: "Platform Build", text: "Created a responsive site for class bookings and membership management." },
      { step: "Content Creation", text: "Produced high-impact photography and video assets." },
      { step: "Growth Campaign", text: "Launched targeted ads across social platforms." }
    ],
    services: ["Digital Strategy", "Web Development", "Growth Marketing"]
  },
  {
    slug: "real-estate-nod",
    title: "NOD Real Estate",
    category: "Brand & Experience",
    client: "NOD Properties",
    year: "2026",
    image: "/projects/Real%20Estate%20-%20NOD/NOD%20-%20Real%20Estate.webp",
    cover: "/projects/Real%20Estate%20-%20NOD/NOD%20-%20Real%20Estate.webp",
    summary: "A modern, immersive property discovery platform for luxury real estate.",
    outcome: "$150M+ in properties sold",
    challenge: "Selling high-end real estate requires conveying the feeling of a space before the buyer even steps foot inside.",
    solution: "We designed a highly visual, photography-first platform with virtual tours and seamless agent communication tools.",
    results: [
      { label: "Properties Sold", value: "$150M+" },
      { label: "Lead Quality", value: "+85%" },
      { label: "Time on Site", value: "4m 20s" }
    ],
    gallery: [
      "/projects/Real%20Estate%20-%20NOD/Desktop.webp",
      "/projects/Real%20Estate%20-%20NOD/Frame%2049.webp",
      "/projects/Real%20Estate%20-%20NOD/Hero%20Section.webp",
      "/projects/Real%20Estate%20-%20NOD/Instagram%20Poster.webp",
      "/projects/Real%20Estate%20-%20NOD/Laptop%20333.webp",
      "/projects/Real%20Estate%20-%20NOD/Mobile%201.webp",
      "/projects/Real%20Estate%20-%20NOD/Mobile%202.webp",
      "/projects/Real%20Estate%20-%20NOD/NOD%20-%20Real%20Estate.webp",
      "/projects/Real%20Estate%20-%20NOD/asdawdadad.webp",
      "/projects/Real%20Estate%20-%20NOD/make_desktop_mockup_202603281529.webp",
      "/projects/Real%20Estate%20-%20NOD/mockuuups-clean-desk-with-dell-display-mockup.webp",
      "/projects/Real%20Estate%20-%20NOD/mockuuups-free-macbook-pro-mockup-on-stone-pedestal.webp",
      "/projects/Real%20Estate%20-%20NOD/mockuuups-iphone-16-mockup-in-a-womans-hand-with-concrete-backdrop.webp",
      "/projects/Real%20Estate%20-%20NOD/sdgakjsd.webp"
    ],
    process: [
      { step: "Architecture", text: "Structured property data for advanced filtering and search." },
      { step: "UX Design", text: "Created an immersive, full-screen viewing experience for property galleries." },
      { step: "Development", text: "Integrated mapping APIs and CRM lead routing." },
      { step: "Launch", text: "Deployed with a soft launch to their top-tier clientele." }
    ],
    services: ["UX/UI Design", "Platform Architecture", "API Integration"]
  }
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  icon: LucideIcon;
  inclusions: string[];
  philosophy: string;
  process: { step: string; text: string }[];
  relatedSlugs: string[];
};
// G:\Projects\DoSocket\dosocket-demo\src\lib\site-data.ts
export const services: Service[] = [
  {
    slug: "digital-brand-experience",
    title: "Digital Brand & Experience",
    short: "Brand identity, UI/UX design, and web architecture.",
    image: "/Digital%20Brand%20%26%20Experience.png",
    icon: Palette,
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
      {
        step: "Design",
        text: "Identity, UI, and motion validated against predictive heat-maps.",
      },
      {
        step: "Ship",
        text: "A typed, scalable system your team can extend from day one.",
      },
    ],
    relatedSlugs: ["high-performance-development", "growth-revenue-systems"],
  },
  {
    slug: "high-performance-development",
    title: "High-Performance Development",
    short: "Scalable web, app, and eCommerce platforms.",
    image: "/HighPerformanceDevelopment.png",
    icon: Code2,
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
      {
        step: "Scope",
        text: "Architecture, integrations, and a performance budget.",
      },
      {
        step: "Build",
        text: "Component-first delivery with AI-assisted PR velocity.",
      },
      {
        step: "QA",
        text: "Accessibility, performance, and cross-device review.",
      },
      { step: "Handoff", text: "Docs, training, and a maintenance plan." },
    ],
    relatedSlugs: ["digital-brand-experience", "ai-workflow-automation"],
  },
  {
    slug: "growth-revenue-systems",
    title: "Growth & Revenue Systems",
    short: "SEO, performance marketing, and CRO.",
    image: "/GrowthandRevenueSystems.png",
    icon: TrendingUp,
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
      {
        step: "Audit",
        text: "Funnel teardown and competitive paid + organic audit.",
      },
      {
        step: "Segment",
        text: "AI-built audience segments with bespoke creative briefs.",
      },
      {
        step: "Launch",
        text: "Always-on testing across paid, SEO, and lifecycle.",
      },
      {
        step: "Optimize",
        text: "Weekly CRO sprints driven by session and event data.",
      },
    ],
    relatedSlugs: ["digital-brand-experience", "ai-workflow-automation"],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI & Workflow Automation",
    short: "Custom internal workflows, AI chatbots, and API integrations.",
    image: "/AIandWorkflowAutomation.png",
    icon: Bot,
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
      {
        step: "Map",
        text: "Identify the recurring workflows and the systems they touch.",
      },
      {
        step: "Train",
        text: "Fine-tune on your company data with proper evals.",
      },
      { step: "Wire", text: "API integrations across your existing stack." },
      {
        step: "Roll out",
        text: "Paired adoption with the team that uses it daily.",
      },
    ],
    relatedSlugs: ["high-performance-development", "on-demand-product-teams"],
  },
  {
    slug: "on-demand-product-teams",
    title: "On-Demand Product Teams",
    short: "Dedicated designers and developers on a monthly retainer.",
    image: "/OnDemandProductTeams.png",
    icon: Users,
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
      {
        step: "Match",
        text: "Pair the right talent to your stack and culture.",
      },
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
