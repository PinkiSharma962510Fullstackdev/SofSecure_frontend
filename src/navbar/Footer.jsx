// import { Facebook, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0b0f14] text-gray-400 border-t border-white/10">

//       {/* MAIN */}
//       <div className="max-w-[1400px] mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

//           {/* STAY CONNECTED */}
//           <div>
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Stay Connected
//             </h3>

//             <div className="space-y-6 text-sm leading-relaxed">
//               <div>
//                 <p className="text-white font-medium mb-1">India</p>
//                 <p>
//                   Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower,  
//                   Sector-54, Gurugram, Haryana 122011
//                 </p>
//                 <p className="mt-1">Phone: +91-8527611337</p>
//               </div>

//               <div>
//                 <p className="text-white font-medium mb-1">United Kingdom</p>
//                 <p>
//                   15 Great Queen Street, London WC2B 5TD
//                 </p>
//                 <p className="mt-1">Phone: +44-7549842444</p>
//               </div>

//               <div>
//                 <p className="text-white font-medium mb-1">
//                   United States of America
//                 </p>
//                 <p>
//                   770 Pasquinelli Drive, Suite 424,  
//                   Westmont, IL 60559
//                 </p>
//                 <p className="mt-1">Phone: +1-8527611337</p>
//                 <p className="mt-1">Email:  www.sofsecure.com</p>
//               </div>
//             </div>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Company
//             </h4>
//             <ul className="space-y-3 text-sm">
//               {["Home", "Contact Us", "Services", "Careers", "Submit RFP"].map(
//                 (item) => (
//                   <li
//                     key={item}
//                     className="hover:text-[#30C4C1] transition cursor-pointer"
//                   >
//                     {item}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* LEGAL */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Legal
//             </h4>
//             <ul className="space-y-3 text-sm">
//               {[
//                 "Locations",
//                 "Industries",
//                 "Terms of Service",
//                 "Privacy Policy",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="hover:text-[#30C4C1] transition cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* SOCIAL */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Our Social Networks
//             </h4>
//             <div className="flex gap-4">
//               <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
//                 <Facebook size={18} />
//               </a>
//               <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10 py-6 text-sm">
//         <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
//           <p>
//             Designed by{" "}
//             <span className="text-[#30C4C1] font-medium">
//               GreaterTechHub
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import { Facebook, Instagram } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0b0f14] text-gray-400 border-t border-white/10">

//       {/* ================= MAIN ================= */}
//       <div className="max-w-[1400px] mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

//           {/* ================= CONTACT / ADDRESS ================= */}
//           <div className="lg:col-span-2">
//             <h3 className="text-2xl font-semibold text-white mb-6">
//               Stay Connected
//             </h3>

//             <div className="space-y-6 text-sm leading-relaxed">
//               <div>
//                 <p className="text-white font-medium mb-1">India</p>
//                 <p>
//                   Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower,  
//                   Sector-54, Gurugram, Haryana 122011
//                 </p>
//                 <p className="mt-1">Phone: +91-8527611337</p>
//               </div>

//               <div>
//                 <p className="text-white font-medium mb-1">United Kingdom</p>
//                 <p>15 Great Queen Street, London WC2B 5TD</p>
//                 <p className="mt-1">Phone: +44-7549842444</p>
//               </div>

//               <div>
//                 <p className="text-white font-medium mb-1">United States</p>
//                 <p>
//                   770 Pasquinelli Drive, Suite 424,  
//                   Westmont, IL 60559
//                 </p>
//                 <p className="mt-1">Phone: +1-8527611337</p>
//                 <p className="mt-1">Email: info@sofsecure.com</p>
//               </div>
//             </div>
//           </div>

//           {/* ================= QUICK LINKS (NAVBAR MAIN) ================= */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Quick Links
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link to="/" className="hover:text-[#30C4C1]">Home</Link></li>
//               <li><Link to="/about" className="hover:text-[#30C4C1]">About</Link></li>
//               <li><Link to="/services" className="hover:text-[#30C4C1]">Services</Link></li>
//               <li><Link to="/careers" className="hover:text-[#30C4C1]">Careers</Link></li>
//               <li><Link to="/contact" className="hover:text-[#30C4C1]">Contact</Link></li>
//             </ul>
//           </div>

