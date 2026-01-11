import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does your company provide?",
    answer:
      "We provide a comprehensive range of governance, risk, and compliance services including IT Audit Services, SOC Reports, SOX Compliance, Cybersecurity Assessment, Privacy & Data Protection, Regulatory Compliance, Enterprise Risk Management, Board & Audit Committee Governance, and ESG & Sustainability advisory services.",
  },
  {
    question: "Why are IT audit and compliance services important for businesses?",
    answer:
      "IT audit and compliance services help organizations identify risks, strengthen internal controls, ensure regulatory compliance, and protect sensitive data. They also provide stakeholders with confidence that systems and processes are operating effectively.",
  },
  {
    question: "How do your services support better business decision-making?",
    answer:
      "Our services deliver actionable insights into risks, controls, and governance practices. By aligning risk management with business objectives, we enable leadership teams to make informed and confident strategic decisions.",
  },
  {
    question: "Do you work with startups as well as large enterprises?",
    answer:
      "Yes, we work with organizations of all sizes, from startups to large enterprises. Our approach is scalable and tailored to each client’s industry, size, and regulatory requirements.",
  },
  {
    question: "How do you ensure a customized approach for each client?",
    answer:
      "We begin by understanding your business model, industry, regulatory environment, and risk profile. Our solutions are practical, customized, and aligned with your strategic goals rather than generic frameworks.",
  },
  {
    question: "How can we get started with your services?",
    answer:
      "You can get started by contacting us through our website. Our team will schedule an initial discussion to understand your requirements and recommend the most suitable services.",
  },
];

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#0b0f14] text-white py-28 px-6">
      

      <div className="mx-auto max-w-7xl  px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services, approach,
            and how we help organizations manage risk and compliance.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 
                             text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-6 pb-6 text-gray-300 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
