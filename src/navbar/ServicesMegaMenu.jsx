


import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileSearch,
  Lock,
  Scale,
  Zap,
  Users,
  AlertTriangle,
  ClipboardCheck,
  Gavel,
  Building2,
  Leaf,
} from "lucide-react";

/* ===============================
   SERVICES MEGA MENU 
================================ */
const servicesMegaMenu = [
  {
    column: "Audit & Assurance",
    items: [
      { title: "IT Audit Services", desc: "Comprehensive IT risk, control, and compliance assessments.", icon: FileSearch, slug: "/services/it-audit-services" },
      { title: "SOC Reports", desc: "SOC 1, SOC 2 & SOC 3 readiness and reporting.", icon: ClipboardCheck, slug: "/services/soc-reports" },
      { title: "SOX Compliance", desc: "End-to-end Sarbanes-Oxley compliance programs.", icon: Scale, slug: "/services/sox-compliance" },
      { title: "Agile Internal Audit", desc: "Faster, adaptive audit approaches for modern risks.", icon: Zap, slug: "/services/agile-internal-audit" },
    ],
  },
  {
    column: "Cybersecurity & Privacy",
    items: [
      { title: "Cybersecurity Assessment", desc: "Evaluate and strengthen security posture.", icon: ShieldCheck, slug: "/services/cybersecurity-assessment" },
      { title: "Privacy", desc: "Privacy compliance and data protection programs.", icon: Lock, slug: "/services/privacy" },
      { title: "Regulatory Compliance", desc: "Compliance across federal and industry standards.", icon: Gavel, slug: "/services/regulatory-compliance" },
    ],
  },
  {
    column: "Governance & Risk",
    items: [
      { title: "IT Governance & Compliance", desc: "Governance frameworks aligned with strategy.", icon: Building2, slug: "/services/it-governance-compliance" },
      { title: "Enterprise Risk Management", desc: "Connect risk with enterprise objectives.", icon: AlertTriangle, slug: "/services/enterprise-risk-management" },
      { title: "Board & Audit Committee Governance", desc: "Enhanced oversight and strategic alignment.", icon: Users, slug: "/services/board-audit-governance" },
    ],
  },
  {
    column: "Strategy & Sustainability",
    items: [
      { title: "ESG & Sustainability", desc: "End-to-end ESG advisory and assurance services.", icon: Leaf, slug: "/services/esg-sustainability" },
    ],
  },
];

/* ===============================
   SERVICES MEGA MENU — Wider & Flatter
================================ */
export default function ServicesMegaMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`
            absolute top-[130%] left-1/2 -translate-x-1/2
            w-[1080px] max-w-[95vw]           // ← significantly wider
            rounded-2xl md:rounded-3xl
            bg-[#0b0f14]/94 backdrop-blur-xl
            border border-white/10
            shadow-[0_35px_100px_rgba(0,0,0,0.8)]
            z-50 overflow-hidden
          `}
        >
          {/* INNER SPACING — reduced vertical padding */}
          <div className="px-8 py-8 md:px-10 md:py-9 grid grid-cols-4 gap-8 md:gap-10">
            {servicesMegaMenu.map((col, colIndex) => (
              <motion.div
                key={col.column}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.07, duration: 0.35 }}
              >
                {/* COLUMN TITLE */}
                <h4 className="text-[13px] font-semibold uppercase tracking-widest text-cyan-400 mb-4">
                  {col.column}
                </h4>

                {/* SERVICES — tighter spacing */}
                <ul className="space-y-3">
                  {col.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.title}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      >
                        <Link
                          to={item.slug}
                          className="
                            group flex items-start gap-3.5 p-3 rounded-xl
                            hover:bg-white/6 transition-colors duration-200
                          "
                        >
                          {/* ICON — slightly smaller */}
                          <div
                            className="
                              flex h-8 w-8 shrink-0 items-center justify-center
                              rounded-lg bg-cyan-500/10 text-cyan-400
                              group-hover:bg-cyan-500 group-hover:text-black
                              transition-colors duration-200
                            "
                          >
                            <Icon size={17} strokeWidth={2.1} />
                          </div>

                          {/* TEXT */}
                          <div>
                            <p className="text-[14.5px] font-medium text-white group-hover:text-cyan-300 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-[12.5px] text-gray-400/90 leading-tight mt-0.5 line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}