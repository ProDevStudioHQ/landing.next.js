"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px]" />
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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm text-white/70 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Trusted by 200+ businesses worldwide
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6"
        >
          We Build Digital
          <br />
          <span className="gradient-text">Products That Convert</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium websites, admin dashboards, CRM systems, and login pages — 
          designed to grow your business and impress your users.
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
            View Packages
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="https://github.com/ProDevStudioHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-base"
          >
            See Our Work
          </a>
        </motion.div>

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

        {/* Floating mockup cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Main mockup card */}
            <div className="glass rounded-2xl p-1 glow-red">
              <div className="bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 h-6 bg-white/5 rounded-full ml-4 max-w-xs" />
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="col-span-1 space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="h-3 bg-white/5 rounded-full"
                        style={{ width: `${[80, 65, 75, 70, 85][i - 1]}%` }}
                      />
                    ))}
                  </div>
                  <div className="col-span-2 grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] bg-white/[0.03] rounded-xl border border-white/5 flex items-center justify-center"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${
                            i === 1
                              ? "bg-primary/20"
                              : i === 2
                              ? "bg-blue-500/20"
                              : i === 3
                              ? "bg-green-500/20"
                              : "bg-purple-500/20"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating side cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-8 top-1/4 glass rounded-xl p-3 sm:p-4 hidden sm:block"
            >
              <div className="flex items-center gap-2 text-xs text-white/60">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-white">+127%</div>
                  <div>Conversion Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -right-4 sm:-right-8 top-1/3 glass rounded-xl p-3 sm:p-4 hidden sm:block"
            >
              <div className="flex items-center gap-2 text-xs text-white/60">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  ★
                </div>
                <div>
                  <div className="font-semibold text-white">4.9/5</div>
                  <div>Client Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
