import { ArrowRight } from "lucide-react";
import MissionCards from "../../Cards/MissionCards";
import { Link } from "react-router-dom";

export default function MissionStatement() {
   return (
      <>
         <section className="relative bg-[#000000] text-white overflow-hidden">
          

            {/* Content — starts below the curve */}
            <div className="relative pt-10 md:pt-20 lg:pt-36 pb-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto" style={{ position: "relative", zIndex: 3 }}>
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Mission Statement.</h2>
               <p className="text-gray-300 max-w-3xl mb-8">
               Our mission is to provide compassionate, personalized, and evidence-based mental health care that fosters healing, resilience, and hope. 
               Guided by our core values of Connection, Compassion, and Care, we are committed to creating a supportive and culturally responsive environment 
               where individuals of all ages feel seen, understood, and empowered. 
               Our dedication is to walk alongside each person on their journey to wellness, ensuring access to high-quality care that nurtures both mind and spirit.
               </p>

               <a href="/about">
                  <button className="flex items-center gap-2 bg-white text-gray-900 font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition mb-10">
                     About Us <ArrowRight size={18} />
                  </button>
               </a>

               <MissionCards />
            </div>
         </section>
      </>

   );
}