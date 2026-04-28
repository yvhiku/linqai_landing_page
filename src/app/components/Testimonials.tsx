import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  // TODO: Move testimonial copy to CMS so marketing can update without deploys.
  {
    quote: "LINQ AI reduced campaign costs by 70%.",
    author: "Sarah Chen",
    role: "CMO, TechBrand Inc",
    avatar: "SC",
  },
  {
    quote: "We scaled 12 creator brands in weeks.",
    author: "Marcus Rodriguez",
    role: "Agency Owner",
    avatar: "MR",
  },
  {
    quote: "Best automation platform we've seen.",
    author: "Jessica Kim",
    role: "Head of Growth",
    avatar: "JK",
  },
];

export function Testimonials() {
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
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