//           {/* ================= COMPANY (MEGA MENU MATCH) ================= */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Company
//             </h4>
//             <ul className="space-y-3 text-sm">
//               <li><Link to="/company/leadership-team" className="hover:text-[#30C4C1]">Leadership Team</Link></li>
//               <li><Link to="/company/our-clients" className="hover:text-[#30C4C1]">Our Clients</Link></li>
//               <li><Link to="/industries" className="hover:text-[#30C4C1]">Industries</Link></li>
//               <li><Link to="/support" className="hover:text-[#30C4C1]">Support</Link></li>
//             </ul>
//           </div>

//           {/* ================= SERVICES (GROUPED SAME AS MEGA MENU) ================= */}
//           <div>
//             <h4 className="text-lg font-semibold text-white mb-6">
//               Services
//             </h4>

//             <ul className="space-y-5 text-sm">

//               <li>
//                 <p className="text-gray-500 uppercase text-xs mb-2">Audit & Assurance</p>
//                 <ul className="space-y-1">
//                   <li><Link to="/services/it-audit-services" className="hover:text-[#30C4C1]">IT Audit Services</Link></li>
//                   <li><Link to="/services/soc-reports" className="hover:text-[#30C4C1]">SOC Reports</Link></li>
//                   <li><Link to="/services/sox-compliance" className="hover:text-[#30C4C1]">SOX Compliance</Link></li>
//                   <li><Link to="/services/agile-internal-audit" className="hover:text-[#30C4C1]">Agile Internal Audit</Link></li>
//                 </ul>
//               </li>

//               <li>
//                 <p className="text-gray-500 uppercase text-xs mb-2">Cybersecurity & Privacy</p>
//                 <ul className="space-y-1">
//                   <li><Link to="/services/cybersecurity-assessment" className="hover:text-[#30C4C1]">Cybersecurity Assessment</Link></li>
//                   <li><Link to="/services/privacy" className="hover:text-[#30C4C1]">Privacy</Link></li>
//                   <li><Link to="/services/regulatory-compliance" className="hover:text-[#30C4C1]">Regulatory Compliance</Link></li>
//                 </ul>
//               </li>

//               <li>
//                 <p className="text-gray-500 uppercase text-xs mb-2">Governance & Risk</p>
//                 <ul className="space-y-1">
//                   <li><Link to="/services/it-governance-compliance" className="hover:text-[#30C4C1]">IT Governance & Compliance</Link></li>
//                   <li><Link to="/services/enterprise-risk-management" className="hover:text-[#30C4C1]">Enterprise Risk Management</Link></li>
//                   <li><Link to="/services/board-audit-governance" className="hover:text-[#30C4C1]">Board & Audit Committee Governance</Link></li>
//                 </ul>
//               </li>

//               <li>
//                 <p className="text-gray-500 uppercase text-xs mb-2">Strategy & Sustainability</p>
//                 <ul>
//                   <li><Link to="/services/esg-sustainability" className="hover:text-[#30C4C1]">ESG & Sustainability</Link></li>
//                 </ul>
//               </li>

//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="border-t border-white/10 py-6 text-sm">
//         <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
//           <div className="flex items-center gap-4">
//             <a className="hover:text-[#30C4C1]"><Facebook size={18} /></a>
//             <a className="hover:text-[#30C4C1]"><Instagram size={18} /></a>
//           </div>
//         </div>
//       </div>

//     </footer>
//   );
// }

// import { Facebook, Instagram } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#0b0f14] text-gray-400 border-t border-white/10 overflow-hidden">

//   {/* SOFT BACKGROUND GLOW */}
//   <div className="absolute inset-0 pointer-events-none">
//     <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#30C4C1]/10 blur-[140px]" />
//     <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />
//   </div>

//   {/* ================= MAIN ================= */}
//   <div className="relative max-w-[1400px] mx-auto px-6 py-20">
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

//       {/* ================= BRAND + CONTACT (CARD) ================= */}
//       <div className="lg:col-span-4">
//         <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">

//           {/* BRAND */}
//           <div>
//             <h3 className="text-2xl font-semibold text-white">
//               Sof<span className="text-[#30C4C1]">Secure</span>
//             </h3>
//             <p className="mt-4 text-sm leading-relaxed text-gray-400">
//               SofSecure helps organizations manage risk, strengthen compliance,
//               and build secure digital foundations through trusted advisory and
//               technology-driven solutions.
//             </p>
//           </div>

//           {/* SOCIAL */}
//           <div>
//             <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
//             <div className="flex gap-4">
//               <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
//                 <Facebook size={17} />
//               </a>
//               <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
//                 <Instagram size={17} />
//               </a>
//             </div>
//           </div>

