"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Our standard timeline is 7-21 days depending on the package. Starter packages are delivered in 7 days, Professional in 14 days, and Enterprise projects in 21 days. Rush delivery is available for an additional fee.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! All packages include a free support period (7-90 days depending on the plan). After that, we offer affordable monthly maintenance plans starting at $49/month.",
  },
  {
    question: "Can I request changes after the project is delivered?",
    answer:
      "Absolutely. Starter includes 2 revision rounds, Professional offers unlimited revisions, and Enterprise includes unlimited revisions plus 90 days of free changes.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, TypeScript, Tailwind CSS, Node.js, and PostgreSQL. All our products are built with performance, security, and scalability in mind.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes, we understand that every business is unique. Contact us to discuss your specific requirements and we'll create a custom proposal tailored to your needs and budget.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Every website we build includes SEO optimization — from proper meta tags and semantic HTML to fast load times and mobile responsiveness. Professional and Enterprise packages include comprehensive SEO strategy.",
  },
  {
    question: "Can you integrate with my existing tools?",
    answer:
      "Yes! We support integrations with popular tools like Gmail, Stripe, PayPal, Mailchimp, HubSpot, Slack, Zapier, and many more. Check our integrations section for the full list.",
  },
];

function FAQItem({
  faq,
  isOpen,
  toggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
        isOpen ? "border-primary/30" : "hover:border-white/10"
      } glass-hover`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-white font-semibold pr-4">{faq.question}</span>
        <span
          className={`text-primary transition-transform duration-300 flex-shrink-0 text-xl ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Got{" "}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Everything you need to know about our services and process.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
