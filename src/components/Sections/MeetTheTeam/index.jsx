import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MissionCards from "../../Cards/MissionCards";

const team = [
   {
      name: "About Dr. Olayemi Adurota, DNP, PMHNP-BC, FNP-C",
      role: "Nurse Practitioner / 11yrs",
      description:
         "As a highly accomplished Doctor of Nursing Practice with dual certification in family and psychiatry, I possess a wealth of experience that sets me apart as a healthcare provider. With a career that dates back to 2012, I began my journey at the prestigious Johns Hopkins Hospital, where I dedicated myself to the specialized fields of eating disorders and affective disorders. In my practice, I bring not only intelligence and expertise but also a genuine sense of empathy. Your well-being and recovery are paramount to me, and I am fully committed to providing you with exceptional care rooted in understanding and compassion. When you choose me as your provider, you can have confidence that your care will be personalized to meet your unique needs. I will guide you through your journey to health and well-being, ensuring that you feel heard, supported, and empowered at every step. Let us embark on this transformative journey together, where your health and happiness are our top priorities.",
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
               <h2 className="text-4xl font-bold tracking-tight">Behind the Care: Dr. Olayemi Adurota</h2>
               <p className="text-gray-600 max-w-2xl text-start">
                  Here to listen, guide, and support.
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
