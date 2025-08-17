import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BenefitCard from "../components/BenefitCard";
import HeroSection from "../components/HeroSection";
import StepsSection from "../components/StepsSection";


export default function LandingPage() {
  const [ctaClicked, setCtaClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center justify-center px-6 py-12">
      <HeroSection onCtaClick={() => setCtaClicked(true)} />

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
        <BenefitCard
          icon={<span>👥</span>}
          title="Trusted by Thousands"
          text="Real people 25+ are claiming their shopping bonus daily."
        />
        <BenefitCard
          icon={<span>⏰</span>}
          title="Takes Only Minutes"
          text="Just complete 3–5 quick deals after the poll to qualify."
        />
        <BenefitCard
          icon={<span>✅</span>}
          title="Guaranteed Reward"
          text="Finish the steps and your $750 Shein shopping credit is unlocked."
        />
      </div>

      {/* Steps */}
      {ctaClicked && <StepsSection />}
    </div>
  );
}
