import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  UserCheck,
  Clock,
} from "lucide-react";

export default function Careers() {
  return (
    <section className="relative bg-[#0b0f14] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
            Careers at SofSecure.
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Opportunities at <span className="text-cyan-400">SofSecure.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            At SofSecure., we don’t just build secure systems — we build
            careers with purpose. Join a team where innovation, trust,
            and responsibility shape everything we do.
          </p>
        </motion.div>

        {/* ================= COMPANY CULTURE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-white">
              Build Your Future With Us
            </h2>

            <p>
              SofSecure is a people-first organization driven by technology,
              ethics, and innovation. We believe great security solutions are
              created by empowered individuals who are encouraged to learn,
              experiment, and grow.
            </p>

            <p>
              Whether you are a student starting your journey, a professional
              taking your first step, or an experienced expert looking for
              meaningful challenges — SofSecure offers an environment where
              your skills matter and your voice is valued.
            </p>

            <p>
              We invest in continuous learning, collaborative problem-solving,
              and long-term career development. Here, growth is not optional —
              it’s part of our culture.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-white/10 rounded-3xl p-12">
            <h3 className="text-2xl font-semibold mb-4">
              Why Work at SofSecure.?
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Purpose-driven security projects</li>
              <li>• Modern tools & evolving technologies</li>
              <li>• Transparent leadership & open culture</li>
              <li>• Learning-focused growth environment</li>
              <li>• Work that makes real-world impact</li>
            </ul>
          </div>
        </motion.div>

        {/* ================= CAREER OPTIONS ================= */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Career Opportunities
            </h2>
            <p className="text-gray-400 text-lg">
              Explore roles designed for every stage of your professional
              journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Internship */}
            <CareerCard
              icon={<GraduationCap size={36} />}
              title="Student Internship"
              desc="Hands-on learning opportunities for students to gain real-world experience in cybersecurity, development, and IT operations."
              delay={0.1}
            />

            {/* Entry Level */}
            <CareerCard
              icon={<UserCheck size={36} />}
              title="Entry Level Jobs"
              desc="Perfect for fresh graduates ready to start their professional journey and build a strong foundation in the tech industry."
              delay={0.2}
            />

            {/* Experienced */}
            <CareerCard
              icon={<Briefcase size={36} />}
              title="Experienced Opportunities"
              desc="Advanced roles for professionals who want to lead, innovate, and solve complex security and technology challenges."
              delay={0.3}
            />

            {/* Part-Time */}
            <CareerCard
              icon={<Clock size={36} />}
              title="Part-Time Jobs"
              desc="Flexible opportunities for individuals looking to contribute their expertise while maintaining work-life balance."
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= REUSABLE CARD ================= */

function CareerCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition-all"
    >
      <div className="text-cyan-400 mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
