"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaRocket,
  FaBuilding,
  FaGlobe,
  FaUser,
  FaChartLine,
  FaCartShopping,
  FaSliders,
} from "react-icons/fa6";

const audiences = [
  {
    title: "Small Businesses",
    description:
      "Build a professional website or system to present your services, attract more clients, and grow your brand online.",
    icon: FaBriefcase,
    color: "#3B82F6",
  },
  {
    title: "Startups",
    description:
      "Launch with a modern landing page, dashboard, CRM, or login system that gives your product a strong and trusted first impression.",
    icon: FaRocket,
    color: "#EC4899",
  },
  {
    title: "Agencies",
    description:
      "Deliver premium websites, dashboards, and CRM solutions for your clients with a modern and scalable design approach.",
    icon: FaBuilding,
    color: "#8B5CF6",
  },
  {
    title: "Travel Agencies",
    description:
      "Manage leads, bookings, clients, and services with a clean CRM and a professional website that reflects your business.",
    icon: FaGlobe,
    color: "#06B6D4",
  },
  {
    title: "Freelancers & Consultants",
    description:
      "Showcase your services, manage your workflow, and build a strong digital identity with a premium website or dashboard.",
    icon: FaUser,
    color: "#10B981",
  },
  {
    title: "SaaS Founders",
    description:
      "Create a modern interface for your product with professional login pages, dashboards, and user-friendly digital experiences.",
    icon: FaChartLine,
    color: "#F59E0B",
  },
  {
    title: "E-commerce Brands",
    description:
      "Improve your online presence with high-converting landing pages, admin dashboards, and custom business tools.",
    icon: FaCartShopping,
    color: "#EF4444",
  },
  {
    title: "Companies Needing Better Workflow",
    description:
      "Organize operations, client communication, internal data, and performance with custom dashboards and CRM systems.",
    icon: FaSliders,
    color: "#06B6D4",
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            For Everyone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Who Is This Service{" "}
            <span className="gradient-text">For?</span>
          </h2>
          <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
            Our services are designed for businesses, agencies, startups, and
            professionals who want a modern digital presence, better client
            management, and premium user experience.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-500 cursor-pointer hover:bg-white/[0.08]"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20"
                  style={{ backgroundColor: audience.color }}
                />
              </div>

              {/* Icon */}
              <div className="relative mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${audience.color}20` }}
                >
                  <audience.icon
                    size={24}
                    style={{ color: audience.color }}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed">
                {audience.description}
              </p>

              {/* Accent line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: audience.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="group relative mt-12 text-center overflow-hidden rounded-3xl p-12 border border-primary/20 backdrop-blur-md"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Animated glow effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 animate-pulse delay-1000" />

          <div className="relative z-10">
            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                <span className="inline-block">Everything You Need</span>
              </h3>
            </motion.div>

            {/* Animated text with staggered reveals */}
            <motion.div
              className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto space-y-4"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Whether you need a{" "}
                <motion.span
                  className="inline-block font-bold px-2 py-1 rounded-lg bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  premium website
                </motion.span>
                , a{" "}
                <motion.span
                  className="inline-block font-bold px-2 py-1 rounded-lg bg-gradient-to-r from-violet-400 via-purple-300 to-violet-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  modern dashboard
                </motion.span>
                , a{" "}
                <motion.span
                  className="inline-block font-bold px-2 py-1 rounded-lg bg-gradient-to-r from-pink-400 via-rose-300 to-pink-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  custom CRM
                </motion.span>
                , or a{" "}
                <motion.span
                  className="inline-block font-bold px-2 py-1 rounded-lg bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  powerful login page
                </motion.span>
                ,
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="text-xl font-light tracking-wide"
              >
                this service is built to help you{" "}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent font-black text-2xl">
                    look professional
                  </span>
                </motion.span>
                ,{" "}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-black text-2xl">
                    work smarter
                  </span>
                </motion.span>
                , and{" "}
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 bg-clip-text text-transparent font-black text-2xl">
                    grow faster
                  </span>
                </motion.span>
                .
              </motion.p>
            </motion.div>

            {/* CTA Button with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="mt-10"
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block group/btn"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover/btn:opacity-100 transition duration-500 animate-pulse" />
                <button className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
                  <span>✨ Get Started Today</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
