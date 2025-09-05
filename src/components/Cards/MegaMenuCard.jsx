import { megaMenuData } from "@/constants/data";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const MegaMenuCard = () => {
  // Keep the active item
  const [activeItem, setActiveItem] = useState(megaMenuData[0]);
  const [loadedImages, setLoadedImages] = useState({});

  // Ref to track if the mouse is inside the whole menu card
  const containerRef = useRef(null);
  // Timeout id used for delaying deactivation to avoid flicker
  const hoverTimeoutRef = useRef(null);

  // Preload all images
  useEffect(() => {
    megaMenuData.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [item.image]: true }));
    });
  }, []);

  // Clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // When mouse leaves the entire card, keep the last active for a tiny delay then optionally reset
  const handleMouseLeaveContainer = () => {
    // Small delay (50-150ms) reduces flicker when moving between left and right columns
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      // Optionally do nothing, or setActiveItem(null) if you want to clear selection.
      // We intentionally keep the active item so hover preview doesn't glitch for last item.
      hoverTimeoutRef.current = null;
    }, 3500);
  };

  // When mouse re-enters container cancel pending timeout
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
      className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 w-[1000px] rounded-md shadow-lg grid grid-cols-3 z-50"
    >
      {/* Left menu */}
      <div className="col-span-2 bg-white p-3 grid grid-cols-1 gap-y-1 rounded-md">
        {megaMenuData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ backgroundColor: "#bfdbfe" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`p-3 rounded-lg cursor-pointer ${
              activeItem.id === item.id ? "bg-gray-100" : ""
            }`}
            // Set active immediately on enter of the item
            onMouseEnter={() => {
              // Cancel pending container timeout (if any) to avoid accidental clearing
              if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                hoverTimeoutRef.current = null;
              }
              setActiveItem(item);
            }}
          >
            <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
          </motion.div>
        ))}
      </div>

      {/* Right preview */}
      <div className="col-span-1 flex flex-col justify-center border-l-4 border-[#dde9ea]">
        <div
          // Ensure this area is part of the container so hovering it won't trigger a leave
          className={`rounded-md h-full w-full p-6 flex flex-col justify-between ${activeItem.bgColor}`}
        >
          {/* Title */}
          <motion.h3
            key={`title-${activeItem.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-lg font-semibold mb-2 ${
              activeItem.textColor || "text-white"
            }`}
          >
            {activeItem.title}
          </motion.h3>

          {/* Description */}
          <motion.div
            key={`desc-${activeItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`text-sm space-y-2 ${
              activeItem.descriptionColor || "text-white/90"
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

          {/* Image crossfade */}
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
  );
};

export default MegaMenuCard;