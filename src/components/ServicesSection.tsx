"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description:
      "Stunning, fast-loading websites that represent your brand and convert visitors into customers. Fully responsive with SEO optimization.",
    features: ["Custom Design", "SEO Optimized", "Fast Loading", "Mobile First"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: "📊",
    title: "Admin Dashboards",
    description:
      "Powerful, data-rich admin panels with real-time analytics, user management, and intuitive navigation for complete control.",
    features: ["Real-time Data", "User Management", "Analytics", "Role-based Access"],
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: "🤝",
    title: "CRM Systems",
    description:
      "Custom CRM platforms that help you manage leads, track interactions, automate follow-ups, and grow your revenue.",
    features: ["Lead Tracking", "Pipeline Management", "Auto Follow-ups", "Reports"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: "🔐",
    title: "Login & Auth Pages",
    description:
      "Secure, beautiful authentication systems with social login, 2FA, and seamless user onboarding experiences.",
    features: ["Social Login", "Two-Factor Auth", "Password Recovery", "OAuth 2.0"],
    color: "from-purple-500/20 to-purple-500/5",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Digital Solutions That{" "}
            <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From concept to launch, we craft premium digital products tailored
            to your business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 overflow-hidden glass-hover"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60 border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
