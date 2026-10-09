export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  published: string;
  excerpt: string;
  link: string;
  readTime: string;
  image: string;
  content: string;
  tags?: string[];
}

export const blogCategories: string[] = [
  "Digital Marketing",
  "Data Analytics",
  "Data Science",
  "Financial Modeling",
  "Investment Banking",
  "ACCA",
  "Content Writing",
  "Medical Coding",
  "Technical Writing",
  "UI/UX Design",
  "Product Design",
  "Business Analytics",
];

export const allBlogs: BlogPost[] = [
  // 1. Local SEO Checklist (Requested by user)
  {
    id: "1",
    slug: "local-seo-checklist-how-to-get-your-business-on-google-maps-for-free",
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 18, 2026",
    excerpt:
      "For any local business, showing up on Google Maps is one of the most powerful ways to attract nearby customers and drive walk-in foot traffic....",
    link: "https://idigitalstudies.com/blog/local-seo-checklist-how-to-get-your-business-on-google-maps-for-free",
    readTime: "5 min read",
    image: "/assets/Blog1.png",
    tags: ["Local SEO", "Google Maps", "Google Business Profile", "SEO"],
    content: `
<p>
For any local business, showing up on Google Maps is one of the most powerful ways to attract nearby customers. When people search for “restaurants near me” or “digital marketing agency in Noida,” they overwhelmingly choose businesses appearing in the top 3-pack of local map results.
</p>
<p>
The best part? Getting listed on Google Maps is completely free with the right Local SEO strategy. Here is your actionable checklist to rank your business on Google Maps for free.
</p>

<h2>Step 1: Create or Claim Your Google Business Profile</h2>
<p>Your Google Business Profile (formerly Google My Business) is the foundation of local rankings:</p>
<ul>
  <li>Go to Google Business Profile and sign in with your corporate Google Account.</li>
  <li>Enter your exact legal business name and select your primary industry category.</li>
  <li>Add your verified physical address to appear accurately on Google Maps.</li>
  <li>Verify your business through instant SMS, video verification, or postcard.</li>
</ul>
<p>Note: Unverified profiles will never appear on Google Maps, so complete verification immediately.</p>

<h2>Step 2: Optimize Your Profile Information (NAP Consistency)</h2>
<p>Consistency across your Name, Address, and Phone Number (NAP) is Google's top trust factor:</p>
<ul>
  <li><strong>Business Name:</strong> Use your real-world brand name without keyword stuffing.</li>
  <li><strong>Operating Hours:</strong> Keep regular and holiday hours 100% accurate.</li>
  <li><strong>Categories:</strong> Select one precise Primary Category, plus up to 9 secondary categories.</li>
  <li><strong>Website & Appointment Links:</strong> Link directly to your localized landing page.</li>
</ul>

<h2>Step 3: Upload High-Resolution Photos & Geotagged Media</h2>
<p>Google’s internal research reveals profiles with recent photos receive 42% more requests for driving directions and 35% more website clicks. Upload photos of:</p>
<ul>
  <li>Office exterior, reception, signage, and landmark views.</li>
  <li>Workspaces, classroom sessions, and active team members.</li>
  <li>Certifications, awards, and happy client interactions.</li>
</ul>

<h2>Step 4: Collect Genuine Reviews & Respond to Everyone</h2>
<p>Review volume, velocity, and keyword sentiment directly affect map rankings. Set up a regular post-service WhatsApp or email automation asking satisfied clients to leave their feedback on Google Maps.</p>

<h2>Step 5: Build Local Citations in Trusted Directories</h2>
<p>Submit your verified business information to major Indian directories including Justdial, Sulekha, IndiaMart, and LinkedIn company pages to strengthen backlink signals.</p>
    `,
  },

  // 2. What is Quality Score (Requested by user)
  {
    id: "2",
    slug: "what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads",
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 12, 2026",
    excerpt:
      "If you’ve spent any time poking around in Google Ads, you’ve probably seen Quality Score. Learn how this crucial metric cuts ad costs and boosts ad rank....",
    link: "https://idigitalstudies.com/blog/what-is-quality-score-5-simple-ways-to-improve-it-in-google-ads",
    readTime: "6 min read",
    image: "/assets/Blog2.png",
    tags: ["Google Ads", "Quality Score", "PPC", "Cost Per Click"],
    content: `
<p>
If you’ve spent any time poking around in Google Ads, you’ve probably noticed the 1–10 rating known as <strong>Quality Score</strong>. Most advertisers glance at it once and ignore it. Big mistake.
</p>
<p>
Quality Score determines both how much you pay per click (CPC) and where your ad is positioned on the search results page. A score of 8–10 can earn you a 50% discount on cost per click, while a score below 5 causes your ad budget to drain with negligible returns.
</p>

<h2>The 3 Pillars of Google Ads Quality Score</h2>
<ul>
  <li><strong>Expected Click-Through Rate (CTR):</strong> The likelihood that searchers will click your ad when shown.</li>
  <li><strong>Ad Relevance:</strong> How closely your ad copy matches the user's explicit search query intent.</li>
  <li><strong>Landing Page Experience:</strong> How relevant, transparent, fast, and easy to navigate your destination page is.</li>
</ul>

<h2>5 Simple Ways to Boost Your Quality Score</h2>
<ol>
  <li><strong>Match Keywords Tight to Ad Headlines:</strong> Structure campaigns into Single Theme Ad Groups (STAGs) so headlines naturally echo search intent.</li>
  <li><strong>Refine Ad Copy with Clear Value Props:</strong> Incorporate dynamic keyword insertion, social proof, and explicit calls to action.</li>
  <li><strong>Accelerate Landing Page Load Times:</strong> Ensure mobile load time is under 2.5 seconds using optimized assets and responsive layouts.</li>
  <li><strong>Add Aggressive Negative Keywords:</strong> Filter out junk impressions that dilute click-through rates.</li>
  <li><strong>Leverage Every Relevant Ad Asset:</strong> Enable sitelinks, callouts, call assets, and structured snippets.</li>
</ol>
    `,
  },

  // 3. How to Use Negative Keywords (Requested by user)
  {
    id: "3",
    slug: "how-to-use-negative-keywords-in-googleads-to-save-money",
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 8, 2026",
    excerpt:
      "Running Google Ads is kind of like playing poker. You can win big if you know what you’re doing, but careless targeting causes budget to vanish rapidly....",
    link: "https://idigitalstudies.com/blog/how-to-use-negative-keywords-in-googleads-to-save-money",
    readTime: "4 min read",
    image: "/assets/Blog3.png",
    tags: ["Google Ads", "Negative Keywords", "Budget Optimization", "PPC"],
    content: `
<p>
Running Google Ads is kind of like playing poker. You can win big if you know what you’re doing, but if you’re careless, your chips (aka budget) disappear fast.
</p>
<p>
One of the fastest ways marketing budgets are wasted is showing up for irrelevant searches. If you offer premium masterclasses, you don't want to pay ₹150 for someone searching "free digital marketing course pdf download". Negative keywords are the digital velvet ropes keeping unqualified searchers away from your budget.
</p>

<h2>Match Types for Negative Keywords</h2>
<ul>
  <li><strong>Negative Broad Match:</strong> Blocks queries containing all specified negative words regardless of order.</li>
  <li><strong>Negative Phrase Match:</strong> Blocks queries containing terms in the exact sequence specified.</li>
  <li><strong>Negative Exact Match:</strong> Blocks queries only when the search phrase matches word-for-word.</li>
</ul>

<h2>Where to Find Negative Keywords</h2>
<p>
Review your Search Terms Report weekly. Filter for terms that generated clicks with 0 conversions and add them directly to your account-level Negative Keyword List.
</p>
    `,
  },

  // 4. From Screenshot: What Is Performance Marketing?
  {
    id: "4",
    slug: "what-is-performance-marketing-meaning-channels-examples",
    title: "What Is Performance Marketing? Meaning, Channels & Examples",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 7, 2026",
    excerpt:
      "In an economy where every company and brand wants more sales, leads, and high ROI, measurable results are a priority....",
    link: "https://idigitalstudies.com/blog/what-is-performance-marketing-meaning-channels-examples",
    readTime: "7 min read",
    image: "/assets/blog 5.png",
    tags: ["Performance Marketing", "ROI", "PPC", "Growth"],
    content: `
<p>
In an economy where every company and brand wants more sales, leads, and high ROI, measurable results are a priority. Unlike traditional brand advertising where budgets are spent on impressions and billboard visibility, performance marketing charges strictly based on measurable actions — clicks, leads, sales, or downloads.
</p>
<h2>Top Performance Marketing Channels</h2>
<ul>
  <li><strong>Search Engine Advertising:</strong> Google Ads, Bing Search.</li>
  <li><strong>Social Media Ads:</strong> Meta (Facebook & Instagram), LinkedIn Ads, YouTube.</li>
  <li><strong>Programmatic & Native Advertising:</strong> Taboola, Outbrain, Google Display Network.</li>
  <li><strong>Affiliate & Partner Networks:</strong> Commission-based distributor marketing.</li>
</ul>
    `,
  },

  // 5. From Screenshot: Performance Marketing Course Fees
  {
    id: "5",
    slug: "performance-marketing-course-fees-how-much-should-you-really-pay",
    title: "Performance Marketing Course Fees: How Much Should You Really Pay?",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 2, 2026",
    excerpt:
      "Have you been comparing performance marketing course fees and thinking why each institute charges a different amount? These courses can...",
    link: "https://idigitalstudies.com/blog/performance-marketing-course-fees-how-much-should-you-really-pay",
    readTime: "5 min read",
    image: "/assets/blog8.png",
    tags: ["Career", "Performance Marketing", "Course Fees", "Admissions"],
    content: `
<p>
Have you been comparing performance marketing course fees and thinking why each institute charges a different amount? In India, course fees range anywhere from ₹15,000 for recorded sessions to over ₹1,20,000 for elite bootcamp programs.
</p>
<h2>What Determines Course Pricing?</h2>
<ul>
  <li><strong>Live Ad Budget Grant:</strong> Does the institute provide real advertising money for students to spend during live campaigns?</li>
  <li><strong>1-on-1 Mentorship:</strong> Access to senior performance marketing heads who audit your ad accounts.</li>
  <li><strong>Guaranteed Paid Internships & Placements:</strong> Direct campus recruitment tie-ups with performance agencies and tech startups.</li>
</ul>
    `,
  },

  // 6. From Screenshot: Top 10 Performance Marketing Courses
  {
    id: "6",
    slug: "top-10-performance-marketing-courses-in-india-which-one-should-you-choose",
    title: "Top 10 Performance Marketing Courses in India: Which One Should You Choose?",
    category: "Digital Marketing",
    author: "Vaibhav Kakkar",
    published: "September 1, 2026",
    excerpt:
      "Learning a new skill can be difficult, but finding the right mentor is even more challenging, especially when evaluating curricula and placement records...",
    link: "https://idigitalstudies.com/blog/top-10-performance-marketing-courses-in-india",
    readTime: "8 min read",
    image: "/assets/blog10.png",
    tags: ["Institute Guide", "Top Courses", "Digital Marketing", "Delhi NCR"],
    content: `
<p>
Learning a new skill can be difficult, but finding the right mentor is even more challenging, especially when every institute claims 100% placement records. We benchmarked the top 10 performance marketing programs in India based on curriculum depth, live ad spend experience, faculty pedigree, and alumni salary growth.
</p>
    `,
  },

  // 7. Data Analytics Post 1
  {
    id: "7",
    slug: "sql-for-data-analytics-essential-queries-for-analysts",
    title: "SQL for Data Analytics: 7 Practical Queries Every Modern Analyst Needs",
    category: "Data Analytics",
    author: "Dr. Ananya Roy",
    published: "August 28, 2026",
    excerpt:
      "Mastering window functions, CTEs, and cohort aggregations will transform how you query gigabytes of corporate transactional data with ease....",
    link: "https://idigitalstudies.com/blog/sql-for-data-analytics-essential-queries-for-analysts",
    readTime: "6 min read",
    image: "/assets/blog11.png",
    tags: ["SQL", "Data Analytics", "BigQuery", "PostgreSQL"],
    content: `
<p>
Data analytics is 80% data wrangling and SQL remains the universal language of databases. Here are 7 essential query patterns every analyst must master, from ROW_NUMBER() partitioning to rolling 7-day revenue averages.
</p>
    `,
  },

  // 8. Data Analytics Post 2
  {
    id: "8",
    slug: "power-bi-vs-tableau-in-2026-ultimate-comparison",
    title: "Power BI vs Tableau in 2026: The Ultimate Industry Comparison",
    category: "Data Analytics",
    author: "Siddharth Verma",
    published: "August 20, 2026",
    excerpt:
      "Choosing between Power BI and Tableau depends on company ecosystem, licensing costs, and data modeling complexity. Here is the full breakdown....",
    link: "https://idigitalstudies.com/blog/power-bi-vs-tableau-in-2026-ultimate-comparison",
    readTime: "5 min read",
    image: "/assets/blog13.png",
    tags: ["Power BI", "Tableau", "Data Visualization", "BI Tools"],
    content: `
<p>
As Microsoft integrates Copilot deeply into the Fabric ecosystem, Power BI has captured significant enterprise market share. However, Tableau still leads in pure bespoke visual storytelling. We compare both platforms on real-world enterprise parameters.
</p>
    `,
  },

  // 9. Data Science Post 1
  {
    id: "9",
    slug: "python-roadmap-for-machine-learning-beginners",
    title: "Python Roadmap for Machine Learning: From Zero to Model Deployment",
    category: "Data Science",
    author: "Kunal Mehra",
    published: "August 15, 2026",
    excerpt:
      "Learn the exact libraries, statistical fundamentals, and cloud deployment pipelines needed to become a job-ready Machine Learning engineer....",
    link: "https://idigitalstudies.com/blog/python-roadmap-for-machine-learning-beginners",
    readTime: "7 min read",
    image: "/assets/blog14.png",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Data Science"],
    content: `
<p>
Transitioning into Data Science doesn't require a PhD in mathematics. By mastering NumPy, Pandas, Scikit-learn, and basic PyTorch architectures, beginners can build end-to-end predictive pipelines and deploy them via FastAPI on AWS.
</p>
    `,
  },

  // 10. Financial Modeling Post 1
  {
    id: "10",
    slug: "step-by-step-guide-to-discounted-cash-flow-dcf-modeling",
    title: "Discounted Cash Flow (DCF) Modeling: Complete Step-by-Step Guide",
    category: "Financial Modeling",
    author: "Rohan Singhal, CFA",
    published: "August 10, 2026",
    excerpt:
      "Unpack the mechanics of Free Cash Flow to Firm (FCFF), WACC calculations, terminal value estimation, and sensitivity tables for corporate valuation....",
    link: "https://idigitalstudies.com/blog/step-by-step-guide-to-discounted-cash-flow-dcf-modeling",
    readTime: "8 min read",
    image: "/assets/blog15.png",
    tags: ["DCF", "Valuation", "Financial Modeling", "Excel"],
    content: `
<p>
A Discounted Cash Flow model is the cornerstone of corporate finance and private equity valuations. This guide walks through building a dynamic 3-statement integrated financial model in Excel from scratch.
</p>
    `,
  },

  // 11. Investment Banking Post 1
  {
    id: "11",
    slug: "how-to-break-into-investment-banking-interview-playbook",
    title: "How to Break into Investment Banking: The Technical Interview Playbook",
    category: "Investment Banking",
    author: "Prateek Bansal",
    published: "August 04, 2026",
    excerpt:
      "From enterprise value formulas to depreciation tax shields and LBO accretion/dilution math, master the 50 most tested IB interview questions....",
    link: "https://idigitalstudies.com/blog/how-to-break-into-investment-banking-interview-playbook",
    readTime: "9 min read",
    image: "/assets/blog16.png",
    tags: ["Investment Banking", "M&A", "LBO", "Finance Careers"],
    content: `
<p>
Investment banking interviews are notorious for rigorous technical grilling. We break down the exact valuation questions, accounting quirks, and deal rationale frameworks required to secure analyst and associate offers at top global investment banks.
</p>
    `,
  },

  // 12. ACCA Post 1
  {
    id: "12",
    slug: "acca-exam-strategy-clearing-strategic-business-leader-sbl",
    title: "ACCA Exam Strategy: How to Pass Strategic Business Leader (SBL) First Attempt",
    category: "ACCA",
    author: "Meenakshi Sundaram, FCCA",
    published: "July 29, 2026",
    excerpt:
      "Strategic Business Leader requires thinking like a senior board consultant, not just memorizing accounting standards. Here is the 80-hour pass strategy....",
    link: "https://idigitalstudies.com/blog/acca-exam-strategy-clearing-strategic-business-leader-sbl",
    readTime: "6 min read",
    image: "/assets/blog17.png",
    tags: ["ACCA", "SBL", "Global Accounting", "FCCA"],
    content: `
<p>
Passing the ACCA Strategic Business Leader (SBL) exam demands strong commercial acumen, professional skills marks, and strategic problem-solving. Discover the exact frameworks used by rank holders.
</p>
    `,
  },

  // 13. Content Writing Post 1
  {
    id: "13",
    slug: "seo-content-writing-framework-rank-page-1-consistently",
    title: "SEO Content Writing Framework: How to Rank on Google Page 1 Consistently",
    category: "Content Writing",
    author: "Shreya Sen",
    published: "July 22, 2026",
    excerpt:
      "Writing content for search engines without sounding robotic is an art. Discover our search intent formula that balances semantic SEO with compelling prose....",
    link: "https://idigitalstudies.com/blog/seo-content-writing-framework-rank-page-1-consistently",
    readTime: "5 min read",
    image: "/assets/blog18.png",
    tags: ["Content Writing", "Copywriting", "SEO Content", "Blogging"],
    content: `
<p>
In the era of AI-generated fluff, high-ranking content must exhibit first-hand expertise, authentic human experiences (E-E-A-T), and actionable takeaways. Learn how to outline, write, and format blog posts that outrank competitors.
</p>
    `,
  },

  // 14. Medical Coding Post 1
  {
    id: "14",
    slug: "cpc-exam-preparation-guide-cracking-medical-coding",
    title: "CPC Exam Preparation Guide: Tips to Crack the Medical Coding Certification",
    category: "Medical Coding",
    author: "Dr. Rajesh K., CPC",
    published: "July 16, 2026",
    excerpt:
      "Preparing for AAPC’s Certified Professional Coder (CPC) exam? Master guidelines for CPT, ICD-10-CM, and HCPCS Level II with our proven schedule....",
    link: "https://idigitalstudies.com/blog/cpc-exam-preparation-guide-cracking-medical-coding",
    readTime: "6 min read",
    image: "/assets/blog43.png",
    tags: ["Medical Coding", "CPC", "AAPC", "Healthcare IT"],
    content: `
<p>
Medical coding is one of the fastest growing healthcare professions globally. Learn how to navigate the CPT and ICD-10 codebooks efficiently under strict exam time limits to secure your certified credential on the first attempt.
</p>
    `,
  },

  // 15. Technical Writing Post 1
  {
    id: "15",
    slug: "how-to-write-developer-friendly-api-documentation",
    title: "How to Write Developer-Friendly API Documentation with OpenAPI & Swagger",
    category: "Technical Writing",
    author: "Vikram Malhotra",
    published: "July 10, 2026",
    excerpt:
      "Clear API documentation reduces support tickets and accelerates developer adoption. Learn how to craft interactive guides, response schemas, and code samples....",
    link: "https://idigitalstudies.com/blog/how-to-write-developer-friendly-api-documentation",
    readTime: "6 min read",
    image: "/assets/blog44.png",
    tags: ["Technical Writing", "API Docs", "Swagger", "Developer Experience"],
    content: `
<p>
Great documentation is the backbone of any software API product. Explore the standard OpenAPI 3.0 specification, authentication docs, error code dictionaries, and interactive sandbox setup.
</p>
    `,
  },

  // 16. UI/UX Design Post 1
  {
    id: "16",
    slug: "figma-design-systems-tokens-components-scalability",
    title: "Figma Design Systems: Architecting Scalable Tokens, Auto-Layout & Components",
    category: "UI/UX Design",
    author: "Natasha Roy",
    published: "July 03, 2026",
    excerpt:
      "Build design systems that bridge the gap between Figma design files and React codebases using design tokens, component variants, and interactive states....",
    link: "https://idigitalstudies.com/blog/figma-design-systems-tokens-components-scalability",
    readTime: "7 min read",
    image: "/assets/blog45.png",
    tags: ["Figma", "UI/UX", "Design Systems", "Web Design"],
    content: `
<p>
Modern digital products need seamless collaboration between UI/UX designers and frontend developers. Discover how tokenizing colors, typography, elevations, and spacing enables friction-free engineering handoffs.
</p>
    `,
  },

  // 17. Product Design Post 1
  {
    id: "17",
    slug: "product-led-growth-designing-user-onboarding-that-converts",
    title: "Product-Led Growth (PLG): Designing User Onboarding Flows That Convert",
    category: "Product Design",
    author: "Arjun Nair",
    published: "June 26, 2026",
    excerpt:
      "The first 5 minutes in a SaaS application determine customer retention. Learn how to design friction-free product onboarding experiences that deliver instant value....",
    link: "https://idigitalstudies.com/blog/product-led-growth-designing-user-onboarding-that-converts",
    readTime: "5 min read",
    image: "/assets/blog46.png",
    tags: ["Product Design", "PLG", "SaaS", "User Onboarding"],
    content: `
<p>
Product-Led Growth places the software experience at the center of acquisition and expansion. Learn how progressive disclosure, interactive product tours, and quick time-to-value milestones boost trial-to-paid conversion rates.
</p>
    `,
  },

  // 18. Business Analytics Post 1
  {
    id: "18",
    slug: "customer-lifetime-value-churn-prediction-for-modern-enterprises",
    title: "Customer Lifetime Value (CLV) & Churn Prediction for Modern Enterprises",
    category: "Business Analytics",
    author: "Tanmay Bhatia",
    published: "June 19, 2026",
    excerpt:
      "Transform historical transaction logs into actionable customer retention strategies using cohort analysis, RFM segmentation, and predictive analytics....",
    link: "https://idigitalstudies.com/blog/customer-lifetime-value-churn-prediction-for-modern-enterprises",
    readTime: "6 min read",
    image: "/assets/blog47.png",
    tags: ["Business Analytics", "CLV", "Churn", "E-commerce"],
    content: `
<p>
Acquiring a new customer costs 5x more than retaining an existing one. Learn how modern business analysts calculate dynamic Customer Lifetime Value and set up early warning churn alerts for business leadership.
</p>
    `,
  },
];
