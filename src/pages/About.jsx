import { ShieldCheck, HeartHandshake, MessageCircle, Leaf, Lock } from "lucide-react";

export default function AboutSofSecure() {
  return (
    <section className="bg-[#0b0f14] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold tracking-wide mb-3">
            About SofSecure
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Security, Trust & Technology — Built for the Future
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            At SofSecure, we believe cybersecurity and digital trust are not just
            technical requirements — they are the foundation of modern business
            success. Our mission is to protect, strengthen, and future-proof
            organizations through intelligent security solutions and ethical
            digital practices.
          </p>
        </div>

        {/* ================= ABOUT TEXT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg ">
            <p>
              SofSecure is a forward-thinking technology and security-driven
              organization committed to helping businesses operate safely in an
              increasingly digital world. From safeguarding sensitive data to
              strengthening digital infrastructures, we focus on building
              long-term protection rather than short-term fixes.
            </p>

            <p>
              We understand that today’s digital threats are constantly evolving.
              That is why our approach combines advanced technology, proactive
              monitoring, and strategic thinking. We do not believe in one-size-
              fits-all solutions — every organization deserves a security
              framework designed specifically for its goals, scale, and risks.
            </p>

            <p>
              Beyond technology, SofSecure stands for integrity, transparency,
              and accountability. We work closely with our clients as trusted
              partners, ensuring clarity in communication, responsibility in
              execution, and confidence in outcomes.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl p-10 border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              Our Purpose
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our purpose is simple yet powerful — to create a secure digital
              ecosystem where businesses can grow without fear. We aim to reduce
              risks, protect reputations, and enable innovation by making
              security a strength rather than a limitation.
            </p>
          </div>
        </div>

        {/* ================= FIVE HABITS ================= */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Five Core Habits
            </h2>
            <p className="text-gray-400 text-lg">
              When our behaviors and ways of working consistently reflect our
              values, excellence becomes a habit. These five habits guide every
              decision we make at SofSecure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Habit 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <HeartHandshake className="text-cyan-400 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">
                Being Respectful
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We respect people, ideas, data, and time. Every interaction —
                with clients, partners, or teammates — is guided by empathy,
                professionalism, and fairness.
              </p>
            </div>

            {/* Habit 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <MessageCircle className="text-cyan-400 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">
                Being Responsive
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Security demands speed and clarity. We respond proactively,
                address concerns promptly, and ensure our clients never feel
                uncertain or unheard.
              </p>
            </div>

            {/* Habit 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <ShieldCheck className="text-cyan-400 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">
                Always Communicating
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transparent communication builds confidence. We believe in
                keeping stakeholders informed, explaining risks clearly, and
                sharing progress without ambiguity.
              </p>
            </div>

            {/* Habit 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <Leaf className="text-cyan-400 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">
                Demonstrating Stewardship
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We treat data, systems, and resources with responsibility and
                care. Stewardship means thinking long-term and protecting what
                matters most.
              </p>
            </div>

            {/* Habit 5 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
              <Lock className="text-cyan-400 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-3">
                Building Trust
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Trust is earned through consistency and results. We build trust
                by delivering secure solutions, honoring commitments, and
                standing accountable for our work.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
