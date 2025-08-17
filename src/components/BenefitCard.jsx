function BenefitCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl shadow-md bg-white p-6 text-center">
      <div className="flex justify-center mb-3 text-pink-600 text-4xl">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export default BenefitCard