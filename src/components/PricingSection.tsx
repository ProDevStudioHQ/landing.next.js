"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { getKnownEmail, submitLead } from "@/lib/crm";

const PROJECT_TYPES = ["Landing Page", "Website", "Dashboard", "CRM"];
function planToProjectType(planName: string): string {
  const lc = planName.toLowerCase();
  return PROJECT_TYPES.find((p) => lc.includes(p.toLowerCase())) || "Other";
}
import {
  HiOutlineGlobeAlt,
  HiOutlineChartBarSquare,
  HiOutlineBolt,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

type Plan = {
  name: string;
  oldPrice: string;
  price: string;
  priceValue: number;
  description: string;
  icon: IconType;
  category: "starter" | "growth" | "enterprise";
  features: string[];
  bestFor: string;
  color: string;
  accentColor: string;
  highlighted: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

const pricingPlans: Plan[] = [
  {
    name: "Landing Page",
    oldPrice: "",
    price: "$250",
    priceValue: 250,
    description: "Starting from",
    icon: HiOutlineBolt,
    category: "starter",
    features: [
      "High-converting landing page",
      "Custom design tailored to your brand",
      "Mobile responsive",
      "Lead capture form",
      "Speed optimized",
      "SEO basics",
    ],
    bestFor: "Product launches, lead generation, marketing campaigns",
    color: "from-teal-500 to-cyan-500",
    accentColor: "teal",
    highlighted: false,
  },
  {
    name: "Website",
    oldPrice: "",
    price: "$700",
    priceValue: 700,
    description: "Starting from",
    icon: HiOutlineGlobeAlt,
    category: "growth",
    features: [
      "Modern business website (5–7 pages)",
      "Responsive design",
      "Premium landing page structure",
      "Contact form",
      "Service sections",
      "Mobile optimization",
      "Basic SEO structure",
    ],
    bestFor: "Businesses, agencies, freelancers, startups",
    color: "from-violet-500 to-purple-500",
    accentColor: "violet",
    highlighted: true,
  },
  {
    name: "Dashboard or CRM",
    oldPrice: "",
    price: "$1,200+",
    priceValue: 1200,
    description: "Starting from",
    icon: HiOutlineChartBarSquare,
    category: "growth",
    features: [
      "Admin dashboard or CRM build",
      "Sidebar nav + role-based access",
      "Charts, tables, and pipelines",
      "Lead / client management",
      "Custom modules per business",
      "Modern responsive UI",
    ],
    bestFor: "Agencies, internal tools, sales teams, service businesses",
    color: "from-indigo-500 to-violet-500",
    accentColor: "indigo",
    highlighted: false,
  },
];

const accentMap: Record<
  string,
  { check: string; ring: string; border: string; text: string; bg: string }
> = {
  blue: {
    check: "text-blue-400",
    ring: "ring-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  teal: {
    check: "text-teal-400",
    ring: "ring-teal-500/20",
    border: "border-teal-500/30",
    text: "text-teal-400",
    bg: "bg-teal-500/10",
  },
  violet: {
    check: "text-violet-400",
    ring: "ring-violet-500/20",
    border: "border-violet-500/30",
    text: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  indigo: {
    check: "text-indigo-400",
    ring: "ring-indigo-500/20",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  emerald: {
    check: "text-emerald-400",
    ring: "ring-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  orange: {
    check: "text-orange-400",
    ring: "ring-orange-500/20",
    border: "border-orange-500/30",
    text: "text-orange-400",
    bg: "bg-orange-500/10",
  },
};

export default function PricingSection() {
  const handleChoosePlan = (plan: Plan) => {
    const planLabel = `${plan.name} — ${plan.price}`;
    const projectType = planToProjectType(plan.name);

    const email = getKnownEmail();
    if (email) {
      void submitLead({
        email,
        source: "pricing_cta",
        planInterest: planLabel,
        projectType: planLabel,
      });
    }

    // Pre-fill contact form via URL hash, then scroll
    window.location.hash = `contact?plan=${encodeURIComponent(projectType)}`;
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-violet-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-500/[0.015] rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Simple{" "}
            <span className="gradient-text">project pricing</span>
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            Three flat-priced packages covering 90% of projects. Pick one, or
            request a custom quote for anything else.
          </p>
        </motion.div>

        {/* Launch Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div
            style={{
              background: "linear-gradient(90deg, #5B2C87, #0EA5A4)",
              borderRadius: "10px",
              padding: "14px 24px",
              maxWidth: "700px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                margin: 0,
              }}
              className="text-[13px] sm:text-[15px]"
            >
              Free 30-min consultation — no commitment.
            </p>
          </div>
        </motion.div>


        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-8 items-stretch">
          {pricingPlans.map((plan, i) => {
              const accent = accentMap[plan.accentColor] || accentMap.indigo;
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative flex"
                >
                  {/* Highlighted outer glow */}
                  {plan.highlighted && (
                    <div className="absolute -inset-[1.5px] rounded-[20px] bg-gradient-to-b from-violet-500 via-purple-400/50 to-violet-500/80 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  )}

                  {/* Featured badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-bold tracking-[0.15em] uppercase shadow-xl shadow-violet-500/40">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Card */}
                  <div
                    className={`relative w-full rounded-[20px] flex flex-col transition-all duration-400 ease-out overflow-hidden ${
                      plan.highlighted
                        ? "bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-violet-500/30 shadow-2xl shadow-violet-500/[0.08]"
                        : "bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/[0.07] hover:border-white/[0.15] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/[0.04]"
                    }`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`h-[2px] w-full bg-gradient-to-r ${plan.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Card body */}
                    <div className="p-6 sm:p-7 lg:p-7 xl:p-6 2xl:p-7 flex flex-col flex-1">
                      {/* Icon + Label */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ${accent.bg} ${accent.border}`}
                        >
                          <Icon className={`w-5 h-5 ${accent.text}`} />
                        </div>
                        {plan.highlighted && (
                          <span className="text-[10px] font-bold text-violet-300 bg-violet-500/15 px-2 py-1 rounded-md border border-violet-500/30 uppercase tracking-wider">
                            Most Popular
                          </span>
                        )}
                      </div>

                      {/* Plan Name */}
                      <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">
                        {plan.name}
                      </p>

                      {/* PRICE BLOCK */}
                      <div className="mb-6">
                        <div className="flex items-end gap-2">
                          <span
                            className={`text-[2.75rem] sm:text-[3rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[2.5rem] 2xl:text-[3rem] font-black leading-[0.9] tracking-tight ${
                              plan.highlighted
                                ? "bg-gradient-to-br from-white via-white to-violet-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                                : "text-white"
                            }`}
                          >
                            {plan.price}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-white/30 font-medium mt-2 tracking-wider uppercase">
                          {plan.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                      {/* Best For badge */}
                      <div
                        className={`mb-5 p-3 rounded-xl bg-white/[0.03] ring-1 ${accent.ring}`}
                      >
                        <p className="text-[9px] font-bold text-white/30 tracking-[0.2em] uppercase mb-1">
                          Best for
                        </p>
                        <p className="text-[12px] sm:text-[13px] leading-relaxed text-white/60">
                          {plan.bestFor}
                        </p>
                      </div>

                      {/* Features list */}
                      <div className="mb-7 flex-1">
                        <p className="text-[9px] font-bold text-white/30 uppercase mb-3.5 tracking-[0.2em]">
                          Includes
                        </p>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-[12px] sm:text-[13px] leading-relaxed"
                            >
                              <span className={`mt-[3px] flex-shrink-0 ${accent.check}`}>
                                <FaCheck size={10} />
                              </span>
                              <span className="text-white/55 group-hover:text-white/70 transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <button
                        type="button"
                        onClick={() => handleChoosePlan(plan)}
                        className={`mt-auto w-full py-3 sm:py-3.5 rounded-xl font-semibold text-center text-sm tracking-wide transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2 ${
                          plan.highlighted
                            ? `bg-gradient-to-r ${plan.color} text-white shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30`
                            : "bg-white/[0.05] text-white/80 border border-white/[0.08] hover:bg-white/[0.1] hover:text-white hover:border-white/20"
                        }`}
                      >
                        <span>Choose Plan</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Custom quote link */}
        <p className="text-center text-white/60 text-sm mb-12">
          Need something bigger?{" "}
          <a
            href="#contact"
            className="text-primary hover:text-primary-light underline-offset-4 hover:underline font-medium"
          >
            Request a custom quote →
          </a>
        </p>

        {/* What's Not Included — transparency note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center italic text-white/40 text-[13px] max-w-[700px] mx-auto mb-16 leading-relaxed"
        >
          Note: All packages include 30 days of free post-launch support for bug
          fixes. Hosting, domain, and third-party tool fees are not included.
          Custom integrations and advanced features may require additional scope
          review.
        </motion.p>

        {/* Closing CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[20px] bg-gradient-to-b from-white/[0.04] to-white/[0.015] border border-white/[0.08] p-8 md:p-12 text-center hover:border-white/[0.15] transition-all duration-400"
        >
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6">
            Flexible &amp; Tailored
          </h3>
          <p className="text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed text-base sm:text-base md:text-lg lg:text-lg">
            These are starting prices for our most common packages. Final pricing
            is tailored to your specific scope, integrations, number of pages or
            modules, and design complexity. Get a custom quote with a free
            30-minute consultation — no commitment required.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="#contact"
              className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base md:text-lg"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
