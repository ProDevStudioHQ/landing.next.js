"use client";

import { motion } from "framer-motion";

const featureGroups = [
  {
    category: "Websites",
    icon: "🌐",
    features: [
      "Custom responsive design tailored to your brand",
      "SEO optimization for higher search engine rankings",
      "Lightning-fast load times with optimized assets",
      "Content management system for easy updates",
      "Contact forms, maps, and live chat integration",
      "SSL security and GDPR compliance",
    ],
  },
  {
    category: "Dashboards",
    icon: "📊",
    features: [
      "Interactive charts and real-time data visualization",
      "Role-based access control and permissions",
      "Customizable widgets and drag-and-drop layouts",
      "Export reports to PDF, Excel, and CSV",
      "Activity logs and audit trails",
      "Dark and light mode support",
    ],
  },
  {
    category: "CRM Systems",
    icon: "🤝",
    features: [
      "Contact and lead management with scoring",
      "Sales pipeline with drag-and-drop stages",
      "Automated email sequences and follow-ups",
      "Task assignments and team collaboration",
      "Revenue forecasting and analytics",
      "Third-party integrations (email, calendar, etc.)",
    ],
  },
  {
    category: "Login Pages",
    icon: "🔐",
    features: [
      "Beautiful, branded authentication UI",
      "Social login (Google, GitHub, Facebook)",
      "Two-factor authentication (2FA)",
      "Magic link and passwordless login",
      "Session management and security",
      "Custom onboarding flows",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Everything You Need,{" "}
            <span className="gradient-text">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Each product comes packed with powerful features — built for
            performance, security, and scale.
          </p>
        </motion.div>

        {/* Feature groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {featureGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 hover:border-primary/20 transition-all duration-500 glass-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-xl font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/50"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