//           {/* ADDRESS */}
//           <div className="space-y-5 text-sm">
//             <div>
//               <p className="text-white font-medium">India</p>
//               <p className="text-gray-400">
//                 Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower,
//                 Sector-54, Gurugram, Haryana 122011
//               </p>
//               <p className="mt-1 text-gray-300">+91-8527611337</p>
//             </div>

//             <div>
//               <p className="text-white font-medium">United Kingdom</p>
//               <p className="text-gray-400">
//                 15 Great Queen Street, London WC2B 5TD
//               </p>
//               <p className="mt-1 text-gray-300">+44-7514984244</p>
//             </div>

//             <div>
//               <p className="text-white font-medium">United States of America</p>
//               <p className="text-gray-400">
//                 770 Pasquinelli Drive, Suite 424, Westmont, IL 60559
//               </p>
//               <p className="mt-1 text-gray-300">+1-8527611337</p>
//             </div>

//             <p>
//               Email:{" "}
//               <a href="mailto:info@sofsecure.com" className="text-[#30C4C1] hover:underline">
//                 info@sofsecure.com
//               </a>
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* ================= QUICK LINKS ================= */}
//       <div className="lg:col-span-2">
//         <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
//           Quick Links
//         </h4>
//         <ul className="space-y-3 text-sm">
//           <li><Link to="/" className="hover:text-[#30C4C1]">Home</Link></li>
//           <li><Link to="/about" className="hover:text-[#30C4C1]">About</Link></li>
//           <li><Link to="/services" className="hover:text-[#30C4C1]">Services</Link></li>
//           <li><Link to="/careers" className="hover:text-[#30C4C1]">Careers</Link></li>
//           <li><Link to="/contact" className="hover:text-[#30C4C1]">Contact</Link></li>
//         </ul>
//       </div>

//       {/* ================= COMPANY ================= */}
//       <div className="lg:col-span-2">
//         <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
//           Company
//         </h4>
//         <ul className="space-y-3 text-sm">
//           <li><Link to="/company/leadership-team" className="hover:text-[#30C4C1]">Leadership Team</Link></li>
//           <li><Link to="/company/our-clients" className="hover:text-[#30C4C1]">Our Clients</Link></li>
//           <li><Link to="/industries" className="hover:text-[#30C4C1]">Industries</Link></li>
//           <li><Link to="/support" className="hover:text-[#30C4C1]">Support</Link></li>
//         </ul>
//       </div>

//       {/* ================= SERVICES (CARD) ================= */}
//      <section className="relative bg-[#0b0f14] text-white py-28 px-6">
//   <div className="max-w-7xl mx-auto">

//     {/* ================= SERVICES CONTAINER ================= */}
//     <div
//       className="
//         rounded-[40px]
//         bg-white/5 backdrop-blur-xl
//         border border-white/10
//         shadow-[0_40px_120px_rgba(0,0,0,0.7)]
//         p-10 md:p-14
//       "
//     >
//       {/* TITLE */}
//       <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-10">
//         Services
//       </h2>

//       <div className="grid md:grid-cols-2 gap-14">

//         {/* ================= AUDIT & ASSURANCE ================= */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-white">
//             Audit & Assurance
//           </h3>

//           <ServiceItem
//             title="IT Audit Services"
//             desc="Comprehensive IT risk, control, and compliance assessments."
//           />

//           <ServiceItem
//             title="SOC Reports"
//             desc="SOC 1, SOC 2 & SOC 3 readiness and reporting."
//           />

//           <ServiceItem
//             title="SOX Compliance"
//             desc="End-to-end Sarbanes-Oxley compliance programs."
//           />

//           <ServiceItem
//             title="Agile Internal Audit"
//             desc="Faster, adaptive audit approaches for modern risks."
//           />
//         </div>

//         {/* ================= CYBERSECURITY & PRIVACY ================= */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-white">
//             Cybersecurity & Privacy
//           </h3>

//           <ServiceItem
//             title="Cybersecurity Assessment"
//             desc="Evaluate and strengthen security posture."
//           />

//           <ServiceItem
//             title="Privacy"
//             desc="Privacy compliance and data protection programs."
//           />

//           <ServiceItem
//             title="Regulatory Compliance"
//             desc="Compliance across federal and industry standards."
//           />
//         </div>

//         {/* ================= GOVERNANCE & RISK ================= */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-semibold text-white">
//             Governance & Risk
//           </h3>

//           <ServiceItem
//             title="IT Governance & Compliance"
//             desc="Governance frameworks aligned with strategy."
//           />

