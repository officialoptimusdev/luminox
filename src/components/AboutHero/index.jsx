// import { Button } from "@/components/ui/button"
// import { User2, ArrowRight } from "lucide-react"

// export default function AboutHero() {
//    return (
//       <>
//          <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#e3fcfb]">
//             <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-2 px-6 lg:px-0 pt-0 lg:pt-0 relative z-10">
//                {/* Left Content */}
//                <div className="max-w-xl text-center lg:text-left space-y-5">
//                   {/* Small Label */}
//                   <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-sm font-medium">
//                      <User2 className="h-4 w-4" />
//                      <span>About Us</span>
//                   </div>

//                   {/* Heading */}
//                   <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
//                      Meet Luminox <br /> Healthcare.
//                   </h1>

//                   {/* Subtext */}
//                   <p className="text-gray-700 text-base leading-relaxed">
//                      Luminox Healthcare Services (Mental Health Services) believes in breaking
//                      down barriers to mental health care. That is why we offer compassionate,
//                      accessible, and comprehensive remote mental health services.
//                   </p>

//                   {/* Button */}
//                   <div>
//                      <Button
//                         size="lg"
//                         className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-emerald-300 text-white"
//                      >
//                         Book Session
//                         <span className="rounded-full bg-white p-2">
//                            <ArrowRight className="h-5 w-5 text-black" />
//                         </span>
//                      </Button>
//                   </div>
//                </div>

//                {/* Right Image */}
//                <div className="relative w-full flex justify-center">
//                   <div className="relative w-full">
//                      <img
//                         src="/assets/about-image.png"
//                         alt="Luminox Healthcare"
//                         className="rounded-lg object-cover w-full h-full max-h-[500px] lg:max-h-[600px]"
//                      />
//                   </div>
//                </div>
//             </div>
//          </section>

//          {/* Curved bottom */}
//          <div
//             aria-hidden="true"
//             style={{
//                position: "relative",
//                top: -195,
//                left: 0,
//                width: "100%",
//                display: "flex",
//                justifyContent: "center",
//                alignItems: "flex-start",
//                height: "auto",
//                overflow: "hidden",
//                zIndex: 2,
//                border: "none",
//             }}
//          >
//             <svg
//                width="auto"
//                height="auto"
//                viewBox="0 0 1440 375"
//                xmlns="http://www.w3.org/2000/svg"
//             >
//                <path
//                   d="M0 0L360 90C596.363 149.091 843.637 149.091 1080 90L1440 0L1660 265L1190 315C881.613 393.737 558.387 393.737 250 315L-220 265L0 0Z"
//                   fill="#e3fcfb"
//                />
//             </svg>
//          </div>
//       </>
//    )
// }

import { Button } from "@/components/ui/button"
import { User2, ArrowRight } from "lucide-react"

export default function AboutHero() {
   return (
      <>
         <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#e3fcfb]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-2 px-6 lg:px-0 pt-3 -lg:pt-0 relative z-0">
               {/* Left Content */}
               <div className="max-w-xl text-center lg:text-left space-y-5 mx-auto lg:mx-12">
                  {/* Small Label */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-sm font-medium">
                     <User2 className="h-4 w-4" />
                     <span>About Us</span>
                  </div>

                  {/* Heading */}
                  <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                     Meet Luminox <br /> Healthcare.
                  </h1>

                  {/* Subtext */}
                  <p className="text-gray-700 text-base leading-relaxed">
                     Luminox Healthcare Services (Mental Health Services) believes in breaking
                     down barriers to mental health care. That is why we offer compassionate,
                     accessible, and comprehensive remote mental health services.
                  </p>

                  {/* Button */}
                  <div className="flex justify-center lg:justify-start">
                     <Button
                        size="lg"
                        className="rounded-full px-6 py-7 flex items-center gap-2 bg-[#3E757B] hover:bg-[#3E757B] text-white"
                     >
                        Book Session
                        <span className="rounded-full bg-white p-2">
                           <ArrowRight className="h-5 w-5 text-black" />
                        </span>
                     </Button>
                  </div>
               </div>

               {/* Right Image */}
               <div className="relative w-full flex justify-center">
                  <div className="relative w-full">
                     {/* Desktop Image */}
                     <img
                        src="/assets/about-image.png"
                        alt="Luminox Healthcare"
                        className="hidden sm:block rounded-lg object-cover w-full h-full max-h-[500px] lg:max-h-[600px]"
                     />
                     {/* Mobile Image */}
                     <img
                        src="/assets/about-image.jpg"
                        alt="Luminox Healthcare Mobile"
                        className="block sm:hidden rounded-lg object-cover w-full h-full max-h-[400px]"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Curved bottom */}
         <div
            aria-hidden="true"
            style={{
               position: "relative",
               top: -160,
               left: 0,
               width: "100%",
               display: "flex",
               justifyContent: "center",
               alignItems: "flex-start",
               height: "10%",
               overflow: "hidden",
               zIndex: 2,
               border: "none",
            }}
         >
            <svg
               width="auto"
               height="auto"
               viewBox="0 0 1440 375"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M0 0L360 90C596.363 149.091 843.637 149.091 1080 90L1440 0L1660 265L1190 315C881.613 393.737 558.387 393.737 250 315L-220 265L0 0Z"
                  fill="#e3fcfb"
               />
            </svg>
         </div>
      </>
   )
}
