import { Link } from "react-router-dom";
import { missionData } from "@/constants/data";

export default function MissionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {missionData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="relative bg-gray-800 rounded-xl p-6 text-white shadow-lg flex flex-col justify-between overflow-hidden"
          >

            <img
              src={card.image}
              alt={card.title}
              className="absolute right-0 top-0 w-40 h-60 object-cover opacity-60 pointer-events-none"
            />

            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300 mb-6">{card.description}</p>
            </div>


            {card.buttonText && (
              <a
                href="/referral"
                className="flex items-center gap-2 bg-white text-gray-900 font-medium px-4 py-2 rounded-full w-fit hover:bg-gray-100 transition relative z-10"
              >
                <span>{card.buttonText}</span>
                {Icon && <Icon className="w-4 h-4" />}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