//           <ServiceItem
//             title="Enterprise Risk Management"
//             desc="Connect risk with enterprise objectives."
//           />

//           <ServiceItem
//             title="Board & Audit Committee Governance"
//             desc="Enhanced oversight and strategic alignment."
//           />
//         </div>

//       </div>
//     </div>
//   </div>
// </section>


//     </div>
//   </div>

//   {/* ================= BOTTOM ================= */}
//   <div className="border-t border-white/10 py-6 text-sm">
//     <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//       <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
//       <p className="text-gray-500">
//         Designed by <span className="text-[#30C4C1]">GreaterTechHub</span>
//       </p>
//     </div>
//   </div>
// </footer>

//   );
// }


import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0f14] text-gray-400 border-t border-white/10 overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#30C4C1]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[140px]" />
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* ================= BRAND + CONTACT ================= */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Sof<span className="text-[#30C4C1]">Secure</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  SofSecure helps organizations manage risk, strengthen compliance,
                  and build secure digital foundations through trusted advisory
                  and technology-driven solutions.
                </p>
              </div>

              {/* SOCIAL */}
              <div>
                <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                    <Facebook size={17} />
                  </a>
                  <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                    <Instagram size={17} />
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-white font-medium">India</p>
                  <p>Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower, Sector-54, Gurugram, Haryana 122011</p>
                  <p className="text-gray-300">+91-8527611337</p>
                </div>

                <div>
                  <p className="text-white font-medium">United Kingdom</p>
                  <p>15 Great Queen Street, London WC2B 5TD</p>
                  <p className="text-gray-300">+44-7514984244</p>
                </div>

                <div>
                  <p className="text-white font-medium">United States of America</p>
                  <p>770 Pasquinelli Drive, Suite 424, Westmont, IL 60559</p>
                  <p className="text-gray-300">+1-8527611337</p>
                </div>

                <p>
                  Email:{" "}
                  <a href="mailto:info@sofsecure.com" className="text-[#30C4C1] hover:underline">
                    info@sofsecure.com
                  </a>
                </p>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#30C4C1]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#30C4C1]">About</Link></li>
              <li><Link to="/services" className="hover:text-[#30C4C1]">Services</Link></li>
              <li><Link to="/careers" className="hover:text-[#30C4C1]">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[#30C4C1]">Contact</Link></li>
            </ul>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/company/leadership-team" className="hover:text-[#30C4C1]">Leadership Team</Link></li>
              <li><Link to="/company/our-clients" className="hover:text-[#30C4C1]">Our Clients</Link></li>
              <li><Link to="/industries" className="hover:text-[#30C4C1]">Industries</Link></li>
              <li><Link to="/support" className="hover:text-[#30C4C1]">Support</Link></li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Services
            </h4>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Audit & Assurance</p>
                <ul className="space-y-1">
                  <li><Link to="/services/it-audit-services" className="hover:text-[#30C4C1]">IT Audit Services</Link></li>
                  <li><Link to="/services/soc-reports" className="hover:text-[#30C4C1]">SOC Reports</Link></li>
                  <li><Link to="/services/sox-compliance" className="hover:text-[#30C4C1]">SOX Compliance</Link></li>
                  <li><Link to="/services/agile-internal-audit" className="hover:text-[#30C4C1]">Agile Internal Audit</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Cybersecurity & Privacy</p>
                <ul className="space-y-1">
                  <li><Link to="/services/cybersecurity-assessment" className="hover:text-[#30C4C1]">Cybersecurity Assessment</Link></li>
                  <li><Link to="/services/privacy" className="hover:text-[#30C4C1]">Privacy</Link></li>
                  <li><Link to="/services/regulatory-compliance" className="hover:text-[#30C4C1]">Regulatory Compliance</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Governance & Risk</p>
                <ul className="space-y-1">
                  <li><Link to="/services/it-governance-compliance" className="hover:text-[#30C4C1]">IT Governance</Link></li>
                  <li><Link to="/services/enterprise-risk-management" className="hover:text-[#30C4C1]">Enterprise Risk</Link></li>
                  <li><Link to="/services/board-audit-governance" className="hover:text-[#30C4C1]">Board Governance</Link></li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-xs mb-2">Sustainability</p>
                <ul>
                  <li><Link to="/services/esg-sustainability" className="hover:text-[#30C4C1]">ESG & Sustainability</Link></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10 py-6 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
          <p className="text-gray-500">
            Designed by <span className="text-[#30C4C1]">GreaterTechHub</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
