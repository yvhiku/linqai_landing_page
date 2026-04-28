import { motion } from "motion/react";
import { UserPlus, Target, Sparkles, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds",
  },
  {
    icon: Target,
    title: "Choose Role",
    description: "Brand / Creator / Worker",
  },
  {
    icon: Sparkles,
    title: "AI Matches Opportunities",
    description: "Smart matching in real-time",
  },
  {
    icon: Rocket,
    title: "Campaigns Execute Automatically",
    description: "AI handles the heavy lifting",
  },
  {
    icon: CheckCircle,
    title: "Revenue & Results Delivered",
    description: "Track performance and earnings",
  },
];

export function HowItWorks() {
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
            How It Works
          </h2>
          <p className="text-lg text-white/60">
            Get started in minutes, scale in days
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className={`inline-block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}>
                      <div className={`flex items-center gap-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={isEven ? "md:text-right" : ""}>
                          <h3 className="font-semibold mb-1" style={{ fontSize: '1.25rem' }}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-white/60">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                      className="w-8 h-8 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-full border-4 border-[#050510] shadow-lg shadow-purple-500/50"
                    >
                      <div className="w-full h-full flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
