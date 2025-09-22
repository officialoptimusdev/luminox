import { servicesData } from "@/constants/data";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { LayoutDashboard, MapPinned, ArrowRight } from "lucide-react";

const MegaMenuCard = () => {
  const [activeItem, setActiveItem] = useState(servicesData[0]);
  const [loadedImages, setLoadedImages] = useState({});
  const containerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    servicesData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [item.image]: true }));
    });
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseLeaveContainer = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      hoverTimeoutRef.current = null;
    }, 3500);
  };

  const handleMouseEnterContainer = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-5 w-[900px] px-4 rounded-md z-50"
    >
      {/* Grid content */}
      <div className="grid grid-cols-3 rounded-md overflow-hidden">
        {/* Left menu */}
        <div className="col-span-2 bg-white p-4 flex flex-col gap-2">
          {/* Our Service Title section */}
          <div className="border-b border-gray-200 pb-2 mt-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">

              <LayoutDashboard className="w-4 h-4" />
              Our Services
            </h3>
          </div>

          {/* Service items grid */}

          <div className="grid grid-cols-3 gap-4">
            {servicesData.map((item) => (
              <motion.div
                key={item.id}
                className="py-3 px-3 rounded-lg cursor-pointer"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current);
                    hoverTimeoutRef.current = null;
                  }
                  setActiveItem(item);
                }}
              >
                <motion.div
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className={`flex items-center gap-2 text-sm font-medium whitespace-nowrap px-2 py-3 rounded cursor
          ${activeItem.id === item.id
                      ? "text-[#2e6f73]"
                      : "text-gray-800 hover:text-[#2e6f73]"
                    }`}
                >
                  {/* Bullet point */}
                  <span className="w-1 h-1 bg-[#2e6f73] rounded-full flex-shrink-0" />

                  {/* Title */}
                  <span>{item.title}</span>

                  {/* Arrow Right icon */}
                  <ArrowRight className="w-2 h-2 flex-shrink-0" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Location section */}
          <div className="mt-4 bg-[#f9fafb] w-full rounded-md shadow-inner p-6">
            <h4 className="text-sm font-semibold text-gray-800 mb-4">Locations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "Mental Health Services", place: "Washington DC" },
                { name: "Mental Health Services", place: "Maryland" },
                { name: "Luminox Health Care", place: "Virginia" },
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-4 text-gray-700 border-l-2 border-[#dde9ea] pl-4"
                >
                  <p className="text-sm font-medium text-nowrap">{loc.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPinned className="w-4 h-4" />
                    <span>{loc.place}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right preview */}
        <div className="col-span-1 flex flex-col justify-center border-l-4 border-[#dde9ea]">
          <div
            className={`rounded-md h-full w-full p-2 flex flex-col justify-center ${activeItem.bgColor}`}
          >
            <motion.h3
              key={`title-${activeItem.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`text-lg font-semibold mb-2 ${activeItem.textColor || "text-white"
                }`}
            >
              {activeItem.title}
            </motion.h3>

            <motion.div
              key={`desc-${activeItem.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`text-sm space-y-2 ${activeItem.descriptionColor || "text-white/90"
                }`}
            >
              {activeItem.description.split("\n").map((line, index) =>
                line.trim().startsWith("-") ? (
                  <li key={index} className="list-disc ml-5">
                    {line.replace("-", "").trim()}
                  </li>
                ) : (
                  <p key={index}>{line}</p>
                )
              )}
            </motion.div>

            {/* Image */}
            <div className="mt-4 flex justify-center items-center h-40 relative overflow-hidden">
              <AnimatePresence mode="sync" initial={false}>
                {!loadedImages[activeItem.image] ? (
                  <Skeleton
                    key={`skeleton-${activeItem.id}`}
                    className="w-32 h-32 rounded-xl absolute"
                  />
                ) : (
                  <motion.img
                    key={activeItem.image}
                    src={activeItem.image}
                    alt={activeItem.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-h-40 object-contain absolute"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuCard;
