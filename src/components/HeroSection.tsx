"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
        >
          Landing pages, dashboards, and CRMs{" "}
          <span className="gradient-text">delivered in 7–21 days.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          For founders and agencies who need a clean, fast, working product —
          not a template, not a 3-month sprint.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#pricing"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 text-base"
          >
            See pricing
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm sm:text-base text-white/60 mb-12 flex items-center justify-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Now accepting projects for May 2026 — limited slots available.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-sm sm:text-base"
        >
          {[
            "⚡ Fast Delivery",
            "🔒 Secure Code",
            "📱 Fully Responsive",
            "🎨 Premium Design",
            "🚀 SEO Optimized",
          ].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 hover:text-white/90 transition-colors font-medium"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Floating mockup cards — desktop only; mobile Chrome corrupts
            this entire image area on certain devices. */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:block mt-16 relative max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Main mockup image */}
            <div className="glass rounded-2xl p-2 glow-red relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:border-red-500/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-2xl" />
              
              <div className="relative rounded-xl overflow-hidden bg-black/50 border border-white/10">
                {/* Browser-like top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                
                <Image
                  src="/images/idea-digital.png"
                  alt="Digital Studio LF — premium dashboard and CRM product preview"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
                  quality={85}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
