// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function StepsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 max-w-3xl bg-white p-8 rounded-2xl shadow-xl"
    >
      <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
        ✅ How to Claim Your Reward
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-4 text-lg">
        <li>Click below to start your Flash Poll (takes under 1 minute).</li>
        <li>
          Complete <span className="font-semibold text-pink-600">3–5 quick deals</span>
          (examples: app trials, product sign-ups, etc.).
        </li>
        <li>Confirm your email and finish all deal requirements.</li>
        <li>
          Receive your <span className="font-bold text-pink-700">$750 Shein Gift Card</span>!
        </li>
      </ol>

      <div className="text-center mt-8">
        <a
          href="https://rewarrdsgiant.com/aff_c?offer_id=76&aff_id=152657"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-2xl text-xl shadow-lg"
        >
          👉 Start Now & Unlock My $750
        </a>
        <p className="text-sm text-gray-500 mt-2">
          Reminder: Offer valid only for U.S. residents 25+.
        </p>
      </div>
    </motion.div>
  );
}

export default StepsSection