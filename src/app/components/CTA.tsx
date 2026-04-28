import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-purple-500/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="mb-6" style={{ fontFamily: 'Sora, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1 }}>
              Join the Future of{" "}
              <span className="bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] bg-clip-text text-transparent">
                AI Influence
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Creators, brands, and operators are building the next internet economy with LINQ AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] rounded-full text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <span className="font-semibold text-lg">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-10 py-5 border-2 border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold text-lg">Book Demo</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm text-white/50"
          >
            No credit card required • 14-day free trial
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
