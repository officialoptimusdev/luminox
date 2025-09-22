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

            {/* Description with bullet support */}
            <div
              className={`mt-1 text-sm leading-snug space-y-1 ${service.descriptionColor}`}
            >
              {service.description.split("\n").map((line, index) =>
                line.trim().startsWith("-") ? (
                  <li key={index} className="list-disc ml-5">
                    {line.replace("-", "").trim()}
                  </li>
                ) : (
                  line.trim() && <p key={index}>{line}</p>
                )
              )}
            </div>
          </div>

          <a
            href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-3 inline-flex items-center text-xs font-medium hover:underline">
              Book Session <ArrowRight className="ml-1 w-3 h-3" />
            </button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
     <div className="flex justify-between items-start border-b border-gray-200 py-4">
  <div className="flex-1">
    <h3 className="font-semibold text-lg">{service.title}</h3>

    {/* Render full description with support for bullet points & line breaks */}
    {service.description.includes("-") ? (
      <div className="text-sm text-gray-600 space-y-1">
        {service.description.split("\n").map((line, idx) => {
          if (line.trim().startsWith("-")) {
            return (
              <ul key={idx} className="list-disc list-inside space-y-1">
                <li>{line.replace("-", "").trim()}</li>
              </ul>
            );
          }
          return <p key={idx}>{line.trim()}</p>;
        })}
      </div>
    ) : (
      <div className="text-sm text-gray-600 space-y-1">
        {service.description.split("\n").map((line, idx) => (
          <p key={idx}>{line.trim()}</p>
        ))}
      </div>
    )}

    {/* Book Session button only on mobile (below description) */}
    <a
      href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-3 md:hidden"
    >
      <button className="inline-flex items-center text-[13px] font-medium hover:underline">
        Book Session <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </a>
  </div>

  {/* Book Session button only on desktop (right side) */}
  <a
    href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:block ml-4"
  >
    <button className="inline-flex items-center text-[13px] whitespace-nowrap font-medium hover:underline">
      Book Session <ArrowRight className="ml-2 w-4 h-4" />
    </button>
  </a>
</div>


    </>
  );


};

export default ServicesCards;
