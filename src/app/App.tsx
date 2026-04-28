import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { Problem } from "./components/Problem";
import { WhatIsLinq } from "./components/WhatIsLinq";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { ValueProp } from "./components/ValueProp";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <WhatIsLinq />
      <Features />
      <HowItWorks />
      <ValueProp />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}