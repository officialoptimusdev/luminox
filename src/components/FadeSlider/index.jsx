import { useEffect, useState } from "react";
import GlassWaveOverlay from "@/utils/GlassWaveOverlay";

export default function FadeSlider({ images = [], duration = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const fadeTimeout = setTimeout(() => setFade(true), Math.max(0, duration - 1000));
    const slideTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, duration);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(fadeTimeout);
    };
  }, [currentIndex, duration, images.length]);

  return (
    <div className="relative h-[20vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-opacity duration-1000 bg-center bg-cover
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
            ${fade && index === currentIndex ? "opacity-0" : ""}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center center",
          }}
        >
          <GlassWaveOverlay className="pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
