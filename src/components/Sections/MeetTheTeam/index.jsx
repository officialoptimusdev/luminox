import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MissionCards from "../../Cards/MissionCards";

const team = [
   {
      name: "Dr. Olayemi Adurota, FNP-C",
      role: "Nurse Practitioner / 11yrs",
      description:
         "Dedicated to providing compassionate care with over 11 years of clinical experience.",
      image: "/assets/team1.png",
   },
   {
      name: "Dr. Olayemi Adurota, FNP-C",
      role: "FNP-C",
      description:
         "Focused on holistic mental health treatment and patient-centered care.",
      image: "/assets/team2.jpg",
   },
   {
      name: "Dr. Olayemi Adurota, FNP-C",
      role: "FNP-C",
      description:
         "Expert in supporting patients with personalized and evidence-based solutions.",
      image: "/assets/team3.jpg",
   },
   {
      name: "Dr. Olayemi Adurota, FNP-C",
      role: "FNP-C",
      description: "Passionate about guiding individuals to better mental health.",
      image: "/assets/team4.jpg",
   },
];

export default function MeetTheTeam() {
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <section className="py-16 bg-[#f9f9fb]">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="justify-center lg:justify-start space-y-4 mb-12">
               <h2 className="text-4xl font-bold tracking-tight">Meet The Team</h2>
               <p className="text-gray-600 max-w-2xl text-start">
                  Get to know the dedicated professionals at Luminox Mental Health
                  who are committed to supporting your well-being.
               </p>

            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start mb-12">
               <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
               target="_blank"
               rel="noopener noreferrer"
               >
                  <Button
                     size="lg"
                     className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-[#3E757B] text-white"
                  >
                     Book Session
                     <span className="rounded-full bg-white p-2">
                        <ArrowRight className="h-5 w-5 text-black" />
                     </span>
                  </Button>
               </a>

            </div>

            {/* Carousel */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar scroll-snap-x mandatory justify-start">

               {team.map((member, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                     <motion.div
                        key={idx}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className="relative rounded-2xl overflow-hidden shrink-0 cursor-pointer"
                        animate={{
                           width: isActive ? 500 : 200, // expanded vs default
                           height: 420,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                     >
                        {/* Image */}
                        <img
                           src={member.image}
                           alt={member.name}
                           className={`w-full h-full object-cover transition-all duration-300 ${isActive ? "grayscale-0" : "grayscale"
                              }`}
                        />

                        {/* Overlay on hover */}
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: isActive ? 0.6 : 0 }}
                           transition={{ duration: 0.3 }}
                           className="absolute inset-0 bg-[#000000]"
                        />

                        {/* Text content */}
                        <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                           <p className="font-bold">{member.name}</p>
                           <p className="text-sm text-gray-200">{member.role}</p>

                           {/* Show description only if active */}
                           {isActive && (
                              <motion.p
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="text-sm mt-2 text-white"
                              >
                                 {member.description}
                              </motion.p>
                           )}
                        </div>
                     </motion.div>
                  );
               })}
            </div>

            <div className="mt-7">
               <MissionCards />
            </div>
         </div>
      </section>
   );
}
