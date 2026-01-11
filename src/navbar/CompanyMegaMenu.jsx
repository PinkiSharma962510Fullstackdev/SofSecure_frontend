import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Briefcase, Phone } from "lucide-react";

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
            w-full max-w-[720px]
            rounded-3xl
            bg-[#0b0f14]/95 backdrop-blur-xl
            border border-white/10
            shadow-[0_30px_90px_rgba(0,0,0,0.85)]
            z-[9999]
          "
        >
          <div className="px-8 py-6 grid grid-cols-3 gap-7">
            {[
              { label: "About", to: "/about", icon: Users },
              { label: "Careers", to: "/careers", icon: Briefcase },
              { label: "Contact", to: "/contact", icon: Phone },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex flex-col items-center min-h-[120px] p-5 rounded-2xl hover:bg-white/5 transition"
                >
                  <div className="h-11 w-11 mb-4 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition">
                    <Icon size={20} />
                  </div>
                  <p className="text-[15px] font-semibold text-white group-hover:text-cyan-400">
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
