import { motion } from "motion/react";
import { Users, Brain, Video, FileText, TrendingUp, Zap, Globe, DollarSign } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Influencer Marketplace",
    description: "Connect with verified creators across all major platforms instantly.",
  },
  {
    icon: Brain,
    title: "AI Campaign Matching",
    description: "Smart AI pairs your brand with perfect creators automatically.",
  },
  {
    icon: Video,
    title: "AI Video Editing",
    description: "Transform raw footage into viral content with AI automation.",
  },
  {
    icon: FileText,
    title: "Auto Content Generation",
    description: "Generate captions, scripts, and posts that convert.",
  },
  {
    icon: TrendingUp,
    title: "Social Media Boosting",
    description: "Amplify reach with AI-powered growth strategies.",
  },
  {
    icon: Zap,
    title: "Brand Request Automation",
    description: "Streamline campaign workflows from pitch to payment.",
  },
  {
    icon: Globe,
    title: "Workforce Task Marketplace",
    description: "Access global talent for digital tasks on demand.",
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking Dashboard",
    description: "Real-time analytics and revenue insights in one place.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontFamily: 'Sora, sans-serif', fontSize: '3rem', fontWeight: 700 }}>
            Core Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to scale creator economy operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7B61FF]/20 to-[#4D7CFF]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>

                  <h3 className="font-semibold mb-2" style={{ fontSize: '1.125rem' }}>
                    {feature.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
