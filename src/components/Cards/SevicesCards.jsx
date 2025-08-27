import { ArrowRight } from "lucide-react";

const ServicesCards = ({ service, variant }) => {
  // Big Image Card (default)
  if (variant === "card") {
    return (
      <div
        className={`rounded-2xl overflow-hidden shadow-sm col-span-1 flex flex-col ${service.bgColor} ${service.textColor}`}
      >
        {service.image && (

          <img
            src={service.image}
            alt={service.title}
            className="w-auto h-full object-cover"
          />

        )}
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-tight">
              {service.title}
            </h3>
            <p
              className={`mt-1 text-sm leading-snug ${service.descriptionColor}`}
            >
              {service.description}
            </p>
          </div>
          <button className="mt-3 inline-flex items-center text-xs font-medium hover:underline">
            Book Session <ArrowRight className="ml-1 w-3 h-3" />
          </button>
        </div>
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
