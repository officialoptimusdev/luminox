import { Tab } from "@headlessui/react";
import { useState } from "react";
import ServicesCards from "../Cards/SevicesCards";
import PricingCards from "../Cards/PricingCards";
import { megaMenuData, pricingData } from "@/constants/data";


function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const TabsMenu = () => {
   const [categories] = useState({
      Services: megaMenuData,
      "Pricing List": pricingData,
   });

   return (
      <div className="w-full px-4 py-8">
         <Tab.Group>
            <Tab.List className="flex space-x-2 rounded-xl bg-gray-200 p-2 max-w-md mx-auto">
               {Object.keys(categories).map((category) => (
                  <Tab
                     key={category}
                     className={({ selected }) =>
                        classNames(
                           "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
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
            <Tab.Panels className="mt-6">
               <Tab.Panel>
                  {/* Top grid layout */}
                  <div className="grid grid-cols-4 gap-3">
                     {/* Addiction Treatment (spans 2 cols) */}
                     <div className="col-span-2 row-span-2 h-full">
                        <ServicesCards
                           service={categories["Services"][0]}
                           variant="card"
                        />
                     </div>

                     <ServicesCards
                        service={categories["Services"][1]}
                        variant="card"
                     />

                     {/* Follow-Up & Monitoring */}
                     <ServicesCards
                        service={categories["Services"][4]}
                        variant="card"
                     />

                     {/* Support for Specific Conditions */}
                     <div className="col-span-1">
                        <ServicesCards
                           service={categories["Services"][15]} // <- adjust index if needed
                           variant="card"
                        />
                     </div>
                  </div>

                  {/* List style section */}
                  <div className="mt-6 bg-white rounded-2xl shadow p-6">
                     <h4 className="text-sm font-semibold text-gray-500 mb-4">
                        Services <span className="ml-2 text-xs text-gray-400">Scroll to reveal more services.</span>
                     </h4>
                     {categories["Services"].slice(2, 4).map((service) => (
                        <ServicesCards key={service.id} service={service} variant="list" />
                     ))}
                  </div>
               </Tab.Panel>


               <Tab.Panel>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                     {categories["Pricing List"].map((pricing) => (
                        <PricingCards key={pricing.id} pricing={pricing} />
                     ))}
                  </div>
               </Tab.Panel>
            </Tab.Panels>
         </Tab.Group>
      </div>
   );
};

export default TabsMenu;
