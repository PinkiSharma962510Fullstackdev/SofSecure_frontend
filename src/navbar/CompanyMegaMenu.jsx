import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Briefcase, Layers, Headphones } from "lucide-react";

export default function CompanyMegaMenu({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            fixed top-[96px] left-1/2 -translate-x-1/2
            w-full max-w-[820px]
            rounded-3xl
            bg-[#0b0f14]/95 backdrop-blur-xl
            border border-white/10
            shadow-[0_30px_90px_rgba(0,0,0,0.85)]
            z-[9999]
          "
        >
          <div className="px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Leadership Team */}
            <MenuItem
              label="Leadership Team"
              to="/company/leadership-team"
              icon={Users}
              desc="Meet the experts driving SofSecure forward."
            />

            {/* Our Clients */}
            <MenuItem
              label="Our Clients"
              to="/company/our-clients"
              icon={Briefcase}
              desc="Trusted by organizations across industries."
            />

            {/* Industries */}
            <MenuItem
              label="Industries"
              to="/industries"
              icon={Layers}
              desc="Industry-focused expertise and solutions."
            />

            {/* Support */}
            <MenuItem
              label="Support"
              to="/support"
              icon={Headphones}
              desc="Get help, guidance, and technical assistance."
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= ITEM ================= */

function MenuItem({ label, to, icon: Icon, desc }) {
  return (
    <Link
      to={to}
      className="
        group flex flex-col items-center text-center
        p-6 rounded-2xl
        hover:bg-white/5
        transition
      "
    >
      <div
        className="
          h-12 w-12 mb-4 rounded-xl
          bg-cyan-500/10 text-cyan-400
          flex items-center justify-center
          group-hover:bg-cyan-500
          group-hover:text-black
          transition
        "
      >
        <Icon size={22} />
      </div>

      <p className="text-[15px] font-semibold text-white group-hover:text-cyan-400 transition">
        {label}
      </p>

      <p className="mt-2 text-xs text-gray-400 leading-relaxed">
        {desc}
      </p>
    </Link>
  );
}
