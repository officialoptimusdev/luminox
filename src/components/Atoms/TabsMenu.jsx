import { Tab } from "@headlessui/react";
import { useState } from "react";
import ServicesCards from "../Cards/SevicesCards";
import PricingCards from "../Cards/PricingCards";
import { megaMenuData, pricingData } from "@/constants/data";
import LocationsCard from "../LocationsCard";

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
  <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:grid-rows-2">
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
      service={categories["Services"][15]}
      variant="card"
    />

    {/* Compact list */}
    <div className="col-span-1 md:col-span-3 bg-white rounded-2xl p-6">
      <h4 className="text-sm font-semibold text-gray-500 mb-4">
        Services{" "}
        <span className="ml-2 text-xs text-gray-400">
         See more services.
        </span>
      </h4>
      {categories["Services"]
        .slice(2, 4)
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
  <div className="mt-4">
    <LocationsCard />
  </div>
</Tab.Panel>

                  {/* Pricing Panel */}
                  <Tab.Panel>
                     {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {categories["Pricing List"].map((pricing) => (
                           <PricingCards key={pricing.id} pricing={pricing} />
                        ))}
                     </div> */}
                  </Tab.Panel>
               </Tab.Panels>
            </Tab.Group>
         </div>
      </div>
   );
};

export default TabsMenu;
