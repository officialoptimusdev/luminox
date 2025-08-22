import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedSection({ sections = [] }) {
   return (
      <section className="w-full overflow-hidden -mt-[1px]">
         {sections.map((section, idx) => {
            const bg = section.bg || (idx % 2 === 0 ? "#fff" : "#f9fafb");

            // derive JPG path for mobile (same name but .jpg)
            const mobileImage = section.image.replace(".png", ".jpg");

            return (
               <div
                  key={idx}
                  className="relative w-full h-full"
                  style={{ backgroundColor: bg }}
               >
                  {/* TOP CURVE — only for the FIRST section */}
                  {idx === 0 && (
                     <div
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0"
                     >
                        <svg
                           className="block w-full h-40"
                           xmlns="http://www.w3.org/2000/svg"
                           preserveAspectRatio="none"
                           viewBox="0 0 1440 320"
                        >
                           <path
                              d="M0,128L360,192C600,256 840,256 1080,192L1440,128L1440,0L0,0Z"
                              fill="#000000"
                           />
                        </svg>
                     </div>
                  )}

                  {/* CONTAINER BOX */}
                  <div className="max-w-8xl mx-auto px-0 relative z-10">
                     <div className="grid grid-cols-1 lg:grid-cols-8 items-center gap-0 lg:gap-4">
                        {/* IMAGE SIDE */}
                        <div
                           className={`relative w-full ${idx % 2 === 0 ? "order-1" : "order-2"
                              } lg:col-span-5`}
                        >
                           <picture>
                              {/* Mobile/jpg version */}
                              <source media="(max-width: 1024px)" srcSet={mobileImage} />
                              {/* Default/desktop png */}
                              <img
                                 src={section.image}
                                 alt={section.title}
                                 className="w-full h-full object-cover block relative z-10"
                              />
                           </picture>
                        </div>

                        {/* TEXT SIDE */}
                        <div
                           className={`relative px-6 ${idx === 0
                                 ? "pt-0 pb-10 lg:pt-0 lg:pb-14"
                                 : "py-10 lg:py-14"
                              } lg:px-10 ${idx % 2 === 0 ? "order-2" : "order-1"
                              } lg:col-span-3 lg:mt-32`} // margin-top on desktop
                        >
                           <div className="absolute inset-0 bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none rounded-xl"></div>
                           <div className="relative space-y-6">
                              {section.tagline && (
                                 <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                                    {section.tagline}
                                 </p>
                              )}

                              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                 {section.title}
                              </h2>

                              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                 {section.description}
                              </p>

                              {section.buttonText && (
                                 <Button
                                    variant="default"
                                    className="rounded-full flex items-center gap-2 px-6 py-3 text-base"
                                 >
                                    {section.buttonText}
                                    <ArrowRight size={18} />
                                 </Button>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* BOTTOM CURVE */}
                  <div
                     aria-hidden="true"
                     className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
                  >
                     <svg
                        className="block w-full h-20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 150"
                     >
                        <path
                           d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,128C672,139,768,149,864,154.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L0,0Z"
                           fill={bg}
                        />
                     </svg>
                  </div>
               </div>
            );
         })}
      </section>
   );
}
