

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileText,
  Activity,
  Layers,
  Briefcase,
  Users,
  TrendingUp,
  Leaf,
  Lock,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "IT Audit Services",
    desc: "Comprehensive assessment of IT infrastructure to identify risks, vulnerabilities, and compliance gaps with actionable recommendations.",
    icon: ShieldCheck,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/it-audit-services",
  },
  {
    title: "SOC Reports",
    desc: "Preparation and examination of SOC 1, SOC 2, and SOC 3 reports ensuring control effectiveness and compliance.",
    icon: FileText,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/soc-reports",
  },
  {
    title: "Cybersecurity Assessment",
    desc: "Evaluation of cybersecurity posture with tailored solutions to protect critical data and systems.",
    icon: Activity,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/cybersecurity-assessment",
  },
  {
    title: "IT Governance & Compliance",
    desc: "Governance frameworks and compliance programs aligned with regulatory and business objectives.",
    icon: Layers,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/it-governance-compliance",
  },
  {
    title: "Agile Internal Audit",
    desc: "Practical agile audit approaches enabling faster response to changing risks.",
    icon: Briefcase,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/agile-internal-audit",
  },
  {
    title: "Board & Audit Committee Governance",
    desc: "Enhanced governance practices to strengthen oversight and strategic alignment.",
    icon: Users,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/board-audit-governance",
  },
  {
    title: "Enterprise Risk Management",
    desc: "Risk solutions connecting risk and opportunity with enterprise strategy.",
    icon: TrendingUp,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/enterprise-risk-management",
  },
  {
    title: "ESG & Sustainability",
    desc: "End-to-end ESG and sustainability advisory and assurance services.",
    icon: Leaf,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/esg-sustainability",
  },
  {
    title: "Privacy",
    desc: "Robust privacy programs addressing compliance, legal, and reputational risks.",
    icon: Lock,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/privacy",
  },
  {
    title: "Regulatory Compliance",
    desc: "Strengthening regulatory compliance across federal, state, and industry requirements.",
    icon: ClipboardCheck,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/regulatory-compliance",
  },
  {
    title: "SOX Compliance",
    desc: "Efficient and effective Sarbanes-Oxley compliance programs.",
    icon: BarChart3,
    image: "/heroSection/IT_Audit_Services.webp",
    slug: "/services/sox-compliance",
  },
];


export default function EnterpriseServices() {
  return (
    <section className="relative bg-[#0b0f14] text-white py-32 overflow-hidden">

      {/* GLOBAL AMBIENT GLOW */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#30C4C1]/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl  px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services
          </h2>
          <p className="text-gray-400 text-lg">
            Navigating challenges and maximizing opportunities with
            enterprise-grade IT audit, risk, compliance, and cybersecurity services.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                    isReverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
                </motion.div>

                {/* CONTENT CARD */}
                <Link
  to={service.slug}
  className={`block ${isReverse ? "lg:order-1" : "lg:order-2"}`}
>
  <motion.div
    whileHover={{ x: isReverse ? -8 : 8 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="
      group relative rounded-3xl p-12 overflow-hidden
      bg-gradient-to-br from-[#121a22] via-[#0f1f26] to-[#0b0f14]
      border border-white/10
      shadow-[0_25px_80px_rgba(0,0,0,0.6)]
      cursor-pointer
    "
  >
    {/* CARD GLOW */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#30C4C1]/30 rounded-full blur-[140px]" />
    </div>

    <div className="relative z-10">
      <Icon className="w-12 h-12 text-[#30C4C1] mb-6" />

      <h3 className="text-2xl font-semibold mb-4">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-base mb-8">
        {service.desc}
      </p>

      {/* READ MORE BUTTON */}
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full
        bg-[#30C4C1] text-black text-sm font-semibold
        group-hover:scale-105 transition">
        Read More
        <span className="text-lg">→</span>
      </div>
    </div>
  </motion.div>
</Link>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
