import { ArrowRight } from "lucide-react";

const PricingCards = ({ pricing }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md flex flex-col justify-between ${pricing.bgColor} ${pricing.textColor}`}
    >
      <div>
        {pricing.image && (
          <img
            src={pricing.image}
            alt={pricing.title}
            className="w-20 h-20 object-contain mb-4"
          />
        )}
        <h3 className="text-2xl font-bold">{pricing.price}</h3>
        <h4 className="mt-2 font-semibold">{pricing.title}</h4>
        <p className="mt-2 text-sm">{pricing.description}</p>
      </div>
      <button className="mt-4 inline-flex items-center text-sm font-medium underline hover:text-gray-700">
        Book Session <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

export default PricingCards;
