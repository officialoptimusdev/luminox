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
         "Dedicated to providing compassionate care with over 11 years of clinical experience. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      image: "/assets/team1.jpeg",
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
   const [isActive, setIsActive] = useState(false);
   const member = team[0]; //  only the first team member

   return (
      <section className="py-16 bg-[#f9f9fb]">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="justify-center lg:justify-start space-y-4 mb-12">
               <h2 className="text-4xl font-bold tracking-tight">Need a licensed medical practitioner?</h2>
               <p className="text-gray-600 max-w-2xl text-start">
                  Get to know the dedicated professionals at Luminox Mental Health
                  who are committed to supporting your well-being.
               </p>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start mb-12">
               <a
                  href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680"
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
            {/* Single Team Member */}
            <motion.div
               onMouseEnter={() => setIsActive(true)}
               onMouseLeave={() => setIsActive(false)}
               className="
    relative rounded-2xl overflow-hidden cursor-pointer
    mx-auto md:mx-0 scrollbar-hide
  "
               animate={{
                  width: isActive ? "100%" : (window.innerWidth < 768 ? 300 : 350),
                  height: 420,
               }}
               transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
               {/* Image */}
               <img
                  src={member.image}
                  alt={member.name}
                  className={`w-auto h-auto object-cover transition-all duration-300 ${isActive ? "grayscale-0" : "grayscale-0"
                     }`}
               />

               {/* Overlay */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 0.6 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black"
               />

               {/* Text (scrollable, hidden scrollbar) */}
               <div
                  className="
      absolute bottom-0 left-0 right-0
      text-white z-10
      p-4
      max-h-40
      overflow-y-auto
      scrollbar-hide
    "
               >
                  <p className={`font-bold  ${isActive ? "text-white " : "text-black"}`}>{member.name}</p>
                  <p className={`text-sm  ${isActive ? "text-white " : "text-black"}`}>{member.role}</p>

                  {isActive && (
                     <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm mt-2 text-white leading-relaxed"
                     >
                        {member.description}
                     </motion.p>
                  )}
               </div>
            </motion.div>



            <div className="mt-7">
               <MissionCards />
            </div>
         </div>
      </section>
   );
}
