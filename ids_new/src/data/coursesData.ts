export interface CourseModule {
  id: number;
  title: string;
  tag: string;
  iconName: string;
  iconColor: string;
  subtitle: string;
  desc: string;
  techStack: string[];
}

export interface CourseData {
  id: string;
  slug: string;
  aliases: string[];
  courseCode: string;
  name: string;
  pillTag: string;
  headlinePre: string;
  headlineHighlight: string;
  headlinePost: string;
  subheadline: string;
  duration: string;
  durationDetail: string;
  mode: string;
  statRating: string;
  statRatingLabel: string;
  statPartners: string;
  statPartnersLabel: string;
  curriculumCategory: string;
  curriculumTitlePre: string;
  curriculumTitleHighlight: string;
  curriculumSubtitle: string;
  bannerImage: string;
  highlights: string[];
  targetAudience: string[];
  modules: CourseModule[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const COURSES_DATA: CourseData[] = [
  // 1. MASTER IN DIGITAL MARKETING COURSE
  {
    id: "master",
    slug: "master-in-digital-marketing",
    aliases: [
      "master",
      "master-digital-marketing",
      "master-in-digital-marketing-course",
      "dm01m",
    ],
    courseCode: "DM01M",
    name: "Master in Digital Marketing Course",
    pillTag: "GOVT. RECOGNIZED CERTIFICATION • NSDC & MSME ALIGNED",
    headlinePre: "AI-Infused Advanced",
    headlineHighlight: "Master in Digital Marketing",
    headlinePost: "Course",
    subheadline:
      "Become a full-stack digital marketing leader with India's most practical, project-first training program. Master 35+ industry tools, Generative AI workflows, live ad budgets, and get 100% placement support.",
    duration: "6 Months",
    durationDetail: "Practical Training + 2 Months Guaranteed Live Internship",
    mode: "Online Live (Interactive) & Offline Campus (Greater Noida)",
    statRating: "4.9/5",
    statRatingLabel: "Rated by 3,200+ Alumni",
    statPartners: "100+",
    statPartnersLabel: "Active Hiring Partners",
    curriculumCategory: "COMPREHENSIVE 12-MODULE MASTER BLUEPRINT",
    curriculumTitlePre: "The Digital Marketing",
    curriculumTitleHighlight: "Master Curriculum",
    curriculumSubtitle:
      "A scientifically structured 12-module roadmap. Master every facet of digital growth, from Creative Execution and Organic Search to Performance Scaling and Generative AI.",
    bannerImage: "/assets/courses/master_marketing.jpg",
    highlights: [
      "12 High-Impact In-Depth Modules & 35+ Tools",
      "Generative Engine Optimization (GEO) & AI Search",
      "Live Ad Budget Spends on Meta & Google Ads",
      "2 Months Guaranteed Agency Internship & Placement Support",
    ],
    targetAudience: [
      "College graduates seeking high-paying digital marketing careers",
      "Career switchers wanting to transition into high-growth tech & agency roles",
      "Marketing executives aiming for senior growth leadership & strategist positions",
    ],
    modules: [
      {
        id: 1,
        title: "Module 01: Foundations of the Digital Ecosystem & Consumer Psychology",
        tag: "FOUNDATIONS • MARKET RESEARCH • STRATEGY",
        iconName: "Laptop",
        iconColor: "text-[#fe4759]",
        subtitle: "Core Foundations & Behavioral Funnels",
        desc: "Understand customer psychology, buyer personas, market sizing, and the strategic differences between inbound demand capture and outbound prospecting.",
        techStack: ["Google Trends", "SimilarWeb", "SurveyMonkey", "AnswerThePublic", "SpyFu"],
      },
      {
        id: 2,
        title: "Module 02: High-Converting Website Architecture & Landing Pages",
        tag: "CMS • UX DESIGN • LANDING PAGES",
        iconName: "Globe",
        iconColor: "text-orange-500",
        subtitle: "Web Design, Speed & Funnel Optimization",
        desc: "Build professional, mobile-responsive commercial websites on WordPress with Elementor. Implement conversion rate optimization (CRO) principles, heatmap tracking, and lead forms.",
        techStack: ["WordPress", "Elementor Pro", "Hotjar", "Cloudflare", "Google PageSpeed"],
      },
      {
        id: 3,
        title: "Module 03: Visual Branding, AI Creative Strategy & Canva Mastery",
        tag: "CREATIVE • AI TOOLS • BRAND ASSETS",
        iconName: "Palette",
        iconColor: "text-purple-600",
        subtitle: "Brand Identity, Ad Creatives & Motion Graphics",
        desc: "Master Canva Pro, Midjourney, and Adobe Express to produce thumb-stopping social media creatives, ad banners, video reels, and cohesive brand guidelines.",
        techStack: ["Canva Pro", "Midjourney", "Adobe Express", "CapCut", "Figma Basics"],
      },
      {
        id: 4,
        title: "Module 04: Copywriting, Storytelling & Creative Narrative",
        tag: "DIRECT RESPONSE • HOOKS • AD COPY",
        iconName: "FileText",
        iconColor: "text-[#fe4759]",
        subtitle: "High-Converting Sales Copy & Prompt Engineering",
        desc: "Learn direct-response copywriting frameworks (AIDA, PAS, BAB). Craft persuasive ad copy, landing page headlines, email sequences, and utilize advanced generative AI prompts.",
        techStack: ["ChatGPT Plus", "Claude 3.5", "Grammarly", "Copy.ai", "Hemingway"],
      },
      {
        id: 5,
        title: "Module 05: Search Engine Optimization (Organic Traffic & Technical SEO)",
        tag: "ON-PAGE • TECHNICAL • OFF-PAGE BACKLINKS",
        iconName: "Search",
        iconColor: "text-emerald-600",
        subtitle: "Top-10 Google Rankings & Authority Building",
        desc: "Execute complete keyword research, on-page content optimization, internal linking, core web vitals, crawl error fixes, and white-hat high-DA backlink strategies.",
        techStack: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Yoast SEO"],
      },
      {
        id: 6,
        title: "Module 06: Generative Engine Optimization (GEO) & AI Search Ranking",
        tag: "AI SEARCH • PERPLEXITY • SEARCHGPT",
        iconName: "Sparkles",
        iconColor: "text-indigo-600",
        subtitle: "The Future of Search: Ranking in AI Answers",
        desc: "Pioneer the next frontier of search. Learn how to structure knowledge graphs, semantic entities, and conversational schemas to rank directly in Perplexity, SearchGPT, and Google AI Overviews.",
        techStack: ["Perplexity AI", "SearchGPT", "Google AI Overviews", "Schema.org", "JSON-LD"],
      },
      {
        id: 7,
        title: "Module 07: Google Ads & Paid Search Advertising (PPC & Performance Max)",
        tag: "SEARCH ADS • SHOPPING • PMAX CAMPAIGNS",
        iconName: "Target",
        iconColor: "text-amber-600",
        subtitle: "High-Intent Lead Gen & Ad Budget Scaling",
        desc: "Set up and manage real live ad accounts on Google Ads. Master Quality Score optimization, negative keywords, bidding strategies (tCPA, tROAS), and Performance Max campaigns.",
        techStack: ["Google Ads Manager", "Keyword Planner", "Google Tag Manager", "Merchant Center"],
      },
      {
        id: 8,
        title: "Module 08: Meta Ads (Facebook & Instagram Performance Marketing)",
        tag: "PAID SOCIAL • CBO • RETARGETING FUNNELS",
        iconName: "TrendingUp",
        iconColor: "text-blue-600",
        subtitle: "Full-Funnel Paid Acquisition & Scaling",
        desc: "Master Meta Ads Manager, Advantage+ campaigns, lookalike audiences, and creative testing matrix. Integrate Meta Pixel & Conversions API for 100% accurate event tracking.",
        techStack: ["Meta Ads Manager", "Meta Pixel Helper", "Conversions API", "Audience Insights"],
      },
      {
        id: 9,
        title: "Module 09: Social Media Growth, Organic Channels & Community Building",
        tag: "ORGANIC GROWTH • LINKEDIN • VIRAL CONTENT",
        iconName: "Share2",
        iconColor: "text-pink-600",
        subtitle: "Building Organic Authority & Engagement",
        desc: "Develop content calendar roadmaps across LinkedIn, Instagram, and YouTube. Learn algorithm mechanics, short-form video hooks, and how to turn followers into active paying customers.",
        techStack: ["Buffer", "Notion Content Hub", "YouTube Studio", "Meta Business Suite"],
      },
      {
        id: 10,
        title: "Module 10: Email Marketing, Drip Funnels & Marketing Automation",
        tag: "RETENTION • AUTOMATION • DRIP CAMPAIGNS",
        iconName: "Mail",
        iconColor: "text-teal-600",
        subtitle: "High-ROI Lifecycle Marketing & Lead Nurturing",
        desc: "Design automated welcome series, abandoned cart recovery flows, lead-nurturing drips, and segmentation. Build multi-platform workflow automations with Zapier.",
        techStack: ["Mailchimp", "HubSpot CRM", "ActiveCampaign", "Zapier", "Make.com"],
      },
      {
        id: 11,
        title: "Module 11: Web Analytics, GA4 & Data-Driven Attribution Modeling",
        tag: "GA4 • LOOKER STUDIO • DATA ATTRIBUTION",
        iconName: "BarChart3",
        iconColor: "text-violet-600",
        subtitle: "Decisions Backed by Data & Executive Dashboards",
        desc: "Configure Google Analytics 4 from scratch with custom events and user parameters. Build real-time client reporting dashboards in Looker Studio to track ROI, LTV, and CAC.",
        techStack: ["Google Analytics 4", "Looker Studio", "Google Tag Manager", "MS Clarity"],
      },
      {
        id: 12,
        title: "Module 12: Agency Blueprint, Freelancing & Placement Preparation",
        tag: "PORTFOLIO • CLIENT SOURCING • MOCK INTERVIEWS",
        iconName: "Briefcase",
        iconColor: "text-[#fe4759]",
        subtitle: "Career Acceleration, Portfolios & Mock Audits",
        desc: "Assemble your comprehensive multi-project digital marketing portfolio. Participate in technical mock interviews, client pitch decks, pricing models, and interview placement drives.",
        techStack: ["LinkedIn Sales Navigator", "Upwork Pro", "Portfolio Hub", "Pitch Decks"],
      },
    ],
    seoTitle: "Master in Digital Marketing Course (6 Months) with AI & Live Projects",
    seoDescription:
      "Enroll in India's top-rated Master in Digital Marketing Course at IDS. 6-month hands-on training with AI tools, 10+ live client campaigns, NSDC certification, and 100% placement assistance.",
    keywords: [
      "Master in Digital Marketing Course",
      "Advanced Digital Marketing Course",
      "Digital Marketing Course in Noida",
      "AI in Digital Marketing",
      "Digital Marketing Certification",
      "Performance Marketing Course",
    ],
  },

  // 2. DIGITAL MARKETING SPECIALIST COURSE
  {
    id: "specialist",
    slug: "digital-marketing-specialist",
    aliases: [
      "specialist",
      "specialist-course",
      "digital-marketing-specialist-course",
      "dm01s",
    ],
    courseCode: "DM01S",
    name: "Digital Marketing Specialist Course",
    pillTag: "GOOGLE & META CERTIFIED • TACTICAL PERFORMANCE MARKETING SPRINT",
    headlinePre: "Fast-Track",
    headlineHighlight: "Digital Marketing Specialist",
    headlinePost: "Course",
    subheadline:
      "A high-octane 3-month tactical performance marketing sprint. Master real-time paid ad spends, conversion rate optimization (CRO), ROAS scaling, and data attribution telemetry with Google and Meta certified mentors.",
    duration: "3 Months",
    durationDetail: "Intensive Performance Sprint + Portfolio Building",
    mode: "Online Live & Offline Campus (Greater Noida)",
    statRating: "4.9/5",
    statRatingLabel: "Rated by 1,850+ Alumni",
    statPartners: "100+",
    statPartnersLabel: "Specialist Agency Recruiters",
    curriculumCategory: "FOCUSED 8-MODULE PERFORMANCE MARKETING SPRINT",
    curriculumTitlePre: "Performance Marketing",
    curriculumTitleHighlight: "Specialist Curriculum",
    curriculumSubtitle:
      "Engineered for speed, ROI, and commercial ad mastery. Move from basic ads to managing 6-figure budgets, conversion funnels, and data attribution modeling.",
    bannerImage: "/assets/courses/specialist_marketing.jpg",
    highlights: [
      "8 Focused Specialist Modules on Paid Ads & CRO",
      "Real Live Ad Spends on Meta & Google Ads Accounts",
      "Conversion Rate Optimization (CRO) & Heatmap Telemetry",
      "Direct Agency Placement Drives for Specialist Roles",
    ],
    targetAudience: [
      "Working professionals looking for fast-track upskilling in performance marketing",
      "Junior marketers wanting to become high-earning media buyers & PPC specialists",
      "Freelancers wanting to handle high-ticket client advertising budgets with confidence",
    ],
    modules: [
      {
        id: 1,
        title: "Module 01: Growth Economics, Funnel Architecture & CAC Modeling",
        tag: "UNIT ECONOMICS • FUNNELS • CAC & LTV",
        iconName: "TrendingUp",
        iconColor: "text-[#fe4759]",
        subtitle: "Understanding Unit Economics & Customer Lifetime Value",
        desc: "Master the financial core of performance marketing: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Payback Periods, and full-funnel retention architectures.",
        techStack: ["Growth Models", "Excel/Sheets", "Funnel Metrics", "CAC Calculators"],
      },
      {
        id: 2,
        title: "Module 02: High-Converting Landing Page Design & CRO Frameworks",
        tag: "CRO • HEATMAPS • A/B TESTING",
        iconName: "Globe",
        iconColor: "text-orange-500",
        subtitle: "Conversion Rate Optimization (CRO) & User Behavioral Insights",
        desc: "Design frictionless landing pages that convert cold ad traffic into paying customers. Implement A/B split testing, exit-intent triggers, and Hotjar session replay analysis.",
        techStack: ["WordPress", "Elementor Pro", "Hotjar", "VWO", "Google Optimize Alternative"],
      },
      {
        id: 3,
        title: "Module 03: Advanced Google Ads (Search, Display & Performance Max)",
        tag: "PPC • SEARCH INTENT • PMAX SCALING",
        iconName: "Target",
        iconColor: "text-amber-600",
        subtitle: "High-Intent Lead Gen & Target ROAS Scaling",
        desc: "Execute high-intent Google search campaigns. Master smart bidding algorithms (tCPA, tROAS), negative keyword matrices, Quality Score optimization, and cross-channel Performance Max campaigns.",
        techStack: ["Google Ads Manager", "Keyword Planner", "Google Tag Manager", "Merchant Center"],
      },
      {
        id: 4,
        title: "Module 04: Meta Ads Mastery (Facebook, Instagram & Advantage+)",
        tag: "PAID SOCIAL • CBO • ADVANTAGE+ CAMPAIGNS",
        iconName: "Zap",
        iconColor: "text-blue-600",
        subtitle: "Full-Funnel Social Ad Scaling & Audience Mining",
        desc: "Master Meta Ads Manager from prospecting to retargeting. Scale using Campaign Budget Optimization (CBO), Advantage+ shopping campaigns, custom engagement audiences, and lookalikes.",
        techStack: ["Meta Ads Manager", "Audience Insights", "Ad Creative Matrix", "Meta Business Suite"],
      },
      {
        id: 5,
        title: "Module 05: Creative Strategy, Hooks & High-CTR Ad Formats",
        tag: "CREATIVE TESTING • HOOKS • VIDEO ADS",
        iconName: "Palette",
        iconColor: "text-purple-600",
        subtitle: "Winning Ad Creatives & Iterative Creative Testing",
        desc: "In modern performance marketing, creative is your targeting. Learn how to write compelling ad scripts, produce 3-second hook UGC ads, and run systematic creative iteration matrices.",
        techStack: ["Canva Pro", "CapCut", "Midjourney AI", "Figma", "Ad Creative Frameworks"],
      },
      {
        id: 6,
        title: "Module 06: Data Tracking, Conversions API (CAPI) & GTM Telemetry",
        tag: "TRACKING • CONVERSIONS API • GTM",
        iconName: "Layers",
        iconColor: "text-emerald-600",
        subtitle: "First-Party Data, Server-Side Tracking & Event Setup",
        desc: "Overcome iOS privacy restrictions with robust tracking. Implement Google Tag Manager, Meta Conversions API (CAPI), custom data layer variables, and event deduplication.",
        techStack: ["Google Tag Manager", "Meta Pixel Helper", "Server-Side GTM", "Stape.io"],
      },
      {
        id: 7,
        title: "Module 07: Google Analytics 4 (GA4), Data Attribution & Looker Studio",
        tag: "GA4 • ATTRIBUTION • REPORTING",
        iconName: "BarChart3",
        iconColor: "text-violet-600",
        subtitle: "Attribution Modeling & Executive Client Dashboards",
        desc: "Configure GA4 custom events, conversion funnels, and exploratory reports. Build automated real-time performance dashboards in Looker Studio to demonstrate undeniable ROI to clients.",
        techStack: ["Google Analytics 4", "Looker Studio", "Data Studio", "Supermetrics"],
      },
      {
        id: 8,
        title: "Module 08: Live Client Media Audits & Specialist Placement Launch",
        tag: "PORTFOLIO • AUDITS • PLACEMENT",
        iconName: "Briefcase",
        iconColor: "text-[#fe4759]",
        subtitle: "Real Account Audits, Agency Pitching & Fast Placement",
        desc: "Audit real, live client ad accounts to identify wasted ad spend. Package your findings into a comprehensive performance case study, mock agency interviews, and fast-track placement referrals.",
        techStack: ["Agency Audit Playbooks", "Pitch Decks", "LinkedIn Sales Navigator", "Resume Grooming"],
      },
    ],
    seoTitle: "Digital Marketing Specialist Course (3 Months) - Performance Marketing",
    seoDescription:
      "Become a certified Performance Marketing Specialist in 3 months. Master Google Ads, Meta Ads, CRO, and analytics with real ad spend budgets at Institute of Digital Studies.",
    keywords: [
      "Digital Marketing Specialist Course",
      "Performance Marketing Course",
      "PPC Specialist Training",
      "Google Ads Certification",
      "Meta Ads Course",
      "Fast Track Digital Marketing",
    ],
  },

  // 3. DIGITAL MARKETING COURSE FOR BUSINESS OWNERS
  {
    id: "business-owners",
    slug: "digital-marketing-for-business-owners",
    aliases: [
      "business-owners",
      "for-business-owners",
      "digital-marketing-course-for-business-owners",
      "dm01b",
    ],
    courseCode: "DM01B",
    name: "Digital Marketing Course for Business Owners",
    pillTag: "EXECUTIVE PROGRAM • 1:1 FOUNDER MENTORSHIP & ROI SCALING",
    headlinePre: "Executive Mentorship",
    headlineHighlight: "Digital Marketing for Business Owners",
    headlinePost: "Program",
    subheadline:
      "Engineered specifically for business owners, startup founders, and entrepreneurs. Learn to generate predictable inbound customer leads, stop wasted agency ad spends, cut CAC, and scale revenues with 1:1 customized mentorship.",
    duration: "Custom Timeline",
    durationDetail: "Flexible 1:1 Executive Mentorship & Weekend Masterclasses",
    mode: "1:1 Executive Online & Campus Executive Boardroom",
    statRating: "5.0/5",
    statRatingLabel: "Rated by 650+ Founders & CEOs",
    statPartners: "Direct ROI",
    statPartnersLabel: "In-House Growth Scaling",
    curriculumCategory: "EXECUTIVE 6-MODULE REVENUE SCALING PLAYBOOK",
    curriculumTitlePre: "Executive Founder",
    curriculumTitleHighlight: "Scaling Curriculum",
    curriculumSubtitle:
      "Zero fluff, maximum business impact. Tailored around your specific industry, product, or service to generate inbound leads and scale commercial revenues immediately.",
    bannerImage: "/assets/courses/business_owners.jpg",
    highlights: [
      "1:1 Executive Guidance tailored specifically to your business model",
      "Immediate Audit of your existing ad spend to eliminate wasted money",
      "Build Automated Lead-Gen & WhatsApp Closing Engines",
      "Agency Management Blueprint: How to audit and evaluate external agencies",
    ],
    targetAudience: [
      "Business owners, MSME founders, and corporate directors wanting predictable sales",
      "Doctors, lawyers, consultants, and service professionals seeking high-ticket local clients",
      "D2C and e-commerce founders wanting to scale profitable orders with healthy ROAS",
    ],
    modules: [
      {
        id: 1,
        title: "Module 01: Business Growth Blueprint & Customer Acquisition Cost (CAC) Control",
        tag: "EXECUTIVE STRATEGY • UNIT ECONOMICS • LEAD FLOW",
        iconName: "TrendingUp",
        iconColor: "text-[#fe4759]",
        subtitle: "Auditing Your Digital Funnel & Market Positioning",
        desc: "Analyze your current customer acquisition channels. Calculate exact Customer Acquisition Cost (CAC) vs. Customer Lifetime Value (LTV) and uncover where leads are leaking from your pipeline.",
        techStack: ["Executive CAC Models", "Competitor Intelligence", "Market Positioning Blueprint"],
      },
      {
        id: 2,
        title: "Module 02: High-Converting Sales Funnels & Lead Generation Pages",
        tag: "SALES FUNNELS • LANDING PAGES • CONVERSION",
        iconName: "Globe",
        iconColor: "text-orange-500",
        subtitle: "Turning Web Visitors into Qualified Inquiries",
        desc: "Learn what makes high-ticket buyers take action. Review and optimize your company's landing pages for immediate conversion boost, trust signals, and direct mobile lead capture.",
        techStack: ["Conversion Architecture", "Trust Triggers", "WhatsApp Lead Capture", "CRO Checklists"],
      },
      {
        id: 3,
        title: "Module 03: Dominating Google Search & Google Business Profile (Local SEO)",
        tag: "GOOGLE SEARCH • LOCAL DOMINANCE • HIGH-INTENT BUYERS",
        iconName: "Search",
        iconColor: "text-emerald-600",
        subtitle: "Capturing Customers Actively Searching for Your Service",
        desc: "Dominate Google local search results in your city. Optimize your Google Business Profile, capture high-intent search queries, and rank above your primary competitors.",
        techStack: ["Google Business Profile", "Local SEO Maps", "Google Search Ads for High Intent"],
      },
      {
        id: 4,
        title: "Module 04: High-ROI Meta Ads for B2B & B2C Lead Generation",
        tag: "PAID ACQUISITION • META ADS • TARGETED REACH",
        iconName: "Target",
        iconColor: "text-blue-600",
        subtitle: "Reaching Your Exact Decision-Maker on Social Media",
        desc: "Create and supervise targeted Meta ad campaigns that deliver qualified inquiries, not fake clicks. Learn how to target verified business owners, high-net-worth individuals, and niche buyers.",
        techStack: ["Meta Ads Manager", "High-Converting Creative Hooks", "Lookalike Targeting"],
      },
      {
        id: 5,
        title: "Module 05: Automated WhatsApp & Email Lead Nurturing Engines",
        tag: "AUTOMATION • WHATSAPP CLOSING • CRM",
        iconName: "Mail",
        iconColor: "text-teal-600",
        subtitle: "Instant Lead Follow-Up & Zero-Drop Sales Pipelines",
        desc: "Build instant automated WhatsApp replies and email sequences that engage leads within 60 seconds of inquiry. Double your sales team's closing rates without hiring additional headcount.",
        techStack: ["WhatsApp Business API", "HubSpot CRM / Zoho", "Zapier", "Automated Drip Sequences"],
      },
      {
        id: 6,
        title: "Module 06: Agency Management Playbook & In-House Team Hiring",
        tag: "AGENCY AUDIT • TEAM BUILDING • EXECUTIVE KPIS",
        iconName: "Briefcase",
        iconColor: "text-[#fe4759]",
        subtitle: "How to Never Be Fooled by Agency Vanity Metrics Again",
        desc: "Learn how to read real agency reports, audit ad spend accounts, draft clear performance SLAs, and make confident hiring decisions for your in-house digital marketing department.",
        techStack: ["Agency Evaluation Scorecard", "Interview Questionnaires", "Executive KPI Dashboards"],
      },
    ],
    seoTitle: "Digital Marketing Course for Business Owners & Founders | 1:1 Coaching",
    seoDescription:
      "Exclusive executive digital marketing program for business owners and startup founders. Generate predictable leads, cut agency costs, and scale business revenue with 1:1 mentorship.",
    keywords: [
      "Digital Marketing for Business Owners",
      "Executive Digital Marketing Training",
      "Digital Marketing for Founders",
      "Business Lead Generation Course",
      "Agency Management Training",
      "Entrepreneur Marketing Program",
    ],
  },

  // 4. CUSTOMISED COURSE IN DIGITAL MARKETING
  {
    id: "customised",
    slug: "customised-course-in-digital-marketing",
    aliases: [
      "customised",
      "customised-course",
      "custom-digital-marketing-course",
      "custom",
      "dm01c",
    ],
    courseCode: "DM01C",
    name: "Customised Course in Digital Marketing",
    pillTag: "TAILORED MODULAR CURRICULUM • CUSTOM TIMELINE & MENTORSHIP",
    headlinePre: "Personalized",
    headlineHighlight: "Customised Course in Digital Marketing",
    headlinePost: "Program",
    subheadline:
      "Choose exactly what you want to learn. Pick individual skill tracks from SEO, Performance Marketing, AI Content, Social Media, or E-Commerce and learn at your own pace with a dedicated senior mentor.",
    duration: "Flexible Timeline",
    durationDetail: "Self-Paced / Custom Modular Batches with Dedicated Mentorship",
    mode: "Hybrid / 1:1 Mentorship / Custom Corporate Cohort",
    statRating: "4.9/5",
    statRatingLabel: "Rated by 1,100+ Tailored Learners",
    statPartners: "Custom Tracks",
    statPartnersLabel: "Tailored Career Pathways",
    curriculumCategory: "MODULAR TAILORED TRACK SELECTION",
    curriculumTitlePre: "Personalized Modular",
    curriculumTitleHighlight: "Skill Tracks",
    curriculumSubtitle:
      "No unnecessary fluff. Pick and bundle the exact skills required for your specific career milestone, freelance journey, or company's technological goals.",
    bannerImage: "/assets/courses/customised_marketing.jpg",
    highlights: [
      "100% Modular Freedom: Select only the modules you need",
      "Dedicated 1-on-1 Mentor assigned to your custom learning roadmap",
      "Hands-on Capstone Project tailored to your portfolio or business",
      "Domain-specific certifications for each mastered module",
    ],
    targetAudience: [
      "Freelancers wanting to master specific high-paying skills (like SEO or Paid Ads)",
      "Corporate teams requiring customized group upskilling on specific advertising tools",
      "Professionals with busy schedules who require flexible, modular weekend learning",
    ],
    modules: [
      {
        id: 1,
        title: "Track A: Advanced Organic SEO & Generative AI Search (GEO)",
        tag: "MODULAR TRACK • SEO • GEO • AI SEARCH",
        iconName: "Search",
        iconColor: "text-emerald-600",
        subtitle: "Rank on Page 1 of Google and in AI Engine Answers",
        desc: "Complete immersion in technical SEO, keyword architecture, entity SEO, schema markup, and optimization for conversational AI engines like Perplexity, ChatGPT, and Google AI Overviews.",
        techStack: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Perplexity AI"],
      },
      {
        id: 2,
        title: "Track B: Performance Marketing & Paid Advertising (Google & Meta)",
        tag: "MODULAR TRACK • GOOGLE ADS • META ADS • ROAS",
        iconName: "Target",
        iconColor: "text-blue-600",
        subtitle: "Paid Media Buying, Campaign Scaling & Data Attribution",
        desc: "Dedicated tactical training on Google Ads (Search, Display, Performance Max) and Meta Ads Manager (CBO, Advantage+, Lookalikes) with live ad budget executions.",
        techStack: ["Google Ads Manager", "Meta Ads Manager", "Google Tag Manager", "Attribution Models"],
      },
      {
        id: 3,
        title: "Track C: Social Media Branding, Short-Form Content & Influencer Growth",
        tag: "MODULAR TRACK • INSTAGRAM • LINKEDIN • VIRAL CONTENT",
        iconName: "Share2",
        iconColor: "text-pink-600",
        subtitle: "Organic Social Dominance, Video Hooks & Personal Branding",
        desc: "Learn algorithmic hooks for Instagram Reels, YouTube Shorts, and LinkedIn personal branding. Master content batching workflows, viral scripting, and creator monetization.",
        techStack: ["CapCut Pro", "Notion Content Calendar", "Canva Pro", "YouTube Studio", "Buffer"],
      },
      {
        id: 4,
        title: "Track D: E-Commerce Growth, Shopify & D2C Sales Scaling",
        tag: "MODULAR TRACK • SHOPIFY • D2C • CATALOG ADS",
        iconName: "Globe",
        iconColor: "text-orange-500",
        subtitle: "Scaling Online Store Orders & Minimizing Return-to-Origin (RTO)",
        desc: "Build high-converting Shopify storefronts. Set up Advantage+ catalog ads, abandoned cart SMS/WhatsApp recovery flows, and optimize product page CRO for maximum average order value (AOV).",
        techStack: ["Shopify", "Meta Catalog Manager", "Klaviyo", "WhatsApp Commerce", "Hotjar"],
      },
      {
        id: 5,
        title: "Track E: Generative AI Mastery for Marketers & Creative Automation",
        tag: "MODULAR TRACK • GEN-AI • CHATGPT • MIDJOURNEY",
        iconName: "Sparkles",
        iconColor: "text-purple-600",
        subtitle: "10x Productivity with AI Agents & Creative Generation",
        desc: "Master prompt engineering across ChatGPT, Claude, Midjourney, and ElevenLabs. Build automated research agents, bulk ad visual generators, and marketing copy workflows.",
        techStack: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney v6", "Make.com", "ElevenLabs"],
      },
      {
        id: 6,
        title: "Track F: Marketing Automation, CRM Architecture & Web Analytics",
        tag: "MODULAR TRACK • ZAPIER • CRM • GA4",
        iconName: "BarChart3",
        iconColor: "text-violet-600",
        subtitle: "Seamless Lead Pipelines, Automated Workflows & Analytics",
        desc: "Connect your ad sources directly to CRM systems using Zapier and Make. Set up multi-channel lead routing, automated notification alerts, and build executive reporting dashboards in Looker Studio.",
        techStack: ["Zapier", "Make.com", "HubSpot CRM", "Google Analytics 4", "Looker Studio"],
      },
    ],
    seoTitle: "Customised Digital Marketing Course | Tailored Modular Syllabus",
    seoDescription:
      "Design your own digital marketing syllabus with Institute of Digital Studies. Pick from SEO, Paid Ads, AI, Social Media, or E-Commerce tracks with flexible 1:1 mentorship.",
    keywords: [
      "Customised Course in Digital Marketing",
      "Custom Digital Marketing Course",
      "Modular Digital Marketing Training",
      "Personalized Marketing Mentorship",
      "Flexible Digital Marketing Batch",
      "Corporate Digital Marketing Training",
    ],
  },
];

export function getCourseBySlug(rawSlug?: string): CourseData {
  if (!rawSlug) return COURSES_DATA[0];

  const clean = rawSlug.trim().toLowerCase();

  // Match exact slug or alias
  const found = COURSES_DATA.find(
    (c) =>
      c.slug.toLowerCase() === clean ||
      c.aliases.some((alias) => alias.toLowerCase() === clean) ||
      clean.includes(c.id.toLowerCase())
  );

  return found || COURSES_DATA[0];
}

export function getAllCourseSlugs(): string[] {
  return COURSES_DATA.map((c) => c.slug);
}
