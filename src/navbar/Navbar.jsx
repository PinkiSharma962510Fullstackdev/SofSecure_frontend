import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import ServicesMegaMenu from "./ServicesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-white">
          Sof<span className="text-[#30C4C1]">Secure</span>
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <nav className="flex items-center gap-6 text-[15.5px] font-semibold text-gray-200">

            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-white">
                Services <ChevronDown size={16} />
              </button>
              <ServicesMegaMenu open={servicesOpen} />
            </div>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-white">
                Company <ChevronDown size={16} />
              </button>
              <CompanyMegaMenu open={companyOpen} />
            </div>

            <Link to="/careers" className="hover:text-white">Careers</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold hover:scale-105 transition"
          >
            Contact Us
          </Link>

          {/* SEARCH */}
          <button onClick={() => setSearchOpen(true)} className="text-white">
            <Search size={18} />
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* SEARCH OVERLAY */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[9999] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-0 -top-14 text-white"
              >
                <X size={28} />
              </button>

              <input
                autoFocus
                placeholder="Search services, audits, compliance..."
                className="w-full bg-[#0b0f14] border border-white/15 rounded-2xl px-7 py-6 text-xl text-white focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

     
    
    {/* MOBILE DRAWER */}
{/* MOBILE DRAWER */}
<AnimatePresence>
  {mobileOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 bg-black/70 z-[9998]"
      />

      {/* DRAWER */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 right-0 h-full w-[88%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-xl font-bold text-white">
            Sof<span className="text-[#30C4C1]">Secure</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* CONTENT (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-white">

          {/* SEARCH */}
          <input
            placeholder="Search services..."
            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#30C4C1]/40"
          />

          {/* BASIC LINKS */}
          <Link to="/" onClick={() => setMobileOpen(false)} className="block">
            Home
          </Link>

          <Link to="/about" onClick={() => setMobileOpen(false)} className="block">
            About
          </Link>

          {/* SERVICES */}
          <div>
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="flex w-full items-center justify-between text-[17px] font-semibold py-2"
            >
              Services
              <ChevronDown
                className={`transition ${
                  mobileServices ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {mobileServices && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 ml-3 space-y-2"
                >
                  {[
                    { label: "IT Audit Services", to: "/services/it-audit-services" },
                    { label: "SOC Reports", to: "/services/soc-reports" },
                    { label: "SOX Compliance", to: "/services/sox-compliance" },
                    { label: "Agile Internal Audit", to: "/services/agile-internal-audit" },
                    { label: "Cybersecurity Assessment", to: "/services/cybersecurity-assessment" },
                    { label: "Privacy", to: "/services/privacy" },
                    { label: "Regulatory Compliance", to: "/services/regulatory-compliance" },
                    { label: "IT Governance & Compliance", to: "/services/it-governance-compliance" },
                    { label: "Enterprise Risk Management", to: "/services/enterprise-risk-management" },
                    { label: "Board & Audit Committee Governance", to: "/services/board-audit-governance" },
                    { label: "ESG & Sustainability", to: "/services/esg-sustainability" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="
                        block px-3 py-2 rounded-lg
                        text-sm text-gray-300
                        hover:bg-white/5 hover:text-white
                        transition
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COMPANY */}
          <div>
            <button
              onClick={() => setMobileCompany(!mobileCompany)}
              className="flex w-full items-center justify-between text-[17px] font-semibold py-2"
            >
              Company
              <ChevronDown
                className={`transition ${
                  mobileCompany ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {mobileCompany && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-3 ml-3 space-y-2"
                >
                  <Link to="/about" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg">
                    About
                  </Link>
                  <Link to="/careers" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg">
                    Careers
                  </Link>
                  <Link to="/contact" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg">
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/careers" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          {/* CONTACT US CTA (SCROLLABLE, FINAL) */}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="
              mt-6 block w-full text-center
              bg-[#30C4C1] text-black
              py-3 rounded-full
              font-semibold
            "
          >
            Contact Us
          </Link>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>



    </header>
  );
}
