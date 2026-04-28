import { motion } from "motion/react";
import { TrendingUp, Clock, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "$0 →",
    label: "Scalable Creator Growth",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "AI Automation",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Creator Workforce",
  },
  {
    icon: Zap,
    value: "Instant",
    label: "Campaign Execution",
  },
];

export function ValueProp() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: '3rem', fontWeight: 700 }}>
            Why LINQ AI{" "}
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] bg-clip-text text-transparent">
              Wins
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="mb-2" style={{ fontFamily: 'Sora, sans-serif', fontSize: '2.5rem', fontWeight: 700 }}>
                    {stat.value}
                  </div>

                  <div className="text-white/60">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
