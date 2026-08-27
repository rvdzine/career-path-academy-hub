export interface CityContent {
  slug: string;
  cityName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroHighlight: string;
  localizedIntro: string;
  commuteInfo: {
    metroLine: string;
    travelTime: string;
    modeDescription: string;
  };
  localOpportunities: {
    title: string;
    description: string;
    topHiringAreas: string[];
  };
  cityFaqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const cityData: Record<string, CityContent> = {
  noida: {
    slug: "digital-marketing-course-in-noida",
    cityName: "Noida",
    region: "Delhi NCR (Headquarters)",
    metaTitle: "Best Digital Marketing Course in Noida | Institute of Digital Studies",
    metaDescription: "Join the #1 AI-Powered Digital Marketing Course in Sector 62 Noida. 100% placement support, 10+ live projects, practical offline labs & expert mentors.",
    heroHighlight: "Learn at our flagship Sector 62 Noida campus with state-of-the-art practical marketing labs and daily offline mentor sessions.",
    localizedIntro: "Institute of Digital Studies (IDS) in Sector 62, Noida is the premier center for AI-powered practical digital marketing education. Designed for college graduates, career switchers, and business owners, our offline training batches provide intensive hands-on experience in SEO, Google Ads, Meta Ads, and AI marketing workflows.",
    commuteInfo: {
      metroLine: "Blue Line (Noida Electronic City)",
      travelTime: "5 mins from Metro Station",
      modeDescription: "Easily accessible from all sectors of Noida, Greater Noida, and Indirapuram via direct metro and road transit.",
    },
    localOpportunities: {
      title: "Digital Marketing Career Opportunities in Noida & Greater Noida",
      description: "Noida is home to India's fastest-growing IT and startup corridor (Sector 62, Sector 125, Sector 135). IDS maintains hiring partnerships with 50+ local agencies and tech companies.",
      topHiringAreas: ["Sector 62 IT Park", "Sector 135 Express Trade Towers", "Sector 63 Media City", "Greater Noida Knowledge Park"],
    },
    cityFaqs: [
      {
        question: "Where is the IDS physical training campus located in Noida?",
        answer: "The Institute of Digital Studies (IDS) campus is centrally located in Sector 62, Noida, just minutes away from the Noida Electronic City metro station on the Blue Line.",
      },
      {
        question: "Do you offer offline classroom training with live projects in Noida?",
        answer: "Yes, our Noida center features fully equipped computer labs where students work on live client projects, campaign budgets, and real-time SEO audits under 1:1 mentor supervision.",
      },
      {
        question: "What is the placement record for students trained at the Noida campus?",
        answer: "IDS has placed over 2,000+ students with a 90% placement success rate across top digital agencies, tech startups, and MNCs located across Delhi NCR.",
      },
    ],
  },
  dwarka: {
    slug: "digital-marketing-course-in-dwarka",
    cityName: "Dwarka",
    region: "South-West Delhi",
    metaTitle: "Digital Marketing Course in Dwarka | Hybrid & Weekend Batches | IDS",
    metaDescription: "Join the top-rated Digital Marketing Course for Dwarka students. Direct Blue Line metro connectivity to Noida campus, hybrid weekend classes & 100% job support.",
    heroHighlight: "Direct Blue Line metro connectivity + hybrid weekend cohorts tailored for students and working professionals in Dwarka & West Delhi.",
    localizedIntro: "For learners in Dwarka and South-West Delhi, IDS offers a high-impact blended digital marketing program. Attend interactive live online classes on weekdays with the option to join weekend intensive practical workshops at our campus via the direct Blue Line metro corridor.",
    commuteInfo: {
      metroLine: "Direct Blue Line (Dwarka Sec 21 to Noida Electronic City)",
      travelTime: "Direct Single-Train Ride",
      modeDescription: "Seamless single-train direct connectivity from Dwarka Sector 21, Sector 9, and Janakpuri straight to the IDS campus station.",
    },
    localOpportunities: {
      title: "Digital Marketing Growth for Dwarka Professionals",
      description: "With growing e-commerce businesses, local retail agencies, and proximity to Gurgaon Cyber Hub, Dwarka graduates can access top digital marketing roles.",
      topHiringAreas: ["Dwarka Sector 12 Business Hub", "Aerocity Tech Zone", "Janakpuri Commercial Complex", "Connaught Place Agencies"],
    },
    cityFaqs: [
      {
        question: "How can students from Dwarka attend IDS digital marketing classes?",
        answer: "Dwarka students can enroll in our flexible hybrid program: live interactive online masterclasses during the week, plus optional weekend practical labs at our campus via direct Blue Line metro.",
      },
      {
        question: "Is there placement assistance provided for Dwarka residents?",
        answer: "Yes, all students receive full 100% placement support, interview preparation, portfolio building, and access to hiring drives across Delhi, Gurgaon, and Noida.",
      },
    ],
  },
  gurugram: {
    slug: "digital-marketing-course-in-gurugram",
    cityName: "Gurugram",
    region: "Cyber City / Millennium City",
    metaTitle: "Digital Marketing Course in Gurugram (Gurgaon) | Executive AI Program | IDS",
    metaDescription: "Advance your career with AI-Powered Digital Marketing Training in Gurugram. Executive weekend batches, performance marketing, SEO & PPC for MNC professionals.",
    heroHighlight: "Executive weekend batches and advanced performance marketing modules designed for Cyber City & Golf Course Road corporate professionals.",
    localizedIntro: "Gurugram is India's corporate marketing powerhouse. IDS delivers an advanced, AI-integrated digital marketing curriculum tailored for working professionals, startup founders, and agency marketers looking to master performance advertising, CRO, and marketing automation.",
    commuteInfo: {
      metroLine: "Yellow Line + Magenta Line Interchange",
      travelTime: "45 mins via Metro / Rapid Transit",
      modeDescription: "Fast transit via Yellow Line connecting to Magenta Line straight into Botanical Garden & Noida.",
    },
    localOpportunities: {
      title: "High-Ticket Marketing Roles in Gurugram",
      description: "Gurugram hosts the highest density of MNCs, fintechs, and D2C brand headquarters in North India, offering starting salary packages ranging from ₹4.5 LPA to ₹12 LPA for skilled marketers.",
      topHiringAreas: ["Cyber City DLF Phase 2/3", "Golf Course Road Corporate Towers", "Udyog Vihar Startups", "Sohna Road Tech Parks"],
    },
    cityFaqs: [
      {
        question: "Is this course suitable for working professionals in Gurugram?",
        answer: "Yes, our Gurugram cohorts feature specialized weekend and evening schedules with self-paced project assignments so working executives can upskill without interrupting their jobs.",
      },
      {
        question: "Does the curriculum cover advanced Performance Marketing and AI tools?",
        answer: "Absolutely. You will master Google Performance Max, Meta Advantage+, Programmatic Ads, ChatGPT prompt workflows for SEO, and conversion rate optimization (CRO).",
      },
    ],
  },
  kalkaji: {
    slug: "digital-marketing-course-in-kalkaji",
    cityName: "Kalkaji",
    region: "South Delhi",
    metaTitle: "Digital Marketing Course in Kalkaji South Delhi | Certified Training | IDS",
    metaDescription: "Master Digital Marketing in Kalkaji & South Delhi. Fast 20-minute Magenta Line metro connectivity, practical live projects & 100% placement support.",
    heroHighlight: "Quick 20-minute commute via Magenta Line metro from Kalkaji Mandir + blended learning for South Delhi aspirants.",
    localizedIntro: "Residents of Kalkaji, Nehru Place, and Greater Kailash can now access top-tier digital marketing education. Benefit from specialized modules covering e-commerce marketing, local SEO, social media management, and paid advertising.",
    commuteInfo: {
      metroLine: "Magenta Line (Kalkaji Mandir to Botanical Garden)",
      travelTime: "20 minutes direct",
      modeDescription: "Direct, ultra-fast Magenta Line metro connection from Kalkaji Mandir straight into Noida.",
    },
    localOpportunities: {
      title: "Digital Marketing Scope in South Delhi",
      description: "From Nehru Place IT trade houses to South Extension fashion labels and GK lifestyle brands, South Delhi offers rich freelance and agency opportunities.",
      topHiringAreas: ["Nehru Place Commercial Hub", "Okhla Industrial Area Phase 1-3", "Mohan Cooperative Industrial Estate", "Lajpat Nagar Media Hubs"],
    },
    cityFaqs: [
      {
        question: "How far is the IDS center from Kalkaji?",
        answer: "Thanks to the Magenta Line metro from Kalkaji Mandir, you can reach our training center in approximately 20-25 minutes.",
      },
      {
        question: "Will I work on live client projects during the course?",
        answer: "Yes, every student manages live campaign budgets, conducts website SEO audits, and creates multi-channel marketing campaigns under expert supervision.",
      },
    ],
  },
  pitampura: {
    slug: "digital-marketing-course-in-pitampura",
    cityName: "Pitampura",
    region: "North-West Delhi",
    metaTitle: "Digital Marketing Course in Pitampura North Delhi | Learn AI Marketing | IDS",
    metaDescription: "Best Digital Marketing Course for Pitampura & North Delhi students. Interactive live online sessions, weekend campus project labs & career placement assistance.",
    heroHighlight: "Interactive live online cohorts + weekend hands-on campus labs designed for North-West Delhi students and retail business owners.",
    localizedIntro: "Designed for learners in Pitampura, Rohini, and Shalimar Bagh, IDS provides a practical, industry-focused digital marketing curriculum. Learn to scale e-commerce stores, run high-ROI local ads, and rank on Google with AI-driven techniques.",
    commuteInfo: {
      metroLine: "Red Line to Kashmere Gate -> Blue Line",
      travelTime: "Interactive Online + Weekend Lab Option",
      modeDescription: "Join weekday live virtual interactive sessions and participate in weekend offline hackathons and mentor sessions.",
    },
    localOpportunities: {
      title: "Marketing Career & Business Growth in North-West Delhi",
      description: "Ideal for retail entrepreneurs looking to scale digital sales as well as students targeting entry-level and executive roles across Delhi NCR agencies.",
      topHiringAreas: ["Netaji Subhash Place (NSP) Towers", "Wazirpur Industrial Area", "Rohini Commercial Hubs", "North Delhi Business Parks"],
    },
    cityFaqs: [
      {
        question: "Can Pitampura students complete the course completely online?",
        answer: "Yes, our interactive live online format provides 100% live instructor teaching, real-time screen sharing, LMS recordings, and live doubt-solving sessions.",
      },
      {
        question: "Do you provide guidance for business owners in Pitampura?",
        answer: "Yes, our curriculum includes tailored strategies for local lead generation, Google My Business optimization, Meta lead ads, and Shopify marketing.",
      },
    ],
  },
  "preet-vihar": {
    slug: "digital-marketing-course-in-preet-vihar",
    cityName: "Preet Vihar",
    region: "East Delhi",
    metaTitle: "Digital Marketing Course in Preet Vihar East Delhi | Top Institute | IDS",
    metaDescription: "Join the premier Digital Marketing Course near Preet Vihar & East Delhi. 15-minute quick commute to Noida campus, live projects & 100% placement guarantee.",
    heroHighlight: "Just 15 minutes away from Preet Vihar & East Delhi with direct Blue Line metro access to Sector 62 Noida campus.",
    localizedIntro: "Located directly adjacent to East Delhi, IDS is the ideal training destination for students and graduates from Preet Vihar, Laxmi Nagar, and Anand Vihar. Enjoy daily offline lab access, 1:1 mentorship, and direct agency placement drives.",
    commuteInfo: {
      metroLine: "Blue Line (Preet Vihar / Nirman Vihar to Noida Electronic City)",
      travelTime: "15 minutes direct",
      modeDescription: "Direct connectivity via Blue Line metro or a short 15-minute drive via Vikas Marg / NH24.",
    },
    localOpportunities: {
      title: "East Delhi to Noida Tech Corridor Opportunities",
      description: "East Delhi students benefit from immediate access to Noida's booming digital agency hub with direct placement linkages.",
      topHiringAreas: ["Laxmi Nagar Commercial Hub", "Noida Sector 62 Tech Hub", "Patparganj Industrial Area", "Sahibabad Business District"],
    },
    cityFaqs: [
      {
        question: "Why should Preet Vihar students choose IDS Noida?",
        answer: "IDS is just a 15-minute direct metro ride away, offering the advantage of a full offline tech campus with dedicated computer labs and daily mentor access.",
      },
      {
        question: "What certifications will I receive upon course completion?",
        answer: "You will earn the IDS Master Certification along with globally recognized credentials from Google, Meta, HubSpot, and MSME Government of India.",
      },
    ],
  },
  "rajouri-garden": {
    slug: "digital-marketing-course-in-rajouri-garden",
    cityName: "Rajouri Garden",
    region: "West Delhi",
    metaTitle: "Digital Marketing Course in Rajouri Garden West Delhi | Institute of Digital Studies",
    metaDescription: "Top Digital Marketing Training for Rajouri Garden & West Delhi. Direct Blue Line connectivity, practical E-commerce & Social Media Marketing modules.",
    heroHighlight: "Direct Blue Line metro connectivity from Rajouri Garden to our Noida campus + specialized E-commerce & Brand scaling modules.",
    localizedIntro: "For learners in Rajouri Garden, Punjabi Bagh, and Tagore Garden, IDS offers comprehensive digital marketing programs focused on modern brand building, performance marketing, and influencer marketing campaigns.",
    commuteInfo: {
      metroLine: "Blue Line / Pink Line Interchange",
      travelTime: "Direct Blue Line Route",
      modeDescription: "Direct ride on the Blue Line metro from Rajouri Garden station straight to Noida Electronic City.",
    },
    localOpportunities: {
      title: "Retail, D2C & Agency Opportunities in West Delhi",
      description: "Learn to build and manage digital ad campaigns for retail brands, food & beverage chains, fashion outlets, and fast-growing e-commerce startups.",
      topHiringAreas: ["Rajouri Garden High Street Market", "Kirti Nagar Commercial Hub", "Netaji Subhash Place", "Janakpuri District Centre"],
    },
    cityFaqs: [
      {
        question: "Can I learn digital marketing if I run a business in Rajouri Garden?",
        answer: "Yes, our tailored business owner modules teach you how to generate qualified customer leads, run Instagram/Facebook ads, and optimize your Google Maps ranking.",
      },
      {
        question: "Are weekend batches available for West Delhi residents?",
        answer: "Yes, we offer dedicated weekend Saturday/Sunday batches as well as hybrid learning schedules.",
      },
    ],
  },
  "south-extension": {
    slug: "digital-marketing-course-in-south-extension",
    cityName: "South Extension",
    region: "South Central Delhi",
    metaTitle: "Digital Marketing Course in South Extension Delhi | Expert Training | IDS",
    metaDescription: "Best Digital Marketing Institute for South Extension Delhi. High-ticket performance marketing, SEO, PPC & agency portfolio training with 100% placement.",
    heroHighlight: "Fast metro connectivity via Pink/Magenta lines + agency-level campaign portfolio training for South Extension aspirants.",
    localizedIntro: "South Extension is a prestigious commercial and educational landmark. IDS offers career-transforming digital marketing training for aspiring agency heads, marketing analysts, and performance marketing specialists.",
    commuteInfo: {
      metroLine: "Pink Line to Mayur Vihar -> Blue Line / Magenta Line",
      travelTime: "30 minutes",
      modeDescription: "Smooth metro connectivity from South Extension and Lajpat Nagar metro stations.",
    },
    localOpportunities: {
      title: "Agency & Premium Brand Marketing in South Delhi",
      description: "Master multi-million rupee ad budgets, Google Analytics 4, programmatic media buying, and executive client management.",
      topHiringAreas: ["South Extension Part 1 & 2", "Lajpat Nagar Media Offices", "Defence Colony Business District", "Lodhi Road Corporate Hubs"],
    },
    cityFaqs: [
      {
        question: "What makes IDS different from other digital marketing institutes in South Extension?",
        answer: "IDS emphasizes 100% practical implementation with live ad spend budgets, real SEO client projects, and direct 1:1 mentorship from industry veterans.",
      },
      {
        question: "Is internship support included for South Extension students?",
        answer: "Yes, every comprehensive course includes a guaranteed 3-month practical internship to build real-world work experience.",
      },
    ],
  },
  "south-campus": {
    slug: "digital-marketing-course-in-south-campus",
    cityName: "South Campus (DU)",
    region: "Delhi University Student Hub",
    metaTitle: "Digital Marketing Course for South Campus DU Students | IDS Institute",
    metaDescription: "Best Digital Marketing Course for Delhi University South Campus students. College-friendly batch timings, pocket-friendly EMI & guaranteed internship.",
    heroHighlight: "Tailored for Delhi University students: College-friendly batch timings, 100% internship guarantee, and student-friendly EMI options.",
    localizedIntro: "Designed specifically for undergraduates and graduates across Delhi University's South Campus colleges (Venkateswara, ARSD, Motilal Nehru, RLA, DCAC). Gain in-demand job skills, build an impressive portfolio, and step into high-paying corporate roles before graduation.",
    commuteInfo: {
      metroLine: "Pink Line (Durgabai Deshmukh South Campus to Mayur Vihar -> Blue Line)",
      travelTime: "35 minutes",
      modeDescription: "Quick Pink Line connection from Durgabai Deshmukh South Campus station straight into the Noida route.",
    },
    localOpportunities: {
      title: "Fresh Graduate & Campus Placement Trajectory",
      description: "Digital marketing is the #1 career choice for DU graduates. IDS provides dedicated resume polishing, mock interviews, and campus recruitment access across 50+ hiring companies.",
      topHiringAreas: ["MNC Graduate Trainee Roles", "Leading Media & Creative Agencies", "Gurugram Tech Startups", "Remote Freelancing & Global Clients"],
    },
    cityFaqs: [
      {
        question: "Can DU college students manage the course along with regular college lectures?",
        answer: "Yes, we offer early morning, late evening, and weekend batches specifically designed to fit around regular Delhi University college timetables.",
      },
      {
        question: "Do you offer student discounts or EMI payment options?",
        answer: "Yes, we offer flexible No-Cost EMI payment plans and special scholarship options for Delhi University students.",
      },
      {
        question: "Will I receive an internship certificate to add to my CV?",
        answer: "Yes, you will receive a verified 3-Month Industry Internship Certificate and experience letter that significantly enhances your placement prospects.",
      },
    ],
  },
  "delhi-ncr": {
    slug: "digital-marketing-course-in-delhi-ncr",
    cityName: "Delhi NCR",
    region: "National Capital Region",
    metaTitle: "Best Digital Marketing Course in Delhi NCR | 100% Placement - IDS",
    metaDescription: "Join the top-rated Digital Marketing Course in Delhi NCR at IDS. Hands-on training in AI tools, SEO, Google Ads & Meta Ads with guaranteed 3-month internship.",
    heroHighlight: "Ranked #1 Digital Marketing Institute across Delhi NCR with practical classroom labs, real ad spend campaigns, and 100% placement support.",
    localizedIntro: "Institute of Digital Studies (IDS) is Delhi NCR's most trusted training institute for practical, AI-integrated digital marketing. Catering to students, job seekers, and working professionals across Delhi, Noida, and Gurugram, our comprehensive curriculum equips you with high-income skills across SEO, Performance Marketing, Social Media Strategy, and Analytics.",
    commuteInfo: {
      metroLine: "Direct Blue Line, Pink Line & Magenta Line connectivity",
      travelTime: "20-40 mins from major NCR stations",
      modeDescription: "Centrally located campus in Sector 62, Noida with seamless metro accessibility across Delhi NCR.",
    },
    localOpportunities: {
      title: "Delhi NCR's Booming Digital Marketing Economy",
      description: "Delhi NCR is India's leading corporate and startup capital with over 15,000+ active digital marketing openings. IDS connects students directly with 50+ recruiting partners.",
      topHiringAreas: ["Noida Sector 62 & 135", "Gurugram Cyber Hub", "South Delhi Media Agencies", "Connaught Place Corporate HQs"],
    },
    cityFaqs: [
      {
        question: "Why is IDS rated the best digital marketing institute in Delhi NCR?",
        answer: "IDS combines 50+ practical modules with real ad budgets, 10+ live client projects, guaranteed 3-month agency internships, and personalized 1:1 mentor coaching.",
      },
      {
        question: "What is the average starting salary for freshers in Delhi NCR after completing this course?",
        answer: "Our graduates in Delhi NCR secure starting salary packages between ₹3.5 LPA and ₹8.5 LPA depending on specialization and portfolio strength.",
      },
      {
        question: "Are both offline and live online training modes available across Delhi NCR?",
        answer: "Yes, we offer hands-on offline classroom batches at our Noida Sector 62 campus as well as live interactive online weekend and weekday batches for students across Delhi NCR.",
      },
    ],
  },
};
