import { motion } from "motion/react";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";

export function Hero() {
  // TODO: Replace demo metrics with data from analytics endpoint.
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B61FF]/10 via-transparent to-transparent"></div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">AI Creator Economy Infrastructure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1 }}
            >
              Build, Automate & Monetize<br />
              <span className="bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] bg-clip-text text-transparent">
                The Future of Influence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 mb-8 leading-relaxed"
            >
              LINQ AI connects brands, creators, AI workers, automation systems, and monetization tools into one unified ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {/* TODO: Add click tracking for hero CTA conversion reporting. */}
              <button className="px-8 py-4 bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] rounded-full text-white hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Launch Platform
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all duration-300">
                Explore Features
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-white/50"
            >
              Used by creators, agencies, brands & operators globally.
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Analytics Dashboard</h3>
                  <span className="text-sm text-green-400">● Live</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-white/60">Revenue</span>
                    </div>
                    <div className="font-bold" style={{ fontSize: '1.5rem' }}>$847K</div>
                    <div className="text-xs text-green-400">+23.5%</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-white/60">Creators</span>
                    </div>
                    <div className="font-bold" style={{ fontSize: '1.5rem' }}>12.4K</div>
                    <div className="text-xs text-blue-400">+18.2%</div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-white/60">Active Campaigns</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Brand Partnership Q2", progress: 78 },
                      { name: "Creator Outreach", progress: 92 },
                      { name: "Content Generation", progress: 45 },
                    ].map((campaign, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">{campaign.name}</span>
                          <span className="text-white/50">{campaign.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${campaign.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/50">AI Agents Active</span>
                  <span className="text-purple-400 font-semibold">24/7</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 top-1/4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">New creator match</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
