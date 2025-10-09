// src/pages/BlogDetail.tsx
import Navbar from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";

const blogDetails: Record<string, { title: string; content: string; image: string }> = {
  "digital-marketing-trends-2025": {
    title: "Local SEO Checklist: How to Get Your Business on Google Maps for Free",
    content: `
<p>
For any local business, showing up on Google Maps is one of the most powerful ways to attract nearby customers.
When people search for “restaurants near me” or “plumbers in [city],” they often pick businesses that appear at the top of the local results.
The good news? Getting listed on Google Maps is completely free with the right Local SEO strategy.
Here’s a complete checklist to help you optimize your business for local searches.
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 1: Create or Claim Your Google Business Profile</h2>
<p>The first step is to set up your Google Business Profile (formerly Google My Business).</p>
<ul class="list-disc list-inside">
<li>Go to Google Business Profile and sign in with your Google account.</li>
<li>Enter your business name and select your business category.</li>
<li>Add your physical address to appear on Google Maps.</li>
<li>Verify your business by phone, email, or postcard.</li>
</ul>
<p>Verification is crucial—your listing won’t appear on Google Maps until it’s completed.</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 2: Optimize Your Profile Information</h2>
<p>Once your profile is active, make it as detailed as possible. Include:</p>
<ul class="list-disc list-inside">
<li>Business Name (use your real brand name, not keywords).</li>
<li>Address & Service Areas (accurate location is key).</li>
<li>Business Hours (keep them updated, especially during holidays).</li>
<li>Phone Number & Website (make sure they’re consistent with other listings).</li>
<li>Business Category & Services (choose the most relevant ones).</li>
</ul>
<p>Consistency across all platforms (website, directories, social media) helps boost your local SEO.</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 3: Add High-Quality Photos and Videos</h2>
<p>Profiles with photos receive significantly more clicks and calls. Add:</p>
<ul class="list-disc list-inside">
<li>Exterior and interior shots of your business.</li>
<li>Product photos.</li>
<li>Team or staff pictures.</li>
<li>Short videos (like a store walkthrough or service demo).</li>
</ul>
<p>Visuals build trust and encourage customers to visit your business.</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 4: Collect and Respond to Reviews</h2>
<p>
Reviews are one of the strongest ranking factors for local SEO. Encourage satisfied customers
to leave feedback on your Google profile.
</p>
<ul class="list-disc list-inside">
<li>Politely ask customers after a purchase or service.</li>
<li>Share your review link via email or social media.</li>
<li>Always respond to reviews, whether positive or negative.</li>
</ul>
<p>Active engagement shows credibility and boosts visibility.</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 5: Use Keywords in Your Profile and Posts</h2>
<p>
Optimize your profile description with local keywords. For example, instead of just “bakery,”
use “artisan bakery in Delhi” or “best birthday cakes in Mumbai.”
</p>
<ul class="list-disc list-inside">
<li>Add keywords naturally in your business description.</li>
<li>Use them in Google Business Profile posts, which allow you to share updates, offers, or events.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 6: Build Local Citations and Backlinks</h2>
<p>Google cross-checks information from various sources. Ensure your business is listed consistently on:</p>
<ul class="list-disc list-inside">
<li>Local directories (Justdial, Sulekha, IndiaMart, Yelp).</li>
<li>Industry-specific sites.</li>
<li>Social media profiles.</li>
</ul>
<p>
Backlinks from local blogs, newspapers, and chambers of commerce can also boost your ranking.
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Step 7: Keep Your Profile Active</h2>
<p>Google favors active profiles. Regularly update:</p>
<ul class="list-disc list-inside">
<li>Photos and posts.</li>
<li>New services or offers.</li>
<li>Business hours (especially during festivals or seasonal changes).</li>
</ul>
<p>This signals to Google that your business is trustworthy and up-to-date.</p>

<hr class="my-6">

<h2 class="text-2xl font-semibold mt-6 mb-4">FAQs on Local SEO and Google Maps</h2>
<ol class="list-decimal list-inside space-y-3">
<li><strong>How long does it take for my business to appear on Google Maps?</strong><br>Usually, once verified, your business can appear within a few days, but ranking higher may take weeks of consistent optimization.</li>
<li><strong>Is it really free to get listed on Google Maps?</strong><br>Yes. Creating and maintaining your Google Business Profile is completely free. You only pay if you run paid Google Ads.</li>
<li><strong>Do I need a physical location to appear on Google Maps?</strong><br>Yes, but service-based businesses can hide their address and list service areas instead (e.g., plumbers, electricians).</li>
<li><strong>How important are reviews for local SEO?</strong><br>Very important. Businesses with more positive reviews often rank higher in local search results.</li>
<li><strong>Can I manage multiple locations on Google Maps?</strong><br>Yes. If you run multiple branches, you can add and manage all of them under one Google account.</li>
</ol>
    `,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },

  "seo-strategies-beginners": {
    title: "What is Quality Score? 5 Simple Ways to Improve It in Google Ads",
    content: `
<p>
If you’ve spent any time poking around in Google Ads, you’ve probably seen this thing called <strong>Quality Score</strong>.
Most people glance at it once, shrug, and move on. Big mistake. That little number actually has a huge impact
on how much you’re shelling out per click and whether your ads even get seen in the first place.
Think of it like Google’s report card for your ads. Good grades? You get cheaper clicks and prime spots.
Bad grades? Well… your budget’s going to disappear real fast.
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">So, what exactly is this Quality Score thing?</h2>
<p>
It’s basically a 1–10 rating Google gives to judge how “good” your ad setup is. By “good,” I mean:
are your keywords, ads, and landing pages actually making sense together, or are you just throwing spaghetti at the wall?
Google’s not shy about it either — they look at three main ingredients:
</p>
<ul class="list-disc list-inside">
<li><strong>Expected CTR</strong> – Do people actually want to click your ad?</li>
<li><strong>Ad Relevance</strong> – Does your ad match what they typed into the search bar?</li>
<li><strong>Landing Page Experience</strong> – Does the page you send them to deliver exactly what they hoped for?</li>
</ul>
<p>If you’ve got these three dialed in, Google rewards you with better ad positions, lower CPC, and more efficient campaigns.</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Why you should care about Quality Score</h2>
<ul class="list-disc list-inside">
<li>You literally pay less per click when your score is higher.</li>
<li>You can outrank competitors without outbidding them.</li>
<li>It keeps your campaigns from becoming money pits.</li>
<li>And honestly, it just forces you to make better ads that people actually like.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">5 Simple Ways to Improve Quality Score</h2>
<ol class="list-decimal list-inside space-y-4">
<li><strong>Make your ads actually match your keywords.</strong><br>
This one sounds obvious, but you’d be surprised how many ads are basically clickbait.
If your keyword is “buy running shoes online,” then your ad should actually say “buy running shoes online.”
Google loves consistency, and so do searchers.</li>

<li><strong>Work on your CTR (click-through rate).</strong><br>
Google pays attention when people keep clicking your ad. To get that CTR up:
<ul class="list-disc list-inside">
<li>Write headlines that spell out the benefit.</li>
<li>Toss in numbers, discounts, or quirky details.</li>
<li>Don’t sleep on CTAs — people like being told what to do.</li>
<li>Run A/B tests — sometimes the “boring” ad copy wins.</li>
</ul>
</li>

<li><strong>Fix your landing page.</strong><br>
Don’t trick people into clicking only to dump them on a random, messy page.
If someone clicks “running shoes,” don’t take them to your homepage — show them the actual shoes.
Also: make the page load fast, work smoothly on mobile, and keep navigation simple. Basically, respect people’s time.
</li>

<li><strong>Use negative keywords.</strong><br>
Here’s the sneaky one. If your ad is showing up for totally irrelevant searches, your CTR tanks.
Negative keywords keep you out of those situations. Example: if you sell luxury watches, you don’t want your ads popping up when someone types “cheap watches.”
</li>

<li><strong>Keep tweaking.</strong><br>
This isn’t a “set it and forget it” thing. Your ads, keywords, and landing pages need regular check-ups.
Pause the stuff that’s flopping, refine copy, try new variations. Little by little, your Quality Score creeps up.
</li>
</ol>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Quick FAQs (because everyone asks these)</h2>
<ol class="list-decimal list-inside space-y-3">
<li><strong>What is a good Quality Score in Google Ads?</strong><br>Anything 7 or higher is solid. If you hit 8–10, you’re golden. Below 5? You’ve got some homework to do.</li>
<li><strong>Does Quality Score affect my ad position?</strong><br>Yep. A higher score can push your ad above competitors even if you’re bidding less.</li>
<li><strong>Can Quality Score directly lower my ad costs?</strong><br>Also yes. Higher score = cheaper CPC.</li>
<li><strong>How quickly can I improve my Quality Score?</strong><br>Depends how sloppy things were to begin with. Sometimes you’ll see changes in a few days, sometimes weeks.</li>
<li><strong>Is Quality Score the only factor in ad performance?</strong><br>Nah. Bids, competition, budget — they all matter. But ignoring Quality Score is like driving with the handbrake on.</li>
</ol>
    `,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },

  "content-marketing-secrets": {
    title: "How to Use Negative Keywords in GoogleAds to Save Money",
    content: `
<p>
Running Google Ads is kind of like playing poker. You can win big if you know what you’re doing, but if you’re careless, your chips (aka money) disappear fast.
One of the easiest ways people burn cash? Their ads show up for totally irrelevant searches.
That’s where negative keywords come in. Think of them as the “no entry” signs you slap on your ads so the wrong people don’t wander in.
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">What are The Negative Keywords?</h2>
<p>
Negative keywords are basically the words you don’t want your ads to show up for.
Let’s say you sell fancy leather bags. You want people searching for “luxury leather bags,” not bargain-hunters typing “cheap handbags” or, worse, “free purses.”
By adding “cheap” and “free” as negative keywords, you’re politely telling Google, “nah, those aren’t my people.”
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Why Negative Keywords Save You Money</h2>
<ul class="list-disc list-inside">
<li>Cutting off dead-end clicks that never convert.</li>
<li>Making your click-through rate look prettier (because only the right crowd sees your ad).</li>
<li>Nudging up your conversion rate — more buyers, fewer browsers.</li>
<li>Even lowering your costs in the long run, since Google rewards ads with better engagement.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Types of Negative Keywords</h2>
<p>Google gives you options on how strict you want to be:</p>
<ul class="list-disc list-inside">
<li><strong>Broad match negative</strong> – Blocks your ad if all the negative words show up, no matter the order.</li>
<li><strong>Phrase match negative</strong> – Stops your ad when someone types the exact phrase in the same order.</li>
<li><strong>Exact match negative</strong> – Only blocks if the search is exactly that word or phrase.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">How to Figure Out Which Negatives You Need</h2>
<ol class="list-decimal list-inside space-y-3">
<li>Dig into the Search Terms Report in Google Ads. It shows you the exact phrases people typed before clicking.</li>
<li>Poke around in Keyword Planner — spot words related to your niche that clearly don’t fit.</li>
<li>Spy on competitors’ ads. If they’re catching irrelevant traffic, you probably will too.</li>
<li>Use common sense — ask yourself, “What would someone type if they’re not looking for what I sell?”</li>
</ol>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Steps to Add Negative Keywords in Google Ads</h2>
<ul class="list-disc list-inside">
<li>Log in to Google Ads.</li>
<li>Pick your campaign or ad group.</li>
<li>Go to <strong>Keywords → Negative keywords</strong>.</li>
<li>Hit that little plus button.</li>
<li>Drop in your words.</li>
<li>Decide if it should block everything (campaign-level) or just certain ads (ad-group-level).</li>
<li>Save and keep an eye on results.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Best Practices for Using Negative Keywords</h2>
<ul class="list-disc list-inside">
<li>Keep tweaking — your list isn’t “set and forget.”</li>
<li>Don’t overdo it — block too much and you might kill good traffic by accident.</li>
<li>Stay organized — a master list helps avoid chaos.</li>
<li>Match types matter — broad is a good starting point, then refine.</li>
<li>Use tools — automation and scripts can save you from boring manual updates.</li>
</ul>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">Conclusion</h2>
<p>
Negative keywords aren’t glamorous, but they’re the secret sauce that stops Google Ads from becoming a money pit.
Think of them as spring cleaning for your ad account: toss out the junk so only the good stuff stays.
</p>

<hr class="my-6">

<h2 class="text-xl font-semibold mt-6 mb-3">FAQs on Negative Keywords in Google Ads</h2>
<ol class="list-decimal list-inside space-y-3">
<li><strong>How are regular keywords different from negatives?</strong><br>Regular ones trigger your ads. Negatives block them. Opposites, basically.</li>
<li><strong>Should I add them at the campaign or ad group level?</strong><br>Both, depending on scope. If irrelevant to everything, add at campaign level. If it only affects one product, use ad group level.</li>
<li><strong>Can negatives help my ad rank?</strong><br>Indirectly, yes. Better targeting → higher CTR → better Quality Score → lower CPC.</li>
<li><strong>How often should I check my negative list?</strong><br>Weekly if you’re spending big, every couple of weeks if your budget’s small.</li>
<li><strong>Can I use the same negatives in multiple campaigns?</strong><br>Totally. Build a shared list and apply it everywhere. Saves time, saves sanity.</li>
</ol>
    `,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogDetails[slug || ""];

  if (!blog) {
    return (
      <div className="py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-gray-700">Blog not found</h2>
        <Link to="/blog" className="mt-4 inline-block text-red-500">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen">
      <>
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover mb-6 rounded-lg"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            {blog.title}
          </h1>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-10 text-center md:text-left">
            <Link
              to="/blog"
              className="bg-[#EA2525] text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </>
    </section>
  );
};

export default BlogDetail;