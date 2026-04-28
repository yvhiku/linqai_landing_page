import { motion } from "motion/react";

const logos = ["Meta", "TikTok", "Instagram", "Shopify", "YouTube", "Discord"];

export function SocialProof() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-50 hover:opacity-70 transition-opacity">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, opacity: 1 }}
              className="text-white/40 hover:text-white/80 transition-all duration-300 cursor-pointer"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.5rem', fontWeight: 600 }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
