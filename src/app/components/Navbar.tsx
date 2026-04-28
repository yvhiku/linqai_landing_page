import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // TODO: Wire nav items to real section ids once final IA is approved.

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050510]/80 backdrop-blur-xl shadow-lg shadow-purple-500/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7B61FF] to-[#4D7CFF] rounded-lg flex items-center justify-center">
              <span className="font-bold" style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.25rem' }}>L</span>
            </div>
            <span className="font-bold tracking-tight" style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.25rem' }}>LINQ AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-white/90 hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            {/* TODO: Hook login/start buttons to auth and onboarding flows. */}
            <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-white hover:border-white/40 transition-all duration-300">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#7B61FF] to-[#9A7BFF] rounded-full text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
