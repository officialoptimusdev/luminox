import GlassWaveOverlay from "@/utils/GlassWaveOverlay";
import { useEffect, useState } from "react";

export default function FadeSlider({ images = [], duration = 4000 }) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [fade, setFade] = useState(false);

   useEffect(() => {
      const fadeTimeout = setTimeout(() => {
         setFade(true);
      }, duration - 1000);

      const slideTimeout = setTimeout(() => {
         setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
         );
         setFade(false);
      }, duration);

      return () => {
         clearTimeout(slideTimeout);
         clearTimeout(fadeTimeout);
      };
   }, [currentIndex, duration, images.length]);

   return (
      <>

         <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            {images.map((img, index) => (
               <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
            ${fade && index === currentIndex ? "opacity-0" : ""}
          `}
               />
            ))}

            <GlassWaveOverlay className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1880px] h-[555px] max-w-none" />

         </div>


      </>
   );
}
