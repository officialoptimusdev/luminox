// src/components/ReviewSection.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Quote } from "lucide-react";
import { RiSingleQuotesR } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";


const reviews = [
   { id: 1, name: "Layla Johnson", text: "Lasting Serenity staff are wonderful! They respond to your email very quickly and were able to set me up for my psychiatric evaluation appointment immediately! You won’t be disappointed! Thank you.", avatar: "/assets/avatar3.png" },
   { id: 2, name: "Robert", text: "Dr. Hassan was very professional, compassionate and knowledgeable. This practice & their services come highly recommended.", avatar: "/assets/avatar3.png" },
   { id: 3, name: "Roy", text: "This company is a dream come true. I’ve been struggling with Depression and anxiety for a very long time, and their service really helped.", avatar: "/assets/avatar3.png" },
   { id: 4, name: "Sophia", text: "I can’t say enough good things. Scheduling was easy, the doctor was thorough, and I finally feel heard and cared for.", avatar: "/assets/avatar3.png" },
   { id: 5, name: "Daniel", text: "They made a complicated process so much easier. Highly recommend to anyone who values compassionate care.", avatar: "/assets/avatar3.png" },
];

// Animation variants
const fadeUp = {
   hidden: { opacity: 0, y: 30 },
   visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: i * 0.15,
         duration: 0.6,
         ease: "easeOut",
      },
   }),
};

export default function ReviewSection() {
   return (
      <section className="w-full bg-[#FAF9FD] py-16">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-12">
               <p className="text-sm uppercase tracking-wide text-gray-500">Testimonial</p>
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                  Hear what our <span className="text-black">clients say.</span>
               </h2>
               <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                  Discover what our clients are saying about their experience with Luminox Healthcare Services.
               </p>
            </div>



            <div className="grid lg:grid-cols-2 gap-10">
               {/* Featured Review Column */}
               <div className="flex flex-col items-center">
                  {/* Decorative Icons on top */}
                  <div className="flex flex-col items-center mb-6">
                     <div className="flex flex-col items-center mb-6">
                        <FaHeart className="h-20 w-20 text-[#ccbef4] opacity-80 mb-2" />
                        <RiSingleQuotesR className="h-20 w-20 text-[#ccbef4] opacity-70" />
                     </div>

                  </div>

                  {/* Featured Review */}
                  <Card className="bg-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden border-0 shadow-none w-full">
                     <div className="flex flex-col space-y-6">
                        <div>
                           <div className="flex items-center gap-3 mb-4">
                              <img
                                 src="/assets/avatar3.png"
                                 alt="Keisha Robinson"
                                 className="w-12 h-12 rounded-full object-cover bg-[#ccbef4]"
                              />
                              <h3 className="font-bold text-xl text-gray-900">Keisha Robinson</h3>
                           </div>
                           <p className="text-gray-600 text-sm md:text-md">
                              I just moved to Virginia from California. I have been on the waiting list with my provider for almost 3 years...
                           </p>
                        </div>
                     </div>
                     <div className="mt-6">
                        <Button variant="outline" className="rounded-full">
                           Leave Review
                        </Button>
                     </div>
                  </Card>

               </div>

               {/* Vertical Scroll Reviews with Fade + Animation */}
               <div className="relative h-[500px] overflow-y-auto pr-2 custom-scroll cursor-pointer">
                  <div className="flex flex-col space-y-4">
                     {reviews.map((review, i) => (
                        <motion.div
                           key={review.id}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: true, amount: 0.2 }}
                           variants={fadeUp}
                           custom={i}
                        >
                           <Card className="w-full bg-white rounded-2xl p-5 relative overflow-hidden border-0 shadow-none">
                              {/* Replace Quote with your uploaded SVG */}
                              <img
                                 src="/assets/review-emoji.png"
                                 alt="Review Icon"
                                 className="absolute -top-16 right-2 z-20 rotate-[30deg] opacity-8"
                                 style={{
                                    width: "auto",
                                    height: "auto",
                                 }}
                              />

                              <CardContent className="p-0 relative z-10">
                                 <div className="flex items-center gap-3 mb-3">
                                    <img
                                       src={review.avatar}
                                       alt={review.name}
                                       className="w-10 h-10 rounded-full object-cover bg-[#ccbef4]"
                                    />
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                 </div>
                                 <p className="text-gray-600 text-md">{review.text}</p>
                              </CardContent>
                           </Card>

                        </motion.div>
                     ))}
                  </div>

                  {/* Gradient Fade Overlay */}
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF9FD] to-transparent" />
               </div>
            </div>
         </div>
         {/* Custom Scrollbar Styles */}
         <style>
            {`
    .custom-scroll::-webkit-scrollbar {
      width: 3px;
    }
    .custom-scroll::-webkit-scrollbar-track {
      background: transparent;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: #ccbef4;
      border-radius: 9999px;
      border: 1px solid #ccbef4;
      box-shadow: 0 0 4px rgba(204, 190, 244, 0.6); /* subtle lavender glow */
    }
  `}
         </style>


      </section>
   );
}
