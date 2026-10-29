export interface CourseModule {
  id: number;
  title: string;
  tag: string;
  iconName: string;
  iconColor: string;
  subtitle: string;
  desc: string;
  techStack: string[];
  topics?: string[];
  keyMetrics?: string[];
  practicalAssignment?: string;
  expectedOutcome?: string;
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

  // Extended Comprehensive Content
  programOverview?: string[];
  learningObjectives?: string[];
  toolsCategories?: { category: string; tools: string[] }[];
  practicalProjects?: { title: string; desc: string }[];
  assessmentCriteria?: { component: string; weightage: string }[];
  capstoneProject?: {
    title: string;
    description: string;
    deliverables: string[];
  };
  careerOpportunities?: string[];
  programOutcomes?: string[];
}

export const COURSES_DATA: CourseData[] = [
  // 1. MASTER IN DIGITAL MARKETING WITH AI & AUTOMATION
  {
    id: "master",
    slug: "master-in-digital-marketing-with-ai-automation",
    aliases: [
      "master-in-digital-marketing",
      "master",
      "master-digital-marketing",
      "master-in-digital-marketing-course",
      "master-in-digital-marketing-with-ai-automation",
      "dm01m",
    ],
    courseCode: "DM01M",
    name: "Master in Digital Marketing with AI & Automation",
    pillTag: "GOVT. RECOGNIZED CERTIFICATION • NSDC & MSME ALIGNED",
    headlinePre: "AI-Infused Advanced",
    headlineHighlight: "Master in Digital Marketing",
    headlinePost: "with AI & Automation",
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
    seoTitle: "Master in Digital Marketing with AI & Automation (6 Months) | IDS",
    seoDescription:
      "Enroll in India's top-rated Master in Digital Marketing with AI & Automation program at IDS. 6-month hands-on training with AI tools, 10+ live client campaigns, NSDC certification, and 100% placement assistance.",
    keywords: [
      "Master in Digital Marketing with AI & Automation",
      "Advanced Digital Marketing Course",
      "Digital Marketing Course in Noida",
      "AI in Digital Marketing",
      "Digital Marketing Certification",
      "Performance Marketing Course",
    ],
  },

  // 2. PERFORMANCE MARKETING MASTERY PROGRAM
  {
    id: "specialist",
    slug: "performance-marketing-mastery-program",
    aliases: [
      "performance-marketing-mastery-program",
      "advance-performance-growth-marketing-program",
      "digital-marketing-specialist",
      "performance-growth-marketing",
      "performance-marketing-mastery",
      "specialist",
      "specialist-course",
      "digital-marketing-specialist-course",
      "dm01s",
    ],
    courseCode: "DM01S",
    name: "Performance Marketing Mastery Program",
    pillTag: "META ADS • GOOGLE ADS • LINKEDIN ADS • AI MARKETING • AUTOMATION & ANALYTICS",
    headlinePre: "Industry-Oriented",
    headlineHighlight: "Performance Marketing Mastery",
    headlinePost: "Program",
    subheadline:
      "A 12-week comprehensive hands-on program designed to develop practical mastery in paid advertising, lead generation funnels, conversion rate optimization (CRO), marketing analytics telemetry, and AI-powered marketing automation.",
    duration: "12 Weeks",
    durationDetail: "Live Interactive Classes + Practical Assignments + Live Projects (6–8 hrs/week)",
    mode: "Online Live & Offline Campus (Beginner to Advanced)",
    statRating: "4.9/5",
    statRatingLabel: "Rated by 1,850+ Performance Marketers",
    statPartners: "100+",
    statPartnersLabel: "Specialist Agency Recruiters",
    curriculumCategory: "COMPREHENSIVE 10-MODULE PERFORMANCE SPRINT",
    curriculumTitlePre: "12-Week Applied",
    curriculumTitleHighlight: "Performance Marketing Curriculum",
    curriculumSubtitle:
      "From advertising economics and audience architecture to multi-crore campaign scaling, conversion tracking, AI workflows, and CRM automation.",
    bannerImage: "/assets/courses/specialist_marketing.jpg",
    highlights: [
      "10 Deep-Dive Modules Across Meta, Google, LinkedIn & AI Marketing",
      "7 Practical Industry Projects with Live Ad Accounts & Budgets",
      "Server-Side Tracking, GA4, GTM & Conversions API (CAPI)",
      "AI-Driven Creative Production, Copywriting & Campaign Analysis",
      "Full-Funnel CRM & WhatsApp/Email Lead Nurturing Workflows",
      "100% Placement Support with 100+ Hiring Partners",
    ],
    targetAudience: [
      "Aspiring performance marketers wanting to master paid ads, analytics & automation",
      "Junior marketers & media buyers looking to manage 6-figure budgets and boost ROAS",
      "Working professionals & career switchers transitioning into high-growth digital marketing roles",
      "Entrepreneurs & freelancers wanting to generate predictable, high-converting client leads",
    ],
    programOverview: [
      "The Performance Marketing Mastery Program is designed to develop practical skills in paid advertising, lead generation, customer acquisition, conversion optimization, marketing analytics, and AI-powered marketing automation.",
      "Students learn how to plan, launch, manage, and optimize advertising campaigns across major digital advertising platforms. They also learn to use AI tools, automation workflows, analytics platforms, and CRM systems to improve campaign efficiency and marketing performance.",
      "The program combines advertising strategy with practical execution, helping students understand how businesses acquire customers, generate qualified leads, control acquisition costs, and measure marketing ROI.",
    ],
    learningObjectives: [
      "Develop performance marketing strategies based on business goals",
      "Create and manage campaigns on Meta Ads, Google Ads, and LinkedIn Ads",
      "Conduct audience research, keyword research, and competitor analysis",
      "Build lead generation and customer acquisition funnels",
      "Create effective ad copy, creative briefs, and landing page strategies",
      "Implement conversion tracking and campaign measurement",
      "Analyze CPC, CPM, CTR, CPL, CPA, ROAS, and conversion rates",
      "Optimize advertising campaigns based on performance data",
      "Use AI tools for research, content creation, campaign planning, and analysis",
      "Automate lead capture, follow-ups, reporting, and CRM workflows",
      "Develop campaign reports and present data-driven recommendations",
      "Build a professional performance marketing portfolio",
    ],
    modules: [
      {
        id: 1,
        title: "Module 1: Performance Marketing Fundamentals",
        tag: "UNIT ECONOMICS • FUNNELS • CAC & ROAS • WEEK 1",
        iconName: "TrendingUp",
        iconColor: "text-[#fe4759]",
        subtitle: "Foundations of Data-Driven Paid Growth & Marketing Economics",
        desc: "Understand digital advertising business models, customer journey stages (Awareness, Consideration, Conversion, Retention), B2B vs. B2C performance marketing, lead generation vs. e-commerce, and attribution modeling.",
        techStack: ["CAC/LTV Models", "Funnel Architecture", "KPI Frameworks", "Marketing Math"],
        topics: [
          "Introduction to performance marketing vs. brand marketing",
          "Digital advertising business models & customer journey funnels",
          "Awareness, consideration, conversion, and retention stages",
          "B2B vs. B2C performance marketing & Lead gen vs. e-commerce",
          "Campaign objectives, business KPIs & marketing budget planning",
          "Introduction to attribution and ROI measurement",
        ],
        keyMetrics: ["CPM", "CPC", "CTR", "CPL", "CPA", "CAC", "ROAS", "Conversion Rate", "LTV"],
        practicalAssignment: "Develop a performance marketing strategy for a digital marketing training institute or selected business.",
        expectedOutcome: "Master growth economics and construct complete full-funnel marketing strategies aligned with business goals.",
      },
      {
        id: 2,
        title: "Module 2: Meta Ads Mastery (Facebook & Instagram)",
        tag: "META ADS MANAGER • AUDIENCES • CBO • WEEKS 2–3",
        iconName: "Share2",
        iconColor: "text-blue-600",
        subtitle: "Full-Funnel Social Ad Scaling, Audience Mining & Creative Testing",
        desc: "Set up Meta Business Portfolio, navigate ad account structures, permissions, and billing. Master Custom Audiences, Lookalikes, Retargeting, Instant Forms, Click-to-Message, Advantage+ campaigns, and budget optimization.",
        techStack: ["Meta Ads Manager", "Meta Business Suite", "Custom Audiences", "Instant Forms", "Advantage+"],
        topics: [
          "Meta Advertising Fundamentals: Business Portfolio, account structure, billing & policies",
          "Audience Targeting: Demographics, Custom Audiences, Website Visitors, Customer Lists & Lookalikes",
          "Retargeting strategies, audience overlap & exclusion architectures",
          "Campaign Creation: Lead gen, website conversions, Instant Forms, click-to-message & e-commerce sales",
          "Creative & Optimization: Static, carousels, Reels, video ads, copy frameworks & hook testing",
          "Frequency, CPM, CPC, CPL, lead quality evaluation & budget scaling",
        ],
        practicalAssignment: "Build a complete Meta campaign structure, 5 ad copy variations, 3 creative concepts, a lead generation campaign, and an actionable retargeting plan.",
        expectedOutcome: "Plan, launch, monitor, and optimize scalable Meta advertising campaigns with controlled acquisition costs.",
      },
      {
        id: 3,
        title: "Module 3: Google Ads Mastery (Search, Display & Video)",
        tag: "GOOGLE ADS • SEARCH INTENT • PMAX • WEEKS 4–5",
        iconName: "Search",
        iconColor: "text-amber-600",
        subtitle: "High-Intent Keyword Research, Search Campaigns & Multi-Channel Scaling",
        desc: "Master search intent, keyword match types (broad, phrase, exact), negative keyword matrices, Responsive Search Ads (RSAs), smart bidding strategies (tCPA, tROAS), Display, YouTube ads, and Performance Max.",
        techStack: ["Google Ads Manager", "Keyword Planner", "Responsive Search Ads", "Performance Max", "YouTube Ads"],
        topics: [
          "Google Ads Fundamentals: Account structure, search intent, campaign objectives & bidding strategies",
          "Keyword Research: Commercial vs. informational intent, Keyword Planner, match types & negative keywords",
          "Google Search Ads: Responsive Search Ads (RSAs), headlines, descriptions, assets & Quality Score",
          "Additional Campaign Types: Display network, YouTube video advertising, remarketing & Performance Max (PMax)",
          "Optimization & Diagnostics: Quality Score improvement, search term cleanup, CPC/CPA control & policy troubleshooting",
        ],
        practicalAssignment: "Build a keyword research spreadsheet, campaign structure, 10 RSA headlines + 4 descriptions, a negative keyword list, and an audit of a sample campaign.",
        expectedOutcome: "Structure high-ROI Google Ads campaigns, capture commercial search intent, and optimize using performance data.",
      },
      {
        id: 4,
        title: "Module 4: LinkedIn Ads for B2B Marketing",
        tag: "B2B MARKETING • ACCOUNT-BASED MARKETING • WEEK 6",
        iconName: "Briefcase",
        iconColor: "text-sky-700",
        subtitle: "High-Ticket B2B Lead Generation & Account-Based Marketing (ABM)",
        desc: "Harness LinkedIn Campaign Manager to reach enterprise decision-makers. Master firmographic targeting (job title, seniority, company size), Document Ads, Sponsored Content, Lead Gen Forms, and Matched Audiences.",
        techStack: ["LinkedIn Campaign Manager", "LinkedIn Insight Tag", "Lead Gen Forms", "Matched Audiences", "B2B ABM"],
        topics: [
          "B2B performance marketing fundamentals & Ideal Customer Profile (ICP) definition",
          "Account-based marketing (ABM) & firmographic targeting (job titles, seniority, company size, industries)",
          "Ad Formats: Sponsored Content, Single Image, Video Ads, Document Ads, and Message/Conversation Ads",
          "Lead Gen Forms, website conversions, matched audiences & LinkedIn Insight Tag implementation",
          "B2B sales pipeline measurement, lead quality evaluation & cost per qualified lead",
        ],
        practicalAssignment: "Define an enterprise ICP, write 3 B2B ad copies, design a LinkedIn Lead Gen Form, and compare B2B CPL with Meta Ads.",
        expectedOutcome: "Target C-suite and high-level decision-makers, generating high-ticket, qualified B2B sales pipeline leads.",
      },
      {
        id: 5,
        title: "Module 5: Other Performance Marketing Channels",
        tag: "YOUTUBE • DISPLAY • PROGRAMMATIC • E-COMMERCE • WEEK 7",
        iconName: "Globe",
        iconColor: "text-purple-600",
        subtitle: "Multi-Channel Expansion: YouTube, GDN, E-Commerce & Emerging Networks",
        desc: "Expand beyond Meta & Google Search. Execute YouTube video campaigns, Google Display Network (GDN), programmatic remarketing, Google Merchant Center product feeds, Shopping ads, and alternative ad platforms.",
        techStack: ["YouTube Ads", "Google Merchant Center", "Google Display Network", "Microsoft Ads", "Shopping Ads"],
        topics: [
          "YouTube Advertising: Video ad formats, creative planning, audience targeting & view-to-conversion tracking",
          "Programmatic & Display: Google Display Network, placement exclusions & brand safety",
          "E-commerce Advertising: Product feeds, Google Merchant Center, Shopping campaigns & ROAS modeling",
          "Additional Platforms: Microsoft Advertising, Pinterest Ads, Snapchat Ads & TikTok advertising overview",
        ],
        practicalAssignment: "Develop a multi-channel media plan for a business with a defined budget, target audience, campaign objectives, and expected KPIs.",
        expectedOutcome: "Select and allocate budgets across secondary performance channels tailored to specific business models.",
      },
      {
        id: 6,
        title: "Module 6: Landing Pages & Conversion Rate Optimization (CRO)",
        tag: "CRO • A/B TESTING • HEATMAPS • UX • WEEK 8",
        iconName: "Layers",
        iconColor: "text-orange-500",
        subtitle: "Designing High-Converting Landing Pages & Eliminating Funnel Friction",
        desc: "Build frictionless mobile-first landing pages that convert ad traffic into customers. Master value proposition crafting, form optimization, social proof engineering, A/B split testing, heatmaps, and session replays.",
        techStack: ["WordPress", "Elementor", "Unbounce", "Microsoft Clarity", "Hotjar"],
        topics: [
          "Landing page anatomy: Above-the-fold design, sticky CTAs, message matching & mobile-first UI",
          "Headlines, benefits, compelling offers, lead capture forms & form optimization",
          "Trust signals, testimonials, certifications & social proof placement",
          "Conversion Rate Optimization (CRO) frameworks & A/B split testing fundamentals",
          "User behavior telemetry: Heatmaps, click maps, scroll depth, session recordings & form abandonment analysis",
        ],
        practicalAssignment: "Create a landing page wireframe for a course, SaaS product, or lead generation service with an end-to-end conversion optimization plan.",
        expectedOutcome: "Build landing pages with high conversion rates and diagnose behavioral friction using heatmap telemetry.",
      },
      {
        id: 7,
        title: "Module 7: Tracking, Analytics & Attribution",
        tag: "GA4 • GTM • PIXEL & CAPI • ATTRIBUTION • WEEK 9",
        iconName: "BarChart3",
        iconColor: "text-emerald-600",
        subtitle: "Server-Side Event Tracking, GA4 Telemetry & Attribution Modeling",
        desc: "Implement flawless conversion tracking across advertising channels. Configure Google Tag Manager (GTM), custom events, Meta Conversions API (CAPI), Google Analytics 4 (GA4) reports, UTM parameters, and attribution models.",
        techStack: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "Conversions API (CAPI)", "Looker Studio"],
        topics: [
          "Google Analytics 4: Account/property setup, events, key events, traffic acquisition & conversion paths",
          "Google Tag Manager: Container setup, tags, triggers, variables, form submissions & button click tracking",
          "Ad Conversion Tracking: Meta Pixel, Meta Conversions API (CAPI), Google Ads Enhanced Conversions & Insight Tag",
          "Offline conversion imports, lead-to-sale tracking & data deduplication",
          "Attribution Models: First-click, last-click, data-driven attribution & cross-channel CRM revenue attribution",
        ],
        practicalAssignment: "Create a standardized UTM naming convention, GTM container setup, GA4 conversion tracking plan, and attribution audit.",
        expectedOutcome: "Implement end-to-end tracking infrastructure and troubleshoot conversion discrepancies between ad platforms and CRM.",
      },
      {
        id: 8,
        title: "Module 8: AI-Powered Performance Marketing",
        tag: "GENERATIVE AI • PROMPT ENGINEERING • AD CREATIVE • WEEK 10",
        iconName: "Sparkles",
        iconColor: "text-rose-500",
        subtitle: "Supercharging Ad Copy, Creative Iterations & Campaign Data Analysis with AI",
        desc: "Use AI tools to accelerate marketing workflows 10x. Generate customer personas, high-CTR ad hooks, video scripts, Midjourney/Firefly creative concepts, and automated data analysis for client reporting.",
        techStack: ["ChatGPT Plus", "Google Gemini", "Claude 3.5 Sonnet", "Canva Magic Studio", "Adobe Firefly", "CapCut AI"],
        topics: [
          "AI for Market Research: Customer persona development, competitor ad auditing & pain point discovery",
          "AI for Ad Copywriting: High-CTR hooks, angles, headlines, CTAs, video scripts & creative briefs",
          "AI for Creative Production: Image concepts, storyboarding, voiceovers, subtitles & creative resizing",
          "AI for Campaign Analysis: Report interpretation, diagnosing CPL increases, creative fatigue detection & client summaries",
          "Tool Stack Mastery: ChatGPT, Gemini, Claude, Canva Magic Studio, Adobe Firefly, and CapCut AI",
        ],
        practicalAssignment: "Generate 20 ad copy variations, 5 creative concepts for customer segments, an AI video ad script/storyboard, and an AI-assisted optimization report.",
        expectedOutcome: "Leverage AI as a daily co-pilot to research, write, generate ad creatives, and analyze complex campaign datasets.",
      },
      {
        id: 9,
        title: "Module 9: Marketing Automation & CRM Integration",
        tag: "ZAPIER • MAKE • CRM • WHATSAPP AUTOMATION • WEEK 11",
        iconName: "Zap",
        iconColor: "text-yellow-500",
        subtitle: "Instant Lead Routing, Nurturing Sequences & Speed-to-Lead Workflows",
        desc: "Connect advertising channels directly to CRMs. Automate instant lead capture from Meta/Google into HubSpot or Zoho, trigger automated WhatsApp and email follow-ups, lead scoring, and appointment scheduling.",
        techStack: ["Zapier", "Make.com", "n8n", "HubSpot CRM", "Zoho CRM", "WhatsApp Business API", "Google Sheets"],
        topics: [
          "Lead Management: Lead capture, routing, qualification, lead scoring & lifecycle management",
          "Marketing Automation: Email follow-ups, WhatsApp automation, lead assignment & appointment reminders",
          "Automation Tools: Zapier, Make.com, n8n, GoHighLevel, HubSpot CRM, Zoho CRM, Bigin & Google Sheets",
          "Practical Workflows: Meta/Google/LinkedIn leads to CRM, automatic salesperson alerts & speed-to-lead tracking",
          "AI-Powered Automation: AI lead classification, automated summaries, chatbot integration & voice agent use cases",
        ],
        practicalAssignment: "Build an automated workflow that captures a lead, stores it in a CRM or Google Sheets, notifies sales via WhatsApp/Email, and schedules a follow-up reminder.",
        expectedOutcome: "Eliminate lead leakage, reduce speed-to-lead to seconds, and build automated lead nurturing pipelines.",
      },
      {
        id: 10,
        title: "Module 10: Campaign Strategy, Budgeting & Optimization",
        tag: "BUDGET SCALING • MEDIA AUDITS • CLIENT DECKS • WEEK 12",
        iconName: "Target",
        iconColor: "text-red-600",
        subtitle: "Media Planning, 6-Figure Budget Allocation, ROAS Scaling & Client Pitching",
        desc: "Synthesize your complete performance marketing arsenal. Build multi-channel media plans, forecast CAC and ROAS, combat creative fatigue, reallocate budgets across winning ad sets, and pitch executive client audit decks.",
        techStack: ["Media Planning Models", "Budget Allocators", "Looker Studio Dashboards", "Agency Pitch Decks"],
        topics: [
          "Building a complete performance marketing strategy & defining business KPIs",
          "Media planning & budget allocation: Forecasting clicks, leads, CPL, CPA, CAC & ROAS",
          "Campaign testing frameworks, creative fatigue mitigation & audience saturation",
          "Scaling successful campaigns & cross-channel budget reallocation",
          "Marketing profitability, contribution margins, client presentations & campaign audits",
        ],
        practicalAssignment: "Prepare a complete performance marketing plan covering campaign objectives, channel selection, budget, targeting, tracking, expected KPIs, and optimization strategy.",
        expectedOutcome: "Formulate, execute, scale, and present enterprise-grade performance marketing campaigns with predictable ROI.",
      },
    ],
    toolsCategories: [
      {
        category: "Meta Advertising",
        tools: ["Meta Ads Manager", "Meta Business Suite", "Audience Insights", "Ad Creative Matrix"],
      },
      {
        category: "Search Advertising",
        tools: ["Google Ads", "Google Keyword Planner", "Search Console", "Google Merchant Center"],
      },
      {
        category: "B2B Advertising",
        tools: ["LinkedIn Campaign Manager", "Matched Audiences", "Lead Gen Forms"],
      },
      {
        category: "Video & Display",
        tools: ["YouTube Ads", "Google Display Network (GDN)", "Programmatic Ad Buying"],
      },
      {
        category: "Analytics & Telemetry",
        tools: ["Google Analytics 4 (GA4)", "Looker Studio", "Supermetrics"],
      },
      {
        category: "Tracking & Infrastructure",
        tools: ["Google Tag Manager (GTM)", "Meta Pixel", "Conversions API (CAPI)", "LinkedIn Insight Tag"],
      },
      {
        category: "Keyword Research & SEO",
        tools: ["Google Keyword Planner", "Semrush", "Ahrefs", "SpyFu"],
      },
      {
        category: "Landing Page Builders",
        tools: ["WordPress", "Elementor Pro", "Unbounce"],
      },
      {
        category: "CRO & User Behavior",
        tools: ["Microsoft Clarity", "Hotjar", "VWO"],
      },
      {
        category: "AI Research & Copywriting",
        tools: ["ChatGPT Plus", "Google Gemini", "Claude 3.5 Sonnet"],
      },
      {
        category: "AI Creative Production",
        tools: ["Canva Magic Studio", "Adobe Firefly", "CapCut AI", "Midjourney"],
      },
      {
        category: "CRM & Lead Management",
        tools: ["HubSpot CRM", "Zoho CRM", "Bigin by Zoho", "GoHighLevel"],
      },
      {
        category: "Marketing Automation",
        tools: ["Zapier", "Make.com", "n8n", "WhatsApp Business Platform"],
      },
      {
        category: "Reporting & Dashboards",
        tools: ["Google Sheets", "Looker Studio Dashboards", "Data Studio"],
      },
      {
        category: "Project & Campaign Management",
        tools: ["Trello", "Asana", "Notion"],
      },
    ],
    practicalProjects: [
      {
        title: "Project 1: Meta Ads Lead Generation System",
        desc: "Develop a full campaign strategy, audience plan, creative concepts, and lead generation campaign structure with instant form optimization for a selected business.",
      },
      {
        title: "Project 2: High-Intent Google Search Ads Campaign",
        desc: "Conduct commercial keyword research, group keywords into ad groups, write 10 Responsive Search Ad variations, and build negative keyword exclusion matrices.",
      },
      {
        title: "Project 3: LinkedIn B2B Decision-Maker Campaign",
        desc: "Define an Ideal Customer Profile (ICP), configure firmographic targeting (job roles, company size), develop B2B ad creatives, and build a native Lead Gen Form.",
      },
      {
        title: "Project 4: High-Converting Landing Page & Tracking Setup",
        desc: "Design a conversion-focused landing page wireframe with GA4 custom event tracking and Google Tag Manager (GTM) tag-trigger container setup.",
      },
      {
        title: "Project 5: AI-Powered Multi-Angle Marketing Campaign",
        desc: "Use Generative AI tools to generate 20 segmented ad copy variations, 5 creative concepts, video scripts, storyboards, and an AI-assisted campaign analysis audit.",
      },
      {
        title: "Project 6: Automated Lead Capture & CRM Pipeline",
        desc: "Build a live workflow connecting Meta & Google Lead Ads to CRM, automating lead assignment, WhatsApp/Email confirmation sequences, and sales rep notifications.",
      },
      {
        title: "Project 7: Integrated Multi-Channel Growth Campaign",
        desc: "Prepare a complete campaign plan combining Meta Ads, Google Ads, landing pages, server-side conversion tracking, Looker Studio reporting, and lead nurturing.",
      },
    ],
    capstoneProject: {
      title: "Build a Complete Performance Marketing System",
      description:
        "Students develop an end-to-end commercial growth marketing system for a selected business (Educational Institute, SaaS company, E-commerce store, or B2B Service Provider).",
      deliverables: [
        "Business and competitor market analysis",
        "Target audience segmentation and customer personas",
        "Campaign objectives and measurable KPI framework",
        "Full-funnel advertising strategy for Meta Ads",
        "Google Ads search and Performance Max campaign structure",
        "LinkedIn Ads strategy for B2B lead generation",
        "Advertising creatives, hooks, and ad copy variations",
        "Conversion-optimized landing page wireframe",
        "Conversion tracking implementation plan (GA4, GTM, CAPI)",
        "CRM integration and marketing automation workflow",
        "Real-time Looker Studio campaign performance dashboard",
        "Budget allocation, scaling, and ad fatigue mitigation roadmap",
        "Final executive presentation of the campaign strategy",
      ],
    },
    assessmentCriteria: [
      { component: "Advertising Fundamentals & Strategy", weightage: "10%" },
      { component: "Meta Ads Practical Assignment", weightage: "15%" },
      { component: "Google Ads Practical Assignment", weightage: "15%" },
      { component: "LinkedIn Ads Campaign Plan", weightage: "10%" },
      { component: "Analytics & Conversion Tracking", weightage: "15%" },
      { component: "AI & Automation Project", weightage: "15%" },
      { component: "Final Integrated Capstone Project", weightage: "20%" },
    ],
    careerOpportunities: [
      "Performance Marketing Executive",
      "Digital Advertising Specialist",
      "Meta Ads Specialist",
      "Google Ads Specialist",
      "LinkedIn Ads Specialist",
      "Paid Media Executive",
      "Lead Generation Specialist",
      "Performance Marketing Analyst",
      "Marketing Automation Executive",
      "Growth Marketing Associate",
      "Digital Marketing Consultant",
      "Freelance Performance Marketer",
    ],
    programOutcomes: [
      "Develop structured, data-backed multi-channel advertising campaigns",
      "Select and allocate budgets across the most profitable advertising channels",
      "Launch, monitor, and optimize paid campaigns on live advertising accounts",
      "Measure campaign performance, CAC, ROAS, and attribution telemetry",
      "Identify and eliminate funnel friction to increase conversion rates (CRO)",
      "Use AI tools to accelerate research, creative production, and data analysis 10x",
      "Build automated CRM lead capture, routing, and follow-up workflows",
      "Present professional campaign reports and actionable recommendations",
      "Graduate with an impressive portfolio demonstrating verified marketing results",
    ],
    seoTitle: "Performance Marketing Mastery Program (12 Weeks) | IDS",
    seoDescription:
      "Master Meta Ads, Google Ads, LinkedIn Ads, AI Marketing, and Automation in India's top 12-week Performance Marketing Mastery Program at Institute of Digital Studies (IDS). 100% practical training on live ad budgets.",
    keywords: [
      "Performance Marketing Mastery Program",
      "Performance Marketing Course",
      "Meta Ads Course",
      "Google Ads Certification",
      "LinkedIn Ads Course",
      "Growth Marketing Course",
      "PPC Specialist Training",
      "Marketing Automation Course",
      "AI in Digital Marketing",
      "IDS Performance Marketing",
    ],
  },

  // 3. DIGITAL MARKETING PROGRAM FOR BUSINESS OWNERS
  {
    id: "business-owners",
    slug: "digital-marketing-program-for-business-owners",
    aliases: [
      "digital-marketing-for-business-owners",
      "digital-marketing-program-for-business-owners",
      "business-owners",
      "for-business-owners",
      "digital-marketing-course-for-business-owners",
      "dm01b",
    ],
    courseCode: "DM01B",
    name: "Digital Marketing Program for Business Owners",
    pillTag: "EXECUTIVE PROGRAM • 1:1 FOUNDER MENTORSHIP & ROI SCALING",
    headlinePre: "Executive Mentorship",
    headlineHighlight: "Digital Marketing Program for Business Owners",
    headlinePost: "",
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
    seoTitle: "Digital Marketing Program for Business Owners & Founders | IDS",
    seoDescription:
      "Exclusive executive digital marketing program for business owners and startup founders. Generate predictable leads, cut agency costs, and scale business revenue with 1:1 mentorship.",
    keywords: [
      "Digital Marketing Program for Business Owners",
      "Executive Digital Marketing Training",
      "Digital Marketing for Founders",
      "Business Lead Generation Course",
      "Agency Management Training",
      "Entrepreneur Marketing Program",
    ],
  },

  // 4. CUSTOMISED PROGRAM IN DIGITAL MARKETING
  {
    id: "customised",
    slug: "customised-program-in-digital-marketing",
    aliases: [
      "customised-course-in-digital-marketing",
      "customised-program-in-digital-marketing",
      "customised",
      "customised-course",
      "custom-digital-marketing-course",
      "custom",
      "dm01c",
    ],
    courseCode: "DM01C",
    name: "Customised Program in Digital Marketing",
    pillTag: "TAILORED MODULAR CURRICULUM • CUSTOM TIMELINE & MENTORSHIP",
    headlinePre: "Personalized",
    headlineHighlight: "Customised Program in Digital Marketing",
    headlinePost: "",
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
    seoTitle: "Customised Program in Digital Marketing | Tailored Modular Syllabus",
    seoDescription:
      "Design your own digital marketing syllabus with Institute of Digital Studies. Pick from SEO, Paid Ads, AI, Social Media, or E-Commerce tracks with flexible 1:1 mentorship.",
    keywords: [
      "Customised Program in Digital Marketing",
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

  // 1. Exact slug match
  const exactSlug = COURSES_DATA.find((c) => c.slug.toLowerCase() === clean);
  if (exactSlug) return exactSlug;

  // 2. Exact alias match
  const aliasMatch = COURSES_DATA.find((c) =>
    c.aliases.some((alias) => alias.toLowerCase() === clean)
  );
  if (aliasMatch) return aliasMatch;

  // 3. Exact ID match (e.g. "master", "specialist", "business-owners", "customised")
  const idMatch = COURSES_DATA.find((c) => c.id.toLowerCase() === clean);
  if (idMatch) return idMatch;

  return COURSES_DATA[0];
}

export function getAllCourseSlugs(): string[] {
  return COURSES_DATA.map((c) => c.slug);
}
