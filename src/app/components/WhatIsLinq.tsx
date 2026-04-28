import { motion } from "motion/react";
import { Check } from "lucide-react";

const capabilities = [
  "Influencer Marketplace",
  "AI Growth Engine",
  "Social Media Automation",
  "Brand Campaign Network",
  "Global Digital Workforce",
  "Content Generation Tools",
  "AI Agents That Execute Tasks",
  "Brokerage Infrastructure",
];

export function WhatIsLinq() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: '3rem', fontWeight: 700 }}>
            One Ecosystem.{" "}
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] bg-clip-text text-transparent">
              Infinite Growth.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-xl border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-full blur-3xl opacity-50"></div>
              </div>

              <div className="relative grid grid-cols-3 gap-4 h-full">
                {[...Array(9)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#7B61FF]/40 to-[#4D7CFF]/40 rounded-lg"></div>
                  </motion.div>
                ))}
              </div>

              {[...Array(4)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-px bg-gradient-to-b from-purple-500/50 to-transparent"
                  style={{
                    left: `${30 + idx * 15}%`,
                    top: "10%",
                    height: "80%",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium">{capability}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
