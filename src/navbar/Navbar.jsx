


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import ServicesMegaMenu from "./ServicesMegaMenu";
import CompanyMegaMenu from "./CompanyMegaMenu";

import logo from "/logo/Sofsecure logo.svg";

export default function Navbar() {
  const location = useLocation();

  // DESKTOP STATES
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // MOBILE STATES
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  const servicesActive = location.pathname.startsWith("/services");

  /* ✅ ADD: close mega menus helper */
  const closeMegaMenus = () => {
    setServicesOpen(false);
    setCompanyOpen(false);
  };

  /* ✅ ADD: auto close on route change */
  useEffect(() => {
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [location.pathname]);

  const navClass = ({ isActive }) =>
    `relative font-semibold transition ${
      isActive ? "text-[#30C4C1]" : "text-gray-300 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
            <img src={logo} className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white">
            Sof<span className="text-[#30C4C1]">Secure</span>.
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-8 px-8 py-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/15">

          <nav className="flex items-center gap-6 text-[15px]">
            <NavLink
              to="/"
              end
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>Who we are</NavLink>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 ${
                  servicesActive ? "text-[#30C4C1]" : "text-gray-300"
                }`}
              >
                Services <ChevronDown size={16} />
              </button>

              {/* ✅ UPDATED */}
              <ServicesMegaMenu
                open={servicesOpen}
                onItemClick={closeMegaMenus}
              />
            </div>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300">
                Company <ChevronDown size={16} />
              </button>

              {/* ✅ UPDATED */}
              <CompanyMegaMenu
                open={companyOpen}
                onItemClick={closeMegaMenus}
              />
            </div>

            <NavLink to="/careers" className={navClass}>Careers</NavLink>
          </nav>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-[#30C4C1] text-black font-semibold"
          >
            Contact Us
          </Link>

          <button onClick={() => setSearchOpen(true)} className="text-white">
            <Search size={18} />
          </button>
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ================= SEARCH OVERLAY ================= */}
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
                placeholder="Search services, pages..."
                className="w-full bg-[#0b0f14] border border-white/15 rounded-2xl px-7 py-6 text-xl text-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-[9998]"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[92%] max-w-sm bg-[#0b0f14] z-[9999] flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-lg font-bold text-white">
                  Sof<span className="text-[#30C4C1]">Secure</span>
                </span>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={22} className="text-white" />
                </button>
              </div>

              {/* NAV LINKS */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {["Home", "About", "Careers", "Contact"].map((label) => (
                  <NavLink
                    key={label}
                    to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-white"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
