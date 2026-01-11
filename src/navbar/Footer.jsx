import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-400 border-t border-white/10">

      {/* MAIN */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* STAY CONNECTED */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Stay Connected
            </h3>

            <div className="space-y-6 text-sm leading-relaxed">
              <div>
                <p className="text-white font-medium mb-1">India</p>
                <p>
                  Unit No. 201–202, 2nd Floor, Tower A, Paras Twin Tower,  
                  Sector-54, Gurugram, Haryana 122011
                </p>
                <p className="mt-1">Phone: +91-8527611337</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1">United Kingdom</p>
                <p>
                  15 Great Queen Street, London WC2B 5TD
                </p>
                <p className="mt-1">Phone: +44-7549842444</p>
              </div>

              <div>
                <p className="text-white font-medium mb-1">
                  United States of America
                </p>
                <p>
                  770 Pasquinelli Drive, Suite 424,  
                  Westmont, IL 60559
                </p>
                <p className="mt-1">Phone: +1-8527611337</p>
                <p className="mt-1">Email:  www.sofsecure.com</p>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Contact Us", "Services", "Careers", "Submit RFP"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-[#30C4C1] transition cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Locations",
                "Industries",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#30C4C1] transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Social Networks
            </h4>
            <div className="flex gap-4">
              <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                <Facebook size={18} />
              </a>
              <a className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-[#30C4C1] hover:text-black transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SofSecure. All Rights Reserved.</p>
          <p>
            Designed by{" "}
            <span className="text-[#30C4C1] font-medium">
              GreaterTechHub
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
