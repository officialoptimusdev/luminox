import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedSection({ sections = [] }) {
   return (
      <section className="w-full overflow-hidden -mt-[1px]">
         {sections.map((section, idx) => {
            const bg = section.bg || (idx % 2 === 0 ? "#fff" : "#f9fafb");

            return (
               <div
                  key={idx}
                  className="relative w-full h-full mt-5"
                  style={{ backgroundColor: bg }}
               >
                  {/* CONTAINER BOX */}
                  <div className="max-w-8xl mx-auto px-0 relative z-10">
                     <div className="grid grid-cols-1 lg:grid-cols-8 items-center gap-0 lg:gap-4">

                        {/* IMAGE SIDE */}
                        <div
                           className={`relative flex justify-center ${idx % 2 === 0 ? "order-1" : "order-2"
                              } lg:col-span-5`}
                        >
                           <img
                              src={section.image}
                              alt={section.title}
                              className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover block relative z-10 rounded-xl"
                           />
                        </div>

                        {/* TEXT SIDE */}
                        <div
                           className={`relative px-6 ${idx === 0
                                 ? "pt-0 pb-10 lg:pt-0 lg:pb-14"
                                 : "py-10 lg:py-14"
                              } lg:px-10 ${idx % 2 === 0 ? "order-2" : "order-1"
                              } lg:col-span-3 lg:mt-32`}
                        >
                           <div className="absolute inset-0 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none rounded-xl"></div>
                           <div className="relative space-y-6">
                              {section.tagline && (
                                 <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                                    {section.tagline}
                                 </p>
                              )}

                              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                 {section.title}
                              </h2>

                              <p className="text-gray-600 text-lg max-w-md">
                                 {section.description}
                              </p>

                              {section.buttonText && (
                                 <Button
                                    variant="default"
                                    className="rounded-full flex items-center gap-2 px-6 py-3 text-base"
                                    onClick={() => {
                                       if (section.href) {
                                          window.location.href = section.href;
                                       } else if (section.modal) {

                                          if (typeof window !== "undefined") {
                                             const event = new CustomEvent("open-contact-modal");
                                             window.dispatchEvent(event);
                                          }
                                       }
                                    }}
                                 >
                                    {section.buttonText}
                                    <ArrowRight size={18} />
                                 </Button>
                              )}

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            );
         })}
      </section>
   );
}
