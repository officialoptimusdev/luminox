import { ArrowRight } from "lucide-react";

const ServicesCards = ({ service, variant }) => {
  // Big Image Card (default)
  if (variant === "card") {
    return (
      <div
        className={`rounded-xl p-4 shadow-sm flex flex-col justify-between h-full ${service.bgColor} ${service.textColor}`}
      >
        <div>
          {service.image && (
            <img
              src={service.image}
              alt={service.title}
              className="w-auto h-auto object-cover mb-3"
            />
          )}
          <h3 className="text-lg font-semibold leading-tight">
            {service.title}
          </h3>
          <p className={`mt-1 text-xs leading-snug ${service.descriptionColor}`}>
            {service.description}
          </p>
        </div>
        <button className="mt-3 inline-flex items-center text-xs font-medium hover:underline">
          Book Session <ArrowRight className="ml-1 w-3 h-3" />
        </button>
      </div>
    );
  }


  // Compact list row
  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4">
      <div>
        <h3 className="font-semibold text-lg">{service.title}</h3>
        <p className="text-sm text-gray-600">{service.description}</p>
      </div>
      <button className="inline-flex items-center text-sm font-medium hover:underline">
        Book Session <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  );
};

export default ServicesCards;
