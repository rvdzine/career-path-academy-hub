"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactOptionsDialog from "@/components/ContactOptionsDialog";

const services = [
  {
    icon: "🌐",
    title: "WEBSITE & APP\nDEVELOPMENT",
    quote:
      "Your business exists offline. Your competition exists online and that's why they're winning.",
    description:
      "High converting, mobile first websites built to turn visitors into buyers.",
    cta: "First Project at ₹999",
    ctaType: "price",
  },
  {
    icon: "🎬",
    title: "UGC & CREATIVE\nADS",
    quote: "Your product is good. Your ads just haven't proved it yet.",
    description:
      "Scroll-stopping UGC and creative ads that generate massive revenue. Real people, real results.",
    cta: "First Video at ₹999",
    ctaType: "price",
  },
  {
    icon: "📱",
    title: "SOCIAL MEDIA\nMANAGEMENT",
    quote:
      "Posting consistently but still not growing? The problem isn't your strategy.",
    description:
      "We manage your social presence to build community and drive consistent sales through organic growth.",
    cta: "No Results = No Charges",
    ctaType: "guarantee",
  },
  {
    icon: "🎯",
    title: "LEAD\nGENERATION",
    quote: "More enquiries won't grow your business. Better ones will.",
    description:
      "High-intent lead generation campaigns that fill your pipeline with ready-to-buy customers.",
    cta: "Guaranteed or No Bill",
    ctaType: "guarantee",
  },
  {
    icon: "🎥",
    title: "SHOOTS &\nCINEMATICS",
    quote:
      "People buy with their eyes first. If your visuals don't stop them nothing else gets the chance.",
    description:
      "Premium production quality that positions your brand as a market leader through cinematic excellence.",
    cta: "First Shoot at ₹999",
    ctaType: "price",
  },
  {
    icon: "✦",
    title: "BRANDING &\nGRAPHICS",
    quote:
      "A business without a brand is just another option; easily ignored and easily replaced.",
    description:
      "Complete brand identity systems that make you unforgettable in a crowded marketplace.",
    cta: "Full Branding Kit",
    ctaType: "kit",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group relative flex flex-col rounded-2xl p-6 sm:p-8 cursor-default transition-all duration-300 bg-white border border-gray-100"
      style={{
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}
    >
      {/* Hover red glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: "1.5px solid rgba(234,37,37,0.4)",
          boxShadow: "0 0 20px rgba(234,37,37,0.08)",
        }}
      />

      {/* Icon */}
      <div className="text-3xl mb-5">{service.icon}</div>

      {/* Service Title */}
      <h3 className="text-gray-900 font-black text-xl sm:text-2xl leading-tight tracking-wide mb-4 whitespace-pre-line">
        {service.title}
      </h3>

      {/* Divider */}
      <div className="w-10 h-[2px] bg-[#EA2525] mb-4" />

      {/* Pain-point Quote */}
      <p className="text-[#EA2525] text-sm sm:text-base italic leading-relaxed mb-4 font-medium">
        &ldquo;{service.quote}&rdquo;
      </p>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed flex-1">
        {service.description}
      </p>

      {/* CTA Badge */}
      <div className="mt-6">
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide ${
            service.ctaType === "price"
              ? "bg-[#EA2525] text-white"
              : service.ctaType === "guarantee"
              ? "bg-gray-100 text-gray-800 border border-gray-200"
              : "bg-gray-900 text-white"
          }`}
        >
          {service.cta}
        </span>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="w-full py-20 sm:py-28 bg-[#FFF9F9]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(234,37,37,0.04) 1px, transparent 1px),
          linear-gradient(to right, rgba(234,37,37,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#EA2525]/10 border border-[#EA2525]/30 text-[#EA2525] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Digital Marketing Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Everything Your Brand Needs
            <br className="hidden sm:block" />
            <span className="text-[#EA2525]"> to Win Online</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From building your digital presence to running campaigns that
            convert — we do it all, with one promise: results or we don&apos;t
            get paid.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-5">
            Not sure which service fits your business?
          </p>
          <ContactOptionsDialog>
            <button className="bg-[#EA2525] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 text-base">
              Book a Free Strategy Call
            </button>
          </ContactOptionsDialog>
        </div>
      </div>
    </section>
  );
}
