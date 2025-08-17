// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// Components
function HeroSection({ onCtaClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
        🎉 Win a $750 Shein Shopping Spree!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Complete a quick flash poll and a few simple deals to unlock your
        <span className="font-semibold text-pink-600"> $750 Shein Gift Card</span>.
        Only available to U.S. residents aged 25+.
      </p>
      <button
        onClick={onCtaClick}
        className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl px-10 py-4 text-xl shadow-lg"
      >
        Start My Flash Poll ➡️
      </button>
      <p className="text-sm text-gray-500 mt-2">
        (Limited spots today — act fast!)
      </p>
    </motion.div>
  );
}


export default HeroSection