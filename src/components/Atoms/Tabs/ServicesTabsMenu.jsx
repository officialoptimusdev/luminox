import { Tab } from "@headlessui/react";
import { useState } from "react";
import ServicesCards from "../../Cards/SevicesCards";
import PricingCards from "../../Cards/PricingCards";
import { megaMenuData, pricingData } from "@/constants/data";
import LocationsCard from "../../Cards/LocationsCard";
import ExtraPricingNoteCard from "../../Cards/ExtraPricingNoteCard";
import { ArrowRight } from "lucide-react";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const ServicesTabsMenu = () => {
   const [categories] = useState({
      Services: megaMenuData,
      "Pricing List": pricingData,
   });

   return (
      <div className="w-full px-4 py-8">
         <div className="max-w-7xl mx-auto">
            <Tab.Group>
               {/* Tab Buttons */}
               <Tab.List className="flex space-x-2 rounded-full bg-gray-200 p-2 w-fit mx-auto">
                  {Object.keys(categories).map((category) => (
                     <Tab
                        key={category}
                        className={({ selected }) =>
                           classNames(
                              "px-6 py-2 text-sm leading-5 font-medium rounded-full",
                              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-200 ring-white ring-opacity-60",
                              selected
                                 ? "bg-white shadow text-gray-900"
                                 : "text-gray-600 hover:bg-white/[0.12] hover:text-gray-800"
                           )
                        }
                     >
                        {category}
                     </Tab>
                  ))}
               </Tab.List>

               {/* Tab Panels */}
               <Tab.Panels className="mt-8">
                  <Tab.Panel>
                     <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
                        {/* Big left card */}
                        <div className="col-span-1 md:col-span-2 md:row-span-2">
                           <ServicesCards
                              service={categories["Services"][0]}
                              variant="card"
                           />
                        </div>

                        {/* Three smaller cards (top-right) */}
                        <ServicesCards
                           service={categories["Services"][1]}
                           variant="card"
                        />
                        <ServicesCards
                           service={categories["Services"][4]}
                           variant="card"
                        />
                        <ServicesCards
                           service={categories["Services"][7]}
                           variant="card"
                        />

                        {/* Compact list */}
                        <div className="col-span-1 md:col-span-3 bg-white rounded-2xl p-6 max-h-60 overflow-y-auto">
                           <h4 className="text-sm font-semibold text-gray-500 mb-4">
                              Services{" "}
                              <span className="ml-2 text-xs text-gray-400">
                                 See more services.
                              </span>
                           </h4>
                           {categories["Services"]
                              .slice(0, 8)
                              .map((service) => (
                                 <ServicesCards
                                    key={service.id}
                                    service={service}
                                    variant="list"
                                 />
                              ))}
                        </div>
                     </div>

                     {/* Locations */}
                  
                   
<LocationsCard />
                  </Tab.Panel>

                  {/* Pricing Panel */}
                  <Tab.Panel>
                     <div className="grid grid-cols-1  md:grid-cols-5 md:grid-rows-1 gap-3">
                        {/* Featured Big Left Card */}
                        <div className="col-span-1 md:col-span-2 md:row-span-2">
                           <PricingCards
                              pricing={categories["Pricing List"][0]}
                              variant="featured"
                           />
                        </div>

                        {/* Others / Compact Pricing List */}
                        <div className="md:col-span-3 col-span-1 bg-white rounded-2xl p-6 max-h-60 overflow-y-auto">
                           <h4 className="text-sm font-semibold text-gray-500 mb-4">
                              Others{" "}
                              <span className="ml-2 text-xs text-gray-400">
                                 Scroll to reveal more pricing.
                              </span>
                           </h4>
                           {categories["Pricing List"]
                              .slice(0, 5) // adjust indexes for your data
                              .map((pricing) => (
                                 <div
                                    key={pricing.id}
                                    className="flex justify-between items-center border-b border-gray-200 py-3"
                                 >
                                    <div>
                                       <h3 className="text-base font-semibold">{pricing.price}</h3>
                                       <p className="text-sm text-gray-600">{pricing.title}</p>
                                    </div>
                                    <a href="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_101680">
                                    <button className="inline-flex items-center text-sm font-medium hover:underline">
                                       Book Session <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                    </a>
                                  
                                 </div>
                              ))}
                        </div>
                        {/* Three Smaller Cards */}
                        {categories["Pricing List"].slice(1, 4).map((pricing) => (
                           <PricingCards key={pricing.id} pricing={pricing} />
                        ))}
                     </div>

                     {/* Extra Note Underneath */}
                     <ExtraPricingNoteCard />
                  </Tab.Panel>

               </Tab.Panels>
            </Tab.Group>
         </div>
      </div>
   );
};

export default ServicesTabsMenu;
