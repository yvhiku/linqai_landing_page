import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

const problems = [
  "Brands struggle finding reliable creators",
  "Growth tools are fragmented",
  "Social media management is expensive",
  "Monetization systems are outdated",
  "Workers are underutilized",
  "No AI-powered execution layer exists",
];

export function Problem() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: '3rem', fontWeight: 700 }}>
            The Creator Economy is{" "}
            <span className="text-red-400">Broken</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-white/80">{problem}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] px-8 py-4 rounded-full">
            <span className="font-bold" style={{ fontSize: '1.5rem' }}>LINQ AI fixes this.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
