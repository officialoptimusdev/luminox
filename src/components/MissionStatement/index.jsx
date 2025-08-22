import { ArrowRight } from "lucide-react";
import MissionCards from "../Cards/MissionCards";

export default function MissionStatement() {
   return (
      <>
         <section className="relative bg-[#000000] text-white overflow-hidden">
            {/* Curved top: dot-free, centered at the top edge of content */}
            <div
               aria-hidden="true"
               style={{
                  position: "relative",
                  top: -195,
                  left: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "auto",
                  overflow: "hidden",
                  zIndex: 2,
               }}
            >
               <svg
                  width="auto"
                  height="auto"
                  viewBox="0 0 1440 375"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M0 0L360 90C596.363 149.091 843.637 149.091 1080 90L1440 0L1660 265L1190 315C881.613 393.737 558.387 393.737 250 315L-220 265L0 0Z"
                     fill="#fff"
                  />
               </svg>
            </div>

            {/* Content — starts below the curve */}
            <div className="relative pt-10 md:pt-20 lg:pt-36 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto" style={{ position: "relative", zIndex: 3 }}>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Mission Statement.</h2>
               <p className="text-gray-300 max-w-3xl mb-8">
                  At our telepsychiatry clinic, our mission is to provide compassionate,
                  accessible, and high-quality mental healthcare to individuals seeking
                  support, regardless of geographical barriers.
               </p>

               <button className="flex items-center gap-2 bg-white text-gray-900 font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition mb-10">
                  About Us <ArrowRight size={18} />
               </button>

               <MissionCards />
            </div>
         </section>
      </>

   );
}