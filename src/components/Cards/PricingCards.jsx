import { ArrowRight } from "lucide-react";

const PricingCards = ({ pricing, variant = "default" }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md flex flex-col justify-between h-full ${pricing.bgColor} ${pricing.textColor}`}
    >
      <div>
        {pricing.image && (
          <img
            src={pricing.image}
            alt={pricing.title}
            className={`${
              variant === "featured" ? "w-auto h-auto object-cover mb-6 rounded-xl" : "w-auto h-auto object-conver mb-4"
            }`}
          />
        )}
        <h3 className="text-3xl font-bold">{pricing.price}</h3>
        <h4 className="mt-2 font-semibold">{pricing.title}</h4>
        {pricing.description && (
          <p className="mt-2 text-sm">{pricing.description}</p>
        )}
      </div>
      <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
       target="_blank"
       rel="noopener noreferrer"
      >
      <button className="mt-4 inline-flex items-center text-sm font-medium underline hover:text-gray-700">
        Book Session <ArrowRight className="ml-2 w-4 h-4" />
      </button>
      </a>
    </div>
  );
};

export default PricingCards;
