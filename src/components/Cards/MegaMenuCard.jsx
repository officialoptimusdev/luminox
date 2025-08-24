import { megaMenuData } from "@/constants/data";
import { useState } from "react";

const MegaMenuCard = () => {
  const [activeItem, setActiveItem] = useState(megaMenuData[0]);

  return (
    <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-[1000px] rounded-2xl shadow-lg grid grid-cols-3 overflow-hidden z-50">
      {/* Left: Submenu list */}
      <div className="col-span-2 bg-white p-6 grid grid-cols-2 gap-4">
        {megaMenuData.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition ${activeItem.id === item.id ? "bg-gray-100" : ""
              }`}
            onMouseEnter={() => setActiveItem(item)}
          >
            <h4 className="text-sm font-medium text-gray-800">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      {/* Right: Preview card with divider */}
      <div className="col-span-1 flex flex-col justify-center border-l-4 border-[#dde9ea]">
        {activeItem && (
          <div
            className={`h-full w-full p-6 flex flex-col justify-between transition-all duration-300 ease-in-out ${activeItem.bgColor}`}
          >
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${activeItem.textColor || "text-white"
                  }`}
              >
                {activeItem.title}
              </h3>
              <p
                className={`text-sm ${activeItem.descriptionColor || "text-white/90"
                  }`}
              >
                {activeItem.description}
              </p>
            </div>
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-auto h-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenuCard;
